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

  if (typeof gtag === 'function') {
    gtag('event', name, payload);
  }

  const dataLayerWindow = window as Window & { dataLayer?: unknown[] };
  if (Array.isArray(dataLayerWindow.dataLayer)) {
    dataLayerWindow.dataLayer.push({ event: name, ...payload });
  }
}

const CTA_VARIANT_KEY = 'cta_variant';

export function getCtaVariant(): 'A' | 'B' {
  if (typeof window === 'undefined') return 'A';

  const stored = window.localStorage.getItem(CTA_VARIANT_KEY);
  if (stored === 'A' || stored === 'B') return stored;

  const assigned = Math.random() < 0.5 ? 'A' : 'B';
  window.localStorage.setItem(CTA_VARIANT_KEY, assigned);
  return assigned;
}

export function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'unknown';

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  if (utmSource) return utmSource;

  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname;
    } catch {
      return 'referrer';
    }
  }

  return 'direct';
}

/**
 * Builds the FormData for a Web3Forms submission with the attribution fields
 * resolved at submit time.
 *
 * The forms carry `landing_page` / `cta_variant` / `traffic_source` as hidden
 * inputs, but those are baked into the pre-rendered HTML, so their static
 * values are wrong: `landing_page` was a hardcoded literal shared by every
 * page, and the A/B fields serialize with their SSR defaults ('A' / 'unknown').
 * Overriding them here keeps the markup byte-identical (no re-render of every
 * static page) while sending the real values.
 */
export function buildSubmissionData(form: HTMLFormElement): FormData {
  const data = new FormData(form);

  if (typeof window !== 'undefined') {
    data.set('landing_page', window.location.href);
    data.set('cta_variant', getCtaVariant());
    data.set('traffic_source', getTrafficSource());
  }

  return data;
}

export function trackLandingView() {
  if (typeof window === 'undefined') return;

  trackEvent('landing_view', {
    cta_variant: getCtaVariant(),
    traffic_source: getTrafficSource(),
    path: window.location.pathname,
  });
}
