type GtagFn = (...args: unknown[]) => void;

function sendToGA4(metricName: string, metricValue: number, metricId: string) {
  if (typeof window === 'undefined') return;

  const gtag = (window as Window & { gtag?: GtagFn }).gtag;
  if (typeof gtag === 'function') {
    // CLS is a unitless decimal (e.g. 0.12); other metrics are in ms and can be rounded
    const value = metricName === 'CLS' ? parseFloat(metricValue.toFixed(4)) : Math.round(metricValue);
    gtag('event', 'web_vitals', {
      metric_name: metricName,
      metric_value: value,
      metric_id: metricId,
    });
  }
}

function generateId(): string {
  return `v3-${Date.now()}-${Math.floor(Math.random() * 9999999)}`;
}

export function reportWebVitals(): void {
  if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return;

  // LCP — Largest Contentful Paint
  try {
    let lcpValue = 0;
    const lcpId = generateId();
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      if (last) lcpValue = last.startTime;
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // LCP is finalised on user interaction or page hide
    const reportLcp = () => {
      if (lcpValue > 0) {
        sendToGA4('LCP', lcpValue, lcpId);
        lcpValue = 0; // prevent double-send
      }
      lcpObserver.disconnect();
    };
    addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') reportLcp();
    }, { once: true });
    addEventListener('pagehide', reportLcp, { once: true });
  } catch (_) {
    // browser doesn't support largest-contentful-paint
  }

  // CLS — Cumulative Layout Shift
  try {
    let clsValue = 0;
    const clsId = generateId();
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    const reportCls = () => {
      sendToGA4('CLS', clsValue, clsId);
      clsObserver.disconnect();
    };
    addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') reportCls();
    }, { once: true });
    addEventListener('pagehide', reportCls, { once: true });
  } catch (_) {
    // browser doesn't support layout-shift
  }

  // FID — First Input Delay
  try {
    const fidId = generateId();
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const first = entries[0] as PerformanceEntry & { processingStart: number; startTime: number };
      if (first) {
        const fid = first.processingStart - first.startTime;
        sendToGA4('FID', fid, fidId);
        fidObserver.disconnect();
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (_) {
    // browser doesn't support first-input
  }

  // INP — Interaction to Next Paint
  try {
    if (PerformanceObserver.supportedEntryTypes?.includes('event')) {
      let inpValue = 0;
      const inpId = generateId();
      const inpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const eventEntry = entry as PerformanceEntry & { duration: number };
          if (eventEntry.duration > inpValue) {
            inpValue = eventEntry.duration;
          }
        }
      });
      inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);

      const reportInp = () => {
        if (inpValue > 0) {
          sendToGA4('INP', inpValue, inpId);
        }
        inpObserver.disconnect();
      };
      addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') reportInp();
      }, { once: true });
      addEventListener('pagehide', reportInp, { once: true });
    }
  } catch (_) {
    // browser doesn't support event timing
  }
}
