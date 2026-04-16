import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, X } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { trackEvent } from '../lib/analytics';
import { streamChat, type ChatMessage } from '../lib/chatApi';

type UIMessage = ChatMessage & { id: string };

type Props = { onClose: () => void };

const QUICK_PROMPT_KEYS = [
  'chat.quickPrompt.psa',
  'chat.quickPrompt.cenomar',
  'chat.quickPrompt.nbi',
  'chat.quickPrompt.apostille',
  'chat.quickPrompt.pricing',
] as const;

function makeId() {
  return `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export default function FloatingChatPanel({ onClose }: Props) {
  const { lang, t } = useLanguage();
  const contactPath = lang === 'ja' ? '/ja/contact/' : '/en/contact/';

  const greeting: UIMessage = useMemo(
    () => ({ id: 'greeting', role: 'assistant', content: t('chat.greeting') }),
    [t],
  );

  const [messages, setMessages] = useState<UIMessage[]>([greeting]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadCapture, setLeadCapture] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || streaming) return;
    setShowQuickPrompts(false);
    setError(null);

    const userMsg: UIMessage = { id: makeId(), role: 'user', content: text.trim() };
    const assistantId = makeId();
    const assistantMsg: UIMessage = { id: assistantId, role: 'assistant', content: '' };
    const history = [...messages, userMsg];

    setMessages([...history, assistantMsg]);
    setInput('');
    setStreaming(true);
    trackEvent('chat_message_sent', { lang, message_len: String(text.length) });

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const historyForApi: ChatMessage[] = history
        .filter((m) => m.id !== 'greeting')
        .map(({ role, content }) => ({ role, content }));

      let leadDetected = false;
      for await (const chunk of streamChat(historyForApi, lang, controller.signal)) {
        if (chunk.type === 'text') {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + chunk.value } : m)),
          );
        } else if (chunk.type === 'done') {
          leadDetected = chunk.leadCapture;
        }
      }

      if (leadDetected) {
        setLeadCapture(true);
        trackEvent('chat_lead_captured', { lang });
      }
      trackEvent('chat_response_received', { lang });
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      setError(t('chat.error'));
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  const handleQuickPrompt = (key: typeof QUICK_PROMPT_KEYS[number]) => {
    void sendMessage(t(key));
  };

  const handleHandoffClick = () => {
    trackEvent('chat_handoff_click', { lang });
  };

  return (
    <div
      role="dialog"
      aria-label={t('chat.dialogAriaLabel')}
      className="fixed z-[60] bg-white shadow-2xl flex flex-col inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[560px] sm:rounded-2xl overflow-hidden border border-gray-200"
    >
      <header className="flex items-center justify-between px-4 py-3 bg-secondary text-white">
        <div>
          <p className="font-bold text-sm">{t('chat.headerTitle')}</p>
          <p className="text-xs text-white/70">{t('chat.headerSubtitle')}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('chat.closeAriaLabel')}
          className="p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background-light"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
          >
            <div
              className={
                m.role === 'user'
                  ? 'bg-primary text-secondary rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%] text-sm whitespace-pre-wrap'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%] text-sm whitespace-pre-wrap'
              }
            >
              {m.content || (streaming && m.role === 'assistant' ? '…' : '')}
            </div>
          </div>
        ))}

        {showQuickPrompts && !streaming && (
          <div className="pt-2 flex flex-wrap gap-2">
            {QUICK_PROMPT_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleQuickPrompt(key)}
                className="text-xs bg-white border border-secondary/20 text-secondary px-3 py-1.5 rounded-full hover:bg-secondary/5 transition-colors"
              >
                {t(key)}
              </button>
            ))}
          </div>
        )}

        {leadCapture && (
          <div className="mt-3 p-3 bg-primary/10 border border-primary/30 rounded-xl">
            <p className="text-xs text-gray-700 mb-2">{t('chat.handoff.message')}</p>
            <Link
              to={contactPath}
              onClick={handleHandoffClick}
              className="inline-flex items-center justify-center w-full bg-primary text-secondary font-bold py-2 px-4 rounded-lg text-sm hover:bg-primary-hover transition-colors"
            >
              {t('chat.handoff.cta')}
            </Link>
          </div>
        )}

        {error && (
          <p className="text-xs text-red-600 px-2">{error}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2 px-3 py-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            disabled={streaming}
            aria-label={t('chat.inputAriaLabel')}
            className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={streaming || !input.trim()}
            aria-label={t('chat.send')}
            className="bg-primary text-secondary font-bold p-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <p className="text-[10px] text-gray-500 px-3 pb-2 leading-tight">{t('chat.disclaimer')}</p>
      </form>
    </div>
  );
}
