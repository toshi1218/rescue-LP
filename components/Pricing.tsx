import React from 'react';
import { CheckCircle, ArrowRight, Gem, FileText, Fingerprint, Car, Heart, Award } from 'lucide-react';
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
      price: '¥89,800',
      priceNote: '〜（税・送料別）',
      period: '約4〜6週間',
      highlights: [
        'PSA出生証明書＋DFAアポスティーユ',
        'CENOMAR（独身証明書）＋DFAアポスティーユ',
        '日本語翻訳込み',
        '優先対応サポート',
        '国際郵送（日本へ）',
      ],
    },
    {
      id: 'psa',
      icon: FileText,
      tag: null,
      featured: false,
      title: 'PSA取得代行',
      subtitle: '出生証明書 / 婚姻証明書 / CENOMAR',
      price: '¥40,000',
      priceNote: '〜（税・送料別）',
      period: '約3〜5週間',
      highlights: [
        'PSA書類取得（1通）',
        'DFAアポスティーユ（オプション）',
        '役所申請手数料込み',
        '国際郵送（日本へ）',
      ],
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      tag: null,
      featured: false,
      title: 'NBI取得代行',
      subtitle: '無犯罪証明書の取得サポート',
      price: '¥50,000',
      priceNote: '〜（税・送料別）',
      period: '約3〜5週間',
      highlights: [
        'NBI Clearance取得',
        '指紋採取サポート',
        'DFAアポスティーユ（オプション）',
        '国際郵送（日本へ）',
      ],
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
        '国際郵送（日本へ）',
      ],
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
      period: '要相談',
      highlights: [
        '必要書類の準備サポート',
        '申請書類チェック',
        'PSA・CENOMAR取得含む',
        '継続的フォローアップ',
      ],
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
      period: '要相談',
      highlights: [
        '必要書類の準備サポート',
        '帰化許可申請書類一式',
        '継続的フォローアップ',
        '屋号・納税関連書類など',
      ],
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
        'Priority support',
        'DHL Express Worldwide',
        'All-inclusive pricing',
      ],
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
      period: 'Approx. 4–5 weeks',
      highlights: [
        'PSA document retrieval (1 copy)',
        'DFA Apostille authentication',
        'Govt. application fee included',
        'DHL Express Worldwide',
      ],
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
      period: 'Approx. 4–5 weeks',
      highlights: [
        'NBI Clearance retrieval',
        'Fingerprint appointment support',
        'DFA Apostille included',
        'DHL Express Worldwide',
      ],
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
      period: 'Contact for details',
      highlights: [
        'Document preparation support',
        'Apostille-ready for immigration authorities',
        'PSA & CENOMAR included',
        'Application document review',
      ],
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
      period: 'Contact for details',
      highlights: [
        'Document preparation support',
        'Apostille-ready for government checklist',
        'PSA & NBI included',
        'Ongoing follow-up',
      ],
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

            {/* 右：含まれるもの＋CTA */}
            <div className="md:w-72 flex-shrink-0">
              <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                {lang === 'ja' ? '含まれるもの' : "What's Included"}
              </p>
              <ul className="space-y-2.5 mb-6">
                {featured.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
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
          {/* テーブルヘッダー */}
          <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr_auto] gap-0 bg-gray-50 border-b border-gray-100 px-6 py-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ja' ? 'サービス' : 'Service'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:block">{lang === 'ja' ? '納期' : 'Delivery'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ja' ? '料金' : 'Price'}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider text-right"></span>
          </div>

          {others.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr_auto] gap-0 items-center px-6 py-5 transition-colors hover:bg-primary/[0.02] ${
                  i < others.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                {/* サービス名 */}
                <div className="flex items-start gap-3 pr-4">
                  <div className="w-9 h-9 rounded-lg bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary leading-snug">{plan.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">{plan.subtitle}</p>
                    {/* モバイル：含まれるもの */}
                    <ul className="mt-2 space-y-1 md:hidden">
                      {plan.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="flex items-center gap-1.5 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 納期（デスクトップのみ） */}
                <div className="hidden md:block">
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
                <div className="text-right md:text-left pr-4 md:pr-0">
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
            );
          })}
        </div>

        <p className="text-xs text-gray-400 mt-5 leading-relaxed">
          {lang === 'ja'
            ? '※表示価格はすべて税抜きです。取得難易度により変動する場合があります。'
            : '* All prices include Philippine tax and DHL international shipping worldwide. Final amount may vary by document condition.'}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
