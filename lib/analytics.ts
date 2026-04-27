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

export function trackLandingView() {
  if (typeof window === 'undefined') return;

  trackEvent('landing_view', {
    cta_variant: getCtaVariant(),
    traffic_source: getTrafficSource(),
    path: window.location.pathname,
  });
}
