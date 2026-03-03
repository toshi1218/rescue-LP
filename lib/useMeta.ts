import { useEffect } from 'react';

const BASE = 'https://ph-document.com';
const DEFAULT_TITLE = 'フィリピン書類取得代行｜CENOMAR・PSA・LTO最短依頼';
const DEFAULT_DESCRIPTION =
  '日本在住でフィリピン書類が急ぎで必要な方へ。CENOMAR（独身証明書）・PSA出生証明書・LTO・DFAアポスティーユを現地スタッフが代行取得。国際結婚・外免切替・配偶者ビザに最短対応。無料相談受付中。';
const DEFAULT_CANONICAL = `${BASE}/`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(href: string) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) el.setAttribute('href', href);
}

export function useMeta(title: string, description: string, canonical?: string) {
  useEffect(() => {
    const canonicalHref = canonical ?? `${BASE}${window.location.pathname.replace(/\/?$/, '/')}`;
    const isJa = /\/ja(\/|$)/.test(window.location.pathname);
    const locale = isJa ? 'ja_JP' : 'en_US';
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalHref, 'property');
    setMeta('og:locale', locale, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setCanonical(canonicalHref);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('description', DEFAULT_DESCRIPTION);
      setMeta('og:title', DEFAULT_TITLE, 'property');
      setMeta('og:description', DEFAULT_DESCRIPTION, 'property');
      setMeta('og:url', DEFAULT_CANONICAL, 'property');
      setMeta('og:locale', 'ja_JP', 'property');
      setMeta('twitter:title', DEFAULT_TITLE);
      setMeta('twitter:description', DEFAULT_DESCRIPTION);
      setCanonical(DEFAULT_CANONICAL);
    };
  }, [title, description, canonical]);
}
