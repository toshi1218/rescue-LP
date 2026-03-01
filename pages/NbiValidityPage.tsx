import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, Info, AlertTriangle, Clock, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function NbiValidityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('NBI Clearanceの有効期限は？【2026年版】1年ルールと用途別の注意点｜フィリピン書類センター', 'NBI Clearance Validity: How Long Is It Valid? [2026]'),
    t('NBI Clearanceの有効期限は発行から1年。ただし配偶者ビザ・国際結婚など用途によっては6ヶ月以内が実務的な基準。取得タイミングの目安を解説。', 'NBI Clearance is valid for 1 year from issuance. Learn how validity applies to spouse visa and international marriage use cases.')
  );

  const faqs = [
    {
      q: t('NBI Clearanceの有効期限は何年ですか？', 'How long is NBI Clearance valid?'),
      a: t(
        'NBI Clearanceの公式有効期限は発行日から1年間です。ただし、提出先（フィリピン大使館・日本の入管・雇用主等）によっては「発行から6ヶ月以内」を求めることがあります。用途に応じた最適なタイミングで取得することが重要です。',
        'NBI Clearance has an official validity of 1 year from the date of issuance. However, submitting institutions (Philippine Embassy, Japanese immigration, employers, etc.) may require documents issued "within the last 6 months." Obtaining at the right time for your specific purpose is important.'
      ),
    },
    {
      q: t('NBI Clearanceを早く取りすぎると問題がありますか？', 'Is there a problem with obtaining NBI Clearance too early?'),
      a: t(
        'はい、問題になる場合があります。例えば国際結婚や配偶者ビザの手続きで「6ヶ月以内」の書類が求められる場合、1年有効期限内でも使用できないことがあります。手続き全体のスケジュールを把握し、使用予定日から逆算して取得を開始することを推奨します。',
        'Yes, it can be an issue. For example, when international marriage or spouse visa procedures require documents "within 6 months," a clearance still within its 1-year validity may not be accepted. We recommend understanding your overall procedure timeline and starting acquisition by working backward from your planned use date.'
      ),
    },
    {
      q: t('NBI Clearanceはフィリピンの雇用主に提出する場合も1年有効ですか？', 'Is NBI Clearance valid for 1 year when submitted to Philippine employers?'),
      a: t(
        'フィリピン国内の雇用目的（OFWのOEC取得、フィリピン企業への就職等）では、基本的に発行から1年以内のNBI Clearanceが受け付けられます。ただし雇用主・機関によって独自の要件を設けている場合があります。',
        'For employment purposes within the Philippines (OFW OEC acquisition, employment at Philippine companies, etc.), NBI Clearance issued within 1 year is generally accepted. However, individual employers or institutions may set their own requirements.'
      ),
    },
    {
      q: t('NBI Clearanceの有効期限が切れた場合、再取得は必要ですか？', 'If NBI Clearance expires, do I need to reapply?'),
      a: t(
        'はい、有効期限が切れた場合は再取得が必要です。再取得も初回申請と同じ手順で行います。代行サービスでは再取得にも対応しています。なお、以前HITが出た方は再申請でも同様のHITが発生する可能性がありますので、余裕をもって手配してください。',
        'Yes, reapplication is required after expiration. The process is the same as the initial application. Our proxy service handles re-applications as well. Note: if you previously received a HIT, the same may occur on reapplication, so allow extra time.'
      ),
    },
    {
      q: t('DFAアポスティーユ込みのNBI Clearanceの有効期限はいつから数えますか？', 'When does the NBI Clearance validity start for a document with DFA Apostille?'),
      a: t(
        'NBI Clearanceの有効期限はNBI発行日から1年間です。DFAアポスティーユ認証を取得しても、NBI Clearanceの有効期限は変わりません。DFAアポスティーユ自体には有効期限はありませんが、提出先がNBI発行日を基準に新しさを確認します。',
        'NBI Clearance validity is 1 year from the NBI issuance date, regardless of DFA Apostille authentication. DFA Apostille itself has no expiration date, but submitting institutions check the recency based on the NBI issuance date.'
      ),
    },
    {
      q: t('帰化申請でNBI Clearanceの有効期限はどのくらい必要ですか？', 'What validity period is required for NBI Clearance in naturalization applications?'),
      a: t(
        '法務局（帰化申請）の場合、管轄の法務局によって異なりますが「発行から3ヶ月以内」を求める場合があります。通常の1年有効期限より厳しい要件のため、帰化申請予定の方は必ず管轄の法務局に確認してください。',
        'For Legal Affairs Bureau (naturalization) applications, requirements vary by jurisdiction but some require NBI Clearance issued "within 3 months." This is stricter than the standard 1-year validity, so always confirm with your specific Legal Affairs Bureau.'
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
          { '@type': 'ListItem', position: 2, name: 'NBI Clearance', item: 'https://ph-document.com/nbi-clearance' },
          { '@type': 'ListItem', position: 3, name: 'NBI Clearance Validity', item: 'https://ph-document.com/nbi-validity' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/nbi-validity/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: 'NBI Clearance Validity Period 2026 — 1-Year Rule, Institutional Requirements & Timing Guide',
        description: 'NBI Clearance is valid for 1 year, but many institutions require it within 6 months. Learn the rules by use case and the ideal timing for obtaining yours.',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/nbi-validity/',
        inLanguage: 'en',
        datePublished: '2025-12-01',
        dateModified: '2026-02-28',
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
          'https://www.nbi.gov.ph',
          'https://clearance.nbi.gov.ph',
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
          <Link to={t('/ja/nbi-clearance', '/nbi-clearance')} className="hover:text-secondary">{t('NBI Clearance', 'NBI Clearance')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('有効期限', 'Validity Period')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'NBI Clearanceの有効期限は？【2026年版】1年ルールと用途別の注意点',
            'How Long Is NBI Clearance Valid? [2026] The 1-Year Rule & Use Case Requirements'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月28日 ｜ 株式会社IGRS', 'Last updated: February 28, 2026 | IGRS Inc.')}</p>

        {/* Summary box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-blue-800 mb-1">{t('このページの結論（要点）', 'Key Summary')}</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ {t('NBI Clearanceの公式有効期限は発行から1年', 'Official validity: 1 year from issuance')}</li>
                <li>✓ {t('多くの機関は「発行から6ヶ月以内」を実務的な基準とする', 'Most institutions use "within 6 months" as a practical standard')}</li>
                <li>✓ {t('帰化申請では「3ヶ月以内」を求める法務局もある', 'Some Legal Affairs Bureaus require "within 3 months" for naturalization')}</li>
                <li>✓ {t('使用予定日の2〜3ヶ月前に取得開始が理想', 'Ideal to start acquisition 2–3 months before planned use')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('公式有効期限：発行から1年', 'Official Validity: 1 Year from Issuance'),
              t('実務的な有効期限：機関別の要件', 'Practical Validity: Requirements by Institution'),
              t('用途別の有効期限まとめ', 'Validity Summary by Use Case'),
              t('取得タイミングの目安', 'Ideal Timing for Acquisition'),
              t('期限切れ・再取得について', 'About Expired Documents & Re-acquisition'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#nv-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="nv-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. 公式有効期限：発行から1年', '1. Official Validity: 1 Year from Issuance')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            {t(
              'NBI（国家捜査局）が発行するNBI Clearanceの公式有効期限は、発行日から1年間です。書類の右上または下部に記載された発行日（Date Issued）から1年が経過すると、書類は期限切れとなります。',
              'NBI Clearance issued by the NBI (National Bureau of Investigation) has an official validity of 1 year from the date of issuance. The document expires 1 year after the Date Issued printed on the upper-right or lower section of the document.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
              <p className="text-sm font-bold text-green-800 mb-1">{t('公式有効期限', 'Official Validity')}</p>
              <p className="text-2xl font-bold text-green-700 mb-1">1年</p>
              <p className="text-xs text-green-700">{t('NBI発行日から起算', 'Counted from NBI issuance date')}</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
              <p className="text-sm font-bold text-amber-800 mb-1">{t('実務的な目安', 'Practical Standard')}</p>
              <p className="text-2xl font-bold text-amber-700 mb-1">6ヶ月</p>
              <p className="text-xs text-amber-700">{t('多くの機関が要求する実務基準', 'Practical standard required by most institutions')}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            {t(
              '公式には1年有効ですが、フィリピン大使館・日本の入管・法務局などは「発行から6ヶ月以内」または「3ヶ月以内」の書類を求めることがあります。用途に応じた最新の要件を必ず確認してください。',
              'Although officially valid for 1 year, the Philippine Embassy, Japanese immigration authorities, and Legal Affairs Bureaus may require documents issued "within the last 6 months" or "within 3 months." Always confirm the latest requirements for your specific purpose.'
            )}
          </p>
        </section>

        {/* Section 2 */}
        <section id="nv-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 実務的な有効期限：機関別の要件', '2. Practical Validity: Requirements by Institution')}
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: '🏛️',
                title: t('フィリピン大使館（東京）', 'Philippine Embassy (Tokyo)'),
                body: t(
                  'LCCM申請（国際結婚の予備許可）や各種申請書類として提出するNBI Clearanceには「発行から6ヶ月以内」の要件が適用されることがあります。具体的な要件は申請種別により異なりますので、事前に大使館ホームページまたは窓口でご確認ください。',
                  'For LCCM applications (preliminary marriage permit) and other submissions at the Philippine Embassy, "within 6 months of issuance" may be required. Requirements vary by application type — confirm with the embassy website or counter in advance.'
                ),
              },
              {
                icon: '🏢',
                title: t('日本の入管（出入国在留管理局）', 'Japanese Immigration (Immigration Services Agency)'),
                body: t(
                  '配偶者ビザや帰化申請で提出するNBI Clearanceは「新しいもの」を求められます。一般的な目安として6ヶ月以内が推奨されますが、担当官の判断で異なる場合もあります。行政書士に相談の上、申請前に確認することをおすすめします。',
                  'For spouse visa or naturalization applications, immigration authorities expect "recent" NBI Clearance. A general guideline of within 6 months is recommended, though individual officers may apply different standards. Consult an administrative scrivener and confirm before applying.'
                ),
              },
              {
                icon: '⚖️',
                title: t('法務局（帰化申請）', 'Legal Affairs Bureau (Naturalization)'),
                body: t(
                  '管轄する法務局によっては「発行から3ヶ月以内」という要件を設けていることがあります。1年有効期限内であっても、3ヶ月を超えると受け付けない法務局もあります。必ず申請前に管轄の法務局に確認してください。',
                  'Some Legal Affairs Bureaus require NBI Clearance issued "within 3 months." Even if within the 1-year validity, bureaus may reject documents older than 3 months. Always confirm with your specific Legal Affairs Bureau before applying.'
                ),
              },
              {
                icon: '💼',
                title: t('フィリピン・海外の雇用主', 'Philippine / Overseas Employers'),
                body: t(
                  'OFW（海外出稼ぎ労働者）のOEC取得や雇用申請では、発行から1年以内のNBI Clearanceが原則受け付けられます。ただし雇用主・エージェンシーによって独自の期限を設ける場合があります。',
                  'For OFW OEC applications and overseas employment, NBI Clearance within 1 year of issuance is generally accepted. However, individual employers or agencies may set their own stricter requirements.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="nv-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 用途別の有効期限まとめ', '3. Validity Summary by Use Case')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('用途', 'Use Case')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('推奨有効期限', 'Recommended Validity')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('国際結婚（LCCM）', 'International Marriage (LCCM)'),
                    t('6ヶ月以内', 'Within 6 months'),
                    t('フィリピン大使館の要件に準ずる', 'Per Philippine Embassy requirement'),
                  ],
                  [
                    t('配偶者ビザ申請', 'Spouse Visa Application'),
                    t('6ヶ月以内（推奨）', 'Within 6 months (recommended)'),
                    t('担当官の判断による', 'Subject to officer discretion'),
                  ],
                  [
                    t('帰化申請（法務局）', 'Naturalization (Legal Affairs Bureau)'),
                    t('3〜6ヶ月以内', 'Within 3–6 months'),
                    t('管轄法務局に要確認', 'Confirm with local bureau'),
                  ],
                  [
                    t('フィリピン国内就労・OEC', 'Philippines Employment / OEC'),
                    t('1年以内', 'Within 1 year'),
                    t('公式有効期限内', 'Within official validity'),
                  ],
                  [
                    t('米国USCIS・K-1ビザ', 'US USCIS / K-1 Visa'),
                    t('6ヶ月以内（推奨）', 'Within 6 months (recommended)'),
                    t('申請先ごとに確認', 'Confirm per application'),
                  ],
                ].map(([use, period, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{use}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{period}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 上記は2026年2月現在の一般的な目安です。必ず申請先に事前確認してください。',
              '* The above reflects general guidelines as of February 2026. Always confirm with the relevant authority before submitting.'
            )}
          </p>
        </section>

        {/* Section 4 */}
        <section id="nv-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得タイミングの目安', '4. Ideal Timing for Acquisition')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '用途に応じた有効期限を守りながら、書類が手元に届くまでのリードタイムを考慮してスケジュールを立てることが重要です。',
              'It is important to plan your schedule considering both the required validity period and the lead time needed to receive the document.'
            )}
          </p>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card mb-5">
            <h3 className="text-sm font-bold text-secondary mb-4">{t('推奨タイムライン（代行サービス利用時）', 'Recommended Timeline (When Using Proxy Service)')}</h3>
            <div className="space-y-4">
              {[
                {
                  timing: t('使用予定日の3〜4ヶ月前', '3–4 months before planned use'),
                  action: t('代行サービスへの依頼を開始', 'Start proxy service request'),
                  color: 'bg-primary/10 text-primary',
                },
                {
                  timing: t('使用予定日の2〜3ヶ月前', '2–3 months before planned use'),
                  action: t('NBI Clearanceが手元に届く目安', 'Expected arrival of NBI Clearance'),
                  color: 'bg-green-100 text-green-700',
                },
                {
                  timing: t('使用予定日の1〜2ヶ月前', '1–2 months before planned use'),
                  action: t('DFAアポスティーユが必要な場合は取得完了', 'Complete DFA Apostille if required'),
                  color: 'bg-blue-100 text-blue-700',
                },
                {
                  timing: t('使用予定日', 'Planned use date'),
                  action: t('書類を提出（有効期限・機関要件を確認）', 'Submit documents (confirm validity & institution requirements)'),
                  color: 'bg-secondary/10 text-secondary',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-1 ${item.color}`}>{item.timing}</span>
                    <p className="text-sm text-gray-700">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                {t(
                  'NBI HITが発生した場合は通常より2〜4週間追加でかかります。よくある名前（Jose・Maria等）の方は余裕のあるスケジュールを組んでください。',
                  'If an NBI HIT occurs, expect 2–4 additional weeks. Those with common names (Jose, Maria, etc.) should plan with extra buffer time.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="nv-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 期限切れ・再取得について', '5. About Expired Documents & Re-acquisition')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('再取得は初回と同じ手順', 'Re-acquisition follows the same process'),
                body: t(
                  'NBI Clearanceの再取得（期限切れ・有効期限切迫による）は、初回申請と同じ手順で行います。NBIのオンライン予約システムから再申請できます。代行サービスでも対応しています。',
                  'Re-acquiring NBI Clearance (due to expiration or approaching expiry) follows the same procedure as the initial application. You can reapply through the NBI online scheduling system. Our proxy service handles this as well.'
                ),
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />,
                title: t('HIT経験者は再申請でも注意が必要', 'Previous HIT cases require extra caution on reapplication'),
                body: t(
                  '以前NBI HITが発生したことがある方は、再申請でも同じHITが発生する可能性があります。HIT解決後でも「名前の一致」は残るためです。余裕をもったスケジュールで再申請してください。',
                  'Those who previously received an NBI HIT may encounter the same HIT on reapplication, as the name match in the system persists even after resolution. Plan with ample lead time when reapplying.'
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
            {t('NBI Clearanceの取得、当センターにお任せください', 'Leave Your NBI Clearance Acquisition to Us')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('取得タイミングのご相談からDFAアポスティーユまで一括サポート。', 'From timing advice to DFA Apostille — comprehensive support.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="nv-6" className="mb-10">
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
                to: t('/ja/nbi-clearance', '/nbi-clearance'),
                title: t('NBI Clearanceガイド（基本）', 'NBI Clearance Guide (Basics)'),
                desc: t('NBI Clearanceとは・取得方法・費用', 'What it is, how to obtain it, fees'),
              },
              {
                to: t('/ja/nbi-hit', '/nbi-hit'),
                title: t('NBI HITとは？', 'What is NBI HIT?'),
                desc: t('原因・解決手順・遅延時間', 'Causes, resolution steps & delay time'),
              },
              {
                to: t('/ja/apostille-shori-kikan', '/apostille-processing-time'),
                title: t('DFAアポスティーユ処理期間', 'DFA Apostille Processing Time'),
                desc: t('通常・エクスプレスの日数目安', 'Standard & express processing timelines'),
              },
              {
                to: t('/ja/haigusha-visa', '/spouse-visa-documents'),
                title: t('配偶者ビザ書類チェックリスト', 'Spouse Visa Document Checklist'),
                desc: t('ビザ申請に必要な全書類', 'All documents required for visa application'),
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
                'NBI Clearanceの有効期限・取得タイミングについてご相談ください。',
                'Contact us for questions about NBI Clearance validity and ideal timing for acquisition.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【NBI Clearance有効期限ページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/nbi-validity" />
              <div>
                <label htmlFor="nv-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="nv-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="nv-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="nv-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nv-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="nv-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('用途（配偶者ビザ・帰化・就労等）と使用予定日をお知らせください。', 'Please share your use case (spouse visa, naturalization, employment, etc.) and planned use date.')} />
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
