import { safeEqual } from './ids';

export type Channel = 'email' | 'whatsapp' | 'line';
type Direction = 'inbound' | 'outbound';
type BallHolder = 'IGRS' | 'CUSTOMER' | 'EXTERNAL' | 'NONE';

export type CrmBindings = {
  DB: D1Database;
  CRM_INGEST_SECRET?: string;
  WHATSAPP_VERIFY_TOKEN?: string;
  WHATSAPP_APP_SECRET?: string;
  WHATSAPP_ACCESS_TOKEN?: string;
  WHATSAPP_PHONE_NUMBER_ID?: string;
  WHATSAPP_GRAPH_VERSION?: string;
  LINE_CHANNEL_SECRET?: string;
  LINE_CHANNEL_ACCESS_TOKEN?: string;
};

type IncomingMessage = {
  channel: Channel;
  external_user_id: string;
  external_thread_id: string;
  provider_message_id: string;
  direction: Direction;
  body?: string;
  message_type?: string;
  occurred_at: number;
  display_name?: string;
  email?: string;
  phone?: string;
  case_key?: string;
  service?: string;
  raw_json?: unknown;
  stage?: string;
  progress?: number;
  ball_holder?: BallHolder;
  next_action?: string;
  follow_up_at?: number | null;
};

const TERMINAL_STAGES = new Set(['PAID', 'DONE', 'CANCELLED', 'LOST']);
const textEncoder = new TextEncoder();

function json(data: unknown, status = 200): Response {
  return Response.json(data, { status });
}

function nowMs(): number {
  return Date.now();
}

function normalizeEmail(value?: string): string | undefined {
  const v = value?.trim().toLowerCase();
  return v && v.includes('@') ? v : undefined;
}

function normalizePhone(value?: string): string | undefined {
  if (!value) return undefined;
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 ? digits : undefined;
}

function preview(value?: string): string {
  return (value ?? '').replace(/\s+/g, ' ').trim().slice(0, 240);
}

function clampProgress(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function bytesToHex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, '0')).join('');
}

function bytesToBase64(bytes: ArrayBuffer): string {
  let binary = '';
  for (const b of new Uint8Array(bytes)) binary += String.fromCharCode(b);
  return btoa(binary);
}

async function hmac(body: string, secret: string, format: 'hex' | 'base64'): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    textEncoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, textEncoder.encode(body));
  return format === 'hex' ? bytesToHex(signature) : bytesToBase64(signature);
}

async function verifyWhatsAppSignature(body: string, header: string | null, secret?: string): Promise<boolean> {
  if (!secret || !header?.startsWith('sha256=')) return false;
  const expected = `sha256=${await hmac(body, secret, 'hex')}`;
  return safeEqual(expected, header);
}

async function verifyLineSignature(body: string, header: string | null, secret?: string): Promise<boolean> {
  if (!secret || !header) return false;
  return safeEqual(await hmac(body, secret, 'base64'), header);
}

function requireIngestSecret(req: Request, env: CrmBindings): boolean {
  const configured = env.CRM_INGEST_SECRET;
  if (!configured) return false;
  const header = req.headers.get('authorization') ?? '';
  const supplied = header.startsWith('Bearer ') ? header.slice(7) : '';
  return supplied.length > 0 && safeEqual(supplied, configured);
}

