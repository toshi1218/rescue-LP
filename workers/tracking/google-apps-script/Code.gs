/**
 * IGRS multichannel bridge
 * D1 -> Pipeline / messages / ChannelLog.
 * Gmail -> D1 is opt-in and disabled by default.
 *
 * Script properties required:
 *   CRM_BASE_URL       https://tracking.ph-document.com
 *   CRM_INGEST_SECRET  same value as the Worker secret
 * Optional:
 *   SHEET_ID            defaults to the bound spreadsheet
 *   ENABLE_GMAIL_INGEST  set to "true" only when Gmail import is required
 *   GMAIL_LOOKBACK_DAYS  defaults to 30 on first Gmail import
 */

const IGRS = {
  pipeline: 'Pipeline',
  messages: 'messages',
  channelLog: 'ChannelLog',
  defaultBaseUrl: 'https://tracking.ph-document.com',
  pageSize: 100,
  maxThreadsPerRun: 500,
  overlapMs: 24 * 60 * 60 * 1000,
};

function installIgrsAutomation() {
  validateConfiguration_();
  const handler = 'runIgrsAutomation';
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === handler)
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger(handler).timeBased().everyMinutes(15).create();
  runIgrsAutomation();
}

function runIgrsAutomation() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    validateConfiguration_();
    const gmailEnabled = PropertiesService.getScriptProperties()
      .getProperty('ENABLE_GMAIL_INGEST') === 'true';
    if (gmailEnabled) syncGmailToD1_();
    syncD1ToSheets_();
    PropertiesService.getScriptProperties().setProperty('IGRS_LAST_SUCCESS_MS', String(Date.now()));
  } finally {
    lock.releaseLock();
  }
}

function validateConfiguration_() {
  const p = PropertiesService.getScriptProperties();
  if (!p.getProperty('CRM_INGEST_SECRET')) throw new Error('CRM_INGEST_SECRET is not configured');
  const ss = getSpreadsheet_();
  [IGRS.pipeline, IGRS.messages, IGRS.channelLog].forEach(name => {
    if (!ss.getSheetByName(name)) throw new Error('Missing sheet: ' + name);
  });
}

function getSpreadsheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}

function config_() {
  const p = PropertiesService.getScriptProperties();
  return {
    baseUrl: (p.getProperty('CRM_BASE_URL') || IGRS.defaultBaseUrl).replace(/\/$/, ''),
    secret: p.getProperty('CRM_INGEST_SECRET'),
  };
}

function ownEmails_() {
  const all = [Session.getActiveUser().getEmail()].concat(GmailApp.getAliases());
  return new Set(all.map(v => String(v || '').trim().toLowerCase()).filter(Boolean));
}

