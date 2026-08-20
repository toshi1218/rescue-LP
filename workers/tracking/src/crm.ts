import { safeEqual } from './ids';

export type CrmBindings = {
  DB: D1Database;
  ADMIN_PASSWORD?: string;
  CRM_INGEST_SECRET?: string;
  WHATSAPP_VERIFY_TOKEN?: string;
  WHATSAPP_APP_SECRET?: string;
  WHATSAPP_ACCESS_TOKEN?: string;
  WHATSAPP_PHONE_NUMBER_ID?: string;
  WHATSAPP_GRAPH_VERSION?: string;
  LINE_CHANNEL_SECRET?: string;
  LINE_CHANNEL_ACCESS_TOKEN?: string;
};

type Channel = 'email' | 'whatsapp' | 'line';
type Direction = 'inbound' | 'outbound';
type BallHolder = 'IGRS' | 'CUSTOMER' | 'EXTERNAL' | 'NONE';

type IngestPayload = {
  channel: Channel;
  external_user_id: string;
  display_name?: string;
  email?: string;
  phone?: string;
  external_thread_id: string;
  provider_message_id: string;
  direction: Direction;
  body?: string;
  message_type?: string;
  occurred_at?: number;
  raw_json?: unknown;
  case_key?: string;
  service?: string;
  stage?: string;
  progress?: number;
  quote_amount?: number;
  currency?: string;
  paid_amount?: number;
  next_action?: string;
  follow_up_at?: number;
};

const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8' };

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function nowMs(): number {
  return Date.now();
}

function normalizeEmail(value?: string): string | null {
  const s = (value ?? '').trim().toLowerCase();
  return s && s.includes('@') ? s : null;
}

function normalizePhone(value?: string): string | null {
  const s = (value ?? '').replace(/[^0-9+]/g, '');
  return s || null;
}

function clampText(value: unknown, max: number): string | null {
  if (value === undefined || value === null) return null;
  return String(value).slice(0, max);
}

function progressForStage(stage: string): number {
  const map: Record<string, number> = {
    NEW: 5,
    REPLIED: 15,
    QUOTED: 30,
    WON: 40,
    'PAYMENT WAITING': 45,
    INVESTIGATING: 55,
    PROCESSING: 70,
    SHIPPING: 90,
    DONE: 100,
    LOST: 0,
  };
  return map[stage.toUpperCase()] ?? 10;
}

function requireIngestSecret(req: Request, env: CrmBindings): boolean {
  const configured = env.CRM_INGEST_SECRET;
  if (!configured) return false;
  const provided = req.headers.get('x-crm-ingest-secret') ?? '';
  return provided.length > 0 && safeEqual(provided, configured);
}

function requireSnapshotAuth(req: Request, env: CrmBindings): boolean {
  if (requireIngestSecret(req, env)) return true;
  const configured = env.ADMIN_PASSWORD;
  if (!configured) return false;
  const header = req.headers.get('authorization') ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return token.length > 0 && safeEqual(token, configured);
}

async function hmacSha256(secret: string, raw: string): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return crypto.subtle.sign('HMAC', key, new TextEncoder().encode(raw));
}

function bytesToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function bytesToBase64(buf: ArrayBuffer): string {
  let binary = '';
  for (const b of new Uint8Array(buf)) binary += String.fromCharCode(b);
  return btoa(binary);
}

async function verifyWhatsAppSignature(raw: string, signature: string | null, secret?: string): Promise<boolean> {
  if (!secret || !signature?.startsWith('sha256=')) return false;
  const digest = bytesToHex(await hmacSha256(secret, raw));
  return safeEqual(signature.slice(7), digest);
}

async function verifyLineSignature(raw: string, signature: string | null, secret?: string): Promise<boolean> {
  if (!secret || !signature) return false;
  const digest = bytesToBase64(await hmacSha256(secret, raw));
  return safeEqual(signature, digest);
}

