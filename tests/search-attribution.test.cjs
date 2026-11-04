const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const code = ts.transpileModule(fs.readFileSync('lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
function setup(url = 'https://ph-document.com/en/nbi-clearance/?secret=redacted', referrer = 'https://www.google.com/search?q=nbi', shared = new Map()) {
  const storage = { getItem: key => shared.get(key) ?? null, setItem: (key, value) => shared.set(key, value) };
  const window = { location: new URL(url), sessionStorage: storage, localStorage: storage, crypto: { randomUUID: () => 'test-inquiry-uuid' }, dataLayer: [] };
  const context = { exports: {}, window, document: { referrer }, URL, URLSearchParams, Date, FormData };
  vm.runInNewContext(code, context);
  return { api: context.exports, window, shared };
}
test('Google entry survives SPA navigation and a full internal navigation without saving query strings', () => {
  const a = setup();
  assert.equal(a.api.getTrafficSource(), 'www.google.com');
  a.window.location = new URL('https://ph-document.com/en/contact/');
  assert.equal(a.api.getAttribution().landing_page, 'https://ph-document.com/en/nbi-clearance/');
  const b = setup('https://ph-document.com/en/contact/', 'https://ph-document.com/en/nbi-clearance/', a.shared);
  assert.equal(b.api.getTrafficSource(), 'www.google.com');
  assert.equal(b.api.getAttribution().traffic_medium, 'organic');
  assert.ok(![...a.shared.values()].join('').includes('redacted'));
});
test('paid and AI visits are not counted as organic search', () => {
  assert.equal(setup('https://ph-document.com/en/?gclid=private-click').api.getAttribution().traffic_medium, 'cpc');
  assert.equal(setup('https://ph-document.com/en/?gclid=private-click&utm_medium=organic').api.getAttribution().traffic_medium, 'cpc');
  assert.equal(setup('https://ph-document.com/en/', 'https://gemini.google.com/').api.getAttribution().traffic_medium, 'ai');
  assert.equal(setup('https://ph-document.com/en/', 'https://chatgpt.com/').api.getAttribution().traffic_medium, 'ai');
  assert.equal(setup('https://ph-document.com/en/', 'https://ph-document.com/ja/').api.getTrafficSource(), 'direct');
});
test('expired persisted attribution and corrupt storage cannot misattribute or break a form', () => {
  const shared = new Map([['igrs_attribution_v1', JSON.stringify({ traffic_source: 'www.google.com', traffic_medium: 'organic', landing_page: 'https://ph-document.com/en/', last_seen: Date.now() - 31 * 60 * 1000 })]]);
  assert.equal(setup('https://ph-document.com/en/contact/', '', shared).api.getTrafficSource(), 'direct');
  const a = setup();
  a.window.sessionStorage = a.window.localStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } };
  assert.equal(a.api.getTrafficSource(), 'www.google.com');
  assert.equal(a.api.getCtaVariant(), 'A');
});
test('expired attribution in the same document starts a direct visit', () => {
  const a = setup();
  a.api.getAttribution();
  // Corrupt/expired persistent data is covered above; advance the VM's clock here.
  const nativeNow = Date.now;
  Date.now = () => nativeNow() + 31 * 60 * 1000;
  try { assert.equal(a.api.getTrafficSource(), 'direct'); } finally { Date.now = nativeNow; }
});
test('a success event is sent once and never includes the submitted personal fields', () => {
  const a = setup();
  const events = [];
  a.window.gtag = (...args) => events.push(args);
  const data = new FormData();
  data.set('inquiry_id', 'test-inquiry-uuid');
  data.set('email', 'private@example.test');
  a.api.trackInquirySuccess(data, { location: 'contact_page' });
  assert.equal(events.length, 1);
  assert.equal(a.window.dataLayer.length, 0);
  assert.equal(events[0][2].inquiry_id, 'test-inquiry-uuid');
  assert.ok(!JSON.stringify(events).includes('private@example.test'));
});
test('dataLayer fallback also sends exactly one event', () => {
  const a = setup();
  a.api.trackEvent('cta_click');
  assert.equal(a.window.dataLayer.length, 1);
});

test('success attribution matches the submitted payload after the session changes', () => {
  const a = setup();
  const events = [];
  a.window.gtag = (...args) => events.push(args);
  const data = new FormData();
  data.set('traffic_source', 'direct');
  data.set('traffic_medium', 'none');
  data.set('inquiry_id', 'joined-id');
  a.api.trackInquirySuccess(data, { traffic_source: 'stale-render-source' });
  assert.equal(events[0][2].traffic_source, 'direct');
  assert.equal(events[0][2].traffic_medium, 'none');
});