function parseMailbox_(raw) {
  const text = String(raw || '').trim();
  const match = text.match(/^(.*)<([^>]+)>$/);
  const email = (match ? match[2] : text).trim().toLowerCase();
  const name = (match ? match[1] : '').replace(/^\s*["']|["']\s*$/g, '').trim();
  return { email, name };
}

function splitMailboxes_(raw) {
  return String(raw || '').split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(parseMailbox_).filter(x => x.email);
}

function syncGmailToD1_() {
  const props = PropertiesService.getScriptProperties();
  const lastMs = Number(props.getProperty('GMAIL_LAST_SYNC_MS')) || 0;
  const lookbackDays = Number(props.getProperty('GMAIL_LOOKBACK_DAYS')) || 30;
  const startMs = lastMs ? Math.max(0, lastMs - IGRS.overlapMs) : Date.now() - lookbackDays * 86400000;
  const queryDate = Utilities.formatDate(new Date(startMs), Session.getScriptTimeZone(), 'yyyy/MM/dd');
  const query = 'after:' + queryDate + ' -in:spam -in:trash';
  const own = ownEmails_();
  let newestMs = lastMs;
  let start = 0;

  while (start < IGRS.maxThreadsPerRun) {
    const threads = GmailApp.search(query, start, IGRS.pageSize);
    if (!threads.length) break;
    threads.forEach(thread => {
      thread.getMessages().forEach(message => {
        const occurredAt = message.getDate().getTime();
        if (occurredAt < startMs) return;
        const sender = parseMailbox_(message.getFrom());
        const recipients = splitMailboxes_([message.getTo(), message.getCc()].filter(Boolean).join(','));
        const outbound = own.has(sender.email);
        const customer = outbound ? recipients.find(r => !own.has(r.email)) : sender;
        if (!customer || !customer.email) return;
        const payload = {
          channel: 'email',
          external_user_id: customer.email,
          external_thread_id: 'gmail:' + thread.getId(),
          provider_message_id: message.getId(),
          direction: outbound ? 'outbound' : 'inbound',
          body: message.getPlainBody().slice(0, 20000),
          message_type: 'email',
          occurred_at: occurredAt,
          display_name: customer.name || customer.email,
          email: customer.email,
          raw_json: { subject: message.getSubject(), from: message.getFrom(), to: message.getTo(), cc: message.getCc() },
        };
        postJson_('/api/crm/ingest', payload);
        newestMs = Math.max(newestMs, occurredAt);
      });
    });
    start += threads.length;
    if (threads.length < IGRS.pageSize) break;
  }
  if (newestMs) props.setProperty('GMAIL_LAST_SYNC_MS', String(newestMs));
}

function syncD1ToSheets_() {
  const props = PropertiesService.getScriptProperties();
  let cursor = Number(props.getProperty('CRM_SHEET_CURSOR')) || 0;
  let snapshot;
  do {
    snapshot = getJson_('/api/crm/snapshot?after_message_id=' + cursor + '&limit=1000');
    appendMessages_(snapshot.messages || []);
    cursor = Number(snapshot.next_message_id) || cursor;
    props.setProperty('CRM_SHEET_CURSOR', String(cursor));
  } while ((snapshot.messages || []).length === 1000);
  upsertPipeline_(snapshot.cases || [], snapshot.conversations || []);
}

function appendMessages_(messages) {
  if (!messages.length) return;
  const ss = getSpreadsheet_();
  const messageSheet = ss.getSheetByName(IGRS.messages);
  const logSheet = ss.getSheetByName(IGRS.channelLog);
  const last = messageSheet.getLastRow();
  const existingIds = new Set(last > 1 ? messageSheet.getRange(2, 9, last - 1, 1).getDisplayValues().flat() : []);
  const fresh = messages.filter(m => !existingIds.has(String(m.provider_message_id)));
  if (!fresh.length) return;

  const messageRows = fresh.map(m => [
    new Date(Number(m.occurred_at)), channelLabel_(m.channel), String(m.direction).toUpperCase(),
    m.case_key || '', m.external_thread_id || '', m.display_name || m.sender_external_id || '',
    m.message_type || 'text', String(m.body || '').slice(0, 20000), m.provider_message_id,
  ]);
  messageSheet.getRange(messageSheet.getLastRow() + 1, 1, messageRows.length, 9).setValues(messageRows);

  const logRows = fresh.map(m => {
    const inbound = m.direction === 'inbound';
    return [
      new Date(Number(m.occurred_at)), m.display_name || m.sender_external_id || '', channelLabel_(m.channel),
      String(m.direction).toUpperCase(), String(m.body || '[' + (m.message_type || 'message') + ']').slice(0, 500),
      inbound ? 'IGRS' : 'CUSTOMER', inbound, inbound ? '内容を確認して返信' : '顧客の返信待ち',
      m.provider_message_id, 'D1 Auto Sync',
    ];
  });
  logSheet.getRange(logSheet.getLastRow() + 1, 1, logRows.length, 10).setValues(logRows);
}

function upsertPipeline_(cases, conversations) {
  const sheet = getSpreadsheet_().getSheetByName(IGRS.pipeline);
  const lastRow = sheet.getLastRow();
  const keys = lastRow > 1 ? sheet.getRange(2, 34, lastRow - 1, 1).getDisplayValues().flat() : [];
  const rowByKey = new Map();
  keys.forEach((key, i) => { if (key) rowByKey.set(key, i + 2); });
  const channelState = new Map();
  conversations.forEach(c => {
    if (!c.case_key) return;
    const state = channelState.get(c.case_key) || {};
    const label = c.last_direction === 'inbound' ? '要返信' : c.last_direction === 'outbound' ? '返信待ち' : '';
    state[c.channel] = label;
    channelState.set(c.case_key, state);
  });

  cases.forEach(item => {
    let row = rowByKey.get(item.case_key);
    const isNew = !row;
    if (isNew) {
      row = sheet.getLastRow() + 1;
      const initial = new Array(34).fill('');
      initial[0] = new Date(Number(item.created_at));
      initial[1] = item.display_name || item.primary_email || item.primary_phone || item.case_key;
      initial[3] = item.service || '';
      initial[4] = channelLabel_(item.last_channel);
      initial[33] = item.case_key;
      sheet.getRange(row, 1, 1, 34).setValues([initial]);
      rowByKey.set(item.case_key, row);
    }
    const statuses = channelState.get(item.case_key) || {};
    sheet.getRange(row, 27, 1, 8).setValues([[
      item.stage || 'NEW', Number(item.progress) || 0, item.ball_holder || 'IGRS',
      channelLabel_(item.last_channel), statuses.email || '', statuses.whatsapp || '', statuses.line || '', item.case_key,
    ]]);
    if (item.next_action) sheet.getRange(row, 11).setValue(item.next_action);
    if (item.follow_up_at) sheet.getRange(row, 12).setValue(new Date(Number(item.follow_up_at)));
    if (item.last_contact_at) sheet.getRange(row, 20).setValue(new Date(Number(item.last_contact_at)));
    if (!isNew && item.display_name && !sheet.getRange(row, 2).getValue()) sheet.getRange(row, 2).setValue(item.display_name);
  });
}

function channelLabel_(channel) {
  return channel === 'whatsapp' ? 'WhatsApp' : channel === 'line' ? 'LINE' : channel === 'email' ? 'Email' : '';
}

function postJson_(path, payload) {
  const c = config_();
  const response = UrlFetchApp.fetch(c.baseUrl + path, {
    method: 'post', contentType: 'application/json', payload: JSON.stringify(payload),
    headers: { Authorization: 'Bearer ' + c.secret }, muteHttpExceptions: true,
  });
  if (response.getResponseCode() >= 300) throw new Error(path + ' failed: ' + response.getContentText().slice(0, 500));
  return JSON.parse(response.getContentText());
}

function getJson_(path) {
  const c = config_();
  const response = UrlFetchApp.fetch(c.baseUrl + path, {
    headers: { Authorization: 'Bearer ' + c.secret }, muteHttpExceptions: true,
  });
  if (response.getResponseCode() >= 300) throw new Error(path + ' failed: ' + response.getContentText().slice(0, 500));
  return JSON.parse(response.getContentText());
}
