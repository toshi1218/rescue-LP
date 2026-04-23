import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, X } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const STORAGE_KEY = 'notice-banner-psa-2026-dismissed';
const NOTICE_PATH = '/ja/psa-ecertificate-2026/';

export default function NoticeBanner() {
  const { pathname } = useLocation();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') {
        setDismissed(true);
      }
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const isJa = pathname.startsWith('/ja/') || pathname === '/ja';
  const isOnNoticePage = pathname.startsWith(NOTICE_PATH);
  if (!isJa || isOnNoticePage || dismissed) return null;

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore storage errors */
    }
    setDismissed(true);
    trackEvent('notice_banner', { action: 'dismiss', id: 'psa-2026' });
  };

  const handleClick = () => {
    trackEvent('notice_banner', { action: 'click', id: 'psa-2026' });
  };

  return (
    <aside
      role="region"
      aria-label="重要なお知らせ"
      className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-300/60"
    >
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 py-2.5 pr-10 flex items-center gap-2.5">
        <AlertTriangle
          className="w-4 h-4 shrink-0 text-amber-600"
          aria-hidden="true"
        />
        <p className="text-[11px] md:text-xs leading-snug text-gray-800 flex-1 min-w-0">
          <span className="font-bold text-amber-900">【重要】2026年3月以降、フィリピンPSA書類の取得形式が「電子」と「紙」に分かれました。</span>
          <span className="hidden md:inline text-gray-700">
            {' '}日本の市区町村・法務局・入管等では対応が未統一のため、提出先ごとの要件確認が必要です。電子・紙の両形式に対応可能な弊社が、要件切り分けから一貫サポートします。
          </span>
          <span className="font-bold text-red-700">
            {' '}※ご依頼殺到中・納期約2ヶ月（お急ぎの方はご連絡ください）
          </span>
          <Link
            to={NOTICE_PATH}
            onClick={handleClick}
            className="ml-1 font-bold text-amber-700 hover:text-amber-900 underline underline-offset-2 whitespace-nowrap"
          >
            詳細を見る →
          </Link>
        </p>
      </div>
      <button
        type="button"
        aria-label="お知らせを閉じる"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-amber-800/70 hover:text-amber-900 hover:bg-amber-100/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </aside>
  );
}
