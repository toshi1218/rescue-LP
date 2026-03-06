import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, Clock, FileText, ArrowRight, MapPin, Shield, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { trackEvent } from '../lib/analytics';
import { CenomarSample } from '../components/DocumentSampleImage';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function CenomarGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`CENOMAR（独身証明書）代行取得【${SEO_YEAR_MONTH_JA}】日本語だけでOK｜フィリピン書類センター`, `CENOMAR: What It Is & How We Get It for You [${SEO_YEAR_MONTH_EN}] — Ships Worldwide`),
    t('国際結婚・配偶者ビザに必要なCENOMAR、自分で取るのは大変です。当センターなら日本語だけで依頼OK、DFAアポスティーユ付きで届きます。まずは無料相談。', `Need a CENOMAR for marriage or visa? Don\u2019t struggle alone \u2014 we retrieve it from PSA with DFA Apostille and ship it to you. Free consultation available.`)
  );

  const faqs = [
    {
      q: t('CENOMARとNSO独身証明書は同じですか？', 'Is CENOMAR the same as NSO Certificate of No Marriage?'),
      a: t(
        'はい、同じ書類です。NSOは旧称で、2014年にPSA（フィリピン統計局）に改組されたため、現在は「PSA CENOMAR」と呼ばれます。日本の役所や大使館ではどちらの名称でも通用します。',
        'Yes, they are the same document. NSO is the former name; since it was reorganized into PSA (Philippine Statistics Authority) in 2014, it is now called "PSA CENOMAR." Both names are accepted at government offices and embassies worldwide.'
      ),
    },
    {
      q: t('CENOMARの有効期限はどのくらいですか？', 'How long is CENOMAR valid?'),
      a: t(
        '発行日から6ヶ月が目安です。ただし、使用目的（日本での婚姻届、ビザ申請など）によって求められる発行日の基準が異なります。早めに取得しすぎると無効になる場合があるため、使用予定日の2〜3ヶ月前に申請するのが理想的です。',
        'Approximately 6 months from the date of issuance. However, the required issuance date standard varies depending on the purpose (marriage registration, visa application, etc.). Obtaining it too early may result in it expiring before use, so applying 2–3 months before the planned use date is ideal.'
      ),
    },
    {
      q: t('海外に住んでいる場合、CENOMARは取得できますか？', 'Can I obtain CENOMAR while living overseas?'),
      a: t(
        '取得できます。方法は2つあります。①在住国のフィリピン大使館・領事館で申請する、②PSAオンライン（PSAHelpline.com）で申請し国際郵便で受け取る、の2つです。ただし大使館・領事館経由の場合は予約が必要で時間がかかります。代行サービスを利用すれば手続きをすべてお任せいただけます。',
        'Yes, you can obtain it from anywhere in the world. There are two main methods: ① Apply at the nearest Philippine Embassy or Consulate in your country, ② Apply through PSA online (PSAHelpline.com) and receive it by international mail. Using a proxy service lets you skip the hassle entirely — we handle everything from the Philippines on your behalf.'
      ),
    },
    {
      q: t('再婚予定の場合、CENOMARとは別に必要な書類はありますか？', 'If I plan to remarry, are there documents needed in addition to CENOMAR?'),
      a: t(
        'はい、離婚歴がある場合は「CENOMAR」に加え、フィリピンの裁判所が発行した「婚姻の取り消し（Annulment）」または「承認判決」の書類が必要になります。これはフィリピンに離婚制度がないためです。ケースが複雑になるため、まずはご相談ください。',
        'Yes, if you have a history of divorce, in addition to CENOMAR, documents of "Annulment" or "Recognition Judgment" issued by a Philippine court are required. This is because the Philippines does not have a divorce system. Cases can be complex, so please consult us first.'
      ),
    },
    {
      q: t('CENOMARが「MATCH FOUND」と出た場合はどうすればよいですか？', 'What should I do if CENOMAR shows "MATCH FOUND"?'),
      a: t(
        '「MATCH FOUND」はPSAのデータに婚姻記録が見つかったことを意味します。これが誤りの場合（例：同姓同名の別人の記録）は、PSAへの異議申し立てが必要です。過去に婚姻歴がある場合は、アニュルメント手続き後に改めてCENOMARを取得する必要があります。まずは状況をお聞かせください。',
        '"MATCH FOUND" means a marriage record was found in the PSA database. If this is an error (e.g., a record belonging to someone with the same name), a dispute with PSA is required. If you have a prior marriage, you will need to complete annulment proceedings before a new CENOMAR can be issued. Please contact us with your situation and we will advise you.'
      ),
    },
    {
      q: t('CENOMARの申請に必要な情報は何ですか？', 'What information is needed to apply for CENOMAR?'),
      a: t(
        'PSAオンライン申請に必要な主な情報は、氏名（パスポートと同じスペル）、生年月日、生まれた市区町村（出生地）、父母の氏名です。パスポートのコピーがあると確認に便利です。',
        'The main information required for PSA online application is: full name (same spelling as on your passport), date of birth, city/municipality of birth, and parents\' full names. Having a copy of your passport is helpful for confirmation.'
      ),
    },
    {
      q: t('代行を依頼した場合、どのくらいで届きますか？', 'How long does it take to receive CENOMAR at my US address?'),
      a: t(
        '一般的にCENOMAR取得に2〜3週間、DFAアポスティーユに約2週間、国際配送に3〜5営業日かかります。トータルで4〜6週間程度が目安です。PSA側の処理状況等により変動することがあります。お急ぎの場合は事前にご相談ください。',
        'When using our proxy service, CENOMAR acquisition takes 2–3 weeks, DFA Apostille approx. 2 weeks (if required), and DHL shipping to the US takes 3–5 business days. Total: approximately 4–6 weeks. This may vary depending on PSA processing status. If you have a USCIS or NVC deadline, please let us know upfront so we can prioritize.'
      ),
    },
    {
      q: t('CENOMARに翻訳は必要ですか？', 'Does CENOMAR need to be translated?'),
      a: t(
        '提出先によって異なります。日本語訳の添付を求める役場がある一方、英語のまま受け付ける役場もあります。提出先に事前に確認することをおすすめします。翻訳が必要な場合は弊社でもご対応できますのでご相談ください。',
        'It depends on the destination country and authority. Since CENOMAR is issued in English, most English-speaking countries accept it as-is. Some countries may require a certified translation into the local language. We recommend confirming with your submission office in advance.'
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
              { '@type': 'ListItem', position: 2, name: 'CENOMARガイド', item: 'https://ph-document.com/ja/cenomar/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'CENOMAR Guide', item: 'https://ph-document.com/en/cenomar/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/cenomar/' : 'https://ph-document.com/en/cenomar/',
        },
        headline: lang === 'ja'
          ? `フィリピン独身証明書（CENOMAR／セノマー）とは？取得方法・費用・期間を完全解説【${SEO_YEAR_MONTH_JA}】`
          : `What is CENOMAR? PSA Certificate of No Marriage Record: Meaning, Requirements & How to Get It [${SEO_YEAR_MONTH_EN}]`,
        description: lang === 'ja'
          ? 'CENOMARの取得方法を自分で・大使館で・代行での3パターンで解説。費用・期間・有効期限・よくあるトラブルまで初心者向けに徹底ガイド。'
          : `What is CENOMAR (Certificate of No Marriage Record)? Complete ${SEO_YEAR} guide: PSA CENOMAR meaning, requirements, how to get it for US visa, K-1, CR-1, or international marriage. Retrieval service ships worldwide.`,
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/cenomar/' : 'https://ph-document.com/en/cenomar/',
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
          'https://www.psahelpline.ph',
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
          <span className="text-gray-600">{t('CENOMARガイド', 'CENOMAR Guide')}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピン独身証明書（CENOMAR／セノマー）とは？<br className="hidden md:block" />取得方法・費用・期間を完全解説【{SEO_YEAR_MONTH_JA}最新】</>
          ) : (
            <>What is CENOMAR? Philippine Certificate of No Marriage Record:<br className="hidden md:block" />{' '}Meaning, Requirements & How to Get It [{SEO_YEAR_MONTH_EN}]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              { href: '#section-1', label: t('CENOMARとは何か', 'What is CENOMAR') },
              { href: '#section-2', label: t('どんな場面で必要か', 'When It Is Needed') },
              { href: '#section-3', label: t('基本情報（発行元・費用・期間）', 'Basic Info (Issuer, Fees & Timeline)') },
              { href: '#section-4', label: t('取得方法3パターン比較', 'Comparison of 3 Acquisition Methods') },
              { href: '#section-5', label: t('申請の流れ・ステップ別ガイド', 'Step-by-Step Application Guide') },
              { href: '#section-6', label: t('在日フィリピン大使館・領事館の窓口', 'Applying from Overseas') },
              { href: '#section-7', label: t('書類が届いたあとの手続き', 'Next Steps After Receiving CENOMAR') },
              { href: '#section-8', label: t('よくあるトラブルと注意点', 'Common Issues & Notes') },
              { href: '#section-terms', label: t('用語解説：CENOMAR・SECPA・PSA', 'Terminology: CENOMAR / SECPA / PSA') },
              { href: '#section-9', label: t('よくある質問（FAQ）', 'FAQ') },
              { href: '#contact', label: t('無料相談・お問い合わせ', 'Free Consultation / Contact') },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. CENOMARとは何か', '1. What is CENOMAR')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>CENOMAR（セノマー）</strong>は<strong>Certificate of No Marriage Record</strong>の略称で、フィリピン統計局（PSA）が発行する<strong>独身証明書</strong>です。日本語では「婚姻記録不存在証明書」とも呼ばれます。</>
            ) : (
              <><strong>CENOMAR</strong> stands for <strong>Certificate of No Marriage Record</strong>, and is a <strong>certificate of unmarried status</strong> issued by the Philippine Statistics Authority (PSA). In Japanese, it is also called "Certificate of Non-Existence of Marriage Records."</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'PSAのデータベースに婚姻記録が存在しないことを公式に証明する書類で、「この人はフィリピンで結婚したことがない」ということを政府が保証するものです。',
              'It is a document that officially certifies that no marriage record exists in the PSA database, guaranteeing that the person has never married in the Philippines.'
            )}
          </p>

          {/* LLMO: 略称・タガログ語名・定義カード */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card mb-4">
            <p className="text-xs font-bold text-gray-400 mb-3">{t('CENOMARの基本情報', 'CENOMAR — Quick Reference')}</p>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-secondary w-36 flex-shrink-0">{t('正式英語名', 'Full English Name')}</span>
                <span className="text-gray-700">Certificate of No Marriage Record</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-secondary w-36 flex-shrink-0">{t('略称の由来', 'Abbreviation Origin')}</span>
                <span className="text-gray-700">
                  <strong className="text-primary">CE</strong>rtificate of <strong className="text-primary">NO</strong> <strong className="text-primary">MAR</strong>riage Record
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-secondary w-36 flex-shrink-0">{t('タガログ語（フィリピン語）', 'In Filipino (Tagalog)')}</span>
                <span className="text-gray-700 italic">Sertipiko ng Walang Rekord ng Kasal</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-secondary w-36 flex-shrink-0">{t('発行機関', 'Issuing Authority')}</span>
                <span className="text-gray-700">{t('フィリピン統計局（PSA）', 'Philippine Statistics Authority (PSA)')}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-secondary w-36 flex-shrink-0">{t('旧称', 'Former Name')}</span>
                <span className="text-gray-700">{t('NSO独身証明書（同一書類）', 'NSO Certificate of No Marriage (same document)')}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>{t('ポイント：', 'Key Point: ')}</strong>
            {t(
              'CENOMARはかつて「NSO独身証明書」とも呼ばれていました。NSOは2014年にPSAに統合されたため、現在は「PSA CENOMAR」が正式名称です。どちらも同じ書類です。',
              'CENOMAR was formerly also called "NSO Certificate of No Marriage." Since NSO was merged into PSA in 2014, "PSA CENOMAR" is now the official name. Both refer to the same document.'
            )}
          </div>
          <CenomarSample lang={lang} />
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. どんな場面で必要か', '2. When It Is Needed')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: t('国際結婚手続き', 'International Marriage Registration (Including US)'),
                desc: t(
                  '日本の市区町村役場に婚姻届を提出する際、フィリピン側の独身証明として必須。配偶者となるフィリピン人が取得します。',
                  'Required as proof of unmarried status when registering a marriage in the US or abroad. The Filipino applicant obtains CENOMAR to present to the county clerk or civil registrar. Often required before applying for a K-1 fiancé visa as well.'
                ),
              },
              {
                title: t('配偶者ビザ・在留資格の申請', 'US Spouse Visa (CR-1/IR-1) Application'),
                desc: t(
                  '配偶者ビザ（「日本人の配偶者等」）の申請書類として入管が求める場合があります。',
                  'USCIS, NVC, and the US Embassy require CENOMAR as part of a CR-1/IR-1 spousal immigrant visa application. It proves your Filipino spouse has no prior marriage on record in the Philippines.'
                ),
              },
              {
                title: t('海外就労・就業ビザ（OFW）', 'Overseas Employment / OFW Requirements'),
                desc: t(
                  '海外で就労するフィリピン人（OFW）が現地の雇用手続き・ビザ申請のために取得するケースがあります。',
                  'Filipinos working abroad (OFWs) may be required to submit CENOMAR as part of employment processing or visa applications in their destination country.'
                ),
              },
              {
                title: t('フィリピン国内での婚姻届', 'Marriage Registration in the Philippines'),
                desc: t(
                  'フィリピン市役所（Local Civil Registry）での婚姻届にも必要な場合があります。',
                  'May also be required for marriage registration at a Philippine Local Civil Registry (LCR) when marrying in the Philippines.'
                ),
              },
              {
                title: t('再婚手続き', 'Remarriage Procedures'),
                desc: t(
                  '離婚歴がある方が再婚する場合、アニュルメント判決書と合わせて提出します。',
                  'For those with a prior marriage who are remarrying, submitted together with court-issued annulment or recognition documents.'
                ),
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
        <section id="section-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 基本情報（発行元・費用・期間）', '3. Basic Info (Issuer, Fees & Timeline)')}
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
                  [t('正式名称', 'Official Name'), 'Certificate of No Marriage Record (CENOMAR)'],
                  [t('発行機関', 'Issuing Authority'), t('フィリピン統計局（PSA: Philippine Statistics Authority）', 'Philippine Statistics Authority (PSA)')],
                  [t('有効期限', 'Validity'), t('発行日から約6ヶ月（使用目的により異なる）', 'Approximately 6 months from issuance (varies by purpose)')],
                  [t('PSA申請費用', 'PSA Application Fee'), t('約365ペソ（約900円）＋国際郵便料金', 'Approx. 365 PHP (~$7 USD) + international shipping')],
                  [t('取得期間（代行）', 'Acquisition Time (Proxy)'), t('約4〜6週間（CENOMAR 2〜3週間＋DFA 2週間＋配送3〜5営業日）', 'Approx. 4–6 weeks (CENOMAR 2–3 wks + DFA 2 wks + shipping 3–5 business days)')],
                  [t('言語', 'Language'), t('英語（日本語翻訳が必要な場合あり）', 'English (accepted as-is by USCIS, NVC & US Embassy)')],
                  [t('対象者', 'Eligible Applicants'), t('フィリピン国籍を持つ方（海外生まれのフィリピン人も対象）', 'Philippine nationals (including Filipinos living in the US or abroad)')],
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

        {/* Section 4 */}
        <section id="section-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得方法3パターン比較', '4. Comparison of 3 Acquisition Methods')}
          </h2>
          <div className="grid gap-4">

            {/* 方法① */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t('方法①', 'Option ①')}</span>
                <h3 className="font-bold text-secondary">{t('オンラインで自分で申請する', 'Apply Online Yourself')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t(
                  'オンラインサービスを使って、PSA書類を自分で取り寄せる方法です。最初の費用は安く見えるため、まず自分でやってみようと考える方も多いです。',
                  'This method involves ordering PSA documents yourself through an online service. The initial cost appears low, so many people try this first.'
                )}
              </p>
              <div className="text-xs space-y-2">
                <div>
                  <p className="font-bold text-green-600 mb-0.5">{t('メリット', 'Pros')}</p>
                  <p className="text-gray-700">{t('費用を安く抑えやすい', 'Easy to keep costs low')}</p>
                </div>
                <div>
                  <p className="font-bold text-red-500 mb-0.5">{t('デメリット', 'Cons')}</p>
                  <p className="text-gray-700">
                    {t(
                      '英語での申請が必要です。また、取得できるのは基本的にPSA書類だけで、提出に必要な状態（紙のアポスティーユ付き）にすることができません。日本の提出先では、紙ベースのアポスティーユ原本が前提になるケースが多いため、結局あとから別手配が必要になります。',
                      'Application must be done in English. Also, what you receive is essentially just the PSA document — it cannot be put into the required state (with paper Apostille) for submission. Since most Japanese authorities require a paper-based Apostille original, you will end up needing separate arrangements later.'
                    )}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                {t(
                  '一見いちばん安く見えますが、結果的に一番時間がかかり無駄が多い方法です。',
                  'It looks like the cheapest option at first glance, but it often ends up being the most time-consuming and wasteful.'
                )}
              </p>
            </div>

            {/* 方法② */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t('方法②', 'Option ②')}</span>
                <h3 className="font-bold text-secondary">{t('在住国のフィリピン大使館・総領事館に相談する', 'Consult the Philippine Embassy / Consulate in Your Country')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t(
                  'フィリピン大使館・総領事館では、婚姻や各種届出に関する相談、公証、在外手続きの案内を受けられることがあります。手続き全体の確認先としては役立ちます。',
                  'Philippine embassies and consulates can provide guidance on marriage registration, notarization, and overseas procedures. They can be useful for general process confirmation.'
                )}
              </p>
              <div className="text-xs space-y-2">
                <div>
                  <p className="font-bold text-green-600 mb-0.5">{t('メリット', 'Pros')}</p>
                  <p className="text-gray-700">{t('公的機関に相談できる安心感がある', 'Reassurance of consulting an official government institution')}</p>
                </div>
                <div>
                  <p className="font-bold text-red-500 mb-0.5">{t('デメリット', 'Cons')}</p>
                  <p className="text-gray-700">
                    {t(
                      'フィリピンで発行されたPSA書類に対するDFAアポスティーユの申請・取得はできません。つまり、PSA書類の取得やアポスティーユ手配をここだけで完結させることはできません。予約や来館の手間もかかります。',
                      'DFA Apostille for PSA documents issued in the Philippines cannot be applied for or obtained here. In other words, you cannot complete PSA document retrieval or Apostille arrangements through the embassy alone. Appointments and in-person visits are also required.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* 方法③ */}
            <div className="bg-white border-2 border-primary rounded-xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t('方法③ おすすめ', 'Option ③ Recommended')}</span>
                <h3 className="font-bold text-secondary">{t('代行サービスに依頼する', 'Use a Proxy Service')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t(
                  '日本語でやり取りしながら、必要書類の確認から取得、必要に応じたアポスティーユ手配までまとめて進める方法です。',
                  'Communicate in your language while we handle everything — from confirming required documents to retrieval and Apostille arrangement as needed.'
                )}
              </p>
              <div className="text-xs space-y-2">
                <div>
                  <p className="font-bold text-green-600 mb-0.5">{t('メリット', 'Pros')}</p>
                  <p className="text-gray-700">
                    {t(
                      '提出先に合わせて、最初から通る形で手配できます。「電子版で足りるのか」「紙の原本が必要か」「追加書類が必要か」を見落としにくく、取得漏れ、再提出、再送料のリスクを減らせます。日本語で完結できるため、手間も少なく済みます。',
                      'We arrange everything in the form your submission authority will accept from the start. Less risk of missing documents, resubmission, or re-shipping costs. All communication handled in Japanese — minimal effort on your part.'
                    )}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-red-500 mb-0.5">{t('デメリット', 'Cons')}</p>
                  <p className="text-gray-700">{t('代行手数料がかかります', 'Proxy service fee applies')}</p>
                </div>
              </div>
            </div>

          </div>

          {/* 説得ブロック① — 自分でやる場合の落とし穴 */}
          <div className="mt-5 bg-amber-50 border border-amber-300 rounded-xl p-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-3">
                  {t(
                    '安く済ませたつもりが、あとで一番高くつくことがあります',
                    'Trying to save money upfront can end up costing you more in the end.'
                  )}
                </p>
                <div className="text-xs text-amber-700 leading-relaxed space-y-2">
                  <p>{t(
                    'PSA書類は、取得できれば終わりではありません。大事なのは、日本の提出先でそのまま使える形になっているかです。',
                    'Getting the PSA document is not the finish line. What matters is whether it is in a form your submission authority in Japan will actually accept.'
                  )}</p>
                  <p>{t(
                    '自分で申請しても、あとから追加書類や認証が必要になれば、結局は取り直し、再申請、再送料で余計な手間と費用がかかります。',
                    'If you apply yourself and later find out you need additional documents or authentication, you end up paying for re-procurement, re-application, and re-shipping — wasting both time and money.'
                  )}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 説得ブロック② — 他社の「1個安い」罠 */}
          <div className="mt-4 bg-red-50 border border-red-300 rounded-xl p-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-800 mb-3">
                  {t(
                    '「1通○○円〜」の表示価格だけで選んでいませんか？',
                    'Are you choosing based on the "from $XX per document" price tag alone?'
                  )}
                </p>
                <div className="text-xs text-red-700 leading-relaxed space-y-2">
                  <p>{t(
                    '他社の代行サービスでは、PSA書類1通の取得費用だけを安く見せていることがあります。しかし実際には、アポスティーユ認証料・国際郵便料（EMS/DHL）・追加書類の取得費用・翻訳料・手数料などが別々に加算され、最終的な見積もりが想定よりはるかに高くなるケースが少なくありません。',
                    'Some agencies advertise a low per-document fee for PSA retrieval. But in reality, DFA Apostille fees, international shipping (EMS/DHL), additional document procurement, translation charges, and handling fees are added separately — and the final quote often turns out to be far higher than expected.'
                  )}</p>
                  <p>{t(
                    '「安いと思って頼んだのに、見積もりが出てきたら結局高かった」——そうなってからでは、時間もお金も無駄になります。',
                    '"I thought it was cheap, but the final quote was way more than I expected" — by that point, you have already wasted both time and money.'
                  )}</p>
                  <p className="font-bold text-red-800">{t(
                    '当社は、必要書類・アポスティーユ・国際郵送をまとめたコミコミ料金でご案内しています。あとから追加費用が膨らむ心配がありません。',
                    'We offer all-inclusive pricing that covers document retrieval, DFA Apostille, and international shipping. No surprise add-ons or hidden costs.'
                  )}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 説得ブロック③ — 結論：うちに頼むのが正解 */}
          <div className="mt-4 bg-blue-50 border border-blue-300 rounded-xl p-5">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-blue-900 mb-3">
                  {t(
                    '当社は、書類を取るだけの代行ではありません',
                    'We are not just a document retrieval service'
                  )}
                </p>
                <div className="text-xs text-blue-800 leading-relaxed space-y-2">
                  <p>{t(
                    '提出先に合わせて、必要な形まで見越して手配する代行です。「何が必要か」「アポスティーユは要るのか」「電子版で足りるのか」——お客様が判断に迷うポイントを、最初の段階で確認します。',
                    'We arrange everything with your specific submission authority in mind. "What documents do I need?" "Is Apostille required?" "Will a digital copy suffice?" — we clarify all of these at the very first step.'
                  )}</p>
                  <p>{t(
                    '取り直し・再申請・再送料で余計な費用がかかるリスクを減らし、最短で提出先に通る書類をお届けします。',
                    'We minimize the risk of re-procurement, re-application, and re-shipping costs, and deliver documents that your submission authority will accept — as fast as possible.'
                  )}</p>
                  <p className="font-bold text-blue-900">{t(
                    '迷ったまま進めるより、最初に確認したほうが早くて確実です。',
                    'Confirming upfront is faster and more reliable than guessing as you go.'
                  )}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="text-sm font-bold text-secondary mb-4">
              {t('この書類で本当に足りるのか不安な方は、申請前にご相談ください。', 'Not sure if this document is really enough? Consult us before you apply.')}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-primary-hover transition-colors"
              onClick={() => trackEvent('cta_click', { location: 'cenomar_comparison_table', type: 'consultation' })}
            >
              {t('まずは無料相談', 'Start with a Free Consultation')}
            </a>
          </div>
        </section>

        {/* Section 5: ステップ別ガイド */}
        <section id="section-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 申請の流れ・ステップ別ガイド', '5. Step-by-Step Application Guide')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t('代行サービスを利用した場合の一般的な流れです。', 'This is the general process when using a proxy service.')}
          </p>
          <div className="space-y-3">
            {[
              {
                step: 1,
                title: t('お問い合わせ・無料相談', 'Inquiry & Free Consultation'),
                desc: t(
                  'フォームまたはメールでご連絡ください。氏名・生年月日・目的（国際結婚・ビザ申請など）をお知らせいただくと、スムーズにご案内できます。',
                  'Contact us by form or email. Providing your name, date of birth, and purpose (international marriage, visa application, etc.) allows us to assist you smoothly.'
                ),
              },
              {
                step: 2,
                title: t('必要情報のご確認', 'Confirmation of Required Information'),
                desc: t(
                  'ご依頼内容をもとに、必要な情報（氏名のスペル・出生地・父母の情報など）を確認します。不明な点は一緒に調べます。',
                  'Based on your request, we confirm the required information (name spelling, place of birth, parents\' information, etc.). We investigate unclear points together.'
                ),
              },
              {
                step: 3,
                title: t('お見積もり・ご入金', 'Quote & Payment'),
                desc: t(
                  '費用と納期の概算をご提示します。ご了承いただいた後、銀行振込でのお支払いをお願いします。',
                  'We provide an estimated cost and delivery time. After your approval, we ask for payment by bank transfer.'
                ),
              },
              {
                step: 4,
                title: t('フィリピン現地での申請', 'Document Retrieval in the Philippines'),
                desc: t(
                  'セブ拠点のスタッフがPSAへの申請手続きを代行します。必要に応じてDFAアポスティーユ認証も同時に手配します。',
                  'Our Cebu-based staff handle the PSA application procedures on your behalf. DFA Apostille authentication (required by USCIS/NVC for some documents) is also arranged simultaneously if needed.'
                ),
              },
              {
                step: 5,
                title: t('書類受領・転送', 'DHL Delivery to Your US Address'),
                desc: t(
                  '書類が発行され次第、国際郵便（EMSなど）でご指定の住所へ転送します。追跡番号をお知らせします。',
                  'Once documents are issued, they are shipped directly to your US address via DHL Express with full tracking. We will provide you with the tracking number immediately upon shipment.'
                ),
              },
              {
                step: 6,
                title: t('お受け取り・確認', 'Receipt & Verification'),
                desc: t(
                  '書類が届いたら、氏名・生年月日・出生地など記載内容に誤りがないかご確認ください。不備があればすぐにご連絡ください。',
                  'When documents arrive, please check for any errors in the content such as name, date of birth, and place of birth. Contact us immediately if there are any issues.'
                ),
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{s.step}</div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 海外からの申請 */}
        <section id="section-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. 在日フィリピン大使館・領事館の窓口', '6. Applying from Overseas')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              '自力で申請する場合は、最寄りの窓口に事前予約のうえ来訪する必要があります。',
              'There are three practical ways to obtain CENOMAR when you are living in the US or outside the Philippines.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                name: t('フィリピン大使館（東京）', 'PSA Online (PSAHelpline.com)'),
                addr: t('東京都港区六本木5-15-5', 'Apply at PSAHelpline.com and choose international delivery to your US address'),
                note: t('関東・東北・北海道方面の方', 'Delivered by international courier — processing time: 2–3 weeks + shipping'),
                url: t('https://tokyo.philembassy.net/', 'https://www.psahelpline.ph/'),
              },
              {
                name: t('フィリピン総領事館（大阪）', 'Philippine Consulate in the US'),
                addr: t('大阪府大阪市中央区久太郎町1-9-16', 'Visit the nearest Philippine Consulate (Los Angeles, New York, San Francisco, etc.) — advance appointment required'),
                note: t('近畿・中国・四国方面の方', 'Check the DFA website for your nearest US consulate location'),
                url: t('https://www.dfa.gov.ph/consular-offices/consulates-general/', 'https://www.dfa.gov.ph/consular-offices/consulates-general/'),
              },
              {
                name: t('フィリピン総領事館（名古屋）', 'Proxy Service — Recommended for US Applicants'),
                addr: t('愛知県名古屋市中村区名駅4-4-38', 'Our Cebu-based team applies at PSA on your behalf and ships directly to your US address via DHL'),
                note: t('東海・北陸・甲信越方面の方', 'No travel required — fastest and most reliable option for K-1 / CR-1 visa applicants'),
                url: t('https://www.dfa.gov.ph/consular-offices/consulates-general/', 'https://ph-document.com/en/cenomar/'),
              },
            ].map((office) => (
              <a key={office.name} href={office.url} target="_blank" rel="noopener noreferrer" className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary group-hover:text-primary">{office.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{office.addr}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{office.note}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
            <p>
              {lang === 'ja' ? (
                <>大使館・領事館での申請は<strong>事前のオンライン予約が必須</strong>です。予約なしの来訪は対応不可の場合があります。余裕をもって手続きを進めてください。</>
              ) : (
                <>If applying at a Philippine Consulate in the US, <strong>prior online appointment is mandatory</strong>. Walk-in visits are generally not accepted. Build in ample lead time — using a proxy service is the most reliable option for US-based applicants with USCIS or NVC deadlines.</>
              )}
            </p>
          </div>
        </section>

        {/* Section 7: 書類が届いたあと */}
        <section id="section-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. 書類が届いたあとの手続き', '7. Next Steps After Receiving CENOMAR')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              'CENOMARを取得したら、目的別に次のステップへ進みます。',
              'Once CENOMAR arrives, the next steps depend on your purpose. Here are the most common scenarios.'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                title: t('国際結婚（日本先行）の場合', 'For Marriage Registration in the US'),
                steps: [
                  t('CENOMARとPSA出生証明書を揃える', 'Gather CENOMAR and PSA Birth Certificate (both required for most US county clerk offices)'),
                  t('必要に応じて翻訳を準備する（提出先の要件を確認）', 'CENOMAR is in English — no translation needed for US marriage registration'),
                  t('婚姻届を提出する（在住国の市役所・登記所など）', 'Submit marriage registration at your local US county clerk or civil registrar'),
                  t('婚姻後、フィリピン大使館への婚姻報告届を提出する', 'After marriage, file a Report of Marriage at the nearest Philippine Consulate in the US'),
                ],
                color: 'border-blue-200 bg-blue-50',
                textColor: 'text-blue-800',
              },
              {
                title: t('配偶者ビザ（在留資格）申請の場合', 'For US CR-1/IR-1 Spousal Visa (NVC Submission)'),
                steps: [
                  t('CENOMARのほかにNBI Clearance・PSA婚姻証明書なども揃える', 'Gather CENOMAR along with NBI Clearance, PSA Marriage Certificate, and PSA Birth Certificate'),
                  t('在住国の移民局・入管が求める書類リストを確認する', 'Check the NVC document checklist — CENOMAR is typically required for the Filipino beneficiary'),
                  t('必要に応じてDFAアポスティーユ認証を取得する', 'Obtain DFA Apostille authentication if required by the US Embassy in Manila'),
                  t('ビザ申請書類を揃えて移民局に提出する', 'Upload documents to the NVC portal or submit to the US Embassy for the immigrant visa interview'),
                ],
                color: 'border-green-200 bg-green-50',
                textColor: 'text-green-800',
              },
            ].map((scenario) => (
              <div key={scenario.title} className={`border rounded-xl p-5 ${scenario.color}`}>
                <h3 className={`font-bold text-sm mb-3 ${scenario.textColor}`}>{scenario.title}</h3>
                <ol className="space-y-1">
                  {scenario.steps.map((step, i) => (
                    <li key={i} className={`text-xs flex gap-2 ${scenario.textColor}`}><span className="font-bold flex-shrink-0">{i + 1}.</span>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: よくあるトラブルと注意点 */}
        <section id="section-8" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('8. よくあるトラブルと注意点', '8. Common Issues & Notes')}
          </h2>
          <div className="space-y-4">
            {[
              {
                title: t('書類が届かない', 'Documents do not arrive'),
                body: t(
                  'PSAオンライン申請で支払い完了後、数週間経っても届かないケースがあります。国際郵便の遅延・紛失が原因のことが多く、再申請が必要になる場合も。',
                  'There are cases where documents do not arrive even weeks after payment is completed for PSA online applications. This is often caused by international mail delays or loss, and reapplication may be necessary.'
                ),
              },
              {
                title: t('MATCH FOUNDと記載されていた', '"MATCH FOUND" was indicated'),
                body: t(
                  '婚姻記録が見つかった場合に「MATCH FOUND」と記載されます。過去に結婚歴がある場合は正常ですが、身に覚えがない場合はPSAへの異議申し立てが必要です。',
                  '"MATCH FOUND" is indicated when a marriage record is found. This is normal if you have a history of marriage, but if you have no recollection of it, a dispute with PSA is required.'
                ),
              },
              {
                title: t('名前のスペルが異なる', 'Name spelling is different'),
                body: t(
                  'パスポートの名前とCENOMARの名前が一致しない場合、大使館や役所で問題になることがあります。申請前に必ずパスポートと同じ名前で申請しましょう。',
                  'If the name on the passport and CENOMAR do not match, problems may arise at embassies and municipal offices. Always apply with the same name as on your passport.'
                ),
              },
              {
                title: t('有効期限切れで再取得が必要', 'Expiration requires reacquisition'),
                body: t(
                  '取得後に手続きが長引き、有効期限（6ヶ月）を過ぎてしまうケースがあります。手続きのスケジュールを逆算して取得時期を決めることが重要です。',
                  'There are cases where procedures drag on after acquisition and the validity period (6 months) passes. It is important to decide the acquisition timing by working backward from your procedure schedule.'
                ),
              },
              {
                title: t('翻訳が必要なケース', 'Translation requirements by country'),
                body: t(
                  '日本の市区町村役場によっては、英語のCENOMARに日本語翻訳の添付を求める場合があります。事前に提出先の窓口に確認しておきましょう。',
                  'CENOMAR is issued in English, so USCIS, NVC, and the US Embassy generally accept it as-is — no translation needed for US visa purposes. However, if submitting to a non-English-speaking country (e.g., Japan, Germany), a certified translation may be required. Always confirm with the submission office in advance.'
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

        {/* CTA Banner */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">{t('手続きが面倒な方へ', 'For Those Who Find Procedures Troublesome')}</p>
          <h2 className="text-xl font-bold mb-3">{t('CENOMAR取得、全部お任せください', 'Leave Everything About CENOMAR Acquisition to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {lang === 'ja' ? (
              <>申請書類の確認から取得・郵送まで、日本語でサポートします。<br />どの書類が必要かわからない方もまずはご相談ください。</>
            ) : (
              <>From document confirmation to retrieval and DHL delivery to your US address — we handle everything.<br />Not sure which documents you need for your K-1 or CR-1 visa? Just ask us.</>
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5 text-xs">
            {[
              t('日本語でやり取りのみ', 'English communication only'),
              t('トラブルもサポート', 'USCIS/NVC compliant documents'),
              t('現地セブ拠点あり', 'Cebu-based office in Philippines'),
              t('翻訳対応も可能', 'DHL ships to USA'),
            ].map((item) => (
              <span key={item} className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                <Shield className="w-3 h-3 text-primary" />{item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-lg" onClick={() => trackEvent('cta_click', { location: 'cenomar_guide', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a
              href="#contact"
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors shadow-lg text-sm"
              onClick={() => trackEvent('cta_click', { location: 'cenomar_guide', type: 'consultation' })}
            >
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* Section Terms — SEO: "what is CENOMAR in Tagalog / in Philippines" + SECPA */}
        <section id="section-terms" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('用語解説：CENOMAR・SECPA・PSA（英語・フィリピノ語対照）', 'Terminology: What is CENOMAR in Tagalog / Filipino — CENOMAR, SECPA & PSA Explained')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              'CENOMAR申請・PSA書類に関わる重要用語を日本語・英語・フィリピノ語（タガログ語）で解説します。',
              'Key terms related to CENOMAR and PSA documents, explained in English and Filipino (Tagalog).'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                term: 'CENOMAR',
                en: 'Certificate of No Marriage Record',
                tl: 'Sertipiko ng Walang Rekord ng Kasal',
                ja: t('独身証明書（婚姻記録不存在証明書）', 'Certificate of No Marriage / Proof of Unmarried Status'),
                desc: t(
                  'PSA（フィリピン統計局）が発行する、婚姻記録が存在しないことを証明する公文書。日本や海外での国際結婚・ビザ申請に使われます。フィリピノ語（タガログ語）では "Sertipiko ng Walang Rekord ng Kasal"（婚姻記録のない証明書）とも呼ばれますが、日常会話でも "CENOMAR" がそのまま使われます。かつては "NSO独身証明書" とも呼ばれていました。',
                  'An official document issued by PSA (Philippine Statistics Authority) certifying no marriage record exists. Used for international marriage and visa applications in Japan and overseas. In Filipino/Tagalog, it is called "Sertipiko ng Walang Rekord ng Kasal" (certificate with no marriage record), though "CENOMAR" is used in everyday speech as well. It was formerly known as the "NSO Certificate of No Marriage."'
                ),
              },
              {
                term: 'SECPA',
                en: 'Security Paper',
                tl: 'Security Paper (Seguridad na Papel)',
                ja: t('セキュリティペーパー（PSA公式発行用紙）', 'PSA Official Security Paper'),
                desc: t(
                  'PSAが発行する出生証明書・婚姻証明書・死亡証明書・CENOMARは、このSECPA（Security Paper：専用のセキュリティ印刷用紙）に印刷されて発行されます。透かし・公印が入ったこの用紙に印刷されたもののみが公式書類として認められます。コピーや白紙への再印刷は公式書類として認められません。代行取得の場合は必ずSECPA付きの書類をお届けします。',
                  'Birth certificates, marriage certificates, death certificates, and CENOMAR issued by PSA are printed on SECPA (Security Paper — a dedicated security-grade paper). Only documents printed on this paper with watermarks and official seals are recognized as official documents. Copies or reprints on plain paper are not accepted as official documents. When obtaining through our proxy service, we always deliver documents with SECPA.'
                ),
              },
              {
                term: 'PSA',
                en: 'Philippine Statistics Authority',
                tl: 'Pangasiwaan ng Estadistika ng Pilipinas',
                ja: t('フィリピン統計局', 'Philippine Statistics Authority'),
                desc: t(
                  'フィリピンの政府機関で、出生・婚姻・死亡・CENOMARなどの公文書を発行します。2014年以前はNSO（National Statistics Office）と呼ばれていましたが、PSAに統合されました。PSAが発行するすべての書類はSECPA（セキュリティペーパー）に印刷されます。',
                  'A Philippine government agency that issues official documents including birth, marriage, death certificates and CENOMAR. Before 2014, it was called NSO (National Statistics Office) before being merged into PSA. All documents issued by PSA are printed on SECPA (Security Paper).'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-base font-bold text-secondary">{item.term}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-500">{item.en}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-500 italic">{item.tl} {t('（フィリピノ語）', '(Filipino/Tagalog)')}</span>
                </div>
                <p className="text-xs font-bold text-primary mb-2">{item.ja}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="section-9" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('9. よくある質問（FAQ）', '9. Frequently Asked Questions (FAQ)')}
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
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
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
              { to: t('/ja/cenomar-koyukigen', '/cenomar-validity'), title: t('CENOMARの有効期限', 'CENOMAR Validity Period'), desc: t('"6ヶ月"の根拠と用途別の考え方', 'How long is CENOMAR valid for K-1 & CR-1 visa?') },
              { to: t('/ja/cenomar-apostille', '/cenomar-apostille'), title: t('CENOMARにアポスティーユは必要？', 'Does CENOMAR Need Apostille?'), desc: t('用途別の結論を解説', 'Required for K-1, CR-1, USCIS? Answer by use case') },
              { to: t('/ja/pricing', '/en/pricing'), title: t('料金プラン', 'Pricing Plans'), desc: t('CENOMAR取得代行の費用・パッケージ一覧', 'CENOMAR + Apostille + DHL shipping packages from $199') },
              { to: t('/ja/haigusha-visa', '/k1-visa-documents'), title: t('配偶者ビザ書類チェックリスト', 'K-1 / CR-1 Visa Documents Checklist'), desc: t('配偶者ビザに必要なフィリピン書類一覧', 'All Philippine documents required for K-1 & CR-1 visa') },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group"
              >
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

        {/* Contact Form */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold">{t('まずは無料相談', 'Free Consultation First')}</span>
            </div>
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">
              {lang === 'ja' ? (
                <>どの書類が必要かわからない方も、お気軽にご相談ください。<br />平日 9:00〜18:00（日本時間）・翌営業日以内にご返信します。</>
              ) : (
                <>Not sure which documents you need? Feel free to send us a message anytime.<br />We reply within 24 hours on business days (Japan time).</>
              )}
            </p>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【CENOMARガイドからのお問い合わせ】' : '[CENOMAR Guide Inquiry] Philippine Document Service'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/cenomar-guide/" />
              <div>
                <label htmlFor="name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('CENOMAR取得のご相談、必要書類の確認など、お気軽にどうぞ。', 'Feel free to consult us about CENOMAR acquisition, required document confirmation, etc.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                {t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              {t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-300 pb-8">
          <p>{t('© 2026 IGRS Inc. ｜ ', '© 2026 IGRS Inc. | ')}<Link to="/" className="hover:text-secondary">{t('フィリピン書類取得代行センター', 'Philippine Document Procurement Center')}</Link></p>
        </footer>
      </main>
    </div>
  );
}
