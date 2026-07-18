import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { checkRateLimit } from './rateLimit';
import { generateTrackingCode, generatePin, safeEqual } from './ids';
import { STATUS_STAGES, isValidStatusKey } from './status';

type Bindings = {
  ALLOWED_ORIGIN: string;
  ADMIN_PASSWORD?: string;
  DB: D1Database;
  UPLOADS: R2Bucket;
  RATE_LIMIT?: KVNamespace;
};

const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15MB
const MAX_UPLOADS_PER_CODE = 10;
const ALLOWED_CONTENT_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/pdf',
]);

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', (c, next) => {
  const origin = c.env.ALLOWED_ORIGIN;
  return cors({
    origin,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Accept', 'Authorization'],
    maxAge: 86400,
  })(c, next);
});

app.get('/', (c) => c.text('ph-document tracking worker: OK', 200));

function requireAdmin(c: { req: { header: (name: string) => string | undefined }; env: Bindings }): boolean {
  const configured = c.env.ADMIN_PASSWORD;
  if (!configured) return false;
  const header = c.req.header('Authorization') ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return token.length > 0 && safeEqual(token, configured);
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.\-]/g, '_').slice(0, 120) || 'file';
}

/* ── Admin endpoints ─────────────────────────────────────────── */

app.post('/api/admin/create', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'unauthorized' }, 401);

  let body: { customer_name?: string };
  try {
    body = await c.req.json();
  } catch {
    body = {};
  }

  const code = generateTrackingCode();
  const pin = generatePin();
  const now = Date.now();

  await c.env.DB.prepare(
    `INSERT INTO trackings (code, pin, customer_name, created_at, current_status, status_updated_at)
     VALUES (?, ?, ?, ?, 'received', ?)`,
  )
    .bind(code, pin, body.customer_name ?? null, now, now)
    .run();

  await c.env.DB.prepare(
    `INSERT INTO status_history (code, status, note, created_at) VALUES (?, 'received', NULL, ?)`,
  )
    .bind(code, now)
    .run();

  return c.json({ code, pin });
});

app.get('/api/admin/list', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'unauthorized' }, 401);

  const { results } = await c.env.DB.prepare(
    `SELECT code, customer_name, current_status, status_updated_at, created_at
     FROM trackings ORDER BY created_at DESC LIMIT 200`,
  ).all();

  return c.json({ trackings: results, stages: STATUS_STAGES });
});

app.get('/api/admin/detail/:code', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'unauthorized' }, 401);
  const code = c.req.param('code');

  const tracking = await c.env.DB.prepare(`SELECT * FROM trackings WHERE code = ?`).bind(code).first();
  if (!tracking) return c.json({ error: 'not_found' }, 404);

  const { results: history } = await c.env.DB.prepare(
    `SELECT status, note, created_at FROM status_history WHERE code = ? ORDER BY created_at ASC`,
  )
    .bind(code)
    .all();

  const { results: uploads } = await c.env.DB.prepare(
    `SELECT id, filename, content_type, size, uploaded_at FROM uploads WHERE code = ? ORDER BY uploaded_at ASC`,
  )
    .bind(code)
    .all();

  return c.json({ tracking, history, uploads, stages: STATUS_STAGES });
});

app.post('/api/admin/status', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'unauthorized' }, 401);

  let body: { code?: string; status?: string; note?: string };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }

  if (!body.code || !body.status || !isValidStatusKey(body.status)) {
    return c.json({ error: 'invalid_body' }, 400);
  }

  const tracking = await c.env.DB.prepare(`SELECT code FROM trackings WHERE code = ?`).bind(body.code).first();
  if (!tracking) return c.json({ error: 'not_found' }, 404);

  const now = Date.now();
  const note = body.note?.slice(0, 500) ?? null;

  await c.env.DB.prepare(
    `UPDATE trackings SET current_status = ?, status_note = ?, status_updated_at = ? WHERE code = ?`,
  )
    .bind(body.status, note, now, body.code)
    .run();

  await c.env.DB.prepare(
    `INSERT INTO status_history (code, status, note, created_at) VALUES (?, ?, ?, ?)`,
  )
    .bind(body.code, body.status, note, now)
    .run();

  return c.json({ ok: true });
});