async function resolveContact(
  env: CrmBindings,
  channel: Channel,
  externalId: string,
  displayName?: string,
  email?: string,
  phone?: string,
): Promise<number> {
  const existingIdentity = await env.DB.prepare(
    `SELECT contact_id FROM crm_identities WHERE channel = ? AND external_id = ?`,
  ).bind(channel, externalId).first<{ contact_id: number }>();

  const t = nowMs();
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);

  if (existingIdentity) {
    await env.DB.prepare(
      `UPDATE crm_contacts
       SET display_name = COALESCE(NULLIF(?, ''), display_name),
           primary_email = COALESCE(?, primary_email),
           primary_phone = COALESCE(?, primary_phone),
           updated_at = ?
       WHERE id = ?`,
    ).bind(displayName ?? '', normalizedEmail, normalizedPhone, t, existingIdentity.contact_id).run();
    await env.DB.prepare(
      `UPDATE crm_identities SET display_name = COALESCE(NULLIF(?, ''), display_name), updated_at = ?
       WHERE channel = ? AND external_id = ?`,
    ).bind(displayName ?? '', t, channel, externalId).run();
    return existingIdentity.contact_id;
  }

  let matched: { id: number } | null = null;
  if (normalizedEmail) {
    matched = await env.DB.prepare(`SELECT id FROM crm_contacts WHERE primary_email = ? LIMIT 1`)
      .bind(normalizedEmail).first<{ id: number }>();
  }
  if (!matched && normalizedPhone) {
    matched = await env.DB.prepare(`SELECT id FROM crm_contacts WHERE primary_phone = ? LIMIT 1`)
      .bind(normalizedPhone).first<{ id: number }>();
  }

  let contactId: number;
  if (matched) {
    contactId = matched.id;
    await env.DB.prepare(
      `UPDATE crm_contacts
       SET display_name = COALESCE(NULLIF(?, ''), display_name),
           primary_email = COALESCE(?, primary_email),
           primary_phone = COALESCE(?, primary_phone),
           updated_at = ?
       WHERE id = ?`,
    ).bind(displayName ?? '', normalizedEmail, normalizedPhone, t, contactId).run();
  } else {
    const created = await env.DB.prepare(
      `INSERT INTO crm_contacts (display_name, primary_email, primary_phone, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?) RETURNING id`,
    ).bind(clampText(displayName, 200), normalizedEmail, normalizedPhone, t, t).first<{ id: number }>();
    if (!created) throw new Error('failed_to_create_contact');
    contactId = created.id;
  }

  await env.DB.prepare(
    `INSERT INTO crm_identities (contact_id, channel, external_id, display_name, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
  ).bind(contactId, channel, externalId, clampText(displayName, 200), t, t).run();
  return contactId;
}

async function upsertConversation(
  env: CrmBindings,
  contactId: number,
  channel: Channel,
  externalThreadId: string,
  direction: Direction,
  body: string | null,
  occurredAt: number,
): Promise<number> {
  const ballHolder: BallHolder = direction === 'inbound' ? 'IGRS' : 'CUSTOMER';
  const status = direction === 'inbound' ? 'WAITING_IGRS' : 'WAITING_CUSTOMER';
  const t = nowMs();

  const existing = await env.DB.prepare(
    `SELECT id FROM crm_conversations WHERE channel = ? AND external_thread_id = ?`,
  ).bind(channel, externalThreadId).first<{ id: number }>();

  if (existing) {
    await env.DB.prepare(
      `UPDATE crm_conversations
       SET contact_id = ?, status = ?, ball_holder = ?, last_direction = ?,
           last_message_at = ?, last_message_preview = ?, updated_at = ?
       WHERE id = ?`,
    ).bind(contactId, status, ballHolder, direction, occurredAt, clampText(body, 500), t, existing.id).run();
    return existing.id;
  }

  const created = await env.DB.prepare(
    `INSERT INTO crm_conversations
      (contact_id, channel, external_thread_id, status, ball_holder, last_direction,
       last_message_at, last_message_preview, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
  ).bind(contactId, channel, externalThreadId, status, ballHolder, direction,
    occurredAt, clampText(body, 500), t, t).first<{ id: number }>();
  if (!created) throw new Error('failed_to_create_conversation');
  return created.id;
}

