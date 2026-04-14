import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';
import { LanguageProvider } from '../lib/i18n';
import {
  SEO_YEAR,
  SEO_DATE_ISO,
  SEO_YEAR_MONTH_JA,
  SEO_YEAR_MONTH_EN,
  SEO_TITLE_BADGE_JA,
  SEO_TITLE_BADGE_EN,
  SEO_TITLE_BADGE_YEAR_JA,
  SEO_TITLE_BADGE_YEAR_EN,
  SEO_TITLE_BADGE_YEAR_SHORT_JA,
} from '../lib/seoDate';
import { COUNTRY_CONFIGS } from '../lib/countryConfig';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');

const BASE = 'https://ph-document.com';
type JsonLd = Record<string, unknown>;

interface RouteConfig {
  path: string;
  outFile: string;
  title: string;
  description: string;
  canonical: string;
  lang: 'en' | 'ja' | 'ko';
  enCanonical: string;
  jaCanonical: string;
  koCanonical?: string;
  ogType?: string;
  datePublished?: string;
  isAboutPage?: boolean;
  noindex?: boolean;
}

type HreflangMode = 'none' | 'multi' | 'ko-only';

function getHreflangMode(route: RouteConfig): HreflangMode {
  const enHome = `${BASE}/en/`;
  const jaHome = `${BASE}/ja/`;
  const koHome = `${BASE}/ko/`;
  // Home pages always get full multi-language hreflang
  if ([enHome, jaHome, koHome].includes(route.canonical)) return 'multi';
  const enIsFallback = route.enCanonical === enHome;
  const jaIsFallback = route.jaCanonical === jaHome;
  // KO-only standalone page: canonical is /ko/* and EN/JA equivalents don't exist
  // (e.g. /ko/f-6-philippines-documents/ — F-6 is Korean-specific, no EN/JA counterpart).
  // Emit self-referential hreflang="ko" + x-default→self so Google can identify
  // the page as Korean-only instead of receiving no language signal at all.
  if (route.lang === 'ko' && enIsFallback && jaIsFallback) return 'ko-only';
  // Skip if either EN or JA alternate is just a home-page fallback (not a genuine equivalent)
  if (enIsFallback || jaIsFallback) return 'none';
  return 'multi';
}


function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatJsonLd(json: JsonLd): string {
  return JSON.stringify(json, null, 2)
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n');
}

function replaceJsonLdBlock(html: string, label: string, json: JsonLd): string {
  const pattern = new RegExp(
    String.raw`\s*<!-- JSON-LD: ${escapeRegExp(label)} -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>`
  );

  return html.replace(
    pattern,
    `\n    <!-- JSON-LD: ${label} -->\n    <script type="application/ld+json">\n${formatJsonLd(json)}\n    </script>`
  );
}

function removeJsonLdBlock(html: string, label: string): string {
  const pattern = new RegExp(
    String.raw`\s*<!-- JSON-LD: ${escapeRegExp(label)} -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>`
  );

  return html.replace(pattern, '');
}

function insertJsonLdBlock(html: string, label: string, json: JsonLd): string {
  const block = `\n    <!-- JSON-LD: ${label} -->\n    <script type="application/ld+json">\n${formatJsonLd(json)}\n    </script>`;
  return html.replace('</head>', `${block}\n  </head>`);
}

function buildArticleJsonLd(route: RouteConfig): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: route.title,
    description: route.description,
    url: route.canonical,
    datePublished: route.datePublished ?? SEO_DATE_ISO,
    dateModified: SEO_DATE_ISO,
    author: {
      '@type': 'Organization',
      name: 'IGRS Inc. Editorial Team',
      url: `${BASE}/en/company/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'IGRS Inc.',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/favicon.svg`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': route.canonical },
    inLanguage: route.lang === 'ja' ? 'ja-JP' : route.lang === 'ko' ? 'ko-KR' : 'en-US',
  };
}

function buildAboutPageJsonLd(route: RouteConfig): JsonLd {
  const isJa = route.lang === 'ja';
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isJa ? '会社概要｜IGRS Inc.（フィリピン書類取得代行センター）' : 'About IGRS Inc. — Philippine Document Retrieval Service',
    url: route.canonical,
    description: route.description,
    inLanguage: isJa ? 'ja-JP' : 'en-US',
    about: {
      '@type': 'Organization',
      name: 'IGRS Inc.',
      legalName: '株式会社IGRS',
      url: BASE,
      foundingDate: '2020',
      address: [
        {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressLocality: isJa ? '和歌山市' : 'Wakayama City',
          addressRegion: isJa ? '和歌山県' : 'Wakayama Prefecture',
        },
        {
          '@type': 'PostalAddress',
          addressCountry: 'PH',
          addressLocality: 'Cebu City',
          addressRegion: 'Cebu',
        },
      ],
      email: 'igrs20200601@gmail.com',
      areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR', 'NL', 'DE', 'SG', 'HK', 'NZ', 'AE'],
    },
  };
}

function buildWebPageJsonLd(route: RouteConfig): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    url: route.canonical,
    inLanguage: route.lang,
    about:
      route.lang === 'ja'
        ? [
            'CENOMAR（独身証明書）',
            'PSA出生証明書',
            'NBI Clearance',
            'DFAアポスティーユ',
            'フィリピン書類取得代行',
          ]
        : [
            'CENOMAR (Certificate of No Marriage Record)',
            'PSA Birth Certificate',
            'NBI Clearance',
            'DFA Apostille',
            'Philippine document retrieval for immigration worldwide',
          ],
  };
}

function buildLocalBusinessJsonLd(route: RouteConfig): JsonLd {
  const isJa = route.lang === 'ja';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: isJa ? 'フィリピン書類取得代行センター' : 'Philippine Document Service',
    alternateName: isJa ? 'Philippine Document Service' : 'フィリピン書類取得代行センター',
    description: isJa
      ? 'フィリピン公的書類の取得代行サービス。会社本店は和歌山県和歌山市、現地拠点はセブ市です。PSA出生証明書、CENOMAR、NBI Clearance、DFAアポスティーユを日本語だけで代行します。'
      : 'Philippine document retrieval service for immigration and visa applicants worldwide. Our head office is in Wakayama City, Japan and our operations office is in Cebu City, Philippines. We obtain PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille. Ships via DHL.',
    url: `${BASE}/`,
    email: 'igrs20200601@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PH',
      addressLocality: 'Cebu City',
      addressRegion: 'Cebu',
    },
    areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR', 'NL', 'DE', 'SG', 'HK', 'NZ', 'AE'],
    availableLanguage: route.lang === 'ja' ? ['Japanese'] : route.lang === 'ko' ? ['Korean'] : ['English'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'IGRS Inc.',
      legalName: '株式会社IGRS',
      url: `${BASE}/`,
      email: 'igrs20200601@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'JP',
        addressLocality: isJa ? '和歌山県和歌山市' : 'Wakayama City',
        addressRegion: isJa ? '和歌山県' : 'Wakayama Prefecture',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
    },
  };
}

function buildHomeBreadcrumbJsonLd(route: RouteConfig): JsonLd {
  const isJa = route.lang === 'ja';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isJa ? 'ホーム' : 'Home',
        item: route.canonical,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isJa ? 'ガイド一覧' : 'Guides',
        item: `${BASE}/${route.lang}/guides/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isJa ? '料金' : 'Pricing',
        item: isJa ? `${BASE}/ja/ryokin/` : `${BASE}/en/pricing/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: isJa ? 'お問い合わせ' : 'Contact',
        item: isJa ? `${BASE}/ja/contact/` : `${BASE}/en/contact/`,
      },
    ],
  };
}

function buildHomeHowToJsonLd(route: RouteConfig): JsonLd {
  const isJa = route.lang === 'ja';

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: isJa ? 'フィリピン書類の取り寄せ手順' : 'How to Get Philippine Documents',
    description: isJa
      ? 'フィリピン書類を日本語だけで依頼し、原本を受け取るまでの流れ。'
      : 'How to request Philippine document retrieval and receive originals at your address.',
    totalTime: 'P30D',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: isJa ? '無料相談' : 'Free consultation',
        text: isJa
          ? '必要な書類や用途、希望納期をお知らせください。'
          : 'Tell us which documents you need, what they are for, and your target date.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: isJa ? 'お見積もり確定' : 'Quote confirmation',
        text: isJa
          ? '必要書類と費用、進め方を確認してご案内します。'
          : 'We confirm the required documents, costs, and next steps.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: isJa ? '着手金のお支払い' : 'Pay the deposit',
        text: isJa
          ? '内容に問題がなければ着手金をお支払いいただきます。'
          : 'Once the plan is confirmed, pay the initial deposit to start.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: isJa ? 'フィリピンで取得' : 'Document retrieval in the Philippines',
        text: isJa
          ? '現地スタッフがPSA・NBI・DFA・LTOの手続きを代行します。'
          : 'Our local team handles PSA, NBI, DFA, and LTO procedures on your behalf.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: isJa ? 'DHLで発送' : 'Ship via DHL',
        text: isJa
          ? '取得完了後、追跡付きで日本または海外へ発送します。'
          : 'Once documents are ready, we ship them to your address with tracking.',
      },
    ],
  };
}

