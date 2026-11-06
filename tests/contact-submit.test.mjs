import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

// Run: node --test tests/contact-submit.test.mjs
// Exercise the actual TSX submit handlers without a browser or external requests.
// A small hook/DOM harness supplies required-field validity; visual/native-browser
// behavior is covered separately. Attribution construction has its own suite in
// lib/inquiryForm.test.mjs; here its output must reach Web3Forms and Slack unchanged.
const root = fileURLToPath(new URL('../', import.meta.url));
const originalGlobals = Object.fromEntries(
  ['fetch', 'window', '__inquiryHandlerTest'].map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]),
);
after(() => {
  for (const [key, descriptor] of Object.entries(originalGlobals)) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});

const mockModules = {
  react: `
    export function useState(initial) {
      const state = globalThis.__inquiryHandlerTest;
      const index = state.cursor++;
      if (!(index in state.values)) state.values[index] = initial;
      return [state.values[index], value => { state.values[index] = value; }];
    }
    export function useEffect() {}
    export function useRef(value) { return { current: value }; }
    export default {};
  `,
  jsx: `
    export function jsx(type, props) { return { type, props: props || {} }; }
    export const jsxs = jsx;
    export const Fragment = 'fragment';
  `,
  icons: `export const Send = 'svg', Mail = 'svg', ShieldCheck = 'svg', Clock = 'svg';`,
  routing: `export const Link = 'a';`,
  component: `export default function Component() {}`,
  meta: `export function useMeta() {}`,
  language: `export function useLanguage() { return { lang: globalThis.__inquiryHandlerTest.lang, t: key => key }; }`,
  analytics: `
    export function getCtaVariant() { return 'A'; }
    export function getTrafficSource() { return 'direct'; }
    export function trackEvent(name, params) {
      globalThis.__inquiryHandlerTest.calls.push({ type: 'event', name, params });
    }
  `,
  notify: `
    export function notifySlack(lang, data) {
      globalThis.__inquiryHandlerTest.calls.push({ type: 'notify', lang, data });
    }
  `,
  inquiry: `
    export function createInquiryFormData(form) {
      const data = new FormData();
      for (const [name, value] of Object.entries(form.fields)) data.set(name, value);
      data.set('inquiry_id', 'test-inquiry-id');
      data.set('landing_page', 'https://ph-document.com/entry/');
      data.set('referrer', 'https://www.google.com');
      data.set('utm_campaign', 'PRIVATE_CAMPAIGN');
      globalThis.__inquiryHandlerTest.calls.push({ type: 'data', data });
      return data;
    }
  `,
};

const stubs = {
  name: 'offline-form-surfaces',
  setup(builder) {
    builder.onResolve({ filter: /.*/ }, args => {
      if (args.kind === 'entry-point') return;
      const names = {
        react: 'react', 'react/jsx-runtime': 'jsx',
        'lucide-react': 'icons', 'react-router-dom': 'routing',
      };
      let name = names[args.path];
      if (args.path.includes('/components/') || /(?:^|\/)icons\//.test(args.path)) name = 'component';
      for (const [suffix, module] of Object.entries({
        useMeta: 'meta', i18n: 'language', analytics: 'analytics',
        notifyApi: 'notify', inquiryForm: 'inquiry',
      })) {
        if (args.path.endsWith(`/${suffix}`)) name = module;
      }
      if (name) return { path: name, namespace: 'form-test' };
    });
    builder.onLoad({ filter: /.*/, namespace: 'form-test' }, args => ({
      contents: mockModules[args.path], loader: 'js',
    }));
  },
};

// Keep the real validation module and each real component/submit handler.
const componentFiles = [
  'pages/ContactJa.tsx', 'pages/ContactEn.tsx', 'pages/ContactKo.tsx',
  'components/Footer.tsx', 'components/FooterKo.tsx',
];
const components = new Map(await Promise.all(componentFiles.map(async file => {
  const result = await build({
    absWorkingDir: root, entryPoints: [file], bundle: true, format: 'esm',
    platform: 'node', write: false, plugins: [stubs], logLevel: 'silent',
  });
  const { default: Component } = await import(
    `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`
  );
  return [file, Component];
})));

function nodes(node) {
  if (!node || typeof node !== 'object') return [];
  if (Array.isArray(node)) return node.flatMap(nodes);
  return [node, ...nodes(node.props?.children)];
}

function render(Component) {
  const state = globalThis.__inquiryHandlerTest;
  state.cursor = 0;
  const tree = Component();
  for (const node of nodes(tree)) {
    if (node.props.ref) node.props.ref.current = {
      focus() { state.confirmFocused = true; }, scrollIntoView() {},
    };
  }
  return tree;
}

function mount(spec, overrides = {}, confirmation = 'private@example.com') {
  const state = globalThis.__inquiryHandlerTest = {
    lang: spec.lang, values: [], cursor: 0, calls: [], confirmFocused: false,
  };
  globalThis.window = { location: new URL(`https://ph-document.com/${spec.lang}/service/`) };
  globalThis.fetch = async () => { throw new Error('Unexpected network request in validation test'); };
  const Component = components.get(spec.file);
  let tree = render(Component);
  const initialForm = nodes(tree).find(node => node.type === 'form');
  assert.ok(initialForm, `${spec.name} exposes a form`);
  const desiredValue = node => {
    const { name, type, required, value, defaultValue } = node.props;
    if (!name) return confirmation;
    if (Object.hasOwn(overrides, name)) return overrides[name];
    if (node.type === 'select' && required) {
      return nodes(node).find(option => option.type === 'option' && option.props.value)?.props.value ?? '';
    }
    if (type === 'email') return 'private@example.com';
    if (name === 'name') return 'PRIVATE_NAME';
    if (name === 'message' && required) return 'PRIVATE_MESSAGE';
    if (name === 'country' && required) return 'Japan';
    return value ?? defaultValue ?? '';
  };
  // Update controlled selects and email confirmation just as their change handlers do.
  for (const node of nodes(initialForm)) {
    if ((node.type === 'select' || (node.props.type === 'email' && !node.props.name)) && node.props.onChange) {
      node.props.onChange({ target: { value: desiredValue(node) } });
    }
  }
  tree = render(Component);
  const formNode = nodes(tree).find(node => node.type === 'form');
  const fields = nodes(formNode).filter(node => ['input', 'select', 'textarea'].includes(node.type)).map(node => ({
    name: node.props.name ?? 'confirmation', tag: node.type, type: node.props.type,
    required: !!node.props.required, value: desiredValue(node), validityMessage: '',
    setCustomValidity(message) { this.validityMessage = message; },
    focus() { state.focused = this.name; },
  }));
  const form = {
    get fields() { return Object.fromEntries(fields.filter(field => field.name !== 'confirmation').map(field => [field.name, field.value])); },
    querySelectorAll(selector) {
      assert.equal(selector, '[required]');
      return fields.filter(field => field.required);
    },
    elements: { namedItem: name => fields.find(field => field.name === name) },
    reportValidity() {
      return fields.every(field => !field.validityMessage && (!field.required || field.value !== ''));
    },
  };
  return {
    state, fields, form,
    submit: () => formNode.props.onSubmit({ preventDefault() {}, currentTarget: form }),
    render: () => render(Component),
  };
}

function mockResponse(state, mode = 'success') {
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    state.calls.push({ type: 'fetch', data: options.body });
    if (mode === 'network-error') throw new Error('Offline');
    return {
      ok: mode !== 'http-error',
      async json() {
        state.calls.push({ type: 'response' });
        if (mode === 'json-error') throw new Error('Invalid JSON');
        // An HTTP failure must not be accepted even if its body says success.
        return { success: mode !== 'logical-error' };
      },
    };
  };
}

