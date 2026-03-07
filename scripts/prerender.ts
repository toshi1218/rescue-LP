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
    title: `Philippine Document Service | CENOMAR, PSA, NBI & Apostille — Shipped Worldwide [${SEO_YEAR_MONTH_EN}]`,
    description: `Need Philippine documents for immigration or visa? We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille for applicants in the USA, Canada, Australia, UK, Japan & more. Ships via DHL. Free consultation.`,
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
    title: `Philippine License Conversion: LTO Documents We Get for You [${SEO_YEAR_MONTH_EN}]`,
    description: `Converting a Philippine driver's license? We retrieve the LTO Driver's Record with DFA Apostille and ship it to your address worldwide via DHL. Bulk orders for employers welcome. Free consultation.`,
    canonical: `${BASE}/en/drivers-license-conversion/`,
    lang: 'en',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/naturalization-guide',
    outFile: path.join(projectRoot, 'dist', 'en', 'naturalization-guide', 'index.html'),
    title: `Philippine Documents for Citizenship & Naturalization [${SEO_YEAR_MONTH_EN}]: PSA & NBI — Shipped Worldwide`,
    description: `Applying for citizenship or naturalization and need Philippine civil documents? We retrieve PSA Birth Certificate, NBI Clearance + DFA Apostille and ship to your address worldwide via DHL. Free consultation.`,
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
    path: '/en/canada',
    outFile: path.join(projectRoot, 'dist', 'en', 'canada', 'index.html'),
    title: `Philippine Documents for Canada Immigration [${SEO_YEAR_MONTH_EN}] — IRCC-Ready, Ships via DHL`,
    description: `Applying for Canada PR or spousal sponsorship? We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille for IRCC. Ships to Canada via DHL. Free consultation.`,
    canonical: `${BASE}/en/canada/`,
    lang: 'en',
    enCanonical: `${BASE}/en/canada/`,
    jaCanonical: `${BASE}/ja/canada/`,
    ogType: 'article',
  },
  {
    path: '/ja/canada',
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
    path: '/en/australia',
    outFile: path.join(projectRoot, 'dist', 'en', 'australia', 'index.html'),
    title: `Philippine Documents for Australia Immigration [${SEO_YEAR_MONTH_EN}] — Home Affairs-Ready, Ships via DHL`,
    description: `Applying for an Australian partner visa or PR? We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille for Home Affairs. Ships to Australia via DHL. Free consultation.`,
    canonical: `${BASE}/en/australia/`,
    lang: 'en',
    enCanonical: `${BASE}/en/australia/`,
    jaCanonical: `${BASE}/ja/australia/`,
    ogType: 'article',
  },
  {
    path: '/ja/australia',
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
    path: '/en/uk',
    outFile: path.join(projectRoot, 'dist', 'en', 'uk', 'index.html'),
    title: `Philippine Documents for UK Immigration [${SEO_YEAR_MONTH_EN}] — UKVI-Ready, Ships via DHL`,
    description: `Applying for a UK spouse visa or settlement? We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille for UKVI. Ships to the UK via DHL. Free consultation.`,
    canonical: `${BASE}/en/uk/`,
    lang: 'en',
    enCanonical: `${BASE}/en/uk/`,
    jaCanonical: `${BASE}/ja/uk/`,
    ogType: 'article',
  },
  {
    path: '/ja/uk',
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
    path: '/en/pricing',
    outFile: path.join(projectRoot, 'dist', 'en', 'pricing', 'index.html'),
    title: `Pricing [${SEO_YEAR_MONTH_EN}]: CENOMAR, PSA & NBI Retrieval for Immigration Worldwide | Philippine Document Service`,
    description: `How much does Philippine document retrieval cost? View ${SEO_YEAR} pricing for CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille. All plans include DHL Express worldwide shipping. Free quote.`,
    canonical: `${BASE}/en/pricing/`,
    lang: 'en',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/en/company',
    outFile: path.join(projectRoot, 'dist', 'en', 'company', 'index.html'),
    title: 'About Us | IGRS Inc. — Philippine Document Retrieval Service',
    description: 'IGRS Inc. is a document retrieval agency with an operations office in Cebu, Philippines. We retrieve PSA, NBI, LTO, and DFA Apostille documents for US visa and immigration applicants. English support.',
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
    title: `フィリピン書類、日本語だけで確実に取り寄せできます｜CENOMAR・PSA・NBI代行${SEO_TITLE_BADGE_JA}`,
    description: 'CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユを日本語だけで安心代行。フィリピン渡航不要。進捗は随時ご報告。国際結婚・配偶者ビザ・帰化申請に対応。無料相談受付中。',
    canonical: `${BASE}/ja/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/`,
    jaCanonical: `${BASE}/ja/`,
  },
  {
    path: '/ja/cenomar',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar', 'index.html'),
    title: `CENOMAR（独身証明書）日本語だけで取り寄せ可能【${SEO_YEAR_MONTH_JA}】アポスティーユ付き・約1ヶ月〜`,
    description: 'CENOMARはフィリピンに行かずに取得できます。現地スタッフがPSA申請・DFAアポスティーユを代行し、日本のご住所へ郵送。国際結婚・配偶者ビザ・帰化申請に対応。24時間以内に返信。',
    canonical: `${BASE}/ja/cenomar/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-apostille',
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
    path: '/ja/cenomar-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: `CENOMARの有効期限【${SEO_YEAR_MONTH_JA}】期限切れになる前に、最適タイミングで代行取得`,
    description: 'CENOMARは多くの提出先で発行から6ヶ月以内が求められます。提出予定日から逆算して最適なタイミングで取得。期限切れで再取得になるリスクをなくします。無料相談で日程確認。',
    canonical: `${BASE}/ja/cenomar-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-shomeisho', 'index.html'),
    title: `PSA出生証明書、日本語だけで取り寄せ可能【${SEO_YEAR_MONTH_JA}】アポスティーユ付き・約1ヶ月〜`,
    description: 'PSA出生証明書はフィリピンに行かずに取得できます。現地スタッフがPSA申請・DFAアポスティーユを代行し、紙の原本で日本へ郵送。国際結婚・配偶者ビザ・帰化申請に対応。無料相談。',
    canonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance（無犯罪証明書）日本語だけで取り寄せ可能【${SEO_YEAR_MONTH_JA}】HIT対応あり`,
    description: 'NBI Clearanceはフィリピンに行かずに取得できます。現地スタッフが指紋採取・申請を代行。HIT（同名者あり）が出た場合も対応。DFAアポスティーユ付きで日本へ郵送。無料相談。',
    canonical: `${BASE}/ja/nbi-clearance/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit',
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
    path: '/ja/apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille', 'index.html'),
    title: `DFAアポスティーユ、フィリピンに行かずに取得できます【${SEO_YEAR_MONTH_JA}】書類取得から一括代行`,
    description: 'DFAアポスティーユはフィリピン現地での手続きが必要ですが、当センターが代行します。PSA・CENOMAR・NBI等の書類取得と同時依頼OK。紙の原本で日本へ郵送。無料相談。',
    canonical: `${BASE}/ja/apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: `DFAアポスティーユの処理期間【${SEO_YEAR_MONTH_JA}】提出期限に合わせて代行手配します`,
    description: 'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請可能。提出予定日から逆算して最適なスケジュールをご案内。期限に間に合うか無料相談で確認できます。',
    canonical: `${BASE}/ja/apostille-shori-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/ja/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-guide', 'index.html'),
    title: `フィリピン人との国際結婚、書類を一括で取り寄せできます【${SEO_YEAR_MONTH_JA}】CENOMAR・PSA・NBI`,
    description: 'CENOMAR・PSA出生証明書・DFAアポスティーユを日本語だけで一括代行。日本先行婚・フィリピン先行婚どちらにも対応。婚姻届から配偶者ビザまで必要書類を一式ご案内。無料相談。',
    canonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa', 'index.html'),
    title: `配偶者ビザのフィリピン書類、日本語だけで取り寄せできます【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: '入管が求める「紙の原本＋DFAアポスティーユ」形式でPSA婚姻証明書・出生証明書・CENOMARを代行取得。新規申請・更新・変更に対応。有効期限に合わせた取得タイミングもアドバイス。無料相談。',
    canonical: `${BASE}/ja/haigusha-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-kekkon-shomeisho', 'index.html'),
    title: `PSA婚姻証明書、日本語だけで取り寄せ可能【${SEO_YEAR_MONTH_JA}】アポスティーユ付き・約1ヶ月〜`,
    description: 'PSA婚姻証明書はフィリピンに行かずに取得できます。現地スタッフがPSA申請・DFAアポスティーユを代行し、紙の原本で日本へ郵送。注釈付き（Annotated）にも対応。無料相談。',
    canonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gaimen-kirikae-guide', 'index.html'),
    title: `外免切替のLTO書類、日本語だけで取り寄せできます【${SEO_YEAR_MONTH_JA}】試験場の予約日に合わせて手配`,
    description: 'フィリピン免許→日本免許の外免切替に必要なLTO書類を代行取得。試験場の予約日から逆算してスケジュール調整。複数名分のまとめ依頼にも対応。企業様もご相談ください。無料相談。',
    canonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/kika-shinsei-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kika-shinsei-guide', 'index.html'),
    title: `帰化申請のフィリピン書類、日本語だけで取り寄せできます【${SEO_YEAR_MONTH_JA}】PSA・NBI・アポスティーユ`,
    description: 'PSA出生証明書・NBI Clearance・DFAアポスティーユを一括代行。法務局の要件に合わせた形式で手配。司法書士・行政書士の先生からのご依頼も対応。無料相談で必要書類を確認。',
    canonical: `${BASE}/ja/kika-shinsei-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/guides',
    outFile: path.join(projectRoot, 'dist', 'ja', 'guides', 'index.html'),
    title: `フィリピン書類ガイド一覧${SEO_TITLE_BADGE_YEAR_SHORT_JA}｜CENOMAR・NBI・DFAアポスティーユ・LTO`,
    description: 'CENOMAR・NBI Clearance・DFAアポスティーユ・LTO書類の取得代行サービス一覧。国際結婚・配偶者ビザ・帰化申請・外免切替に必要な書類を日本語だけで取り寄せ。',
    canonical: `${BASE}/ja/guides/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/ja/psa-shussei-cost',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-cost', 'index.html'),
    title: `PSA出生証明書の費用【${SEO_YEAR_MONTH_JA}】コミコミ料金で後から追加請求なし`,
    description: 'PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金。他社の「1通○○円〜」はアポスティーユ・郵送が別途加算されることが多い。総額で比較してください。無料見積もり。',
    canonical: `${BASE}/ja/psa-shussei-cost/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-ryokin', 'index.html'),
    title: `DFAアポスティーユの料金【${SEO_YEAR_MONTH_JA}】コミコミ料金で後から追加請求なし`,
    description: 'DFAアポスティーユ・PSA取得・国際郵送をまとめたコミコミ料金。後から追加請求なし。CENOMAR・PSA・NBI別の費用目安も確認できます。無料見積もり受付中。',
    canonical: `${BASE}/ja/apostille-ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-koyukigen', 'index.html'),
    title: `NBI Clearanceの有効期限【${SEO_YEAR_MONTH_JA}】期限切れになる前に、最適タイミングで代行取得`,
    description: 'NBI Clearanceは発行から1年有効ですが、提出先によっては6ヶ月以内を求める場合も。提出予定日から逆算して最適なタイミングで取得。期限切れで再取得になるリスクをなくします。無料相談。',
    canonical: `${BASE}/ja/nbi-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/driver-record',
    outFile: path.join(projectRoot, 'dist', 'ja', 'driver-record', 'index.html'),
    title: `LTOドライバーズレコード、日本語だけで取り寄せできます【${SEO_YEAR_MONTH_JA}】外免切替・企業採用に`,
    description: 'LTOドライバーズレコードはフィリピンに行かずに取得できます。現地スタッフがLTO申請を代行し、DFAアポスティーユ付きで日本へ郵送。複数名分のまとめ依頼にも対応。無料相談。',
    canonical: `${BASE}/ja/driver-record/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/ja/us-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'ja', 'us-visa-documents', 'index.html'),
    title: `米国ビザ（K-1・CR-1・IR-1）のフィリピン書類、日本語だけで取り寄せできます【${SEO_YEAR_MONTH_JA}】`,
    description: 'CENOMAR・PSA出生証明書・婚姻証明書・NBI ClearanceをDFAアポスティーユ付きで一括代行。USCIS・NVC提出に対応。英語の書類も当センターが確認・手配。無料相談。',
    canonical: `${BASE}/ja/us-visa-documents/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/ja/ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'ryokin', 'index.html'),
    title: `料金一覧${SEO_TITLE_BADGE_JA}コミコミ料金・追加請求なし｜フィリピン書類取得代行`,
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユの代行料金一覧。PSA取得・アポスティーユ・国際郵送をまとめたコミコミ料金。後から追加請求なし。無料見積もり受付中。',
    canonical: `${BASE}/ja/ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/ja/company',
    outFile: path.join(projectRoot, 'dist', 'ja', 'company', 'index.html'),
    title: '会社概要｜IGRS Inc.（フィリピン書類取得代行センター）',
    description: 'フィリピン書類取得代行センターを運営するIGRS Inc.の会社概要。和歌山県和歌山市（本店）・フィリピン共和国セブ市（営業所）。日本語・英語対応。',
    canonical: `${BASE}/ja/company/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/company/`,
    jaCanonical: `${BASE}/ja/company/`,
  },
  {
    path: '/ja/contact',
    outFile: path.join(projectRoot, 'dist', 'ja', 'contact', 'index.html'),
    title: '無料相談・お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行・国際結婚・配偶者ビザ・帰化申請・外免切替に関するご相談はこちら。24時間以内に返信します。まずはお気軽にご相談ください。',
    canonical: `${BASE}/ja/contact/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
  },
  {
    path: '/ja/privacy',
    outFile: path.join(projectRoot, 'dist', 'ja', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター（IGRS Inc.）',
    description: 'フィリピン書類取得代行センター（IGRS Inc.）のプライバシーポリシー。個人情報の収集・利用目的・第三者提供・安全管理についてご説明します。',
    canonical: `${BASE}/ja/privacy/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },
  {
    path: '/en/terms',
    outFile: path.join(projectRoot, 'dist', 'en', 'terms', 'index.html'),
    title: 'Terms of Service | Philippine Document Service',
    description: 'Terms of service for Philippine Document Service (IGRS Inc.). Covers service scope, ordering, processing times, cancellations, and governing law.',
    canonical: `${BASE}/en/terms/`,
    lang: 'en',
    enCanonical: `${BASE}/en/terms/`,
    jaCanonical: `${BASE}/ja/terms/`,
  },
  {
    path: '/ja/terms',
    outFile: path.join(projectRoot, 'dist', 'ja', 'terms', 'index.html'),
    title: '利用規約｜フィリピン書類取得代行センター（IGRS Inc.）',
    description: 'フィリピン書類取得代行センター（IGRS Inc.）の利用規約。サービス内容・料金・キャンセルポリシー・免責事項・準拠法についてご説明します。',
    canonical: `${BASE}/ja/terms/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/terms/`,
    jaCanonical: `${BASE}/ja/terms/`,
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
    ? 'Philippine document service, CENOMAR, PSA Birth Certificate, NBI Clearance, DFA Apostille, immigration documents, K-1 Visa, CR-1 Visa, Canada PR, Australia visa, UK spouse visa, DHL shipping worldwide, document retrieval'
    : 'フィリピン書類取得代行,CENOMAR取得代行,PSA出生証明書代行,LTO書類代行,DFAアポスティーユ代行,独身証明書取り寄せ,日本から依頼,外免切替,国際結婚,配偶者ビザ,安心代行';
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

  // For non-home pages, remove the generic BreadcrumbList and HowTo JSON-LD
  // that are embedded in index.html (they are only relevant for the homepage).
  // The page-specific BreadcrumbList is generated by PageLayout component.
  const isHomePage = route.path === '/en/' || route.path === '/ja/';
  if (!isHomePage) {
    // Remove the static BreadcrumbList JSON-LD block from index.html
    result = result.replace(
      /\s*<!-- JSON-LD: BreadcrumbList -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      ''
    );
    // Remove the static HowTo JSON-LD block from index.html
    result = result.replace(
      /\s*<!-- JSON-LD: HowTo -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      ''
    );
    // Remove the static Service JSON-LD block (page-specific ones are in components)
    result = result.replace(
      /\s*<!-- JSON-LD: Service -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      ''
    );
    // Update WebPage URL to match the current page
    result = result.replace(
      /"url":\s*"https:\/\/ph-document\.com\/en\/"/,
      `"url": "${route.canonical}"`
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