async function resolveContact(env: CrmBindings, input: IncomingMessage): Promise<number> {
  const email = normalizeEmail(input.email);
  const phone = normalizePhone(input.phone);
  const externalId = input.external_user_id.trim();
  const existingIdentity = await env.DB.prepare(
    `SELECT contact_id FROM crm_identities WHERE channel = ? AND external_id = ?`,
  ).bind(input.channel, externalId).first<{ contact_id: number }>();

  let contactId = existingIdentity?.contact_id;
  if (!contactId && email) {
    contactId = (await env.DB.prepare(
      `SELECT id FROM crm_contacts WHERE lower(primary_email) = ? ORDER BY id ASC LIMIT 1`,
    ).bind(email).first<{ id: number }>())?.id;
  }
  if (!contactId && phone) {
    contactId = (await env.DB.prepare(
      `SELECT id FROM crm_contacts WHERE primary_phone = ? ORDER BY id ASC LIMIT 1`,
    ).bind(phone).first<{ id: number }>())?.id;
  }

  const now = nowMs();
  if (!contactId) {
    const created = await env.DB.prepare(
      `INSERT INTO crm_contacts (display_name, primary_email, primary_phone, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?)`,
    ).bind(input.display_name?.trim() || null, email ?? null, phone ?? null, now, now).run();
    contactId = Number(created.meta.last_row_id);
  } else {
    await env.DB.prepare(
      `UPDATE crm_contacts
       SET display_name = COALESCE(NULLIF(?, ''), display_name),
           primary_email = COALESCE(?, primary_email),
           primary_phone = COALESCE(?, primary_phone),
           updated_at = ?
       WHERE id = ?`,
    ).bind(input.display_name ?? '', email ?? null, phone ?? null, now, contactId).run();
  }

  await env.DB.prepare(
    `INSERT INTO crm_identities (contact_id, channel, external_id, display_name, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(channel, external_id) DO UPDATE SET
       display_name = COALESCE(NULLIF(excluded.display_name, ''), crm_identities.display_name),
       updated_at = excluded.updated_at`,
  ).bind(contactId, input.channel, externalId, input.display_name ?? null, now, now).run();
  return contactId;
}

async function resolveConversation(env: CrmBindings, contactId: number, input: IncomingMessage): Promise<number> {
  const existing = await env.DB.prepare(
    `SELECT id FROM crm_conversations WHERE channel = ? AND external_thread_id = ?`,
  ).bind(input.channel, input.external_thread_id).first<{ id: number }>();
  if (existing) return existing.id;

  const now = nowMs();
  const created = await env.DB.prepare(
    `INSERT INTO crm_conversations
       (contact_id, channel, external_thread_id, status, ball_holder, created_at, updated_at)
     VALUES (?, ?, ?, 'OPEN', 'IGRS', ?, ?)`,
  ).bind(contactId, input.channel, input.external_thread_id, now, now).run();
  return Number(created.meta.last_row_id);
}

async function resolveCase(env: CrmBindings, contactId: number, conversationId: number, input: IncomingMessage): Promise<number> {
  let row: { id: number; case_key: string } | null = null;
  if (input.case_key) {
    row = await env.DB.prepare(`SELECT id, case_key FROM crm_cases WHERE case_key = ?`)
      .bind(input.case_key).first<{ id: number; case_key: string }>();
  }
  if (!row) {
    row = await env.DB.prepare(
      `SELECT ca.id, ca.case_key
       FROM crm_cases ca
       JOIN crm_case_conversations cc ON cc.case_id = ca.id
       WHERE cc.conversation_id = ?
       ORDER BY ca.updated_at DESC LIMIT 1`,
    ).bind(conversationId).first<{ id: number; case_key: string }>();
  }
  if (!row) {
    row = await env.DB.prepare(
      `SELECT id, case_key FROM crm_cases
       WHERE contact_id = ? AND stage NOT IN ('DONE','CANCELLED','LOST')
       ORDER BY updated_at DESC LIMIT 1`,
    ).bind(contactId).first<{ id: number; case_key: string }>();
  }

  const now = nowMs();
  let caseId = row?.id;
  if (!caseId) {
    const key = input.case_key || `contact-${contactId}`;
    const created = await env.DB.prepare(
      `INSERT INTO crm_cases
       (contact_id, case_key, service, stage, progress, ball_holder, next_action, last_channel,
        last_contact_at, created_at, updated_at)
       VALUES (?, ?, ?, 'NEW', 5, 'IGRS', '内容を確認して返信', ?, NULL, ?, ?)`,
    ).bind(contactId, key, input.service ?? null, input.channel, now, now).run();
    caseId = Number(created.meta.last_row_id);
  }

  await env.DB.prepare(
    `INSERT OR IGNORE INTO crm_case_conversations (case_id, conversation_id) VALUES (?, ?)`,
  ).bind(caseId, conversationId).run();
  return caseId;
}

