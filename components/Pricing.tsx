import React, { useState } from 'react';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown, Heart, Award } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const plansData = {
  ja: [
    {
      id: 'psa',
      icon: FileText,
      title: 'PSA取得代行',
      subtitle: '出生証明書 / 婚姻証明書 / CENOMAR',
      price: '¥40,000',
      usdRef: '$270',
      note: '〜 (税・送料別)',
      highlights: ['役所申請手数料込み', '国際送料別途'],
      details: {
        period: '約4週間',
        note: '※税・国際送料は別途',
        docs: ['出生証明書（+ アポスティーユ）', '婚姻証明書（+ アポスティーユ）', 'CENOMAR（+ アポスティーユ）'],
      },
      featured: false,
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      title: 'NBI取得代行',
      subtitle: '無犯罪証明書の取得サポート',
      price: '¥45,000',
      usdRef: '$300',
      note: '〜 (税・送料別)',
      highlights: ['指紋採取サポート', 'DFA認証オプション可'],
      details: {
        period: '約4週間',
        note: '※税・国際送料は別途',
        docs: ['NBI無犯罪証明書', 'DFAアポスティーユ認証（オプション）'],
      },
      featured: false,
    },
    {
      id: 'lto',
      icon: FileText,
      title: 'LTO関連書類取得代行',
      subtitle: '運転免許関連書類の取得サポート（外免切り替え用）',
      price: '¥85,000',
      usdRef: '$570',
      note: '〜 (税・送料別)',
      highlights: ['役所申請手数料込み', '国際送料別途'],
      details: {
        period: '約4週間',
        note: '※税・国際送料は別途',
        docs: ['LTO運転免許証関連書類', 'LTOトランザクション履歴'],
      },
      featured: false,
    },
    {
      id: 'pack',
      icon: Gem,
      title: '国際結婚パック',
      subtitle: '婚姻済証明書申請に必要な書類一式',
      price: '¥85,000',
      usdRef: '$570',
      note: '〜 (税・送料別)',
      highlights: ['日本語翻訳込み', '優先対応サポート'],
      details: {
        period: '約4週間',
        note: '※税・国際送料は別途',
        docs: ['出生証明書（+ アポスティーユ）', 'セノマー独身証明書（+ アポスティーユ）'],
      },
      featured: true,
    },
    {
      id: 'visa',
      icon: Heart,
      title: '配偶者ビザ',
      subtitle: '在留資格「日本人の配偶者等」申請サポート',
      price: '¥85,000',
      usdRef: '$570',
      note: '〜 (税・送料別)',
      highlights: ['必要書類の準備サポート', '申請書類チェック'],
      details: {
        period: '要相談',
        note: '※ケースにより異なります',
        docs: ['在留資格認定証明書交付申請書', '婚姻証明書・戸籍謄本など'],
      },
      featured: false,
    },
    {
      id: 'naturalization',
      icon: Award,
      title: '帰化申請',
      subtitle: '日本国籍取得の申請サポート',
      price: '¥85,000',
      usdRef: '$570',
      note: '〜 (税・送料別)',
      highlights: ['必要書類の準備サポート', '継続的フォローアップ'],
      details: {
        period: '要相談',
        note: '※ケースにより異なります',
        docs: ['帰化許可申請書類一式', '居住・納税関連書類など'],
      },
      featured: false,
    },
  ],
  en: [
    {
      id: 'psa',
      icon: FileText,
      title: 'PSA Document Procurement',
      subtitle: 'Birth Certificate / Marriage Certificate / CENOMAR',
      price: 'US$299–349',
      usdRef: '$270',
      note: '(excl. tax & shipping)',
      highlights: ['Gov\'t filing fees included', 'Intl. shipping extra'],
      details: {
        period: 'Approx. 4 weeks',
        note: '* Tax & intl. shipping extra',
        docs: ['Birth Certificate (+ Apostille)', 'Marriage Certificate (+ Apostille)', 'CENOMAR (+ Apostille)'],
      },
      featured: false,
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      title: 'NBI Clearance Procurement',
      subtitle: 'NBI Clearance acquisition support',
      price: 'US$349–399',
      usdRef: '$300',
      note: '(excl. tax & shipping)',
      highlights: ['Fingerprint support included', 'DFA authentication optional'],
      details: {
        period: 'Approx. 4 weeks',
        note: '* Tax & intl. shipping extra',
        docs: ['NBI Clearance', 'DFA Apostille Authentication (optional)'],
      },
      featured: false,
    },
    {
      id: 'lto',
      icon: FileText,
      title: 'LTO Document Procurement',
      subtitle: "Driver's license documents for license transfer",
      price: 'US$799–999',
      usdRef: '$570',
      note: '(excl. tax & shipping)',
      highlights: ['Gov\'t filing fees included', 'Intl. shipping extra'],
      details: {
        period: 'Approx. 4 weeks',
        note: '* Tax & intl. shipping extra',
        docs: ["LTO Driver's License Documents", 'LTO Transaction History'],
      },
      featured: false,
    },
    {
      id: 'pack',
      icon: Gem,
      title: 'International Marriage Pack',
      subtitle: 'Full document set for marriage registration',
      price: 'US$799–999',
      usdRef: '$570',
      note: '(excl. tax & shipping)',
      highlights: ['Japanese translation included', 'Priority support'],
      details: {
        period: 'Approx. 4 weeks',
        note: '* Tax & intl. shipping extra',
        docs: ['Birth Certificate (+ Apostille)', 'CENOMAR (+ Apostille)'],
      },
      featured: true,
    },
    {
      id: 'visa',
      icon: Heart,
      title: 'Spouse Visa',
      subtitle: 'Spouse of Japanese national visa application support',
      price: 'US$799–999',
      usdRef: '$570',
      note: '(excl. tax & shipping)',
      highlights: ['Document preparation support', 'Application review'],
      details: {
        period: 'Varies by case',
        note: '* Timeline depends on individual case',
        docs: ['Certificate of Eligibility application', 'Marriage certificate, family register, etc.'],
      },
      featured: false,
    },
    {
      id: 'naturalization',
      icon: Award,
      title: 'Naturalization Application',
      subtitle: 'Japanese citizenship application support',
      price: 'US$799–999',
      usdRef: '$570',
      note: '(excl. tax & shipping)',
      highlights: ['Document preparation support', 'Ongoing follow-up'],
      details: {
        period: 'Varies by case',
        note: '* Timeline depends on individual case',
        docs: ['Naturalization application documents', 'Residency & tax documents, etc.'],
      },
      featured: false,
    },
  ],
};

