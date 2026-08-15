import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { checkRateLimit } from './rateLimit';

type Bindings = {
  SLACK_WEBHOOK_URL?: string;
  ALLOWED_ORIGIN: string;
  RATE_LIMIT?: KVNamespace;
};

type NotifyBody = {
  lang?: string;
  fields?: Record<string, unknown>;
};

const MAX_FIELDS = 30;
const MAX_FIELD_LENGTH = 2000;
const SKIP_FIELDS = new Set(['access_key', 'botcheck']);
const LANG_LABEL: Record<string, string> = { ja: '🇯🇵 JA', en: '🇬🇧 EN', ko: '🇰🇷 KO' };

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', (c, next) => {
  const origin = c.env.ALLOWED_ORIGIN;
  return cors({
    origin,
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
    maxAge: 86400,
  })(c, next);
});

app.get('/', (c) => c.text('ph-document notify worker: OK', 200));

app.post('/api/notify', async (c) => {
  try {
    const webhookUrl = c.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('[notify] SLACK_WEBHOOK_URL is not set');
      return c.json({ error: 'missing_webhook' }, 500);
    }

    const ip = c.req.header('cf-connecting-ip') ?? 'unknown';
    const rl = await checkRateLimit(c.env.RATE_LIMIT, ip);
    if (!rl.allowed) {
      return c.json({ error: 'rate_limited' }, 429);
    }

    let body: NotifyBody;
    try {
      body = await c.req.json();
    } catch {
      return c.json({ error: 'invalid_json' }, 400);
    }

    const rawFields = body.fields && typeof body.fields === 'object' ? body.fields : {};

    // Honeypot: bots fill the hidden "botcheck" field. Silently accept, don't notify.
    if (typeof rawFields.botcheck === 'string' && rawFields.botcheck.length > 0) {
      return c.json({ ok: true });
    }

    const entries = Object.entries(rawFields)
      .filter(
        (entry): entry is [string, string] =>
          !SKIP_FIELDS.has(entry[0]) &&
          typeof entry[1] === 'string' &&
          entry[1].length > 0 &&
          entry[1].length <= MAX_FIELD_LENGTH,
      )
      .slice(0, MAX_FIELDS);

    const lang = typeof body.lang === 'string' ? body.lang : 'unknown';
    const langLabel = LANG_LABEL[lang] ?? lang;

    const lines = [`*新しいお問い合わせ* ${langLabel}`, ...entries.map(([key, value]) => `*${key}*: ${value}`)];

    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: lines.join('\n') }),
    });

    if (!slackRes.ok) {
      console.error('[notify] slack webhook failed', slackRes.status);
      return c.json({ error: 'slack_error' }, 502);
    }

    return c.json({ ok: true });
  } catch (err) {
    console.error('[notify] handler error', err);
    return c.json({ error: 'server_error' }, 500);
  }
});

export default app;
