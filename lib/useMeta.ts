import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createRouteMetadataController, normalizeRoutePath } from './routeMetadata';
import type { HreflangAlternate, RouteMetadataManifest } from './routeMetadata';

const BASE = 'https://ph-document.com';
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

async function loadRouteMetadata(): Promise<RouteMetadataManifest> {
  const abort = new AbortController();
  const timeout = window.setTimeout(() => abort.abort(), 5000);
  try {
    const response = await fetch('/route-metadata.json', { cache: 'no-cache', signal: abort.signal });
    if (!response.ok) throw new Error('Route metadata unavailable');
    const value: unknown = await response.json();
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error('Invalid route metadata');
    }
    const isSiteUrl = (href: unknown): href is string =>
      typeof href === 'string' && href.startsWith(`${BASE}/`);
    const normalized: RouteMetadataManifest = {};
    for (const [route, metadata] of Object.entries(value)) {
      if (!route.startsWith('/') || !metadata || typeof metadata !== 'object') {
        throw new Error('Invalid route metadata');
      }
      const policy = metadata as RouteMetadataManifest[string];
      if (!isSiteUrl(policy.canonical) || typeof policy.robots !== 'string' || !policy.robots ||
          !Array.isArray(policy.alternates) || !policy.alternates.every((alternate) =>
            alternate && typeof alternate.hreflang === 'string' && isSiteUrl(alternate.href))) {
        throw new Error('Invalid route metadata');
      }
      normalized[normalizeRoutePath(route)] = policy;
    }
    return normalized;
  } finally {
    window.clearTimeout(timeout);
  }
}

let routeMetadata: ReturnType<typeof createRouteMetadataController> | undefined;

function getRouteMetadata() {
  return routeMetadata ??= createRouteMetadataController({
    getPathname: () => window.location.pathname,
    setAlternates: setHreflangTags,
    setRobots: (robots) => {
      let element = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (!element) {
        element = document.createElement('meta');
        element.name = 'robots';
        document.head.appendChild(element);
      }
      if (element.getAttribute('content') !== robots) element.setAttribute('content', robots);
    },
    loadManifest: loadRouteMetadata,
    reload: () => window.location.reload(),
  });
}

export function useMeta(
  title: string,
  description: string,
  canonical?: string,
  alternates?: HreflangAlternate[],
  robots?: string,
) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (normalizeRoutePath(window.location.pathname) !== normalizeRoutePath(pathname)) return;
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
    getRouteMetadata().synchronize(pathname, { alternates, robots });
    // The incoming route owns the head. Resetting it to home-page defaults on
    // cleanup would briefly corrupt metadata during navigation/StrictMode.
  }, [title, description, canonical, alternates, robots, pathname]);
}
