import assert from 'node:assert/strict';
import { test } from 'node:test';

// Run with: node --import tsx --test lib/inquiryForm.test.mjs
// This suite stubs every browser surface and network request; it sends no inquiries.
function storage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

function browser(url, { session = storage(), referrer = '' } = {}) {
  const events = new EventTarget();
  globalThis.window = {
    location: new URL(url), sessionStorage: session, localStorage: storage(), dataLayer: [],
    addEventListener: events.addEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
  };
  globalThis.document = { referrer };
  return window;
}

let moduleNumber = 0;
const freshAnalytics = () => import(`./analytics.ts?test=${++moduleNumber}`);

test('entry attribution, form data and one GA success share an inquiry ID without sending form contents to GA', async () => {
  const nativeFormData = globalThis.FormData;
  browser('https://ph-document.com/ja/cenomar/?utm_source=google&utm_medium=cpc&utm_campaign=spring#pricing', {
    referrer: 'https://www.google.com/search?q=private+query',
  });
  const { createInquiryFormData } = await import('./inquiryForm.ts');
  const analytics = await import('./analytics.ts');
  // Node has no HTML forms; preserve real FormData semantics around a small form stub.
  globalThis.FormData = class extends nativeFormData {
    constructor(form) {
      super();
      for (const [key, value] of Object.entries(form.fields)) this.set(key, value);
    }
  };
  try {
    window.location = new URL('https://ph-document.com/ja/contact/?email=private%40example.com');
    const form = { fields: {
      name: 'Private Person', email: 'private@example.com', message: 'Private inquiry',
      landing_page: 'https://ph-document.com/', referral_source: 'Friend / Referral',
      referral_source_detail: 'Private introduction', access_key: 'test-key', botcheck: '',
    } };
    const data = createInquiryFormData(form);
    const anotherAttempt = createInquiryFormData(form);
    assert.equal(data.get('landing_page'), 'https://ph-document.com/ja/cenomar/');
    assert.equal(data.get('conversion_page'), 'https://ph-document.com/ja/contact/');
    assert.equal(data.get('referrer'), 'https://www.google.com');
    assert.equal(data.get('utm_source'), 'google');
    assert.equal(data.get('utm_medium'), 'cpc');
    assert.equal(data.get('utm_campaign'), 'spring');
    assert.equal(data.get('traffic_source'), 'google');
    assert.equal(data.get('traffic_medium'), 'paid');
    assert.equal(data.get('referral_source'), 'Friend / Referral');
    assert.equal(data.get('referral_source_detail'), 'Private introduction');
    assert.equal(data.get('email'), 'private@example.com');
    assert.ok(data.get('inquiry_id'));
    assert.notEqual(data.get('inquiry_id'), anotherAttempt.get('inquiry_id'));

    window.gtag = (...args) => window.dataLayer.push(args);
    analytics.trackEvent('form_submit_success', {
      inquiry_id: data.get('inquiry_id'), traffic_source: analytics.getTrafficSource(),
      page_path: window.location.pathname,
    });
    assert.equal(window.dataLayer.length, 1, 'gtag must not also produce a second direct dataLayer event');
    assert.equal(window.dataLayer[0][2].inquiry_id, data.get('inquiry_id'));
    assert.doesNotMatch(JSON.stringify(window.dataLayer), /Private|private|spring|utm_|referral_source/);
  } finally {
    globalThis.FormData = nativeFormData;
  }
});

test('session storage preserves the entry across a full internal navigation/reload', async () => {
  const session = storage();
  browser('https://ph-document.com/en/nbi-clearance/?utm_source=chatgpt', { session });
  const first = await freshAnalytics();
  assert.equal(first.getTrafficSource(), 'chatgpt');
  browser('https://ph-document.com/en/contact/', {
    session, referrer: 'https://ph-document.com/en/nbi-clearance/',
  });
  const reloaded = await freshAnalytics();
  assert.equal(reloaded.getEntryAttribution().landing_page, 'https://ph-document.com/en/nbi-clearance/');
  assert.equal(reloaded.getTrafficSource(), 'chatgpt');
});

test('Google Ads click markers stay paid across navigation and reload without saving the click IDs', async () => {
  for (const marker of ['gclid', 'gbraid', 'wbraid']) {
    const session = storage();
    browser(`https://ph-document.com/en/nbi-clearance/?utm_source=google&${marker}=private-click-id`, {
      session, referrer: 'https://www.google.com/',
    });
    const first = await freshAnalytics();
    assert.equal(first.getEntryAttribution().paid_click, true);
    assert.equal(first.getTrafficSource(), 'google');
    assert.equal(first.getTrafficMedium(), 'paid');
    assert.doesNotMatch(session.getItem('inquiry_entry_v1'), /private-click-id|gclid|gbraid|wbraid/);
    browser('https://ph-document.com/en/contact/', { session });
    const reloaded = await freshAnalytics();
    assert.equal(reloaded.getTrafficSource(), 'google');
    assert.equal(reloaded.getTrafficMedium(), 'paid');
  }
});