const Pricing: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const ctaVariant = getCtaVariant();
  const { lang, t } = useLanguage();
  const plans = plansData[lang];

  return (
    <section className="py-12 px-4 max-w-md md:max-w-2xl lg:max-w-6xl mx-auto" id="pricing">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
        <h2 className="text-xl font-bold text-secondary">{t('pricing.title')}</h2>
        <p className="text-xs text-gray-500 mt-2">{t('pricing.note')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isOpen = openId === plan.id;

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-shadow ${
                plan.featured
                  ? 'shadow-xl border border-primary/30 lg:scale-105 z-10 relative'
                  : 'shadow-card border border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  {t('pricing.featured')}
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-secondary text-lg">{plan.title}</h3>
                    <p className="text-xs text-gray-500">{plan.subtitle}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${plan.featured ? 'bg-primary/10 text-primary' : 'bg-secondary/5 text-secondary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-display text-primary">{plan.price}</span>
                    <span className="text-xs text-gray-500">{plan.note}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setOpenId(isOpen ? null : plan.id)}
                  aria-expanded={isOpen}
                  aria-controls={`plan-details-${plan.id}`}
                  className="w-full py-3 rounded-lg border font-bold text-sm transition-colors flex items-center justify-center gap-1 group mb-3 border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  {t('pricing.detailsBtn')}
                  {isOpen
                    ? <ChevronDown className="w-4 h-4 transition-transform" />
                    : <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  }
                </button>

                {isOpen && (
                  <div id={`plan-details-${plan.id}`} className="bg-gray-50 rounded-xl p-4 mb-3 text-sm text-gray-700 space-y-3">
                    <div>
                      <p className="font-bold text-secondary mb-1">{t('pricing.docsTitle')}</p>
                      <ul className="space-y-1">
                        {plan.details.docs.map((doc) => (
                          <li key={doc} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>{t('pricing.deliveryLabel')}: {plan.details.period}</span>
                      <span>{plan.details.note}</span>
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                  className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transition-colors ${
                    plan.featured
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-light'
                      : 'bg-primary text-white hover:bg-primary-hover'
                  }`}
                >
                  {t('pricing.ctaBtn')}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 text-center mt-6 max-w-xl mx-auto leading-relaxed">
        {lang === 'ja'
          ? '※表示価格はすべて税抜きです。取得難易度により変動する場合があります。'
          : '* Final quote depends on document condition, shipping destination, and exchange rate.'}
      </p>
    </section>
  );
};

export default Pricing;
