import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ApostillePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`DFAアポスティーユ 処理期間・取得方法・費用【${SEO_YEAR_MONTH_JA}最新】`, `DFA Apostille: How to Get It, Processing Time & Fees [${SEO_YEAR_MONTH_EN}]`),
    t('フィリピンDFAアポスティーユ認証の処理期間・取得方法・費用・要件を解説。CENOMAR・PSA・NBI対応。日本語サポートあり・無料見積もり受付中。', 'Complete guide to DFA Apostille authentication in the Philippines. Covers CENOMAR, PSA, and NBI documents. English support available.')
  );

  const faqs = [
    {
      q: t('DFAアポスティーユ認証とは何ですか？', 'What is DFA Apostille Authentication?'),
      a: t(
        'アポスティーユ（Apostille）は、ハーグ条約加盟国間で公文書の信憑性を確認するための認証制度です。フィリピンではDFA（外務省）がこの認証を行います。認証されると、加盟国でその書類が正式な公文書として認められます。日本とフィリピンは両方ともハーグ条約加盟国です。',
        'Apostille is an authentication system under the Hague Convention that verifies the authenticity of public documents between member countries. In the Philippines, the DFA (Department of Foreign Affairs) performs this authentication. Once authenticated, the document is recognized as an official public document in other member countries. Both Japan and the Philippines are members of the Hague Convention.'
      ),
    },
    {
      q: t('国際結婚でアポスティーユは必ず必要ですか？', 'Is Apostille always required for international marriage?'),
      a: t(
        '日本の市区町村役場での婚姻届提出には、フィリピン書類（CENOMAR・PSA出生証明書）へのアポスティーユは必須ではないことが多いです。ただし、入管（配偶者ビザ申請）や公証機関によって異なるため、提出先に事前確認することをおすすめします。NBI Clearanceについては、アポスティーユ付きを求められる場合があります。',
        'No — it depends on the country and institution. For marriage registration, Apostille is often not required. However, for spouse visa or immigration applications, it is frequently required. NBI Clearance in particular is commonly requested with Apostille for visa procedures. Always confirm with the specific office you are submitting to.'
      ),
    },
    {
      q: t('アポスティーユの取得にどのくらいかかりますか？', 'How long does it take to obtain Apostille?'),
      a: t(
        'DFA窓口での通常申請は約2週間（10〜15営業日）程度、エクスプレス申請は3〜5営業日程度が目安です。代行サービスを利用した場合、書類の取得からアポスティーユ認証・国際配送まで合計で約4〜6週間かかります（書類の種類・状況による）。',
        'Standard processing at the DFA office takes approximately 2 weeks (10–15 business days), while express processing takes about 3–5 business days. When using a proxy service, the total time from document acquisition through Apostille authentication and international shipping is approximately 4–6 weeks (depending on the type and condition of documents).'
      ),
    },
    {
      q: t('アポスティーユとDFA公証（Authentication）は同じですか？', 'Is Apostille the same as DFA Authentication?'),
      a: t(
        '異なります。アポスティーユはハーグ条約加盟国向けの簡略化された認証制度です。日本はハーグ条約加盟国なので、フィリピン書類を日本で使う場合はアポスティーユで対応できます。DFA公証（Authentication）はハーグ条約非加盟国向けの手続きです。',
        'They are different. Apostille is a simplified authentication system for Hague Convention member countries. Since Japan is a member, Philippine documents to be used in Japan can be handled with Apostille. DFA Authentication is a procedure for non-member countries of the Hague Convention.'
      ),
    },
    {
      q: t('アポスティーユ認証後に日本語翻訳は必要ですか？', 'Is a translation needed after Apostille authentication?'),
      a: t(
        'アポスティーユ認証自体は翻訳ではなく、書類の真正性を証明するものです。英語で書かれたフィリピン書類を日本の機関に提出する場合、別途日本語翻訳が必要になることがあります。',
        'Apostille authentication certifies the authenticity of a document — it is not a translation. Philippine documents are issued in English, which is accepted in most English-speaking countries without further translation. However, non-English-speaking countries (e.g., Japan, Germany) may require a certified translation into the local language in addition to the Apostille. Confirm with your submission office in advance.'
      ),
    },
    {
      q: t('アポスティーユはどこで申請できますか？自分でできますか？', 'Where can I apply for Apostille? Can I do it myself?'),
      a: t(
        'フィリピン国内のDFA（外務省）事務所で申請できます。マニラ・セブ・ダバオ等にオフィスがあります。日本からご自身で申請するには現地代理人が必要であり、DFAオンライン予約システムの利用も必要です。代行サービスを利用すれば、これらの手続きをすべてお任せいただけます。',
        'Applications must be submitted at a DFA (Department of Foreign Affairs) office inside the Philippines — in Manila, Cebu, Davao, and other cities. Applying from overseas requires arranging a local representative in the Philippines and booking an appointment through the DFA online system. Using a proxy service handles all of this for you remotely.'
      ),
    },
    {
      q: t('アポスティーユ認証の有効期限はありますか？', 'Does Apostille authentication have an expiration date?'),
      a: t(
        'アポスティーユ認証自体に法的な有効期限はありません。ただし、認証の対象となる書類（NBI ClearanceやCENOMAR等）に有効期限がある場合は、書類の期限切れ前に使用する必要があります。',
        'Apostille authentication itself has no legal expiration date. However, if the underlying document (such as NBI Clearance or CENOMAR) has an expiration date, it must be used before the document expires.'
      ),
    },
    {
      q: t('複数の書類にまとめてアポスティーユ認証を取得できますか？', 'Can I get Apostille authentication for multiple documents at once?'),
      a: t(
        'はい、複数の書類（例：CENOMAR・PSA出生証明書・NBI Clearance）のアポスティーユをまとめて申請することが可能です。まとめて代行することで、個別に依頼するよりも効率的に手続きが完了します。',
        'Yes, you can apply for Apostille for multiple documents (e.g., CENOMAR, PSA Birth Certificate, NBI Clearance) at once. Bundling requests through a proxy service completes the process more efficiently than applying individually.'
      ),
    },
    {
      q: t('DFAアポスティーユを取得した後、書類の有効期間はどうなりますか？', 'How does document validity work after obtaining DFA Apostille?'),
      a: t(
        'アポスティーユ認証自体に有効期限はありません。ただし、認証の対象となった元の書類（NBI ClearanceやCENOMARなど）に有効期限がある場合は、その書類の期限内に使用する必要があります。例えばNBI Clearanceは発行から1年間有効なため、取得後1年以内に使用してください。',
        'Apostille authentication itself has no expiration date. However, if the authenticated source document (such as NBI Clearance or CENOMAR) has an expiration date, it must be used within that period. For example, NBI Clearance is valid for one year from issuance, so please use it within one year of obtaining it.'
      ),
    },
    {
      q: t('アポスティーユ認証されたフィリピン書類を日本の公証役場でさらに認証する必要はありますか？', 'Do I need additional authentication at a local notary after Apostille?'),
      a: t(
        'いいえ、ハーグ条約の趣旨はまさにこの「多重認証」を不要にすることです。フィリピン書類にDFAアポスティーユが付いていれば、日本の公証役場や大使館での追加認証なしに日本の機関で公文書として認められます。ただし提出先によって独自の要件がある場合もあるため、必ず事前確認してください。',
        'No — the entire purpose of the Hague Apostille Convention is to eliminate "chain authentication." A DFA Apostille on a Philippine document is accepted as-is by government offices in all Hague Convention member countries, without any additional notarization or embassy legalization. That said, always double-check with your specific submission destination, as individual offices occasionally have their own requirements.'
      ),
    },
  ];

  const targetDocs = [
    {
      doc: t('CENOMAR（独身証明書）', 'CENOMAR (Certificate of No Marriage)'),
      use: t('配偶者ビザ申請・婚姻手続き', 'Spouse visa application, marriage procedures'),
      note: t('必要かどうか提出先に確認', 'Confirm necessity with submission destination'),
    },
    {
      doc: t('PSA出生証明書', 'PSA Birth Certificate'),
      use: t('各種身分証明', 'Various identity verification purposes'),
      note: t('必要かどうか提出先に確認', 'Confirm necessity with submission destination'),
    },
    {
      doc: t('PSA婚姻証明書', 'PSA Marriage Certificate'),
      use: t('婚姻の証明・ビザ申請', 'Proof of marriage, visa/immigration application'),
      note: t('入管提出時に求められることあり', 'May be required by immigration offices worldwide'),
    },
    {
      doc: t('NBI Clearance（無犯罪証明書）', 'NBI Clearance (Criminal Record Certificate)'),
      use: t('配偶者ビザ・海外就労', 'Spouse visa, overseas employment, immigration'),
      note: t('推奨・入管が求めることが多い', 'Commonly required by immigration worldwide'),
    },
    {
      doc: t('LTO関連書類（外免切替用）', 'LTO Documents (for license conversion abroad)'),
      use: t('日本の免許切替申請', 'Driving license conversion in another country'),
      note: t('都道府県によって要否が異なる', 'Requirements vary by destination country'),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'DFAアポスティーユガイド', item: 'https://ph-document.com/apostille-guide/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/apostille-guide/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: `フィリピンDFAアポスティーユ認証とは？対象書類・取得方法・費用【${SEO_YEAR_MONTH_JA}】`,
        description: 'フィリピンDFAアポスティーユ認証の取得方法・対象書類・費用・期間を解説。CENOMAR・PSA・NBI Clearanceへの認証取得を代行サービスで日本語対応。',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/apostille-guide/',
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
          name: 'フィリピン書類取得代行センター',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://www.dfa.gov.ph',
          'https://apostille.dfa.gov.ph',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('DFAアポスティーユガイド', 'DFA Apostille Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピンDFAアポスティーユ認証とは？<br className="hidden md:block" />対象書類・取得方法・費用【{SEO_YEAR_MONTH_JA}最新】</>
          ) : (
            <>What is Philippine DFA Apostille Authentication?<br className="hidden md:block" />Documents, Process & Fees [{SEO_YEAR_MONTH_EN} Guide]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              { href: '#ap-1', label: t('アポスティーユ認証とは', 'What is Apostille Authentication') },
              { href: '#ap-2', label: t('対象となる書類', 'Target Documents') },
              { href: '#ap-requirements', label: t('申請要件 2026', 'Requirements 2026') },
              { href: '#ap-3', label: t('取得手順', 'Acquisition Process') },
              { href: '#ap-processing-time', label: t('DFA処理期間 2026', 'DFA Apostille Processing Time 2026') },
              { href: '#ap-4', label: t('基本情報（費用・期間）', 'Basic Info (Fees & Timeline)') },
              { href: '#ap-5', label: t('注意点', 'Important Notes') },
              { href: '#ap-6', label: t('よくある質問（FAQ）', 'FAQ') },
              { href: '#contact', label: t('お問い合わせ', 'Contact Us') },
            ].map((item, i) => (
              <li key={i}><a href={item.href} className="hover:underline">{i + 1}. {item.label}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ap-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. アポスティーユ認証とは', '1. What is Apostille Authentication')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>アポスティーユ（Apostille）</strong>は、1961年のハーグ条約に基づく<strong>外国公文書の認証制度</strong>です。条約加盟国の機関が発行した公文書を、他の加盟国でもそのまま有効な公文書として認めるための認証スタンプです。</>
            ) : (
              <><strong>Apostille</strong> is a system of <strong>authentication for foreign public documents</strong> based on the 1961 Hague Convention. It is an authentication stamp that allows public documents issued by institutions in one member country to be recognized as valid official documents in other member countries.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <>フィリピンでは<strong>DFA（Department of Foreign Affairs／外務省）</strong>がこの認証を行います。PSA・NBIなどが発行した書類にDFAのアポスティーユスタンプを取得することで、その書類が日本の機関でも公式に認められます。</>
            ) : (
              <>In the Philippines, the <strong>DFA (Department of Foreign Affairs)</strong> performs this authentication. By obtaining the DFA Apostille stamp on documents issued by PSA, NBI, and others, those documents are officially recognized in any Hague Convention member country.</>
            )}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>{t('ポイント：', 'Key Point: ')}</strong>
            {t(
              '日本とフィリピンはどちらもハーグ条約加盟国のため、フィリピン書類にアポスティーユ認証を付けることで、日本での公的な効力が保証されます。',
              'The Philippines is a member of the Hague Convention. Adding DFA Apostille authentication to Philippine documents guarantees their official validity in all other Hague Convention member countries — including Japan, the US, Canada, Australia, most of Europe, and more.'
            )}
          </div>
        </section>

        {/* Section 2 */}
        <section id="ap-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 対象となる書類', '2. Target Documents')}
          </h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t(
              'フィリピン書類の中でアポスティーユ認証が必要・推奨される主な書類は以下の通りです。',
              'The main Philippine documents that require or are recommended to have Apostille authentication are as follows.'
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('主な使用場面', 'Primary Use Cases')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {targetDocs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{row.doc}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.use}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 必要かどうかは提出先（市区町村・入管・大使館等）によって異なります。事前確認をおすすめします。',
              '* Whether Apostille is required depends on the destination (municipal office, immigration, embassy, etc.). We recommend confirming in advance.'
            )}
          </p>
        </section>

        {/* Requirements Section — SEO: "dfa apostille requirements philippines 2026" */}
        <section id="ap-requirements" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('DFAアポスティーユの申請要件（フィリピン・2026年）', 'DFA Apostille Requirements Philippines 2026')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'DFAアポスティーユを申請する際に必要な書類・要件を以下にまとめました。代行サービスを利用する場合は、必要書類の準備もすべてサポートします。',
              'Below is a summary of the documents and requirements needed to apply for DFA Apostille. When using a proxy service, we handle all document preparation on your behalf.'
            )}
          </p>
          <div className="grid gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
              <p className="text-xs font-bold text-gray-400 mb-3">{t('本人申請の場合（必須要件）', 'For Self-Application (Required)')}</p>
              <div className="space-y-2">
                {[
                  t('アポスティーユを受ける元の書類のオリジナル（PSA発行・NBI発行・LTO書類等）', 'Original document to be apostilled (PSA-issued, NBI, LTO, etc.)'),
                  t('申請者の有効な政府発行ID（パスポート、フィリピン国民IDなど）', "Applicant's valid government-issued ID (passport, Philippine national ID, etc.)"),
                  t('DFAオンライン予約の確認番号（予約制のため事前予約が必要）', 'DFA online appointment confirmation number (advance booking required)'),
                  t('申請手数料（通常処理：約100〜200ペソ／通、エクスプレス：追加料金）', 'Processing fee (Regular: approx. 100–200 PHP per document; Express: additional fee)'),
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
              <p className="text-xs font-bold text-gray-400 mb-3">{t('代理申請の場合（追加要件）', 'For Third-Party / Proxy Application (Additional Requirements)')}</p>
              <div className="space-y-2">
                {[
                  t('委任状（Special Power of Attorney / SPA）：公証が必要', 'Special Power of Attorney (SPA) — must be notarized'),
                  t('代理人の有効なID（政府発行）', "Representative's valid government-issued ID"),
                  t('元の書類所有者のIDコピー', "Copy of the document owner's ID"),
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            {t(
              '当センターの代行サービスでは、SPA・代理人手配・DFA予約・申請・受取・国際発送まですべて対応しています。お客様はIDコピーと必要情報をご提供いただくだけでOKです。',
              'Our proxy service handles everything: SPA preparation, local representative, DFA appointment booking, application, pickup, and international shipping. All you need to provide is a copy of your ID and the required information.'
            )}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ DFAの要件は変更される場合があります。最新情報はDFA公式サイト（dfa.gov.ph）でご確認ください。',
              '* DFA requirements are subject to change. Always check the latest information on the official DFA website (dfa.gov.ph).'
            )}
          </p>
        </section>

        {/* Section 3 */}
        <section id="ap-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 取得手順', '3. Acquisition Process')}
          </h2>
          <div className="space-y-3">
            {[
              {
                step: 'STEP 1',
                title: t('対象書類の取得', 'Obtain the Target Document'),
                desc: t(
                  'まずPSA・NBIなどから対象書類を取得します。アポスティーユはこれらの書類に後から付けるものです。',
                  'First, obtain the target documents from PSA, NBI, etc. Apostille is added to these documents afterward.'
                ),
              },
              {
                step: 'STEP 2',
                title: t('DFAに書類を提出', 'Submit Documents to the DFA'),
                desc: t(
                  'DFA（フィリピン外務省）の認証局（Authentication Division）に書類を持参または郵送します。オンライン予約が必要です。',
                  'Bring or mail documents to the DFA (Department of Foreign Affairs) Authentication Division. An online appointment is required.'
                ),
              },
              {
                step: 'STEP 3',
                title: t('アポスティーユスタンプの取得', 'Obtain the Apostille Stamp'),
                desc: t(
                  'DFAが書類の真正性を確認し、アポスティーユスタンプを押します。通常約2週間（10〜15営業日）、エクスプレスは3〜5営業日。',
                  'The DFA verifies the authenticity of the documents and applies the Apostille stamp. Standard: approx. 2 weeks (10–15 business days); Express: 3–5 business days.'
                ),
              },
              {
                step: 'STEP 4',
                title: t('日本へ発送', 'International Shipping'),
                desc: t(
                  'アポスティーユ付きの書類を速達・追跡付きの国際郵便で日本の住所へお届けします。',
                  'Apostille-stamped documents are shipped to your address anywhere in the world via express tracked international courier.'
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

        {/* Processing Time Section — SEO: "DFA apostille processing time Philippines 2026" */}
        <section id="ap-processing-time" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('DFAアポスティーユ 処理期間（フィリピン・2026年）', 'DFA Apostille Processing Time Philippines 2026')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'DFAアポスティーユの処理にかかる日数は、主に3つの要因によって変わります：①DFAオフィスの予約枠の空き状況、②申請するオフィスの場所（マニラ・セブ・ダバオ等）、③日本への配送手段（国際クーリエ・郵便の種別）。',
              'DFA Apostille processing time depends on three main factors: (1) appointment slot availability at the DFA office, (2) the office location (Manila, Cebu, Davao, etc.), and (3) the courier or postal service used to ship to Japan.'
            )}
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('処理区分', 'Processing Type')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('DFA処理日数', 'DFA Processing Days')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('代行利用時の目安総期間', 'Est. Total Time (Proxy)')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('通常処理（Regular）', 'Regular Processing'),
                    t('10〜15営業日（約2週間）', '10–15 business days (approx. 2 weeks)'),
                    t('4〜6週間（書類取得含む）', '4–6 weeks (incl. document acquisition)'),
                  ],
                  [
                    t('エクスプレス処理（Express）', 'Express Processing'),
                    t('3〜5営業日', '3–5 business days'),
                    t('4〜5週間（書類取得含む）', '4–5 weeks (incl. document acquisition)'),
                  ],
                  [
                    t('予約待ち・繁忙期', 'High-demand / Busy Periods'),
                    t('予約取得に+1〜2週間', '+1–2 weeks for appointment'),
                    t('6〜10週間', '6–10 weeks'),
                  ],
                ].map(([type, days, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{type}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{days}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 mb-4">
            <strong>{t('当サービスの実績目安：', 'Our Typical Service Timeline: ')}</strong>
            {t(
              'ご依頼から書類の日本到着まで、通常4〜6週間が目安です。エクスプレス処理希望の場合は4〜5週間程度を見込んでいます。DFA予約の手配も代行するため、お急ぎの場合はお早めにご連絡ください。',
              'From your inquiry to document delivery at your address, the typical timeline is 4–6 weeks. With express processing, we estimate 4–5 weeks. We handle DFA appointment scheduling on your behalf — if you have a deadline, please contact us as early as possible.'
            )}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            <ArrowRight className="w-4 h-4" />
            {t('処理期間の詳細・無料見積もりはこちら', 'Ask about processing time & get a free quote')}
          </a>
        </section>

        {/* Section 4 */}
        <section id="ap-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 基本情報（費用・期間）', '4. Basic Info (Fees & Timeline)')}
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
                  [t('認証機関', 'Authentication Authority'), t('DFA（Department of Foreign Affairs／フィリピン外務省）', 'DFA (Department of Foreign Affairs, Philippines)')],
                  [t('DFA手数料', 'DFA Fee'), t('約100〜200ペソ（約250〜500円）／1通', 'Approx. 100–200 PHP (~$2–4 USD) per document')],
                  [t('処理期間（通常）', 'Processing Time (Standard)'), t('10〜15営業日（約2週間）', '10–15 business days (approx. 2 weeks)')],
                  [t('処理期間（エクスプレス）', 'Processing Time (Express)'), t('3〜5営業日（追加料金あり）', '3–5 business days (additional fee applies)')],
                  [t('代行取得期間の目安', 'Estimated Proxy Procurement Time'), t('書類取得〜アポスティーユ〜国際配送まで合計約4〜6週間', 'Approx. 4–6 weeks total from document acquisition to Apostille to delivery')],
                  [t('対象書類', 'Applicable Documents'), t('PSA書類・NBI Clearance・LTO書類 等', 'PSA documents, NBI Clearance, LTO documents, etc.')],
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

        {/* 提出先別チェック */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('提出先別 アポスティーユの必要性チェック', 'Apostille Necessity by Submission Destination')}
          </h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t(
              'アポスティーユが必要かどうかは提出先によって異なります。以下を参考にして、事前に提出先に確認してください。',
              'Whether Apostille is required depends on the submission destination. Use the table below as a reference and always confirm with the destination in advance.'
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('提出先', 'Submission Destination')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('アポスティーユの要否', 'Apostille Required?')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('日本の市区町村役場（婚姻届）', 'Marriage Registration (your country of residence)'),
                    t('CENOMAR・PSA出生証明書', 'CENOMAR, PSA Birth Certificate'),
                    t('不要なことが多い（要事前確認）', 'Varies by country — often not required (confirm in advance)'),
                  ],
                  [
                    t('日本の入管（配偶者ビザ）', 'Immigration Office — Spouse / Partner Visa'),
                    t('NBI Clearance', 'NBI Clearance'),
                    t('推奨（求められることが多い）', 'Often required — confirm with your local immigration office'),
                  ],
                  [
                    t('日本の入管（配偶者ビザ）', 'Immigration Office — Spouse / Partner Visa'),
                    t('CENOMAR・PSA', 'CENOMAR, PSA Birth Certificate'),
                    t('不要なことが多い（要確認）', 'Often not required (confirm in advance)'),
                  ],
                  [
                    t('フィリピン大使館（Report of Marriage等）', 'Philippine Embassy (Report of Marriage, etc.)'),
                    t('各種PSA書類', 'Various PSA documents'),
                    t('不要なことが多い（要確認）', 'Often not required (confirm with the embassy)'),
                  ],
                  [
                    t('海外の移民局・永住権申請', 'Overseas Permanent Residency / Migration Application'),
                    t('NBI Clearance・PSA書類', 'NBI Clearance, PSA documents'),
                    t('必要なことが多い（要件を確認）', 'Commonly required — confirm the specific requirements'),
                  ],
                  [
                    t('日本の雇用主・学校', 'Overseas Employer / Institution'),
                    t('NBI Clearance', 'NBI Clearance'),
                    t('雇用主・学校の指示に従う', 'Follow employer / institution instructions'),
                  ],
                ].map(([dest, doc, req], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-secondary border-b border-gray-100">{dest}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100 text-xs">{doc}</td>
                    <td className={`px-4 py-3 border-b border-gray-100 text-xs font-medium ${(req as string).includes('推奨') || (req as string).includes('必要') || (req as string).includes('Recommended') || (req as string).includes('required') ? 'text-amber-700' : 'text-green-700'}`}>{req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 上記はあくまで一般的な傾向です。提出先・担当者によって要件が異なるため、必ず事前に確認してください。',
              '* The above is a general guideline. Requirements vary by destination and officer, so always confirm in advance.'
            )}
          </p>
        </section>

        {/* 認証後の書類活用ガイド */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('アポスティーユ認証後の書類活用ガイド', 'Document Usage Guide After Apostille Authentication')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: t('書類を受け取ったら最初に確認すること', 'Things to Check When You Receive the Document'),
                items: [
                  t('アポスティーユスタンプ（シールまたは印）が元の書類に正しく付いているか', 'Verify the Apostille stamp (seal or mark) is properly attached to the original document'),
                  t('元の書類（PSA・NBI等）の情報（氏名・発行日）が正確か', 'Confirm the information (name, issuance date) on the original document (PSA, NBI, etc.) is accurate'),
                  t('アポスティーユの発行日・シリアルナンバーが読み取れるか', 'Ensure the Apostille issuance date and serial number are legible'),
                  t('書類が破損・汚れていないか（原本の価値が損なわれないよう保管する）', 'Check the document is not damaged or dirty (store carefully to preserve the original)'),
                ],
              },
              {
                title: t('提出時の注意点', 'Notes When Submitting'),
                items: [
                  t('提出先に「アポスティーユ付き書類」として提出することを明示する', 'Clearly state to the destination that you are submitting a document with Apostille'),
                  t('元の書類と一体になっているため、分離・切断しないこと', 'Do not separate or cut the document as it is integrated with the original'),
                  t('日本語翻訳が必要な場合は、アポスティーユ部分の翻訳も必要なことがある', 'If a Japanese translation is required, the Apostille section may also need to be translated'),
                  t('コピーを提出する場合はコピーの正確性を申告する場合がある（提出先の要件による）', 'If submitting a copy, you may need to declare its accuracy (depending on destination requirements)'),
                ],
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <h3 className="text-sm font-bold text-secondary mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                item: t('DFAアポスティーユ認証のみ（書類1通）', 'DFA Apostille Only (1 document)'),
                cost: t('約25,000円〜', 'From ¥25,000'),
                note: t('DFA手数料・国際郵便込み（書類は事前に取得済みの場合）', 'Includes DFA fee & international shipping (if document already obtained)'),
              },
              {
                item: t('NBI Clearance + DFAアポスティーユ セット', 'NBI Clearance + DFA Apostille Set'),
                cost: t('約65,000円〜', 'From ¥65,000'),
                note: t('NBI取得からアポスティーユまで一括', 'All-inclusive from NBI acquisition to Apostille'),
              },
              {
                item: t('CENOMAR + DFAアポスティーユ セット', 'CENOMAR + DFA Apostille Set'),
                cost: t('約65,000円〜', 'From ¥65,000'),
                note: t('CENOMAR取得からアポスティーユまで一括', 'All-inclusive from CENOMAR acquisition to Apostille'),
              },
              {
                item: t('複数書類まとめて（2通目以降）', 'Multiple Documents (2nd and beyond)'),
                cost: t('1通あたり+15,000円〜', '+¥15,000 per additional document'),
                note: t('まとめて依頼で効率的', 'More efficient when bundled'),
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
              '※ 費用は書類の種類・通数・エクスプレス処理の有無によって変動します。詳細はお問い合わせください。',
              '* Fees vary depending on document type, quantity, and whether express processing is selected. Please contact us for details.'
            )}
          </p>
        </section>

        {/* Section 5 */}
        <section id="ap-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 注意点', '5. Important Notes')}
          </h2>
          <div className="space-y-4">
            {[
              {
                title: t('書類の有効期限に注意', 'Check Document Expiration Dates'),
                body: t(
                  'アポスティーユを付ける前に書類自体の有効期限が切れていないか確認してください。特にNBI Clearanceは1年、CENOMARは6ヶ月が目安です。',
                  'Before applying for Apostille, ensure the document itself has not expired. NBI Clearance is valid for 1 year and CENOMAR for approximately 6 months.'
                ),
              },
              {
                title: t('アポスティーユが必要かどうか提出先に確認する', 'Confirm Apostille Necessity with the Submission Destination'),
                body: t(
                  '日本の婚姻届提出にはアポスティーユ不要なことが多いです。入管・大使館など提出先によって異なるため、必ず事前確認をしてください。',
                  'Apostille is not always required — it depends on the country and specific institution. Marriage registration often does not require it, but immigration offices and visa applications frequently do. Always confirm with your destination before proceeding.'
                ),
              },
              {
                title: t('書類はオリジナルが必要', 'Original Documents Are Required'),
                body: t(
                  'アポスティーユはコピーではなく、発行機関が発行したオリジナル書類に対して行います。',
                  'Apostille is applied to original documents issued by the issuing authority, not copies.'
                ),
              },
              {
                title: t('DFA認証とアポスティーユの混同に注意', 'Avoid Confusing DFA Authentication with Apostille'),
                body: t(
                  'フィリピン書類を日本で使う場合は「アポスティーユ」で対応できます。「DFA Authentication（DFA公証）」は別制度（ハーグ条約非加盟国向け）です。',
                  'For Philippine documents used in Hague Convention member countries (Japan, US, Canada, Australia, most of Europe, etc.), "Apostille" is the correct procedure. "DFA Authentication" is a separate process only for non-Hague countries. Make sure to request the right one.'
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
          <h2 className="text-xl font-bold mb-3">{t('アポスティーユ認証、まるごとお任せ', 'Leave Apostille Authentication to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              'PSA・NBI書類の取得からDFAアポスティーユまで一括代行。日本語でサポートします。',
              'Full proxy service from PSA/NBI document acquisition to DFA Apostille. We support you in English.'
            )}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="ap-6" className="mb-10">
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
              { to: t('/ja/cenomar', '/cenomar'), title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法・費用・期間', 'How to obtain CENOMAR, fees & timeline') },
              { to: t('/ja/nbi-clearance', '/nbi-clearance'), title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'NBI HIT issues explained & acquisition steps') },
              { to: t('/ja/haigusha-visa', '/spouse-visa-documents'), title: t('配偶者ビザ書類ガイド', 'Spouse Visa Documents Guide'), desc: t('配偶者ビザに必要なフィリピン書類一覧', 'List of Philippine documents for spouse visa') },
              { to: t('/ja/kokusai-kekkon-guide', '/international-marriage-guide'), title: t('フィリピン国際結婚ガイド', 'Philippines International Marriage Guide'), desc: t('手続き全体の流れ・必要書類', 'Overall process flow & required documents') },
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
                'アポスティーユ認証の代行・必要書類の確認など、お気軽にご相談ください。',
                'Feel free to consult us about Apostille proxy services, required documents, and more.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【アポスティーユガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/apostille-guide/" />
              <div>
                <label htmlFor="ap-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="ap-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="ap-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="ap-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ap-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="ap-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('アポスティーユ認証の代行・必要書類についてお気軽にどうぞ。', 'Please feel free to ask about Apostille proxy services or required documents.')} />
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
