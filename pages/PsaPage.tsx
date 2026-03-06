import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { trackEvent } from '../lib/analytics';
import { PsaBirthCertSample } from '../components/DocumentSampleImage';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function PsaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`PSA出生証明書 要件・費用・取得方法【${SEO_YEAR_MONTH_JA}最新】｜フィリピン書類取得代行センター`, `PSA Birth Certificate: Requirements, Fees & How to Get It [${SEO_YEAR_MONTH_EN}]`),
    t('PSA出生証明書の申請要件・費用・取得方法を解説。2026年最新の必要情報・PSA手数料（365ペソ）・代行費用まで。NO RECORD FOUND対処も。無料相談受付中。', 'Complete guide to getting a PSA Birth Certificate from the Philippines. Learn requirements, fees, processing time, and how our service can help.')
  );

  const faqs = [
    {
      q: t('PSA出生証明書とNSO出生証明書は違いますか？', 'Is PSA Birth Certificate different from NSO Birth Certificate?'),
      a: t(
        '同じ書類です。NSO（国家統計局）は2014年にPSA（フィリピン統計局）に統合されました。古いNSOの書類でも有効な場合がありますが、最新のPSAが発行したものを用意するのが確実です。',
        'They are the same document. NSO (National Statistics Office) was merged into PSA (Philippine Statistics Authority) in 2014. Older NSO documents may still be valid, but it is safest to prepare the latest PSA-issued version.'
      ),
    },
    {
      q: t('PSA出生証明書に有効期限はありますか？', 'Does PSA Birth Certificate have an expiration date?'),
      a: t(
        '法的な有効期限はありませんが、多くの機関（日本の役所・大使館・入管）は「発行から6ヶ月以内」の書類を求めます。使用予定日の2〜3ヶ月前に取得することをおすすめします。',
        'There is no legal expiration date, but most institutions (Japanese municipal offices, embassies, immigration) require a document issued within 6 months. We recommend obtaining it 2–3 months before your planned use date.'
      ),
    },
    {
      q: t('海外生まれのフィリピン人でも取得できますか？', 'Can overseas-born Filipinos obtain it?'),
      a: t(
        'はい。フィリピン国籍を持つ方であれば、海外で生まれた場合でもPSAに出生登録がされていれば取得できます。ただし、海外生まれの場合は手続きが複雑になる場合があります。まずはご相談ください。',
        'Yes. Any Philippine national can obtain it, even if born overseas, as long as the birth is registered with PSA. However, the process may be more complex for those born overseas. Please consult us first.'
      ),
    },
    {
      q: t('「NO RECORD FOUND」と返ってきた場合はどうすればよいですか？', 'What should I do if I get "NO RECORD FOUND"?'),
      a: t(
        'PSAのデータベースに記録がない状態です。出生登録が市役所レベルでのみ行われ、PSAへの提出が遅れているケースや、登録自体がされていないケースがあります。この場合は地方市役所（Local Civil Registry）への照会が必要です。',
        'This means there is no record in the PSA database. This can happen when birth registration was only done at the municipal level and submission to PSA was delayed, or when registration was not done at all. In this case, inquiry to the Local Civil Registry (LCR) is required.'
      ),
    },
    {
      q: t('翻訳は必要ですか？', 'Is a translation of PSA Birth Certificate required?'),
      a: t(
        '日本の市区町村役場に提出する場合、英語のPSA書類には日本語訳の添付が求められます（翻訳者の署名が必要）。大使館提出の場合は不要なことが多いです。提出先に事前確認されることをおすすめします。',
        'PSA Birth Certificate is issued in English. For countries where English is not the official language, a certified translation into the local language may be required. Always confirm with your submission office. We can assist with translation if needed.'
      ),
    },
    {
      q: t('PSA出生証明書の取得代行にかかる費用はどのくらいですか？', 'How much does proxy acquisition of PSA Birth Certificate cost?'),
      a: t(
        '代行費用はPSA手数料・国際郵便代込みで約4万円〜が目安です。DFAアポスティーユ認証もセットで依頼できます。詳細はお問い合わせください。',
        'The proxy service fee, including PSA fee and international shipping, is approximately ¥40,000 or more. DFA Apostille authentication can also be requested as a set. Please contact us for details.'
      ),
    },
    {
      q: t('複数部数まとめて取得できますか？', 'Can I obtain multiple copies at once?'),
      a: t(
        'はい、PSA出生証明書は複数部の同時申請が可能です。婚姻届提出用・入管提出用など複数枚が必要な場合はご相談ください。まとめて代行することでスムーズに取得できます。',
        'Yes, multiple copies of PSA Birth Certificate can be applied for simultaneously. If you need multiple copies for marriage registration, immigration, etc., please consult us. Bundling them together makes the process smoother.'
      ),
    },
    {
      q: t('親の情報が誤っている場合、訂正はできますか？', 'Can errors in parent information be corrected?'),
      a: t(
        '出生証明書に記載された親の氏名・生年月日等の誤りを訂正するには、フィリピンの地方市役所（LCR）への申請が必要です。場合によっては裁判所の命令が必要になることもあります。複雑なケースは早めにご相談ください。',
        'To correct errors in parent names, dates of birth, etc. recorded on the birth certificate, an application to the Philippine Local Civil Registry (LCR) is required. In some cases, a court order may be necessary. For complex cases, please consult us early.'
      ),
    },
    {
      q: t('PSA出生証明書の内容はどのような情報が記載されていますか？', 'What information is included on PSA Birth Certificate?'),
      a: t(
        'PSA出生証明書（Birth Certificate）には、①氏名（フルネーム）②生年月日・出生時刻 ③出生地（市・州・病院名）④性別 ⑤父の氏名・国籍 ⑥母の旧姓・国籍 ⑦登録番号・登録日・登録機関が記載されています。書類はすべて英語で記載されており、日本の機関に提出する際は日本語翻訳が必要なことがあります。',
        'PSA Birth Certificate includes: ① Full name ② Date and time of birth ③ Place of birth (city, province, hospital name) ④ Sex ⑤ Father\'s name and nationality ⑥ Mother\'s maiden name and nationality ⑦ Registration number, registration date, and registering authority. The document is issued entirely in English, which is accepted in most countries. A certified translation may be required in non-English-speaking countries.'
      ),
    },
    {
      q: t('「SECPA（Security Paper）」とはPSAのどの書類ですか？', 'What is "SECPA (Security Paper)" in PSA documents?'),
      a: t(
        'PSAが発行する出生証明書・婚姻証明書・死亡証明書は、セキュリティペーパー（SECPA）と呼ばれる専用の用紙に印刷されて発行されます。このSECPAが付いたものがPSA発行の公式書類であり、コピーや白紙への再印刷は公式書類として認められません。代行取得の場合は必ずSECPA付きの書類をお届けします。',
        'Birth certificates, marriage certificates, and death certificates issued by PSA are printed on special paper called Security Paper (SECPA). Only documents with SECPA are official PSA-issued documents; copies or reprints on plain paper are not recognized as official documents. When obtaining through our proxy service, we always deliver documents with SECPA.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: lang === 'ja'
          ? [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/ja/' },
              { '@type': 'ListItem', position: 2, name: 'PSA出生証明書ガイド', item: 'https://ph-document.com/ja/psa-shussei-shomeisho/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'PSA Birth Certificate Guide', item: 'https://ph-document.com/en/psa-birth-certificate/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/psa-shussei-shomeisho/' : 'https://ph-document.com/en/psa-birth-certificate/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: lang === 'ja'
          ? `フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由【${SEO_YEAR_MONTH_JA}】`
          : `PSA Birth Certificate: Requirements, Price & How to Get It [${SEO_YEAR_MONTH_EN}]`,
        description: lang === 'ja'
          ? 'PSA出生証明書（旧NSO）の取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・NO RECORD FOUNDのトラブル対処まで徹底ガイド。'
          : 'Complete guide to PSA Birth Certificate: requirements, fees (PHP 365), how to get it, and proxy service for US visa (K-1, CR-1), USCIS, and international marriage.',
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/psa-shussei-shomeisho/' : 'https://ph-document.com/en/psa-birth-certificate/',
        inLanguage: lang,
        datePublished: '2025-11-01',
        dateModified: SEO_DATE_ISO,
        author: {
          '@type': 'Organization',
          name: lang === 'ja' ? '株式会社IGRS' : 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: lang === 'ja' ? 'フィリピン書類取得代行センター' : 'Philippine Document Service',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://psa.gov.ph',
          'https://www.psaserbilis.com.ph',
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

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピンPSA出生証明書の取得方法｜<br className="hidden md:block" />国際結婚・ビザ申請で必要な理由【{SEO_YEAR_MONTH_JA}最新】</>
          ) : (
            <>Philippine PSA Birth Certificate:<br className="hidden md:block" />{' '}Complete Guide to Requirements, Cost & How to Obtain It [{SEO_YEAR_MONTH_EN}]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              { href: '#ps-1', label: t('PSA出生証明書とは', 'What is PSA Birth Certificate') },
              { href: '#ps-2', label: t('必要になる場面', 'When It Is Needed') },
              { href: '#ps-3', label: t('基本情報', 'Basic Information') },
              { href: '#ps-requirements', label: t('申請要件 2026', 'Requirements 2026') },
              { href: '#ps-cost', label: t('取得費用 2026', 'Cost 2026') },
              { href: '#ps-4', label: t('取得方法3パターン', '3 Ways to Obtain') },
              { href: '#ps-5', label: t('よくあるトラブル', 'Common Issues') },
              { href: '#ps-6', label: t('よくある質問（FAQ）', 'FAQ') },
              { href: '#contact', label: t('お問い合わせ', 'Contact Us') },
            ].map((item, i) => (
              <li key={i}><a href={item.href} className="hover:underline">{i + 1}. {item.label}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ps-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. PSA出生証明書とは', '1. What is PSA Birth Certificate')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>PSA出生証明書（PSA Birth Certificate）</strong>は、フィリピン統計局（PSA）が発行する出生の公式記録です。氏名・生年月日・出生地・両親の情報が記載されており、フィリピン人の身分を証明する最も基本的な公文書です。</>
            ) : (
              <><strong>PSA Birth Certificate</strong> is the official birth record issued by the Philippine Statistics Authority (PSA). It contains name, date of birth, place of birth, and parents' information, making it the most fundamental public document proving a Filipino's identity.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t(
              '日本でいう「戸籍謄本」に相当するもので、国際結婚・ビザ申請・海外移住など、あらゆる手続きで提出を求められます。',
              'It serves as the foundational proof of a Filipino\'s identity and civil status — equivalent to a birth certificate in other countries. It is required for international marriage, visa applications, overseas migration, and many other procedures worldwide.'
            )}
          </p>
          <PsaBirthCertSample lang={lang} />
        </section>

        {/* Section 2 */}
        <section id="ps-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 必要になる場面', '2. When It Is Needed')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: t('国際結婚手続き', 'International Marriage Registration'),
                desc: t('婚姻届提出時に、フィリピン人配偶者の出生証明書が必要です。', 'The Philippine spouse\'s birth certificate is commonly required when registering a marriage abroad — in any country.'),
              },
              {
                title: t('配偶者・パートナービザの申請', 'Spouse / Partner Visa Application'),
                desc: t('入管局への配偶者ビザ申請書類として求められます。', 'Immigration authorities in many countries (Japan, US, Canada, Australia, EU, etc.) require it as part of a spouse or partner visa application.'),
              },
              {
                title: t('海外移住・永住権申請', 'Overseas Migration / Permanent Residency'),
                desc: t('海外移住・永住権申請の際に身分証明書類として必要になります。', 'Required for immigration and permanent residency applications in many countries as proof of identity and civil status.'),
              },
              {
                title: t('フィリピン大使館でのRPU（Report of Birth）', 'Philippine Embassy Report of Birth (RPU)'),
                desc: t('海外生まれのフィリピン人の子どもをPSAに登録する手続きに必要です。', 'Required for registering overseas-born Filipino children with PSA through the nearest Philippine Embassy.'),
              },
              {
                title: t('パスポート申請・更新', 'Passport Application / Renewal'),
                desc: t('フィリピンのパスポート申請・更新時に本人確認書類として使用します。', 'Used as a primary identity document for Philippine passport applications and renewals.'),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="ps-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 基本情報', '3. Basic Information')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('項目', 'Item')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('内容', 'Details')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('発行機関', 'Issuing Authority'), t('フィリピン統計局（PSA）', 'Philippine Statistics Authority (PSA)')],
                  [t('旧称', 'Former Name'), t('NSO出生証明書（同じ書類）', 'NSO Birth Certificate (same document)')],
                  [t('有効期限', 'Validity'), t('法的な期限なし（ただし6ヶ月以内のものを求められることが多い）', 'No legal expiration (but most institutions require one issued within 6 months)')],
                  [t('申請費用', 'Application Fee'), t('約365ペソ（約900円）＋配送料', 'Approx. 365 PHP (~$7 USD) + shipping')],
                  [t('取得期間（代行）', 'Acquisition Time (Proxy)'), t('約4〜6週間（PSA取得2〜3週間＋DFAアポスティーユ2週間＋国際配送3〜5営業日）', 'Approx. 4–6 weeks (PSA 2–3 wks + DFA Apostille 2 wks + shipping 3–5 business days)')],
                  [t('言語', 'Language'), t('英語', 'English')],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{k}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Requirements Section — SEO: "PSA birth certificate requirements Philippines 2026" */}
        <section id="ps-requirements" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA出生証明書 申請要件（2026年・フィリピン）', 'PSA Birth Certificate Requirements Philippines 2026')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'PSA出生証明書の取得には、以下の情報・書類が必要です。事前に確認しておくとスムーズに申請できます。',
              'To obtain a PSA Birth Certificate, the following information and documents are required. Confirming these in advance will make the application process smoother.'
            )}
          </p>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card mb-4">
            <p className="text-xs font-bold text-gray-400 mb-3">{t('申請に必要な情報（証明書に記載された内容）', 'Required Information (as recorded on the certificate)')}</p>
            <div className="space-y-2">
              {[
                t('氏名（英語フルネーム・パスポートと同じスペル）', 'Full name in English (same spelling as on passport)'),
                t('生年月日', 'Date of birth'),
                t('出生地（市・州）', 'Place of birth (city and province)'),
                t('父の英語フルネーム', "Father's full name in English"),
                t('母の旧姓（英語フルネーム）', "Mother's maiden name in English"),
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-xs font-bold text-gray-400 mb-3">{t('本人以外が申請する場合の追加要件', 'Additional Requirements for Third-Party Requests')}</p>
            <div className="space-y-2">
              {[
                t('申請者本人の有効なID（パスポート等）のコピー', "Copy of requester's valid ID (passport, etc.)"),
                t('証明書記載者との関係を示す書類（婚姻証明書など）', 'Document showing relationship to the person on the certificate (e.g., marriage certificate)'),
                t('委任状（代理申請の場合）', 'Authorization letter (for proxy applications)'),
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 代行サービスをご利用の場合は、必要情報を確認フォームでご提出いただくだけで対応します。',
              '* When using our proxy service, simply submit the required information via our intake form — we handle the rest.'
            )}
          </p>
        </section>

        {/* Cost Section — SEO: "PSA birth certificate Philippines cost 2026" */}
        <section id="ps-cost" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA出生証明書の費用（2026年・フィリピン）', 'PSA Birth Certificate Philippines Cost 2026')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'PSA出生証明書の取得にかかる費用は申請方法によって異なります。以下に公式費用と代行利用時の目安をまとめました。',
              'The cost of obtaining a PSA Birth Certificate varies depending on how you apply. Below is a summary of the official fees and estimated costs when using a proxy service.'
            )}
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('費用項目', 'Cost Item')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('金額', 'Amount')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('PSA公式手数料', 'Official PSA Fee'),
                    t('約365ペソ（約900円・$7相当）', 'Approx. 365 PHP (~$7 USD / ¥900)'),
                    t('1通あたり。複数部は追加料金', 'Per copy. Additional fee for multiple copies'),
                  ],
                  [
                    t('国際配送料', 'International Shipping Fee'),
                    t('約500〜2,000円', 'Approx. ¥500–2,000'),
                    t('速達・追跡付き郵便の場合', 'For express tracked international mail'),
                  ],
                  [
                    t('代行手数料（代行サービス利用の場合）', 'Proxy Service Fee (if using proxy)'),
                    t('約40,000円〜（全込み）', 'From ~¥40,000 (all-inclusive)'),
                    t('PSA手数料・国際郵便・日本語サポート込み', 'Includes PSA fee, shipping & support'),
                  ],
                ].map(([item, amount, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{item}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100 font-bold">{amount}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            <ArrowRight className="w-4 h-4" />
            {t('費用の詳細・無料見積もりはこちら', 'Get a detailed cost breakdown & free quote')}
          </a>
        </section>

        {/* Section 4 */}
        <section id="ps-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得方法3パターン', '4. 3 Ways to Obtain')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                label: t('方法①', 'Option ①'),
                title: t('PSAオンライン申請（自分で）', 'PSA Online Application (Self)'),
                items: [
                  t('PSAHelpline.comで申請', 'Apply at PSAHelpline.com'),
                  t('クレジットカード/PayPal決済', 'Pay by credit card or PayPal'),
                  t('国際郵便で日本に届く', 'Delivered to Japan by international mail'),
                ],
                pros: t('コストが安い', 'Lower cost'),
                cons: t('英語での申請が必要。提出先によっては追加書類の確認が必要になることがある。書類不備や再取得で、結果的に時間と手間が増えることがある', 'English required. Depending on your submission authority, additional document verification may be needed. Errors or re-procurement can add significant time and effort.'),
                color: 'border-gray-200',
              },
              {
                label: t('方法②', 'Option ②'),
                title: t('在住国のフィリピン大使館で申請', 'Apply at Philippine Embassy in Your Country'),
                items: [
                  t('在住国のフィリピン大使館・総領事館で申請可能', 'Available at Philippine embassies/consulates worldwide'),
                  t('予約が必要', 'Appointment required'),
                  t('現地に出向く必要あり', 'Must visit in person'),
                ],
                pros: t('比較的安価', 'Relatively inexpensive'),
                cons: t('平日のみ。予約が取りにくい場合あり', 'Weekdays only. Appointments may be hard to get'),
                color: 'border-gray-200',
              },
              {
                label: t('方法③ おすすめ', 'Option ③ Recommended'),
                title: t('代行サービスに依頼', 'Use a Proxy Service'),
                items: [
                  t('日本語のみでやり取り完結', 'Communicate in English — no Filipino needed'),
                  t('書類確認から郵送まで一括サポート', 'Full support from document check to worldwide delivery'),
                  t('不備によるトラブルリスクを最小化', 'Minimizes risk of errors and rejections'),
                ],
                pros: t('提出先に応じて必要書類を確認。取得漏れ・再提出・再送料のリスクを減らせる。日本語で完結', 'We verify required documents for your specific submission authority. Reduces the risk of missing documents, resubmission, and reshipping costs.'),
                cons: t('代行手数料がかかる', 'Proxy service fee applies'),
                color: 'border-primary',
              },
            ].map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-primary flex-shrink-0">▸</span>{item}</li>
                  ))}
                </ul>
                <div className="text-xs space-y-1">
                  <p><span className="text-green-600 font-bold">{t('メリット：', 'Pros: ')}</span>{m.pros}</p>
                  <p><span className="text-red-500 font-bold">{t('デメリット：', 'Cons: ')}</span>{m.cons}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 比較表直下CTA */}
          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="text-sm font-bold text-secondary mb-1">
              {t('どの方法が自分に合うか分からない方へ', 'Not sure which option is right for you?')}
            </p>
            <p className="text-xs text-gray-600 mb-4">
              {t('1分で確認できます。用途に応じて必要書類を案内します。', 'Check in 1 minute. We'll guide you on the exact documents needed for your situation.')}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-primary-hover transition-colors"
              onClick={() => trackEvent('cta_click', { location: 'psa_birth_certificate_comparison', type: 'consultation' })}
            >
              {t('まずは無料相談', 'Start with a Free Consultation')}
            </a>
          </div>
        </section>

        {/* 申請成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA出生証明書の申請を成功させるポイント', 'Key Points for a Successful PSA Birth Certificate Application')}
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('取得前に名前のスペル・生年月日を確認する', 'Check Name Spelling and Date of Birth Before Applying'),
                body: t(
                  'PSA出生証明書に記載される氏名（英語表記）・生年月日が、パスポートや他の書類と一致しているか事前確認が重要です。不一致があると婚姻届・ビザ申請で問題になります。特にミドルネームの記載有無、ハイフン・スペースの違いに注意してください。',
                  'Confirm that the name and date of birth on the PSA Birth Certificate match your passport exactly. Discrepancies can cause problems with marriage registration and visa applications in any country. Pay special attention to middle names and differences in hyphens or spacing.'
                ),
              },
              {
                num: '02',
                title: t('使用目的・提出先の「有効期限」要件を確認する', 'Confirm the Validity Requirements of Your Submission Destination'),
                body: t(
                  'PSA出生証明書自体に法的な有効期限はありませんが、提出先（日本の市区町村・入管・大使館）が「発行から6ヶ月以内」を求めることがあります。使用時期が決まったら逆算して取得してください。早めに取得しすぎると期限切れになる場合があります。',
                  'PSA Birth Certificate has no legal expiration date, but many immigration offices and embassies worldwide require one "issued within 6 months." Once you know your planned submission date, work backward to time your application. Obtaining it too early may mean you need to reapply.'
                ),
              },
              {
                num: '03',
                title: t('「NO RECORD FOUND」への対処を知っておく', 'Know How to Handle "NO RECORD FOUND"'),
                body: t(
                  'PSAに出生記録がない場合（NO RECORD FOUND）、地方市役所（LCR）に出生登録がされていない可能性があります。この場合、遅延登録（Late Registration）の手続きが必要です。手続きには出生を証明できる書類（病院の記録、学校の書類など）が必要になります。複雑な場合は早めにご相談ください。',
                  'If PSA returns "NO RECORD FOUND," the birth may not have been registered at the Local Civil Registry (LCR). A Late Registration procedure will be required, along with documents proving the birth (hospital records, school records, etc.). Contact us early for complex cases — we can guide you through the process.'
                ),
              },
              {
                num: '04',
                title: t('DFAアポスティーユの必要性を確認する', 'Confirm Whether DFA Apostille Is Required'),
                body: t(
                  '日本の市区町村への婚姻届ではアポスティーユは不要なことが多いですが、配偶者ビザ申請や特定の大使館手続きで必要になる場合があります。提出先に事前確認し、必要な場合はPSA取得と同時にDFAアポスティーユもセットで依頼することをおすすめします。',
                  'Apostille is not always required for marriage registration, but many countries require it for spouse visa applications or immigration procedures. Confirm with your local immigration office in advance. If needed, we can arrange DFA Apostille together with PSA acquisition as a combined service.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl font-bold text-primary/20 flex-shrink-0 w-8">{item.num}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PSA書類到着後のチェックリスト */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA書類が届いたら確認すること', 'What to Check When PSA Documents Arrive')}
          </h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">
              {t(
                'PSA出生証明書を受け取ったら、提出前に以下を必ず確認してください。',
                'When you receive your PSA Birth Certificate, always check the following before submission.'
              )}
            </p>
            <div className="space-y-3">
              {[
                { check: t('氏名（スペル）がパスポートと一致しているか', 'Name spelling matches the passport'), note: t('大文字小文字・ミドルネームを含め確認', 'Check including capitalization and middle name') },
                { check: t('生年月日が正しいか', 'Date of birth is correct'), note: t('日・月・年の順番に注意', 'Pay attention to day/month/year order') },
                { check: t('書類がSECPA（セキュリティペーパー）で発行されているか', 'Document is issued on SECPA (Security Paper)'), note: t('PSAの公印・透かしが入っているか確認', 'Check for PSA official seal and watermark') },
                { check: t('発行日付が新しいか（6ヶ月以内か）', 'Issue date is recent (within 6 months)'), note: t('提出先の要件を確認', 'Confirm the destination\'s requirements') },
                { check: t('親の氏名・国籍情報が正確か', 'Parent names and nationality information are accurate'), note: t('日本の婚姻届・ビザ申請で確認されることがある', 'May be checked during Japanese marriage registration or visa application') },
                { check: t('翻訳が必要な場合は翻訳を用意する', 'Prepare a certified translation if required'), note: t('翻訳者の氏名・署名・翻訳日が必要', 'Translator\'s name, signature, and translation date are required') },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-secondary font-medium">{item.check}</p>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 代行費用目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('代行費用の目安', 'Estimated Proxy Service Fees')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                item: t('PSA出生証明書 取得代行', 'PSA Birth Certificate Proxy Acquisition'),
                cost: t('約40,000円〜', 'From ¥40,000'),
                note: t('PSA手数料・国際郵便込み', 'Includes PSA fee & international shipping'),
              },
              {
                item: t('PSA出生証明書 + DFAアポスティーユ セット', 'PSA Birth Certificate + DFA Apostille Set'),
                cost: t('約60,000円〜', 'From ¥60,000'),
                note: t('DFA手数料・認証費用込み', 'Includes DFA fee & authentication cost'),
              },
              {
                item: t('複数部数（2枚目以降）', 'Multiple Copies (2nd copy onward)'),
                cost: t('1枚あたり+5,000円〜', '+¥5,000 per additional copy'),
                note: t('同時申請でまとめて対応可能', 'Can be handled together with simultaneous application'),
              },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div>
                  <p className="text-sm font-medium text-secondary">{row.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-sm font-bold text-primary ml-4 flex-shrink-0">{row.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ NO RECORD FOUNDや訂正が必要な場合は別途費用・期間がかかります。',
              '* Additional fees and time apply for NO RECORD FOUND cases or cases requiring corrections.'
            )}
          </p>
        </section>

        {/* Section 5 */}
        <section id="ps-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. よくあるトラブル', '5. Common Issues')}
          </h2>
          <div className="space-y-4">
            {[
              {
                title: t('「NO RECORD FOUND」と返ってきた', '"NO RECORD FOUND" returned'),
                body: t(
                  'PSAのデータに出生記録がない状態。地方市役所（Local Civil Registry）に記録がある場合は、PSAへの遅延登録（Late Registration）が必要です。',
                  'No birth record exists in PSA data. If records exist at the Local Civil Registry (LCR), a Late Registration to PSA is required.'
                ),
              },
              {
                title: t('名前のスペルが異なる', 'Name spelling is different'),
                body: t(
                  'パスポート・PSA書類・CENOMARで名前のスペルが一致しないと、各機関で問題になります。書類間の整合性を事前に確認してください。',
                  'If name spelling does not match across passport, PSA documents, and CENOMAR, issues will arise at various institutions. Confirm consistency across all documents in advance.'
                ),
              },
              {
                title: t('親の情報が間違って記録されている', 'Parent information is incorrectly recorded'),
                body: t(
                  '出生登録時のミスで親の氏名・生年月日が誤って記録されているケースがあります。訂正には裁判所命令が必要になる場合も。',
                  'There are cases where parent names and dates of birth are incorrectly recorded due to errors at birth registration. Correction may require a court order in some cases.'
                ),
              },
              {
                title: t('届くまでに時間がかかる', 'Takes a long time to arrive'),
                body: t(
                  '国際郵便の遅延で数ヶ月かかるケースがあります。急ぎの場合は代行サービスへの相談をおすすめします。',
                  'International mail delays can cause cases taking several months. For urgent matters, we recommend consulting a proxy service.'
                ),
              },
            ].map((item, i) => (
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
          <h2 className="text-xl font-bold mb-3">{t('PSA書類取得、まるごとお任せ', 'Too Much Hassle? Let Us Handle It')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              '面倒な手続きはプロにお任せください。日本語でサポートします。',
              'PSA Birth Certificate + DFA Apostille + DHL to USA — all-in-one from $199. No Philippine address needed.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'psa_birth_certificate', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'psa_birth_certificate', type: 'consultation' })}>
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section id="ps-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. よくある質問（FAQ）', '6. Frequently Asked Questions (FAQ)')}
          </h2>
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

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: t('/ja/psa-shussei-cost', '/psa-birth-certificate-cost'), title: t('PSA出生証明書の費用', 'PSA Birth Certificate Cost'), desc: t('公式料金・代行費用の詳細', 'Official fee PHP 365 + proxy pricing from $199') },
              { to: t('/ja/apostille', '/apostille'), title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'), desc: t('アポスティーユとは・対象書類・費用', 'What is Apostille, eligible documents & fees') },
              { to: t('/ja/pricing', '/en/pricing'), title: t('料金プラン', 'Pricing Plans'), desc: t('PSA書類取得代行の費用・パッケージ一覧', 'PSA + Apostille + DHL shipping packages from $199') },
              { to: t('/ja/haigusha-visa', '/k1-visa-documents'), title: t('配偶者ビザ書類チェックリスト', 'K-1 / CR-1 Visa Documents Checklist'), desc: t('ビザ申請に必要な全書類', 'All Philippine documents required for K-1 & CR-1 visa') },
            ].map((link) => (
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
            <p className="text-sm text-gray-500 mb-6">
              {t(
                'どの書類が必要かわからない方も、お気軽にご相談ください。',
                'Even if you are unsure which documents you need, please feel free to consult us.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【PSAガイドからのお問い合わせ】' : '[PSA Birth Certificate Guide Inquiry - EN]'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/psa-shussei-shomeisho/" />
              <div>
                <label htmlFor="psa-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="psa-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="psa-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="psa-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="psa-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="psa-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('PSA出生証明書の取得について、お気軽にご相談ください。', 'Feel free to consult us about PSA Birth Certificate acquisition.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
