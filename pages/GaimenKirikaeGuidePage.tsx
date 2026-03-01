import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function GaimenKirikaeGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('フィリピン運転免許 外免切替ガイド【2026年最新】LTO書類・手続き・費用', 'Filipino License to Japanese License Conversion Guide [2026]'),
    t('フィリピン運転免許を日本免許に切り替える手順・必要LTO書類・費用を解説。LTO書類の代行取得に対応。無料相談受付中。', 'Step-by-step guide to converting a Philippine driving license to a Japanese license. Covers required LTO documents, fees, and procedures.')
  );

  const faqs = [
    {
      q: t('フィリピンの運転免許証で日本の免許に切り替えられますか？', 'Can I switch my Philippine driver\'s license to a Japanese license?'),
      a: t('はい、可能です。フィリピンと日本は「道路交通に関する条約（ジュネーブ条約）」の加盟国です。ただし、フィリピン免許の取得経緯（適正な手続きで取得したもの）や在留資格によって審査が異なります。外免切替（外国免許切替）の手続きを各都道府県の運転免許センターで行います。', 'Yes, it is possible. Both the Philippines and Japan are signatories to the Convention on Road Traffic (Geneva Convention). However, the screening differs based on how the Philippine license was obtained (through proper procedures) and your residency status. The foreign license conversion (Gaimen Kirikae) procedure is conducted at each prefecture\'s driver\'s license center.'),
    },
    {
      q: t('外免切替に必要な書類はすべて日本で揃えられますか？', 'Can all documents needed for foreign license conversion be obtained in Japan?'),
      a: t('いいえ、フィリピン側の書類が必要です。具体的にはフィリピンLTOが発行する「運転記録証明書（Certification of Driver\'s License）」や「免許の真正証明」が必要になります。これらはLTO（フィリピン陸運局）に申請して取得します。当センターで代行取得が可能です。', 'No, Philippine documents are required. Specifically, you need a "Certification of Driver\'s License" and authenticity certification issued by the Philippine LTO (Land Transportation Office). These are obtained by applying to the LTO. Our center can handle the procurement on your behalf.'),
    },
    {
      q: t('外免切替のLTO書類取得にどのくらいかかりますか？', 'How long does it take to obtain LTO documents for foreign license conversion?'),
      a: t('代行サービスを利用した場合、約3〜8週間が目安です。LTOは支局によって処理時間が異なり、記録照会に時間がかかる場合があります。余裕を持ったスケジュールで申請することをおすすめします。', 'When using a proxy service, expect about 3–8 weeks. Processing times vary by LTO branch, and record inquiries can take time. We recommend planning with ample lead time.'),
    },
    {
      q: t('免許の取得から一定期間以上経過していないと切替できませんか？', 'Is there a minimum period after obtaining the license before conversion is possible?'),
      a: t('フィリピン免許取得後、一定期間（通常3ヶ月以上）その免許を使用していたことが求められます。また、日本に入国した日以降に免許を取得した場合は外免切替ができないルールがあります。詳細は各都道府県の免許センターにご確認ください。', 'After obtaining a Philippine license, you must have used it for a certain period (usually 3 months or more). Also, if you obtained the license after your entry date into Japan, conversion is not permitted. Please confirm details with your prefecture\'s license center.'),
    },
    {
      q: t('LTO書類にDFAアポスティーユ認証は必要ですか？', 'Is DFA Apostille authentication required for LTO documents?'),
      a: t('都道府県の運転免許センターによって要件が異なります。DFAアポスティーユ認証を求めるところもあれば、不要なところもあります。申請予定の免許センターに事前確認することを強くおすすめします。当センターではLTO書類＋DFAアポスティーユのセット代行も対応しています。', 'Requirements differ by prefecture\'s driver\'s license center. Some require DFA Apostille authentication, others do not. We strongly recommend confirming in advance with the license center where you plan to apply. Our center also offers a combined LTO documents + DFA Apostille proxy service.'),
    },
    {
      q: t('外免切替が不許可になる場合はどのようなケースですか？', 'In what cases is foreign license conversion denied?'),
      a: t('主なケースとして、①日本に入国後にフィリピンで取得した免許、②免許取得から3ヶ月未満、③フィリピン免許の有効期限が切れている、④必要書類の不備などが挙げられます。事前に免許センターで要件を確認し、書類を完備した上で申請することが重要です。', 'Main cases include: ① License obtained in the Philippines after entering Japan, ② Less than 3 months since obtaining the license, ③ Philippine license has expired, ④ Incomplete required documents. It is important to confirm requirements at the license center in advance and apply with complete documents.'),
    },
    {
      q: t('フィリピンの免許証の翻訳はどこで取得できますか？', 'Where can I obtain a translation of my Philippine driver\'s license?'),
      a: t('フィリピン運転免許証の日本語翻訳は、公益財団法人「自動車安全運転センター」が発行する書類が一般的に使用されます。または公証済みの翻訳も利用できます。都道府県によって受け付ける翻訳の種類が異なるため、申請先の免許センターに事前確認してください。', 'For Japanese translation of a Philippine driver\'s license, documents issued by the "Japan Safe Driving Center" (a public interest incorporated foundation) are commonly used. Notarized translations are also accepted. Since accepted translation types vary by prefecture, please confirm with your license center in advance.'),
    },
    {
      q: t('LTO書類の代行費用はどのくらいですか？', 'How much does it cost to proxy-obtain LTO documents?'),
      a: t('LTO運転記録証明書の代行取得費用は、DFAアポスティーユ認証なしで約4〜5万円、セットで約6〜7万円が目安です。LTO支局の状況・書類の種類によって変動します。詳細はお問い合わせください。', 'The proxy fee for obtaining LTO driving records is approximately ¥40,000–¥50,000 without DFA Apostille, or ¥60,000–¥70,000 as a set. Prices vary depending on LTO branch conditions and document types. Please contact us for details.'),
    },
    {
      q: t('フィリピンの免許証を更新せずに期限切れにしてしまった場合はどうなりますか？', 'What happens if my Philippine driver\'s license has expired without renewal?'),
      a: t('フィリピンの運転免許証が有効期限切れの場合、外免切替はできません。LTOでの更新手続きを先に行う必要があります。ただし、LTOの更新手続きは現地（フィリピン）での対応が必要です。詳細はLTOまたは代行業者にご相談ください。', 'If your Philippine driver\'s license has expired, foreign license conversion is not possible. You must first renew it through the LTO. However, LTO renewal procedures require in-person presence in the Philippines. Please consult with the LTO or a proxy service for details.'),
    },
    {
      q: t('外免切替が完了したら、フィリピンの免許証はどうすればよいですか？', 'What should I do with my Philippine license after foreign license conversion is complete?'),
      a: t('外免切替が完了すると、日本の運転免許センターからフィリピンの免許証と引き換えに日本の免許証が交付されます（フィリピンの免許証は返却されない場合があります）。フィリピンの免許証を手元に残したい場合は、事前に免許センターに確認してください。フィリピンで引き続き運転する場合は、改めてLTOで免許を取得する必要があります。', 'Upon completion of the foreign license conversion, the Japanese driver\'s license center will issue a Japanese license in exchange for your Philippine license (your Philippine license may not be returned). If you want to keep your Philippine license, please confirm with the license center in advance. If you plan to continue driving in the Philippines, you will need to obtain a new license from the LTO.'),
    },
  ];

  const requiredDocs = [
    { doc: t('フィリピンの有効な運転免許証（オリジナル）', 'Valid Philippine Driver\'s License (original)'), note: t('有効期限内のもの', 'Must be within validity period') },
    { doc: t('フィリピンの運転免許証（日本語翻訳）', 'Philippine Driver\'s License (Japanese translation)'), note: t('自動車安全運転センター等が発行したもの、または公的翻訳', 'Issued by Japan Safe Driving Center, etc., or official translation') },
    { doc: t('LTO発行の運転記録証明書（英語）', 'LTO-issued Driving Record Certificate (English)'), note: t('当センターで代行取得可', 'Proxy procurement available at our center') },
    { doc: t('有効なパスポート（全ページコピー）', 'Valid Passport (copy of all pages)'), note: t('入国日・在留歴の確認用', 'For confirming entry date and residency history') },
    { doc: t('在留カード', 'Residence Card'), note: t('現在の在留資格確認', 'For confirming current residency status') },
    { doc: t('住民票', 'Resident Registration'), note: t('現住所確認', 'For confirming current address') },
    { doc: t('申請書（免許センター所定）', 'Application Form (license center form)'), note: t('窓口で取得可', 'Available at the counter') },
    { doc: t('DFAアポスティーユ認証（要確認）', 'DFA Apostille Authentication (check if required)'), note: t('都道府県によって要否が異なる', 'Requirement varies by prefecture') },
  ];

  const steps = [
    { step: 'STEP 1', title: t('LTO書類の取得（当センターで代行可）', 'Obtain LTO Documents (proxy available at our center)'), desc: t('フィリピンLTOから「運転記録証明書」等の必要書類を取得します。日本からは代行サービスが最もスムーズです。', 'Obtain required documents such as the "Driving Record Certificate" from the Philippine LTO. Using a proxy service from Japan is the smoothest approach.') },
    { step: 'STEP 2', title: t('書類の翻訳・確認', 'Document Translation & Verification'), desc: t('フィリピン免許証の日本語翻訳（自動車安全運転センター発行のもの等）を準備します。LTO書類も必要に応じて翻訳。', 'Prepare the Japanese translation of the Philippine license (e.g., from the Japan Safe Driving Center). Translate LTO documents as needed.') },
    { step: 'STEP 3', title: t('運転免許センターへ予約・申請', 'Make Appointment & Apply at Driver\'s License Center'), desc: t('居住地の都道府県運転免許センターに予約を入れ、書類を持参して申請します。', 'Make an appointment at your prefecture\'s driver\'s license center and bring your documents to apply.') },
    { step: 'STEP 4', title: t('適性検査（視力・運動能力）', 'Aptitude Test (vision, motor skills)'), desc: t('視力等の適性検査を受けます。学科・技能試験は原則免除（ただし審査内容は都道府県による）。', 'Take aptitude tests such as vision checks. Written and practical driving tests are generally waived (though specific requirements depend on the prefecture).') },
    { step: 'STEP 5', title: t('日本の免許証交付', 'Japanese Driver\'s License Issued'), desc: t('審査が通れば日本の運転免許証が交付されます。', 'If the review is approved, a Japanese driver\'s license will be issued.') },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('フィリピン免許の外免切替ガイド', 'Philippine License Conversion Guide'), item: 'https://ph-document.com/gaimen-kirikae-guide/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/gaimen-kirikae-guide/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: t('フィリピン運転免許の外免切替ガイド｜必要なLTO書類・手順・費用【2026年】', 'Philippine Driver\'s License Conversion Guide | Required LTO Documents, Procedures & Costs [2026]'),
        description: t('フィリピン運転免許を日本の免許に切り替える（外免切替）ための手順・必要書類・LTO書類の取得方法を解説。LTO書類の代行取得に対応。', 'A guide on procedures, required documents, and how to obtain LTO documents for converting a Philippine driver\'s license to a Japanese license. Proxy procurement of LTO documents available.'),
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/gaimen-kirikae-guide/',
        inLanguage: lang,
        datePublished: '2025-11-01',
        dateModified: SEO_DATE_ISO,
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
          'https://www.lto.gov.ph',
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
    '外免切替とは,外免切替の全体手順,必要書類チェックリスト,LTO書類の取得方法,注意点,よくある質問（FAQ）,お問い合わせ',
    'What Is Foreign License Conversion,Full Conversion Procedure,Required Documents Checklist,How to Obtain LTO Documents,Notes,FAQ,Contact'
  ).split(',');

  const ltoMethods = [
    {
      label: t('方法① 自分で申請', 'Option ① Apply Yourself'),
      title: t('LTO支局に申請する', 'Apply at an LTO Branch'),
      items: [
        t('フィリピン在住の家族・知人に依頼してLTO支局で申請', 'Ask a family member or acquaintance in the Philippines to apply at an LTO branch'),
        t('またはLTOのオンラインポータルを利用', 'Or use the LTO online portal'),
        t('処理時間はLTO支局によって異なる', 'Processing time varies by LTO branch'),
      ],
      pros: t('コストが安い', 'Lower cost'),
      cons: t('代理人が必要。英語でのやり取り必須。時間がかかる場合あり', 'Requires a representative. English communication required. May take longer.'),
      color: 'border-gray-200',
    },
    {
      label: t('方法② おすすめ', 'Option ② Recommended'),
      title: t('代行サービスに依頼', 'Use a Proxy Service'),
      items: [
        t('日本語のみでやり取り完結', 'All communication in Japanese'),
        t('LTO書類取得からDFAアポスティーユまで一括対応', 'One-stop service from LTO document procurement to DFA Apostille'),
        t('トラブル時もプロが対応', 'Professionals handle any issues'),
      ],
      pros: t('手間ゼロ。日本語サポートあり', 'Zero hassle. Japanese support available.'),
      cons: t('代行手数料がかかる', 'Proxy service fee required'),
      color: 'border-primary',
    },
  ];

  const cautionItems = [
    { title: t('都道府県によって必要書類が異なる', 'Required Documents Vary by Prefecture'), body: t('外免切替の手続きは都道府県の運転免許センターが行います。必要書類・手続きが都道府県によって異なるため、必ず申請先の免許センターに事前確認してください。', 'Foreign license conversion is handled by each prefecture\'s driver\'s license center. Since required documents and procedures differ by prefecture, always confirm with the license center where you plan to apply.') },
    { title: t('入国後に取得した免許は切替不可', 'Licenses Obtained After Entry Cannot Be Converted'), body: t('日本に入国した後（在留資格取得後）にフィリピンで取得した免許は外免切替の対象外です。フィリピン在住時に取得した免許が対象です。', 'Licenses obtained in the Philippines after entering Japan (after acquiring residency status) are not eligible for conversion. Only licenses obtained while residing in the Philippines are eligible.') },
    { title: t('免許の取得から3ヶ月以上の使用実績が必要', 'Must Have Used License for 3+ Months After Obtaining It'), body: t('フィリピンで免許を取得してから3ヶ月以上経過していることが求められます。取得直後の免許では切替できません。', 'At least 3 months must have passed since obtaining the license in the Philippines. Licenses obtained very recently cannot be converted.') },
    { title: t('LTO書類の取得に時間がかかる', 'LTO Documents Take Time to Obtain'), body: t('LTO書類はLTO支局での申請・発行に時間がかかります。免許センターへの申請予定日から逆算して余裕を持って申請してください。', 'Obtaining LTO documents requires application and issuance at an LTO branch, which takes time. Plan backward from your intended license center application date and allow ample time.') },
  ];

  const costItems = [
    { item: t('LTO運転記録証明書 代行取得', 'LTO Driving Record Certificate Proxy'), cost: t('約40,000円〜', 'From ¥40,000'), note: t('LTO手数料・国際郵便込み', 'Includes LTO fee and international postage') },
    { item: t('LTO書類＋DFAアポスティーユ セット', 'LTO Documents + DFA Apostille Set'), cost: t('約60,000円〜', 'From ¥60,000'), note: t('DFA手数料・認証費用込み', 'Includes DFA fee and authentication costs') },
    { item: t('外免切替申請サポート（書類確認）', 'Conversion Application Support (document review)'), cost: t('別途お見積もり', 'Quote on request'), note: t('申請書類の確認・アドバイス', 'Document review and advice') },
  ];

  const dayOfSteps = [
    { step: t('受付・書類提出', 'Reception & Document Submission'), desc: t('事前に揃えた書類（LTO書類・フィリピン免許証・日本語翻訳・パスポート・在留カード・住民票）を窓口に提出します。', 'Submit your pre-gathered documents (LTO documents, Philippine license, Japanese translation, passport, residence card, resident registration) at the counter.') },
    { step: t('書類審査', 'Document Review'), desc: t('担当官が書類の内容を確認します。不備や追加資料が必要な場合はここで指摘されます。', 'The officer reviews the document contents. Any deficiencies or additional materials required will be indicated here.') },
    { step: t('適性検査（視力・聴力など）', 'Aptitude Test (vision, hearing, etc.)'), desc: t('視力・聴力・運動能力などの基本的な適性検査を行います。眼鏡・コンタクトが必要な方は忘れずに。', 'Basic aptitude tests covering vision, hearing, and motor skills are conducted. Don\'t forget glasses or contacts if you need them.') },
    { step: t('口頭試問（場合による）', 'Oral Examination (if applicable)'), desc: t('都道府県・担当官によっては、フィリピンでの免許取得経緯や運転経験について口頭で質問されることがあります。', 'Depending on the prefecture and officer, you may be asked oral questions about how you obtained your license in the Philippines and your driving experience.') },
    { step: t('写真撮影・免許証交付', 'Photo & License Issuance'), desc: t('審査が通れば写真撮影を行い、日本の運転免許証が交付されます。', 'If approved, your photo will be taken and a Japanese driver\'s license will be issued.') },
  ];

  const preCheckItems = [
    { check: t('フィリピン免許証の有効期限が切れていないか', 'Philippine license is not expired'), note: t('有効期限内のものが必要', 'Must be within validity period') },
    { check: t('免許取得からフィリピンで3ヶ月以上使用しているか', 'License has been used in the Philippines for 3+ months'), note: t('取得後の日本入国前の期間が対象', 'Period before entering Japan after obtaining the license') },
    { check: t('日本に入国した後にフィリピルで取得した免許ではないか', 'License was not obtained in the Philippines after entering Japan'), note: t('入国後取得は切替不可', 'Licenses obtained after entry cannot be converted') },
    { check: t('LTO書類（運転記録証明書）を取得済みか', 'LTO documents (driving record certificate) obtained'), note: t('代行で取得した場合は原本が手元にあるか確認', 'If obtained via proxy, confirm the original is in hand') },
    { check: t('フィリピン免許の日本語翻訳を取得済みか', 'Japanese translation of Philippine license obtained'), note: t('自動車安全運転センター発行等が一般的', 'Japan Safe Driving Center issuance is typical') },
    { check: t('有効なパスポート（全ページコピー）を準備済みか', 'Valid passport (all pages copied) prepared'), note: t('入国日の確認に使用', 'Used to confirm entry date') },
    { check: t('在留カード・住民票を用意済みか', 'Residence card and resident registration prepared'), note: t('現住所・在留資格の確認', 'For confirming address and residency status') },
    { check: t('DFAアポスティーユが必要かどうか申請先に確認済みか', 'Confirmed whether DFA Apostille is required with the application center'), note: t('都道府県によって異なる', 'Varies by prefecture') },
    { check: t('免許センターへの予約が完了しているか', 'Appointment at license center confirmed'), note: t('都道府県によっては予約制', 'Some prefectures require appointments') },
  ];

  const relatedLinks = [
    { to: t('/ja/apostille', '/apostille'), title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'), desc: t('LTO書類への認証取得方法', 'How to get Apostille on LTO documents') },
    { to: t('/ja/cenomar', '/cenomar'), title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法', 'How to obtain a certificate of no marriage record') },
    { to: t('/ja/nbi-clearance', '/nbi-clearance'), title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'NBI HIT issues explained and how to obtain') },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('フィリピン免許の外免切替ガイド', 'Philippine License Conversion Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピン運転免許の外免切替ガイド<br className="hidden md:block" />必要なLTO書類・手順・費用【2026年最新】</>
          ) : (
            <>Philippine Driver&apos;s License Conversion Guide<br className="hidden md:block" />Required LTO Documents, Procedures &amp; Costs [2026]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* Lead */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          {lang === 'ja' ? (
            <>日本に在住のフィリピン人が、フィリピンの運転免許を日本の免許証に切り替える（<strong>外国免許切替・外免切替</strong>）ためには、フィリピンLTO（陸運局）が発行する書類が必要です。このページでは、必要書類・手順・LTO書類の取得方法を解説します。</>
          ) : (
            <>For Philippine nationals residing in Japan who want to convert their Philippine driver&apos;s license to a Japanese license (<strong>Foreign License Conversion / Gaimen Kirikae</strong>), documents issued by the Philippine LTO (Land Transportation Office) are required. This page explains the required documents, procedures, and how to obtain LTO documents.</>
          )}
        </div>

        {/* TOC */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {tocItems.map((item, i) => (
              <li key={i}><a href={`#lto-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="lto-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. {t('外免切替とは', 'What Is Foreign License Conversion?')}</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>外免切替（外国免許切替）</strong>とは、外国で取得した運転免許証を日本の運転免許証に切り替える制度です。学科試験や技能試験が免除（または一部免除）され、適性検査のみで取得できることが多いです。</>
            ) : (
              <><strong>Foreign License Conversion (Gaimen Kirikae)</strong> is a system that allows foreign driver&apos;s licenses to be converted to Japanese driver&apos;s licenses. Written and practical driving tests are often waived (or partially waived), and only an aptitude test is required.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t('フィリピンの免許で外免切替をする場合、フィリピンのLTO（Land Transportation Office）が発行した運転記録証明書などが必要になります。', 'When converting a Philippine license, documents such as a driving record certificate issued by the Philippine LTO (Land Transportation Office) are required.')}
          </p>
        </section>

        {/* Section 2 */}
        <section id="lto-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. {t('外免切替の全体手順', 'Full Conversion Procedure')}</h2>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="lto-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. {t('必要書類チェックリスト', 'Required Documents Checklist')}</h2>
          <div className="space-y-2">
            {requiredDocs.map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-secondary font-medium">{item.doc}</p>
                  {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">{t('※ 必要書類は都道府県の運転免許センターによって異なります。事前に確認してください。', '※ Required documents vary by prefecture\'s driver\'s license center. Please confirm in advance.')}</p>
        </section>

        {/* Section 4 */}
        <section id="lto-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('LTO書類の取得方法', 'How to Obtain LTO Documents')}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t('LTO書類の主な取得方法は2つあります。', 'There are two main ways to obtain LTO documents.')}
          </p>
          <div className="grid gap-4">
            {ltoMethods.map((m, i) => (
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
        </section>

        {/* Section 5 */}
        <section id="lto-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. {t('注意点', 'Notes')}</h2>
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

        {/* Cost section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. {t('費用の目安', 'Cost Estimate')}</h2>
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
          <p className="text-xs text-gray-500 mt-3">{t('※ 費用はLTO支局の状況・書類の種類によって変動します。詳細はお問い合わせください。', '※ Costs vary depending on LTO branch conditions and document types. Please contact us for details.')}</p>
        </section>

        {/* Day-of steps */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('免許センター当日の流れ', 'Day-of Procedure at the License Center')}</h2>
          <p className="text-sm text-gray-700 mb-4">{t('書類が揃ったら、居住地の都道府県運転免許センターで申請を行います。当日の一般的な流れは以下の通りです。', 'Once your documents are ready, apply at your prefecture\'s driver\'s license center. The general procedure on the day is as follows.')}</p>
          <div className="space-y-3">
            {dayOfSteps.map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.step}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            {t('※ 手続きは都道府県・免許センターによって異なります。事前に各都道府県の運転免許センターのウェブサイトで確認するか、電話で問い合わせてください。', '※ Procedures vary by prefecture and license center. Please check the website of your prefecture\'s driver\'s license center or call them in advance.')}
          </div>
        </section>

        {/* Pre-check list */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('申請前の最終確認チェックリスト', 'Pre-Application Final Checklist')}</h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">{t('免許センターに行く前に、以下を確認してください。', 'Before going to the license center, please confirm the following.')}</p>
            <div className="space-y-3">
              {preCheckItems.map((item, i) => (
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

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">{t('LTO書類取得、まるごとお任せ', 'Leave LTO Document Procurement to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">{t('外免切替に必要なLTO書類・DFAアポスティーユを日本語サポートで代行します。', 'We proxy-obtain LTO documents and DFA Apostille needed for foreign license conversion in Japan, with full English support.')}</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="lto-6" className="mb-10">
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
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
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
            <p className="text-sm text-gray-500 mb-6">{t('LTO書類の代行取得・DFAアポスティーユについてお気軽にご相談ください。', 'Feel free to contact us about proxy procurement of LTO documents and DFA Apostille.')}</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【外免切替ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/gaimen-kirikae-guide/" />
              <div>
                <label htmlFor="lto-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="lto-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="lto-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="lto-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="lto-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="lto-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('外免切替のLTO書類取得についてお気軽にどうぞ。', 'Please feel free to ask about LTO document procurement for foreign license conversion.')} />
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