const specs = [
  { name: 'ContactJa', file: 'pages/ContactJa.tsx', lang: 'ja' },
  { name: 'ContactEn', file: 'pages/ContactEn.tsx', lang: 'en' },
  { name: 'ContactKo', file: 'pages/ContactKo.tsx', lang: 'ko' },
  { name: 'Footer JA', file: 'components/Footer.tsx', lang: 'ja' },
  { name: 'Footer EN', file: 'components/Footer.tsx', lang: 'en' },
  { name: 'Footer KO', file: 'components/FooterKo.tsx', lang: 'ko' },
];

for (const spec of specs) {
  test(spec.name, { concurrency: false }, async suite => {
    const requiredFields = mount(spec).fields.filter(field => field.required && field.name !== 'confirmation');
    for (const field of requiredFields) {
      // Users can type whitespace into text controls; selects have fixed option values.
      const blanks = field.tag === 'select' ? [''] : ['', '   '];
      for (const blank of blanks) {
        await suite.test(`rejects ${field.name} ${blank ? 'whitespace' : 'empty'}`, async () => {
          const instance = mount(spec, { [field.name]: blank });
          await instance.submit();
          assert.equal(instance.state.calls.length, 0, 'Validation must stop before creating or sending inquiry data');
        });
      }
    }

    await suite.test('rejects email without a domain suffix', async () => {
      const instance = mount(spec, { email: 'private@example' }, 'private@example');
      await instance.submit();
      assert.equal(instance.state.calls.length, 0);
      assert.equal(instance.state.focused, 'email');
    });

    if (spec.name.startsWith('Contact')) {
      await suite.test('rejects email confirmation mismatch and focuses it', async () => {
        const instance = mount(spec, {}, 'different@example.com');
        await instance.submit();
        assert.equal(instance.state.calls.length, 0);
        assert.equal(instance.state.confirmFocused, true);
      });
    }

    for (const mode of ['success', 'http-error', 'logical-error', 'network-error', 'json-error']) {
      await suite.test(mode === 'success' ? 'accepts empty optional fields and notifies only after success' : `handles ${mode} without a success notification`, async () => {
        const instance = mount(spec);
        mockResponse(instance.state, mode);
        await instance.submit();
        const { calls } = instance.state;
        assert.equal(calls.filter(call => call.type === 'fetch').length, 1);
        const notifications = calls.filter(call => call.type === 'notify');
        const successes = calls.filter(call => call.type === 'event' && call.name === 'form_submit_success');
        if (mode === 'success') {
          assert.equal(notifications.length, 1);
          assert.equal(notifications[0].lang, spec.lang);
          assert.strictEqual(notifications[0].data, calls.find(call => call.type === 'fetch').data);
          assert.ok(calls.findIndex(call => call.type === 'notify') > calls.findIndex(call => call.type === 'response'));
          assert.equal(successes.length, 1);
          assert.equal(successes[0].params.inquiry_id, notifications[0].data.get('inquiry_id'));
          assert.doesNotMatch(JSON.stringify(successes), /PRIVATE_|private@example|landing_page|referrer|utm_campaign/);
          assert.ok(nodes(instance.render()).some(node => node.props.role === 'status'));
          assert.ok(!nodes(instance.render()).some(node => node.type === 'form'));
        } else {
          assert.equal(notifications.length, 0);
          assert.equal(successes.length, 0);
          const tree = nodes(instance.render());
          assert.ok(tree.some(node => node.props.role === 'alert'));
          assert.equal(tree.find(node => node.type === 'button' && node.props.type === 'submit').props.disabled, false);
        }
      });
    }
  });
}
