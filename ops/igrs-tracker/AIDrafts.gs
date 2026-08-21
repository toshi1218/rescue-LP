/**
 * IGRS Web3Forms -> AI Gmail Draft automation
 * ---------------------------------------------------------------
 * 15分ごとに Gmail を確認するが、OpenAI API を呼ぶのは「未処理の新規問い合わせ」だけ。
 * 既存・返信済み・処理済みスレッドでは AI を一切呼ばない。
 *
 * 必須 Script Property:
 *   OPENAI_API_KEY = OpenAI Platform の API key
 *
 * 任意 Script Property:
 *   OPENAI_MODEL = 例: gpt-5.6-luna（未設定時もこれを使用）
 *
 * 前提:
 *   同じ Apps Script プロジェクトに Drafts.gs があり、以下を再利用する。
 *   draftParseWeb3Form_, draftIsValidEmail_, draftAlreadyReplied_,
 *   draftBuildReply_, draftUpdateLedgerNextAction_, draftNotify_, DRAFT_PRICING
 * ---------------------------------------------------------------
 */

const AI_DRAFT_STATE_PREFIX = 'IGRS_WEB3_AI_DRAFT_';
const AI_DRAFT_LOOKBACK = 'newer_than:14d';
const AI_DRAFT_MAX_THREADS = 100;
const AI_DRAFT_DEFAULT_MODEL = 'gpt-5.6-luna';

/**
 * 15分ごとの入口。
 * Gmail検索だけは定期実行するが、AI呼び出しは state 未登録の新規問い合わせだけ。
 */
function aiDraftJob() {
  const props = PropertiesService.getScriptProperties();
  const query = 'in:anywhere from:web3forms.com ' + AI_DRAFT_LOOKBACK;
  const threads = GmailApp.search(query, 0, AI_DRAFT_MAX_THREADS);

  threads.sort(function (a, b) {
    return a.getLastMessageDate() - b.getLastMessageDate();
  });

  threads.forEach(function (searchThread) {
    const tid = searchThread.getId();
    const stateKey = AI_DRAFT_STATE_PREFIX + tid;

    // ここで終了するため、15分ごとの巡回で AI を再度呼ばない。
    if (props.getProperty(stateKey)) return;

    var thread = null;
    try {
      thread = GmailApp.getThreadById(tid);
    } catch (e) {
      return;
    }
    if (!thread) return;

    const messages = thread.getMessages();
    if (!messages.length) return;

    const source = messages[0];
    const parsed = draftParseWeb3Form_(source.getPlainBody());
    const email = String(parsed.email || '').trim();

    if (!draftIsValidEmail_(email)) {
      props.setProperty(stateKey, 'skipped:invalid-email');
      return;
    }

    // 過去14日を初回走査しても、すでに返信済みの案件では AI を呼ばない。
    if (draftAlreadyReplied_(email, source.getDate())) {
      props.setProperty(stateKey, 'skipped:already-replied');
      return;
    }

    // APIの二重課金防止。AIを呼ぶ直前にロックする。
    // 呼び出しが失敗しても同じ問い合わせで自動再試行はしない。
    props.setProperty(stateKey, 'processing:' + new Date().toISOString());

    var reply = null;
    var usedAi = false;

    try {
      reply = aiDraftBuildReply_(parsed, source.getSubject() || '');
      usedAi = !!reply;
    } catch (e) {
      draftNotify_('⚠️ AIドラフト生成失敗。テンプレートへ切替\n' +
        '👤 ' + (parsed.name || '(不明)') + '\n' +
        '理由: ' + String(e.message || e));
    }

    // API key未設定・API障害・JSON不正時も問い合わせを止めない。
    if (!reply || !reply.body) {
      reply = draftBuildReply_(parsed, source.getSubject() || '');
    }
    if (!reply || !reply.body) {
      props.setProperty(stateKey, 'failed:no-reply');
      return;
    }

    const draft = GmailApp.createDraft(email, reply.subject, reply.body);
    props.setProperty(stateKey, (usedAi ? 'ai-draft:' : 'template-draft:') + draft.getId());

    draftUpdateLedgerNextAction_(tid, 'ドラフト確認→送信');
    draftNotify_(
      '✍️ 問い合わせ返信ドラフト作成' + (usedAi ? '（AI）' : '（テンプレート）') + '\n' +
      '👤 ' + (parsed.name || '(不明)') + '\n' +
      '✉️ ' + email + '\n' +
      '件名: ' + reply.subject
    );
  });
}