app.get('/api/admin/download/:code/:uploadId', async (c) => {
  if (!requireAdmin(c)) return c.json({ error: 'unauthorized' }, 401);
  const code = c.req.param('code');
  const uploadId = c.req.param('uploadId');

  const row = await c.env.DB.prepare(
    `SELECT r2_key, filename, content_type FROM uploads WHERE id = ? AND code = ?`,
  )
    .bind(uploadId, code)
    .first<{ r2_key: string; filename: string; content_type: string | null }>();

  if (!row) return c.json({ error: 'not_found' }, 404);

  const object = await c.env.UPLOADS.get(row.r2_key);
  if (!object) return c.json({ error: 'file_missing' }, 404);

  return new Response(object.body, {
    headers: {
      'Content-Type': row.content_type ?? 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${row.filename}"`,
    },
  });
});

/* ── Public (customer-facing) endpoints ─────────────────────── */

app.post('/api/verify', async (c) => {
  const ip = c.req.header('cf-connecting-ip') ?? 'unknown';

  let body: { code?: string; pin?: string };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }

  const code = (body.code ?? '').trim().toLowerCase();
  const pin = (body.pin ?? '').trim();
  if (!code || !pin) return c.json({ error: 'invalid_body' }, 400);

  const rl = await checkRateLimit(c.env.RATE_LIMIT, `verify:${ip}:${code}`, 10);
  if (!rl.allowed) return c.json({ error: 'rate_limited' }, 429);

  const tracking = await c.env.DB.prepare(
    `SELECT code, pin, customer_name, current_status, status_note, status_updated_at, created_at
     FROM trackings WHERE code = ?`,
  )
    .bind(code)
    .first<{
      code: string;
      pin: string;
      customer_name: string | null;
      current_status: string;
      status_note: string | null;
      status_updated_at: number;
      created_at: number;
    }>();

  if (!tracking || !safeEqual(tracking.pin, pin)) {
    return c.json({ error: 'not_found_or_pin_mismatch' }, 404);
  }

  const { results: history } = await c.env.DB.prepare(
    `SELECT status, note, created_at FROM status_history WHERE code = ? ORDER BY created_at ASC`,
  )
    .bind(code)
    .all();

  const { results: uploads } = await c.env.DB.prepare(
    `SELECT filename, uploaded_at FROM uploads WHERE code = ? ORDER BY uploaded_at ASC`,
  )
    .bind(code)
    .all();

  return c.json({
    customer_name: tracking.customer_name,
    current_status: tracking.current_status,
    status_note: tracking.status_note,
    status_updated_at: tracking.status_updated_at,
    created_at: tracking.created_at,
    history,
    uploads,
    stages: STATUS_STAGES,
  });
});

app.post('/api/upload', async (c) => {
  const ip = c.req.header('cf-connecting-ip') ?? 'unknown';

  let form: FormData;
  try {
    form = await c.req.formData();
  } catch {
    return c.json({ error: 'invalid_form' }, 400);
  }

  const code = String(form.get('code') ?? '').trim().toLowerCase();
  const pin = String(form.get('pin') ?? '').trim();
  const file = form.get('file');

  if (!code || !pin || !(file instanceof File)) {
    return c.json({ error: 'invalid_body' }, 400);
  }

  const rl = await checkRateLimit(c.env.RATE_LIMIT, `upload:${ip}:${code}`, 15);
  if (!rl.allowed) return c.json({ error: 'rate_limited' }, 429);

  const tracking = await c.env.DB.prepare(`SELECT pin FROM trackings WHERE code = ?`)
    .bind(code)
    .first<{ pin: string }>();
  if (!tracking || !safeEqual(tracking.pin, pin)) {
    return c.json({ error: 'not_found_or_pin_mismatch' }, 404);
  }

  if (!ALLOWED_CONTENT_TYPES.has(file.type)) {
    return c.json({ error: 'unsupported_file_type' }, 400);
  }
  if (file.size > MAX_FILE_BYTES) {
    return c.json({ error: 'file_too_large' }, 400);
  }

  const countRow = await c.env.DB.prepare(`SELECT COUNT(*) as n FROM uploads WHERE code = ?`)
    .bind(code)
    .first<{ n: number }>();
  if ((countRow?.n ?? 0) >= MAX_UPLOADS_PER_CODE) {
    return c.json({ error: 'too_many_uploads' }, 400);
  }

  const filename = sanitizeFilename(file.name);
  const r2Key = `${code}/${Date.now()}-${filename}`;

  await c.env.UPLOADS.put(r2Key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });

  const now = Date.now();
  await c.env.DB.prepare(
    `INSERT INTO uploads (code, filename, r2_key, content_type, size, uploaded_at) VALUES (?, ?, ?, ?, ?, ?)`,
  )
    .bind(code, filename, r2Key, file.type, file.size, now)
    .run();

  return c.json({ ok: true, filename });
});

export default app;
