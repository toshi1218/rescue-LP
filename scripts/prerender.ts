import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRoutes from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');

interface PageConfig {
  route: string;
  outputPath: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  jsonLd: string;
}

const pages: PageConfig[] = [
  {
    route: '/',
    outputPath: path.join(projectRoot, 'dist', 'index.html'),
    title: 'CENOMAR・PSA・NBI取得代行｜フィリピン書類取得代行センター',
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。',
    canonical: 'https://ph-document.com/',
    ogTitle: 'CENOMAR・PSA・NBI取得代行｜フィリピン書類取得代行センター',
    jsonLd: '', // Keep original JSON-LD from index.html
  },
  {
    route: '/cenomar-guide',
    outputPath: path.join(projectRoot, 'dist', 'cenomar-guide', 'index.html'),
    title: 'フィリピン独身証明書（CENOMAR・セノマー）とは？取得方法・費用・期間を徹底解説｜フィリピン書類取得代行センター',
    description: 'CENOMARとはフィリピンPSAが発行する独身証明書（セノマー）。国際結婚・配偶者ビザ申請に必要です。3つの取得方法（自分で・大使館・代行）・費用・有効期限・よくあるトラブルを初心者向けに解説。',
    canonical: 'https://ph-document.com/cenomar-guide/',
    ogTitle: 'フィリピン独身証明書（CENOMAR・セノマー）とは？取得方法・費用・期間を徹底解説',
    jsonLd: `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://ph-document.com/" },
        { "@type": "ListItem", "position": 2, "name": "CENOMAR（独身証明書）ガイド", "item": "https://ph-document.com/cenomar-guide/" }
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "フィリピン独身証明書（CENOMAR・セノマー）とは？取得方法・費用・期間を徹底解説",
      "description": "CENOMARとはフィリピンPSAが発行する独身証明書。国際結婚・配偶者ビザ申請に必要な書類の基本情報から取得方法3パターン・トラブル対処法まで解説。",
      "url": "https://ph-document.com/cenomar-guide/",
      "inLanguage": "ja",
      "datePublished": "2026-02-21",
      "dateModified": "2026-02-21",
      "author": { "@type": "Organization", "name": "フィリピン書類取得代行センター（株式会社IGRS）" },
      "publisher": { "@type": "Organization", "name": "フィリピン書類取得代行センター", "url": "https://ph-document.com/" },
      "about": ["CENOMAR", "独身証明書", "セノマー", "フィリピン書類", "国際結婚", "配偶者ビザ"]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "CENOMARの有効期限はどのくらいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PSAから発行された日を起算して、提出先が指定する期限（多くの場合6ヶ月、場合によっては3ヶ月以内）のものが求められます。日本の市区町村や出入国在留管理庁（入管）の窓口によって異なるため、事前に確認した上で余裕を持って取得することをお勧めします。"
          }
        },
        {
          "@type": "Question",
          "name": "フィリピンに行かなくてもCENOMARは取得できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、PSAのオンライン申請システムを利用すればフィリピンに渡航せずに取得できます。ただし、申請から書類が日本に届くまで通常1〜2ヶ月かかります。当センターの代行サービスをご利用いただくと、書類確認から発送手配まで一括してスムーズに進めることができます。"
          }
        },
        {
          "@type": "Question",
          "name": "日本語翻訳は必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CENOMARは英語で発行されます。日本の市区町村に婚姻届を提出する際は、日本語翻訳文の添付が必要です。翻訳は本人またはパートナーが行うことも可能ですが、当センターでは翻訳込みのプランもご提供しています。"
          }
        },
        {
          "@type": "Question",
          "name": "過去に婚姻歴がある場合はどうなりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "フィリピンに婚姻記録がある場合、PSAはCENOMARではなく婚姻証明書（Marriage Certificate）を発行します。再婚を希望する場合は、フィリピン法廷での婚姻無効判決（Annulment）や配偶者の死亡証明書など、状況に応じた追加書類が必要になります。複雑なケースはまず無料相談でご状況をお聞かせください。"
          }
        },
        {
          "@type": "Question",
          "name": "CENOMARとアポスティーユ認証は違うものですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CENOMARはPSAが発行する独身証明書そのものです。DFAアポスティーユ認証はCENOMAR等の書類に付ける国際的な公証で、別の手続きです。日本での国際結婚・配偶者ビザ申請では、通常アポスティーユ認証は不要とされることが多いですが、提出先によって異なりますので事前にご確認ください。"
          }
        }
      ]
    }
    </script>`,
  },
];

function buildPageHtml(template: string, config: PageConfig): string {
  let html = template;

  if (config.route !== '/') {
    // Replace title
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${config.title}</title>`);

    // Replace meta description
    html = html.replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${config.description}$2`,
    );

    // Replace canonical
    html = html.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${config.canonical}$2`,
    );

    // Remove hreflang (self-referencing only, replace with page-specific)
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="ja"\s+href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="ja" href="${config.canonical}" />`,
    );
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="x-default" href="${config.canonical}" />`,
    );

    // Replace OG tags
    html = html.replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${config.canonical}$2`,
    );
    html = html.replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${config.ogTitle}$2`,
    );
    html = html.replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${config.description}$2`,
    );
    html = html.replace(
      /(<meta\s+property="og:updated_time"\s+content=")[^"]*(")/,
      `$12026-02-21T00:00:00+09:00$2`,
    );

    // Replace Twitter tags
    html = html.replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${config.ogTitle}$2`,
    );
    html = html.replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${config.description}$2`,
    );

    // Remove all existing JSON-LD scripts and add page-specific ones
    html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

    // Inject page-specific JSON-LD before </head>
    html = html.replace('</head>', `${config.jsonLd}\n</head>`);
  }

  return html;
}

async function prerender() {
  const template = await readFile(distIndexPath, 'utf8');

  for (const page of pages) {
    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        { location: page.route },
        React.createElement(AppRoutes),
      ),
    );

    let html = buildPageHtml(template, page);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outputDir = path.dirname(page.outputPath);
    await mkdir(outputDir, { recursive: true });
    await writeFile(page.outputPath, html, 'utf8');

    console.log(`✓ Prerendered: ${page.route} → ${path.relative(projectRoot, page.outputPath)}`);
  }
}

prerender().catch((error) => {
  console.error('prerender failed:', error);
  process.exit(1);
});