test('active visits keep the entry, while 30 minutes of inactivity starts a fresh one', async () => {
  const originalNow = Date.now;
  let now = originalNow();
  Date.now = () => now;
  try {
    const session = storage();
    browser('https://ph-document.com/ja/gaimen-kirikae-guide/', { session });
    const analytics = await freshAnalytics();
    window.location = new URL('https://ph-document.com/ja/ryokin/');
    now += 20 * 60_000;
    window.dispatchEvent(new Event('pointerdown'));
    now += 20 * 60_000;
    assert.equal(analytics.getEntryAttribution().landing_page, 'https://ph-document.com/ja/gaimen-kirikae-guide/');
    now += 31 * 60_000;
    window.location = new URL('https://ph-document.com/ja/contact/');
    assert.equal(analytics.getEntryAttribution().landing_page, 'https://ph-document.com/ja/contact/');
    now += 31 * 60_000;
    browser('https://ph-document.com/en/', { session });
    const reloaded = await freshAnalytics();
    assert.equal(reloaded.getEntryAttribution().landing_page, 'https://ph-document.com/en/');
  } finally {
    Date.now = originalNow;
  }
});

test('blocked or corrupt storage does not break forms, attribution or CTA assignment', async () => {
  const blocked = {
    getItem() { throw new Error('storage blocked'); },
    setItem() { throw new Error('storage blocked'); },
  };
  browser('https://ph-document.com/ko/nbi-clearance/', { session: blocked });
  window.localStorage = blocked;
  const analytics = await freshAnalytics();
  const variant = analytics.getCtaVariant();
  assert.ok(['A', 'B'].includes(variant));
  assert.equal(analytics.getCtaVariant(), variant);
  window.location = new URL('https://ph-document.com/ko/contact/');
  assert.equal(analytics.getEntryAttribution().landing_page, 'https://ph-document.com/ko/nbi-clearance/');
  const corrupt = storage();
  corrupt.setItem('inquiry_entry_v1', '{invalid json');
  browser('https://ph-document.com/en/', { session: corrupt });
  assert.equal((await freshAnalytics()).getEntryAttribution().landing_page, 'https://ph-document.com/en/');
});

test('GA uses bounded source categories, including Gemini before Google, rather than raw UTMs or referrer URLs', async () => {
  browser('https://ph-document.com/en/', { referrer: 'https://gemini.google.com/app/private-conversation' });
  assert.equal((await freshAnalytics()).getTrafficSource(), 'gemini');
  browser('https://ph-document.com/en/?utm_source=private%40example.com&utm_medium=private-value');
  const analytics = await freshAnalytics();
  assert.equal(analytics.getTrafficSource(), 'campaign');
  assert.equal(analytics.getTrafficMedium(), 'campaign');
  analytics.trackEvent('cta_click', { traffic_source: analytics.getTrafficSource() });
  assert.deepEqual(window.dataLayer, [{ event: 'cta_click', traffic_source: 'campaign' }]);
  window.gtag = () => { throw new Error('analytics unavailable'); };
  assert.doesNotThrow(() => analytics.trackEvent('cta_click'));
  browser('https://ph-document.com/en/?utm_source=constructor');
  assert.equal((await freshAnalytics()).getTrafficSource(), 'campaign');
});

test('notification keeps the submitted ID but omits the Web3Forms access key, and cannot fail the successful form', async () => {
  const originalFetch = globalThis.fetch;
  const { notifySlack } = await import('./notifyApi.ts');
  const data = new FormData();
  data.set('inquiry_id', 'random-test-id');
  data.set('access_key', 'test-key');
  data.set('botcheck', '');
  try {
    const requests = [];
    globalThis.fetch = async (url, options) => {
      requests.push({ url, body: JSON.parse(options.body) });
      return { ok: true };
    };
    notifySlack('ja', data);
    assert.equal(requests.length, 1);
    assert.equal(requests[0].body.fields.inquiry_id, 'random-test-id');
    assert.equal(requests[0].body.fields.botcheck, '');
    assert.ok(!('access_key' in requests[0].body.fields));
    globalThis.fetch = () => { throw new Error('network unavailable'); };
    assert.doesNotThrow(() => notifySlack('ja', data));
    globalThis.fetch = async () => { throw new Error('network rejected'); };
    assert.doesNotThrow(() => notifySlack('ja', data));
    await Promise.resolve();
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('analytics helpers also work without a browser during prerender', async () => {
  delete globalThis.window;
  delete globalThis.document;
  const analytics = await freshAnalytics();
  assert.equal(analytics.getTrafficSource(), 'unknown');
  assert.equal(analytics.getTrafficMedium(), 'unknown');
  assert.equal(analytics.getCtaVariant(), 'A');
  assert.equal(analytics.getEntryAttribution().landing_page, '');
  assert.doesNotThrow(() => analytics.trackEvent('cta_click'));
});
