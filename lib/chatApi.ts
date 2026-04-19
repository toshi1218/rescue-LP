export type ChatLang = 'ja' | 'en';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export type StreamChatChunk =
  | { type: 'text'; value: string }
  | { type: 'done'; leadCapture: boolean };

const DEFAULT_API_URL = 'https://chat.ph-document.com/api/chat';

function resolveApiUrl(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_CHAT_API_URL;
  return envUrl || DEFAULT_API_URL;
}

const LEAD_TOKEN = '[LEAD_CAPTURE]';

export async function* streamChat(
  messages: ChatMessage[],
  lang: ChatLang,
  signal?: AbortSignal,
): AsyncGenerator<StreamChatChunk, void, unknown> {
  const response = await fetch(resolveApiUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
    body: JSON.stringify({ messages, lang }),
    signal,
  });

  if (!response.ok || !response.body) {
    let detail = '';
    try {
      const data = (await response.clone().json()) as { error?: string };
      if (data?.error) detail = ` (${data.error})`;
    } catch {
      // Response was not JSON
    }
    console.error(`[chat] API error ${response.status}${detail}`);
    throw new Error(`Chat API error: ${response.status}${detail}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  // Hold back the last (LEAD_TOKEN.length - 1) chars so a token split across
  // stream chunks is still detected on the concatenation.
  let pending = '';
  let leadDetected = false;

  const flushPending = (final: boolean): string => {
    if (leadDetected) return final ? pending : '';
    const idx = pending.indexOf(LEAD_TOKEN);
    if (idx !== -1) {
      leadDetected = true;
      const out = pending.slice(0, idx) + pending.slice(idx + LEAD_TOKEN.length);
      pending = '';
      return out;
    }
    if (final) {
      const out = pending;
      pending = '';
      return out;
    }
    // Keep the tail that could be the start of LEAD_TOKEN.
    const keep = LEAD_TOKEN.length - 1;
    if (pending.length <= keep) return '';
    const out = pending.slice(0, pending.length - keep);
    pending = pending.slice(pending.length - keep);
    return out;
  };

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const events = buffer.split('\n\n');
      buffer = events.pop() ?? '';

      for (const event of events) {
        const line = event.trim();
        if (!line.startsWith('data:')) continue;
        const data = line.slice(5).trim();
        if (!data || data === '[DONE]') continue;

        try {
          const parsed = JSON.parse(data) as { text?: string };
          if (typeof parsed.text !== 'string') continue;
          pending += parsed.text;
          const emit = flushPending(false);
          if (emit) yield { type: 'text', value: emit };
        } catch {
          // Ignore malformed event lines
        }
      }
    }
    const tail = flushPending(true);
    if (tail) yield { type: 'text', value: tail };
  } finally {
    reader.releaseLock();
  }

  yield { type: 'done', leadCapture: leadDetected };
}
