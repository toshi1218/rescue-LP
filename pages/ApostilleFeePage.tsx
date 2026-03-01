import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, Info, FileText, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ApostilleFeePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('DFAアポスティーユ 料金【2026年最新】公式費用・代行費用・エクスプレスの違い｜フィリピン書類センター', 'DFA Apostille Fees [2026]: Official Costs & Service Pricing'),
    t('フィリピンDFAアポスティーユ認証の公式料金・代行費用・エクスプレス追加料金を解説。CENOMAR・PSA・NBI書類ごとの費用目安も掲載。', 'Official DFA Apostille fees and retrieval service pricing. Includes express surcharges and cost estimates for CENOMAR, PSA, and NBI documents.')
  );

  const faqs = [
    {
      q: t('DFAアポスティーユの公式費用はいくらですか？', 'What is the official DFA Apostille fee?'),
      a: t(
        'DFA（フィリピン外務省）のアポスティーユ認証の公式費用は、通常処理でPHP 100（1通あたり）、エクスプレス処理でPHP 200（1通あたり）です。ただし、予約システム手数料やDFA公認カウンターの取り扱い手数料が別途かかる場合があります。',
        'The official DFA (Department of Foreign Affairs) Apostille fee is PHP 100 per document (standard processing) or PHP 200 per document (express processing). However, additional booking system fees or handling fees at DFA-accredited counters may apply.'
      ),
    },
    {
      q: t('エクスプレス申請は通常申請と何が違いますか？', 'What is the difference between express and standard DFA Apostille?'),
      a: t(
        '通常処理（Standard）は10〜15営業日程度かかるのに対し、エクスプレス処理（Express）は3〜5営業日で完了します。エクスプレスは費用がPHP 100追加になりますが、急ぎの手続きには有効です。ただしエクスプレス枠は予約が埋まりやすいため、早めの予約が必要です。',
        'Standard processing takes about 10–15 business days, while express processing is completed in 3–5 business days. Express costs an additional PHP 100, making it valuable for urgent procedures. However, express slots fill up quickly, so early booking is essential.'
      ),
    },
    {
      q: t('代行サービスを使うとDFAアポスティーユの総費用はいくらになりますか？', 'What is the total cost for DFA Apostille using a proxy service?'),
      a: t(
        '当センターの場合、DFAアポスティーユ単体の代行費用はUS$80〜（公式DFA費用・現地手数料・国際配送込み）です。PSA・CENOMAR・NBI書類の取得代行とセットで依頼する場合はUS$299〜（セットプラン）となり、お得です。',
        'At our center, DFA Apostille proxy starts at US$80 (including official DFA fee, local handling, and international shipping). When bundled with PSA/CENOMAR/NBI proxy acquisition, the set plan starts at US$299, which is more cost-effective.'
      ),
    },
    {
      q: t('複数書類（CENOMAR・PSA・NBI）をまとめてアポスティーユ申請できますか？', 'Can multiple documents (CENOMAR, PSA, NBI) be submitted for Apostille together?'),
      a: t(
        'はい、DFAへの申請は複数書類をまとめて提出できます。代行サービスでも複数書類をまとめてアポスティーユ申請することが可能です。書類の種類・枚数によって費用が変わりますので、お問い合わせください。',
        'Yes, multiple documents can be submitted to DFA together for Apostille. Our proxy service also handles multiple documents in a single Apostille application. Costs vary by document type and quantity — please contact us for details.'
      ),
    },
    {
      q: t('DFAアポスティーユは自分でフィリピンに行かないと取得できませんか？', 'Do I need to travel to the Philippines to obtain DFA Apostille?'),
      a: t(
        'DFAへの申請は本人が行く必要はなく、代理人（代行サービス）が申請できます。日本在住の方でも代行サービスを通じてDFAアポスティーユを取得することが可能です。',
        'Applicants do not need to appear in person at DFA — a representative (proxy service) can file on their behalf. Residents in Japan can obtain DFA Apostille through a proxy service.'
      ),
    },
    {
      q: t('アポスティーユが必要な書類の種類は？', 'What types of documents can receive DFA Apostille?'),
      a: t(
        'DFAアポスティーユ認証の対象書類は主にPSA発行の出生・婚姻・死亡証明書、CENOMAR、NBI Clearance、LTO書類（運転記録）などです。これらの「フィリピン公文書」がアポスティーユ認証の対象となります。私文書の場合は公証（Notarization）が先に必要です。',
        'Documents eligible for DFA Apostille include PSA-issued birth, marriage, and death certificates, CENOMAR, NBI Clearance, and LTO documents (driver records), among others. These "Philippine public documents" are eligible. Private documents require notarization first.'
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
          { '@type': 'ListItem', position: 2, name: 'DFA Apostille', item: 'https://ph-document.com/apostille' },
          { '@type': 'ListItem', position: 3, name: 'DFA Apostille Fee', item: 'https://ph-document.com/apostille-fee' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/apostille-fee/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: 'DFA Apostille Fee Philippines 2026 — Official Rates, Express vs Standard & Proxy Pricing',
        description: 'Complete DFA Apostille fee guide for 2026: PHP 100 standard vs PHP 200 express, proxy service pricing, and total cost estimates by document type.',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/apostille-fee/',
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
          <Link to={t('/ja/apostille', '/apostille')} className="hover:text-secondary">{t('DFAアポスティーユ', 'DFA Apostille')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('料金', 'Fee')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'DFAアポスティーユ料金【2026年最新】公式費用・代行費用・エクスプレスの違い',
            'DFA Apostille Fee 2026 — Official Rates, Express vs Standard & Proxy Pricing'
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
                <li>✓ {t('公式費用：PHP 100 /通（通常）・PHP 200 /通（エクスプレス）', 'Official fee: PHP 100/doc (standard) · PHP 200/doc (express)')}</li>
                <li>✓ {t('代行利用時の総費用：US$80〜（1通・国際配送込み）', 'Proxy service total: from US$80/doc (incl. international shipping)')}</li>
                <li>✓ {t('PSA/CENOMAR/NBIとのセットプランがお得', 'Set plans with PSA/CENOMAR/NBI are more cost-effective')}</li>
                <li>✓ {t('エクスプレス枠は予約制・早めの手配が必要', 'Express slots are by appointment — book early')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('DFA公式料金（通常 vs エクスプレス）', 'Official DFA Fee (Standard vs Express)'),
              t('書類別の費用目安', 'Cost Estimates by Document Type'),
              t('代行サービス利用時の総費用', 'Total Cost with Proxy Service'),
              t('費用比較まとめ表', 'Cost Comparison Summary Table'),
              t('費用を抑えるポイント', 'Tips to Reduce Costs'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#af-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1: Official fees */}
        <section id="af-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. DFA公式料金（通常 vs エクスプレス）', '1. Official DFA Fee (Standard vs Express)')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            {t(
              'DFA（フィリピン外務省）が設定するアポスティーユ認証の公式料金は以下の通りです。申請方法（通常・エクスプレス）によって費用と処理期間が異なります。',
              'The official Apostille authentication fee set by the DFA (Department of Foreign Affairs) is as follows. Costs and processing times differ by application method (standard vs express).'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <p className="text-xs font-bold text-gray-400 mb-1">{t('通常処理（Regular）', 'Standard Processing')}</p>
              <p className="text-2xl font-bold text-secondary mb-1">PHP 100</p>
              <p className="text-xs text-gray-500 mb-3">{t('1通あたり', 'per document')}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span>{t('処理期間：10〜15営業日', 'Processing: 10–15 business days')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>{t('費用は抑えられるが時間がかかる', 'More affordable but slower')}</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 shadow-card">
              <p className="text-xs font-bold text-primary mb-1">{t('エクスプレス処理（Express）', 'Express Processing')}</p>
              <p className="text-2xl font-bold text-secondary mb-1">PHP 200</p>
              <p className="text-xs text-gray-500 mb-3">{t('1通あたり', 'per document')}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>{t('処理期間：3〜5営業日', 'Processing: 3–5 business days')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span>{t('急ぎの場合に有効・枠が埋まりやすい', 'Great for urgent cases — slots fill fast')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">
              {t(
                '上記はDFA公式料金です。DFAへの申請には、DFA認定のパートナーカウンターやオンライン予約システムを利用するため、取り扱い手数料（PHP 50〜150程度）が別途かかる場合があります。',
                'The above are official DFA rates. DFA applications require use of DFA-accredited partner counters or the online booking system, which may charge additional handling fees (around PHP 50–150).'
              )}
            </p>
          </div>
        </section>

        {/* Section 2: By document type */}
        <section id="af-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 書類別の費用目安', '2. Cost Estimates by Document Type')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('書類の種類', 'Document Type')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('DFA公式費用', 'Official DFA Fee')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('CENOMAR（独身証明書）', 'CENOMAR (Certificate of No Marriage)'),
                    'PHP 100〜200',
                    t('通常/エクスプレスで変動', 'Varies: standard/express'),
                  ],
                  [
                    t('PSA出生証明書', 'PSA Birth Certificate'),
                    'PHP 100〜200',
                    t('通常/エクスプレスで変動', 'Varies: standard/express'),
                  ],
                  [
                    t('NBI Clearance', 'NBI Clearance'),
                    'PHP 100〜200',
                    t('NBI取得後にDFA申請', 'Apply to DFA after obtaining NBI'),
                  ],
                  [
                    t('PSA婚姻証明書', 'PSA Marriage Certificate'),
                    'PHP 100〜200',
                    t('通常/エクスプレスで変動', 'Varies: standard/express'),
                  ],
                  [
                    t('LTO書類（運転記録）', 'LTO Documents (Driver Record)'),
                    'PHP 100〜200',
                    t('LTO書類取得後にDFA申請', 'Apply to DFA after obtaining LTO docs'),
                  ],
                ].map(([doc, fee, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{doc}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{fee}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 2026年2月現在の公式料金です。DFAの料金改定があった場合は変動することがあります。',
              '* Official fees as of February 2026. Subject to change if DFA revises its fee schedule.'
            )}
          </p>
        </section>

        {/* Section 3: Proxy service costs */}
        <section id="af-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 代行サービス利用時の総費用', '3. Total Cost with Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '代行サービスを利用する場合、DFA公式費用・現地手数料・予約費用・国際配送費がすべて込みの価格となります。日本在住の方はフィリピンに行かずにアポスティーユを取得できます。',
              'With a proxy service, all costs are bundled: DFA official fee, local handling, booking fees, and international shipping. Japan-based clients can obtain Apostille without traveling to the Philippines.'
            )}
          </p>
          <div className="grid gap-3 mb-5">
            {[
              {
                item: t('DFAアポスティーユ代行（1通・通常処理）', 'DFA Apostille Proxy (1 doc, standard)'),
                cost: 'US$80〜',
                note: t('DFA公式費用・現地手数料・国際配送込み', 'Incl. DFA fee, local handling & int\'l shipping'),
              },
              {
                item: t('DFAアポスティーユ代行（1通・エクスプレス）', 'DFA Apostille Proxy (1 doc, express)'),
                cost: 'US$110〜',
                note: t('エクスプレス追加料金込み', 'Incl. express surcharge'),
              },
              {
                item: t('CENOMAR取得＋DFAアポスティーユ セット', 'CENOMAR + DFA Apostille Set'),
                cost: 'US$349〜',
                note: t('CENOMAR取得代行込み', 'Incl. CENOMAR proxy acquisition'),
              },
              {
                item: t('PSA出生証明書＋DFAアポスティーユ セット', 'PSA Birth Cert + DFA Apostille Set'),
                cost: 'US$299〜',
                note: t('PSA取得代行込み', 'Incl. PSA proxy acquisition'),
              },
              {
                item: t('複数書類セット（別途お見積もり）', 'Multi-document Set (quote upon request)'),
                cost: t('お問い合わせ', 'Inquire'),
                note: t('2通以上のまとめ申請で割安', 'Discounted for 2+ documents bundled'),
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
        </section>

        {/* Section 4: Comparison table */}
        <section id="af-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 費用比較まとめ表', '4. Cost Comparison Summary Table')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('申請方法', 'Application Method')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('費用目安', 'Estimated Cost')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('処理期間', 'Processing Time')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('こんな人に', 'Best For')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('DFA窓口・通常（自己申請）', 'DFA Counter Standard (Self)'),
                    'PHP 100+手数料',
                    t('10〜15営業日', '10–15 business days'),
                    t('フィリピン在住者', 'Philippines residents'),
                  ],
                  [
                    t('DFA窓口・エクスプレス（自己申請）', 'DFA Counter Express (Self)'),
                    'PHP 200+手数料',
                    t('3〜5営業日', '3–5 business days'),
                    t('フィリピン在住・急ぎ', 'Philippines residents, urgent'),
                  ],
                  [
                    t('代行サービス（通常処理）', 'Proxy Service (Standard)'),
                    'US$80〜（全込み）',
                    t('4〜6週間（配送含む）', '4–6 weeks (incl. shipping)'),
                    t('日本在住・余裕あり', 'Japan residents, flexible timeline'),
                  ],
                  [
                    t('代行サービス（エクスプレス）', 'Proxy Service (Express)'),
                    'US$110〜（全込み）',
                    t('4〜5週間（配送含む）', '4–5 weeks (incl. shipping)'),
                    t('日本在住・急ぎ', 'Japan residents, urgent'),
                  ],
                ].map(([method, cost, time, best], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{method}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{cost}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-xs text-gray-600 border-b border-gray-100">{time}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Cost-saving tips */}
        <section id="af-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 費用を抑えるポイント', '5. Tips to Reduce Costs')}
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('複数書類をまとめて申請する', 'Bundle Multiple Documents Together'),
                body: t(
                  'CENOMAR・PSA出生証明書・NBI Clearanceなど複数のアポスティーユが必要な場合は、まとめて申請することで国際配送費を節約できます。当センターのセットプランは個別申請より割安です。',
                  'If you need Apostille for multiple documents (CENOMAR, PSA birth certificate, NBI Clearance, etc.), bundling them in one application saves on international shipping. Our set plans are more affordable than individual applications.'
                ),
              },
              {
                num: '02',
                title: t('エクスプレスが本当に必要かを確認する', 'Confirm Whether Express Is Truly Needed'),
                body: t(
                  '急ぎでなければ通常処理でも問題ありません。手続き全体のスケジュールを把握した上で、エクスプレスが必要かどうかを判断してください。代行サービスでは最適な申請方法をご案内します。',
                  'If not urgent, standard processing is sufficient. Assess whether express is truly needed by understanding your overall procedure timeline. Our proxy service will advise on the optimal approach.'
                ),
              },
              {
                num: '03',
                title: t('書類取得とアポスティーユをセットで依頼する', 'Order Document Acquisition and Apostille Together'),
                body: t(
                  'PSA・CENOMAR・NBI書類の取得代行とDFAアポスティーユをセットで依頼することで、個別に依頼するより費用と時間を節約できます。セットプランを活用してください。',
                  'Ordering document acquisition (PSA, CENOMAR, NBI) and DFA Apostille together as a set saves both cost and time compared to separate orders. Take advantage of our set plans.'
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

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('DFAアポスティーユの代行依頼・お見積もり', 'DFA Apostille Proxy & Quote Request')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('書類の種類・通数・エクスプレス要否をお知らせいただければ、最適なプランをご案内します。', 'Tell us the document types, quantity, and whether express is needed — we will recommend the best plan.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="af-6" className="mb-10">
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

        {/* Related Guides */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/apostille', '/apostille'),
                title: t('DFAアポスティーユガイド（基本）', 'DFA Apostille Guide (Basics)'),
                desc: t('アポスティーユとは・対象書類・手続き', 'What Apostille is, eligible documents, process'),
              },
              {
                to: t('/ja/apostille-shori-kikan', '/apostille-processing-time'),
                title: t('DFAアポスティーユ処理期間', 'DFA Apostille Processing Time'),
                desc: t('通常・エクスプレスの日数目安', 'Standard & express processing timelines'),
              },
              {
                to: t('/ja/cenomar-apostille', '/cenomar-apostille'),
                title: t('CENOMARにアポスティーユは必要？', 'Does CENOMAR Need Apostille?'),
                desc: t('用途別の結論を解説', 'Answer by use case'),
              },
              {
                to: t('/ja/psa-shussei-cost', '/psa-birth-certificate-cost'),
                title: t('PSA出生証明書の費用', 'PSA Birth Certificate Cost'),
                desc: t('PSA費用・代行費用の詳細', 'PSA & proxy service cost details'),
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
                'DFAアポスティーユの料金・代行依頼について、お気軽にご相談ください。',
                'Feel free to contact us about DFA Apostille fees and proxy service requests.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【DFAアポスティーユ料金ページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/apostille-fee" />
              <div>
                <label htmlFor="af-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="af-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="af-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="af-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="af-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="af-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('書類の種類（CENOMAR・PSA・NBI等）・通数・用途（ビザ申請・国際結婚等）・急ぎかどうかをお知らせください。', 'Please share document types (CENOMAR, PSA, NBI, etc.), quantity, purpose (visa, marriage, etc.), and urgency.')} />
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
