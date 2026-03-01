import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, Clock, FileText, ArrowRight, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function CenomarValidityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('CENOMARの有効期限は？【2026年版】"6ヶ月"の根拠と用途別の考え方｜フィリピン書類センター', 'CENOMAR Validity Period: How Long Is It Valid? [2026]'),
    t('CENOMARの有効期限は発行から6ヶ月が目安。この"6ヶ月"の根拠、用途（国際結婚・配偶者ビザ・帰化）別の期限の考え方、取得タイミングの目安を解説。', 'CENOMAR is typically valid for 6 months. Learn the basis for this period and how it applies to different uses (international marriage, spouse visa, naturalization).')
  );

  const faqs = [
    {
      q: t('CENOMARの有効期限は何ヶ月ですか？', 'How many months is CENOMAR valid for?'),
      a: t(
        'CENOMARには法的に定められた「有効期限」はありませんが、フィリピン大使館・日本の市区町村役場・入管などの多くの機関は「発行から6ヶ月以内」の書類を要求しています。実質的な有効期限は6ヶ月と考えるのが安全です。',
        'CENOMAR has no legally defined "expiration date," but most institutions — Philippine embassies, Japanese municipal offices, immigration authorities — require documents issued "within the last 6 months." It is safest to treat 6 months as the practical validity period.'
      ),
    },
    {
      q: t('CENOMARの有効期限はどこに書いてありますか？', 'Where is the CENOMAR validity period officially stated?'),
      a: t(
        '「6ヶ月」という期限は、フィリピン大使館東京（PSA書類の提出要件として）や日本の市区町村役場の窓口ガイドラインに基づくものです。PSA（フィリピン統計局）自体の発行規則に「有効期限○ヶ月」という記載があるわけではなく、書類を受理する機関側の要件として設定されています。',
        'The "6-month" requirement is based on submission requirements set by institutions such as the Philippine Embassy Tokyo and Japanese municipal office guidelines. PSA (Philippine Statistics Authority) itself does not specify an expiration period in its issuance rules — it is a requirement set by the receiving institutions.'
      ),
    },
    {
      q: t('6ヶ月以上前に取得したCENOMARは使えませんか？', 'Can I use a CENOMAR obtained more than 6 months ago?'),
      a: t(
        '提出先によっては受け付けてもらえない可能性が高いです。特にフィリピン大使館でのLCCM申請や、日本の入管・役場は「発行から6ヶ月以内」を明示している場合があります。再取得のコストと時間はかかりますが、確実を期すため新しいCENOMARを取得することをおすすめします。',
        'There is a high chance the document will not be accepted. Philippine embassies for LCCM applications, Japanese immigration offices, and municipal offices often explicitly state "issued within 6 months." Although re-acquisition involves cost and time, we recommend obtaining a fresh CENOMAR to be certain.'
      ),
    },
    {
      q: t('配偶者ビザ申請ではCENOMARの発行日はいつのものが有効ですか？', 'For a spouse visa application, how recent must the CENOMAR be?'),
      a: t(
        '日本の配偶者ビザ申請では、書類の新しさが審査で重視されます。一般的な目安として「申請日から6ヶ月以内」に発行されたCENOMARが推奨されます。行政書士に相談する際に、担当者から最新の要件を確認することをおすすめします。',
        'For Japanese spouse visa applications, the recency of documents is important in the review process. As a general guideline, a CENOMAR issued "within 6 months of the application date" is recommended. When consulting an administrative scrivener, confirm the latest requirements with them.'
      ),
    },
    {
      q: t('取得から6ヶ月以内に手続きが終わらない場合はどうすればよいですか？', 'What if my procedure cannot be completed within 6 months of obtaining CENOMAR?'),
      a: t(
        'CENOMARを再取得する必要が生じます。代行サービスを利用した場合でも、手続きの遅れで書類が失効すれば再申請・再費用が発生します。手続き全体のスケジュールを事前に把握し、CENOMARの取得タイミングを適切に設定することが重要です。余裕をもって動くことで再取得を避けられます。',
        'You will need to re-obtain the CENOMAR. Even when using a proxy service, if the document expires due to procedural delays, a new application and additional fees will be required. Understanding the overall procedure timeline in advance and setting the right timing for CENOMAR acquisition is important. Acting with sufficient lead time helps avoid re-acquisition.'
      ),
    },
    {
      q: t('CENOMARを早く取りすぎるとどうなりますか？', 'What happens if I obtain CENOMAR too early?'),
      a: t(
        '取得から6ヶ月を過ぎてしまうと、提出先で受け付けてもらえない可能性があります。特に婚姻手続きや配偶者ビザは準備に時間がかかるため、取得タイミングを誤ると「書類が揃ったのに使えない」という状況が生じます。使用予定日の2〜3ヶ月前（余裕をみて3ヶ月前）に取得を開始するのが理想的です。',
        'If more than 6 months pass since issuance, the document may not be accepted at the destination. Marriage procedures and spouse visa preparation often take considerable time, so mistiming the acquisition can result in "documents ready but unusable" situations. The ideal is to start the acquisition process 2–3 months before your planned use date (3 months recommended for extra safety).'
      ),
    },
    {
      q: t('帰化申請（法務局）ではCENOMARの有効期限要件はありますか？', 'Are there CENOMAR validity requirements for naturalization applications at the Legal Affairs Bureau?'),
      a: t(
        '管轄する法務局によって異なりますが、帰化申請では「発行から3ヶ月以内」を求める法務局も存在します。6ヶ月より短い場合もあるため、必ず管轄の法務局に事前確認してください。',
        'Requirements vary by jurisdiction, but some Legal Affairs Bureaus require CENOMAR to be issued "within 3 months." Since this can be shorter than 6 months, always confirm with your specific Legal Affairs Bureau in advance.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'CENOMARガイド', item: 'https://ph-document.com/cenomar' },
          { '@type': 'ListItem', position: 3, name: 'CENOMARの有効期限', item: 'https://ph-document.com/cenomar-validity' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/cenomar-validity/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: 'CENOMARの有効期限は？"6ヶ月"の根拠と用途別の考え方【2026年版】',
        description: 'CENOMARの有効期限は発行から6ヶ月が目安。根拠、用途別の期限の考え方、取得タイミングの目安を解説。',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/cenomar-validity/',
        inLanguage: lang,
        datePublished: '2025-12-01',
        dateModified: '2026-02-28',
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
          'https://psa.gov.ph',
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
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <Link to={t('/ja/cenomar', '/cenomar')} className="hover:text-secondary">{t('CENOMARガイド', 'CENOMAR Guide')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('有効期限', 'Validity Period')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'CENOMARの有効期限は？"6ヶ月"の根拠と取得タイミング【2026年版】',
            'How Long Is CENOMAR Valid? The "6-Month Rule" Explained [2026]'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月28日 ｜ 株式会社IGRS', 'Last updated: February 28, 2026 | IGRS Inc.')}</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-blue-800 mb-1">{t('このページの結論（要点）', 'Key Conclusion of This Page')}</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ {t('CENOMARに法的な有効期限はないが、実務上「発行から6ヶ月以内」が目安', 'No legal expiration, but "within 6 months of issuance" is the practical standard')}</li>
                <li>✓ {t('"6ヶ月"はPSA規則ではなく、各機関の提出要件として設定されている', '"6 months" is set by receiving institutions, not PSA rules')}</li>
                <li>✓ {t('用途によっては3ヶ月以内を求める機関もある', 'Some institutions require documents within 3 months depending on use case')}</li>
                <li>✓ {t('使用予定日の2〜3ヶ月前に取得を開始するのが理想', 'Ideal to start acquisition 2–3 months before planned use date')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('"6ヶ月"の根拠', 'The Basis of the "6-Month Rule"'),
              t('用途別の有効期限要件', 'Validity Requirements by Use Case'),
              t('取得タイミングの目安', 'Ideal Timing for Acquisition'),
              t('期限切れ・再取得が必要な場合', 'If Expired: Re-acquisition'),
              t('代行サービスについて', 'About Proxy Services'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#cv-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="cv-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. "6ヶ月"の根拠：どこに書いてあるか', '1. Where the "6-Month Rule" Comes From')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'CENOMARを発行するPSA（フィリピン統計局）自体は、発行する書類に「有効期限」を設けていません。では「6ヶ月」という期限はどこから来ているのでしょうか？',
              'PSA (Philippine Statistics Authority), which issues CENOMAR, does not set an official "expiration date" on the document itself. So where does the "6-month" rule come from?'
            )}
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                icon: '🏛️',
                title: t('フィリピン大使館の要件', 'Philippine Embassy Requirements'),
                body: t(
                  '在日フィリピン大使館（東京）は、LCCM申請などで提出するCENOMARに「発行から6ヶ月以内」という要件を設けています。これが"6ヶ月"という目安の最も主要な根拠です。',
                  'The Philippine Embassy in Tokyo sets a "within 6 months of issuance" requirement for CENOMAR submitted for LCCM applications and similar purposes. This is the primary basis for the "6-month" guideline.'
                ),
              },
              {
                icon: '🏢',
                title: t('日本の市区町村役場・入管の実務慣行', 'Japanese Municipal Offices & Immigration Practice'),
                body: t(
                  '日本の市区町村役場や入管（出入国在留管理局）も、外国公文書については「3〜6ヶ月以内」の書類を求める傾向があります。担当窓口によって異なりますが、6ヶ月以内が一般的な目安です。',
                  'Japanese municipal offices and immigration authorities (Immigration Services Agency) also tend to require foreign official documents "within 3–6 months." While this varies by window, 6 months is a common practical guideline.'
                ),
              },
              {
                icon: '⚖️',
                title: t('法務局（帰化申請）の要件', 'Legal Affairs Bureau (Naturalization) Requirements'),
                body: t(
                  '管轄法務局によっては「発行から3ヶ月以内」という、より厳しい要件を設けていることがあります。帰化申請予定の方は必ず管轄法務局に確認してください。',
                  'Some Legal Affairs Bureaus may impose stricter requirements such as "issued within 3 months." Those planning naturalization applications must confirm with their local bureau.'
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

        {/* Section 2: By use case */}
        <section id="cv-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 用途別の有効期限要件', '2. Validity Requirements by Use Case')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('用途', 'Use Case')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('有効期限の目安', 'Validity Guideline')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('国際結婚（LCCM）', 'International Marriage (LCCM)'),
                    t('6ヶ月以内', 'Within 6 months'),
                    t('フィリピン大使館の明示的な要件', 'Explicit requirement by Philippine Embassy'),
                  ],
                  [
                    t('配偶者ビザ申請', 'Spouse Visa Application'),
                    t('6ヶ月以内（推奨）', 'Within 6 months (recommended)'),
                    t('入管・担当官の判断による', 'Depends on immigration officer'),
                  ],
                  [
                    t('帰化申請（法務局）', 'Naturalization (Legal Affairs Bureau)'),
                    t('3〜6ヶ月以内', 'Within 3–6 months'),
                    t('管轄法務局に要確認', 'Confirm with local bureau'),
                  ],
                  [
                    t('米国USCIS・K-1ビザ', 'US USCIS / K-1 Visa'),
                    t('6ヶ月以内（推奨）', 'Within 6 months (recommended)'),
                    t('申請先ごとに確認', 'Confirm per application destination'),
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

        {/* Section 3: Ideal timing */}
        <section id="cv-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 取得タイミングの目安', '3. Ideal Timing for Acquisition')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              'CENOMARは「早すぎても遅すぎてもNG」です。使用予定日から逆算して、適切なタイミングで申請を開始することが重要です。',
              'CENOMAR acquisition timing matters — too early or too late both cause problems. It is important to start the application at the right time, working backward from your planned use date.'
            )}
          </p>

          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card mb-5">
            <h3 className="text-sm font-bold text-secondary mb-4">{t('タイムラインの目安', 'Recommended Timeline')}</h3>
            <div className="space-y-4">
              {[
                {
                  timing: t('使用予定日の3〜4ヶ月前', '3–4 months before planned use'),
                  action: t('代行サービスに依頼開始（または自己申請開始）', 'Start proxy service request (or begin self-application)'),
                  color: 'bg-primary/10 text-primary',
                },
                {
                  timing: t('使用予定日の2〜3ヶ月前', '2–3 months before planned use'),
                  action: t('CENOMARが手元に届く目安', 'Expected arrival of CENOMAR'),
                  color: 'bg-green-100 text-green-700',
                },
                {
                  timing: t('使用予定日の1〜2ヶ月前', '1–2 months before planned use'),
                  action: t('アポスティーユが必要な場合はDFA認証取得', 'Obtain DFA Apostille if required'),
                  color: 'bg-blue-100 text-blue-700',
                },
                {
                  timing: t('使用予定日', 'Planned use date'),
                  action: t('書類を提出（有効期限内であることを確認）', 'Submit documents (confirm within validity period)'),
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
                  '代行サービスを利用した場合、CENOMARの取得に2〜4週間かかります。HIT案件（同姓同名問題）が発生した場合はさらに2〜4週間追加される可能性があります。余裕をもったスケジュールで進めてください。',
                  'When using a proxy service, CENOMAR acquisition typically takes 2–4 weeks. HIT cases (same-name matching issue) can add another 2–4 weeks. Plan with sufficient lead time.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Expired */}
        <section id="cv-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 期限切れ・再取得が必要な場合', '4. If Expired: Re-acquisition')}
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            {t(
              'CENOMARが発行から6ヶ月を超えてしまった場合、残念ながら多くの機関で受け付けてもらえません。再取得が必要です。',
              'If more than 6 months have passed since CENOMAR issuance, most institutions will not accept it. Re-acquisition is necessary.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('再取得は代行サービスがスムーズ', 'Proxy service makes re-acquisition smooth'),
                body: t(
                  '一度代行依頼したことがある場合、フィリピン側の情報が既に確認済みのため、再取得がスムーズになることが多いです。',
                  'If you have previously used a proxy service, re-acquisition is often smoother since the Philippines-side information has already been verified.'
                ),
              },
              {
                icon: <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('再取得にも同じく2〜4週間', 'Re-acquisition also takes 2–4 weeks'),
                body: t(
                  '再取得の場合も通常の取得と同様の時間がかかります。手続きのタイムラインをあらかじめ把握しておくことが重要です。',
                  'Re-acquisition takes the same amount of time as initial acquisition. Understanding the procedure timeline in advance is crucial.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                {item.icon}
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Proxy */}
        <section id="cv-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 代行サービスの活用', '5. Using a Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '当センターでは、CENOMARの取得代行（アポスティーユ認証オプション付き）に対応しています。手続きのタイミングも含めてサポートしますので、まずはご相談ください。',
              'Our center handles CENOMAR acquisition proxy services (with optional Apostille authentication). We support you with timing as well, so please feel free to reach out.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                item: t('CENOMAR取得代行', 'CENOMAR Proxy Acquisition'),
                cost: 'US$299〜',
                note: t('PSA書類費・国際配送込み', 'Includes PSA fee & international shipping'),
              },
              {
                item: t('CENOMAR＋DFAアポスティーユ セット', 'CENOMAR + DFA Apostille Set'),
                cost: 'US$349〜',
                note: t('DFA手数料・認証費用込み', 'Includes DFA fee & authentication cost'),
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

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('タイミングの相談も含めてお任せ', 'Leave Timing Advice and Acquisition to Us')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('手続きスケジュールに合わせた取得タイミングをご案内します。', 'We advise on the right acquisition timing to fit your procedure schedule.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="cv-6" className="mb-10">
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
              {
                to: t('/ja/cenomar', '/cenomar'),
                title: t('CENOMARガイド（基本）', 'CENOMAR Guide (Basics)'),
                desc: t('CENOMARとは何か・取得方法・費用', 'What is CENOMAR, how to obtain it, fees'),
              },
              {
                to: t('/ja/cenomar-apostille', '/cenomar-apostille'),
                title: t('CENOMARにアポスティーユは必要？', 'Does CENOMAR Need Apostille?'),
                desc: t('用途別の結論を解説', 'Answer by use case'),
              },
              {
                to: t('/ja/kokusai-kekkon-guide', '/international-marriage-guide'),
                title: t('フィリピン国際結婚ガイド', 'Philippines International Marriage Guide'),
                desc: t('手続き全体の流れ・必要書類', 'Overall process flow & required documents'),
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
                'CENOMARの有効期限や取得タイミングについてご相談ください。',
                'Contact us for questions about CENOMAR validity and the best time to obtain it.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【CENOMAR有効期限ページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/cenomar-validity" />
              <div>
                <label htmlFor="cv-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="cv-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="cv-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="cv-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="cv-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="cv-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('用途（国際結婚・配偶者ビザ等）と取得タイミングについてご相談ください。', 'Please describe your use case (international marriage, spouse visa, etc.) and timing questions.')} />
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