async function upsertCase(
  env: CrmBindings,
  payload: IngestPayload,
  contactId: number,
  conversationId: number,
  occurredAt: number,
): Promise<number> {
  const caseKey = clampText(payload.case_key, 250) || `${payload.channel}:${payload.external_thread_id}`;
  const existing = await env.DB.prepare(`SELECT id, stage FROM crm_cases WHERE case_key = ?`)
    .bind(caseKey).first<{ id: number; stage: string }>();
  const ballHolder: BallHolder = payload.direction === 'inbound' ? 'IGRS' : 'CUSTOMER';
  const t = nowMs();

  let caseId: number;
  if (existing) {
    const explicitStage = clampText(payload.stage, 80);
    let stage = explicitStage || existing.stage;
    if (!explicitStage && existing.stage === 'NEW' && payload.direction === 'outbound') stage = 'REPLIED';
    const progress = Number.isFinite(payload.progress) ? Math.max(0, Math.min(100, Number(payload.progress))) : progressForStage(stage);
    await env.DB.prepare(
      `UPDATE crm_cases
       SET service = COALESCE(?, service), stage = ?, progress = ?, ball_holder = ?,
           quote_amount = COALESCE(?, quote_amount), currency = COALESCE(?, currency),
           paid_amount = COALESCE(?, paid_amount), next_action = COALESCE(?, next_action),
           follow_up_at = COALESCE(?, follow_up_at), last_channel = ?, last_contact_at = ?, updated_at = ?
       WHERE id = ?`,
    ).bind(clampText(payload.service, 250), stage, progress, ballHolder,
      payload.quote_amount ?? null, clampText(payload.currency, 20), payload.paid_amount ?? null,
      clampText(payload.next_action, 500), payload.follow_up_at ?? null,
      payload.channel, occurredAt, t, existing.id).run();
    caseId = existing.id;
  } else {
    const stage = clampText(payload.stage, 80) || (payload.direction === 'outbound' ? 'REPLIED' : 'NEW');
    const progress = Number.isFinite(payload.progress) ? Math.max(0, Math.min(100, Number(payload.progress))) : progressForStage(stage);
    const created = await env.DB.prepare(
      `INSERT INTO crm_cases
       (contact_id, case_key, service, stage, progress, ball_holder, quote_amount, currency,
        paid_amount, next_action, follow_up_at, last_channel, last_contact_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
    ).bind(contactId, caseKey, clampText(payload.service, 250), stage, progress, ballHolder,
      payload.quote_amount ?? null, clampText(payload.currency, 20), payload.paid_amount ?? null,
      clampText(payload.next_action, 500), payload.follow_up_at ?? null,
      payload.channel, occurredAt, t, t).first<{ id: number }>();
    if (!created) throw new Error('failed_to_create_case');
    caseId = created.id;
  }

  await env.DB.prepare(
    `INSERT OR IGNORE INTO crm_case_conversations (case_id, conversation_id) VALUES (?, ?)`,
  ).bind(caseId, conversationId).run();
  return caseId;
}

async function recordMessage(env: CrmBindings, payload: IngestPayload): Promise<{ contactId: number; conversationId: number; caseId: number }> {
  const channel = payload.channel;
  if (!['email', 'whatsapp', 'line'].includes(channel)) throw new Error('invalid_channel');
  if (!payload.external_user_id || !payload.external_thread_id || !payload.provider_message_id) throw new Error('missing_identity');
  if (!['inbound', 'outbound'].includes(payload.direction)) throw new Error('invalid_direction');

  const occurredAt = Number(payload.occurred_at) || nowMs();
  const contactId = await resolveContact(env, channel, payload.external_user_id, payload.display_name, payload.email, payload.phone);
  const body = clampText(payload.body, 10000);
  const conversationId = await upsertConversation(env, contactId, channel, payload.external_thread_id, payload.direction, body, occurredAt);

  await env.DB.prepare(
    `INSERT OR IGNORE INTO crm_messages
     (conversation_id, provider_message_id, direction, sender_external_id, message_type, body,
      occurred_at, raw_json, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).bind(conversationId, payload.provider_message_id, payload.direction,
    clampText(payload.external_user_id, 250), clampText(payload.message_type, 80) || 'text', body,
    occurredAt, payload.raw_json ? clampText(JSON.stringify(payload.raw_json), 20000) : null, nowMs()).run();

  const caseId = await upsertCase(env, payload, contactId, conversationId, occurredAt);
  return { contactId, conversationId, caseId };
}

async function handleGenericIngest(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireIngestSecret(req, env)) return json({ error: 'unauthorized' }, 401);
  let payload: IngestPayload;
  try {
    payload = await req.json<IngestPayload>();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }
  try {
    const result = await recordMessage(env, payload);
    return json({ ok: true, ...result });
  } catch (err) {
    console.error('[crm ingest]', err);
    return json({ error: err instanceof Error ? err.message : 'ingest_failed' }, 400);
  }
}

async function handleSnapshot(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireSnapshotAuth(req, env)) return json({ error: 'unauthorized' }, 401);
  const { results: cases } = await env.DB.prepare(
    `SELECT ca.id, ca.case_key, ca.service, ca.stage, ca.progress, ca.ball_holder,
            ca.quote_amount, ca.currency, ca.paid_amount, ca.next_action, ca.follow_up_at,
            ca.last_channel, ca.last_contact_at, ca.updated_at,
            co.display_name, co.primary_email, co.primary_phone
     FROM crm_cases ca
     JOIN crm_contacts co ON co.id = ca.contact_id
     ORDER BY ca.updated_at DESC
     LIMIT 500`,
  ).all();
  const { results: conversations } = await env.DB.prepare(
    `SELECT cv.id, cv.contact_id, cv.channel, cv.external_thread_id, cv.status, cv.ball_holder,
            cv.last_direction, cv.last_message_at, cv.last_message_preview
     FROM crm_conversations cv
     ORDER BY cv.updated_at DESC
     LIMIT 1000`,
  ).all();
  return json({ cases, conversations, generated_at: nowMs() });
}

