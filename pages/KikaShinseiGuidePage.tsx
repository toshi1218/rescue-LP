import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function KikaShinseiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('フィリピン人 帰化申請ガイド【2026年最新版】必要書類・手続きの流れ・費用', 'Naturalization Guide for Filipinos in Japan [2026]'),
    t('フィリピン国籍の方が日本に帰化するための手続き・必要書類（PSA・NBI等）・費用・審査期間をわかりやすく解説。', 'Guide to Japanese naturalization for Filipino nationals. Covers required documents (PSA, NBI), procedures, fees, and processing timeline.')
  );

  const steps = [
    { step: 'STEP 1', title: t('帰化の要件を確認する', 'Check Naturalization Requirements'), desc: t('在留期間・就労・納税・素行要件などを確認します。フィリピン国籍の方は原則5年以上の継続在留が必要です。', 'Check residency period, employment, tax, and conduct requirements. Philippine nationals generally need continuous residency of 5 or more years.') },
    { step: 'STEP 2', title: t('法務局で事前相談（予約制）', 'Pre-consultation at Legal Affairs Bureau (by appointment)'), desc: t('管轄の法務局に予約を取り、担当官と必要書類の確認を行います。書類リストは個人の状況により異なります。', 'Make an appointment at your local Legal Affairs Bureau and confirm the required documents with the officer. The document list varies by individual situation.') },
    { step: 'STEP 3', title: t('フィリピン側の書類を取得する', 'Obtain Philippine Documents'), desc: t('PSA出生証明書・PSA婚姻証明書（既婚者）・NBI Clearance等、フィリピンから取り寄せる書類を準備します。', 'Prepare documents to be obtained from the Philippines, such as PSA Birth Certificate, PSA Marriage Certificate (if married), and NBI Clearance.') },
    { step: 'STEP 4', title: t('日本側の書類を準備する', 'Prepare Japanese Documents'), desc: t('住民票・納税証明書・在留カードのコピー・在勤証明書等、日本で取得する書類を揃えます。', 'Gather documents obtainable in Japan, such as resident registration, tax certificates, residence card copies, and employment certificates.') },
    { step: 'STEP 5', title: t('申請書類一式を法務局に提出', 'Submit All Documents to Legal Affairs Bureau'), desc: t('全書類が揃ったら法務局に提出します。担当官との面接も実施されます。', 'Once all documents are ready, submit them to the Legal Affairs Bureau. An interview with the officer will also be conducted.') },
    { step: 'STEP 6', title: t('審査・官報告示・帰化届', 'Review, Official Gazette Notice, and Naturalization Report'), desc: t('審査には6ヶ月〜1年以上かかります。許可の場合は官報に告示され、その後市区町村役場に帰化届を提出します。', 'The review takes 6 months to over a year. If approved, the decision is published in the Official Gazette, after which you submit the naturalization report to your local municipal office.') },
  ];

  const requiredDocs = [
    { doc: t('PSA出生証明書', 'PSA Birth Certificate'), who: t('フィリピン当局', 'Philippine Authorities'), note: t('PSA発行のもの。アポスティーユ認証が必要な場合あり', 'Issued by PSA. Apostille authentication may be required') },
    { doc: t('PSA婚姻証明書', 'PSA Marriage Certificate'), who: t('フィリピン当局', 'Philippine Authorities'), note: t('既婚者のみ。PSA発行のもの', 'Married applicants only. Issued by PSA') },
    { doc: 'NBI Clearance', who: t('フィリピン当局', 'Philippine Authorities'), note: t('発行から3〜6ヶ月以内のもの。DFAアポスティーユ推奨', 'Within 3–6 months of issue. DFA Apostille recommended') },
    { doc: t('日本語翻訳', 'Japanese Translation'), who: t('申請者（または代行）', 'Applicant (or agent)'), note: t('フィリピン書類全般に翻訳添付が必要', 'Translation required for all Philippine documents') },
    { doc: t('住民票（世帯全員）', 'Resident Registration (all household members)'), who: t('市区町村役場', 'Municipal Office'), note: t('3ヶ月以内のもの', 'Within 3 months of issue') },
    { doc: t('在留カードのコピー', 'Residence Card Copy'), who: t('申請者', 'Applicant'), note: t('表・裏両面', 'Front and back') },
    { doc: t('納税証明書', 'Tax Payment Certificate'), who: t('税務署・市区町村', 'Tax Office / Municipal Office'), note: t('過去数年分が必要', 'Required for past several years') },
    { doc: t('在勤証明書・源泉徴収票', 'Employment Certificate / Withholding Tax Statement'), who: t('勤務先', 'Employer'), note: t('自営の場合は事業証明書等', 'Self-employed: business certificate, etc.') },
  ];

  const faqs = [
    {
      q: t('帰化申請にフィリピンの書類が必要なのはなぜですか？', 'Why are Philippine documents required for naturalization applications?'),
      a: t('法務局はあなたの出生・身分関係をフィリピン政府発行の公式書類で確認する必要があります。PSA出生証明書はあなたの生年月日・親族関係を証明し、NBI Clearanceはフィリピン国内に犯罪歴がないことを証明するために求められます。', 'The Legal Affairs Bureau needs to verify your birth and personal status through official documents issued by the Philippine government. The PSA Birth Certificate proves your date of birth and family relationships, while the NBI Clearance proves you have no criminal record in the Philippines.'),
    },
    {
      q: t('フィリピンのPSA書類にアポスティーユは必要ですか？', 'Is an Apostille required for Philippine PSA documents?'),
      a: t('法務局の担当官の判断によって異なりますが、DFAアポスティーユ認証を付けておくと手続きがスムーズです。当センターではPSA書類の取得代行とアポスティーユ認証取得の代行を合わせて対応しています。', 'It depends on the Legal Affairs Bureau officer\'s judgment, but having DFA Apostille authentication makes the process smoother. Our center handles both PSA document procurement and Apostille authentication.'),
    },
    {
      q: t('NBI Clearanceの有効期限はどのくらいですか？', 'How long is an NBI Clearance valid?'),
      a: t('一般的に発行から1年ですが、法務局への提出時点で3〜6ヶ月以内のものを求められることが多いです。審査に時間がかかることを考慮し、申請直前に取得することをおすすめします。', 'Generally valid for 1 year from issuance, but the Legal Affairs Bureau often requires documents within 3–6 months. Given the time reviews take, we recommend obtaining it just before filing your application.'),
    },
    {
      q: t('帰化申請の審査にどのくらいかかりますか？', 'How long does the naturalization review take?'),
      a: t('書類提出から許可まで通常6ヶ月〜1年以上かかります。審査中に追加書類の提出を求められることもあります。書類の不備があると大幅に遅延するため、最初から完全な書類を揃えることが重要です。', 'It typically takes 6 months to over a year from document submission to approval. Additional documents may be requested during the review. Since incomplete documents cause significant delays, it\'s important to prepare a complete set from the start.'),
    },
    {
      q: t('帰化が許可されたらフィリピン国籍はどうなりますか？', 'What happens to Philippine citizenship after naturalization is approved?'),
      a: t('日本に帰化すると日本国籍を取得し、フィリピン国籍は原則として失いますが、日本の帰化法は二重国籍を認めていないため、フィリピン国籍の離脱手続きが必要になります。詳細はフィリピン大使館にお問い合わせください。', 'Upon naturalizing in Japan, you acquire Japanese citizenship and generally lose Philippine citizenship. Since Japan\'s naturalization law does not allow dual citizenship, you must renounce Philippine citizenship. Please contact the Philippine Embassy for details.'),
    },
    {
      q: t('配偶者が日本人の場合、帰化の要件は緩和されますか？', 'Are naturalization requirements relaxed if your spouse is Japanese?'),
      a: t('はい。日本人の配偶者として3年以上日本に居住している場合、通常5年の居住要件が緩和される特例があります（日本国籍法第7条）。ただし他の要件（素行・生計など）は引き続き審査されます。', 'Yes. If you have resided in Japan for 3 or more years as the spouse of a Japanese national, the usual 5-year residency requirement is relaxed under a special provision (Article 7 of the Nationality Act). However, other requirements (conduct, livelihood, etc.) still apply.'),
    },
    {
      q: t('離婚歴がある場合、PSA書類は何が必要ですか？', 'What PSA documents are needed if I have a divorce history?'),
      a: t('フィリピンには離婚制度がないため、法的に婚姻を解消しているかどうかによって必要書類が異なります。アニュルメント（婚姻無効）判決書がある場合はその認証書類も必要になります。個別の状況をもとにご相談ください。', 'Since the Philippines does not have a divorce system, the required documents differ depending on whether the marriage was legally dissolved. If there is an annulment decision, certified copies of that are also required. Please consult us based on your individual circumstances.'),
    },
    {
      q: t('子どもも同時に帰化申請できますか？', 'Can children apply for naturalization at the same time?'),
      a: t('はい。未成年の子どもを親の帰化申請に含める「随伴帰化」が可能です。子どものPSA出生証明書なども必要になります。', 'Yes. "Accompanying naturalization" is possible, which includes minor children in the parent\'s naturalization application. The child\'s PSA Birth Certificate and other documents will also be required.'),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('帰化申請ガイド', 'Naturalization Guide'), item: 'https://ph-document.com/kika-shinsei-guide/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/kika-shinsei-guide/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: t('フィリピン人の帰化申請ガイド｜必要書類・手続きの流れ・PSA・NBI取得【2026年最新】', 'Naturalization Guide for Philippine Nationals | Required Documents, Procedures, PSA & NBI [2026]'),
        description: t('フィリピン国籍の方が日本に帰化するための手続きの流れ・必要書類（PSA出生証明書・NBI Clearance等）・費用・審査期間をわかりやすく解説。', 'A comprehensive guide on the procedure, required documents (PSA Birth Certificate, NBI Clearance, etc.), costs, and review period for Philippine nationals applying for Japanese naturalization.'),
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/kika-shinsei-guide/',
        inLanguage: lang,
        datePublished: '2025-11-01',
        dateModified: '2026-02-22',
        author: {
          '@type': 'Organization',
          name: '株式会社IGRS',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: t('フィリピン書類取得代行センター', 'Philippine Document Procurement Center'),
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://www.moj.go.jp',
          'https://psa.gov.ph',
          'https://www.nbi.gov.ph',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  const tocItems = t(
    '帰化申請の主な要件,手続きの流れ（6ステップ）,必要書類チェックリスト,費用の目安,注意点・よくある失敗,よくある質問（FAQ）,お問い合わせ',
    'Main Naturalization Requirements,Procedure (6 Steps),Required Documents Checklist,Cost Estimate,Notes & Common Mistakes,FAQ,Contact'
  ).split(',');

  const requirements = [
    { icon: '🗓️', title: t('居住要件', 'Residency Requirement'), desc: t('引き続き5年以上日本に住んでいること（日本人配偶者の場合は3年）。', 'Must have continuously resided in Japan for 5 or more years (3 years if married to a Japanese national).') },
    { icon: '🔞', title: t('能力要件', 'Capacity Requirement'), desc: t('20歳以上で本国法により能力者であること。', 'Must be 20 years or older and legally competent under their home country\'s law.') },
    { icon: '✅', title: t('素行要件', 'Conduct Requirement'), desc: t('素行が善良であること（犯罪歴・交通違反歴なども確認される）。', 'Must be of good character (criminal records, traffic violations, etc. are also checked).') },
    { icon: '💰', title: t('生計要件', 'Livelihood Requirement'), desc: t('自己または配偶者その他の親族の資産・技能で生計を営めること。', 'Must be able to support oneself through personal or family assets and skills.') },
    { icon: '🏳️', title: t('国籍喪失要件', 'Nationality Renunciation Requirement'), desc: t('帰化申請中・許可後に元の国籍を離脱できること。', 'Must be able to renounce original citizenship during or after the naturalization process.') },
  ];

  const bottleneckItems = [
    { icon: '📋', title: t('PSA出生証明書を取得', 'Obtain PSA Birth Certificate'), desc: t('帰化申請の核となる書類。アポスティーユ推奨。', 'The core document for naturalization. Apostille recommended.'), link: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate') },
    { icon: '🛡️', title: t('NBI Clearanceを取得', 'Obtain NBI Clearance'), desc: t('フィリピン国内の無犯罪証明。HIT案件は早めに対応。', 'Certificate of no criminal record in the Philippines. Address HIT cases early.'), link: t('/ja/nbi-clearance', '/nbi-clearance') },
    { icon: '🔏', title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'), desc: t('PSA・NBI書類への認証付加。法務局要求時に対応。', 'Adds authentication to PSA and NBI documents. For when required by the Legal Affairs Bureau.'), link: t('/ja/apostille', '/apostille') },
  ];

  const costItems = [
    { item: t('PSA出生証明書取得代行', 'PSA Birth Certificate Procurement'), cost: t('約40,000円〜', 'From ¥40,000'), note: t('PSA手数料・国際郵便込み', 'Includes PSA fee and international postage') },
    { item: t('NBI Clearance取得代行', 'NBI Clearance Procurement'), cost: t('約45,000円〜', 'From ¥45,000'), note: t('HIT案件は追加費用あり', 'Additional fee for HIT cases') },
    { item: t('DFAアポスティーユ認証代行', 'DFA Apostille Authentication'), cost: t('約15,000円〜/通', 'From ¥15,000/doc'), note: t('PSA・NBI各書類に追加', 'Added to each PSA and NBI document') },
    { item: t('PSA婚姻証明書取得代行', 'PSA Marriage Certificate Procurement'), cost: t('約40,000円〜', 'From ¥40,000'), note: t('既婚者のみ', 'Married applicants only') },
    { item: t('日本語翻訳', 'Japanese Translation'), cost: t('約5,000〜15,000円/通', '¥5,000–¥15,000/doc'), note: t('書類の種類・量による', 'Depends on document type and volume') },
    { item: t('行政書士への帰化申請サポート', 'Administrative Scrivener Naturalization Support'), cost: t('約15〜35万円', '¥150,000–¥350,000'), note: t('当センター対象外・参考値', 'Not provided by our center — reference only') },
  ];

  const cautionItems = [
    { title: t('NBI Clearanceの取得タイミングを誤る', 'Poor Timing for Obtaining NBI Clearance'), body: t('審査中に有効期限が切れてしまい、再取得を求められるケースがあります。法務局への書類提出直前に取得するのが理想です。', 'The validity may expire during the review, requiring re-acquisition. Ideally, obtain it just before submitting documents to the Legal Affairs Bureau.') },
    { title: t('書類の名前スペルが不一致', 'Name Spelling Inconsistency Between Documents'), body: t('パスポート・PSA書類・NBI等で名前のスペルが異なると書類が認められません。全書類のスペルを事前に統一確認してください。', 'If name spellings differ between the passport, PSA documents, and NBI, documents will not be accepted. Check that the spelling is consistent across all documents in advance.') },
    { title: t('フィリピン書類の取得に時間がかかる', 'Philippine Documents Take Time to Obtain'), body: t('PSA書類・NBI Clearanceは取得まで数週間かかります。法務局に相談を開始したらすぐに取得手続きを始めましょう。', 'PSA documents and NBI Clearance can take several weeks to obtain. Start the acquisition process as soon as you begin consulting with the Legal Affairs Bureau.') },
    { title: t('翻訳が不完全', 'Incomplete Translation'), body: t('法務局に提出するフィリピン書類の翻訳は正確さが求められます。不完全な翻訳は追加資料の提出を求められる原因になります。', 'Translations of Philippine documents submitted to the Legal Affairs Bureau must be accurate. Incomplete translations often result in requests for additional materials.') },
  ];

  const relatedLinks = [
    { to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'), title: t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide'), desc: t('出生証明書の取得方法と注意点', 'How to obtain a birth certificate and key notes') },
    { to: t('/ja/nbi-clearance', '/nbi-clearance'), title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'NBI HIT issues explained and how to obtain') },
    { to: t('/ja/apostille', '/apostille'), title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'), desc: t('フィリピン書類への認証取得方法', 'How to get Apostille on Philippine documents') },
    { to: t('/ja/kokusai-kekkon-guide', '/international-marriage-guide'), title: t('国際結婚ガイド', 'International Marriage Guide'), desc: t('フィリピン人との国際結婚手続き', 'Procedures for international marriage with a Filipino') },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('帰化申請ガイド', 'Naturalization Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピン人の帰化申請 完全ガイド<br className="hidden md:block" />必要書類・手続きの流れ・PSA・NBI取得【2026年最新】</>
          ) : (
            <>Complete Guide to Naturalization for Philippine Nationals<br className="hidden md:block" />Required Documents, Procedures, PSA &amp; NBI [2026]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月22日 ｜ 株式会社IGRS', 'Last updated: February 22, 2026 | IGRS Inc.')}</p>

        {/* Lead */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          {t(
            '日本への帰化申請では、法務局に提出するフィリピン側の書類（PSA出生証明書・NBI Clearance等）の取得が最初のハードルです。このガイドでは、帰化申請の全体的な流れと、フィリピン書類の準備方法をわかりやすく解説します。',
            'When applying for naturalization in Japan, obtaining Philippine documents (PSA Birth Certificate, NBI Clearance, etc.) to submit to the Legal Affairs Bureau is the first hurdle. This guide clearly explains the overall naturalization process and how to prepare Philippine documents.'
          )}
        </div>

        {/* TOC */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {tocItems.map((item, i) => (
              <li key={i}><a href={`#ks-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ks-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. {t('帰化申請の主な要件', 'Main Naturalization Requirements')}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t('帰化申請には法務局による審査があり、以下の要件を満たす必要があります。', 'Naturalization applications are reviewed by the Legal Affairs Bureau, and the following requirements must be met.')}
          </p>
          <div className="grid gap-3">
            {requirements.map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">{t('※ 要件の詳細・例外規定は法務省の資料または法務局でご確認ください。', '※ For details on requirements and exceptions, please refer to Ministry of Justice materials or consult your local Legal Affairs Bureau.')}</p>
        </section>

        {/* Section 2 */}
        <section id="ks-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. {t('手続きの流れ（6ステップ）', 'Procedure (6 Steps)')}</h2>
          <div className="space-y-3 pl-4 border-l-2 border-gray-200">
            {steps.map((s, i) => (
              <div key={i} className="relative pl-4">
                <div className="absolute -left-[17px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-xs font-bold text-primary">{s.step}</p>
                <p className="text-sm font-bold text-secondary">{s.title}</p>
                <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philippines document callout */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 mb-10">
          <p className="text-sm font-bold text-secondary mb-3">{t('フィリピン書類の取得が最初のボトルネック', 'Obtaining Philippine Documents Is the First Bottleneck')}</p>
          <p className="text-xs text-gray-700 mb-4 leading-relaxed">
            {t('PSA出生証明書やNBI Clearanceはフィリピンから取り寄せる必要があり、取得に数週間かかります。法務局への相談と並行して早めに申請を開始することが重要です。', 'PSA Birth Certificates and NBI Clearances must be obtained from the Philippines and can take several weeks. It is important to start the application process early, in parallel with consulting the Legal Affairs Bureau.')}
          </p>
          <div className="grid gap-3">
            {bottleneckItems.map((item, i) => (
              <Link key={i} to={item.link} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors group">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 self-center group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <section id="ks-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. {t('必要書類チェックリスト', 'Required Documents Checklist')}</h2>
          <p className="text-sm text-gray-700 mb-4">{t('主な必要書類です。法務局の担当官から個別の書類リストが渡されます。', 'These are the main required documents. An individual document list will be provided by the Legal Affairs Bureau officer.')}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('取得先', 'Source')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{row.doc}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.who}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">{t('※ 書類リストは個人の状況（既婚・独身・子どもの有無等）により異なります。法務局での事前相談で確認してください。', '※ The document list varies by individual situation (married, single, children, etc.). Please confirm at the Legal Affairs Bureau pre-consultation.')}</p>
        </section>

        {/* Section 4 */}
        <section id="ks-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('費用の目安', 'Cost Estimate')}</h2>
          <div className="grid gap-3">
            {costItems.map((row, i) => (
              <div key={i} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div>
                  <p className="text-sm font-medium text-secondary">{row.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-sm font-bold text-primary ml-4 flex-shrink-0">{row.cost}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="ks-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. {t('注意点・よくある失敗', 'Notes & Common Mistakes')}</h2>
          <div className="space-y-4">
            {cautionItems.map((item, i) => (
              <div key={i} className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">{item.title}</p>
                  <p className="text-xs text-amber-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">{t('帰化申請のフィリピン書類でお困りの方へ', 'For those struggling with Philippine documents for naturalization')}</p>
          <h2 className="text-xl font-bold mb-3">{t('PSA・NBI取得はまるごとお任せください', 'Leave PSA & NBI Procurement to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {lang === 'ja' ? (
              <>PSA出生証明書・NBI Clearance・アポスティーユ認証の取得代行まで、<br />日本語だけで完結します。まずは無料相談からどうぞ。</>
            ) : (
              <>From PSA Birth Certificate, NBI Clearance, to Apostille authentication — all Philippine documents needed for naturalization in Japan,<br />handled with full English support. Start with a free consultation.</>
            )}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="ks-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. {t('よくある質問（FAQ）', 'FAQ')}</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-secondary pr-4">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連書類のガイド', 'Related Document Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">{t('PSA・NBI等のフィリピン書類取得に関するご相談はお気軽にどうぞ。', 'Feel free to contact us about obtaining Philippine documents such as PSA and NBI.')}</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【帰化申請ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kika-shinsei-guide/" />
              <div>
                <label htmlFor="ks-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="ks-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="ks-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="ks-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ks-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="ks-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('帰化申請に必要なPSA・NBI書類の取得代行についてお気軽にご相談ください。', 'Please feel free to inquire about PSA and NBI document procurement for your naturalization application.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る', 'Send directly by email')}: igrs20200601@gmail.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
