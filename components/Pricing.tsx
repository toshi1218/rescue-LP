import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Gem, FileText, Fingerprint, Car, Heart, Award, AlertCircle, Zap } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const plansData = {
  ja: [
    {
      id: 'pack',
      icon: Gem,
      tag: '人気 No.1',
      featured: true,
      title: '国際結婚準備パック',
      subtitle: '日本での国際結婚手続きに向けて、フィリピン側で必要になりやすい書類をまとめたプラン',
      why: '日本の役所で婚姻届を出すには、フィリピン側の書類（出生証明・独身証明など）をアポスティーユ付きで用意する必要があります',
      outcome: '書類が揃えば、日本の市区町村への婚姻届の提出が可能になります',
      price: '¥99,800',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'PSA出生証明書＋DFAアポスティーユ',
        'CENOMAR（独身証明書）＋DFAアポスティーユ',
        '進捗報告・日本語サポート',
        '優先対応',
      ],
      notIncluded: [
        '国際郵送費（DHL）¥6,000',
        '日本の役所・入管への提出代行',
        'ビザ申請の法的代理',
      ],
      bestFor: '日本での婚姻手続きに向けて、複数のフィリピン書類が必要な方向け',
    },
    {
      id: 'visa',
      icon: Heart,
      tag: null,
      featured: false,
      title: '配偶者ビザ準備書類パック',
      subtitle: '在留資格「日本人の配偶者等」の申請に向けたフィリピン書類の取り寄せプラン',
      why: '入管への配偶者ビザ申請では、フィリピン側の婚姻・出生証明書をアポスティーユ付きで提出する必要があります',
      outcome: '書類が揃えば、入管への在留資格認定証明書交付申請（または変更申請）が前に進みます',
      price: '¥100,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'PSA婚姻証明書＋DFAアポスティーユ',
        'PSA出生証明書（必要に応じて）',
        '結核非発病証明書',
        '提出先の要件確認込み',
        '日本語でのご案内',
      ],
      notIncluded: [
        '国際郵送費（DHL）¥6,000',
        '入管への在留資格申請代行（行政書士業務）',
        'ビザ申請の保証',
      ],
      bestFor: '入管申請に向けてフィリピン書類を整えたい方向け',
    },
    {
      id: 'lto',
      icon: Car,
      tag: null,
      featured: false,
      title: '外免切替サポート',
      subtitle: 'フィリピン免許から日本免許への切替に必要なLTO書類取得プラン',
      why: '外国免許を日本の免許に切り替えるには、フィリピンLTO発行の書類（運転歴証明など）の原本提出が必要です',
      outcome: '書類が揃えば、運転免許センターでの外免切替手続きを開始できます',
      price: '¥100,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'LTO運転免許証関連書類',
        'LTOトランザクション履歴',
        '役所申請手数料込み',
        '日本語でのご案内',
      ],
      notIncluded: [
        '国際郵送費（DHL）¥6,000',
        '日本の免許センターへの提出代行',
        '運転免許試験の代理',
      ],
      bestFor: 'フィリピン免許から日本の免許へ切り替えたい方向け',
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: '海外ビザ用NBIクリアランス取得サポート',
      subtitle: '海外ビザ申請・帰化申請・在留資格手続きに必要な無犯罪証明書の取得プラン',
      why: '入管・帰化・海外ビザ申請では、フィリピン側の無犯罪証明書（NBI Clearance）の提出が求められます',
      outcome: '書類が揃えば、ビザや在留資格・帰化申請の書類セットが完成します',
      price: '¥55,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'NBI Clearance取得',
        '指紋採取サポート',
        'DFA Apostille（必要な場合）',
        '日本語でのご案内',
      ],
      notIncluded: [
        '国際郵送費（DHL）¥6,000',
        '指紋認証にかかる外部費用',
        '日本側への提出代行',
      ],
      bestFor: '海外ビザ申請・帰化申請・在留資格手続きでNBIクリアランスが必要な方向け',
    },
    {
      id: 'naturalization',
      icon: Award,
      tag: null,
      featured: false,
      title: '帰化申請書類パック',
      subtitle: '日本国籍取得（帰化申請）に向けたフィリピン書類の取り寄せプラン',
      why: '帰化申請では法務局からフィリピンの出生・婚姻・無犯罪証明書などの原本提出が求められます',
      outcome: '必要書類が揃えば、法務局への帰化申請の書類準備が整います',
      price: '¥110,000',
      priceNote: '〜（税・送料別）',
      period: '約6〜10週間',
      highlights: [
        'PSA出生証明書＋DFAアポスティーユ',
        'PSA婚姻証明書（必要な場合）',
        'NBI Clearance取得',
        '法務局要件の事前確認',
        '日本語でのご案内',
      ],
      notIncluded: [
        '国際郵送費（DHL）¥6,000',
        '法務局への帰化申請代行（行政書士業務）',
        '帰化許可の保証',
      ],
      bestFor: '法務局に帰化申請中・申請予定で、フィリピン書類の収集が必要な方向け',
    },
  ],
  en: [
    {
      id: 'pack',
      icon: Gem,
      tag: 'Most Popular',
      featured: true,
      title: 'International Marriage Package',
      subtitle: 'Philippine civil documents for international marriage & spouse visa — PSA, CENOMAR & NBI, Apostille-ready',
      price: 'US$899',
      priceNote: '〜 (Apostille + DHL incl.)',
      period: 'Approx. 4–6 weeks',
      highlights: [
        'PSA Birth Certificate + DFA Apostille',
        'CENOMAR + DFA Apostille',
        'NBI Clearance support',
        'Priority support',
        'DHL Express Worldwide',
        'All-inclusive pricing',
      ],
      notIncluded: [
        'Embassy filing or interview coaching',
        'Legal representation or visa advice',
        'Translation unless stated',
      ],
      bestFor: 'Best for K-1, CR-1, or IR-1 visa applicants who need Philippine civil documents handled in one package.',
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: 'NBI Clearance Retrieval',
      subtitle: 'Required for immigration & visa applications worldwide',
      price: 'US$399',
      priceNote: '〜 (Apostille + DHL incl.)',
      period: 'Approx. 4–6 weeks',
      highlights: [
        'NBI Clearance retrieval',
        'Fingerprint appointment support',
        'DFA Apostille included',
        'DHL Express Worldwide',
      ],
      notIncluded: [
        'Fingerprint notarization costs',
        'Translation',
        'Filing with local authorities',
      ],
      bestFor: 'Best for U.S. visa, naturalization, or immigration applicants who need Philippine police clearance.',
    },
    {
      id: 'lto',
      icon: Car,
      tag: null,
      featured: false,
      title: 'LTO Document Retrieval',
      subtitle: "Philippine driver's license records",
      price: 'US$699',
      priceNote: '〜 (DHL incl.)',
      period: 'Approx. 4–6 weeks',
      highlights: [
        "LTO Driver's License Documents",
        'LTO Transaction History',
        'Govt. application fee included',
        'DHL Express Worldwide',
      ],
      notIncluded: [
        'Translation',
        'License conversion at destination country',
        'Driving test representation',
      ],
      bestFor: 'Best for clients converting a Philippine license or needing LTO records for immigration.',
    },
    {
      id: 'visa',
      icon: Heart,
      tag: null,
      featured: false,
      title: 'Spouse / Partner Visa Support',
      subtitle: 'Document support for US (K-1/CR-1), Canada, Australia, UK & more',
      price: 'US$899',
      priceNote: '〜 (Apostille + DHL incl.)',
      period: 'Approx. 4–8 weeks',
      highlights: [
        'Document preparation support',
        'Apostille-ready for immigration authorities',
        'PSA & CENOMAR included',
        'Application document review',
      ],
      notIncluded: [
        'Translation',
        'Immigration filing or legal representation',
        'Attorney or consultant services',
      ],
      bestFor: 'Best for spouse or partner visa applicants who want coordinated document handling.',
    },
    {
      id: 'naturalization',
      icon: Award,
      tag: null,
      featured: false,
      title: 'Citizenship & Naturalization Documents',
      subtitle: 'Philippine documents for citizenship applications worldwide',
      price: 'US$899',
      priceNote: '〜 (Apostille + DHL incl.)',
      period: 'Approx. 6–12 weeks',
      highlights: [
        'Document preparation support',
        'Apostille-ready for government checklist',
        'PSA & NBI included',
        'Ongoing follow-up',
      ],
      notIncluded: [
        'Translation',
        'Legal representation for citizenship applications',
        'Attorney or consultant services',
      ],
      bestFor: 'Best for Philippine nationals applying for citizenship who need multiple documents handled together.',
    },
  ],
};

