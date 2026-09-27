import { useState } from 'react';

const STORAGE_KEY = 'ph-document-analytics-consent';

type ConsentChoice = 'granted' | 'denied';

function updateConsent(choice: ConsentChoice) {
  localStorage.setItem(STORAGE_KEY, choice);
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.('consent', 'update', {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === null;
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  const choose = (choice: ConsentChoice) => {
    try {
      updateConsent(choice);
    } finally {
      setVisible(false);
    }
  };

  return (
    <aside
      className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl"
      aria-label="Cookie preferences"
      role="dialog"
      aria-live="polite"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-gray-600">
          We use optional analytics cookies to understand site usage. / 利用状況の把握に任意の解析Cookieを使用します。{' '}
          <a className="font-semibold text-primary underline" href="/en/privacy/">Privacy</a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose('denied')} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700">
            Decline / 拒否
          </button>
          <button type="button" onClick={() => choose('granted')} className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-secondary">
            Accept / 同意
          </button>
        </div>
      </div>
    </aside>
  );
}
