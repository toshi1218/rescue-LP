import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

type Lang = 'ja' | 'en' | 'ko';

interface PopularLink {
  label: string;
  to: string;
}

const popularLinks: Record<Lang, PopularLink[]> = {
  ja: [
    { label: 'CENOMAR',         to: '/ja/cenomar/' },
    { label: 'NBI Clearance',   to: '/ja/nbi-clearance/' },
    { label: 'DFAアポスティーユ', to: '/ja/apostille/' },
    { label: '料金一覧',          to: '/ja/ryokin/' },
    { label: 'お問い合わせ',       to: '/ja/contact/' },
  ],
  en: [
    { label: 'CENOMAR',        to: '/en/cenomar/' },
    { label: 'NBI Clearance',  to: '/en/nbi-clearance/' },
    { label: 'DFA Apostille',  to: '/en/apostille/' },
    { label: 'Pricing',        to: '/en/pricing/' },
    { label: 'Contact',        to: '/en/contact/' },
  ],
  ko: [
    { label: 'Home',                    to: '/ko/' },
    { label: 'NBI Clearance',           to: '/ko/nbi-clearance/' },
    { label: 'F-6 Visa Documents',      to: '/ko/f-6-philippines-documents/' },
    { label: 'Pricing',                 to: '/ko/pricing/' },
    { label: 'Contact',                 to: '/ko/contact/' },
  ],
};

const sectionTitle: Record<Lang, string> = {
  ja: 'よく閲覧されるページ',
  en: 'Popular Pages',
  ko: '자주 방문하는 페이지',
};

const headingText: Record<Lang, string> = {
  ja: 'ページが見つかりません',
  en: 'Page Not Found',
  ko: '페이지를 찾을 수 없습니다',
};

const bodyText: Record<Lang, string> = {
  ja: 'お探しのページは存在しないか、移動した可能性があります。',
  en: 'The page you are looking for does not exist or has been moved.',
  ko: '찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.',
};

const backText: Record<Lang, string> = {
  ja: 'トップページへ戻る',
  en: 'Back to Home',
  ko: '홈으로 돌아가기',
};

export default function NotFound() {
  const { lang } = useLanguage();
  const { pathname } = useLocation();

  const detectedLang: Lang =
    pathname.startsWith('/ko/') || pathname === '/ko'
      ? 'ko'
      : lang === 'ja'
      ? 'ja'
      : 'en';

  const isJa = detectedLang === 'ja';

  const title = isJa
    ? 'ページが見つかりません | フィリピン書類取得代行センター'
    : detectedLang === 'ko'
    ? '페이지를 찾을 수 없습니다 | 필리핀 서류 대행 센터'
    : 'Page Not Found | Philippine Document Service';

  const description = isJa
    ? 'お探しのページは見つかりませんでした。'
    : detectedLang === 'ko'
    ? '찾으시는 페이지를 찾을 수 없습니다.'
    : 'The page you are looking for could not be found.';

  useMeta(title, description);

  useEffect(() => {
    const el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (el) {
      el.setAttribute('content', 'noindex,follow');
    }
  }, []);

  const homeHref = detectedLang === 'ko' ? '/ko/' : isJa ? '/ja/' : '/en/';
  const links = popularLinks[detectedLang];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-6xl font-bold text-gray-300 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          {headingText[detectedLang]}
        </h1>
        <p className="text-gray-500 mb-8">
          {bodyText[detectedLang]}
        </p>
        <Link
          to={homeHref}
          className="inline-block bg-primary text-secondary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {backText[detectedLang]}
        </Link>

        <div className="mt-12 w-full max-w-sm text-left">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {sectionTitle[detectedLang]}
          </p>
          <ul className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary text-sm font-medium"
                >
                  {label}
                  <span className="text-gray-300 ml-2" aria-hidden="true">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
