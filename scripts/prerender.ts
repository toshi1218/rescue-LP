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
  /* ── EN canonical routes ─────────────────────────────── */
  {
    path: '/',
    outFile: path.join(projectRoot, 'dist', 'index.html'),
    title: 'Philippine Document Service | CENOMAR, PSA, NBI for K-1 Visa & USCIS',
    description: 'Get your Philippine documents (CENOMAR, PSA Birth Certificate, NBI Clearance) for K-1 visa and USCIS immigration. Fast, reliable, full English support.',
    canonical: `${BASE}/`,
    lang: 'en',
    enCanonical: `${BASE}/`,
    jaCanonical: `${BASE}/ja/`,
  },
  {
    path: '/cenomar',
    outFile: path.join(projectRoot, 'dist', 'cenomar', 'index.html'),
    title: 'CENOMAR Guide [2026]: How to Get PSA Certificate of No Marriage | Philippine Document Service',
    description: 'Complete guide to obtaining your PSA CENOMAR (Certificate of No Marriage) from Japan. Self-apply, embassy, or proxy service options explained with costs and timelines.',
    canonical: `${BASE}/cenomar/`,
    lang: 'en',
    enCanonical: `${BASE}/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'cenomar-apostille', 'index.html'),
    title: 'Does CENOMAR Need DFA Apostille? [2026] Answer by Use Case | Philippine Document Service',
    description: 'Find out if your CENOMAR needs DFA Apostille for LCCM, spouse visa, or naturalization. Clear answers by use case with 2026 practical information.',
    canonical: `${BASE}/cenomar-apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/cenomar-validity',
    outFile: path.join(projectRoot, 'dist', 'cenomar-validity', 'index.html'),
    title: 'How Long Is CENOMAR Valid? The "6-Month Rule" Explained [2026] | Philippine Document Service',
    description: 'CENOMAR has no legal expiration, but most institutions require it within 6 months. Learn the basis of this rule and the ideal timing to obtain your CENOMAR.',
    canonical: `${BASE}/cenomar-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/psa-birth-certificate',
    outFile: path.join(projectRoot, 'dist', 'psa-birth-certificate', 'index.html'),
    title: 'PSA Birth Certificate [2026]: How to Get It from Japan, Cost & Requirements | Philippine Document Service',
    description: 'Complete guide to getting a PSA Birth Certificate from Japan in 2026. Requirements, cost breakdown, proxy service options, and NO RECORD FOUND solutions explained.',
    canonical: `${BASE}/psa-birth-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'nbi-clearance', 'index.html'),
    title: 'NBI Clearance [2026]: How to Get It from Japan, Cost & NBI HIT Guide | Philippine Document Service',
    description: 'Step-by-step guide to getting NBI Clearance from Japan in 2026. Learn how to handle NBI HIT, DFA Apostille requirements, and proxy service options.',
    canonical: `${BASE}/nbi-clearance/`,
    lang: 'en',
    enCanonical: `${BASE}/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'nbi-hit', 'index.html'),
    title: 'What is NBI HIT? Causes, Resolution Steps & Delay Time [2026] | Philippine Document Service',
    description: 'NBI HIT (MATCH FOUND) explained: what it means, why it happens, how to resolve it, and how much additional time to expect. Proxy service available for HIT cases.',
    canonical: `${BASE}/nbi-hit/`,
    lang: 'en',
    enCanonical: `${BASE}/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/apostille',
    outFile: path.join(projectRoot, 'dist', 'apostille', 'index.html'),
    title: 'DFA Apostille Authentication [2026]: Requirements, Cost & Processing Time | Philippine Document Service',
    description: 'Complete guide to DFA Apostille authentication in 2026. Documents covered, cost (PHP 200 standard / PHP 400 express), processing time, and proxy service.',
    canonical: `${BASE}/apostille/`,
    lang: 'en',
    enCanonical: `${BASE}/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/apostille-processing-time',
    outFile: path.join(projectRoot, 'dist', 'apostille-processing-time', 'index.html'),
    title: 'DFA Apostille Processing Time Philippines 2026 — Standard, Express & Proxy Schedule',
    description: 'Up-to-date DFA Apostille processing times for 2026: standard (10–15 business days), express (3–5 days), and total proxy service timeline. Common delay causes explained.',
    canonical: `${BASE}/apostille-processing-time/`,
    lang: 'en',
    enCanonical: `${BASE}/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/international-marriage-guide',
    outFile: path.join(projectRoot, 'dist', 'international-marriage-guide', 'index.html'),
    title: 'International Marriage with a Filipino [2026]: Step-by-Step Guide, Documents & Cost | Philippine Document Service',
    description: 'Complete guide to international marriage with a Filipino. Japan-first vs Philippines-first process, required documents (CENOMAR, PSA), cost and timeline explained.',
    canonical: `${BASE}/international-marriage-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/spouse-visa-documents',
    outFile: path.join(projectRoot, 'dist', 'spouse-visa-documents', 'index.html'),
    title: 'Spouse Visa Philippine Documents Checklist [2026] | Philippine Document Service',
    description: 'Complete Philippine document checklist for spouse visa applications. PSA, CENOMAR, NBI and other required documents explained with cost and proxy service options.',
    canonical: `${BASE}/spouse-visa-documents/`,
    lang: 'en',
    enCanonical: `${BASE}/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/psa-marriage-certificate',
    outFile: path.join(projectRoot, 'dist', 'psa-marriage-certificate', 'index.html'),
    title: 'PSA Marriage Certificate [2026]: How to Get It, Cost & Requirements | Philippine Document Service',
    description: 'How to obtain a PSA Marriage Certificate from Japan in 2026. Required for international marriage reporting and spouse visa applications. Cost and processing time explained.',
    canonical: `${BASE}/psa-marriage-certificate/`,
    lang: 'en',
    enCanonical: `${BASE}/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/drivers-license-conversion',
    outFile: path.join(projectRoot, 'dist', 'drivers-license-conversion', 'index.html'),
    title: 'Philippine License Conversion to Japanese License [2026]: LTO Documents Guide | Philippine Document Service',
    description: "Guide to converting your Philippine driver's license (gaimen kirikae) to a Japanese license. Required LTO documents, processing time, and proxy service.",
    canonical: `${BASE}/drivers-license-conversion/`,
    lang: 'en',
    enCanonical: `${BASE}/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/naturalization-guide',
    outFile: path.join(projectRoot, 'dist', 'naturalization-guide', 'index.html'),
    title: 'Naturalization in Japan for Filipinos [2026]: Required Documents & Process Guide | Philippine Document Service',
    description: 'Complete guide for Filipinos applying for Japanese naturalization. Required documents (PSA Birth Certificate, NBI Clearance), processing timeline, and practical tips.',
    canonical: `${BASE}/naturalization-guide/`,
    lang: 'en',
    enCanonical: `${BASE}/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/guides',
    outFile: path.join(projectRoot, 'dist', 'guides', 'index.html'),
    title: 'All Guides & FAQ | CENOMAR, NBI, DFA Apostille, PSA [2026] | Philippine Document Service',
    description: 'Complete list of Philippine document guides and FAQ pages for 2026. Find answers about CENOMAR, NBI Clearance, DFA Apostille, PSA certificates, spouse visa, and more.',
    canonical: `${BASE}/guides/`,
    lang: 'en',
    enCanonical: `${BASE}/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/psa-birth-certificate-cost',
    outFile: path.join(projectRoot, 'dist', 'psa-birth-certificate-cost', 'index.html'),
    title: 'PSA Birth Certificate Cost 2026 — Official Fees, Proxy Pricing & Total Estimates | Philippine Document Service',
    description: 'Complete breakdown of PSA birth certificate costs in 2026: official PSA fees (~PHP 365), online ordering, proxy service pricing (from US$199), and DFA Apostille add-on.',
    canonical: `${BASE}/psa-birth-certificate-cost/`,
    lang: 'en',
    enCanonical: `${BASE}/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/apostille-fee',
    outFile: path.join(projectRoot, 'dist', 'apostille-fee', 'index.html'),
    title: 'DFA Apostille Fee Philippines 2026 — PHP 200 Standard, PHP 400 Express & Proxy Pricing | Philippine Document Service',
    description: 'Complete DFA Apostille fee guide for 2026: PHP 200 standard vs PHP 400 express, proxy service pricing from US$80, and total cost estimates by document type.',
    canonical: `${BASE}/apostille-fee/`,
    lang: 'en',
    enCanonical: `${BASE}/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/nbi-validity',
    outFile: path.join(projectRoot, 'dist', 'nbi-validity', 'index.html'),
    title: 'NBI Clearance Validity Period 2026 — 1-Year Rule, 6-Month Practice & Use Case Guide | Philippine Document Service',
    description: 'NBI Clearance is officially valid for 1 year, but most institutions require it within 6 months. Learn requirements by use case and the ideal timing for obtaining yours.',
    canonical: `${BASE}/nbi-validity/`,
    lang: 'en',
    enCanonical: `${BASE}/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/driver-record',
    outFile: path.join(projectRoot, 'dist', 'driver-record', 'index.html'),
    title: "LTO Driver's Record for Gaimen Kirikae (Foreign License Conversion) Philippines [2026] | Philippine Document Service",
    description: "How to obtain the LTO Driver's Record for foreign license conversion in Japan. Covers required documents, 3–8 week processing time, DFA Apostille requirements, and proxy service.",
    canonical: `${BASE}/driver-record/`,
    lang: 'en',
    enCanonical: `${BASE}/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/pricing',
    outFile: path.join(projectRoot, 'dist', 'pricing', 'index.html'),
    title: '料金・プラン一覧｜フィリピン書類取得代行センター',
    description: 'CENOMAR・PSA・NBI・アポスティーユ・国際結婚パック・配偶者ビザの代行料金一覧。各プランの費用・期間・含まれるサービスを詳しく掲載。',
    canonical: `${BASE}/pricing/`,
    lang: 'en',
    enCanonical: `${BASE}/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/company',
    outFile: path.join(projectRoot, 'dist', 'company', 'index.html'),
    title: '会社概要｜株式会社IGRS｜フィリピン書類取得代行センター',
    description: '株式会社IGRSの会社概要。フィリピンへの企業進出支援・公的書類BPO専門。和歌山県和歌山市に本店、フィリピン共和国セブ市に営業所を置く。',
    canonical: `${BASE}/company/`,
    lang: 'en',
    enCanonical: `${BASE}/company/`,
    jaCanonical: `${BASE}/ja/company/`,
  },
  {
    path: '/contact',
    outFile: path.join(projectRoot, 'dist', 'contact', 'index.html'),
    title: 'お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行に関するお問い合わせ・無料相談はこちら。CENOMAR・PSA・NBI・国際結婚・配偶者ビザについて日本語でご相談いただけます。翌営業日以内に返信。',
    canonical: `${BASE}/contact/`,
    lang: 'en',
    enCanonical: `${BASE}/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
  },
  {
    path: '/privacy',
    outFile: path.join(projectRoot, 'dist', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
    canonical: `${BASE}/privacy/`,
    lang: 'en',
    enCanonical: `${BASE}/privacy/`,
    jaCanonical: `${BASE}/ja/privacy/`,
  },

  /* ── JA canonical routes ─────────────────────────────── */
  {
    path: '/ja/',
    outFile: path.join(projectRoot, 'dist', 'ja', 'index.html'),
    title: 'フィリピン書類取得代行センター｜CENOMAR・PSA・NBI代行【2026年対応】',
    description: 'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。',
    canonical: `${BASE}/ja/`,
    lang: 'ja',
    enCanonical: `${BASE}/`,
    jaCanonical: `${BASE}/ja/`,
  },
  {
    path: '/ja/cenomar',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar', 'index.html'),
    title: 'CENOMAR（独身証明書）取得方法【2026年最新版】費用・期間・代行｜フィリピン書類センター',
    description: 'フィリピン独身証明書CENOMARの取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・有効期限・トラブル対処まで徹底ガイド。',
    canonical: `${BASE}/ja/cenomar/`,
    lang: 'ja',
    enCanonical: `${BASE}/cenomar/`,
    jaCanonical: `${BASE}/ja/cenomar/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-apostille', 'index.html'),
    title: 'CENOMARにDFAアポスティーユは必要？【2026年最新】用途別の結論｜フィリピン書類取得代行センター',
    description: 'CENOMARにDFAアポスティーユ認証が必要かどうかを用途別（国際結婚LCCM・配偶者ビザ・帰化）に解説。東京フィリピン大使館の要件をもとに正確な情報を提供。',
    canonical: `${BASE}/ja/cenomar-apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/cenomar-apostille/`,
    jaCanonical: `${BASE}/ja/cenomar-apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/cenomar-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'cenomar-koyukigen', 'index.html'),
    title: 'CENOMARの有効期限は？【2026年版】"6ヶ月"の根拠と用途別の考え方｜フィリピン書類取得代行センター',
    description: 'CENOMARの有効期限は発行から6ヶ月が目安。この"6ヶ月"の根拠、用途（国際結婚・配偶者ビザ・帰化）別の期限の考え方、取得タイミングの目安を解説。',
    canonical: `${BASE}/ja/cenomar-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/cenomar-validity/`,
    jaCanonical: `${BASE}/ja/cenomar-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-shussei-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-shomeisho', 'index.html'),
    title: 'PSA出生証明書 要件・費用・取得方法【2026年最新版】｜フィリピン書類取得代行センター',
    description: 'PSA出生証明書の申請要件・費用・取得方法を解説。2026年最新の必要情報・PSA手数料（365ペソ）・代行費用まで。NO RECORD FOUND対処も。無料相談受付中。',
    canonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/psa-birth-certificate/`,
    jaCanonical: `${BASE}/ja/psa-shussei-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-clearance',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-clearance', 'index.html'),
    title: 'NBI Clearance 取得方法【2026年最新】無犯罪証明書・NBI HIT対処｜フィリピン書類センター',
    description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
    canonical: `${BASE}/ja/nbi-clearance/`,
    lang: 'ja',
    enCanonical: `${BASE}/nbi-clearance/`,
    jaCanonical: `${BASE}/ja/nbi-clearance/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-hit',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-hit', 'index.html'),
    title: 'NBI HITとは？【2026年版】原因・対処法・どれくらい遅れるか徹底解説｜フィリピン書類取得代行センター',
    description: 'NBI HITの意味・原因・解決手順・追加でかかる日数を詳しく解説。NBI Clearance申請でHIT（MATCH FOUND）が出た場合の対処法と代行サービスの活用方法。',
    canonical: `${BASE}/ja/nbi-hit/`,
    lang: 'ja',
    enCanonical: `${BASE}/nbi-hit/`,
    jaCanonical: `${BASE}/ja/nbi-hit/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille', 'index.html'),
    title: 'DFAアポスティーユ 取得方法・費用・処理期間【2026年最新】｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の処理期間・取得方法・費用・要件を解説。CENOMAR・PSA・NBI対応。日本語サポートあり・無料見積もり受付中。',
    canonical: `${BASE}/ja/apostille/`,
    lang: 'ja',
    enCanonical: `${BASE}/apostille/`,
    jaCanonical: `${BASE}/ja/apostille/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-shori-kikan',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-shori-kikan', 'index.html'),
    title: 'DFAアポスティーユ 処理期間【2026年最新】通常・エクスプレス・代行の日数目安｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の処理期間を2026年最新情報で解説。通常・エクスプレス申請の日数目安、代行利用時のトータル期間、遅れる原因も紹介。',
    canonical: `${BASE}/ja/apostille-shori-kikan/`,
    lang: 'ja',
    enCanonical: `${BASE}/apostille-processing-time/`,
    jaCanonical: `${BASE}/ja/apostille-shori-kikan/`,
    ogType: 'article',
  },
  {
    path: '/ja/kokusai-kekkon-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kokusai-kekkon-guide', 'index.html'),
    title: 'フィリピン国際結婚ガイド【2026年最新版】手続き・必要書類・費用を徹底解説',
    description: 'フィリピン人との国際結婚手続きをステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）・費用・期間まで網羅。',
    canonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/international-marriage-guide/`,
    jaCanonical: `${BASE}/ja/kokusai-kekkon-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/haigusha-visa',
    outFile: path.join(projectRoot, 'dist', 'ja', 'haigusha-visa', 'index.html'),
    title: '配偶者ビザ フィリピン書類チェックリスト【2026年版】必要書類・取得方法',
    description: '配偶者ビザ申請に必要なフィリピン書類を完全リスト化。PSA・CENOMAR・NBI等の取得方法・費用・注意点を解説。代行サービスで一括取得対応。',
    canonical: `${BASE}/ja/haigusha-visa/`,
    lang: 'ja',
    enCanonical: `${BASE}/spouse-visa-documents/`,
    jaCanonical: `${BASE}/ja/haigusha-visa/`,
    ogType: 'article',
  },
  {
    path: '/ja/psa-kekkon-shomeisho',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-kekkon-shomeisho', 'index.html'),
    title: 'PSA婚姻証明書 取得方法【2026年最新版】費用・期間・国際結婚・配偶者ビザ向け',
    description: 'PSA婚姻証明書の取得方法・必要な場面・費用・期間を解説。国際結婚・配偶者ビザ申請に必要なフィリピン結婚証明書の代行取得に対応。',
    canonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    lang: 'ja',
    enCanonical: `${BASE}/psa-marriage-certificate/`,
    jaCanonical: `${BASE}/ja/psa-kekkon-shomeisho/`,
    ogType: 'article',
  },
  {
    path: '/ja/gaimen-kirikae-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'gaimen-kirikae-guide', 'index.html'),
    title: 'フィリピン運転免許 外免切替ガイド【2026年最新】LTO書類・手続き・費用',
    description: 'フィリピン運転免許を日本免許に切り替える手順・必要LTO書類・費用を解説。LTO書類の代行取得に対応。無料相談受付中。',
    canonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/drivers-license-conversion/`,
    jaCanonical: `${BASE}/ja/gaimen-kirikae-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/kika-shinsei-guide',
    outFile: path.join(projectRoot, 'dist', 'ja', 'kika-shinsei-guide', 'index.html'),
    title: 'フィリピン人 帰化申請ガイド【2026年最新版】必要書類・手続きの流れ・費用',
    description: 'フィリピン国籍の方が日本に帰化するための手続き・必要書類（PSA・NBI等）・費用・審査期間をわかりやすく解説。',
    canonical: `${BASE}/ja/kika-shinsei-guide/`,
    lang: 'ja',
    enCanonical: `${BASE}/naturalization-guide/`,
    jaCanonical: `${BASE}/ja/kika-shinsei-guide/`,
    ogType: 'article',
  },
  {
    path: '/ja/guides',
    outFile: path.join(projectRoot, 'dist', 'ja', 'guides', 'index.html'),
    title: 'お役立ちガイド一覧｜CENOMAR・NBI・DFAアポスティーユのFAQ集【2026年】｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得に関するお役立ちガイドとFAQ集。CENOMAR・NBI・DFAアポスティーユ・LTOについての疑問を解決するガイドページ一覧。',
    canonical: `${BASE}/ja/guides/`,
    lang: 'ja',
    enCanonical: `${BASE}/guides/`,
    jaCanonical: `${BASE}/ja/guides/`,
  },
  {
    path: '/ja/psa-shussei-cost',
    outFile: path.join(projectRoot, 'dist', 'ja', 'psa-shussei-cost', 'index.html'),
    title: 'PSA出生証明書の費用・料金【2026年最新】公式料金 vs 代行費用の比較｜フィリピン書類取得代行センター',
    description: 'PSA出生証明書の公式取得費用（PHP 365〜/通）・代行サービス利用時の総費用（US$199〜）・DFAアポスティーユ込みの料金を解説。日本から自分で取得する場合との比較も掲載。',
    canonical: `${BASE}/ja/psa-shussei-cost/`,
    lang: 'ja',
    enCanonical: `${BASE}/psa-birth-certificate-cost/`,
    jaCanonical: `${BASE}/ja/psa-shussei-cost/`,
    ogType: 'article',
  },
  {
    path: '/ja/apostille-ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'apostille-ryokin', 'index.html'),
    title: 'DFAアポスティーユ料金【2026年最新】公式費用・代行費用・エクスプレスの違い｜フィリピン書類取得代行センター',
    description: 'フィリピンDFAアポスティーユ認証の公式料金（通常PHP 200・エクスプレスPHP 400）・代行利用時の総費用（US$80〜）・書類別の費用目安を解説。',
    canonical: `${BASE}/ja/apostille-ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/apostille-fee/`,
    jaCanonical: `${BASE}/ja/apostille-ryokin/`,
    ogType: 'article',
  },
  {
    path: '/ja/nbi-koyukigen',
    outFile: path.join(projectRoot, 'dist', 'ja', 'nbi-koyukigen', 'index.html'),
    title: 'NBI Clearanceの有効期限は？【2026年版】1年ルールと用途別の注意点｜フィリピン書類取得代行センター',
    description: 'NBI Clearanceの公式有効期限は1年。ただし配偶者ビザ・国際結婚など用途によっては6ヶ月以内が実務的な基準。帰化申請では3ヶ月以内の場合も。取得タイミングの目安を解説。',
    canonical: `${BASE}/ja/nbi-koyukigen/`,
    lang: 'ja',
    enCanonical: `${BASE}/nbi-validity/`,
    jaCanonical: `${BASE}/ja/nbi-koyukigen/`,
    ogType: 'article',
  },
  {
    path: '/ja/driver-record',
    outFile: path.join(projectRoot, 'dist', 'ja', 'driver-record', 'index.html'),
    title: '外免切替に必要なLTOドライバーズレコード（運転記録）取得ガイド【2026年】｜フィリピン書類取得代行センター',
    description: "フィリピンLTO発行の運転記録証明書（Driver's Record）の取得方法・必要書類・処理期間（3〜8週間）・DFAアポスティーユの要否を解説。代行取得にも対応。",
    canonical: `${BASE}/ja/driver-record/`,
    lang: 'ja',
    enCanonical: `${BASE}/driver-record/`,
    jaCanonical: `${BASE}/ja/driver-record/`,
    ogType: 'article',
  },
  {
    path: '/ja/ryokin',
    outFile: path.join(projectRoot, 'dist', 'ja', 'ryokin', 'index.html'),
    title: '料金一覧【2026年最新版】フィリピン書類取得代行の費用・プラン',
    description: 'フィリピン書類取得代行の料金一覧。CENOMAR・PSA・NBI・DFAアポスティーユの費用・処理期間・プランをご案内。無料見積もり受付中。',
    canonical: `${BASE}/ja/ryokin/`,
    lang: 'ja',
    enCanonical: `${BASE}/pricing/`,
    jaCanonical: `${BASE}/ja/ryokin/`,
  },
  {
    path: '/ja/company',
    outFile: path.join(projectRoot, 'dist', 'ja', 'company', 'index.html'),
    title: '会社概要｜株式会社IGRS（フィリピン書類取得代行センター）',
    description: 'フィリピン書類取得代行センターを運営する株式会社IGRSの会社概要。所在地・代表者・事業内容・特定商取引法表記をご案内。',
    canonical: `${BASE}/ja/company/`,
    lang: 'ja',
    enCanonical: `${BASE}/company/`,
    jaCanonical: `${BASE}/ja/company/`,
  },
  {
    path: '/ja/contact',
    outFile: path.join(projectRoot, 'dist', 'ja', 'contact', 'index.html'),
    title: 'お問い合わせ｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行・国際結婚・配偶者ビザに関するご相談・お問い合わせはこちらから。平日9:00〜18:00、翌営業日以内に返信します。',
    canonical: `${BASE}/ja/contact/`,
    lang: 'ja',
    enCanonical: `${BASE}/contact/`,
    jaCanonical: `${BASE}/ja/contact/`,
  },
  {
    path: '/ja/privacy',
    outFile: path.join(projectRoot, 'dist', 'ja', 'privacy', 'index.html'),
    title: 'プライバシーポリシー｜フィリピン書類取得代行センター',
    description: 'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
    canonical: `${BASE}/ja/privacy/`,
    lang: 'ja',
    enCanonical: `${BASE}/privacy/`,
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
