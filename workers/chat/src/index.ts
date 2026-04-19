import Anthropic from '@anthropic-ai/sdk';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { buildSystemPrompt, type PromptLang } from './prompt';
import { checkRateLimit } from './rateLimit';

type Bindings = {
  ANTHROPIC_API_KEY: string;
  ALLOWED_ORIGIN: string;
  MODEL: string;
  RATE_LIMIT: KVNamespace;
};

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGES = 20;
const MAX_CHAR_PER_MESSAGE = 2000;

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', (c, next) => {
  const origin = c.env.ALLOWED_ORIGIN;
  return cors({
    origin,
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Accept'],
    maxAge: 86400,
  })(c, next);
});

app.get('/', (c) => c.text('ph-document chat worker: OK', 200));

app.post('/api/chat', async (c) => {
  try {
    if (!c.env.ANTHROPIC_API_KEY) {
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

    const client = new Anthropic({ apiKey: c.env.ANTHROPIC_API_KEY });
    const system = buildSystemPrompt(lang);

    const stream = await client.messages.stream({
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
