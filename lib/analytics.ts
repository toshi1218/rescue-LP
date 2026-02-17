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