const Pricing: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const { lang, t } = useLanguage();
  const plans = plansData[lang];

  return (
    <section className="pb-16 px-4" id="pricing">
      <div className="max-w-5xl mx-auto">
        {lang === 'ja' && (
          <div className="text-xs text-gray-500 mb-6 space-y-0.5">
            <p>※表示価格はすべて税抜きです</p>
            <p>※取得難易度、記載内容の不一致、追加確認の有無により変動する場合があります</p>
          </div>
        )}

        {/* 全プランをカードグリッドで表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden border bg-white flex flex-col ${
                  plan.featured
                    ? 'border-primary/30 shadow-lg'
                    : 'border-gray-200 shadow-soft'
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent" />
                )}
                <div className="relative p-6 flex flex-col flex-1">
                  {/* ヘッダー */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-primary/10' : 'bg-secondary/5'}`}>
                      <Icon className={`w-5 h-5 ${plan.featured ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {plan.tag && (
                        <div className="inline-flex items-center gap-1 bg-primary/20 border border-primary/30 text-primary-dark text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                          {plan.tag}
                        </div>
                      )}
                      <h3 className="text-base font-bold text-secondary leading-snug">{plan.title}</h3>
                      <p className="text-xs text-gray-600 mt-0.5 leading-snug">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* なぜ必要か・揃えばできること */}
                  {(plan as any).why && (
                    <div className="space-y-1.5 mb-4 text-xs leading-relaxed">
                      <p className="text-gray-700">
                        <span className="font-bold text-secondary">なぜ必要か：</span>{(plan as any).why}
                      </p>
                      <p className="text-primary-dark">
                        <span className="font-bold">揃えばできること：</span>{(plan as any).outcome}
                      </p>
                    </div>
                  )}

                  {/* 含まれるもの */}
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {lang === 'ja' ? '含まれるもの' : "What's Included"}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* 含まれないもの */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                        {lang === 'ja' ? '含まれないもの' : 'Not Included'}
                      </p>
                      <ul className="space-y-1 mb-4">
                        {plan.notIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                            <XCircle className="w-3 h-3 text-gray-300 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* bestFor */}
                  {plan.bestFor && (
                    <p className="text-xs text-primary-dark/80 italic mb-4">{plan.bestFor}</p>
                  )}

                  {/* 価格＋CTA（下部に固定） */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-primary">{plan.price}</span>
                      <span className="text-xs text-gray-500">{plan.priceNote}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      {lang === 'ja' ? `納期：${plan.period}` : `Delivery: ${plan.period}`}
                    </p>
                    <a
                      href="#contact"
                      onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                      className="group flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200"
                    >
                      {t('pricing.ctaBtn')}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {lang === 'en' && (
          <p className="text-xs text-gray-400 mt-5 leading-relaxed">
            * All prices include Philippine tax and DHL international shipping worldwide. Final amount may vary by document condition.
          </p>
        )}

        {/* 目的別に必要書類を確認したい方へ */}
        {lang === 'ja' && (
          <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-sm font-bold text-secondary mb-2">目的別に必要書類を確認したい方へ</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              配偶者ビザ、帰化申請、国際結婚などの手続きでは、必要になるフィリピン書類がケースによって異なります。<br />
              IGRSでは、申請そのものの代理は行っていませんが、手続きに必要なフィリピン書類の取得をサポートしています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-xs font-bold text-secondary mb-2">よくある対象手続き</p>
                <ul className="space-y-1">
                  {['日本での国際結婚', '在留資格「日本人の配偶者等」', '帰化申請', '外免切替', '相続や各種届出'].map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-secondary mb-2">対応できる主な書類</p>
                <ul className="space-y-1">
                  {[
                    'PSA Birth Certificate（出生証明書）',
                    'PSA Marriage Certificate（婚姻証明書）',
                    'CENOMAR（独身証明書）',
                    'NBI Clearance（無犯罪証明書）',
                    'LTO関連書類',
                    'DFA Apostille',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              必要書類が分からない場合は、用途に合わせてご案内します。<br />
              まずは、結婚、ビザ、帰化、外免切替などの目的を添えてお問い合わせください。
            </p>
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'pricing_purpose', type: 'general', variant: ctaVariant })}
              className="group inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold py-2.5 px-5 rounded-lg hover:bg-primary-hover transition-all duration-200"
            >
              相談する
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        )}

        {/* Document checklist by visa / immigration purpose — English */}
        {lang === 'en' && (
          <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-sm font-bold text-secondary mb-2">Not sure which documents you need?</h3>
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              Required Philippine documents vary by visa type and destination country. Select your situation below to see the exact checklist.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                {
                  to: '/en/k1-visa-documents/',
                  flag: '🇺🇸',
                  label: 'K-1 Fiancé Visa (USA)',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/cr1-visa-documents/',
                  flag: '🇺🇸',
                  label: 'CR-1 / IR-1 Spouse Visa (USA)',
                  docs: ['PSA Marriage Certificate + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/canada/',
                  flag: '🇨🇦',
                  label: 'Canada Immigration',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/australia/',
                  flag: '🇦🇺',
                  label: 'Australia Immigration',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/uk/',
                  flag: '🇬🇧',
                  label: 'UK Immigration',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/spouse-visa-documents/',
                  flag: '🇯🇵',
                  label: 'Spouse Visa (Japan)',
                  docs: ['PSA Marriage Certificate + Apostille', 'PSA Birth Certificate', 'NBI Clearance'],
                },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex flex-col gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3.5 hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-bold text-gray-800 group-hover:text-secondary transition-colors">
                    {item.flag} {item.label}
                  </span>
                  <ul className="space-y-0.5">
                    {item.docs.map((doc) => (
                      <li key={doc} className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 self-start text-[11px] font-semibold text-primary-dark mt-0.5 group-hover:underline">
                    See full checklist <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Don't see your country? <a href="#contact" className="text-primary-dark underline hover:text-primary">Contact us</a> — we ship to 50+ countries via DHL Express.
            </p>
          </div>
        )}

        {/* 料金変動要因 */}
        <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-gray-400" />
            <h3 className="text-sm font-bold text-secondary">
              {lang === 'ja' ? '料金が変わる主な要因' : 'What affects the price'}
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
            {(lang === 'ja'
              ? [
                  '必要書類の数',
                  'アポスティーユの有無',
                  '特急対応の有無',
                  '記載内容の不一致や補足確認の有無',
                  '定型案件か個別案件か',
                ]
              : [
                  'Number of documents requested',
                  'Apostille requirement',
                  'Urgency / priority handling',
                  'Delivery destination',
                  'Record issues or mismatched details',
                  'Standard or custom case',
                ]
            ).map((item) => (
              <li key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 急ぎ対応 */}
        <div className="mt-4 rounded-xl border border-primary/10 bg-primary/[0.02] p-5 flex items-start gap-3">
          <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-secondary">
              {lang === 'ja' ? '急ぎ対応について' : 'Priority / Rush handling'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {lang === 'ja'
                ? '案件によっては特急対応が可能です。追加費用が発生する場合がありますので、まずはお問い合わせください。'
                : 'Priority handling is available for some cases. Additional fees may apply. Contact us for details.'}
            </p>
          </div>
        </div>

        {/* 全プラン共通：含まれないもの */}
        <div className="mt-4 rounded-xl border border-gray-100 bg-white p-6">
          <h3 className="text-sm font-bold text-secondary mb-3">
            {lang === 'ja' ? 'すべてのプランに含まれないもの' : 'Not included in any plan'}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
            {(lang === 'ja'
              ? [
                  '日本の役所、出入国在留管理庁への提出代行',
                  '行政書士、弁護士業務',
                  '法的代理やビザ申請代理',
                  '審査結果や許可の保証',
                ]
              : [
                  'Filing with local or immigration authorities',
                  'Attorney or legal consultant services',
                  'Legal representation or visa filing',
                  'Guarantee of application outcome',
                ]
            ).map((item) => (
              <li key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                <XCircle className="w-3 h-3 text-gray-300 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
