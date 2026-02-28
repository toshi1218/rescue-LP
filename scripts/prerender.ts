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
  hreflangSelf?: string;
  hreflangCross?: string;
  hreflangCrossHref?: string;
  xDefault?: string;
  ogType?: string;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    outFile: path.join(projectRoot, 'dist', 'index.html'),
    title: 'Philippine Document Service | CENOMAR, PSA, NBI for K-1 Visa & USCIS',
    description: 'Get your Philippine documents (CENOMAR, PSA Birth Certificate, NBI Clearance) for K-1 visa and USCIS immigration. Fast, reliable, full English support.',
    canonical: 'https://ph-document.com/',
    hreflangSelf: 'en',
    hreflangCross: 'en-JP',
    hreflangCrossHref: 'https://ph-document.com/jp/',
    xDefault: 'https://ph-document.com/',
  },
  {
    path: '/jp',
    outFile: path.join(projectRoot, 'dist', 'jp', 'index.html'),
    title: 'CENOMAR・PSA・NBI取得代行｜フィリピン書類取得代行センター',
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザ・LTO免許切替に対応。日本語サポートあり。',
    canonical: 'https://ph-document.com/jp/',
    hreflangSelf: 'en-JP',
    hreflangCross: 'en',
    hreflangCrossHref: 'https://ph-document.com/',
    xDefault: 'https://ph-document.com/',
  },
  {
    path: '/cenomar-guide',
    outFile: path.join(projectRoot, 'dist', 'cenomar-guide', 'index.html'),
    title: 'フィリピン独身証明書（CENOMAR）とは？取得方法・費用・期間を完全解説【2026年】｜フィリピン書類取得代行センター',
    description: 'CENOMARの取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・有効期限・よくあるトラブルまで初心者向けに徹底ガイド。',
    canonical: 'https://ph-document.com/cenomar-guide/',
    ogType: 'article',
  },
  {
    path: '/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'psa-shussei-shomeisho', 'index.html'),
    title: 'フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由【2026年】｜フィリピン書類取得代行センター',
    description: 'PSA出生証明書（旧NSO）の取得方法を3パターンで解説。費用・期間・NO RECORD FOUNDのトラブル対処まで徹底ガイド。',
    canonical: 'https://ph-document.com/psa-shussei-shomeisho/',
    ogType: 'article',
  },
  {
    path: '/nbi-clearance-guide',
    outFile: path.join(projectRoot, 'dist', 'nbi-clearance-guide', 'index.html'),
    title: 'フィリピンNBI無犯罪証明書（NBI Clearance）とは？日本から取得する方法【2026年】｜フィリピン書類取得代行センター',
    description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
    canonical: 'https://ph-document.com/nbi-clearance-guide/',
    ogType: 'article',
  },
  {
    path: '/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'kokusai-kekkon-guide', 'index.html'),
    title: 'フィリピン人との国際結婚 完全ガイド｜手続きの流れ・必要書類・費用【2026年最新】｜フィリピン書類取得代行センター',
    description: 'フィリピン人との国際結婚の手順をステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）、費用・期間まで初心者向けに徹底ガイド。',
    canonical: 'https://ph-document.com/kokusai-kekkon-guide/',
    ogType: 'article',
  },
  {
    path: '/haigusha-visa-shorui',
    outFile: path.join(projectRoot, 'dist', 'haigusha-visa-shorui', 'index.html'),
    title: '配偶者ビザに必要なフィリピン書類チェックリスト【2026年最新】｜フィリピン書類取得代行センター',
    description: '配偶者ビザ申請に必要なフィリピン書類（CENOMAR・PSA・NBI等）をチェックリスト形式で解説。書類の取得代行にも対応。',
    canonical: 'https://ph-document.com/haigusha-visa-shorui/',
    ogType: 'article',
  },
  {
    path: '/apostille-guide',
    outFile: path.join(projectRoot, 'dist', 'apostille-guide', 'index.html'),
    title: 'フィリピンDFAアポスティーユ認証とは？対象書類・取得方法・費用【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の取得方法・対象書類・費用・期間を解説。CENOMAR・PSA・NBI Clearanceへの認証取得を代行サービスで日本語対応。',
    canonical: 'https://ph-document.com/apostille-guide/',
    ogType: 'article',
  },
  {
    path: '/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'gaimen-kirikae-guide', 'index.html'),
    title: 'フィリピン運転免許の外免切替ガイド｜必要なLTO書類・手順・費用【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピン運転免許を日本の免許に切り替える外免切替の手順・必要書類・LTO書類の取得方法を解説。LTO書類の代行取得に対応。',
    canonical: 'https://ph-document.com/gaimen-kirikae-guide/',
    ogType: 'article',
  },
  {
    path: '/kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'kekkon-shomeisho', 'index.html'),
    title: 'フィリピンPSA婚姻証明書の取得方法｜国際結婚・配偶者ビザで必要な理由【2026年】｜フィリピン書類取得代行センター',
    description: 'PSA婚姻証明書（フィリピン結婚証明書）の取得方法・必要な場面・費用・期間を解説。フィリピン先行婚姻後の報告手続きに必要な書類をガイド。',
    canonical: 'https://ph-document.com/kekkon-shomeisho/',
    ogType: 'article',
  },
  {
    path: '/pricing',
    outFile: path.join(projectRoot, 'dist', 'pricing', 'index.html'),
    title: '料金・プラン一覧｜フィリピン書類取得代行センター',
    description: 'CENOMAR・PSA・NBI・アポスティーユ・国際結婚パック・配偶者ビザの代行料金一覧。各プランの費用・期間・含まれるサービスを詳しく掲載。',
    canonical: 'https://ph-document.com/pricing/',
  },
  {
    path: '/company',
    outFile: path.join(projectRoot, 'dist', 'company', 'index.html'),
    title: '会社概要｜株式会社IGRS｜フィリピン書類取得代行センター',
    description: '株式会社IGRSの会社概要。フィリピンへの企業進出支援・公的書類BPO専門。和歌山県和歌山市に本店、フィリピン共和国セブ市に営業所を置く。',
    canonical: 'https://ph-document.com/company/',
  },
  {
    path: '/contact',
    outFile: path.join(projectRoot, 'dist', 'contact', 'index.html'),
    title: 'お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行に関するお問い合わせ・無料相談はこちら。CENOMAR・PSA・NBI・国際結婚・配偶者ビザについて日本語でご相談いただけます。翌営業日以内に返信。',
    canonical: 'https://ph-document.com/contact/',
  },
  {
    path: '/privacy',
    outFile: path.join(projectRoot, 'dist', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
    canonical: 'https://ph-document.com/privacy/',
  },
  {
    path: '/kika-shinsei-guide',
    outFile: path.join(projectRoot, 'dist', 'kika-shinsei-guide', 'index.html'),
    title: 'フィリピン人の帰化申請ガイド｜必要書類・手続きの流れ・PSA・NBI取得【2026年最新】｜フィリピン書類取得代行センター',
    description: 'フィリピン国籍の方が日本に帰化するための手続きの流れ・必要書類（PSA出生証明書・NBI Clearance等）・費用・審査期間をわかりやすく解説。',
    canonical: 'https://ph-document.com/kika-shinsei-guide/',
    ogType: 'article',
  },

  /* ── Phase 1 新規ガイドページ (EN canonical) ─────────────── */
  {
    path: '/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'cenomar-apostille', 'index.html'),
    title: 'Does CENOMAR Need DFA Apostille? [2026] Answer by Use Case | Philippine Document Service',
    description: 'Find out if your CENOMAR needs DFA Apostille for LCCM, spouse visa, or naturalization. Clear answers by use case with 2026 practical information.',
    canonical: 'https://ph-document.com/cenomar-apostille',
    ogType: 'article',
  },
  {
    path: '/cenomar-validity',
    outFile: path.join(projectRoot, 'dist', 'cenomar-validity', 'index.html'),
    title: 'How Long Is CENOMAR Valid? The "6-Month Rule" Explained [2026] | Philippine Document Service',
    description: 'CENOMAR has no legal expiration, but most institutions require it within 6 months. Learn the basis of this rule and the ideal timing to obtain your CENOMAR.',
    canonical: 'https://ph-document.com/cenomar-validity',
    ogType: 'article',
  },
  {
    path: '/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'nbi-hit', 'index.html'),
    title: 'What is NBI HIT? Causes, Resolution Steps & Delay Time [2026] | Philippine Document Service',
    description: 'NBI HIT (MATCH FOUND) explained: what it means, why it happens, how to resolve it, and how much additional time to expect. Proxy service available for HIT cases.',
    canonical: 'https://ph-document.com/nbi-hit',
    ogType: 'article',
  },
  {
    path: '/apostille-processing-time',
    outFile: path.join(projectRoot, 'dist', 'apostille-processing-time', 'index.html'),
    title: 'DFA Apostille Processing Time Philippines 2026 — Standard, Express & Proxy Schedule',
    description: 'Up-to-date DFA Apostille processing times for 2026: standard (10–15 business days), express (3–5 days), and total proxy service timeline. Common delay causes explained.',
    canonical: 'https://ph-document.com/apostille-processing-time',
    ogType: 'article',
  },
  {
    path: '/guides',
    outFile: path.join(projectRoot, 'dist', 'guides', 'index.html'),
    title: 'All Guides & FAQ | CENOMAR, NBI, DFA Apostille, PSA [2026] | Philippine Document Service',
    description: 'Complete list of Philippine document guides and FAQ pages for 2026. Find answers about CENOMAR, NBI Clearance, DFA Apostille, PSA certificates, spouse visa, and more.',
    canonical: 'https://ph-document.com/guides',
  },

  /* ── Phase 1 新規ガイドページ (JA canonical) ─────────────── */
  {
    path: '/ja/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-apostille', 'index.html'),
    title: 'CENOMARにDFAアポスティーユは必要？【2026年最新】用途別の結論｜フィリピン書類取得代行センター',
    description: 'CENOMARにDFAアポスティーユ認証が必要かどうかを用途別（国際結婚LCCM・配偶者ビザ・帰化）に解説。東京フィリピン大使館の要件をもとに正確な情報を提供。',
    canonical: 'https://ph-document.com/ja/cenomar-apostille',
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: 'CENOMARの有効期限は？【2026年版】"6ヶ月"の根拠と用途別の考え方｜フィリピン書類取得代行センター',
    description: 'CENOMARの有効期限は発行から6ヶ月が目安。この"6ヶ月"の根拠、用途（国際結婚・配偶者ビザ・帰化）別の期限の考え方、取得タイミングの目安を解説。',
    canonical: 'https://ph-document.com/ja/cenomar-koyukigen',
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-hit', 'index.html'),
    title: 'NBI HITとは？【2026年版】原因・対処法・どれくらい遅れるか徹底解説｜フィリピン書類取得代行センター',
    description: 'NBI HITの意味・原因・解決手順・追加でかかる日数を詳しく解説。NBI Clearance申請でHIT（MATCH FOUND）が出た場合の対処法と代行サービスの活用方法。',
    canonical: 'https://ph-document.com/ja/nbi-hit',
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: 'DFAアポスティーユ 処理期間【2026年最新】通常・エクスプレス・代行の日数目安｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の処理期間を2026年最新情報で解説。通常・エクスプレス申請の日数目安、代行利用時のトータル期間、遅れる原因も紹介。',
    canonical: 'https://ph-document.com/ja/apostille-shori-kikan',
    ogType: 'article',
  },
  {
    path: '/ja/guides',
    outFile: path.join(projectRoot, 'dist', 'ja', 'guides', 'index.html'),
    title: 'お役立ちガイド一覧｜CENOMAR・NBI・DFAアポスティーユのFAQ集【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得に関するお役立ちガイドとFAQ集。CENOMAR・NBI・DFAアポスティーユ・LTOについての疑問を解決するガイドページ一覧。',
    canonical: 'https://ph-document.com/ja/guides',
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

  // hreflang tags: replace all three alternate links at once
  // For regional pages (/ and /jp/): set hreflang="en", hreflang="en-JP", hreflang="x-default"
  // For all other pages: keep pointing to the page's own canonical (no cross-link needed)
  if (route.hreflangSelf && route.hreflangCross && route.hreflangCrossHref && route.xDefault) {
    // Replace the existing hreflang block with the full three-tag set
    result = result.replace(
      /<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="${route.hreflangSelf}" href="${route.canonical}" />\n    <link rel="alternate" hreflang="${route.hreflangCross}" href="${route.hreflangCrossHref}" />\n    <link rel="alternate" hreflang="x-default" href="${route.xDefault}" />`
    );
  } else {
    // Non-regional pages: just update the existing self-referencing hreflang URLs
    result = result.replace(
      /<link rel="alternate" hreflang="en" href="[^"]*"/,
      `<link rel="alternate" hreflang="en" href="${route.canonical}"`
    );
    result = result.replace(
      /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
      `<link rel="alternate" hreflang="x-default" href="${route.canonical}"`
    );
  }

  // twitter:title
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${route.title}"`
  );

  // twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  );

  // og:type (article for guide pages, website for others)
  if (route.ogType) {
    result = result.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${route.ogType}"`
    );
  }

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
