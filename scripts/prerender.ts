import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const distIndexPath = path.join(distDir, 'index.html');

// Routes to prerender
const routes = [
  '/',
  '/cenomar-guide',
  '/psa-shussei-shomeisho',
  '/nbi-clearance-guide',
];

// Page-specific meta overrides
const pageMeta: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'CENOMAR・PSA・NBI取得代行｜フィリピン書類取得代行センター',
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。',
    canonical: 'https://ph-document.com/',
  },
  '/cenomar-guide': {
    title: 'フィリピン独身証明書（CENOMAR・セノマー）とは？取得方法・費用・期間を徹底解説',
    description: 'CENOMARとは何か、どこで取るか、費用・期間・よくあるトラブルまで初心者向けに解説。国際結婚・配偶者ビザに必要なCENOMAR取得代行も対応。',
    canonical: 'https://ph-document.com/cenomar-guide/',
  },
  '/psa-shussei-shomeisho': {
    title: 'フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由と代行サービス',
    description: 'PSA出生証明書（Birth Certificate）の取得方法・費用・注意点を解説。自分での取得方法から取得代行まで初心者向けにわかりやすく説明します。',
    canonical: 'https://ph-document.com/psa-shussei-shomeisho/',
  },
  '/nbi-clearance-guide': {
    title: 'フィリピンNBI無犯罪証明書（クリアランス）とは？日本から取得する方法とHIT問題を解説',
    description: 'NBI Clearance（無犯罪証明書）の取得方法・日本からの申請方法・HIT問題の対処法を詳しく解説。配偶者ビザ申請に必要なDFAアポスティーユにも対応。',
    canonical: 'https://ph-document.com/nbi-clearance-guide/',
  },
};

async function prerenderRoute(baseHtml: string, route: string): Promise<void> {
  const meta = pageMeta[route] || pageMeta['/'];

  const appHtml = renderToString(
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(App)
    )
  );

  let html = baseHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${meta.canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  if (route === '/') {
    await writeFile(distIndexPath, html, 'utf8');
    console.log(`✓ Prerendered: / → dist/index.html`);
  } else {
    const routeDir = path.join(distDir, route.slice(1));
    await mkdir(routeDir, { recursive: true });
    const outPath = path.join(routeDir, 'index.html');
    await writeFile(outPath, html, 'utf8');
    console.log(`✓ Prerendered: ${route} → dist${route}/index.html`);
  }
}

async function prerender() {
  const baseHtml = await readFile(distIndexPath, 'utf8');
  for (const route of routes) {
    await prerenderRoute(baseHtml, route);
  }
  console.log(`\n✅ Prerendering complete. ${routes.length} pages generated.`);
}

prerender().catch((error) => {
  console.error('prerender failed:', error);
  process.exit(1);
});
