export function reportWebVitals() {
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
    const send = ({ name, value, id }: { name: string; value: number; id: string }) => {
      trackEvent(name, {
        metric_id: id,
        metric_value: String(Math.round(name === 'CLS' ? value * 1000 : value)),
        metric_delta: String(Math.round(value)),
      });
    };
    onCLS(send);
    onFCP(send);
    onLCP(send);
    onTTFB(send);
    onINP(send);
  }).catch(() => { /* web-vitals not available in SSR */ });
}

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;

  const payload = { ...params };
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;

  try {
    if (typeof gtag === 'function') {
      // index.html's gtag already pushes to dataLayer. Emit only once.
      gtag('event', name, payload);
      return;
    }
    const dataLayerWindow = window as Window & { dataLayer?: unknown[] };
    if (Array.isArray(dataLayerWindow.dataLayer)) {
      dataLayerWindow.dataLayer.push({ event: name, ...payload });
    }
  } catch {
    // Analytics must never prevent a visitor from making an inquiry.
  }
}

const CTA_VARIANT_KEY = 'cta_variant';
let assignedCtaVariant: 'A' | 'B' | undefined;

export function getCtaVariant(): 'A' | 'B' {
  if (typeof window === 'undefined') return 'A';

  if (assignedCtaVariant) return assignedCtaVariant;
  try {
    const stored = window.localStorage.getItem(CTA_VARIANT_KEY);
    if (stored === 'A' || stored === 'B') return (assignedCtaVariant = stored);
  } catch { /* Storage can be disabled by the browser. */ }

  assignedCtaVariant = Math.random() < 0.5 ? 'A' : 'B';
  try {
    window.localStorage.setItem(CTA_VARIANT_KEY, assignedCtaVariant);
  } catch { /* Keep the assignment in memory for this visit. */ }
  return assignedCtaVariant;
}

const ENTRY_KEY = 'inquiry_entry_v1';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type EntryAttribution = {
  landing_page: string;
  referrer: string;
  paid_click: boolean;
} & Record<(typeof UTM_KEYS)[number], string>;
let entryAttribution: EntryAttribution | undefined;
let lastActivity = 0;
let lastStoredActivity = 0;

function saveEntryActivity(now: number) {
  lastActivity = now;
  if (now - lastStoredActivity < 60_000) return;
  lastStoredActivity = now;
  try {
    window.sessionStorage.setItem(ENTRY_KEY, JSON.stringify({ ...entryAttribution, lastActivity }));
  } catch { /* Memory still preserves attribution across SPA navigation. */ }
}

/** Omit query strings, fragments and credentials from saved page URLs. */
export function pageUrl(value: string): string {
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) ? `${url.origin}${url.pathname}` : '';
  } catch {
    return '';
  }
}

export function getEntryAttribution(): EntryAttribution {
  const empty: EntryAttribution = {
    landing_page: '', referrer: '', paid_click: false, utm_source: '', utm_medium: '',
    utm_campaign: '', utm_content: '', utm_term: '',
  };
  if (typeof window === 'undefined') return empty;
  const now = Date.now();
  if (entryAttribution && now - lastActivity < SESSION_TIMEOUT_MS) {
    saveEntryActivity(now);
    return { ...entryAttribution };
  }

  try {
    const saved = JSON.parse(window.sessionStorage.getItem(ENTRY_KEY) || 'null');
    const keys = ['landing_page', 'referrer', ...UTM_KEYS] as const;
    if (saved && keys.every(key => typeof saved[key] === 'string') &&
        typeof saved.paid_click === 'boolean' &&
        typeof saved.lastActivity === 'number' && now - saved.lastActivity >= 0 &&
        now - saved.lastActivity < SESSION_TIMEOUT_MS &&
        pageUrl(saved.landing_page) === saved.landing_page &&
        new URL(saved.landing_page).origin === window.location.origin) {
      entryAttribution = {
        ...Object.fromEntries(keys.map(key => [key, saved[key]])), paid_click: saved.paid_click,
      } as EntryAttribution;
      saveEntryActivity(now);
      return { ...entryAttribution };
    }
  } catch { /* Invalid or unavailable session storage: capture this entry. */ }

  const params = new URLSearchParams(window.location.search);
  let referrer = '';
  try {
    // The origin identifies the referrer without retaining a private search or conversation URL.
    const referrerPage = pageUrl(document.referrer);
    if (referrerPage) referrer = new URL(referrerPage).origin;
  } catch { /* Direct entry or an unavailable referrer. */ }
  entryAttribution = {
    ...empty,
    landing_page: pageUrl(window.location.href),
    referrer,
    paid_click: ['gclid', 'gbraid', 'wbraid'].some(key => !!params.get(key)),
    ...Object.fromEntries(UTM_KEYS.map(key => [key, (params.get(key) || '').slice(0, 200)])),
  };
  lastStoredActivity = 0;
  saveEntryActivity(now);
  return { ...entryAttribution };
}

