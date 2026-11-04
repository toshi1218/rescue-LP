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

  const { traffic_source, traffic_medium, landing_page } = getAttribution();
  const payload = { traffic_source, traffic_medium, landing_page, page_path: window.location.pathname, ...params };
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;

  if (typeof gtag === 'function') {
    gtag('event', name, payload);
    return; // gtag already writes to dataLayer; do not enqueue the event twice.
  }

  const dataLayerWindow = window as Window & { dataLayer?: unknown[] };
  if (Array.isArray(dataLayerWindow.dataLayer)) {
    dataLayerWindow.dataLayer.push({ event: name, ...payload });
  }
}

const CTA_VARIANT_KEY = 'cta_variant';

export function getCtaVariant(): 'A' | 'B' {
  if (typeof window === 'undefined') return 'A';

  try {
    const stored = window.localStorage.getItem(CTA_VARIANT_KEY);
    if (stored === 'A' || stored === 'B') return stored;
    const assigned = Math.random() < 0.5 ? 'A' : 'B';
    window.localStorage.setItem(CTA_VARIANT_KEY, assigned);
    return assigned;
  } catch {
    return 'A';
  }
}

type Attribution = {
  traffic_source: string;
  traffic_medium: string;
  landing_page: string;
};

const ATTRIBUTION_KEY = 'igrs_attribution_v1';
const SESSION_IDLE_MS = 30 * 60 * 1000;
let attribution: Attribution | undefined;
let lastSeen = 0;

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return { traffic_source: 'unknown', traffic_medium: 'unknown', landing_page: '' };
  const now = Date.now();
  const params = new URLSearchParams(window.location.search);
  const hasCampaign = ['utm_source', 'utm_medium', 'gclid', 'gbraid', 'wbraid'].some(key => params.has(key));
  if (!attribution && !hasCampaign) {
    try {
      const stored = JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_KEY) || 'null');
      if (stored && now - stored.last_seen < SESSION_IDLE_MS && now >= stored.last_seen
        && typeof stored.traffic_source === 'string' && typeof stored.traffic_medium === 'string'
        && typeof stored.landing_page === 'string' && new URL(stored.landing_page).origin === window.location.origin) {
        attribution = { traffic_source: stored.traffic_source, traffic_medium: stored.traffic_medium, landing_page: stored.landing_page };
        lastSeen = stored.last_seen;
      }
    } catch { /* Storage may be unavailable. Attribution must never block a form. */ }
  }
  if (!attribution || now - lastSeen >= SESSION_IDLE_MS) {
    let source = params.get('utm_source')?.trim().slice(0, 100) || '';
    let medium = params.get('utm_medium')?.trim().slice(0, 100) || '';
    const paidClick = ['gclid', 'gbraid', 'wbraid'].some(key => params.has(key));
    if (paidClick) {
      source ||= 'google';
      medium = 'cpc'; // A Google Ads click ID takes precedence over a mistagged UTM.
    }
    if (!source && !attribution && document.referrer) {
      try {
        const referrer = new URL(document.referrer);
        if (referrer.hostname !== window.location.hostname) source = referrer.hostname;
      } catch { /* Ignore invalid referrers. */ }
    }
    source ||= 'direct';
    if (!medium) {
      if (source === 'direct') medium = 'none';
      else if (/(^|\.)(chatgpt\.com|claude\.ai|perplexity\.ai)$/.test(source) || source === 'gemini.google.com') medium = 'ai';
      else if (/^(?:(?:www|m)\.)?google\.(?:com|co\.jp|co\.uk|com\.au|ca|de|fr|es|co\.kr|com\.ph)$/.test(source)
        || /(^|\.)(bing\.com|duckduckgo\.com|search\.yahoo\.com|search\.yahoo\.co\.jp)$/.test(source)) medium = 'organic';
      else medium = hasCampaign ? 'unknown' : 'referral';
    }
    attribution = {
      traffic_source: source,
      traffic_medium: medium,
      // Never retain search parameters or fragments (which can contain personal data).
      landing_page: window.location.origin + window.location.pathname,
    };
  }
  lastSeen = now;
  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ ...attribution, last_seen: now }));
  } catch { /* Keep the in-memory fallback when storage is blocked. */ }
  return { ...attribution };
}

export function getTrafficSource(): string {
  return getAttribution().traffic_source;
}

export function createInquiryFormData(form: HTMLFormElement): FormData {
  const data = new FormData(form);
  for (const [key, value] of Object.entries(getAttribution())) data.set(key, value);
  if (typeof window !== 'undefined') {
    data.set('conversion_page', window.location.origin + window.location.pathname);
    data.set('inquiry_id', window.crypto.randomUUID());
  }
  return data;
}

export function trackInquirySuccess(data: FormData, params: Record<string, string> = {}) {
  const fields: Record<string, string> = {};
  for (const key of ['inquiry_id', 'traffic_source', 'traffic_medium', 'landing_page', 'conversion_page']) {
    const value = data.get(key);
    if (typeof value === 'string') fields[key] = value;
  }
  trackEvent('form_submit_success', { ...params, ...fields });
}

export function trackLandingView() {
  if (typeof window === 'undefined') return;

  trackEvent('landing_view', {
    cta_variant: getCtaVariant(),
    traffic_source: getTrafficSource(),
    path: window.location.pathname,
  });
}
