import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';
import { LanguageProvider } from '../lib/i18n';
import {
  SEO_YEAR,
  SEO_YEAR_MONTH_JA,
  SEO_YEAR_MONTH_EN,
  SEO_TITLE_BADGE_JA,
  SEO_TITLE_BADGE_EN,
  SEO_TITLE_BADGE_YEAR_JA,
  SEO_TITLE_BADGE_YEAR_EN,
  SEO_TITLE_BADGE_YEAR_SHORT_JA,
} from '../lib/seoDate';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');

const BASE = 'https://ph-document.com';

interface RouteConfig {
  path: string;
  outFile: string;
  title: string;
  description: string;
  canonical: string;
  lang: 'en' | 'ja';
  enCanonical: string;
  jaCanonical: string;
  ogType?: string;
}

const routes: RouteConfig[] = [
  /* ── EN canonical routes (/en/*) ─────────────────────── */
  {
    path: '/en/',
    outFile: path.join(projectRoot, 'dist', 'en', 'index.html'),
    title: `Philippine Document Service | CENOMAR, PSA & NBI for US Visa, K-1 & CR-1 [${SEO_YEAR_MONTH_EN}]`,
    description: `Need Philippine documents for a US K-1 or CR-1 visa? We retrieve CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille for USCIS, NVC & US Embassy requirements. Ships to USA via DHL. Free consultation.`,
    canonical: `${BASE}/en/`,
    lang: 'en',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
  },
  {
    path: '/en/cenomar',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar', 'index.html'),
    title: `CENOMAR: What It Is & How We Get It for You [${SEO_YEAR_MONTH_EN}] — Ships Worldwide`,
    description: `Need a CENOMAR for marriage or visa? Don't struggle alone — we retrieve it from PSA with DFA Apostille and ship it to you. Free consultation available.`,
    canonical: `${BASE}/en/cenomar/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-apostille', 'index.html'),
    title: `CENOMAR Apostille [${SEO_YEAR_MONTH_EN}]: Do You Need It? We Handle It Either Way`,
    description: `Not sure if your CENOMAR needs DFA Apostille? It depends on your use case. We advise and handle retrieval with or without Apostille. Free consultation for marriage and visa applicants.`,
    canonical: `${BASE}/en/cenomar-apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-validity',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-validity', 'index.html'),
    title: `CENOMAR Validity [${SEO_YEAR_MONTH_EN}]: When to Get It for Marriage or Visa`,
    description: `CENOMAR is typically valid for 6 months. If it expires during your marriage or visa process, you'll need a new one. We time the retrieval perfectly. Free consultation.`,
    canonical: `${BASE}/en/cenomar-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-birth-certificate',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-birth-certificate', 'index.html'),
    title: `PSA Birth Certificate: We Retrieve It for You + DFA Apostille [${SEO_YEAR_MONTH_EN}]`,
    description: `Need a PSA Birth Certificate from the Philippines? We handle retrieval + DFA Apostille + shipping to your door. No trip to the Philippines needed. Free consultation.`,
    canonical: `${BASE}/en/psa-birth-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance + Apostille: We Get It for Your Visa [${SEO_YEAR_MONTH_EN}]`,
    description: `Need NBI Clearance for a spouse visa or immigration? We retrieve it with DFA Apostille and ship it to you. HIT cases handled. Free consultation for petitioners and employers.`,
    canonical: `${BASE}/en/nbi-clearance/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-hit', 'index.html'),
    title: `NBI HIT? Don't Panic — We Resolve It Fast for Your Visa [${SEO_YEAR_MONTH_EN}]`,
    description: `NBI HIT (MATCH FOUND) delaying your spouse visa or immigration? We handle HIT resolution + NBI Clearance + DFA Apostille. We've helped many petitioners meet their deadlines. Free consultation.`,
    canonical: `${BASE}/en/nbi-hit/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille', 'index.html'),
    title: `DFA Apostille Service: We Get It for You [${SEO_YEAR_MONTH_EN}] — No Trip to Philippines`,
    description: `Need a DFA Apostille but can't go to the Philippines? We handle everything — PSA, NBI, CENOMAR authentication — and ship to you. Free consultation available.`,
    canonical: `${BASE}/en/apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-processing-time',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-processing-time', 'index.html'),
    title: `DFA Apostille Processing Time [${SEO_YEAR_MONTH_EN}]: Will It Make Your Visa Deadline?`,
    description: `DFA Apostille takes 5–10 business days. Worried about your visa deadline? Our express proxy service can help you meet it. Free consultation to check your timeline.`,
    canonical: `${BASE}/en/apostille-processing-time/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/en/international-marriage-guide',
    outFile: path.join(projectRoot, 'dist', 'en', 'international-marriage-guide', 'index.html'),
    title: `Marrying a Filipino? We Get All the Documents You Need [${SEO_YEAR_MONTH_EN}]`,
    description: `Planning to marry a Filipino/Filipina? We handle all Philippine documents — CENOMAR, PSA Birth Certificate, NBI Clearance + DFA Apostille. Shipped to your door. Free consultation for US and JP petitioners.`,
    canonical: `${BASE}/en/international-marriage-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/spouse-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'spouse-visa-documents', 'index.html'),
    title: `Spouse Visa Documents: We Get Everything for You [${SEO_YEAR_MONTH_EN}] — PSA, NBI & Apostille`,
    description: `Overwhelmed by Philippine document requirements for a spouse visa? We retrieve PSA, CENOMAR, NBI + DFA Apostille and ship everything to you. Free consultation for petitioners.`,
    canonical: `${BASE}/en/spouse-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-marriage-certificate',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-marriage-certificate', 'index.html'),
    title: `PSA Marriage Certificate + Apostille: We Handle It All [${SEO_YEAR_MONTH_EN}]`,
    description: `Need a PSA Marriage Certificate for your visa or marriage registration? We retrieve it with DFA Apostille and ship it to you. No trip to the Philippines. Free consultation.`,
    canonical: `${BASE}/en/psa-marriage-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/drivers-license-conversion',
    outFile: path.join(projectRoot, 'dist', 'en', 'drivers-license-conversion', 'index.html'),
    title: `Convert Philippine License to US/Japan: LTO Documents We Get for You [${SEO_YEAR_MONTH_EN}]`,
    description: `Need Philippine LTO documents for a driver's license conversion? We handle LTO record retrieval + DFA Apostille + shipping. Ideal for employers and spouses. Free consultation.`,
    canonical: `${BASE}/en/drivers-license-conversion/`,
    lang: 'en',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/naturalization-guide',
    outFile: path.join(projectRoot, 'dist', 'en', 'naturalization-guide', 'index.html'),
    title: `Philippine Documents for Japan Naturalization [${SEO_YEAR_MONTH_EN}]: PSA & NBI Retrieval Service`,
    description: `Applying for naturalization in Japan? We retrieve PSA Birth Certificate, NBI Clearance + DFA Apostille for your application. Fast turnaround. Free consultation for applicants and their spouses.`,
    canonical: `${BASE}/en/naturalization-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/en/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/guides',
    outFile: path.join(projectRoot, 'dist', 'en', 'guides', 'index.html'),
    title: `Philippine Document Guides & FAQ ${SEO_TITLE_BADGE_YEAR_EN} | CENOMAR, NBI, PSA & Apostille Explained | Philippine Document Service`,
    description: `Complete ${SEO_YEAR} guide library for Philippine documents: What is CENOMAR? What is NBI Clearance? What is DFA Apostille? Answers for US visa, K-1, CR-1, and immigration applicants.`,
    canonical: `${BASE}/en/guides/`,
    lang: 'en',
    enCanonical: `${BASE}/en/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/en/psa-birth-certificate-cost',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-birth-certificate-cost', 'index.html'),
    title: `PSA Birth Certificate Cost [${SEO_YEAR_MONTH_EN}]: Why DIY Costs More Than You Think`,
    description: `PSA birth certificate official fee is PHP 365, but you also need DFA Apostille to use it abroad. Compare total DIY cost vs. our all-in-one service from $199. Free quote.`,
    canonical: `${BASE}/en/psa-birth-certificate-cost/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-fee',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-fee', 'index.html'),
    title: `DFA Apostille Cost [${SEO_YEAR_MONTH_EN}]: Full Pricing Including Proxy Service`,
    description: `Full cost breakdown for DFA Apostille: official fees + proxy service + international shipping. Compare CENOMAR, PSA, and NBI pricing. Free quote available.`,
    canonical: `${BASE}/en/apostille-fee/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-validity',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-validity', 'index.html'),
    title: `NBI Clearance Validity [${SEO_YEAR_MONTH_EN}]: Get It in Time for Your Visa Application`,
    description: `NBI Clearance is valid for 1 year, but spouse visa applications often require it within 6 months. Timing matters — we help you get it at the right time. Free consultation.`,
    canonical: `${BASE}/en/nbi-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/driver-record',
    outFile: path.join(projectRoot, 'dist', 'en', 'driver-record', 'index.html'),
    title: `LTO Driver's Record: We Get It for You [${SEO_YEAR_MONTH_EN}] — License Conversion & Employment`,
    description: `Need an LTO Driver's Record for license conversion or employment verification? We retrieve it with DFA Apostille and ship to you. Ideal for employers and spouses. Free consultation.`,
    canonical: `${BASE}/en/driver-record/`,
    lang: 'en',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/en/us-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'us-visa-documents', 'index.html'),
    title: `K-1 / CR-1 Visa: We Get All Philippine Documents for You [${SEO_YEAR_MONTH_EN}]`,
    description: `US petitioner for a K-1 or CR-1/IR-1 visa? We retrieve all Philippine documents — PSA, CENOMAR, NBI + DFA Apostille — and ship to your door. Free consultation for American petitioners.`,
    canonical: `${BASE}/en/us-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/k1-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'k1-visa-documents', 'index.html'),
    title: `K-1 Fiancé Visa Documents: We Handle Everything [${SEO_YEAR_MONTH_EN}] — CENOMAR, PSA & NBI`,
    description: `American petitioner for a K-1 visa? We retrieve CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille for your Filipino fiancé(e). Ships to your US address. Free consultation.`,
    canonical: `${BASE}/en/k1-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/k1-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/cr1-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'cr1-visa-documents', 'index.html'),
    title: `CR-1/IR-1 Spouse Visa Documents: We Get Them for You [${SEO_YEAR_MONTH_EN}] — NVC Ready`,
    description: `US petitioner for CR-1/IR-1 visa? We retrieve PSA Marriage Certificate, NBI Clearance + DFA Apostille for NVC submission and ship to your US address. Free consultation for American petitioners.`,
    canonical: `${BASE}/en/cr1-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cr1-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/pricing',
    outFile: path.join(projectRoot, 'dist', 'en', 'pricing', 'index.html'),
    title: `Pricing [${SEO_YEAR_MONTH_EN}]: CENOMAR, PSA & NBI Retrieval for US Visa | Philippine Document Service`,
    description: `How much does Philippine document retrieval cost for a US visa? View ${SEO_YEAR} pricing for CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille. All plans include DHL shipping to USA. Free quote.`,
    canonical: `${BASE}/en/pricing/`,
    lang: 'en',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/en/company',
    outFile: path.join(projectRoot, 'dist', 'en', 'company', 'index.html'),
    title: 'About Us | IGRS Co., Ltd. (Philippine Document Service)',
    description: 'Learn about IGRS Co., Ltd., the company behind the Philippine Document Retrieval Service. Offices in Japan and the Philippines. Japanese, English, and Tagalog support.',
    canonical: `${BASE}/en/company/`,
    lang: 'en',
    enCanonical: `${BASE}/en/company/`,
    jaCanonical: `${BASE}/ja/company/`,
  },
  {
    path: '/en/contact',
    outFile: path.join(projectRoot, 'dist', 'en', 'contact', 'index.html'),
    title: 'Contact Us | Philippine Document Service',
    description: 'Contact us for Philippine document procurement, international marriage, and spouse visa inquiries. Free consultation. We reply within 1 business day.',
    canonical: `${BASE}/en/contact/`,
    lang: 'en',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
  },
  {
    path: '/en/privacy',
    outFile: path.join(projectRoot, 'dist', 'en', 'privacy', 'index.html'),
    title: 'Privacy Policy | Philippine Document Service',
    description: 'Privacy policy of Philippine Document Service (IGRS Inc.). Explains how we collect, use, and manage your personal information.',
    canonical: `${BASE}/en/privacy/`,
    lang: 'en',
    enCanonical: `${BASE}/en/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },

  /* ── JA canonical routes (/ja/*) ─────────────────────── */
  {
    path: '/ja/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'index.html'),
    title: `フィリピン書類取得代行センター｜CENOMAR・PSA・NBI代行${SEO_TITLE_BADGE_JA}`,
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。',
    canonical: `${BASE}/ja/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
  },
  {
    path: '/ja/cenomar',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar', 'index.html'),
    title: `CENOMAR（独身証明書）代行取得【${SEO_YEAR_MONTH_JA}】日本語だけでOK｜フィリピン書類センター`,
    description: '国際結婚・配偶者ビザに必要なCENOMAR、自分で取るのは大変です。当センターなら日本語だけで依頼OK、DFAアポスティーユ付きで届きます。まずは無料相談。',
    canonical: `${BASE}/ja/cenomar/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-apostille', 'index.html'),
    title: `CENOMARのアポスティーユ【${SEO_YEAR_MONTH_JA}】必要かどうか用途別に即答＋代行取得`,
    description: 'CENOMARにアポスティーユが必要かどうか、用途（国際結婚・配偶者ビザ・帰化）によって異なります。判断に迷ったら当センターへ。アポスティーユ付き代行取得も対応。無料相談。',
    canonical: `${BASE}/ja/cenomar-apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: `CENOMARの有効期限【${SEO_YEAR_MONTH_JA}】結婚・ビザ申請に間に合う取得タイミングとは`,
    description: 'CENOMARは6ヶ月以内が目安。国際結婚・配偶者ビザの手続き中に期限切れになると再取得が必要です。当センターなら最適なタイミングで代行取得。まずは無料相談を。',
    canonical: `${BASE}/ja/cenomar-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-shomeisho', 'index.html'),
    title: `PSA出生証明書の代行取得【${SEO_YEAR_MONTH_JA}】アポスティーユ付きで届く｜フィリピン書類センター`,
    description: 'フィリピンのPSA出生証明書、自分で取り寄せても結局アポスティーユが必要です。当センターならPSA取得からDFA認証・郵送まで丸ごとお任せ。日本語対応・無料相談。',
    canonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance 代行取得【${SEO_YEAR_MONTH_JA}】配偶者ビザ・就労に必要な無犯罪証明書｜フィリピン書類センター`,
    description: '配偶者ビザや就労に必要なNBI Clearance、フィリピンに行かずに取得できます。HIT案件も対応。DFAアポスティーユ付きでお届け。日本語サポート・無料相談。',
    canonical: `${BASE}/ja/nbi-clearance/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-hit', 'index.html'),
    title: `NBI HITが出た！配偶者ビザに間に合う？プロに任せれば最短解決【${SEO_YEAR_MONTH_JA}】`,
    description: 'NBI HITが出てビザ申請に間に合うか不安な方へ。当センターがHIT解決からDFAアポスティーユまで代行。配偶者ビザ・就労ビザの締切に間に合わせます。まず無料相談を。',
    canonical: `${BASE}/ja/nbi-hit/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille', 'index.html'),
    title: `DFAアポスティーユ取得代行【${SEO_YEAR_MONTH_JA}】日本にいながら最短2週間｜フィリピン書類センター`,
    description: 'フィリピンに行かずにDFAアポスティーユを取得。PSA・NBI・CENOMAR対応、現地スタッフが代行取得し国際郵便でお届け。日本語だけで完結。まずは無料相談。',
    canonical: `${BASE}/ja/apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: `DFAアポスティーユの処理期間【${SEO_YEAR_MONTH_JA}】ビザ申請に間に合う？代行なら最短対応`,
    description: 'DFAアポスティーユの処理期間は通常5〜10営業日。ビザ申請の締切に間に合うか不安な方、当センターのエクスプレス代行なら最短対応。まずは無料相談で日程を確認。',
    canonical: `${BASE}/ja/apostille-shori-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/ja/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-guide', 'index.html'),
    title: `フィリピン人との国際結婚 必要書類を丸ごと代行【${SEO_YEAR_MONTH_JA}】CENOMAR・PSA・NBI`,
    description: 'フィリピン人との結婚手続き、書類集めが一番大変です。CENOMAR・PSA出生証明書・NBI、当センターがまとめて取得しアポスティーユ付きでお届け。日本人配偶者の方もご安心ください。',
    canonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa', 'index.html'),
    title: `配偶者ビザ申請 フィリピン書類を丸ごと代行取得【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: '配偶者ビザに必要なフィリピン書類、何が必要かわからなくても大丈夫。当センターがPSA・CENOMAR・NBI・アポスティーユをまとめて取得。日本人配偶者の方、まずは無料相談を。',
    canonical: `${BASE}/ja/haigusha-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-kekkon-shomeisho', 'index.html'),
    title: `PSA婚姻証明書の代行取得【${SEO_YEAR_MONTH_JA}】配偶者ビザ・国際結婚に｜フィリピン書類センター`,
    description: '配偶者ビザ・国際結婚に必要なPSA婚姻証明書、自分で取ってもDFAアポスティーユがないと受理されません。当センターが取得から認証まで一括代行。まずは無料相談。',
    canonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gaimen-kirikae-guide', 'index.html'),
    title: `フィリピン免許→日本免許 外免切替の書類代行【${SEO_YEAR_MONTH_JA}】LTO取得からアポスティーユまで`,
    description: 'フィリピン人従業員やご家族の運転免許切替に必要なLTO書類、自分で取るのは困難です。当センターがLTO書類取得からDFAアポスティーユまで一括代行。企業様もご相談ください。',
    canonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/kika-shinsei-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kika-shinsei-guide', 'index.html'),
    title: `フィリピン人の帰化申請 必要書類を代行取得【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: '帰化申請に必要なPSA出生証明書・NBI Clearance・DFAアポスティーユ、当センターが一括代行。法務局提出に間に合うよう迅速対応。日本人配偶者の方もご相談ください。',
    canonical: `${BASE}/ja/kika-shinsei-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/guides',
    outFile: path.join(projectRoot, 'dist', 'ja', 'guides', 'index.html'),
    title: `お役立ちガイド一覧｜CENOMAR・NBI・DFAアポスティーユのFAQ集${SEO_TITLE_BADGE_YEAR_SHORT_JA}｜フィリピン書類取得代行センター`,
    description: 'フィリピン書類取得に関するお役立ちガイドとFAQ集。CENOMAR・NBI・DFAアポスティーユ・LTOについての疑問を解決するガイドページ一覧。',
    canonical: `${BASE}/ja/guides/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/ja/psa-shussei-cost',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-cost', 'index.html'),
    title: `PSA出生証明書の費用【${SEO_YEAR_MONTH_JA}】自分で取得は損？代行が安心な理由｜フィリピン書類センター`,
    description: 'PSA出生証明書は自分で取れても、DFAアポスティーユなしでは日本で使えません。結局かかる費用と手間を比較すると代行が確実。料金・無料見積もりはこちら。',
    canonical: `${BASE}/ja/psa-shussei-cost/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-ryokin', 'index.html'),
    title: `DFAアポスティーユの料金【${SEO_YEAR_MONTH_JA}】代行費用込みの総額を公開｜フィリピン書類センター`,
    description: 'DFAアポスティーユの公式料金＋代行費用＋国際郵便の総額を公開。CENOMAR・PSA・NBI別の費用目安も掲載。見積もり無料、まずはお気軽にご相談ください。',
    canonical: `${BASE}/ja/apostille-ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-koyukigen', 'index.html'),
    title: `NBI Clearanceの有効期限【${SEO_YEAR_MONTH_JA}】ビザ申請に間に合う期限で取得するには`,
    description: 'NBI Clearanceは発行から1年有効ですが、配偶者ビザ申請では6ヶ月以内が実務的な基準。取得タイミングを間違えると再取得が必要に。当センターが最適なタイミングでご案内します。',
    canonical: `${BASE}/ja/nbi-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/driver-record',
    outFile: path.join(projectRoot, 'dist', 'ja', 'driver-record', 'index.html'),
    title: `LTOドライバーズレコード代行取得【${SEO_YEAR_MONTH_JA}】外免切替・企業採用に｜フィリピン書類センター`,
    description: '外免切替やフィリピン人採用に必要なLTOドライバーズレコード、自分では取りにくい書類です。当センターが代行取得しDFAアポスティーユ付きでお届け。企業様もご相談ください。',
    canonical: `${BASE}/ja/driver-record/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/ja/us-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'ja', 'us-visa-documents', 'index.html'),
    title: `米国ビザ（CR-1/IR-1・K-1）フィリピン書類を代行取得【${SEO_YEAR_MONTH_JA}】アポスティーユ付き`,
    description: 'K-1・CR-1/IR-1ビザに必要なPSA・CENOMAR・NBI書類、アメリカ人の申請者の方が代わりに手配できます。当センターがアポスティーユ付きで一括取得。まずは無料相談。',
    canonical: `${BASE}/ja/us-visa-documents/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/ja/ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'ryokin', 'index.html'),
    title: `料金一覧${SEO_TITLE_BADGE_JA}フィリピン書類取得代行の費用・プラン`,
    description: 'フィリピン書類取得代行の料金一覧。CENOMAR・PSA・NBI・DFAアポスティーユの費用・処理期間・プランをご案内。無料見積もり受付中。',
    canonical: `${BASE}/ja/ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/ja/company',
    outFile: path.join(projectRoot, 'dist', 'ja', 'company', 'index.html'),
    title: '会社概要｜株式会社IGRS（フィリピン書類取得代行センター）',
    description: 'フィリピン書類取得代行センターを運営する株式会社IGRSの会社概要。所在地・代表者・事業内容・特定商取引法表記をご案内。',
    canonical: `${BASE}/ja/company/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/company/`,
    jaCanonical: `${BASE}/ja/company/`,
  },
  {
    path: '/ja/contact',
    outFile: path.join(projectRoot, 'dist', 'ja', 'contact', 'index.html'),
    title: 'お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行・国際結婚・配偶者ビザに関するご相談・お問い合わせはこちらから。平日9:00〜18:00、翌営業日以内に返信します。',
    canonical: `${BASE}/ja/contact/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
  },
  {
    path: '/ja/privacy',
    outFile: path.join(projectRoot, 'dist', 'ja', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
    canonical: `${BASE}/ja/privacy/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },
];

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
  const ogLocale = route.lang === 'en' ? 'en_US' : 'ja_JP';
  result = result.replace(
    /<meta property="og:locale" content="[^"]*"/,
    `<meta property="og:locale" content="${ogLocale}"`
  );

  // og:site_name
  const ogSiteName = route.lang === 'en' ? 'Philippine Document Service' : 'フィリピン書類取得代行センター';
  result = result.replace(
    /<meta property="og:site_name" content="[^"]*"/,
    `<meta property="og:site_name" content="${ogSiteName}"`
  );

  // meta keywords
  const keywords = route.lang === 'en'
    ? 'Philippine document service, CENOMAR, PSA Birth Certificate, NBI Clearance, DFA Apostille, US Visa, K-1 Visa, CR-1 Visa, USCIS, NVC, US Embassy, DHL shipping, document retrieval'
    : 'フィリピン書類取得代行,CENOMAR取得代行,PSA出生証明書代行,LTO書類代行,DFAアポスティーユ代行,独身証明書取り寄せ,日本から依頼,外免切替,国際結婚,配偶者ビザ,最短取得';
  result = result.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${keywords}"`
  );

  // Replace all three hreflang tags at once to ensure correct bidirectional linking
  const otherLang = route.lang === 'en' ? 'ja' : 'en';
  const otherCanonical = route.lang === 'en' ? route.jaCanonical : route.enCanonical;
  const hreflangBlock = [
    `<link rel="alternate" hreflang="${route.lang}" href="${route.canonical}" />`,
    `<link rel="alternate" hreflang="${otherLang}" href="${otherCanonical}" />`,
    `<link rel="alternate" hreflang="x-default" href="${route.enCanonical}" />`,
  ].join('\n    ');

  result = result.replace(
    /<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>/,
    hreflangBlock
  );

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
  }

  console.log(`\nPrerendered ${routes.length} pages.`);
}

prerender().catch((error) => {
  console.error('prerender failed:', error);
  process.exit(1);
});
