import { useEffect } from 'react';

const BASE = 'https://ph-document.com';
const DEFAULT_TITLE = 'フィリピン書類取得代行｜CENOMAR・PSA・LTO 日本語だけで確実に取り寄せ';
const DEFAULT_DESCRIPTION =
  'フィリピン書類の取得を日本語だけで安心おまかせ。CENOMAR（独身証明書）・PSA出生証明書・LTO・DFAアポスティーユを現地スタッフが完全代行。進捗は随時ご報告。国際結婚・外免切替・配偶者ビザに対応。無料相談受付中。';
const DEFAULT_CANONICAL = `${BASE}/`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(href: string) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) el.setAttribute('href', href);
}

function toAbsUrl(path: string): string {
  return `${BASE}${path.replace(/\/?$/, '/')}`;
}

export function useMeta(title: string, description: string, canonical?: string) {
  useEffect(() => {
    const pathname = window.location.pathname;
    const canonicalHref = canonical ?? toAbsUrl(pathname);
    const isJa = /\/ja(\/|$)/.test(pathname);
    const locale = isJa ? 'ja_JP' : 'en_US';

    document.title = title;
    document.documentElement.lang = isJa ? 'ja' : 'en';
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalHref, 'property');
    setMeta('og:locale', locale, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setCanonical(canonicalHref);

    return () => {
      const currentPath = window.location.pathname;
      const isCurrentJa = /\/ja(\/|$)/.test(currentPath);
      const currentLocale = isCurrentJa ? 'ja_JP' : 'en_US';
      document.title = DEFAULT_TITLE;
      setMeta('description', DEFAULT_DESCRIPTION);
      setMeta('og:title', DEFAULT_TITLE, 'property');
      setMeta('og:description', DEFAULT_DESCRIPTION, 'property');
      setMeta('og:url', DEFAULT_CANONICAL, 'property');
      setMeta('og:locale', currentLocale, 'property');
      setMeta('twitter:title', DEFAULT_TITLE);
      setMeta('twitter:description', DEFAULT_DESCRIPTION);
      setCanonical(DEFAULT_CANONICAL);
    };
  }, [title, description, canonical]);
}
