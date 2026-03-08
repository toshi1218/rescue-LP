import React from 'react';
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
      title: '国際結婚パック',
      subtitle: '婚姻済証明書申請に必要な書類一式',
      price: '¥99,800',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'PSA出生証明書＋DFAアポスティーユ',
        'CENOMAR（独身証明書）＋DFAアポスティーユ',
        '優先対応サポート',
      ],
      notIncluded: [
        '国際郵送費（実費別途・約¥6,000〜）',
        '日本の役所・入管への提出代行',
        'ビザ申請の法的代理',
        '大使館面接の指導',
      ],
      bestFor: '国際結婚・K-1/CR-1ビザ申請で複数のフィリピン書類が必要な方向け',
    },
    {
      id: 'psa',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA取得代行',
      subtitle: '出生証明書 / 独身証明書（CENOMAR）/ 婚姻証明書 / 死亡証明書 など',
      price: '¥50,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'PSA書類取得（1通）',
        'DFAアポスティーユ込み',
        '役所申請手数料込み',
      ],
      notIncluded: [
        '国際郵送費（実費別途・約¥6,000〜）',
        '翻訳',
        '複数通の同時取得（別途見積り）',
        '日本側への提出代行',
      ],
      bestFor: '出生証明書・婚姻証明書・CENOMARを1通だけ取得したい方向け',
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: 'NBI取得代行',
      subtitle: '無犯罪証明書の取得サポート',
      price: '¥55,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'NBI Clearance取得',
        '指紋採取サポート',
        'DFAアポスティーユ（オプション）',
      ],
      notIncluded: [
        '国際郵送費（実費別途・約¥6,000〜）',
        '翻訳',
        '指紋認証にかかる外部費用',
        '日本側への提出代行',
      ],
      bestFor: '帰化申請・配偶者ビザ・在留資格手続でNBIが必要な方向け',
    },
    {
      id: 'lto',
      icon: Car,
      tag: null,
      featured: false,
      title: 'LTO関連書類取得代行',
      subtitle: '運転免許関連書類（外免切替え用）',
      price: '¥100,000',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'LTO運転免許証関連書類',
        'LTOトランザクション履歴',
        '役所申請手数料込み',
      ],
      notIncluded: [
        '国際郵送費（実費別途・約¥6,000〜）',
        '翻訳',
        '日本の免許センターへの提出代行',
        '運転免許試験の代理',
      ],
      bestFor: 'フィリピン免許から日本の免許へ切替えたい方向け',
    },
    {
      id: 'visa',
      icon: Heart,
      tag: null,
      featured: false,
      title: '配偶者ビザ',
      subtitle: '在留資格「日本人の配偶者等」申請サポート',
      price: '¥89,800',
      priceNote: '〜（税・送料別）',
      period: '約4〜8週間',
      highlights: [
        '必要書類の準備サポート',
        '申請書類チェック',
        'PSA・CENOMAR取得含む',
        '継続的フォローアップ',
      ],
      notIncluded: [
        '翻訳',
        '入管への申請代理',
        '行政書士・弁護士業務',
      ],
      bestFor: '在留資格「日本人の配偶者等」を申請する方向け',
    },
    {
      id: 'naturalization',
      icon: Award,
      tag: null,
      featured: false,
      title: '帰化申請',
      subtitle: '日本国籍取得の申請サポート',
      price: '¥89,800',
      priceNote: '〜（税・送料別）',
      period: '約6〜12週間',
      highlights: [
        '必要書類の準備サポート',
        '帰化許可申請書類一式',
        '継続的フォローアップ',
        '屋号・納税関連書類など',
      ],
      notIncluded: [
        '翻訳',
        '法務局への申請代理',
        '行政書士・弁護士業務',
      ],
      bestFor: '日本国籍の取得を検討しているフィリピン国籍の方向け',
    },
  ],
  en: [
    {
      id: 'pack',
      icon: Gem,
      tag: 'Most Popular',
      featured: true,
      title: 'Immigration Document Package',
      subtitle: 'All PSA & NBI documents Apostille-ready for immigration worldwide (US Visa Applicants: K-1 & CR-1)',
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
      id: 'psa',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA Document Retrieval',
      subtitle: 'Birth Certificate / Marriage Certificate / CENOMAR',
      price: 'US$349',
      priceNote: '〜 (Apostille + DHL incl.)',
      period: 'Approx. 4–6 weeks',
      highlights: [
        'PSA document retrieval (1 copy)',
        'DFA Apostille authentication',
        'Govt. application fee included',
        'DHL Express Worldwide',
      ],
      notIncluded: [
        'Translation',
        'Multiple copies (quoted separately)',
        'Filing with local authorities',
      ],
      bestFor: 'Best for clients who need one PSA document for a visa, immigration, or marriage case.',
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

  const featured = plans.find((p) => p.featured)!;
  const others = plans.filter((p) => !p.featured);

  return (
    <section className="py-16 px-4" id="pricing">
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-12">
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-2">PRICE</span>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">{t('pricing.title')}</h2>
          <div className="h-0.5 w-16 bg-primary mt-3" />
          <p className="text-xs text-gray-500 mt-3">{t('pricing.note')}</p>
        </div>

        {/* フィーチャードプラン（横幅フル） */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          {/* 背景 */}
          <div className="absolute inset-0 bg-secondary" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          </div>
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent" />

          <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            {/* 左：タイトル・価格 */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                <featured.icon className="w-3.5 h-3.5" />
                {featured.tag}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{featured.title}</h3>
              <p className="text-sm text-white/60 mb-6">{featured.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">{featured.price}</span>
                <span className="text-sm text-white/50">{featured.priceNote}</span>
              </div>
              <p className="text-xs text-white/40">{lang === 'ja' ? `納期：${featured.period}` : `Delivery: ${featured.period}`}</p>
            </div>

            {/* 右：含まれるもの＋Not Included＋CTA */}
            <div className="md:w-80 flex-shrink-0">
              <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                {lang === 'ja' ? '含まれるもの' : "What's Included"}
              </p>
              <ul className="space-y-2 mb-4">
                {featured.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              {featured.notIncluded && (
                <>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">
                    {lang === 'ja' ? '含まれないもの' : 'Not Included'}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {featured.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/50">
                        <XCircle className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {featured.bestFor && (
                <p className="text-xs text-primary/80 italic mb-5">{featured.bestFor}</p>
              )}
              <a
                href="#contact"
                onClick={() => trackEvent('cta_click', { location: 'pricing', type: featured.id, variant: ctaVariant })}
                className="group flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all duration-200"
              >
                {t('pricing.ctaBtn')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* その他プラン（テーブル形式） */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-soft">
          {/* テーブルヘッダー（デスクトップのみ） */}
          <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-0 bg-gray-50 border-b border-gray-100 px-6 py-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ja' ? 'サービス' : 'Service'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ja' ? '納期' : 'Delivery'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ja' ? '料金' : 'Price'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider text-right"></span>
          </div>

          {others.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`transition-colors hover:bg-primary/[0.02] ${
                  i < others.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* モバイル用カードレイアウト */}
                <div className="md:hidden px-5 py-5 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-secondary leading-snug">{plan.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{plan.subtitle}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-base font-bold text-primary">{plan.price}</span>
                      <span className="text-xs text-gray-400 block">{plan.priceNote}</span>
                      <span className="text-xs text-gray-400 block mt-0.5">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                    className="group flex items-center justify-center gap-1.5 w-full bg-primary text-white text-xs font-bold py-2.5 px-4 rounded-lg hover:bg-primary-hover transition-all duration-200"
                  >
                    {lang === 'ja' ? '相談する' : 'Inquire'}
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* デスクトップ用テーブルレイアウト */}
                <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-0 items-center px-6 py-5">
                  {/* サービス名 */}
                  <div className="flex items-start gap-3 pr-4">
                    <div className="w-9 h-9 rounded-lg bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary leading-snug">{plan.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{plan.subtitle}</p>
                      {plan.bestFor && (
                        <p className="text-xs text-primary/70 mt-1 leading-snug italic">{plan.bestFor}</p>
                      )}
                    </div>
                  </div>

                  {/* 納期 */}
                  <div>
                    <p className="text-xs text-gray-500">{plan.period}</p>
                    <ul className="mt-1.5 space-y-1">
                      {plan.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-center gap-1.5 text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 料金 */}
                  <div>
                    <span className="text-base font-bold text-primary">{plan.price}</span>
                    <span className="text-xs text-gray-400 block">{plan.priceNote}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-end">
                    <a
                      href="#contact"
                      onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                      className="group inline-flex items-center gap-1 bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-all duration-200 whitespace-nowrap"
                    >
                      {lang === 'ja' ? '相談する' : 'Inquire'}
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-400 mt-5 leading-relaxed">
          {lang === 'ja'
            ? '※表示価格はすべて税抜きです。取得難易度により変動する場合があります。'
            : '* All prices include Philippine tax and DHL international shipping worldwide. Final amount may vary by document condition.'}
        </p>

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
                  '発送先（国内 / 海外）',
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
                  '翻訳（一部プランに含む場合を除く）',
                  '日本の役所・入管への提出代行',
                  '行政書士・弁護士業務',
                  '法的代理やビザ申請代理',
                  '審査結果・許可の保証',
                ]
              : [
                  'Translation (unless stated in the plan)',
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