async function updateLatestState(
  env: CrmBindings,
  conversationId: number,
  caseId: number,
  input: IncomingMessage,
): Promise<void> {
  const derivedBall: BallHolder = input.direction === 'inbound' ? 'IGRS' : 'CUSTOMER';
  const ball = input.ball_holder ?? derivedBall;
  const derivedStage = input.direction === 'inbound' ? 'INQUIRY' : 'AWAITING_CUSTOMER';
  const derivedProgress = input.direction === 'inbound' ? 10 : 20;
  const nextAction = input.next_action ?? (input.direction === 'inbound' ? '内容を確認して返信' : '顧客の返信待ち');
  const at = input.occurred_at;
  const now = nowMs();

  await env.DB.prepare(
    `UPDATE crm_conversations
     SET status = CASE WHEN ? = 'NONE' THEN 'CLOSED' ELSE 'OPEN' END,
         ball_holder = ?, last_direction = ?, last_message_at = ?,
         last_message_preview = ?, updated_at = ?
     WHERE id = ? AND (last_message_at IS NULL OR last_message_at <= ?)`,
  ).bind(ball, ball, input.direction, at, preview(input.body), now, conversationId, at).run();

  const current = await env.DB.prepare(
    `SELECT stage, progress, last_contact_at FROM crm_cases WHERE id = ?`,
  ).bind(caseId).first<{ stage: string; progress: number; last_contact_at: number | null }>();
  if (!current || (current.last_contact_at !== null && current.last_contact_at > at)) return;

  const explicitStage = input.stage?.trim().toUpperCase();
  const stage = explicitStage || (TERMINAL_STAGES.has(current.stage) ? current.stage : derivedStage);
  const progress = input.progress === undefined
    ? (TERMINAL_STAGES.has(current.stage) ? current.progress : Math.max(current.progress, derivedProgress))
    : clampProgress(input.progress);
  const finalBall: BallHolder = TERMINAL_STAGES.has(stage) ? 'NONE' : ball;
  const finalNextAction = TERMINAL_STAGES.has(stage) ? null : nextAction;

  await env.DB.prepare(
    `UPDATE crm_cases SET
       service = COALESCE(NULLIF(?, ''), service), stage = ?, progress = ?, ball_holder = ?,
       next_action = ?, follow_up_at = ?, last_channel = ?, last_contact_at = ?, updated_at = ?
     WHERE id = ? AND (last_contact_at IS NULL OR last_contact_at <= ?)`,
  ).bind(
    input.service ?? '', stage, progress, finalBall, finalNextAction,
    input.follow_up_at ?? null, input.channel, at, now, caseId, at,
  ).run();
}

