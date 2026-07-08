import { useEffect } from 'react';

const BASE = 'https://ph-document.com';
const JA_DEFAULT_TITLE = 'フィリピン書類取得代行｜CENOMAR・PSA・LTO 日本語だけで確実に取り寄せ';
const JA_DEFAULT_DESCRIPTION =
  'フィリピン書類の取得を日本語だけで安心おまかせ。CENOMAR（独身証明書）・PSA出生証明書・LTO・DFAアポスティーユを現地スタッフが完全代行。進捗は随時ご報告。国際結婚・外免切替・配偶者ビザに対応。無料相談受付中。';
const EN_DEFAULT_TITLE = 'Philippine Document Retrieval Service — PSA, CENOMAR, NBI & Apostille';
const EN_DEFAULT_DESCRIPTION =
  'We retrieve PSA birth certificates, CENOMAR, NBI Clearance, and DFA Apostille from the Philippines and ship worldwide via DHL. English-language support. Free consultation.';
const KO_DEFAULT_TITLE = '필리핀 서류 대행 서비스 — PSA, CENOMAR, NBI & 아포스티유';
const KO_DEFAULT_DESCRIPTION =
  'PSA 출생증명서, CENOMAR, NBI 클리어런스, DFA 아포스티유를 필리핀에서 대행 취득하여 전 세계로 DHL 배송. 무료 상담 가능.';
const JA_OG_IMAGE = `${BASE}/og-image-ja.png`;
const KO_OG_IMAGE = `${BASE}/og-image-ko.png`;
const EN_OG_IMAGE = `${BASE}/og-image.png`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(href: string) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) el.setAttribute('href', href);
}

type HreflangAlternate = { hreflang: string; href: string };

function setHreflangTags(alternates: HreflangAlternate[]) {
  // The prerendered HTML already contains the correct hreflang tags for the
  // initial URL. Only mutate the DOM when the requested set actually differs,
  // so hydration never removes (even momentarily) what the server emitted.
  const existing = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]'));
  const isSame =
    existing.length === alternates.length &&
    alternates.every(({ hreflang, href }) =>
      existing.some((el) => el.getAttribute('hreflang') === hreflang && el.getAttribute('href') === href)
    );
  if (isSame) return;
  existing.forEach((el) => el.remove());
  alternates.forEach(({ hreflang, href }) => {
    const el = document.createElement('link');
    el.rel = 'alternate';
    el.hreflang = hreflang;
    el.href = href;
    document.head.appendChild(el);
  });
}

function toAbsUrl(path: string): string {
  return `${BASE}${path.replace(/\/?$/, '/')}`;
}

export function useMeta(title: string, description: string, canonical?: string, alternates?: HreflangAlternate[]) {
  useEffect(() => {
    const pathname = window.location.pathname;
    const canonicalHref = canonical ?? toAbsUrl(pathname);
    const isJa = /\/ja(\/|$)/.test(pathname);
    const isKo = /\/ko(\/|$)/.test(pathname);
    const locale = isJa ? 'ja_JP' : isKo ? 'ko_KR' : 'en_US';
    const ogImage = isJa ? JA_OG_IMAGE : isKo ? KO_OG_IMAGE : EN_OG_IMAGE;

    document.title = title;
    document.documentElement.lang = isJa ? 'ja' : isKo ? 'ko' : 'en';
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalHref, 'property');
    setMeta('og:locale', locale, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setCanonical(canonicalHref);
    if (alternates && alternates.length > 0) {
      setHreflangTags(alternates);
    }

    return () => {
      const currentPath = window.location.pathname;
      const isCurrentJa = /\/ja(\/|$)/.test(currentPath);
      const isCurrentKo = /\/ko(\/|$)/.test(currentPath);
      const defaultTitle = isCurrentJa ? JA_DEFAULT_TITLE : isCurrentKo ? KO_DEFAULT_TITLE : EN_DEFAULT_TITLE;
      const defaultDesc = isCurrentJa ? JA_DEFAULT_DESCRIPTION : isCurrentKo ? KO_DEFAULT_DESCRIPTION : EN_DEFAULT_DESCRIPTION;
      const defaultCanonical = isCurrentJa ? `${BASE}/ja/` : isCurrentKo ? `${BASE}/ko/` : `${BASE}/en/`;
      const currentLocale = isCurrentJa ? 'ja_JP' : isCurrentKo ? 'ko_KR' : 'en_US';
      const defaultOgImage = isCurrentJa ? JA_OG_IMAGE : isCurrentKo ? KO_OG_IMAGE : EN_OG_IMAGE;
      document.title = defaultTitle;
      setMeta('description', defaultDesc);
      setMeta('og:title', defaultTitle, 'property');
      setMeta('og:description', defaultDesc, 'property');
      setMeta('og:url', defaultCanonical, 'property');
      setMeta('og:locale', currentLocale, 'property');
      setMeta('og:image', defaultOgImage, 'property');
      setMeta('twitter:title', defaultTitle);
      setMeta('twitter:description', defaultDesc);
      setMeta('twitter:image', defaultOgImage);
      setCanonical(defaultCanonical);
      // Do NOT remove hreflang tags here. No page currently passes
      // `alternates`, so wiping on unmount would permanently strip the
      // server-rendered hreflang after any SPA navigation. The prerendered
      // tags stay in place; a page that does pass `alternates` will replace
      // them via setHreflangTags on mount.
    };
  }, [title, description, canonical, alternates]);
}
