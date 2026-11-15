import assert from 'node:assert/strict';
import test from 'node:test';
import { createRouteMetadataController } from '../lib/routeMetadata';

const base = 'https://ph-document.com';
const index = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const noindex = 'noindex, follow';
const multi = (slug) => [
  { hreflang: 'en', href: `${base}/en/${slug}/` },
  { hreflang: 'ja', href: `${base}/ja/${slug}/` },
  { hreflang: 'x-default', href: `${base}/en/${slug}/` },
];
const policy = (path, alternates, robots = index) =>
  ({ canonical: `${base}${path}`, alternates, robots });
const manifest = {
  '/ja/cenomar/': policy('/ja/cenomar/', multi('cenomar')),
  '/ja/contact/': policy('/ja/contact/', multi('contact')),
  '/en/family-psa-nbi-package/': policy('/en/family-psa-nbi-package/', []),
  '/en/tracking/': policy('/en/tracking/', [], noindex),
  '/ko/f-6-philippines-documents/': policy('/ko/f-6-philippines-documents/', [
    { hreflang: 'ko', href: `${base}/ko/f-6-philippines-documents/` },
    { hreflang: 'x-default', href: `${base}/ko/f-6-philippines-documents/` },
  ]),
};

function setup(loadManifest = async () => manifest) {
  let pathname = '/ja/cenomar/';
  const head = { alternates: manifest[pathname].alternates, robots: index };
  let writes = 0;
  let reloads = 0;
  const controller = createRouteMetadataController({
    getPathname: () => pathname,
    setAlternates: (value) => { head.alternates = value; writes++; },
    setRobots: (value) => { head.robots = value; writes++; },
    loadManifest,
    reload: () => { reloads++; },
  });
  return {
    controller, head,
    go: (path) => { pathname = path; controller.synchronize(path); },
    setPath: (path) => { pathname = path; },
    counts: () => ({ writes, reloads }),
  };
}

test('hydration and repeated initial effects preserve the exact SSR policy', async () => {
  const state = setup();
  const serverAlternates = state.head.alternates;
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.controller.synchronize('/ja/cenomar/');
  assert.equal(state.head.alternates, serverAlternates);
  assert.equal(state.head.robots, index);
  assert.deepEqual(state.counts(), { writes: 0, reloads: 0 });
});

test('SPA navigation replaces every previous hreflang with the destination policy', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.go('/ja/contact');
  assert.deepEqual(state.head.alternates, multi('contact'));
  assert.equal(state.head.robots, index);
  assert.equal(state.counts().reloads, 0);
});

test('standalone routes remove all stale alternates without inventing counterparts', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.go('/en/family-psa-nbi-package/');
  assert.deepEqual(state.head.alternates, []);
  assert.equal(state.head.robots, index);
});

test('KO-only routes keep exactly self and x-default', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.go('/ko/f-6-philippines-documents/');
  assert.deepEqual(state.head.alternates, manifest['/ko/f-6-philippines-documents/'].alternates);
  assert.deepEqual(state.head.alternates.map((alternate) => alternate.hreflang), ['ko', 'x-default']);
});

test('existing noindex routes retain their policy and release it on return to indexable routes', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.go('/en/tracking/');
  assert.equal(state.head.robots, noindex);
  state.go('/ja/contact/');
  assert.equal(state.head.robots, index);
});

test('404 noindex and empty alternates never leak into a valid destination', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.setPath('/ja/missing/');
  state.controller.synchronize('/ja/missing/', { alternates: [], robots: noindex });
  assert.equal(state.head.robots, noindex);
  assert.deepEqual(state.head.alternates, []);
  state.go('/ja/contact/');
  assert.equal(state.head.robots, index);
  assert.deepEqual(state.head.alternates, multi('contact'));
  assert.equal(state.counts().reloads, 0);
});

test('an early navigation reloads destination SSR without temporary noindex or later async writes', async () => {
  let resolve;
  const state = setup(() => new Promise((done) => { resolve = done; }));
  state.controller.synchronize('/ja/cenomar/');
  state.go('/ja/contact/');
  assert.deepEqual(state.counts(), { writes: 0, reloads: 1 });
  resolve(manifest);
  await state.controller.warm();
  assert.deepEqual(state.counts(), { writes: 0, reloads: 1 });
  assert.equal(state.head.robots, index);
});

test('fetch failure keeps initial SSR intact and uses destination SSR for the next navigation', async () => {
  const state = setup(async () => { throw new Error('offline'); });
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  assert.deepEqual(state.counts(), { writes: 0, reloads: 0 });
  state.go('/en/tracking/');
  assert.deepEqual(state.counts(), { writes: 0, reloads: 1 });
});

test('unknown manifest entries reload rather than retaining a previous route policy', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.go('/en/new-unlisted-page/');
  assert.deepEqual(state.counts(), { writes: 0, reloads: 1 });
});

test('a superseded effect cannot overwrite the current route', async () => {
  const state = setup();
  state.controller.synchronize('/ja/cenomar/');
  await state.controller.warm();
  state.setPath('/ja/contact/');
  state.controller.synchronize('/ja/cenomar/', { alternates: [], robots: noindex });
  assert.deepEqual(state.counts(), { writes: 0, reloads: 0 });
  state.controller.synchronize('/ja/contact/');
  assert.deepEqual(state.head.alternates, multi('contact'));
});
