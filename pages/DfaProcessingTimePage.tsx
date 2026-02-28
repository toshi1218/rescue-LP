import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, Clock, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function DfaProcessingTimePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    'DFAアポスティーユ 処理期間【2026年最新】通常・エクスプレス・代行の日数目安｜フィリピン書類センター',
    'フィリピンDFAアポスティーユ認証の処理期間（processing time）を2026年最新情報で解説。通常・エクスプレス申請の日数目安、代行利用時のトータル期間、遅れる原因も紹介。'
  );

  const faqs = [
    {
      q: t(
        'DFAアポスティーユの通常処理期間はどのくらいですか？',
        'How long does standard DFA Apostille processing take?'
      ),
      a: t(
        '2026年現在、DFAアポスティーユの通常処理（Regular Processing）は申請から約10〜15営業日（2〜3週間）が目安です。ただし申請件数・窓口の混雑状況によって変動することがあります。',
        'As of 2026, DFA Apostille standard processing (Regular Processing) typically takes approximately 10–15 business days (2–3 weeks) from application. This can vary depending on application volume and congestion at the office.'
      ),
    },
    {
      q: t(
        'DFAアポスティーユのエクスプレス処理はどのくらいかかりますか？',
        'How long does DFA Apostille express processing take?'
      ),
      a: t(
        'エクスプレス処理（Expedited Processing）は通常3〜5営業日が目安です。ただしDFAは「エクスプレス」の正式な時間保証をしていないため、繁忙期（クリスマスシーズン・連休前後）は遅れる場合があります。',
        'Expedited processing typically takes about 3–5 business days. However, DFA does not provide an official time guarantee for "express" processing, so delays can occur during peak seasons (Christmas, national holidays).'
      ),
    },
    {
      q: t(
        'DFAアポスティーユはどこで申請しますか？', 'Where do I apply for DFA Apostille?'
      ),
      a: t(
        'DFAアポスティーユは、マニラのDFA本庁（ASEANA）および各地の認証カウンター（セブ・ダバオ等）で申請可能です。PSA書類（CENOMAR・出生証明書・NBI等）のアポスティーユ認証にも対応しています。代行サービスを利用すると、申請場所の手配から受取・発送まですべてお任せいただけます。',
        'DFA Apostille can be applied for at the DFA main office in Manila (ASEANA) and at authentication counters in regional offices (Cebu, Davao, etc.). PSA documents (CENOMAR, birth certificate, NBI, etc.) can also be Apostilled there. Using a proxy service allows you to have everything handled from application to receipt and shipping.'
      ),
    },
    {
      q: t(
        'DFAアポスティーユ認証の費用はいくらですか？',
        'How much does DFA Apostille authentication cost?'
      ),
      a: t(
        '2026年現在、DFA公定料金は1通あたり200ペソ（通常）または400ペソ（エクスプレス）が目安です。代行サービスを利用する場合は、DFA手数料に加えて代行手数料・国際配送料が別途かかります。詳細は料金ページをご参照ください。',
        'As of 2026, the official DFA fee is approximately 200 PHP per document (regular) or 400 PHP (expedited). When using a proxy service, proxy fees and international shipping are added on top of the DFA fee. See our pricing page for details.'
      ),
    },
    {
      q: t(
        'DFAアポスティーユが遅れる原因はどんなことがありますか？',
        'What are common reasons for DFA Apostille delays?'
      ),
      a: t(
        '主な原因として①DFA窓口の混雑（特に祝日前後・年末年始）、②書類に不備がある場合の差し戻し、③PSA書類の認証キュー（特にCENOMAR・NBI等は件数が多い）、④DFAシステム障害・メンテナンスが挙げられます。代行サービスでは書類の事前確認で差し戻しリスクを最小化しています。',
        'Common causes include: ① DFA office congestion (especially around holidays), ② document rejection due to errors, ③ high-volume authentication queues for PSA documents (CENOMAR, NBI, etc.), ④ DFA system outages or maintenance. Proxy services minimize rejection risks through advance document review.'
      ),
    },
    {
      q: t(
        'CENOMARのDFAアポスティーユ認証を代行依頼できますか？',
        'Can I request proxy handling for CENOMAR DFA Apostille?'
      ),
      a: t(
        'はい、当センターではCENOMARの取得からDFAアポスティーユ認証・国際配送までをセットで代行しています。フィリピン現地の手続きをすべてお任せいただけます。',
        'Yes, our center handles the complete set from CENOMAR acquisition to DFA Apostille authentication and international shipping. All Philippines-side procedures are managed on your behalf.'
      ),
    },
    {
      q: t(
        'DFAアポスティーユ認証に有効期限はありますか？',
        'Does DFA Apostille authentication have an expiration date?'
      ),
      a: t(
        'DFAアポスティーユ認証自体に法的な有効期限はありません。ただし、アポスティーユが付された書類（CENOMAR・NBI等）本体の有効期限は残ります。たとえばNBI Clearanceは発行から1年有効なので、NBI+アポスティーユの実質的な有効期限はNBI発行から1年です。CENOMAR（有効期限なし）のアポスティーユは書類の内容が変わらない限り有効です。',
        'DFA Apostille authentication itself has no legal expiration date. However, the underlying document (CENOMAR, NBI, etc.) may have its own validity period. For example, NBI Clearance is valid for 1 year from issuance, so NBI + Apostille is practically valid for 1 year from NBI issuance. CENOMAR (no legal expiration) with Apostille remains valid as long as the document\'s content remains accurate.'
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
          { '@type': 'ListItem', position: 2, name: 'DFAアポスティーユガイド', item: 'https://ph-document.com/apostille' },
          { '@type': 'ListItem', position: 3, name: 'DFAアポスティーユ処理期間', item: 'https://ph-document.com/apostille-processing-time' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'DFA Apostille Processing Time Philippines 2026 — 通常・エクスプレスの日数目安',
        description: 'DFAアポスティーユ認証の処理期間を2026年最新情報で解説。通常・エクスプレスの日数目安、代行利用時のトータル期間。',
        url: 'https://ph-document.com/apostille-processing-time',
        inLanguage: 'ja',
        dateModified: '2026-02-28',
        author: { '@type': 'Organization', name: '株式会社IGRS' },
        publisher: { '@type': 'Organization', name: 'フィリピン書類取得代行センター' },
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
          <Link to={t('/ja/apostille', '/apostille')} className="hover:text-secondary">{t('DFAアポスティーユガイド', 'DFA Apostille Guide')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('処理期間', 'Processing Time')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'DFAアポスティーユ 処理期間【2026年最新】通常・エクスプレスの日数と代行でのスケジュール',
            'DFA Apostille Processing Time Philippines [2026] — Standard, Express & Proxy Schedule'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月28日 ｜ 株式会社IGRS', 'Last updated: February 28, 2026 | IGRS Inc.')}</p>

        {/* Summary box */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('処理期間まとめ（2026年）', 'Processing Time Summary (2026)')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: t('通常処理', 'Regular Processing'),
                days: t('10〜15営業日', '10–15 business days'),
                sub: t('（約2〜3週間）', '(approx. 2–3 weeks)'),
                color: 'border-secondary',
              },
              {
                label: t('エクスプレス処理', 'Express Processing'),
                days: t('3〜5営業日', '3–5 business days'),
                sub: t('（繁忙期は遅延あり）', '(delays possible during peak season)'),
                color: 'border-primary',
              },
              {
                label: t('代行サービス（書類取得含む）', 'Proxy Service (incl. document acquisition)'),
                days: t('3〜6週間（目安）', '3–6 weeks (guideline)'),
                sub: t('（書類種別・HIT有無による）', '(varies by document type & HIT status)'),
                color: 'border-blue-400',
              },
            ].map((item, i) => (
              <div key={i} className={`border-l-4 ${item.color} pl-4`}>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-lg font-bold text-secondary">{item.days}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('DFAアポスティーユとは（概要）', 'What is DFA Apostille (Overview)'),
              t('通常処理とエクスプレス処理の違い', 'Regular vs. Express Processing'),
              t('代行サービス利用時のトータルスケジュール', 'Total Schedule When Using a Proxy Service'),
              t('遅延が起きる主な原因', 'Common Causes of Delays'),
              t('申請場所・対象書類', 'Application Locations & Eligible Documents'),
              t('代行サービスについて', 'About Proxy Services'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#dpt-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="dpt-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. DFAアポスティーユとは', '1. What is DFA Apostille')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'DFAアポスティーユとは、フィリピン外務省（DFA: Department of Foreign Affairs）が行う公文書の国際認証です。ハーグ条約に基づき、日本・米国・欧州などの加盟国に公文書を提出する際に必要な認証手続きです。',
              'DFA Apostille is an international authentication of official documents by the Philippine Department of Foreign Affairs (DFA). Based on the Hague Convention, it is required when submitting official documents to member countries such as Japan, the US, and European nations.'
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t(
              'CENOMAR・PSA出生証明書・PSA婚姻証明書・NBI Clearanceなどのフィリピン公的書類にアポスティーユスタンプを付与することで、海外の機関（大使館・入管・裁判所等）に正式な書類として受け付けてもらえます。',
              'By affixing an Apostille stamp to Philippine official documents such as CENOMAR, PSA birth certificates, PSA marriage certificates, and NBI Clearance, these documents are accepted by overseas institutions (embassies, immigration offices, courts, etc.) as formally certified.'
            )}
          </p>
        </section>

        {/* Section 2: Regular vs Express */}
        <section id="dpt-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 通常処理とエクスプレス処理の違い', '2. Regular vs. Express Processing')}
          </h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('項目', 'Item')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('通常処理', 'Regular Processing')}</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">{t('エクスプレス処理', 'Express Processing')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('処理日数（目安）', 'Processing Days (Guideline)'), t('10〜15営業日', '10–15 business days'), t('3〜5営業日', '3–5 business days')],
                  [t('公定料金（1通）', 'Official Fee (per document)'), '200 PHP', '400 PHP'],
                  [t('オンライン予約', 'Online Appointment'), t('必要', 'Required'), t('必要', 'Required')],
                  [t('繁忙期の遅延リスク', 'Delay Risk in Peak Season'), t('中程度', 'Moderate'), t('高め（保証なし）', 'Higher (no guarantee)')],
                ].map(([item, regular, express], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{item}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{regular}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100 font-semibold text-primary">{express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                {t(
                  'DFAは「エクスプレス」の時間を公式に保証していません。クリスマスシーズン（12月）・聖週間（セマナサンタ）・国民の祝日前後は特に混雑するため、早めの申請をおすすめします。',
                  'DFA does not officially guarantee express processing times. Applications are especially congested around the Christmas season (December), Holy Week (Semana Santa), and national holidays. We recommend applying well in advance.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Total schedule with proxy */}
        <section id="dpt-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 代行サービス利用時のトータルスケジュール', '3. Total Schedule When Using a Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '代行サービスを利用する場合、書類の取得からDFAアポスティーユ認証・国際配送まで含めたトータルの期間は以下のとおりです。',
              'When using a proxy service, the total period from document acquisition to DFA Apostille authentication and international shipping is as follows.'
            )}
          </p>
          <div className="space-y-3">
            {[
              {
                phase: t('Phase 1', 'Phase 1'),
                title: t('PSA書類取得（CENOMAR・出生証明書等）', 'PSA Document Acquisition (CENOMAR, Birth Certificate, etc.)'),
                duration: t('約2〜4週間', 'Approx. 2–4 weeks'),
                note: t('NBI HIT案件は追加で2〜4週間', 'NBI HIT cases add 2–4 weeks'),
                color: 'bg-primary/10 text-primary',
              },
              {
                phase: t('Phase 2', 'Phase 2'),
                title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
                duration: t('通常：2〜3週間 / エクスプレス：1週間', 'Regular: 2–3 weeks / Express: ~1 week'),
                note: t('繁忙期は遅延リスクあり', 'Delay risk during peak season'),
                color: 'bg-secondary/10 text-secondary',
              },
              {
                phase: t('Phase 3', 'Phase 3'),
                title: t('国際配送（EMS / DHL等）', 'International Shipping (EMS / DHL, etc.)'),
                duration: t('約1〜2週間', 'Approx. 1–2 weeks'),
                note: t('配送先・方法によって異なる', 'Varies by destination and shipping method'),
                color: 'bg-green-100 text-green-700',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="flex-shrink-0">
                  <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${item.color}`}>{item.phase}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary">{item.duration}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                </div>
              </div>
            ))}
            <div className="bg-secondary text-white rounded-lg p-4 text-center">
              <p className="text-sm font-bold">{t('トータル目安：', 'Total Guideline: ')}</p>
              <p className="text-2xl font-bold text-primary mt-1">{t('3〜6週間', '3–6 weeks')}</p>
              <p className="text-xs text-gray-300 mt-1">
                {t('（PSA書類の種別・HIT有無・配送速度による）', '(Depends on PSA document type, HIT status, and shipping speed)')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Causes of delay */}
        <section id="dpt-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 遅延が起きる主な原因', '4. Common Causes of Delays')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                num: '01',
                title: t('DFA窓口の混雑', 'DFA Office Congestion'),
                body: t(
                  'クリスマスシーズン・聖週間・国民の祝日前後は申請数が急増し、通常より遅くなります。',
                  'Application volumes surge around Christmas, Holy Week, and national holidays, causing processing to be slower than usual.'
                ),
              },
              {
                num: '02',
                title: t('書類の不備・差し戻し', 'Document Errors / Rejection'),
                body: t(
                  '提出書類の記載ミス・不足・PSAデータとの不一致がある場合、差し戻しにより追加期間が必要になります。代行サービスでは事前チェックで差し戻しを最小化します。',
                  'Errors, missing items, or discrepancies with PSA data result in rejection and additional processing time. Proxy services minimize rejections through advance document review.'
                ),
              },
              {
                num: '03',
                title: t('NBI HIT案件（NBI書類の場合）', 'NBI HIT Cases (for NBI Documents)'),
                body: t(
                  'NBI Clearanceを含むセット申請でHIT案件が発生した場合、NBI側の解決に2〜4週間追加されます。',
                  'If an NBI HIT case occurs in a set application including NBI Clearance, an additional 2–4 weeks may be needed to resolve the HIT on the NBI side.'
                ),
              },
              {
                num: '04',
                title: t('DFAシステム障害・メンテナンス', 'DFA System Outages / Maintenance'),
                body: t(
                  'DFAのオンラインシステム障害やメンテナンスにより、予約・処理が遅れることがあります。',
                  'DFA online system outages or scheduled maintenance can delay appointments and processing.'
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

        {/* Section 5: Where to apply */}
        <section id="dpt-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 申請場所・対象書類', '5. Application Locations & Eligible Documents')}
          </h2>
          <div className="grid gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
              <h3 className="text-sm font-bold text-secondary mb-3">{t('申請場所', 'Application Locations')}</h3>
              <div className="space-y-2">
                {[
                  { place: 'DFA-ASEANA (マニラ本庁)', note: t('メイン窓口。予約必須。', 'Main office. Appointment required.') },
                  { place: t('DFA地方オフィス（セブ・ダバオ等）', 'DFA Regional Offices (Cebu, Davao, etc.)'), note: t('地方在住者に便利。代行サービスも対応。', 'Convenient for those in regional areas. Proxy services available.') },
                  { place: t('DFA認証カウンター（SM等ショッピングモール内）', 'DFA Authentication Counters (SM malls, etc.)'), note: t('一部ショッピングモールに設置。', 'Located in some shopping malls.') },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-secondary">{item.place}</p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
              <h3 className="text-sm font-bold text-secondary mb-3">{t('主な対象書類', 'Main Eligible Documents')}</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  t('CENOMAR（独身証明書）', 'CENOMAR'),
                  t('PSA出生証明書', 'PSA Birth Certificate'),
                  t('PSA婚姻証明書', 'PSA Marriage Certificate'),
                  t('NBI Clearance', 'NBI Clearance'),
                  t('LTO証明書類', 'LTO Certification Documents'),
                  t('その他公的書類', 'Other Official Documents'),
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Proxy */}
        <section id="dpt-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. 代行サービスの活用', '6. Using a Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '当センターでは、PSA書類の取得からDFAアポスティーユ認証・国際配送まで、フィリピン現地での全手続きを代行します。スケジュール管理・書類の事前確認も含めてサポートします。',
              'Our center handles all Philippines-side procedures from PSA document acquisition to DFA Apostille authentication and international shipping. We also support schedule management and advance document review.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                item: t('CENOMAR + DFAアポスティーユ セット', 'CENOMAR + DFA Apostille Set'),
                cost: 'US$349〜',
                note: t('PSA手数料・DFA手数料・国際配送込み', 'Includes PSA fee, DFA fee & international shipping'),
              },
              {
                item: t('NBI Clearance + DFAアポスティーユ セット', 'NBI Clearance + DFA Apostille Set'),
                cost: 'US$399〜',
                note: t('NBI申請料・DFA手数料・国際配送込み', 'Includes NBI fee, DFA fee & international shipping'),
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
            {t('DFAアポスティーユ、まるごとお任せ', 'Leave DFA Apostille Entirely to Us')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('書類取得からアポスティーユ認証・国際配送まで一括対応。', 'From document acquisition to Apostille authentication and international shipping — all in one service.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="dpt-7" className="mb-10">
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

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/apostille', '/apostille'),
                title: t('DFAアポスティーユガイド（基本）', 'DFA Apostille Guide (Basics)'),
                desc: t('対象書類・申請方法・費用を解説', 'Eligible documents, application method, fees'),
              },
              {
                to: t('/ja/cenomar-apostille', '/cenomar-apostille'),
                title: t('CENOMARにアポスティーユは必要？', 'Does CENOMAR Need Apostille?'),
                desc: t('用途別の結論', 'Answer by use case'),
              },
              {
                to: t('/ja/nbi-clearance', '/nbi-clearance'),
                title: t('NBI Clearanceガイド', 'NBI Clearance Guide'),
                desc: t('取得方法・HIT対処・アポスティーユ', 'How to obtain, HIT handling, Apostille'),
              },
              {
                to: t('/ja/cenomar', '/cenomar'),
                title: t('CENOMARガイド', 'CENOMAR Guide'),
                desc: t('独身証明書の取得方法・費用・期間', 'How to obtain CENOMAR, fees & timeline'),
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
                'DFAアポスティーユの処理期間やスケジュールについてご相談ください。',
                'Contact us about DFA Apostille processing times and scheduling.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【DFAアポスティーユ処理期間ページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/apostille-processing-time" />
              <div>
                <label htmlFor="dpt-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="dpt-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="dpt-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="dpt-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="dpt-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="dpt-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('必要な書類・用途・ご希望のスケジュールをご記入ください。', 'Please describe the documents needed, use case, and your desired schedule.')} />
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
