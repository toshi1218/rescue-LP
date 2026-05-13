import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowRight, Gem, FileText, Fingerprint, Car, Heart, Award, AlertCircle, Zap } from 'lucide-react';
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
      subtitle: '日本の役所への婚姻届に必要なフィリピン書類をまとめて取得',
      why: '日本の役所で婚姻届を出すには、フィリピン側の書類（出生証明・独身証明など）をアポスティーユ付きで用意する必要があります',
      outcome: '書類が揃えば、日本の市区町村への婚姻届の提出が可能になります',
      price: '¥90,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      detailPath: '/ja/kokusai-kekkon-guide/',
    },
    {
      id: 'visa',
      icon: Heart,
      tag: null,
      featured: false,
      title: '配偶者ビザ準備書類パック',
      subtitle: '入管への在留資格申請に必要なフィリピン書類を取得',
      why: '入管への配偶者ビザ申請では、フィリピン側の婚姻・出生証明書をアポスティーユ付きで提出する必要があります',
      outcome: '書類が揃えば、入管への在留資格認定証明書交付申請（または変更申請）が前に進みます',
      price: '¥90,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      detailPath: '/ja/haigusha-visa-shorui/',
    },
    {
      id: 'cenomar',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'CENOMAR（独身証明書）単品',
      subtitle: 'PSA発行のCENOMAR取得・国際発送（1点から対応）',
      why: '国際結婚の婚姻届や配偶者ビザ申請では、フィリピン側の独身証明書（CENOMAR）をアポスティーユ付きで用意する必要があります',
      outcome: 'CENOMAR原本が揃えば、婚姻届の受理やビザ申請書類の準備が前に進みます',
      price: '¥20,000',
      priceNote: '〜（税・送料別 / アポスティーユなし）',
      priceApostille: '¥50,000〜',
      period: '約4〜6週間',
      detailPath: '/ja/cenomar/',
    },
    {
      id: 'psa-birth',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA出生証明書単品',
      subtitle: 'PSA発行の出生証明書取得・国際発送（1点から対応）',
      why: 'ビザ申請・帰化・国際結婚の手続きでは、PSA発行の出生証明書原本をアポスティーユ付きで提出する必要があります',
      outcome: 'PSA出生証明書原本が揃えば、ビザや婚姻手続きの書類準備が前に進みます',
      price: '¥20,000',
      priceNote: '〜（税・送料別 / アポスティーユなし）',
      priceApostille: '¥50,000〜',
      period: '約4〜6週間',
      detailPath: '/ja/psa-shussei-cost/',
    },
    {
      id: 'psa-marriage',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA婚姻証明書単品',
      subtitle: 'PSA発行の婚姻証明書取得・国際発送（1点から対応）',
      why: '配偶者ビザ申請・帰化・在留資格変更などの手続きでは、PSA発行の婚姻証明書原本をアポスティーユ付きで提出する必要があります',
      outcome: 'PSA婚姻証明書原本が揃えば、ビザや帰化手続きの書類準備が前に進みます',
      price: '¥20,000',
      priceNote: '〜（税・送料別 / アポスティーユなし）',
      priceApostille: '¥50,000〜',
      period: '約4〜6週間',
      detailPath: '/ja/psa-kekkon-shomeisho/',
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: 'NBIクリアランス取得サポート',
      subtitle: 'ビザ申請・帰化・在留資格手続きに必要な無犯罪証明書を取得',
      why: '入管・帰化・海外ビザ申請では、フィリピン側の無犯罪証明書（NBI Clearance）の提出が求められます',
      outcome: '書類が揃えば、ビザや在留資格・帰化申請の書類セットが完成します',
      price: '¥55,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      detailPath: '/ja/nbi-clearance/',
    },
    {
      id: 'lto',
      icon: Car,
      tag: null,
      featured: false,
      title: '外免切替サポート',
      subtitle: 'フィリピン免許から日本免許への切替に必要なLTO書類を取得',
      why: '外国免許を日本の免許に切り替えるには、フィリピンLTO発行の書類（運転歴証明など）の原本提出が必要です',
      outcome: '書類が揃えば、運転免許センターでの外免切替手続きを開始できます',
      price: '¥100,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      detailPath: '/ja/gaimen-kirikae-guide/',
    },
    {
      id: 'naturalization',
      icon: Award,
      tag: null,
      featured: false,
      title: '帰化申請書類パック',
      subtitle: '法務局への帰化申請に必要なフィリピン書類をまとめて取得',
      why: '帰化申請では法務局からフィリピンの出生・婚姻・無犯罪証明書などの原本提出が求められます',
      outcome: '必要書類が揃えば、法務局への帰化申請の書類準備が整います',
      price: '¥110,000',
      priceNote: '〜（税・送料別）',
      period: '約6〜10週間',
      detailPath: '/ja/kika-shinsei-guide/',
    },
  ],
  en: [
    {
      id: 'pack-basic',
      icon: Gem,
      tag: 'Most Popular',
      featured: true,
      title: 'International Marriage Basic Package',
      subtitle: 'PSA Birth Certificate & CENOMAR with Apostille — ready for marriage registration',
      price: 'US$499',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/international-marriage-guide/',
    },
    {
      id: 'pack-full',
      icon: Gem,
      tag: null,
      featured: false,
      title: 'International Marriage Full Package',
      subtitle: 'PSA, CENOMAR & NBI — Apostille-ready for marriage, spouse visa & immigration',
      price: 'US$699',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/international-marriage-guide/',
    },
    {
      id: 'cenomar',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'CENOMAR — Single Document',
      subtitle: 'Physical PSA original with DFA-stamped Apostille — accepted by immigration authorities worldwide',
      price: 'US$349',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/cenomar/',
    },
    {
      id: 'psa-birth',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA Birth Certificate — Single Document',
      subtitle: 'Physical PSA original with DFA-stamped Apostille — not an e-certificate',
      price: 'US$349',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/psa-birth-certificate/',
    },
    {
      id: 'psa-marriage',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA Marriage Certificate — Single Document',
      subtitle: 'Physical PSA original with DFA-stamped Apostille — for spouse visa, immigration, and naturalization',
      price: 'US$349',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/psa-marriage-certificate/',
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: 'NBI Clearance Retrieval',
      subtitle: 'Philippine police clearance for immigration & visa applications',
      price: 'US$399',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/nbi-clearance/',
    },
    {
      id: 'lto',
      icon: Car,
      tag: null,
      featured: false,
      title: 'LTO Document Retrieval',
      subtitle: "Philippine driver's license records for license conversion",
      price: 'US$449',
      priceNote: 'all-in',
      period: 'Approx. 4–6 weeks',
      detailPath: '/en/drivers-license-conversion/',
    },
    {
      id: 'visa',
      icon: Heart,
      tag: null,
      featured: false,
      title: 'Spouse / Partner Visa Support',
      subtitle: 'Philippine documents for spouse & partner visas worldwide',
      price: 'US$599',
      priceNote: 'all-in',
      period: 'Approx. 4–8 weeks',
      detailPath: '/en/spouse-visa-documents/',
    },
    {
      id: 'naturalization',
      icon: Award,
      tag: null,
      featured: false,
      title: 'Citizenship & Naturalization Documents',
      subtitle: 'Philippine documents for citizenship applications worldwide',
      price: 'US$699',
      priceNote: '〜 all-in',
      period: 'Approx. 6–12 weeks',
      detailPath: '/en/naturalization-guide/',
    },
    {
      id: 'complex',
      icon: AlertCircle,
      tag: null,
      featured: false,
      title: 'Complex / Mismatch / Annotation / Urgent Case',
      subtitle: 'Remarriage, name discrepancy, late registration, annotation, or time-sensitive cases',
      price: 'US$899',
      priceNote: '〜',
      period: 'Case by case',
      detailPath: '#contact',
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
            <p>※取得難易度、記載内容の不一致、追加確認の有無により変動します</p>
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
                  {/* タグ */}
                  {plan.tag && (
                    <div className="inline-flex items-center gap-1 bg-primary/20 border border-primary/30 text-primary-dark text-xs font-bold px-2 py-0.5 rounded-full mb-3 self-start">
                      {plan.tag}
                    </div>
                  )}

                  {/* 価格（最上部・大きく） */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-primary leading-none">{plan.price}</span>
                      <span className="text-xs text-gray-500">{plan.priceNote}</span>
                    </div>
                    {(plan as any).priceApostille && (
                      <div className="flex items-baseline gap-2 mt-1.5 pl-2 border-l-2 border-primary/30">
                        <span className="text-sm font-bold text-secondary">{(plan as any).priceApostille}</span>
                        <span className="text-xs text-gray-400">DFA物理アポスティーユ付き</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      {lang === 'ja' ? `納期：${plan.period}` : `Delivery: ${plan.period}`}
                    </p>
                  </div>

                  {/* タイトル・サブタイトル */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-primary/10' : 'bg-secondary/5'}`}>
                      <Icon className={`w-4 h-4 ${plan.featured ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-secondary leading-snug">{plan.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{plan.subtitle}</p>
                      {(plan as any).why && (
                        <p className="text-xs text-gray-500 mt-1 leading-snug">
                          <span className="font-semibold">必要理由：</span>{(plan as any).why}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTAボタン2つ */}
                  <div className="mt-auto flex gap-2">
                    <Link
                      to={(plan as any).detailPath}
                      onClick={() => trackEvent('cta_click', { location: 'pricing_detail', type: plan.id, variant: ctaVariant })}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-primary text-primary font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-primary/5 transition-all duration-200"
                    >
                      {lang === 'ja' ? '詳細はこちら' : 'Learn More'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#contact"
                      onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-secondary font-bold text-sm py-2.5 px-4 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200"
                    >
                      {lang === 'ja' ? '相談する' : 'Get a Quote'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {lang === 'en' && (
          <p className="text-xs text-gray-400 mt-5 leading-relaxed">
            All prices include document retrieval, DFA Apostille when required, and DHL Express international shipping. Final price may vary for urgent, complex, mismatched, or hard-to-retrieve records.
          </p>
        )}

        {/* 目的別に必要書類を確認したい方へ */}
        {lang === 'ja' && (
          <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-base font-bold text-secondary mb-2">目的別に必要書類を確認したい方へ</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              配偶者ビザ、帰化申請、国際結婚などの手続きでは、必要になるフィリピン書類がケースによって異なります。<br />
              IGRSでは、申請そのものの代理は行っていませんが、手続きに必要なフィリピン書類の取得をサポートしています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm font-bold text-secondary mb-2">よくある対象手続き</p>
                <ul className="space-y-1.5">
                  {['日本での国際結婚', '在留資格「日本人の配偶者等」', '帰化申請', '外免切替', '相続や各種届出'].map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-secondary mb-2">対応できる主な書類</p>
                <ul className="space-y-1.5">
                  {[
                    'PSA Birth Certificate（出生証明書）',
                    'PSA Marriage Certificate（婚姻証明書）',
                    'CENOMAR（独身証明書）',
                    'NBI Clearance（無犯罪証明書）',
                    'LTO関連書類',
                    'DFA Apostille',
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              必要書類が分からない場合は、用途に合わせてご案内します。<br />
              まずは、結婚、ビザ、帰化、外免切替などの目的を添えてお問い合わせください。
            </p>
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'pricing_purpose', type: 'general', variant: ctaVariant })}
              className="group inline-flex items-center gap-1.5 bg-primary text-secondary text-xs font-bold py-2.5 px-5 rounded-lg hover:bg-primary-hover transition-all duration-200"
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
                {
                  to: '/en/spouse-visa-documents/',
                  flag: '🇪🇺',
                  label: 'Europe (NL, DE, and more)',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
                },
                {
                  to: '/en/spouse-visa-documents/',
                  flag: '🌏',
                  label: 'Other Countries',
                  docs: ['CENOMAR + Apostille', 'PSA Birth Certificate + Apostille', 'NBI Clearance + Apostille'],
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
                      <li key={doc} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 self-start text-xs font-semibold text-primary-dark mt-0.5 group-hover:underline">
                    See full checklist <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Don't see your country listed above? No problem — we serve clients in 50+ countries worldwide. <a href="#contact" className="text-primary-dark underline hover:text-primary">Contact us</a> and we'll confirm the requirements for your destination.
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
                ? '緊急・急ぎの場合は追加料金を頂くことがあります。対応可否はケースにより異なりますので、まずはお問い合わせください。'
                : 'Priority handling is available for some cases. Additional fees apply. Contact us for details.'}
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
