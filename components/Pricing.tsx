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
        period: '約4〜6週間',
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
      highlights: ['指紋採取サポート', '国際送料別途'],
      details: {
        period: '約4〜6週間',
        note: '※税・国際送料は別途',
        docs: ['NBI無犯罪証明書（+ アポスティーユ）'],
      },
      featured: false,
    },
    {
      id: 'lto',
      icon: FileText,
      title: 'LTO関連書類取得代行',
      subtitle: '運転免許関連書類の取得サポート（外免切り替え用）',
      price: '¥100,000',
      usdRef: '$570',
      note: '〜 (税・送料別)',
      highlights: ['役所申請手数料込み', '国際送料別途'],
      details: {
        period: '約4〜6週間',
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
        period: '約4〜6週間',
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
      title: 'PSA Document Retrieval',
      subtitle: 'Birth Certificate / Marriage Certificate / CENOMAR + DFA Apostille',
      price: 'US$289–359',
      usdRef: '$289',
      note: '(Apostille + tax + DHL incl.)',
      highlights: ['DFA Apostille authentication included', 'DHL Express to USA/Canada/AU incl.'],
      details: {
        period: 'Approx. 4–6 weeks',
        note: '* Apostille, tax & DHL intl. shipping included',
        docs: ['Birth Certificate + DFA Apostille', 'Marriage Certificate + DFA Apostille', 'CENOMAR + DFA Apostille'],
      },
      featured: false,
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      title: 'NBI Clearance Retrieval',
      subtitle: 'NBI Clearance + DFA Apostille — required for K-1 & CR-1 visas',
      price: 'US$329–429',
      usdRef: '$329',
      note: '(Apostille + tax + DHL incl.)',
      highlights: ['Fingerprint appointment support', 'DFA Apostille included', 'MATCH FOUND resolution support'],
      details: {
        period: 'Approx. 4–6 weeks',
        note: '* Apostille, tax & DHL intl. shipping included',
        docs: ['NBI Clearance', 'DFA Apostille Authentication'],
      },
      featured: false,
    },
    {
      id: 'lto',
      icon: FileText,
      title: 'LTO Document Retrieval',
      subtitle: "Philippine driver's license records for immigration background checks",
      price: 'US$699–899',
      usdRef: '$699',
      note: '(tax & DHL incl.)',
      highlights: ['Govt. application fee included', 'DHL Express to USA/Canada/AU incl.'],
      details: {
        period: 'Approx. 4–6 weeks',
        note: '* Tax & DHL intl. shipping included',
        docs: ["LTO Driver's License Documents", 'LTO Transaction History'],
      },
      featured: false,
    },
    {
      id: 'pack',
      icon: Gem,
      title: 'K-1 / CR-1 Visa Document Package',
      subtitle: 'All PSA & NBI documents Apostille-ready for USCIS / NVC submission',
      price: 'US$799–1,049',
      usdRef: '$799',
      note: '(Apostille + tax + DHL incl.)',
      highlights: ['Apostille Ready — submit directly to USCIS/NVC', 'Priority support', 'DHL Express to your US address'],
      details: {
        period: 'Approx. 4–6 weeks',
        note: '* Apostille, tax & DHL intl. shipping included',
        docs: ['PSA Birth Certificate + DFA Apostille', 'CENOMAR + DFA Apostille'],
      },
      featured: true,
    },
    {
      id: 'visa',
      icon: Heart,
      title: 'CR-1 / IR-1 Spouse Visa Support',
      subtitle: 'Document support for CR-1, IR-1 & K-1 fiancé visa applicants',
      price: 'US$799–1,049',
      usdRef: '$799',
      note: '(Apostille + tax + DHL incl.)',
      highlights: ['Document preparation support', 'Apostille Ready for USCIS/NVC submission', 'Application document review'],
      details: {
        period: 'Contact for details',
        note: '* Varies by case',
        docs: ['PSA Birth Certificate + Apostille', 'CENOMAR + Apostille', 'NBI Clearance + Apostille'],
      },
      featured: false,
    },
    {
      id: 'naturalization',
      icon: Award,
      title: 'US Embassy Interview Prep',
      subtitle: 'All Philippine documents ready before your US Embassy interview',
      price: 'US$799–1,049',
      usdRef: '$799',
      note: '(Apostille + tax + DHL incl.)',
      highlights: ['Document preparation support', 'Apostille Ready for US Embassy checklist', 'Ongoing follow-up'],
      details: {
        period: 'Contact for details',
        note: '* Varies by case',
        docs: ['PSA Birth Certificate + Apostille', 'CENOMAR + Apostille', 'NBI Clearance + Apostille'],
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
    <section className="py-16 px-4 max-w-md md:max-w-2xl lg:max-w-6xl mx-auto" id="pricing">
      <div className="text-center mb-12">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-2 block">Price</span>
        <h2 className="text-xl font-bold text-secondary">{t('pricing.title')}</h2>
        <p className="text-xs text-gray-500 mt-2">{t('pricing.note')}</p>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isOpen = openId === plan.id;

          return (
            <div
              key={plan.id}
              className={`rounded-2xl overflow-hidden flex flex-col h-full transition-all relative ${
                plan.featured
                  ? 'shadow-2xl lg:scale-105 z-10'
                  : 'bg-white shadow-card border border-gray-100 hover:shadow-lg hover:-translate-y-0.5'
              }`}
              style={plan.featured ? {background: 'linear-gradient(160deg, #1a365d 0%, #2c5282 100%)'} : {}}
            >
              {plan.featured && (
                <>
                  {/* 輝きエフェクト */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl flex items-center gap-1">
                    ✦ {t('pricing.featured')}
                  </div>
                </>
              )}
              {!plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100 rounded-t-2xl"></div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`font-bold text-lg ${plan.featured ? 'text-white' : 'text-secondary'}`}>{plan.title}</h3>
                    <p className={`text-xs mt-0.5 ${plan.featured ? 'text-white/60' : 'text-gray-500'}`}>{plan.subtitle}</p>
                  </div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${plan.featured ? 'bg-primary/20 text-primary' : 'bg-secondary/5 text-secondary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold font-display ${plan.featured ? 'text-primary' : 'text-primary'}`}>{plan.price}</span>
                    <span className={`text-xs ${plan.featured ? 'text-white/50' : 'text-gray-500'}`}>{plan.note}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.highlights.map((item) => (
                    <li key={item} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-primary' : 'text-primary'}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setOpenId(isOpen ? null : plan.id)}
                  aria-expanded={isOpen}
                  aria-controls={`plan-details-${plan.id}`}
                  className={`w-full py-3 rounded-xl border font-bold text-sm transition-colors flex items-center justify-center gap-1 group mb-3 ${
                    plan.featured
                      ? 'border-white/20 text-white hover:bg-white/10'
                      : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  {t('pricing.detailsBtn')}
                  {isOpen
                    ? <ChevronDown className="w-4 h-4 transition-transform" />
                    : <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  }
                </button>

                {isOpen && (
                  <div id={`plan-details-${plan.id}`} className={`rounded-xl p-4 mb-3 text-sm space-y-3 ${plan.featured ? 'bg-white/10 text-white/80' : 'bg-gray-50 text-gray-700'}`}>
                    <div>
                      <p className={`font-bold mb-1 ${plan.featured ? 'text-white' : 'text-secondary'}`}>{t('pricing.docsTitle')}</p>
                      <ul className="space-y-1">
                        {plan.details.docs.map((doc) => (
                          <li key={doc} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`flex gap-4 text-xs ${plan.featured ? 'text-white/50' : 'text-gray-500'}`}>
                      <span>{t('pricing.deliveryLabel')}: {plan.details.period}</span>
                      <span>{plan.details.note}</span>
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { location: 'pricing', type: plan.id, variant: ctaVariant })}
                  className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1 transition-all ${
                    plan.featured
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02]'
                      : 'bg-primary text-white hover:bg-primary-hover hover:scale-[1.01]'
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
          : '* All prices include Philippine tax and DHL international shipping to the USA. Final amount may vary by document condition.'}
      </p>
    </section>
  );
};

export default Pricing;