async function recordMessage(env: CrmBindings, input: IncomingMessage): Promise<{ duplicate: boolean; message_id?: number }> {
  const contactId = await resolveContact(env, input);
  const conversationId = await resolveConversation(env, contactId, input);
  const caseId = await resolveCase(env, contactId, conversationId, input);
  const inserted = await env.DB.prepare(
    `INSERT OR IGNORE INTO crm_messages
       (conversation_id, channel, provider_message_id, direction, sender_external_id,
        message_type, body, occurred_at, raw_json, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).bind(
    conversationId,
    input.channel,
    input.provider_message_id,
    input.direction,
    input.external_user_id,
    input.message_type ?? 'text',
    input.body ?? null,
    input.occurred_at,
    input.raw_json === undefined ? null : JSON.stringify(input.raw_json),
    nowMs(),
  ).run();

  if (!inserted.meta.changes) return { duplicate: true };
  await updateLatestState(env, conversationId, caseId, input);
  return { duplicate: false, message_id: Number(inserted.meta.last_row_id) };
}

function validChannel(value: unknown): value is Channel {
  return value === 'email' || value === 'whatsapp' || value === 'line';
}

function validDirection(value: unknown): value is Direction {
  return value === 'inbound' || value === 'outbound';
}

async function handleGenericIngest(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireIngestSecret(req, env)) return json({ error: 'unauthorized' }, 401);
  let body: Partial<IncomingMessage>;
  try { body = await req.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  if (!validChannel(body.channel) || !validDirection(body.direction)) return json({ error: 'invalid_channel_or_direction' }, 400);
  const externalUserId = String(body.external_user_id ?? body.email ?? body.phone ?? '').trim();
  const threadId = String(body.external_thread_id ?? '').trim();
  const providerId = String(body.provider_message_id ?? '').trim();
  if (!externalUserId || !threadId || !providerId) return json({ error: 'missing_identity_or_message_id' }, 400);

  const result = await recordMessage(env, {
    ...body,
    channel: body.channel,
    direction: body.direction,
    external_user_id: externalUserId,
    external_thread_id: threadId,
    provider_message_id: providerId,
    occurred_at: Number(body.occurred_at) || nowMs(),
  });
  return json({ ok: true, ...result });
}

async function handleSnapshot(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireIngestSecret(req, env)) return json({ error: 'unauthorized' }, 401);
  const url = new URL(req.url);
  const after = Math.max(0, Number(url.searchParams.get('after_message_id')) || 0);
  const limit = Math.max(1, Math.min(2000, Number(url.searchParams.get('limit')) || 1000));
  const { results: cases } = await env.DB.prepare(
    `SELECT ca.*, co.display_name, co.primary_email, co.primary_phone
     FROM crm_cases ca JOIN crm_contacts co ON co.id = ca.contact_id
     ORDER BY ca.updated_at DESC LIMIT 1000`,
  ).all();
  const { results: conversations } = await env.DB.prepare(
    `SELECT cv.*, co.display_name,
            (SELECT ca.case_key FROM crm_cases ca
             JOIN crm_case_conversations cc ON cc.case_id = ca.id
             WHERE cc.conversation_id = cv.id ORDER BY ca.updated_at DESC LIMIT 1) AS case_key
     FROM crm_conversations cv JOIN crm_contacts co ON co.id = cv.contact_id
     ORDER BY cv.updated_at DESC LIMIT 2000`,
  ).all();
  const { results: messages } = await env.DB.prepare(
    `SELECT m.id, m.channel, m.provider_message_id, m.direction, m.sender_external_id,
            m.message_type, m.body, m.occurred_at, m.conversation_id,
            cv.external_thread_id, co.display_name,
            (SELECT ca.case_key FROM crm_cases ca
             JOIN crm_case_conversations cc ON cc.case_id = ca.id
             WHERE cc.conversation_id = cv.id ORDER BY ca.updated_at DESC LIMIT 1) AS case_key
     FROM crm_messages m
     JOIN crm_conversations cv ON cv.id = m.conversation_id
     JOIN crm_contacts co ON co.id = cv.contact_id
     WHERE m.id > ? ORDER BY m.id ASC LIMIT ?`,
  ).bind(after, limit).all<{ id: number }>();
  const nextCursor = messages.length ? messages[messages.length - 1].id : after;
  return json({ cases, conversations, messages, next_message_id: nextCursor, generated_at: nowMs() });
}

async function fetchLineDisplayName(userId: string, env: CrmBindings): Promise<string | undefined> {
  if (!env.LINE_CHANNEL_ACCESS_TOKEN) return undefined;
  try {
    const res = await fetch(`https://api.line.me/v2/bot/profile/${encodeURIComponent(userId)}`, {
      headers: { Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}` },
    });
    if (!res.ok) return undefined;
    return (await res.json<{ displayName?: string }>()).displayName;
  } catch {
    return undefined;
  }
}

async function handleWhatsAppWebhook(req: Request, env: CrmBindings): Promise<Response> {
  const raw = await req.text();
  if (!(await verifyWhatsAppSignature(raw, req.headers.get('x-hub-signature-256'), env.WHATSAPP_APP_SECRET))) {
    return json({ error: 'invalid_signature' }, 401);
  }
  let body: any;
  try { body = JSON.parse(raw); } catch { return json({ error: 'invalid_json' }, 400); }
  let ingested = 0;
  let duplicates = 0;
  for (const entry of body?.entry ?? []) {
    for (const change of entry?.changes ?? []) {
      const value = change?.value ?? {};
      const names = new Map<string, string>();
      for (const contact of value.contacts ?? []) {
        if (contact?.wa_id) names.set(String(contact.wa_id), String(contact?.profile?.name ?? ''));
      }
      for (const message of value.messages ?? []) {
        const from = String(message?.from ?? '').trim();
        const id = String(message?.id ?? '').trim();
        if (!from || !id) continue;
        const type = String(message?.type ?? 'unknown');
        const bodyText = type === 'text' ? String(message?.text?.body ?? '') : `[${type}]`;
        const result = await recordMessage(env, {
          channel: 'whatsapp', external_user_id: from, external_thread_id: `wa:${from}`,
          provider_message_id: id, direction: 'inbound', body: bodyText, message_type: type,
          occurred_at: Number(message?.timestamp) ? Number(message.timestamp) * 1000 : nowMs(),
          display_name: names.get(from), phone: from, raw_json: message,
        });
        result.duplicate ? duplicates++ : ingested++;
      }
    }
  }
  return json({ ok: true, ingested, duplicates });
}

async function handleLineWebhook(req: Request, env: CrmBindings): Promise<Response> {
  const raw = await req.text();
  if (!(await verifyLineSignature(raw, req.headers.get('x-line-signature'), env.LINE_CHANNEL_SECRET))) {
    return json({ error: 'invalid_signature' }, 401);
  }
  let body: any;
  try { body = JSON.parse(raw); } catch { return json({ error: 'invalid_json' }, 400); }
  let ingested = 0;
  let ignored = 0;
  let duplicates = 0;
  for (const event of body?.events ?? []) {
    const eventType = String(event?.type ?? '');
    if (eventType !== 'message' && eventType !== 'postback') { ignored++; continue; }
    const userId = String(event?.source?.userId ?? '').trim();
    if (!userId) { ignored++; continue; }
    const message = event?.message;
    const providerId = message?.id
      ? String(message.id)
      : `postback:${userId}:${event?.webhookEventId ?? event?.timestamp ?? crypto.randomUUID()}`;
    const messageType = eventType === 'postback' ? 'postback' : String(message?.type ?? 'unknown');
    const bodyText = messageType === 'text'
      ? String(message?.text ?? '')
      : messageType === 'postback' ? String(event?.postback?.data ?? '[postback]') : `[${messageType}]`;
    const result = await recordMessage(env, {
      channel: 'line', external_user_id: userId, external_thread_id: `line:${userId}`,
      provider_message_id: providerId, direction: 'inbound', body: bodyText,
      message_type: messageType, occurred_at: Number(event?.timestamp) || nowMs(),
      display_name: await fetchLineDisplayName(userId, env), raw_json: event,
    });
    result.duplicate ? duplicates++ : ingested++;
  }
  return json({ ok: true, ingested, duplicates, ignored });
}

async function handleSend(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireIngestSecret(req, env)) return json({ error: 'unauthorized' }, 401);
  let body: {
    channel?: Channel; to?: string; text?: string; case_key?: string; display_name?: string;
    payment_confirmed?: boolean; next_action?: string; follow_up_at?: number | null;
  };
  try { body = await req.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const channel = body.channel;
  const to = String(body.to ?? '').trim();
  const text = String(body.text ?? '').trim();
  if ((channel !== 'whatsapp' && channel !== 'line') || !to || !text) return json({ error: 'invalid_body' }, 400);
  const state = body.payment_confirmed
    ? { stage: 'PAID', progress: 100, ball_holder: 'NONE' as BallHolder, next_action: '' }
    : { next_action: body.next_action, follow_up_at: body.follow_up_at };

  if (channel === 'whatsapp') {
    const version = env.WHATSAPP_GRAPH_VERSION || 'v23.0';
    if (!env.WHATSAPP_ACCESS_TOKEN || !env.WHATSAPP_PHONE_NUMBER_ID) return json({ error: 'whatsapp_not_configured' }, 503);
    const res = await fetch(`https://graph.facebook.com/${version}/${env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`, 'content-type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text } }),
    });
    const data: any = await res.json();
    if (!res.ok) return json({ error: 'whatsapp_send_failed', detail: data }, 502);
    const providerId = String(data?.messages?.[0]?.id ?? `wa-out:${crypto.randomUUID()}`);
    await recordMessage(env, {
      channel, external_user_id: to, external_thread_id: `wa:${to}`, provider_message_id: providerId,
      direction: 'outbound', body: text, occurred_at: nowMs(), display_name: body.display_name,
      phone: to, case_key: body.case_key, ...state,
    });
    return json({ ok: true, provider_message_id: providerId });
  }

  if (!env.LINE_CHANNEL_ACCESS_TOKEN) return json({ error: 'line_not_configured' }, 503);
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify({ to, messages: [{ type: 'text', text }] }),
  });
  const detail = await res.text();
  if (!res.ok) return json({ error: 'line_send_failed', detail }, 502);
  const providerId = `line-out:${crypto.randomUUID()}`;
  await recordMessage(env, {
    channel, external_user_id: to, external_thread_id: `line:${to}`, provider_message_id: providerId,
    direction: 'outbound', body: text, occurred_at: nowMs(), display_name: body.display_name,
    case_key: body.case_key, ...state,
  });
  return json({ ok: true, provider_message_id: providerId });
}