async function fetchLineDisplayName(userId: string, env: CrmBindings): Promise<string | undefined> {
  if (!env.LINE_CHANNEL_ACCESS_TOKEN) return undefined;
  try {
    const res = await fetch(`https://api.line.me/v2/bot/profile/${encodeURIComponent(userId)}`, {
      headers: { Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}` },
    });
    if (!res.ok) return undefined;
    const data = await res.json<{ displayName?: string }>();
    return data.displayName;
  } catch {
    return undefined;
  }
}

async function handleWhatsAppWebhook(req: Request, env: CrmBindings): Promise<Response> {
  const raw = await req.text();
  const verified = await verifyWhatsAppSignature(raw, req.headers.get('x-hub-signature-256'), env.WHATSAPP_APP_SECRET);
  if (!verified) return json({ error: 'invalid_signature' }, 401);

  let body: any;
  try { body = JSON.parse(raw); } catch { return json({ error: 'invalid_json' }, 400); }

  let ingested = 0;
  for (const entry of body?.entry ?? []) {
    for (const change of entry?.changes ?? []) {
      const value = change?.value ?? {};
      const contacts = new Map<string, string>();
      for (const c of value?.contacts ?? []) {
        if (c?.wa_id) contacts.set(String(c.wa_id), String(c?.profile?.name ?? ''));
      }
      for (const m of value?.messages ?? []) {
        const from = String(m?.from ?? '');
        const id = String(m?.id ?? '');
        if (!from || !id) continue;
        const type = String(m?.type ?? 'unknown');
        const text = type === 'text' ? String(m?.text?.body ?? '') : `[${type}]`;
        await recordMessage(env, {
          channel: 'whatsapp',
          external_user_id: from,
          display_name: contacts.get(from) || undefined,
          phone: from,
          external_thread_id: `wa:${from}`,
          provider_message_id: id,
          direction: 'inbound',
          body: text,
          message_type: type,
          occurred_at: Number(m?.timestamp) ? Number(m.timestamp) * 1000 : nowMs(),
          raw_json: m,
        });
        ingested++;
      }
    }
  }
  return json({ ok: true, ingested });
}

async function handleLineWebhook(req: Request, env: CrmBindings): Promise<Response> {
  const raw = await req.text();
  const verified = await verifyLineSignature(raw, req.headers.get('x-line-signature'), env.LINE_CHANNEL_SECRET);
  if (!verified) return json({ error: 'invalid_signature' }, 401);

  let body: any;
  try { body = JSON.parse(raw); } catch { return json({ error: 'invalid_json' }, 400); }

  let ingested = 0;
  for (const event of body?.events ?? []) {
    const userId = String(event?.source?.userId ?? '');
    if (!userId) continue;
    const eventType = String(event?.type ?? 'event');
    const msg = event?.message;
    const providerId = msg?.id ? String(msg.id) : `line:${userId}:${eventType}:${event?.timestamp ?? nowMs()}`;
    const messageType = msg?.type ? String(msg.type) : eventType;
    let text = `[${messageType}]`;
    if (msg?.type === 'text') text = String(msg.text ?? '');
    if (eventType === 'postback') text = String(event?.postback?.data ?? '[postback]');
    const displayName = await fetchLineDisplayName(userId, env);
    await recordMessage(env, {
      channel: 'line',
      external_user_id: userId,
      display_name: displayName,
      external_thread_id: `line:${userId}`,
      provider_message_id: providerId,
      direction: 'inbound',
      body: text,
      message_type: messageType,
      occurred_at: Number(event?.timestamp) || nowMs(),
      raw_json: event,
    });
    ingested++;
  }
  return json({ ok: true, ingested });
}

async function handleSend(req: Request, env: CrmBindings): Promise<Response> {
  if (!requireIngestSecret(req, env)) return json({ error: 'unauthorized' }, 401);
  let body: { channel?: Channel; to?: string; text?: string; case_key?: string; display_name?: string };
  try { body = await req.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const channel = body.channel;
  const to = String(body.to ?? '').trim();
  const text = String(body.text ?? '').trim();
  if (!channel || !to || !text) return json({ error: 'invalid_body' }, 400);

  if (channel === 'whatsapp') {
    if (!env.WHATSAPP_ACCESS_TOKEN || !env.WHATSAPP_PHONE_NUMBER_ID || !env.WHATSAPP_GRAPH_VERSION) {
      return json({ error: 'whatsapp_not_configured' }, 503);
    }
    const res = await fetch(`https://graph.facebook.com/${env.WHATSAPP_GRAPH_VERSION}/${env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`, 'content-type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text } }),
    });
    const data: any = await res.json();
    if (!res.ok) return json({ error: 'whatsapp_send_failed', detail: data }, 502);
    const messageId = String(data?.messages?.[0]?.id ?? `wa-out:${crypto.randomUUID()}`);
    await recordMessage(env, {
      channel: 'whatsapp', external_user_id: to, display_name: body.display_name, phone: to,
      external_thread_id: `wa:${to}`, provider_message_id: messageId, direction: 'outbound',
      body: text, message_type: 'text', occurred_at: nowMs(), case_key: body.case_key,
    });
    return json({ ok: true, provider_message_id: messageId });
  }

  if (channel === 'line') {
    if (!env.LINE_CHANNEL_ACCESS_TOKEN) return json({ error: 'line_not_configured' }, 503);
    const res = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`, 'content-type': 'application/json' },
      body: JSON.stringify({ to, messages: [{ type: 'text', text }] }),
    });
    const responseText = await res.text();
    if (!res.ok) return json({ error: 'line_send_failed', detail: responseText }, 502);
    const messageId = `line-out:${crypto.randomUUID()}`;
    await recordMessage(env, {
      channel: 'line', external_user_id: to, display_name: body.display_name,
      external_thread_id: `line:${to}`, provider_message_id: messageId, direction: 'outbound',
      body: text, message_type: 'text', occurred_at: nowMs(), case_key: body.case_key,
    });
    return json({ ok: true, provider_message_id: messageId });
  }

  return json({ error: 'email_send_not_supported_here' }, 400);
}

export async function handleCrmRequest(req: Request, env: CrmBindings): Promise<Response | null> {
  const url = new URL(req.url);

  if (url.pathname === '/api/webhooks/whatsapp' && req.method === 'GET') {
    const mode = url.searchParams.get('hub.mode');
    const verifyToken = url.searchParams.get('hub.verify_token') ?? '';
    const challenge = url.searchParams.get('hub.challenge') ?? '';
    if (mode === 'subscribe' && env.WHATSAPP_VERIFY_TOKEN && safeEqual(verifyToken, env.WHATSAPP_VERIFY_TOKEN)) {
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
