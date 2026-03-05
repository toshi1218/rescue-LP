import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, Info, Clock, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { LtoDriversRecordSample } from '../components/DocumentSampleImage';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function DriverRecordPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`外免切替に必要なLTOドライバーズレコード（運転記録）取得ガイド【${SEO_YEAR_MONTH_JA}】｜フィリピン書類センター`, `LTO Driver's Record Philippines [${SEO_YEAR_MONTH_EN}]: How to Obtain & What It Contains`),
    t('フィリピンLTO発行の運転記録証明書（Driver\'s Record）の取得方法・必要書類・期間・DFAアポスティーユの要否を解説。外免切替を目指す方向けの完全ガイド。', "How to obtain a Philippine LTO Driver's Record. Covers required documents, 3–8 week processing time, DFA Apostille requirements, and proxy service shipping to USA.")
  );

  const faqs = [
    {
      q: t('外免切替に必要なLTO書類は何ですか？', 'What LTO documents are required for foreign license conversion?'),
      a: t(
        '都道府県の運転免許センターによって要求書類が異なりますが、主にLTOが発行する「Driver\'s Record（運転記録証明書）」または「Certification of Driver\'s License（免許真正証明書）」が必要です。免許の有効性・取得経緯を証明するために使われます。申請予定の免許センターに事前確認してください。',
        'Required documents vary by prefecture driver\'s license center, but the main LTO-issued documents are the "Driver\'s Record" and/or "Certification of Driver\'s License." These are used to verify license validity and how it was obtained. Confirm with your specific license center in advance.'
      ),
    },
    {
      q: t('LTO Driver\'s Recordとはどのような書類ですか？', 'What is the LTO Driver\'s Record?'),
      a: t(
        'LTO Driver\'s Record（運転記録）は、LTO（フィリピン陸運局）が発行する書類で、申請者のフィリピン運転免許の取得日・免許の種類・違反歴・有効期限等が記載されています。外免切替審査では、免許が適正な手続きで取得されたことを証明するために使われます。',
        'The LTO Driver\'s Record is a document issued by the LTO (Land Transportation Office) that contains the applicant\'s Philippine driver\'s license acquisition date, license type, violation history, and expiration date. It is used in foreign license conversion review to prove the license was obtained through proper procedures.'
      ),
    },
    {
      q: t('LTO書類の取得にどのくらい時間がかかりますか？', 'How long does it take to obtain LTO documents?'),
      a: t(
        '代行サービスを利用した場合、LTO書類の取得には約3〜8週間かかります。LTO支局による処理速度の違い・記録照会の混雑状況・DFAアポスティーユの有無によって変動します。余裕を持ったスケジュールで依頼することをおすすめします。',
        'When using a proxy service, LTO document procurement typically takes 3–8 weeks. This varies based on LTO branch processing speed, records inquiry volume, and whether DFA Apostille is included. We recommend initiating the process with ample lead time.'
      ),
    },
    {
      q: t('LTO書類にDFAアポスティーユ認証は必要ですか？', 'Is DFA Apostille required for LTO documents?'),
      a: t(
        '都道府県の運転免許センターによって要件が異なります。DFAアポスティーユ認証を必須とする免許センターもあれば、不要なところもあります。申請予定の免許センターに事前確認することを強くおすすめします。当センターではLTO書類＋DFAアポスティーユのセット代行も対応しています。',
        'Requirements differ by prefecture driver\'s license center. Some require DFA Apostille authentication, others do not. We strongly recommend confirming with your specific license center before applying. Our center also offers a combined LTO documents + DFA Apostille proxy service.'
      ),
    },
    {
      q: t('日本入国後にフィリピンで取得した免許でも外免切替できますか？', 'Can I convert a Philippine license obtained after entering Japan?'),
      a: t(
        'いいえ、日本に入国した日以降にフィリピンで取得した運転免許は、外免切替の対象外となります。これはジュネーブ条約の規定によるもので、入国前に取得した外国免許のみが切替対象となります。LTO Driver\'s Recordで免許取得日を確認し、要件を満たすか事前に確認してください。',
        'No, a Philippine driver\'s license obtained after your entry date into Japan is not eligible for foreign license conversion. This is per the Geneva Convention — only licenses obtained before your entry date are eligible. Confirm the acquisition date on your LTO Driver\'s Record to verify eligibility.'
      ),
    },
    {
      q: t('LTO書類の自己取得は難しいですか？', 'Is it difficult to obtain LTO documents on your own?'),
      a: t(
        'フィリピン国内に在住またはフィリピンに渡航できる場合は自己申請も可能です。ただし日本在住の方は、LTO窓口への出頭・書類受け取り・DFAアポスティーユ申請・国際配送をすべて自分で手配する必要があり、難易度が高いです。代行サービスを利用することで、これらをすべて任せることができます。',
        'Self-application is possible for those residing in the Philippines or able to travel there. However, for Japan-based applicants, you would need to arrange LTO counter visits, document pickup, DFA Apostille applications, and international shipping all on your own — this is quite difficult. Using a proxy service allows you to delegate all of these steps.'
      ),
    },
    {
      q: t('外免切替の手続き全体にどのくらいかかりますか？', 'How long does the entire foreign license conversion process take?'),
      a: t(
        'LTO書類取得（3〜8週間）＋DFAアポスティーユ（必要な場合・約2週間）＋日本への国際配送（3〜5営業日）＋免許センターでの審査（当日〜数週間）というのが一般的な流れです。準備から完了まで最低2〜3ヶ月を見込んでください。',
        'The general flow is: LTO document procurement (3–8 weeks) + DFA Apostille (if required, approx. 2 weeks) + international shipping to Japan (3–5 business days) + license center review (same day to several weeks). Plan for at least 2–3 months from preparation to completion.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'Driver\'s License Conversion', item: 'https://ph-document.com/drivers-license-conversion' },
          { '@type': 'ListItem', position: 3, name: 'LTO Driver\'s Record', item: 'https://ph-document.com/driver-record' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/driver-record/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: `LTO Driver's Record for Gaimen Kirikae (Foreign License Conversion) [${SEO_YEAR_MONTH_EN} Guide]`,
        description: 'How to obtain the LTO Driver\'s Record for foreign license conversion in Japan. Covers required documents, processing time, DFA Apostille requirements, and proxy service.',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/driver-record/',
        inLanguage: 'en',
        datePublished: '2025-12-01',
        dateModified: SEO_DATE_ISO,
        author: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Service',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://www.lto.gov.ph',
          'https://www.dfa.gov.ph',
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
        <nav className="text-xs text-gray-400 mb-6" aria-label="breadcrumb">
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <Link to={t('/ja/gaimen-kirikae-guide', '/drivers-license-conversion')} className="hover:text-secondary">{t('外免切替ガイド', 'Foreign License Conversion')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('LTOドライバーズレコード', 'LTO Driver\'s Record')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            `外免切替に必要なLTOドライバーズレコード（運転記録）完全ガイド【${SEO_YEAR_MONTH_JA}】`,
            `LTO Driver's Record for Foreign License Conversion (Gaimen Kirikae) [${SEO_YEAR_MONTH_EN} Complete Guide]`
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* Summary box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-blue-800 mb-1">{t('このページの結論（要点）', 'Key Summary')}</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ {t('外免切替にはLTO発行の「Driver\'s Record」または「Certification」が必要', 'LTO-issued "Driver\'s Record" or "Certification" required for conversion')}</li>
                <li>✓ {t('取得期間：代行サービス利用時で約3〜8週間', 'Acquisition time: approx. 3–8 weeks via proxy service')}</li>
                <li>✓ {t('DFAアポスティーユ要否は申請先の免許センターに確認', 'Confirm DFA Apostille requirement with your license center')}</li>
                <li>✓ {t('日本入国後にフィリピンで取得した免許は外免切替不可', 'Licenses obtained in Philippines after Japan entry are ineligible')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('LTOドライバーズレコードとは', 'What is the LTO Driver\'s Record'),
              t('外免切替に必要な理由', 'Why It\'s Required for Foreign License Conversion'),
              t('取得に必要な書類・手順', 'Required Documents & Acquisition Steps'),
              t('処理期間の目安', 'Processing Time Estimate'),
              t('DFAアポスティーユの要否', 'DFA Apostille: Required or Not'),
              t('代行サービスの活用', 'Using a Proxy Service'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#dr-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="dr-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. LTOドライバーズレコードとは', '1. What is the LTO Driver\'s Record')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            {t(
              'LTO Driver\'s Record（フィリピン陸運局発行の運転記録証明書）は、フィリピン国民の運転免許に関する公式記録を証明する書類です。免許の取得日・免許の種類・有効期限・違反歴などが記載されており、日本での外免切替（外国免許切替）の際に、フィリピン免許の「正当性」を証明するために使用されます。',
              'The LTO Driver\'s Record (Driver\'s Record Certificate issued by the Philippine Land Transportation Office) is an official document certifying the driving license records of Filipino nationals. It contains the license acquisition date, license type, validity period, and violation history, and is used in Japan\'s Gaimen Kirikae (foreign license conversion) process to prove the legitimacy of the Philippine license.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: t('Driver\'s Record', 'Driver\'s Record'),
                body: t(
                  '免許の取得履歴・免許種別・有効期限・違反歴が記載された公式記録。免許センターでの審査で最もよく求められる書類。',
                  'Official record of license acquisition history, license type, validity period, and violation history. The document most commonly required at license centers.'
                ),
              },
              {
                title: t('Certification of Driver\'s License', 'Certification of Driver\'s License'),
                body: t(
                  '免許の真正性（正規の手続きで取得したこと）を証明する証明書。Driver\'s Recordと併せて要求される場合がある。',
                  'Certificate proving the authenticity of the license (that it was obtained through proper procedures). May be required alongside the Driver\'s Record.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <LtoDriversRecordSample lang={lang} />
        </section>

        {/* Section 2 */}
        <section id="dr-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 外免切替に必要な理由', '2. Why It\'s Required for Foreign License Conversion')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '日本の外免切替（道路交通法に基づく外国免許の日本免許への切替）では、申請者のフィリピン運転免許が「適正な手続きで取得された有効な免許」であることを証明する必要があります。LTO Driver\'s Recordはその証明として、都道府県の運転免許センターに提出します。',
              'In Japan\'s foreign license conversion (conversion of a foreign license to a Japanese license under the Road Traffic Act), applicants must prove that their Philippine driver\'s license is "a valid license obtained through proper procedures." The LTO Driver\'s Record is submitted to the prefecture\'s driver\'s license center as this proof.'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('免許の「正当性」の確認', 'Verifying License "Legitimacy"'),
                body: t(
                  '日本の免許センターは、外国免許が「道路交通に関する条約」に基づいて適正に発行されたかどうかを確認します。フィリピンのLTO書類はその確認のための公式証拠となります。',
                  'Japan\'s license centers verify that foreign licenses were properly issued under the Convention on Road Traffic. Philippine LTO documents serve as the official evidence for this verification.'
                ),
              },
              {
                num: '02',
                title: t('取得日の確認（入国前取得要件）', 'Confirming Acquisition Date (Pre-entry Requirement)'),
                body: t(
                  '日本に入国した日以降にフィリピンで取得した免許は外免切替の対象外です。LTO Driver\'s Recordに記載された免許取得日と、日本への入国日を照合することで、この要件を確認します。',
                  'Licenses obtained in the Philippines after the applicant\'s Japan entry date are ineligible for conversion. The LTO Driver\'s Record acquisition date is cross-referenced with the Japan entry date to verify this requirement.'
                ),
              },
              {
                num: '03',
                title: t('免許種別・有効性の確認', 'Confirming License Type & Validity'),
                body: t(
                  'フィリピン免許の種別（普通・二輪等）と有効期限が、日本の免許センターの審査基準を満たすか確認されます。期限切れのフィリピン免許では外免切替ができません。',
                  'The type (ordinary, motorcycle, etc.) and validity period of the Philippine license are reviewed against the Japanese license center\'s criteria. An expired Philippine license cannot be converted.'
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

        {/* Section 3 */}
        <section id="dr-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 取得に必要な書類・手順', '3. Required Documents & Acquisition Steps')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              'LTO Driver\'s Recordの取得には、フィリピンのLTO窓口または認定代理店を通じた申請が必要です。日本在住の方は代行サービスを通じて取得するのが現実的です。',
              'Obtaining the LTO Driver\'s Record requires applying at an LTO office or accredited agent in the Philippines. For Japan-based applicants, obtaining through a proxy service is the practical approach.'
            )}
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                step: 'STEP 1',
                title: t('必要情報の提供', 'Provide Required Information'),
                desc: t(
                  'フィリピン免許番号・氏名・生年月日・住所（フィリピン）などの情報を代行サービスに提供します。',
                  'Provide your Philippine license number, full name, date of birth, and Philippine address to the proxy service.'
                ),
              },
              {
                step: 'STEP 2',
                title: t('LTO申請', 'LTO Application'),
                desc: t(
                  '代行スタッフがフィリピン現地のLTO窓口に出向き、Driver\'s Recordの発行申請を行います。',
                  'Proxy staff visits the LTO counter in the Philippines and files the Driver\'s Record issuance request.'
                ),
              },
              {
                step: 'STEP 3',
                title: t('書類受け取り・確認', 'Document Receipt & Verification'),
                desc: t(
                  'LTOから書類が発行され次第、記載内容（取得日・免許種別等）を確認します。',
                  'Once the LTO issues the document, the details (acquisition date, license type, etc.) are verified.'
                ),
              },
              {
                step: 'STEP 4',
                title: t('（必要な場合）DFAアポスティーユ申請', '(If Required) DFA Apostille Application'),
                desc: t(
                  '申請先の免許センターでDFAアポスティーユが必要な場合は、LTO書類取得後にDFA認証を取得します。',
                  'If DFA Apostille is required by the license center, DFA authentication is obtained after the LTO document is issued.'
                ),
              },
              {
                step: 'STEP 5',
                title: t('国際配送', 'International Shipping'),
                desc: t(
                  '書類をEMS・DHL等の国際郵便で日本にお届けします。通常3〜5営業日でお手元に届きます。',
                  'Documents are shipped to Japan via EMS, DHL, or international mail. Typically arrives within 3–5 business days.'
                ),
              },
            ].map((s, i) => (
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

        {/* Section 4 */}
        <section id="dr-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 処理期間の目安', '4. Processing Time Estimate')}
          </h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('工程', 'Stage')}</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">{t('期間の目安', 'Time Estimate')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('LTO Driver\'s Record 取得', 'LTO Driver\'s Record Procurement'), t('3〜8週間', '3–8 weeks')],
                  [t('DFAアポスティーユ認証（必要な場合）', 'DFA Apostille (if required)'), t('約2週間（10〜15営業日）', 'Approx. 2 weeks (10–15 business days)')],
                  [t('日本への国際配送', 'International Shipping to Japan'), t('3〜5営業日', '3–5 business days')],
                  [t('合計（アポスティーユあり）', 'Total (with Apostille)'), t('5〜11週間', '5–11 weeks')],
                  [t('合計（アポスティーユなし）', 'Total (without Apostille)'), t('3〜9週間', '3–9 weeks')],
                ].map(([stage, time], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-secondary border-b border-gray-100">{stage}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                {t(
                  'LTOの処理期間はLTO支局・混雑状況・記録照会の状況によって変動します。免許センターへの申請日から逆算して、余裕を持ったスケジュールで手配してください。',
                  'LTO processing time varies by branch, congestion, and records inquiry status. Work backward from your planned license center appointment and allow ample lead time.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="dr-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. DFAアポスティーユの要否', '5. DFA Apostille: Required or Not')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              'LTO書類に対するDFAアポスティーユ認証の要否は、申請先の都道府県の運転免許センターによって異なります。必ず申請前に確認してください。',
              'Whether DFA Apostille authentication is required for LTO documents depends on the prefecture\'s driver\'s license center where you apply. Always confirm before applying.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
              <p className="text-sm font-bold text-green-800 mb-2">{t('アポスティーユ不要の場合', 'When Apostille is NOT Required')}</p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• {t('LTO書類のみで審査を実施', 'Review conducted with LTO documents alone')}</li>
                <li>• {t('費用・期間が節約できる', 'Saves cost and time')}</li>
                <li>• {t('一部の免許センターで該当', 'Applies at some license centers')}</li>
              </ul>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <AlertTriangle className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm font-bold text-secondary mb-2">{t('アポスティーユ必要の場合', 'When Apostille IS Required')}</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• {t('LTO書類＋DFAアポスティーユが必要', 'LTO docs + DFA Apostille required')}</li>
                <li>• {t('追加で2〜4週間・費用も追加', 'Additional 2–4 weeks and extra cost')}</li>
                <li>• {t('当センターでセット代行対応', 'Our center offers combined set service')}</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-800">
              <span className="font-bold">{t('確認方法：', 'How to confirm: ')}</span>
              {t(
                '申請予定の都道府県の運転免許センター（警察本部交通部）に電話または窓口で事前確認してください。「フィリピン免許の外免切替に必要な書類」として確認するのが確実です。',
                'Contact the driver\'s license center (Traffic Division, Prefectural Police HQ) of your target prefecture by phone or in person. Ask specifically about "required documents for foreign license conversion from a Philippine license."'
              )}
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="dr-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. 代行サービスの活用', '6. Using a Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '当センターでは、LTO Driver\'s Recordの取得代行（DFAアポスティーユオプション付き）に対応しています。フィリピン現地でのLTO窓口対応から国際配送まで、すべてお任せいただけます。',
              'Our center handles LTO Driver\'s Record proxy acquisition (with optional DFA Apostille). From LTO counter handling in the Philippines to international delivery — everything is taken care of.'
            )}
          </p>
          <div className="grid gap-3 mb-5">
            {[
              {
                item: t('LTO Driver\'s Record 取得代行', 'LTO Driver\'s Record Proxy'),
                cost: 'US$199〜',
                note: t('LTO申請費・現地手数料・国際配送込み', 'Incl. LTO fee, local handling & international shipping'),
              },
              {
                item: t('LTO書類＋DFAアポスティーユ セット', 'LTO Docs + DFA Apostille Set'),
                cost: 'US$299〜',
                note: t('DFA公式費用・認証手数料込み', 'Incl. DFA official fee & authentication charges'),
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
          <div className="grid gap-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('LTO複数支局への照会に対応', 'LTO Multi-branch Inquiry Support'),
                body: t(
                  'LTO支局によって記録の保管状況が異なる場合があります。当センターでは複数の支局に照会し、確実に書類を取得します。',
                  'LTO record storage varies by branch. Our center can inquire at multiple branches to reliably obtain the documents.'
                ),
              },
              {
                icon: <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('進捗状況の報告', 'Progress Updates'),
                body: t(
                  'LTO申請の進捗状況を日本語で随時ご報告します。処理が長引く場合もその都度ご連絡します。',
                  'We provide progress updates in Japanese as needed. If processing takes longer than expected, we will notify you promptly.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                {item.icon}
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('LTO書類の取得、当センターにお任せください', 'Too Much Hassle? Let Us Handle It')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('外免切替に必要なLTO書類からDFAアポスティーユまで一括対応。日本語サポートあり。', 'LTO Driver Record + DFA Apostille + DHL to your address — all-in-one from $199. Full English support.')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm">
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section id="dr-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. よくある質問（FAQ）', '7. Frequently Asked Questions (FAQ)')}
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

        {/* Related Guides */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/gaimen-kirikae-guide', '/drivers-license-conversion'),
                title: t('外免切替ガイド（基本）', 'Philippine License Conversion Guide'),
                desc: t('手続き全体の流れ・必要書類・費用', 'Required LTO documents, procedures & costs'),
              },
              {
                to: t('/ja/apostille', '/apostille'),
                title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'),
                desc: t('アポスティーユとは・対象書類・手続き', 'What is Apostille, eligible documents & fees'),
              },
              {
                to: t('/ja/pricing', '/en/pricing'),
                title: t('料金プラン', 'Pricing Plans'),
                desc: t('LTO書類代行の費用・パッケージ一覧', 'LTO + Apostille + DHL shipping packages from $199'),
              },
              {
                to: t('/ja/apostille-shori-kikan', '/apostille-processing-time'),
                title: t('DFAアポスティーユ処理期間', 'DFA Apostille Processing Time'),
                desc: t('通常・エクスプレスの日数目安', 'Standard 10–15 days / Express 3–5 days'),
              },
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
                '外免切替に必要なLTO書類の取得について、お気軽にご相談ください。',
                'Feel free to contact us about obtaining LTO documents for foreign license conversion.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【LTOドライバーズレコードページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/driver-record" />
              <div>
                <label htmlFor="dr-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="dr-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="dr-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="dr-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="dr-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="dr-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('申請予定の免許センター（都道府県）・フィリピン免許の取得日・DFAアポスティーユの要否についてお知らせください。', 'Please share your target license center (prefecture), Philippine license acquisition date, and whether DFA Apostille is required.')} />
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
