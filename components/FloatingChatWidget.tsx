import React, { lazy, Suspense, useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { trackEvent } from '../lib/analytics';

const FloatingChatPanel = lazy(() => import('./FloatingChatPanel'));

export default function FloatingChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleOpen = () => {
    setOpen(true);
    trackEvent('chat_widget_open', { lang, path: window.location.pathname });
  };

  const handleClose = () => {
    setOpen(false);
    trackEvent('chat_widget_close', { lang });
  };

  if (open) {
    return (
      <Suspense fallback={null}>
        <FloatingChatPanel onClose={handleClose} />
      </Suspense>
    );
  }

  return (
    <button
      type="button"
      onClick={handleOpen}
      aria-label={t('chat.openAriaLabel')}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-secondary font-bold py-3 px-5 rounded-full shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span className="text-sm">{t('chat.buttonLabel')}</span>
    </button>
  );
}