function handleHealth(env: CrmBindings): Response {
  return json({
    ok: true,
    configured: {
      core: Boolean(env.CRM_INGEST_SECRET),
      whatsapp: Boolean(env.WHATSAPP_APP_SECRET && env.WHATSAPP_ACCESS_TOKEN && env.WHATSAPP_PHONE_NUMBER_ID),
      line: Boolean(env.LINE_CHANNEL_SECRET && env.LINE_CHANNEL_ACCESS_TOKEN),
    },
  });
}

export async function handleCrmRequest(req: Request, env: CrmBindings): Promise<Response | null> {
  const url = new URL(req.url);
  if (url.pathname === '/api/crm/health' && req.method === 'GET') return handleHealth(env);
  if (url.pathname === '/api/webhooks/whatsapp' && req.method === 'GET') {
    const mode = url.searchParams.get('hub.mode');
    const token = url.searchParams.get('hub.verify_token') ?? '';
    const challenge = url.searchParams.get('hub.challenge') ?? '';
    if (mode === 'subscribe' && env.WHATSAPP_VERIFY_TOKEN && safeEqual(token, env.WHATSAPP_VERIFY_TOKEN)) {
      return new Response(challenge, { status: 200 });
    }
    return new Response('forbidden', { status: 403 });
  }
  if (url.pathname === '/api/webhooks/whatsapp' && req.method === 'POST') return handleWhatsAppWebhook(req, env);
  if (url.pathname === '/api/webhooks/line' && req.method === 'POST') return handleLineWebhook(req, env);
  if (url.pathname === '/api/crm/ingest' && req.method === 'POST') return handleGenericIngest(req, env);
  if (url.pathname === '/api/crm/snapshot' && req.method === 'GET') return handleSnapshot(req, env);
  if (url.pathname === '/api/crm/send' && req.method === 'POST') return handleSend(req, env);
  return null;
}