/**
 * 旧 draftJob トリガーも削除して、AI版だけを15分間隔で有効化する。
 */
function installAiDraftTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    const fn = t.getHandlerFunction();
    if (fn === 'draftJob' || fn === 'aiDraftJob') ScriptApp.deleteTrigger(t);
  });

  ScriptApp.newTrigger('aiDraftJob')
    .timeBased()
    .everyMinutes(15)
    .create();

  return 'aiDraftJob trigger installed: every 15 minutes; AI runs only for new inquiries';
}

/** 特定スレッドだけ再処理したいときの手動解除。自動では使わない。 */
function resetAiInquiryDraftMarker(threadId) {
  PropertiesService.getScriptProperties().deleteProperty(
    AI_DRAFT_STATE_PREFIX + String(threadId || '').trim()
  );
}

/**
 * OpenAI Responses API を1回だけ呼び、{subject, body} を返す。
 * API key が無ければ null を返し、呼び出し自体を行わない。
 */
function aiDraftBuildReply_(p, sourceSubject) {
  const props = PropertiesService.getScriptProperties();
  const apiKey = String(props.getProperty('OPENAI_API_KEY') || '').trim();
  if (!apiKey) return null;

  const model = String(props.getProperty('OPENAI_MODEL') || AI_DRAFT_DEFAULT_MODEL).trim();
  const prompt = aiDraftPrompt_(p, sourceSubject);

  const payload = {
    model: model,
    store: false,
    max_output_tokens: 1400,
    input: prompt
  };

  const res = UrlFetchApp.fetch('https://api.openai.com/v1/responses', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const code = res.getResponseCode();
  const raw = res.getContentText();
  if (code < 200 || code >= 300) {
    throw new Error('OpenAI API HTTP ' + code + ': ' + raw.slice(0, 300));
  }

  const json = JSON.parse(raw);
  const text = aiDraftExtractOutputText_(json);
  if (!text) throw new Error('OpenAI API returned no output text');

  return aiDraftParseModelReply_(text);
}

/**
 * AIに渡すのは返信作成に必要な情報だけ。メールアドレス・IPは送らない。
 * 料金は固定マスタを渡し、勝手に価格を発明させない。
 */
function aiDraftPrompt_(p, sourceSubject) {
  const u = DRAFT_PRICING.usa;
  const g = DRAFT_PRICING.general;

  const inquiry = {
    name: p.name || '',
    country: p.country || p.submit_country || '',
    service: p.service || '',
    message: p.message || '',
    purpose: p.purpose || '',
    documents_needed: p.documents_needed || '',
    deadline: p.deadline || '',
    landing_page: p.landing_page || '',
    subject: sourceSubject || ''
  };

  return [
    'You draft first-response emails for IGRS Inc., a Philippine document procurement service.',
    '',
    'TASK',
    'Read the customer inquiry carefully and write a complete reply that directly answers what they asked.',
    'The email must include, where relevant: an estimated price, estimated processing time, important caveats, and one clear next action for the customer.',
    'State that the final quotation will be confirmed after reviewing the case details when the exact price is not yet certain.',
    '',
    'STYLE',
    'Use the customer language when obvious from the inquiry or landing page; otherwise use English.',
    'Be concise, natural, professional, and human. Do not sound like AI.',
    'Do not use Markdown, asterisks, headings, tables, or decorative bullet symbols.',
    'Do not over-explain. Ask only questions that are actually needed to move the case forward.',
    'End English emails with: Kind regards, then Toshiyuki Igarashi, then IGRS Inc.',
    'End Japanese emails with: よろしくお願いいたします。 then 五十嵐, then IGRS Inc.',
    '',
    'SAFETY / BUSINESS RULES',
    'Never invent a price, deadline, legal requirement, or government rule.',
    'Use only the price references below. If none clearly applies, give the closest starting price only if appropriate and say the formal quotation follows review.',
    'Do not ask the customer to email a passport or sensitive ID attachment. Say a secure upload method will be provided if ID is needed.',
    'It is acceptable to ask for a checklist, email, or screenshot from the receiving authority.',
    'If the inquiry suggests the requested documents may conflict or be unnecessary, explain that briefly before asking the customer to pay.',
    '',
    'PRICE / LEAD-TIME REFERENCE',
    'USA CENOMAR: US$' + u.cenomarUsd,
    'USA PSA Marriage Certificate: US$' + u.marriageUsd,
    'USA PSA Birth Certificate: US$' + u.birthUsd,
    'USA Advisory on Marriages (AOM): US$' + u.aomUsd,
    'DHL to USA when paper shipping is needed: approximately US$' + u.dhlUsd,
    'USA CENOMAR + Marriage Certificate + DHL: US$' + (u.cenomarUsd + u.marriageUsd + u.dhlUsd),
    'USA Marriage Certificate + AOM + DHL: US$' + (u.marriageUsd + u.aomUsd + u.dhlUsd),
    'USA PSA pair processing + delivery estimate: ' + u.psaPairWeeks,
    'PSA document + e-Apostille: JPY ' + g.psaEApostilleJpy + ' per document as a general estimate',
    'NBI service: from JPY ' + g.nbiFromJpy,
    'International marriage document support: from JPY ' + g.internationalMarriageFromJpy,
    'Spouse visa document support: from JPY ' + g.spouseVisaFromJpy,
    'Electronic PSA/e-Apostille processing estimate: ' + g.electronicWeeks,
    '',
    'KNOWN DOCUMENT LOGIC',
    'If a person is already married, CENOMAR and a PSA Marriage Certificate may not be the correct pair. AOM may be the intended record. Explain this as a point to confirm, not as a guaranteed legal conclusion.',
    'For U.S. immigration/spouse visa matters, a PSA Birth Certificate may also be requested depending on the receiving authority. Ask for the authority/checklist rather than asserting it is always required.',
    '',
    'CUSTOMER INQUIRY',
    JSON.stringify(inquiry, null, 2),
    '',
    'OUTPUT FORMAT',
    'Return ONLY valid JSON with exactly these two string fields:',
    '{"subject":"...","body":"..."}',
    'Do not wrap the JSON in markdown fences.'
  ].join('\n');
}

/** Responses API の raw JSON から output_text を安全に拾う */
function aiDraftExtractOutputText_(json) {
  if (json && typeof json.output_text === 'string' && json.output_text.trim()) {
    return json.output_text.trim();
  }

  const chunks = [];
  const output = (json && Array.isArray(json.output)) ? json.output : [];
  output.forEach(function (item) {
    const content = item && Array.isArray(item.content) ? item.content : [];
    content.forEach(function (part) {
      if (part && part.type === 'output_text' && typeof part.text === 'string') {
        chunks.push(part.text);
      }
    });
  });
  return chunks.join('\n').trim();
}

/** JSONだけを許容。余計な文章が混ざった場合は最初のJSON objectを救済する。 */
function aiDraftParseModelReply_(text) {
  var s = String(text || '').trim();
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');

  var obj = null;
  try {
    obj = JSON.parse(s);
  } catch (e) {
    const start = s.indexOf('{');
    const end = s.lastIndexOf('}');
    if (start >= 0 && end > start) obj = JSON.parse(s.slice(start, end + 1));
  }

  if (!obj || typeof obj.subject !== 'string' || typeof obj.body !== 'string') {
    throw new Error('AI reply JSON is invalid');
  }

  const subject = obj.subject.trim();
  const body = obj.body.trim();
  if (!subject || !body) throw new Error('AI reply subject/body is empty');

  return { subject: subject, body: body };
}
