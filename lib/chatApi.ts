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
    throw new Error(`Chat API error: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let leadDetected = false;

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

          let text = parsed.text;
          if (text.includes(LEAD_TOKEN)) {
            leadDetected = true;
            text = text.split(LEAD_TOKEN).join('');
          }
          if (text) yield { type: 'text', value: text };
        } catch {
          // Ignore malformed event lines
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  yield { type: 'done', leadCapture: leadDetected };
}