/** Only fixed source categories go to GA; raw UTMs stay with the inquiry. */
export function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'unknown';
  const entry = getEntryAttribution();
  if (entry.paid_click) return 'google';
  const sources: Record<string, string> = {
    google: 'google', bing: 'bing', yahoo: 'yahoo', duckduckgo: 'duckduckgo',
    chatgpt: 'chatgpt', openai: 'chatgpt', claude: 'claude', gemini: 'gemini',
    facebook: 'facebook', fb: 'facebook', instagram: 'instagram',
    twitter: 'x', x: 'x', line: 'line', kakao: 'kakao', whatsapp: 'whatsapp',
  };
  if (entry.utm_source) {
    const source = entry.utm_source.toLowerCase();
    return Object.prototype.hasOwnProperty.call(sources, source) ? sources[source] : 'campaign';
  }
  if (entry.referrer) {
    try {
      const host = new URL(entry.referrer).hostname;
      if (host === window.location.hostname) return 'internal';
      const knownHosts: [RegExp, string][] = [
        [/^gemini\.google\.com$/, 'gemini'],
        [/(^|\.)google\.[a-z.]+$/, 'google'], [/(^|\.)bing\.com$/, 'bing'],
        [/(^|\.)yahoo\.[a-z.]+$/, 'yahoo'], [/(^|\.)duckduckgo\.com$/, 'duckduckgo'],
        [/(^|\.)(chatgpt\.com|openai\.com)$/, 'chatgpt'], [/(^|\.)claude\.ai$/, 'claude'],
        [/(^|\.)facebook\.com$/, 'facebook'],
        [/(^|\.)instagram\.com$/, 'instagram'], [/(^|\.)(x\.com|twitter\.com|t\.co)$/, 'x'],
      ];
      return knownHosts.find(([pattern]) => pattern.test(host))?.[1] || 'referral';
    } catch {
      return 'referral';
    }
  }
  return 'direct';
}

export function getTrafficMedium(): string {
  if (typeof window === 'undefined') return 'unknown';
  const entry = getEntryAttribution();
  if (entry.paid_click) return 'paid';
  const medium = entry.utm_medium.toLowerCase();
  if (medium) {
    if (['cpc', 'ppc', 'paid', 'paid_search', 'paid_social'].includes(medium)) return 'paid';
    return ['organic', 'social', 'email', 'referral'].includes(medium) ? medium : 'campaign';
  }
  const source = getTrafficSource();
  if (['google', 'bing', 'yahoo', 'duckduckgo'].includes(source)) return 'organic';
  if (source === 'direct') return 'none';
  if (source === 'internal' || source === 'unknown' || source === 'campaign') return source;
  return 'referral';
}

// Capture before React Router can replace the original entry URL with an internal page.
if (typeof window !== 'undefined') {
  getEntryAttribution();
  // Keep an active visit together, but expire a tab left idle for more than 30 minutes.
  const onActivity = () => { getEntryAttribution(); };
  for (const event of ['pointerdown', 'keydown', 'scroll']) {
    window.addEventListener(event, onActivity, { passive: true });
  }
}

export function trackLandingView() {
  if (typeof window === 'undefined') return;

  trackEvent('landing_view', {
    cta_variant: getCtaVariant(),
    traffic_source: getTrafficSource(),
    path: window.location.pathname,
  });
}