function buildHomeServiceJsonLd(route: RouteConfig): JsonLd {
  const isJa = route.lang === 'ja';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: isJa ? 'フィリピン書類取得代行' : 'Philippine Document Retrieval',
    name: isJa ? 'フィリピン書類取得代行サービス' : 'Philippine Document Retrieval Service',
    provider: {
      '@type': 'Organization',
      name: isJa ? 'フィリピン書類取得代行センター' : 'Philippine Document Service (IGRS Inc.)',
      url: `${BASE}/`,
    },
    areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR', 'NL', 'DE', 'SG', 'HK', 'NZ', 'AE'],
    description: isJa
      ? 'PSA出生証明書、CENOMAR、NBI Clearance、DFAアポスティーユを日本語だけで代行し、DHLでお届けします。'
      : 'We retrieve PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille from the Philippines, with DHL delivery worldwide.',
  };
}

const routes: RouteConfig[] = [
  /* ── EN canonical routes (/en/*) ─────────────────────── */
  {
    path: '/en/',
    outFile: path.join(projectRoot, 'dist', 'en', 'index.html'),
    title: `Philippine Document Service | PSA, NBI & CENOMAR [${SEO_YEAR_MONTH_EN}]`,
    description: `Need Philippine documents for immigration? We retrieve PSA, CENOMAR, NBI Clearance + DFA Apostille. Ships via DHL worldwide. Free consultation.`,
    canonical: `${BASE}/en/`,
    lang: 'en',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
    koCanonical: `${BASE}/ko/`,
  },
  {
    path: '/en/cenomar/',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar', 'index.html'),
    title: `What Is CENOMAR? Meaning, How to Get It & Costs [${SEO_YEAR}]`,
    description: `CENOMAR = Certificate of No Marriage Record, issued by PSA Philippines. Required for K-1, spouse visa & marriage abroad. We retrieve it — no trip needed.`,
    canonical: `${BASE}/en/cenomar/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-apostille/',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-apostille', 'index.html'),
    title: `CENOMAR Apostille Service [${SEO_YEAR_MONTH_EN}] | We Handle It`,
    description: `Not sure if your CENOMAR needs DFA Apostille? We advise and handle retrieval with or without Apostille. Free consultation for marriage and visa applicants.`,
    canonical: `${BASE}/en/cenomar-apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-validity/',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-validity', 'index.html'),
    title: `CENOMAR Validity Period [${SEO_YEAR_MONTH_EN}] — Timing Guide`,
    description: `CENOMAR is typically valid for 6 months. If it expires during your marriage or visa process, you'll need a new one. We time the retrieval perfectly. Free consultation.`,
    canonical: `${BASE}/en/cenomar-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-birth-certificate/',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-birth-certificate', 'index.html'),
    title: `PSA Birth Certificate + Apostille Service [${SEO_YEAR_MONTH_EN}]`,
    description: `Get a PSA Birth Certificate from the Philippines without flying there. We handle retrieval + DFA Apostille + DHL delivery to your door. Free quote.`,
    canonical: `${BASE}/en/psa-birth-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-clearance/',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance + Apostille Service [${SEO_YEAR_MONTH_EN}]`,
    description: `Need NBI Clearance for a spouse visa or work permit? We retrieve it with DFA Apostille and ship worldwide. HIT cases handled. Free quote.`,
    canonical: `${BASE}/en/nbi-clearance/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    koCanonical: `${BASE}/ko/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-hit/',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-hit', 'index.html'),
    title: `NBI HIT Resolution Service [${SEO_YEAR_MONTH_EN}] — We Fix It`,
    description: `NBI HIT (MATCH FOUND) delaying your visa? We resolve HIT + retrieve NBI Clearance + DFA Apostille so you meet your deadline. Free consultation.`,
    canonical: `${BASE}/en/nbi-hit/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille/',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille', 'index.html'),
    title: `DFA Apostille Service [${SEO_YEAR_MONTH_EN}] — No Trip Needed`,
    description: `Need a DFA Apostille but can't go to the Philippines? We handle PSA, NBI, CENOMAR authentication — and ship to you. Free consultation available.`,
    canonical: `${BASE}/en/apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-processing-time/',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-processing-time', 'index.html'),
    title: `DFA Apostille Processing Time [${SEO_YEAR_MONTH_EN}]`,
    description: `DFA Apostille takes 5–10 business days. Visa deadline approaching? Our express proxy service can help you meet it. Free consultation to check your timeline.`,
    canonical: `${BASE}/en/apostille-processing-time/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/en/international-marriage-guide/',
    outFile: path.join(projectRoot, 'dist', 'en', 'international-marriage-guide', 'index.html'),
    title: `Marrying a Filipino? Documents We Get for You [${SEO_YEAR_MONTH_EN}]`,
    description: `Marrying a Filipino? We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance + DFA Apostille — shipped worldwide. Free quote for petitioners.`,
    canonical: `${BASE}/en/international-marriage-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/spouse-visa-documents/',
    outFile: path.join(projectRoot, 'dist', 'en', 'spouse-visa-documents', 'index.html'),
    title: `Spouse Visa Document Service [${SEO_YEAR_MONTH_EN}] | PSA & NBI`,
    description: `Need Philippine documents for a spouse visa? We retrieve PSA, CENOMAR, NBI + DFA Apostille and ship everything to your door. Free quote.`,
    canonical: `${BASE}/en/spouse-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-marriage-certificate/',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-marriage-certificate', 'index.html'),
    title: `PSA Marriage Certificate + Apostille [${SEO_YEAR_MONTH_EN}]`,
    description: `Get a PSA Marriage Certificate without flying to the Philippines. We retrieve + DFA Apostille + DHL ship to your door. Free quote.`,
    canonical: `${BASE}/en/psa-marriage-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/drivers-license-conversion/',
    outFile: path.join(projectRoot, 'dist', 'en', 'drivers-license-conversion', 'index.html'),
    title: `PH License Conversion: LTO Documents [${SEO_YEAR_MONTH_EN}]`,
    description: `Converting a Philippine driver's license? We retrieve the LTO Driver's Record with DFA Apostille and ship worldwide via DHL. Free quote.`,
    canonical: `${BASE}/en/drivers-license-conversion/`,
    lang: 'en',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/naturalization-guide/',
    outFile: path.join(projectRoot, 'dist', 'en', 'naturalization-guide', 'index.html'),
    title: `Naturalization Document Service [${SEO_YEAR_MONTH_EN}] | PSA & NBI`,
    description: `Need Philippine civil documents for citizenship? We retrieve PSA Birth Certificate, NBI + DFA Apostille shipped worldwide via DHL. Free quote.`,
    canonical: `${BASE}/en/naturalization-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/en/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/guides/',
    outFile: path.join(projectRoot, 'dist', 'en', 'guides', 'index.html'),
    title: `Philippine Document Guides ${SEO_TITLE_BADGE_YEAR_EN} | FAQ & How-To`,
    description: `${SEO_YEAR} guide library for Philippine documents: CENOMAR, NBI Clearance, DFA Apostille explained. Answers for US visa, K-1, CR-1, and immigration applicants.`,
    canonical: `${BASE}/en/guides/`,
    lang: 'en',
    enCanonical: `${BASE}/en/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/en/psa-birth-certificate-cost/',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-birth-certificate-cost', 'index.html'),
    title: `PSA Birth Certificate Fee Philippines ${SEO_YEAR} — PHP 365 + Apostille`,
    description: `PSA Birth Certificate fee: PHP 365 per copy (${SEO_YEAR}). Total with DFA Apostille + DHL international shipping from USD $349. No hidden fees.`,
    canonical: `${BASE}/en/psa-birth-certificate-cost/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-fee/',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-fee', 'index.html'),
    title: `DFA Apostille Fee [${SEO_YEAR_MONTH_EN}] — Full Price Breakdown`,
    description: `Full cost breakdown for DFA Apostille: official fees + proxy service + international shipping. Compare CENOMAR, PSA, and NBI pricing. Free quote available.`,
    canonical: `${BASE}/en/apostille-fee/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-validity/',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-validity', 'index.html'),
    title: `NBI Clearance Validity [${SEO_YEAR_MONTH_EN}] — Timing Guide`,
    description: `NBI Clearance is valid for 1 year, but spouse visas often require it within 6 months. Timing matters. We help you get it at the right time. Free consultation.`,
    canonical: `${BASE}/en/nbi-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/driver-record/',
    outFile: path.join(projectRoot, 'dist', 'en', 'driver-record', 'index.html'),
    title: `LTO Driver's Record Service [${SEO_YEAR_MONTH_EN}]`,
    description: `Need an LTO Driver's Record for license conversion or employment verification? We retrieve it with DFA Apostille and ship to you. Ideal for employers and spouses. Free consultation.`,
    canonical: `${BASE}/en/driver-record/`,
    lang: 'en',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/en/us-visa-documents/',
    outFile: path.join(projectRoot, 'dist', 'en', 'us-visa-documents', 'index.html'),
    title: `K-1 / CR-1 Visa Documents Service [${SEO_YEAR_MONTH_EN}]`,
    description: `US petitioner for a K-1 or CR-1/IR-1 visa? We retrieve PSA, CENOMAR, NBI + DFA Apostille and ship to your door. Free consultation for American petitioners.`,
    canonical: `${BASE}/en/us-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/k1-visa-documents/',
    outFile: path.join(projectRoot, 'dist', 'en', 'k1-visa-documents', 'index.html'),
    title: `K-1 Visa Documents: CENOMAR, PSA & NBI [${SEO_YEAR_MONTH_EN}]`,
    description: `K-1 visa petitioner? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for your Filipino fiancé(e). Ships to your US address. Free consultation.`,
    canonical: `${BASE}/en/k1-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/k1-visa-documents/`,
    jaCanonical: `${BASE}/ja/`,
    ogType: 'article',
  },
  {
    path: '/en/cr1-visa-documents/',
    outFile: path.join(projectRoot, 'dist', 'en', 'cr1-visa-documents', 'index.html'),
    title: `CR-1 Visa Documents — NVC Ready [${SEO_YEAR_MONTH_EN}]`,
    description: `CR-1/IR-1 visa petitioner? We retrieve PSA Marriage Certificate, NBI Clearance + DFA Apostille for NVC. Ships to your US address. Free consultation.`,
    canonical: `${BASE}/en/cr1-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cr1-visa-documents/`,
    jaCanonical: `${BASE}/ja/`,
    ogType: 'article',
  },
  {
    path: '/en/canada/',
    outFile: path.join(projectRoot, 'dist', 'en', 'canada', 'index.html'),
    title: `PH Documents for Canada Immigration [${SEO_YEAR_MONTH_EN}]`,
    description: `Applying for Canada PR or spousal sponsorship? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for IRCC. Ships via DHL. Free consultation.`,
    canonical: `${BASE}/en/canada/`,
    lang: 'en',
    enCanonical: `${BASE}/en/canada/`,
    jaCanonical: `${BASE}/ja/canada/`,
    ogType: 'article',
  },
  {
    path: '/ja/canada/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'canada', 'index.html'),
    title: `カナダ移民ビザのフィリピン書類取得代行 [${SEO_YEAR_MONTH_JA}] — IRCC対応・DHL郵送`,
    description: `カナダ永住権・配偶者スポンサーシップに必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。日本語だけでOK。無料相談受付中。`,
    canonical: `${BASE}/ja/canada/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/canada/`,
    jaCanonical: `${BASE}/ja/canada/`,
    ogType: 'article',
  },
  {
    path: '/en/australia/',
    outFile: path.join(projectRoot, 'dist', 'en', 'australia', 'index.html'),
    title: `PH Documents for Australia Immigration [${SEO_YEAR_MONTH_EN}]`,
    description: `Applying for Australian partner visa or PR? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille. Ships to Australia via DHL. Free consultation.`,
    canonical: `${BASE}/en/australia/`,
    lang: 'en',
    enCanonical: `${BASE}/en/australia/`,
    jaCanonical: `${BASE}/ja/australia/`,
    ogType: 'article',
  },
  {
    path: '/ja/australia/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'australia', 'index.html'),
    title: `オーストラリアビザのフィリピン書類取得代行 [${SEO_YEAR_MONTH_JA}] — Home Affairs対応・DHL郵送`,
    description: `オーストラリアパートナービザ・永住権申請に必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。日本語だけでOK。無料相談受付中。`,
    canonical: `${BASE}/ja/australia/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/australia/`,
    jaCanonical: `${BASE}/ja/australia/`,
    ogType: 'article',
  },
  {
    path: '/en/uk/',
    outFile: path.join(projectRoot, 'dist', 'en', 'uk', 'index.html'),
    title: `PH Documents for UK Immigration [${SEO_YEAR_MONTH_EN}]`,
    description: `Applying for a UK spouse visa? We retrieve CENOMAR, PSA Birth Certificate & NBI Clearance with DFA Apostille for UKVI. Ships to the UK. Free consultation.`,
    canonical: `${BASE}/en/uk/`,
    lang: 'en',
    enCanonical: `${BASE}/en/uk/`,
    jaCanonical: `${BASE}/ja/uk/`,
    ogType: 'article',
  },
  {
    path: '/ja/uk/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'uk', 'index.html'),
    title: `UK移民ビザのフィリピン書類取得代行 [${SEO_YEAR_MONTH_JA}] — UKVI対応・DHL郵送`,
    description: `UK配偶者ビザ・永住許可（ILR）申請に必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。日本語だけでOK。無料相談受付中。`,
    canonical: `${BASE}/ja/uk/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/uk/`,
    jaCanonical: `${BASE}/ja/uk/`,
    ogType: 'article',
  },
  {
    path: '/en/pricing/',
    outFile: path.join(projectRoot, 'dist', 'en', 'pricing', 'index.html'),
    title: `Pricing [${SEO_YEAR_MONTH_EN}] | CENOMAR, PSA & NBI Service`,
    description: `View ${SEO_YEAR} pricing for CENOMAR, PSA Birth Certificate, NBI Clearance & DFA Apostille. All plans include DHL Express worldwide shipping. Free quote.`,
    canonical: `${BASE}/en/pricing/`,
    lang: 'en',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
    koCanonical: `${BASE}/ko/pricing/`,
  },
  {
    path: '/en/company/',
    outFile: path.join(projectRoot, 'dist', 'en', 'company', 'index.html'),
    title: 'About Us | IGRS Inc. — Philippine Document Retrieval Service',
    description: 'IGRS Inc. is a Cebu-based document retrieval agency. We handle PSA, NBI, LTO & DFA Apostille for US visa and immigration applicants worldwide. English support.',
    canonical: `${BASE}/en/company/`,
    lang: 'en',
    enCanonical: `${BASE}/en/company/`,
    jaCanonical: `${BASE}/ja/company/`,
    isAboutPage: true,
  },
  {
    path: '/en/contact/',
    outFile: path.join(projectRoot, 'dist', 'en', 'contact', 'index.html'),
    title: 'Contact Us | Philippine Document Service',
    description: 'Contact us for Philippine document procurement, international marriage, and spouse visa inquiries. Free consultation. We reply within 1 business day.',
    canonical: `${BASE}/en/contact/`,
    lang: 'en',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
    koCanonical: `${BASE}/ko/contact/`,
  },
  {
    path: '/en/privacy/',
    outFile: path.join(projectRoot, 'dist', 'en', 'privacy', 'index.html'),
    title: 'Privacy Policy | Philippine Document Service',
    description: 'Privacy policy of Philippine Document Service (IGRS Inc.). Explains how we collect, use, and manage your personal information.',
    canonical: `${BASE}/en/privacy/`,
    lang: 'en',
    enCanonical: `${BASE}/en/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },

  {
    path: '/en/cenomar-vs-marriage-certificate/',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-vs-marriage-certificate', 'index.html'),
    title: `CENOMAR vs. PSA Marriage Certificate [Mar ${SEO_YEAR}]`,
    description: `CENOMAR proves you're single. PSA Marriage Certificate proves you're married. Not sure which to order? We explain the difference and retrieve it.`,
    canonical: `${BASE}/en/cenomar-vs-marriage-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-vs-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/cenomar-vs-marriage-certificate/`,
    ogType: 'article',
  },
  {
    path: '/en/document-checklist-by-visa/',
    outFile: path.join(projectRoot, 'dist', 'en', 'document-checklist-by-visa', 'index.html'),
    title: `Philippine Document Checklist by Visa Type [${SEO_YEAR_MONTH_EN}] | K-1, CR-1, Spouse Visa`,
    description: `Which Philippine documents do you need? Complete checklist by visa type: K-1, CR-1/IR-1, Canada spousal sponsorship, Australia partner visa, UK spouse visa, Japan spouse visa. CENOMAR, PSA, NBI — all explained.`,
    canonical: `${BASE}/en/document-checklist-by-visa/`,
    lang: 'en',
    enCanonical: `${BASE}/en/document-checklist-by-visa/`,
    jaCanonical: `${BASE}/ja/document-checklist-by-visa/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-clearance-overseas/',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-clearance-overseas', 'index.html'),
    title: `NBI Clearance from Overseas [${SEO_YEAR_MONTH_EN}] — No Trip Needed`,
    description: `Need NBI Clearance while living abroad? We retrieve it without you returning to the Philippines. HIT cases handled. DFA Apostille included. Free consultation.`,
    canonical: `${BASE}/en/nbi-clearance-overseas/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-clearance-overseas/`,
    jaCanonical: `${BASE}/ja/nbi-clearance-overseas/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-late-registration/',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-late-registration', 'index.html'),
    title: `PSA No Record or Name Error [${SEO_YEAR_MONTH_EN}] — Fix Guide`,
    description: `PSA birth certificate missing or has errors? This blocks K-1, CR-1, and spouse visa applications. We explain the late registration and correction process.`,
    canonical: `${BASE}/en/psa-late-registration/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-late-registration/`,
    jaCanonical: `${BASE}/ja/psa-late-registration/`,
    ogType: 'article',
  },

  {
    path: '/ja/cenomar-vs-marriage-certificate/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-vs-marriage-certificate', 'index.html'),
    title: `CENOMARとPSA婚姻証明書の違い【${SEO_YEAR_MONTH_JA}】`,
    description: 'CENOMARは独身を証明し、PSA婚姻証明書は婚姻を証明します。K-1、CR-1/IR-1、国際結婚でどちらが必要かを日本語で整理します。',
    canonical: `${BASE}/ja/cenomar-vs-marriage-certificate/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-vs-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/cenomar-vs-marriage-certificate/`,
    ogType: 'article',
  },
  {
    path: '/ja/document-checklist-by-visa/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'document-checklist-by-visa', 'index.html'),
    title: `ビザ別フィリピン書類チェックリスト【${SEO_YEAR_MONTH_JA}】`,
    description: 'K-1、CR-1/IR-1、カナダ、オーストラリア、UK、日本向けに、フィリピン書類の必要書類を整理した日本語チェックリストです。',
    canonical: `${BASE}/ja/document-checklist-by-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/document-checklist-by-visa/`,
    jaCanonical: `${BASE}/ja/document-checklist-by-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance-overseas/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance-overseas', 'index.html'),
    title: `海外在住でも取れるNBIクリアランス【${SEO_YEAR_MONTH_JA}】`,
    description: 'フィリピンに戻らずにNBIクリアランスを取りたい方へ。代理申請、HIT対応、海外発送までを日本語で案内します。',
    canonical: `${BASE}/ja/nbi-clearance-overseas/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-clearance-overseas/`,
    jaCanonical: `${BASE}/ja/nbi-clearance-overseas/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-late-registration/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-late-registration', 'index.html'),
    title: `PSAに記録がない・氏名誤りのときの対応【${SEO_YEAR_MONTH_JA}】`,
    description: 'PSA出生証明書が見つからない、氏名や生年月日に誤りがある場合の遅延登録・訂正を整理します。',
    canonical: `${BASE}/ja/psa-late-registration/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-late-registration/`,
    jaCanonical: `${BASE}/ja/psa-late-registration/`,
    ogType: 'article',
  },

  /* ── JA canonical routes (/ja/*) ─────────────────────── */
  {
    path: '/ja/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'index.html'),
    title: `フィリピン書類、日本語だけで確実に取り寄せできます｜CENOMAR・PSA・NBI代行${SEO_TITLE_BADGE_JA}`,
    description: 'CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユを日本語だけで安心代行。フィリピン渡航不要。進捗は随時ご報告。国際結婚・配偶者ビザ・帰化申請に対応。無料相談受付中。',
    canonical: `${BASE}/ja/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
    koCanonical: `${BASE}/ko/`,
  },
  {
    path: '/ja/cenomar/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar', 'index.html'),
    title: `CENOMARとは｜フィリピン独身証明書の取得方法【${SEO_YEAR_MONTH_JA}】代行可・渡航不要`,
    description: 'CENOMARはフィリピンに行かずに取得できます。PSA申請からDFAアポスティーユ・DHL郵送まで一括代行。国際結婚・配偶者ビザ・帰化申請に対応。通常4〜6週間。まず無料相談を。',
    canonical: `${BASE}/ja/cenomar/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-apostille/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-apostille', 'index.html'),
    title: `CENOMARのDFAアポスティーユ、代行取得できます【${SEO_YEAR_MONTH_JA}】日本語だけでOK`,
    description: 'CENOMARのDFAアポスティーユはフィリピン現地での手続きが必要です。当センターが代行取得し、紙の原本アポスティーユで日本へ郵送。国際結婚・配偶者ビザ・帰化申請に対応。無料相談。',
    canonical: `${BASE}/ja/cenomar-apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-koyukigen/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: `CENOMARの有効期限【${SEO_YEAR_MONTH_JA}】発行から6ヶ月が目安｜提出先別の基準まとめ`,
    description: 'CENOMARの有効期限は多くの提出先で発行から6ヶ月以内。入管・市区町村役場・大使館など提出先別の基準と、期限切れを防ぐ最適な取得タイミングを解説します。',
    canonical: `${BASE}/ja/cenomar-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-shussei-shomeisho/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-shomeisho', 'index.html'),
    title: `フィリピン出生証明書の取り寄せ代行【${SEO_YEAR_MONTH_JA}】PSA・アポスティーユ込み`,
    description: 'フィリピン出生証明書（PSA）を日本から取り寄せ代行。セブ在住スタッフが直接PSA申請→DFAアポスティーユ→国際郵送まで一括対応。紙の原本を4〜6週間で自宅へ。追加請求なし。無料相談。',
    canonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance', 'index.html'),
    title: `フィリピンNBI Clearance（無犯罪証明書）取得代行【${SEO_YEAR_MONTH_JA}】渡航不要・HIT対応`,
    description: 'フィリピンNBI Clearance（無犯罪証明書）を渡航なしで取得代行。HIT（同名者あり）ケースも対応可。DFAアポスティーユ付きで日本へ郵送。配偶者ビザ・帰化申請・海外就労に。無料相談。',
    canonical: `${BASE}/ja/nbi-clearance/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    koCanonical: `${BASE}/ko/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-hit', 'index.html'),
    title: `NBI HITが出た——あきらめないでください【${SEO_YEAR_MONTH_JA}】HIT解消から代行取得まで対応`,
    description: 'NBI HITは必ずしも犯罪歴ではありません。同姓同名の別人の記録の場合も多い。当センターがHIT確認・解消・NBI取得・DFAアポスティーユまで一括代行。まず状況をご相談ください。',
    canonical: `${BASE}/ja/nbi-hit/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille', 'index.html'),
    title: `フィリピンDFAアポスティーユ代行【${SEO_YEAR_MONTH_JA}】書類取得から一括対応・渡航不要`,
    description: 'DFAアポスティーユはフィリピン現地での手続きが必要ですが、当センターが代行します。PSA・CENOMAR・NBI等の書類取得と同時依頼OK。紙の原本で日本へ郵送。無料相談。',
    canonical: `${BASE}/ja/apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: `DFAアポスティーユの処理期間【${SEO_YEAR_MONTH_JA}】Regular 4営業日・Express 翌営業日`,
    description: 'DFAアポスティーユの処理期間はRegular（4営業日）またはExpress（翌営業日）。申請から受け取りまでの流れ・費用の違い・提出期限から逆算したスケジュールの立て方を解説。',
    canonical: `${BASE}/ja/apostille-shori-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/ja/kokusai-kekkon-guide/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-guide', 'index.html'),
    title: `フィリピン人との国際結婚 手続きの流れ・費用・必要書類【${SEO_YEAR_MONTH_JA}】`,
    description: 'フィリピン人との国際結婚の手続き・費用・必要書類を解説。CENOMAR・PSA出生証明書・DFAアポスティーユを日本語で一括代行。日本先行婚・フィリピン先行婚対応。無料相談。',
    canonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa', 'index.html'),
    title: `配偶者ビザの書類代行【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: '入管が求める「紙の原本＋DFAアポスティーユ」形式でPSA婚姻証明書・出生証明書・CENOMARを代行取得。新規申請・更新・変更に対応。有効期限に合わせた取得タイミングもアドバイス。無料相談。',
    canonical: `${BASE}/ja/haigusha-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-kekkon-shomeisho/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-kekkon-shomeisho', 'index.html'),
    title: `PSA婚姻証明書の取得代行【${SEO_YEAR_MONTH_JA}】アポスティーユ付き`,
    description: 'PSA婚姻証明書はフィリピンに行かずに取得できます。現地スタッフがPSA申請・DFAアポスティーユを代行し、紙の原本で日本へ郵送。注釈付き（Annotated）にも対応。無料相談。',
    canonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/gaimen-kirikae-guide/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gaimen-kirikae-guide', 'index.html'),
    title: `フィリピン免許→日本免許の外免切替に必要な書類【${SEO_YEAR_MONTH_JA}】渡航不要`,
    description: 'フィリピン運転免許から日本免許への外免切替に必要なLTO運転経歴証明書＋DFAアポスティーユを代行取得。渡航不要、日本語だけでOK。免許センターへの提出形式に対応。まず無料相談。',
    canonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/kika-shinsei-guide/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kika-shinsei-guide', 'index.html'),
    title: `帰化申請の書類代行【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: 'PSA出生証明書・NBI Clearance・DFAアポスティーユを一括代行。法務局の要件に合わせた形式で手配。司法書士・行政書士の先生からのご依頼も対応。無料相談で必要書類を確認。',
    canonical: `${BASE}/ja/kika-shinsei-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/guides/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'guides', 'index.html'),
    title: `フィリピン書類ガイド一覧${SEO_TITLE_BADGE_YEAR_SHORT_JA}｜CENOMAR・NBI・DFAアポスティーユ・LTO`,
    description: 'CENOMAR・NBI Clearance・DFAアポスティーユ・LTO書類の取得代行サービス一覧。国際結婚・配偶者ビザ・帰化申請・外免切替に必要な書類を日本語だけで取り寄せ。',
    canonical: `${BASE}/ja/guides/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/ja/psa-shussei-cost/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-cost', 'index.html'),
    title: `PSA出生証明書の費用【${SEO_YEAR_MONTH_JA}】総額いくら？現地365ペソだけでは届かない理由`,
    description: 'PSA出生証明書の現地料金は365ペソですが、日本に届けるにはDFAアポスティーユ代・国際郵送費が別途必要。追加請求なし・総額明示で代行。¥50,000（税別）。無料見積もり。',
    canonical: `${BASE}/ja/psa-shussei-cost/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-crs-cebu-genchi-report/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-crs-cebu-genchi-report', 'index.html'),
    title: `PSA CRSセブ現地レポート【出生証明書・結婚証明書・CENOMAR取得場所】`,
    description: 'フィリピンのPSA書類（出生証明書・結婚証明書・CENOMAR・死亡証明書）はセブ市コロン通りのCRSアウトレットで取得します。セブ在住スタッフによる現地写真レポート。',
    canonical: `${BASE}/ja/psa-crs-cebu-genchi-report/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-crs-cebu-report/`,
    jaCanonical: `${BASE}/ja/psa-crs-cebu-genchi-report/`,
    ogType: 'article',
    datePublished: '2026-03-01',
  },
  {
    path: '/ja/apostille-ryokin/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-ryokin', 'index.html'),
    title: `DFAアポスティーユの料金【${SEO_YEAR_MONTH_JA}】Regular・Express別の費用と総額の目安`,
    description: 'DFAアポスティーユの料金はRegular約1,000ペソ・Express約2,000ペソ。PSA取得費・国際郵送費を含めた総額の目安と、CENOMAR・PSA・NBI別の費用内訳を解説。',
    canonical: `${BASE}/ja/apostille-ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-koyukigen/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-koyukigen', 'index.html'),
    title: `NBI Clearanceの有効期限【${SEO_YEAR_MONTH_JA}】発行から1年｜提出先別の注意点`,
    description: 'NBI Clearanceの有効期限は発行から1年。ただし入管や大使館では6ヶ月以内を求められる場合も。提出先別の基準・期限切れを防ぐ取得タイミング・アポスティーユとの関係を解説。',
    canonical: `${BASE}/ja/nbi-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/driver-record/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'driver-record', 'index.html'),
    title: `LTO運転経歴証明書代行【${SEO_YEAR_MONTH_JA}】外免切替・企業採用`,
    description: 'フィリピン免許の外免切替に必要なLTO運転経歴証明書を代行取得。DFAアポスティーユ・オリジナルレシート込みで都道府県の免許センターへの提出形式に対応。複数名まとめ依頼可。無料相談。',
    canonical: `${BASE}/ja/driver-record/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/ja/us-visa-documents/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'us-visa-documents', 'index.html'),
    title: `米国ビザの書類代行【${SEO_YEAR_MONTH_JA}】K-1・CR-1対応`,
    description: 'CENOMAR・PSA出生証明書・婚姻証明書・NBI ClearanceをDFAアポスティーユ付きで一括代行。USCIS・NVC提出に対応。英語の書類も当センターが確認・手配。無料相談。',
    canonical: `${BASE}/ja/us-visa-documents/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/ja/ryokin/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'ryokin', 'index.html'),
    title: `料金一覧${SEO_TITLE_BADGE_JA}料金・追加請求なし｜フィリピン書類取得代行`,
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユの代行料金一覧。PSA取得・アポスティーユ・国際郵送をまとめた料金。後から追加請求なし。無料見積もり受付中。',
    canonical: `${BASE}/ja/ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
    koCanonical: `${BASE}/ko/pricing/`,
  },
  {
    path: '/ja/company/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'company', 'index.html'),
    title: '会社概要｜IGRS Inc.（フィリピン書類取得代行センター）',
    description: 'フィリピン書類取得代行センターを運営するIGRS Inc.の会社概要。代表・設立年・所在地（和歌山県和歌山市 / フィリピン共和国セブ市）・事業内容を掲載。PSA・CENOMAR・NBI・DFAアポスティーユ取得を日本語でサポート。',
    canonical: `${BASE}/ja/company/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/company/`,
    jaCanonical: `${BASE}/ja/company/`,
    isAboutPage: true,
  },
  {
    path: '/ja/contact/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'contact', 'index.html'),
    title: '無料相談・お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行・国際結婚・配偶者ビザ・帰化申請・外免切替に関するご相談はこちら。24時間以内に返信します。まずはお気軽にご相談ください。',
    canonical: `${BASE}/ja/contact/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
    koCanonical: `${BASE}/ko/contact/`,
  },
  {
    path: '/ja/privacy/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター（IGRS Inc.）',
    description: 'フィリピン書類取得代行センター（IGRS Inc.）のプライバシーポリシー。個人情報の収集・利用目的・第三者提供・安全管理についてご説明します。',
    canonical: `${BASE}/ja/privacy/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },
  {
    path: '/en/terms/',
    outFile: path.join(projectRoot, 'dist', 'en', 'terms', 'index.html'),
    title: 'Terms of Service | Philippine Document Service',
    description: 'Terms of service for Philippine Document Service (IGRS Inc.). Covers service scope, ordering, processing times, cancellations, and governing law.',
    canonical: `${BASE}/en/terms/`,
    lang: 'en',
    enCanonical: `${BASE}/en/terms/`,
    jaCanonical: `${BASE}/ja/terms/`,
  },
  {
    path: '/ja/kokusai-kekkon-roadmap/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-roadmap', 'index.html'),
    title: `フィリピン国際結婚の手続きロードマップ作成【${SEO_YEAR_MONTH_JA}】お二人の状況に合わせた書類・手順を整理`,
    description: 'フィリピン人パートナーと日本で結婚・同居を目指す方向けの個別ロードマップ作成。必要書類・手続きの順番・提出先を、お二人の状況に合わせて整理してお渡しします。49,800円（税込54,780円）。',
    canonical: `${BASE}/ja/kokusai-kekkon-roadmap/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/personalized-roadmap/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-roadmap/`,
    ogType: 'article',
  },
  {
    path: '/ja/terms/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'terms', 'index.html'),
    title: '利用規約｜フィリピン書類取得代行センター（IGRS Inc.）',
    description: 'フィリピン書類取得代行センター（IGRS Inc.）の利用規約。サービス内容・料金・キャンセルポリシー・免責事項・準拠法についてご説明します。',
    canonical: `${BASE}/ja/terms/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/terms/`,
    jaCanonical: `${BASE}/ja/terms/`,
  },
  {
    path: '/ja/kojin-joho-hogo/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kojin-joho-hogo', 'index.html'),
    title: '個人情報保護方針｜フィリピン書類取得代行センター（IGRS Inc.）',
    description: '株式会社IGRSの個人情報保護方針。個人情報保護法に基づく個人情報の取得・利用目的・第三者提供・安全管理措置・開示請求への対応を説明します。',
    canonical: `${BASE}/ja/kojin-joho-hogo/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/personal-information-protection/`,
    jaCanonical: `${BASE}/ja/kojin-joho-hogo/`,
  },
  {
    path: '/ja/nihon-senko-ph-senko/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nihon-senko-ph-senko', 'index.html'),
    title: `日本先行婚とフィリピン先行婚【${SEO_YEAR_MONTH_JA}】どちらを選ぶべき？手続きと必要書類を比較`,
    description: 'フィリピン人との国際結婚で「日本とフィリピン、どちらで先に結婚するか」を比較。手続きの流れ・必要書類・メリット・デメリットをステップ別に整理。渡航不要で進めたい方は日本先行婚が有利です。',
    canonical: `${BASE}/ja/nihon-senko-ph-senko/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/japan-first-vs-philippines-first-marriage/`,
    jaCanonical: `${BASE}/ja/nihon-senko-ph-senko/`,
    ogType: 'article',
  },
  {
    path: '/ja/gyouseishoshi-to-shorui-shuttoku/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gyouseishoshi-to-shorui-shuttoku', 'index.html'),
    title: `行政書士の仕事とフィリピン書類取得サービスの違い【${SEO_YEAR_MONTH_JA}】管轄を正確に理解する`,
    description: '国際結婚・配偶者ビザ・帰化申請で行政書士と書類取得サービスを使い分ける方法。入管申請は行政書士、フィリピン現地書類（PSA・CENOMAR・NBI）の取得は書類取得サービスの管轄です。',
    canonical: `${BASE}/ja/gyouseishoshi-to-shorui-shuttoku/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/immigration-lawyer-vs-document-service/`,
    jaCanonical: `${BASE}/ja/gyouseishoshi-to-shorui-shuttoku/`,
    ogType: 'article',
  },
  {
    path: '/ja/philippines-de-kekkon/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'philippines-de-kekkon', 'index.html'),
    title: `フィリピンで結婚する全ガイド【${SEO_YEAR_MONTH_JA}】手続きの流れ・必要書類・注意点`,
    description: 'フィリピンで婚姻を成立させる（フィリピン先行婚）の全手続きを解説。LCCMの取得・Marriage License・挙式・PSA婚姻証明書の反映待ち・日本への報告的届出まで、ステップ別にまとめました。',
    canonical: `${BASE}/ja/philippines-de-kekkon/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/getting-married-in-philippines/`,
    jaCanonical: `${BASE}/ja/philippines-de-kekkon/`,
    ogType: 'article',
  },
  {
    path: '/ja/kekkaku-shomeisho/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kekkaku-shomeisho', 'index.html'),
    title: `結核非発病証明書（TB Non-Disease Certificate）ガイド【${SEO_YEAR_MONTH_JA}】フィリピン国籍者の在留資格認定証明書申請に必須`,
    description: '2025年6月23日施行。フィリピン国籍者がCOE（在留資格認定証明書）を申請する際に必要な結核非発病証明書について、指定Panel Clinic・費用・有効期間・手続きの流れを解説します。',
    canonical: `${BASE}/ja/kekkaku-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/tb-certificate/`,
    jaCanonical: `${BASE}/ja/kekkaku-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa-shorui/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa-shorui', 'index.html'),
    title: `配偶者ビザに必要な書類チェックリスト【2026年3月版】フィリピン人配偶者の在留資格認定証明書申請`,
    description: '2025年6月23日改正対応。フィリピン人配偶者の在留資格認定証明書（COE）申請に必要な書類を最新情報で解説。結核非発病証明書の追加要件・PSA書類・CENOMARをまとめてご案内。',
    canonical: `${BASE}/ja/haigusha-visa-shorui/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/spouse-visa-document-checklist/`,
    jaCanonical: `${BASE}/ja/haigusha-visa-shorui/`,
    ogType: 'article',
  },
  {
    path: '/ja/business/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'business', 'index.html'),
    title: `法人向けフィリピン書類取得代行｜登録支援機関・行政書士・企業の方へ【${SEO_YEAR_MONTH_JA}】`,
    description: '登録支援機関・行政書士・技能実習生を雇用する企業向けのフィリピン書類取得代行。CENOMAR・PSA・NBI・DFAアポスティーユを一括手配。案件ごとの進捗報告・継続割引あり。',
    canonical: `${BASE}/ja/business/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/business/`,
  },
  {
    path: '/ja/business/touroku-shien-kikan/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'business', 'touroku-shien-kikan', 'index.html'),
    title: `登録支援機関向け フィリピン書類取得代行｜PSA・CENOMAR・DFAアポスティーユ【${SEO_YEAR_MONTH_JA}】`,
    description: '登録支援機関向けのフィリピン書類取得代行。技能実習生・特定技能外国人に必要なPSA出生証明書・NBI・DFAアポスティーユを一括手配。案件ごとの進捗報告付き。',
    canonical: `${BASE}/ja/business/touroku-shien-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/business/touroku-shien-kikan/`,
  },
  {
    path: '/ja/business/gyoseishoshi/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'business', 'gyoseishoshi', 'index.html'),
    title: `行政書士向け フィリピン書類取得代行｜国際結婚・配偶者ビザ・帰化申請対応【${SEO_YEAR_MONTH_JA}】`,
    description: '行政書士向けのフィリピン書類取得代行。国際結婚・配偶者ビザ・帰化申請に必要なCENOMAR・PSA・NBI・DFAアポスティーユを日本語で一括手配。案件ごとの進捗報告・継続割引あり。',
    canonical: `${BASE}/ja/business/gyoseishoshi/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/business/gyoseishoshi/`,
  },
  {
    path: '/ja/business/kigyou/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'business', 'kigyou', 'index.html'),
    title: `企業向け フィリピン書類取得代行｜技能実習生・特定技能外国人採用の書類を一括手配【${SEO_YEAR_MONTH_JA}】`,
    description: '技能実習生・特定技能外国人を採用する企業向けのフィリピン書類取得代行。PSA出生証明書・NBI Clearance・DFAアポスティーユをまとめて手配。倫理審査向け料金資料もご用意。',
    canonical: `${BASE}/ja/business/kigyou/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/business/kigyou/`,
  },
  {
    path: '/ja/business/menkyo-kirikae/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'business', 'menkyo-kirikae', 'index.html'),
    title: `フィリピン人従業員の日本免許切替サポート｜登録支援機関・監理団体向け【${SEO_YEAR_MONTH_JA}】`,
    description: '登録支援機関・監理団体向け。フィリピン人従業員の外免切替に必要なLTO書類（Certification・License History）＋DFAアポスティーユを代行取得。複数名一括対応・進捗報告・請求書払い。',
    canonical: `${BASE}/ja/business/menkyo-kirikae/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/business/menkyo-kirikae/`,
  },
  {
    path: '/ja/lto-koyo-kakunin/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'lto-koyo-kakunin', 'index.html'),
    title: `フィリピン人採用のLTO書類3種｜License Certification・License History・No Apprehension【${SEO_YEAR_MONTH_JA}】`,
    description: 'フィリピン人ドライバーを採用する会社向け。雇用時に押さえるLTO書類（License Certification・License History・No Apprehension Certificate）の違いと取得方法を解説。採用チェックリスト付き。',
    canonical: `${BASE}/ja/lto-koyo-kakunin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/lto-koyo-kakunin/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },

  /* ── KO canonical routes (/ko/*) ─────────────────────── */
  {
    path: '/ko/',
    outFile: path.join(projectRoot, 'dist', 'ko', 'index.html'),
    title: 'F-6 결혼비자 필리핀 서류 취득 대행 | PSA · CENOMAR · NBI · 아포스티유',
    description: 'CENOMAR(미혼증명서), PSA 출생증명서, NBI Clearance, 아포스티유 취득을 대행합니다. F-6 결혼이민비자 준비, 한국 제출용 필리핀 서류를 처음부터 끝까지 지원합니다.',
    canonical: `${BASE}/ko/`,
    lang: 'ko',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
    koCanonical: `${BASE}/ko/`,
  },
  {
    path: '/ko/pricing/',
    outFile: path.join(projectRoot, 'dist', 'ko', 'pricing', 'index.html'),
    title: '필리핀 서류 대행 요금 | PSA · CENOMAR · NBI · 아포스티유 비용 안내',
    description: 'CENOMAR, PSA 출생증명서, NBI Clearance, DFA 아포스티유 대행 요금 안내. 아포스티유 인증 + 국제 배송 포함. 추가 비용 사전 고지. 무료 견적 신청 가능.',
    canonical: `${BASE}/ko/pricing/`,
    lang: 'ko',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
    koCanonical: `${BASE}/ko/pricing/`,
  },
  {
    path: '/ko/f-6-philippines-documents/',
    outFile: path.join(projectRoot, 'dist', 'ko', 'f-6-philippines-documents', 'index.html'),
    title: 'F-6 결혼비자용 필리핀 서류 준비 | PSA · CENOMAR · NBI',
    description: 'F-6 결혼이민비자에 필요한 필리핀 측 서류（CENOMAR, PSA 출생증명서, NBI Clearance, 아포스티유）를 대행합니다. LCCM 안내도 가능. 서류 이름을 모르셔도 괜찮습니다.',
    canonical: `${BASE}/ko/f-6-philippines-documents/`,
    lang: 'ko',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
    ogType: 'article',
  },
  {
    path: '/ko/nbi-clearance/',
    outFile: path.join(projectRoot, 'dist', 'ko', 'nbi-clearance', 'index.html'),
    title: 'NBI Clearance 신청 지원 | 필리핀 범죄경력증명서 취득 서포트',
    description: 'F-6 결혼비자용 필리핀 NBI Clearance（범죄경력증명서） 취득을 서포트. 주한 필리핀 대사관 지문 등록 예약 안내, 온라인 신청, DFA 아포스티유 수배, DHL 발송까지 원스톱. 귀화 신청에도 대응.',
    canonical: `${BASE}/ko/nbi-clearance/`,
    lang: 'ko',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    koCanonical: `${BASE}/ko/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ko/contact/',
    outFile: path.join(projectRoot, 'dist', 'ko', 'contact', 'index.html'),
    title: '문의하기 | 필리핀 서류 취득 상담',
    description: '필리핀 서류 취득 대행에 관한 상담은 이메일로 접수합니다. F-6 비자, NBI Clearance, CENOMAR, 아포스티유 등 서류 이름을 모르셔도 괜찮습니다. 24시간 이내 답변.',
    canonical: `${BASE}/ko/contact/`,
    lang: 'ko',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
    koCanonical: `${BASE}/ko/contact/`,
  },
  /* ── EN pages added to prerender (previously missing) ──────────── */
  {
    path: '/en/tb-certificate/',
    outFile: path.join(projectRoot, 'dist', 'en', 'tb-certificate', 'index.html'),
    title: `TB Non-Disease Certificate for Japan Visa [${SEO_YEAR}] — Panel Clinics & Requirements`,
    description: `Required for Philippine nationals applying for Japan residence permits since June 23, 2025. Learn which Panel Clinics to use, costs, validity period, and how to fit it into your visa timeline.`,
    canonical: `${BASE}/en/tb-certificate/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/tb-certificate/`,
    jaCanonical: `${BASE}/ja/kekkaku-shomeisho/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
    noindex: true,
  },
  {
    path: '/en/spouse-visa-document-checklist/',
    outFile: path.join(projectRoot, 'dist', 'en', 'spouse-visa-document-checklist', 'index.html'),
    title: `Spouse Visa Document Checklist [${SEO_YEAR_MONTH_EN}] — Philippine National Applying for Japan`,
    description: `Updated ${SEO_YEAR_MONTH_EN}. Complete checklist of Philippine documents needed for Japan spouse visa (COE): PSA marriage cert, birth cert, CENOMAR, TB certificate (new from June 2025), and translations.`,
    canonical: `${BASE}/en/spouse-visa-document-checklist/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/spouse-visa-document-checklist/`,
    jaCanonical: `${BASE}/ja/haigusha-visa-shorui/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
    noindex: true,
  },
  {
    path: '/en/japan-first-vs-philippines-first-marriage/',
    outFile: path.join(projectRoot, 'dist', 'en', 'japan-first-vs-philippines-first-marriage', 'index.html'),
    title: `Japan-First vs Philippines-First Marriage [${SEO_YEAR}]`,
    description: `Japan-first vs Philippines-first marriage for Filipino-Japanese couples: steps, required documents, timelines, and pros and cons to help you decide.`,
    canonical: `${BASE}/en/japan-first-vs-philippines-first-marriage/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/japan-first-vs-philippines-first-marriage/`,
    jaCanonical: `${BASE}/ja/nihon-senko-ph-senko/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/getting-married-in-philippines/',
    outFile: path.join(projectRoot, 'dist', 'en', 'getting-married-in-philippines', 'index.html'),
    title: `Getting Married in the Philippines — Complete ${SEO_YEAR} Guide`,
    description: `Philippines-first marriage guide for Filipino-Japanese couples: LCCM, Marriage License, ceremony, PSA marriage certificate, and reporting to Japan.`,
    canonical: `${BASE}/en/getting-married-in-philippines/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/getting-married-in-philippines/`,
    jaCanonical: `${BASE}/ja/philippines-de-kekkon/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/dfa-apostille-cebu-report/',
    outFile: path.join(projectRoot, 'dist', 'en', 'dfa-apostille-cebu-report', 'index.html'),
    title: `DFA Apostille Office Cebu — Robinsons Galleria [${SEO_YEAR} Report]`,
    description: `On-site report for the DFA Apostille office inside Robinsons Galleria, Cebu. Appointment required since December 2024. Location, procedures, and what to expect.`,
    canonical: `${BASE}/en/dfa-apostille-cebu-report/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/dfa-apostille-cebu-report/`,
    jaCanonical: `${BASE}/ja/dfa-apostille-genchi-report/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/psa-crs-cebu-report/',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-crs-cebu-report', 'index.html'),
    title: `PSA CRS Cebu — Birth & Marriage Certificates [${SEO_YEAR} Report]`,
    description: `On-site report for the PSA CRS outlet in Cebu City (Colon Street). Appointment required since October 2025. Location, photos, and available documents.`,
    canonical: `${BASE}/en/psa-crs-cebu-report/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/psa-crs-cebu-report/`,
    jaCanonical: `${BASE}/ja/psa-crs-cebu-genchi-report/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/lto-sm-seaside-cebu-report/',
    outFile: path.join(projectRoot, 'dist', 'en', 'lto-sm-seaside-cebu-report', 'index.html'),
    title: `LTO SM Seaside Cebu — Driver's Record & License Renewal [${SEO_YEAR} Report]`,
    description: `On-site report for the LTO window inside SM Seaside City Cebu. Location, photos, and how to get a Driver's Record for Japan license conversion.`,
    canonical: `${BASE}/en/lto-sm-seaside-cebu-report/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/lto-sm-seaside-cebu-report/`,
    jaCanonical: `${BASE}/ja/lto-sm-seaside-genchi-report/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/personalized-roadmap/',
    outFile: path.join(projectRoot, 'dist', 'en', 'personalized-roadmap', 'index.html'),
    title: `Personalized Document Roadmap for Filipino-Japanese Couples [${SEO_YEAR}]`,
    description: `Custom roadmap service for Filipino-Japanese couples navigating international marriage and Japan spouse visa. We clarify the required documents, correct order, and full timeline for your situation.`,
    canonical: `${BASE}/en/personalized-roadmap/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/personalized-roadmap/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-roadmap/`,
    noindex: true,
  },
  {
    path: '/en/immigration-lawyer-vs-document-service/',
    outFile: path.join(projectRoot, 'dist', 'en', 'immigration-lawyer-vs-document-service', 'index.html'),
    title: `Administrative Scrivener vs Document Service [${SEO_YEAR}]`,
    description: `What does a Japanese 行政書士 handle vs. a Philippine document service? Find out when you need both — a guide for Filipino-Japanese couples.`,
    canonical: `${BASE}/en/immigration-lawyer-vs-document-service/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/immigration-lawyer-vs-document-service/`,
    jaCanonical: `${BASE}/ja/gyouseishoshi-to-shorui-shuttoku/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/en/personal-information-protection/',
    outFile: path.join(projectRoot, 'dist', 'en', 'personal-information-protection', 'index.html'),
    title: 'Personal Information Protection Policy — ph-document.com',
    description: 'Personal information protection policy for ph-document.com (IGRS Inc.). Covers data collection, use, third-party sharing, security, user rights, cookies, and contact information.',
    canonical: `${BASE}/en/personal-information-protection/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/personal-information-protection/`,
    jaCanonical: `${BASE}/ja/kojin-joho-hogo/`,
    noindex: true,
  },
  {
    path: '/en/f-6-philippines-documents/',
    outFile: path.join(projectRoot, 'dist', 'en', 'f-6-philippines-documents', 'index.html'),
    title: `F-6 Visa Philippine Documents — CENOMAR, PSA & NBI [${SEO_YEAR_MONTH_EN}]`,
    description: `Korean F-6 spouse visa requires CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille. LCCM guidance included. We retrieve all documents from the Philippines and ship to Seoul.`,
    canonical: `${BASE}/en/f-6-philippines-documents/`,
    lang: 'en' as const,
    enCanonical: `${BASE}/en/f-6-philippines-documents/`,
    jaCanonical: `${BASE}/ja/`,
    noindex: true,
  },

  /* ── JA pages added to prerender (previously missing) ──────────── */
  {
    path: '/ja/dfa-apostille-genchi-report/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'dfa-apostille-genchi-report', 'index.html'),
    title: 'DFAアポスティーユ現地レポート【セブ・ロビンソンズガレリア2026年】',
    description: 'フィリピンのDFAアポスティーユはセブのロビンソンズガレリア内で取得できます。現地写真で場所・専用窓口・最新ルールを解説。日本語対応の代行サービスも。',
    canonical: `${BASE}/ja/dfa-apostille-genchi-report/`,
    lang: 'ja' as const,
    enCanonical: `${BASE}/en/dfa-apostille-cebu-report/`,
    jaCanonical: `${BASE}/ja/dfa-apostille-genchi-report/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },
  {
    path: '/ja/lto-sm-seaside-genchi-report/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'lto-sm-seaside-genchi-report', 'index.html'),
    title: 'LTO SMシーサイド現地レポート【運転経歴証明書・免許更新の取得場所】',
    description: 'フィリピンのLTO（陸運局）書類はセブのSMシーサイドシティ内のLTO窓口で取得します。運転経歴証明書・免許更新の手続きをセブ在住スタッフによる現地写真でレポート。',
    canonical: `${BASE}/ja/lto-sm-seaside-genchi-report/`,
    lang: 'ja' as const,
    enCanonical: `${BASE}/en/lto-sm-seaside-cebu-report/`,
    jaCanonical: `${BASE}/ja/lto-sm-seaside-genchi-report/`,
    ogType: 'article',
    datePublished: SEO_DATE_ISO,
  },

];

// Dynamic country pages generated from countryConfig
const countryRoutes: RouteConfig[] = COUNTRY_CONFIGS.map(config => ({
  path: `/en/${config.slug}/`,
  outFile: path.join(projectRoot, 'dist', 'en', config.slug, 'index.html'),
  title: `PH Documents for ${config.name} Immigration [${SEO_YEAR_MONTH_EN}]`,
  description: `Moving to ${config.name}? We retrieve CENOMAR, PSA & NBI Clearance with ${config.authLabel} for ${config.agencyAbbr}. Ships via DHL. Free consultation.`,
  canonical: `${BASE}/en/${config.slug}/`,
  lang: 'en' as const,
  enCanonical: `${BASE}/en/${config.slug}/`,
  jaCanonical: `${BASE}/ja/`,
  ogType: 'article',
  datePublished: SEO_DATE_ISO,
}));

routes.push(...countryRoutes);

function updateHead(html: string, route: RouteConfig): string {
  let result = html;

  // Update html lang attribute
  result = result.replace(
    /<html lang="[^"]*">/,
    `<html lang="${route.lang}">`
  );

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

  // og:locale
  const ogLocale = route.lang === 'en' ? 'en_US' : route.lang === 'ko' ? 'ko_KR' : 'ja_JP';
  result = result.replace(
    /<meta property="og:locale" content="[^"]*"/,
    `<meta property="og:locale" content="${ogLocale}"`
  );

  // og:site_name
  const ogSiteName = route.lang === 'en' ? 'Philippine Document Service' : route.lang === 'ko' ? '필리핀 서류 취득 대행 센터' : 'フィリピン書類取得代行センター';
  result = result.replace(
    /<meta property="og:site_name" content="[^"]*"/,
    `<meta property="og:site_name" content="${ogSiteName}"`
  );

  // meta keywords
  const keywords = route.lang === 'en'
    ? 'Philippine document service, CENOMAR, PSA Birth Certificate, NBI Clearance, DFA Apostille, immigration documents, K-1 Visa, CR-1 Visa, Canada PR, Australia visa, UK spouse visa, DHL shipping worldwide, document retrieval'
    : route.lang === 'ko'
    ? '필리핀 서류 대행, CENOMAR 취득, PSA 출생증명서, NBI Clearance, DFA 아포스티유, F-6 비자, 결혼이민비자, 한국 제출용 필리핀 서류'
    : 'フィリピン書類取得代行,CENOMAR取得代行,PSA出生証明書代行,LTO書類代行,DFAアポスティーユ代行,独身証明書取り寄せ,日本から依頼,外免切替,国際結婚,配偶者ビザ,安心代行';
  result = result.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${keywords}"`
  );

  // noindex for pages that should not be indexed (e.g. low-value JA pages)
  if (route.noindex) {
    result = result.replace(
      /<meta name="robots" content="[^"]*"/,
      `<meta name="robots" content="noindex, follow"`
    );
  }

  // hreflang tags for multi-language pages
  const hreflangMode = getHreflangMode(route);
  if (hreflangMode !== 'none') {
    const hreflangTags: string[] = [];
    if (hreflangMode === 'ko-only') {
      hreflangTags.push(`<link rel="alternate" hreflang="ko" href="${route.canonical}" />`);
      hreflangTags.push(`<link rel="alternate" hreflang="x-default" href="${route.canonical}" />`);
    } else {
      hreflangTags.push(`<link rel="alternate" hreflang="en" href="${route.enCanonical}" />`);
      hreflangTags.push(`<link rel="alternate" hreflang="ja" href="${route.jaCanonical}" />`);
      if (route.koCanonical) {
        const currentIsHome = [`${BASE}/en/`, `${BASE}/ja/`, `${BASE}/ko/`].includes(route.canonical);
        const koIsHomeFallback = route.koCanonical === `${BASE}/ko/`;
        if (!koIsHomeFallback || currentIsHome) {
          hreflangTags.push(`<link rel="alternate" hreflang="ko" href="${route.koCanonical}" />`);
        }
      }
      hreflangTags.push(`<link rel="alternate" hreflang="x-default" href="${route.enCanonical}" />`);
    }
    const block = hreflangTags.map((t) => `    ${t}`).join('\n');
    result = result.replace('</head>', `${block}\n  </head>`);
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

  // Keep structured data aligned with the current locale and route.
  result = replaceJsonLdBlock(result, 'WebPage', buildWebPageJsonLd(route));
  result = replaceJsonLdBlock(result, 'LocalBusiness', buildLocalBusinessJsonLd(route));

  // The home page keeps a localized generic schema from index.html.
  // Deeper routes use page-specific JSON-LD from the page components.
  const isHomePage = route.path === '/en/' || route.path === '/ja/' || route.path === '/ko/';
  if (isHomePage) {
    result = replaceJsonLdBlock(result, 'BreadcrumbList', buildHomeBreadcrumbJsonLd(route));
    result = replaceJsonLdBlock(result, 'HowTo', buildHomeHowToJsonLd(route));
    result = replaceJsonLdBlock(result, 'Service', buildHomeServiceJsonLd(route));
  } else {
    result = removeJsonLdBlock(result, 'BreadcrumbList');
    result = removeJsonLdBlock(result, 'HowTo');
    result = removeJsonLdBlock(result, 'Service');
  }

  // Article schema for guide pages
  if (route.ogType === 'article') {
    result = insertJsonLdBlock(result, 'Article', buildArticleJsonLd(route));
  }

  // AboutPage schema for company pages
  if (route.isAboutPage) {
    result = insertJsonLdBlock(result, 'AboutPage', buildAboutPageJsonLd(route));
  }

  return result;
}

