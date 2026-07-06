import Anthropic from '@anthropic-ai/sdk';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { fetchChatConfig } from './config';
import { buildSystemPrompt, type PromptLang } from './prompt';
import { checkRateLimit } from './rateLimit';
import { createStatus, getStatus, isValidId, updateStatus, type OrderStatusInput } from './statusStore';

type Bindings = {
  ANTHROPIC_API_KEY?: string;
  ALLOWED_ORIGIN: string;
  MODEL: string;
  RATE_LIMIT?: KVNamespace;
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  SUPABASE_SERVICE_KEY?: string;
  ADMIN_PASSPHRASE?: string;
};

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGES = 20;
const MAX_CHAR_PER_MESSAGE = 2000;

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', (c, next) => {
  const origin = c.env.ALLOWED_ORIGIN;
  return cors({
    origin,
    allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Accept', 'X-Admin-Passphrase'],
    maxAge: 86400,
  })(c, next);
});

app.get('/', (c) => c.text('ph-document chat worker: OK', 200));

function isAdmin(c: { req: { header: (name: string) => string | undefined }; env: Bindings }): boolean {
  const provided = c.req.header('x-admin-passphrase');
  const expected = c.env.ADMIN_PASSPHRASE;
  return !!expected && !!provided && provided === expected;
}

app.get('/api/status/:id', async (c) => {
  const id = c.req.param('id');
  if (!isValidId(id)) return c.json({ error: 'invalid_id' }, 400);
  if (!c.env.SUPABASE_URL || !c.env.SUPABASE_SERVICE_KEY) {
    return c.json({ error: 'not_configured' }, 500);
  }
  const row = await getStatus(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_KEY, id);
  if (!row) return c.json({ error: 'not_found' }, 404);
  return c.json(row);
});

app.post('/api/status', async (c) => {
  const ip = c.req.header('cf-connecting-ip') ?? 'unknown';
  const rl = await checkRateLimit(c.env.RATE_LIMIT, `admin:${ip}`);
  if (!rl.allowed) return c.json({ error: 'rate_limited' }, 429);
  if (!isAdmin(c)) return c.json({ error: 'unauthorized' }, 401);
  if (!c.env.SUPABASE_URL || !c.env.SUPABASE_SERVICE_KEY) {
    return c.json({ error: 'not_configured' }, 500);
  }
  let body: OrderStatusInput;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }
  const row = await createStatus(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_KEY, body);
  if (!row) return c.json({ error: 'create_failed' }, 500);
  return c.json(row, 201);
});

app.put('/api/status/:id', async (c) => {
  const ip = c.req.header('cf-connecting-ip') ?? 'unknown';
  const rl = await checkRateLimit(c.env.RATE_LIMIT, `admin:${ip}`);
  if (!rl.allowed) return c.json({ error: 'rate_limited' }, 429);
  if (!isAdmin(c)) return c.json({ error: 'unauthorized' }, 401);
  const id = c.req.param('id');
  if (!isValidId(id)) return c.json({ error: 'invalid_id' }, 400);
  if (!c.env.SUPABASE_URL || !c.env.SUPABASE_SERVICE_KEY) {
    return c.json({ error: 'not_configured' }, 500);
  }
  let body: OrderStatusInput;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }
  const row = await updateStatus(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_KEY, id, body);
  if (!row) return c.json({ error: 'not_found' }, 404);
  return c.json(row);
});

app.post('/api/chat', async (c) => {
  try {
    const apiKey = c.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('[chat] ANTHROPIC_API_KEY is not set');
      return c.json({ error: 'missing_api_key' }, 500);
    }

    const ip = c.req.header('cf-connecting-ip') ?? 'unknown';
    const rl = await checkRateLimit(c.env.RATE_LIMIT, ip);
    if (!rl.allowed) {
      return c.json({ error: 'rate_limited' }, 429);
    }

    let body: { messages?: ChatMessage[]; lang?: PromptLang };
    try {
      body = await c.req.json();
    } catch {
      return c.json({ error: 'invalid_json' }, 400);
    }

    const messages = Array.isArray(body.messages) ? body.messages : [];
    const lang: PromptLang = body.lang === 'ja' ? 'ja' : 'en';

    if (messages.length === 0 || messages.length > MAX_MESSAGES) {
      return c.json({ error: 'invalid_messages' }, 400);
    }
    for (const m of messages) {
      if (
        (m.role !== 'user' && m.role !== 'assistant') ||
        typeof m.content !== 'string' ||
        m.content.length === 0 ||
        m.content.length > MAX_CHAR_PER_MESSAGE
      ) {
        return c.json({ error: 'invalid_message_shape' }, 400);
      }
    }

    const client = new Anthropic({ apiKey });
    const config =
      c.env.SUPABASE_URL && c.env.SUPABASE_ANON_KEY
        ? await fetchChatConfig(c.env.SUPABASE_URL, c.env.SUPABASE_ANON_KEY)
        : null;
    const system = buildSystemPrompt(lang, config);

    const stream = client.messages.stream({
      model: c.env.MODEL,
      max_tokens: 800,
      temperature: 0.3,
      system,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const encoder = new TextEncoder();
    const sseStream = new ReadableStream({
      async start(controller) {
        const send = (data: unknown) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta' &&
              event.delta.text
            ) {
              send({ text: event.delta.text });
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        } catch (err) {
          console.error('[chat] stream error', err);
          send({ error: 'stream_error' });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(sseStream, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    console.error('[chat] handler error', err);
    return c.json({ error: 'server_error' }, 500);
  }
});

export default app;
