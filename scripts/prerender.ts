import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');

interface RouteConfig {
  path: string;
  outFile: string;
  title: string;
  description: string;
  canonical: string;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    outFile: path.join(projectRoot, 'dist', 'index.html'),
    title: 'セノマー（CENOMAR）・PSA・NBI取得代行｜フィリピン書類取得代行センター',
    description: 'セノマー（CENOMAR）・PSA・NBI・DFAアポスティーユの取得代行。国際結婚・配偶者ビザに必要なフィリピン書類を日本語でサポート。',
    canonical: 'https://ph-document.com/',
  },
  {
    path: '/cenomar-guide',
    outFile: path.join(projectRoot, 'dist', 'cenomar-guide', 'index.html'),
    title: 'フィリピン独身証明書（CENOMAR）とは？取得方法・費用・期間を完全解説【2026年】｜フィリピン書類取得代行センター',
    description: 'CENOMARの取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・有効期限・よくあるトラブルまで初心者向けに徹底ガイド。',
    canonical: 'https://ph-document.com/cenomar-guide/',
  },
  {
    path: '/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'psa-shussei-shomeisho', 'index.html'),
    title: 'フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由【2026年】｜フィリピン書類取得代行センター',
    description: 'PSA出生証明書（旧NSO）の取得方法を3パターンで解説。費用・期間・NO RECORD FOUNDのトラブル対処まで徹底ガイド。',
    canonical: 'https://ph-document.com/psa-shussei-shomeisho/',
  },
  {
    path: '/nbi-clearance-guide',
    outFile: path.join(projectRoot, 'dist', 'nbi-clearance-guide', 'index.html'),
    title: 'フィリピンNBI無犯罪証明書（NBI Clearance）とは？日本から取得する方法【2026年】｜フィリピン書類取得代行センター',
    description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
    canonical: 'https://ph-document.com/nbi-clearance-guide/',
  },
  {
    path: '/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'kokusai-kekkon-guide', 'index.html'),
    title: 'フィリピン人との国際結婚 完全ガイド｜手続きの流れ・必要書類・費用【2026年最新】｜フィリピン書類取得代行センター',
    description: 'フィリピン人との国際結婚の手順をステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）、費用・期間まで初心者向けに徹底ガイド。',
    canonical: 'https://ph-document.com/kokusai-kekkon-guide/',
  },
  {
    path: '/haigusha-visa-shorui',
    outFile: path.join(projectRoot, 'dist', 'haigusha-visa-shorui', 'index.html'),
    title: '配偶者ビザに必要なフィリピン書類チェックリスト【2026年最新】｜フィリピン書類取得代行センター',
    description: '配偶者ビザ申請に必要なフィリピン書類（CENOMAR・PSA・NBI等）をチェックリスト形式で解説。書類の取得代行にも対応。',
    canonical: 'https://ph-document.com/haigusha-visa-shorui/',
  },
  {
    path: '/apostille-guide',
    outFile: path.join(projectRoot, 'dist', 'apostille-guide', 'index.html'),
    title: 'フィリピンDFAアポスティーユ認証とは？対象書類・取得方法・費用【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の取得方法・対象書類・費用・期間を解説。CENOMAR・PSA・NBI Clearanceへの認証取得を代行サービスで日本語対応。',
    canonical: 'https://ph-document.com/apostille-guide/',
  },
  {
    path: '/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'gaimen-kirikae-guide', 'index.html'),
    title: 'フィリピン運転免許の外免切替ガイド｜必要なLTO書類・手順・費用【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピン運転免許を日本の免許に切り替える外免切替の手順・必要書類・LTO書類の取得方法を解説。LTO書類の代行取得に対応。',
    canonical: 'https://ph-document.com/gaimen-kirikae-guide/',
  },
  {
    path: '/kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'kekkon-shomeisho', 'index.html'),
    title: 'フィリピンPSA婚姻証明書の取得方法｜国際結婚・配偶者ビザで必要な理由【2026年】｜フィリピン書類取得代行センター',
    description: 'PSA婚姻証明書（フィリピン結婚証明書）の取得方法・必要な場面・費用・期間を解説。フィリピン先行婚姻後の報告手続きに必要な書類をガイド。',
    canonical: 'https://ph-document.com/kekkon-shomeisho/',
  },
];

function updateHead(html: string, route: RouteConfig): string {
  let result = html;

  // title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  );

  // canonical
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${route.canonical}"`
  );

  // og:url
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${route.canonical}"`
  );

  // og:title
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`
  );

  // og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  );

  return result;
}

async function prerender() {
  const baseHtml = await readFile(distIndexPath, 'utf8');

  for (const route of routes) {
    console.log(`Prerendering ${route.path}...`);

    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        { location: route.path },
        React.createElement(App)
      )
    );

    let html = baseHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    html = updateHead(html, route);

    const outDir = path.dirname(route.outFile);
    await mkdir(outDir, { recursive: true });
    await writeFile(route.outFile, html, 'utf8');
    console.log(`  → Written: ${route.outFile}`);
  }

  console.log(`\nPrerendered ${routes.length} pages.`);
}

prerender().catch((error) => {
  console.error('prerender failed:', error);
  process.exit(1);
});
