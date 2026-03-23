import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

export default function NotFound() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const title = isJa
    ? 'ページが見つかりません | フィリピン書類取得代行センター'
    : 'Page Not Found | Philippine Document Service';
  const description = isJa
    ? 'お探しのページは見つかりませんでした。'
    : 'The page you are looking for could not be found.';

  useMeta(title, description);

  useEffect(() => {
    const el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (el) {
      el.setAttribute('content', 'noindex,follow');
    }
  }, []);

  const homeHref = isJa ? '/ja/' : '/en/';

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-6xl font-bold text-gray-300 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          {isJa ? 'ページが見つかりません' : 'Page Not Found'}
        </h1>
        <p className="text-gray-500 mb-8">
          {isJa
            ? 'お探しのページは存在しないか、移動した可能性があります。'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <Link
          to={homeHref}
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {isJa ? 'トップページへ戻る' : 'Back to Home'}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