async function prerender() {
  const baseHtml = await readFile(distIndexPath, 'utf8');
  const failedRoutes: string[] = [];

  for (const route of routes) {
    try {
      console.log(`Prerendering ${route.path}...`);

      const appHtml = renderToString(
        React.createElement(
          StaticRouter,
          { location: route.path },
          React.createElement(
            LanguageProvider,
            null,
            React.createElement(App)
          )
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
    } catch (error) {
      console.error(`  ✗ FAILED: ${route.path} — ${error instanceof Error ? error.message : error}`);
      failedRoutes.push(route.path);
    }
  }

  const successCount = routes.length - failedRoutes.length;
  console.log(`\nPrerendered ${successCount}/${routes.length} pages.`);

  if (failedRoutes.length > 0) {
    console.error(`\nFailed pages (${failedRoutes.length}):`);
    failedRoutes.forEach(p => console.error(`  - ${p}`));
  }

  if (failedRoutes.length >= 5) {
    throw new Error(`Too many pages failed to prerender (${failedRoutes.length}/${routes.length}). Aborting build.`);
  }
}

function getSitemapPriority(routePath: string): string {
  if (routePath === '/en/' || routePath === '/ja/') return '1.0';
  if (/\/(guides|cenomar|psa-birth-certificate|nbi-clearance)\/$/.test(routePath)) return '0.9';
  if (/\/(privacy|terms)\/$/.test(routePath)) return '0.3';
  if (/\/company\/$/.test(routePath)) return '0.5';
  if (/\/contact\/$/.test(routePath)) return '0.6';
  if (/\/business\/[^/]+\/$/.test(routePath)) return '0.7';
  return '0.8';
}

function getSitemapChangefreq(routePath: string): string {
  if (routePath === '/en/' || routePath === '/ja/' || /\/guides\/$/.test(routePath)) return 'weekly';
  if (/\/(privacy|terms|company|contact)\/$/.test(routePath)) return 'yearly';
  return 'monthly';
}

async function validateBuild() {
  const missingFiles: string[] = [];
  const indexableRoutes = routes.filter(r => !r.noindex);

  for (const route of indexableRoutes) {
    if (!existsSync(route.outFile)) {
      missingFiles.push(route.path);
    }
  }

  console.log(`\nBuild validation: ${indexableRoutes.length - missingFiles.length}/${indexableRoutes.length} indexable pages have HTML files.`);

  if (missingFiles.length > 0) {
    console.error(`Missing HTML files for ${missingFiles.length} indexable routes:`);
    missingFiles.forEach(p => console.error(`  - ${p}`));
  }

  if (missingFiles.length >= 5) {
    throw new Error(`Too many indexable pages missing from dist/ (${missingFiles.length}). Aborting to prevent partial deployment.`);
  }
}

async function generateSitemap() {
  const seen = new Set<string>();
  const entries: string[] = [];

  for (const route of routes) {
    if (route.noindex) continue;
    if (seen.has(route.canonical)) continue;
    seen.add(route.canonical);

    if (!existsSync(route.outFile)) {
      console.warn(`  ⚠ Skipping sitemap entry for ${route.path} — HTML file missing`);
      continue;
    }

    const priority = getSitemapPriority(route.path);
    const changefreq = getSitemapChangefreq(route.path);

    const hreflangLines: string[] = [];
    const sitemapHreflangMode = getHreflangMode(route);
    if (sitemapHreflangMode === 'ko-only') {
      hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="ko" href="${route.canonical}"/>`);
      hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${route.canonical}"/>`);
    } else if (sitemapHreflangMode === 'multi') {
      hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${route.enCanonical}"/>`);
      hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="ja" href="${route.jaCanonical}"/>`);
      if (route.koCanonical) {
        const currentIsHome = [`${BASE}/en/`, `${BASE}/ja/`, `${BASE}/ko/`].includes(route.canonical);
        const koIsHomeFallback = route.koCanonical === `${BASE}/ko/`;
        if (!koIsHomeFallback || currentIsHome) {
          hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="ko" href="${route.koCanonical}"/>`);
        }
      }
      hreflangLines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${route.enCanonical}"/>`);
    }
    const hreflangBlock = hreflangLines.length > 0 ? `\n${hreflangLines.join('\n')}` : '';

    entries.push(`  <url>
    <loc>${route.canonical}</loc>${hreflangBlock}
    <lastmod>${SEO_DATE_ISO}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
  await writeFile(sitemapPath, xml, 'utf8');
  console.log(`\nGenerated sitemap.xml with ${entries.length} URLs.`);
}

prerender()
  .then(() => validateBuild())
  .then(() => generateSitemap())
  .catch((error) => {
    console.error('prerender failed:', error);
    process.exit(1);
  });
