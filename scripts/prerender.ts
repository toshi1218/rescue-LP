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
    title: `What is CENOMAR? PSA Certificate of No Marriage: Meaning, Requirements & How to Get It ${SEO_TITLE_BADGE_EN}`,
    description: `What is CENOMAR (Certificate of No Marriage Record)? Complete ${SEO_YEAR} guide: PSA CENOMAR meaning, requirements, how to get it for US visa, K-1, CR-1, or international marriage. Retrieval service ships worldwide.`,
    canonical: `${BASE}/en/cenomar/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-apostille', 'index.html'),
    title: `Does CENOMAR Need Apostille? ${SEO_TITLE_BADGE_EN} - US Visa, K-1, CR-1 & Marriage Use Cases | Philippine Document Service`,
    description: `Does CENOMAR need DFA Apostille for your US K-1 visa, CR-1 spousal visa, or international marriage? Clear ${SEO_YEAR} answers by use case. Retrieval service available - ships to USA.`,
    canonical: `${BASE}/en/cenomar-apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/cenomar-validity',
    outFile: path.join(projectRoot, 'dist', 'en', 'cenomar-validity', 'index.html'),
    title: `How Long Is CENOMAR Valid? ${SEO_TITLE_BADGE_EN} - 6-Month Rule for US Visa & Marriage | Philippine Document Service`,
    description: `How long is CENOMAR valid for US visa (K-1, CR-1) or marriage applications? CENOMAR has no legal expiration, but most US embassies and USCIS require it within 6 months. ${SEO_YEAR} guide.`,
    canonical: `${BASE}/en/cenomar-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-birth-certificate',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-birth-certificate', 'index.html'),
    title: `PSA Birth Certificate ${SEO_TITLE_BADGE_EN}: What It Is, Requirements & How to Get It for US Visa | Philippine Document Service`,
    description: `What is a PSA Birth Certificate and how do you get one for a US visa or immigration? Complete ${SEO_YEAR} guide: requirements, fees (PHP 365), DFA Apostille, and NO RECORD FOUND solutions. Ships to USA.`,
    canonical: `${BASE}/en/psa-birth-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance ${SEO_TITLE_BADGE_YEAR_EN}: What It Is, How to Get It & NBI HIT Guide | Philippine Document Service`,
    description: `What is NBI Clearance and how do you get it for a US visa or immigration? Complete ${SEO_YEAR} guide: requirements, cost, DFA Apostille, NBI HIT resolution, and retrieval service shipping to USA.`,
    canonical: `${BASE}/en/nbi-clearance/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-hit', 'index.html'),
    title: `What is NBI HIT (MATCH FOUND)? ${SEO_TITLE_BADGE_YEAR_EN} - Causes, How to Fix & US Visa Impact | Philippine Document Service`,
    description: `NBI HIT (MATCH FOUND) explained for US visa applicants: what it means, why it happens, how to resolve it, and how long it delays your K-1 or CR-1 visa process. Proxy service available.`,
    canonical: `${BASE}/en/nbi-hit/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille', 'index.html'),
    title: `What is DFA Apostille? ${SEO_TITLE_BADGE_EN} - Requirements, Cost & How to Get It for US Visa | Philippine Document Service`,
    description: `What is DFA Apostille and do you need it for a US visa or USCIS? Complete ${SEO_YEAR} guide: documents covered, cost (PHP 200 standard / PHP 400 express), processing time, and retrieval service.`,
    canonical: `${BASE}/en/apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-processing-time',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-processing-time', 'index.html'),
    title: `DFA Apostille Processing Time ${SEO_YEAR_MONTH_EN} - How Long Does It Take for US Visa Documents?`,
    description: `How long does DFA Apostille take for US visa documents in ${SEO_YEAR}? Standard: 10–15 business days. Express: 3–5 days. Total proxy service timeline and common delay causes explained.`,
    canonical: `${BASE}/en/apostille-processing-time/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/en/international-marriage-guide',
    outFile: path.join(projectRoot, 'dist', 'en', 'international-marriage-guide', 'index.html'),
    title: `Marrying a Filipino/Filipina ${SEO_TITLE_BADGE_YEAR_EN}: Required Documents, CENOMAR & Step-by-Step Guide | Philippine Document Service`,
    description: `How to marry a Filipino or Filipina — complete ${SEO_YEAR} guide for US citizens. Required documents (CENOMAR, PSA Birth Certificate), Philippines-first vs US-first process, USCIS requirements, cost and timeline.`,
    canonical: `${BASE}/en/international-marriage-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/spouse-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'spouse-visa-documents', 'index.html'),
    title: `Philippine Documents for Spouse Visa ${SEO_TITLE_BADGE_YEAR_EN}: CENOMAR, PSA & NBI Checklist | Philippine Document Service`,
    description: `Complete Philippine document checklist for US CR-1/IR-1 spouse visa applications in ${SEO_YEAR}. PSA Birth Certificate, CENOMAR, NBI Clearance, DFA Apostille — what you need and how to get it.`,
    canonical: `${BASE}/en/spouse-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/en/psa-marriage-certificate',
    outFile: path.join(projectRoot, 'dist', 'en', 'psa-marriage-certificate', 'index.html'),
    title: `PSA Marriage Certificate ${SEO_TITLE_BADGE_YEAR_EN}: What It Is & How to Get It for CR-1/IR-1 Visa | Philippine Document Service`,
    description: `What is a PSA Marriage Certificate and how do you get one for a US CR-1/IR-1 spousal visa NVC submission? Complete ${SEO_YEAR} guide with DFA Apostille requirements. Retrieval service ships to USA via DHL.`,
    canonical: `${BASE}/en/psa-marriage-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/en/drivers-license-conversion',
    outFile: path.join(projectRoot, 'dist', 'en', 'drivers-license-conversion', 'index.html'),
    title: `Philippine LTO Driver's License Records ${SEO_TITLE_BADGE_EN}: What They Are & How to Get Them | Philippine Document Service`,
    description: `What are Philippine LTO driver's license records and how do you get them from the US? Complete ${SEO_YEAR} guide: Driver's Record & Certification, required for US license conversion or background checks. Ships to USA.`,
    canonical: `${BASE}/en/drivers-license-conversion/`,
    lang: 'en',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/en/naturalization-guide',
    outFile: path.join(projectRoot, 'dist', 'en', 'naturalization-guide', 'index.html'),
    title: `Philippine Documents for US Naturalization ${SEO_TITLE_BADGE_YEAR_EN}: PSA Birth Certificate & NBI Guide | Philippine Document Service`,
    description: `What Philippine documents do you need for US naturalization or citizenship applications? Complete ${SEO_YEAR} guide: PSA Birth Certificate, NBI Clearance, DFA Apostille. Retrieval service ships to USA.`,
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
    title: `PSA Birth Certificate Cost ${SEO_YEAR_MONTH_EN} - How Much Does It Cost for US Visa? | Philippine Document Service`,
    description: `How much does a PSA Birth Certificate cost for a US visa application? Complete ${SEO_YEAR} breakdown: official PSA fees (~PHP 365), online ordering, proxy service pricing (from US$199), and DFA Apostille add-on.`,
    canonical: `${BASE}/en/psa-birth-certificate-cost/`,
    lang: 'en',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/en/apostille-fee',
    outFile: path.join(projectRoot, 'dist', 'en', 'apostille-fee', 'index.html'),
    title: `DFA Apostille Fee ${SEO_YEAR_MONTH_EN} - How Much Does It Cost for US Visa Documents? | Philippine Document Service`,
    description: `How much does DFA Apostille cost for US visa documents in ${SEO_YEAR}? PHP 200 standard vs PHP 400 express, proxy service pricing from US$80, and total cost estimates by document type.`,
    canonical: `${BASE}/en/apostille-fee/`,
    lang: 'en',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/en/nbi-validity',
    outFile: path.join(projectRoot, 'dist', 'en', 'nbi-validity', 'index.html'),
    title: `How Long Is NBI Clearance Valid? ${SEO_YEAR} - 1-Year Rule & US Visa Requirements | Philippine Document Service`,
    description: `How long is NBI Clearance valid for a US visa or immigration application? Officially 1 year, but most US embassies and USCIS require it within 6 months. ${SEO_YEAR} guide with use-case breakdown.`,
    canonical: `${BASE}/en/nbi-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/en/driver-record',
    outFile: path.join(projectRoot, 'dist', 'en', 'driver-record', 'index.html'),
    title: `Philippine LTO Driver's Record ${SEO_TITLE_BADGE_EN}: What It Is, What It Contains & How to Get It | Philippine Document Service`,
    description: `What is the Philippine LTO Driver's Record and how do you get it from the US? Complete ${SEO_YEAR} guide: required documents, 3–8 week processing time, DFA Apostille requirements, and retrieval service shipping to USA.`,
    canonical: `${BASE}/en/driver-record/`,
    lang: 'en',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/en/us-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'us-visa-documents', 'index.html'),
    title: `Philippine Documents for US Visa ${SEO_TITLE_BADGE_EN}: What You Need for CR-1, IR-1 & K-1 | Philippine Document Service`,
    description: `What Philippine documents do you need for a US CR-1/IR-1 or K-1 visa? Complete ${SEO_YEAR} checklist: PSA Birth Certificate, CENOMAR, NBI Clearance, and DFA Apostille — with costs and retrieval service.`,
    canonical: `${BASE}/en/us-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/us-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/k1-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'k1-visa-documents', 'index.html'),
    title: `K-1 Fiancé Visa Philippine Documents ${SEO_TITLE_BADGE_EN}: CENOMAR, PSA & NBI Checklist | Philippine Document Service`,
    description: `What Philippine documents does your Filipino fiancé(e) need for a K-1 visa? Complete ${SEO_YEAR} checklist: CENOMAR (Certificate of No Marriage), PSA Birth Certificate, and NBI Clearance with DFA Apostille. Retrieval service ships to USA.`,
    canonical: `${BASE}/en/k1-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/en/k1-visa-documents/`,
    jaCanonical: `${BASE}/ja/us-visa-documents/`,
    ogType: 'article',
  },
  {
    path: '/en/cr1-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'en', 'cr1-visa-documents', 'index.html'),
    title: `CR-1/IR-1 Spouse Visa Philippine Documents ${SEO_TITLE_BADGE_EN}: PSA, NBI & Apostille Checklist | Philippine Document Service`,
    description: `What Philippine documents does your spouse need for a CR-1/IR-1 immigrant visa NVC submission? Complete ${SEO_YEAR} checklist: PSA Marriage Certificate, NBI Clearance, DFA Apostille. Retrieval service ships to USA.`,
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
    title: `CENOMAR（独身証明書）取得方法${SEO_TITLE_BADGE_JA}費用・期間・代行｜フィリピン書類センター`,
    description: 'フィリピン独身証明書CENOMARの取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・有効期限・トラブル対処まで徹底ガイド。',
    canonical: `${BASE}/ja/cenomar/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-apostille', 'index.html'),
    title: `CENOMARにDFAアポスティーユは必要？${SEO_TITLE_BADGE_JA}用途別の結論｜フィリピン書類取得代行センター`,
    description: 'CENOMARにDFAアポスティーユ認証が必要かどうかを用途別（国際結婚LCCM・配偶者ビザ・帰化）に解説。東京フィリピン大使館の要件をもとに正確な情報を提供。',
    canonical: `${BASE}/ja/cenomar-apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: `CENOMARの有効期限は？${SEO_TITLE_BADGE_YEAR_SHORT_JA}"6ヶ月"の根拠と用途別の考え方｜フィリピン書類取得代行センター`,
    description: 'CENOMARの有効期限は発行から6ヶ月が目安。この"6ヶ月"の根拠、用途（国際結婚・配偶者ビザ・帰化）別の期限の考え方、取得タイミングの目安を解説。',
    canonical: `${BASE}/ja/cenomar-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-shomeisho', 'index.html'),
    title: `PSA出生証明書 要件・費用・取得方法${SEO_TITLE_BADGE_JA}｜フィリピン書類取得代行センター`,
    description: `PSA出生証明書の申請要件・費用・取得方法を解説。${SEO_YEAR}年最新の必要情報・PSA手数料（365ペソ）・代行費用まで。NO RECORD FOUND対処も。無料相談受付中。`,
    canonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance', 'index.html'),
    title: `NBI Clearance 取得方法${SEO_TITLE_BADGE_YEAR_JA}無犯罪証明書・NBI HIT対処｜フィリピン書類センター`,
    description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
    canonical: `${BASE}/ja/nbi-clearance/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-hit', 'index.html'),
    title: `NBI HITとは？${SEO_TITLE_BADGE_YEAR_SHORT_JA}原因・対処法・どれくらい遅れるか徹底解説｜フィリピン書類取得代行センター`,
    description: 'NBI HITの意味・原因・解決手順・追加でかかる日数を詳しく解説。NBI Clearance申請でHIT（MATCH FOUND）が出た場合の対処法と代行サービスの活用方法。',
    canonical: `${BASE}/ja/nbi-hit/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille', 'index.html'),
    title: `DFAアポスティーユ 取得方法・費用・処理期間${SEO_TITLE_BADGE_JA}｜フィリピン書類取得代行センター`,
    description: 'フィリピンDFAアポスティーユ認証の処理期間・取得方法・費用・要件を解説。CENOMAR・PSA・NBI対応。日本語サポートあり・無料見積もり受付中。',
    canonical: `${BASE}/ja/apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: `DFAアポスティーユ 処理期間${SEO_TITLE_BADGE_JA}通常・エクスプレス・代行の日数目安｜フィリピン書類取得代行センター`,
    description: `フィリピンDFAアポスティーユ認証の処理期間を${SEO_YEAR_MONTH_JA}最新情報で解説。通常・エクスプレス申請の日数目安、代行利用時のトータル期間、遅れる原因も紹介。`,
    canonical: `${BASE}/ja/apostille-shori-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/ja/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-guide', 'index.html'),
    title: `フィリピン国際結婚ガイド${SEO_TITLE_BADGE_YEAR_JA}手続き・必要書類・費用を徹底解説`,
    description: 'フィリピン人との国際結婚手続きをステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）・費用・期間まで網羅。',
    canonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa', 'index.html'),
    title: `配偶者ビザ フィリピン書類チェックリスト${SEO_TITLE_BADGE_YEAR_SHORT_JA}必要書類・取得方法`,
    description: '配偶者ビザ申請に必要なフィリピン書類を完全リスト化。PSA・CENOMAR・NBI等の取得方法・費用・注意点を解説。代行サービスで一括取得対応。',
    canonical: `${BASE}/ja/haigusha-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-kekkon-shomeisho', 'index.html'),
    title: `PSA婚姻証明書 取得方法${SEO_TITLE_BADGE_YEAR_JA}費用・期間・国際結婚・配偶者ビザ向け`,
    description: 'PSA婚姻証明書の取得方法・必要な場面・費用・期間を解説。国際結婚・配偶者ビザ申請に必要なフィリピン結婚証明書の代行取得に対応。',
    canonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gaimen-kirikae-guide', 'index.html'),
    title: `フィリピン運転免許 外免切替ガイド${SEO_TITLE_BADGE_JA}LTO書類・手続き・費用`,
    description: 'フィリピン運転免許を日本免許に切り替える手順・必要LTO書類・費用を解説。LTO書類の代行取得に対応。無料相談受付中。',
    canonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/kika-shinsei-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kika-shinsei-guide', 'index.html'),
    title: `フィリピン人 帰化申請ガイド${SEO_TITLE_BADGE_YEAR_JA}必要書類・手続きの流れ・費用`,
    description: 'フィリピン国籍の方が日本に帰化するための手続き・必要書類（PSA・NBI等）・費用・審査期間をわかりやすく解説。',
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
    title: `PSA出生証明書の費用・料金${SEO_TITLE_BADGE_JA}公式料金 vs 代行費用の比較｜フィリピン書類取得代行センター`,
    description: 'PSA出生証明書の公式取得費用（PHP 365〜/通）・代行サービス利用時の総費用（US$199〜）・DFAアポスティーユ込みの料金を解説。日本から自分で取得する場合との比較も掲載。',
    canonical: `${BASE}/ja/psa-shussei-cost/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-ryokin', 'index.html'),
    title: `DFAアポスティーユ料金${SEO_TITLE_BADGE_JA}公式費用・代行費用・エクスプレスの違い｜フィリピン書類取得代行センター`,
    description: 'フィリピンDFAアポスティーユ認証の公式料金（通常PHP 200・エクスプレスPHP 400）・代行利用時の総費用（US$80〜）・書類別の費用目安を解説。',
    canonical: `${BASE}/ja/apostille-ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-koyukigen', 'index.html'),
    title: `NBI Clearanceの有効期限は？${SEO_TITLE_BADGE_YEAR_SHORT_JA}1年ルールと用途別の注意点｜フィリピン書類取得代行センター`,
    description: 'NBI Clearanceの公式有効期限は1年。ただし配偶者ビザ・国際結婚など用途によっては6ヶ月以内が実務的な基準。帰化申請では3ヶ月以内の場合も。取得タイミングの目安を解説。',
    canonical: `${BASE}/ja/nbi-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/driver-record',
    outFile: path.join(projectRoot, 'dist', 'ja', 'driver-record', 'index.html'),
    title: `外免切替に必要なLTOドライバーズレコード（運転記録）取得ガイド${SEO_TITLE_BADGE_JA}｜フィリピン書類取得代行センター`,
    description: "フィリピンLTO発行の運転記録証明書（Driver's Record）の取得方法・必要書類・処理期間（3〜8週間）・DFAアポスティーユの要否を解説。代行取得にも対応。",
    canonical: `${BASE}/ja/driver-record/`,
    lang: 'ja',
    enCanonical: `${BASE}/en/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/ja/us-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'ja', 'us-visa-documents', 'index.html'),
    title: `米国ビザ（CR-1/IR-1・K-1）フィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】｜フィリピン書類取得代行センター`,
    description: 'CR-1/IR-1・K-1ビザ申請に必要なフィリピン書類（PSA・CENOMAR・NBI）の取得方法とDFAアポスティーユを解説。',
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
