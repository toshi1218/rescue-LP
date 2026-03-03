import React from 'react';
import { Baby, Heart, UserX, Fingerprint, BadgeCheck, Car, ExternalLink, MessageCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const servicesData = {
  ja: [
    { icon: UserX, title: 'CENOMAR', subtitle: '独身証明書（セノマー）取得代行', desc: '国際結婚・配偶者ビザに必須。独身証明書を現地スタッフが代行取得', hasBadge: true },
    { icon: Baby, title: 'PSA Birth', subtitle: 'PSA出生証明書 取得代行', desc: 'PSA出生証明書の代行取得。DFAアポスティーユも一括対応', hasBadge: false },
    { icon: Heart, title: 'PSA Marriage', subtitle: 'PSA婚姻証明書 取得代行', desc: 'PSA婚姻証明書の代行取得。アポスティーユ込みも相談可', hasBadge: false },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: 'NBI無犯罪証明書 取得代行', desc: '配偶者ビザ・帰化申請向けNBI証明書を代行取得。DFA認証も対応', hasBadge: false },
    { icon: Car, title: 'LTO Documents', subtitle: 'LTO書類 取得代行（外免切替）', desc: '外免切替に必要なLTO書類を代行取得。OR/CRも対応', hasBadge: false },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'DFAアポスティーユ認証 代行', desc: 'DFAアポスティーユ認証（外務省認証）を書類と一括代行', hasBadge: false },
  ],
  en: [
    { icon: UserX, title: 'CENOMAR', subtitle: 'CENOMAR Procurement (Certificate of No Marriage)', desc: 'Required for international marriage & spouse visa. We handle the full procurement.', hasBadge: true },
    { icon: Baby, title: 'PSA Birth', subtitle: 'PSA Birth Certificate Procurement', desc: 'Full PSA Birth Certificate procurement. DFA Apostille bundling available.', hasBadge: false },
    { icon: Heart, title: 'PSA Marriage', subtitle: 'PSA Marriage Certificate Procurement', desc: 'Full PSA Marriage Certificate procurement. Apostille bundle option available.', hasBadge: false },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: 'NBI Clearance Procurement', desc: 'NBI Clearance for spouse visa and naturalization. DFA authentication included on request.', hasBadge: false },
    { icon: Car, title: 'LTO Documents', subtitle: 'LTO Document Procurement (License Transfer)', desc: 'LTO documents for foreign license conversion. OR/CR also handled.', hasBadge: false },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'DFA Apostille Authentication', desc: 'DFA Apostille (Philippine DFA) bundled with document procurement.', hasBadge: false },
  ],
};

const Services: React.FC = () => {
  const { lang, t } = useLanguage();
  const services = servicesData[lang];

  return (
    <section className="bg-white relative">
      {/* 上部波形（PainPointsセクションとの境界） */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" className="block w-full" style={{marginBottom: '-2px'}}>
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,0 L0,0 Z" fill="#1a365d" />
        </svg>
      </div>

      <div className="py-12 pb-16">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Services</span>
            <h2 className="text-xl font-bold text-secondary">{t('services.title')}</h2>
            <p className="text-xs text-gray-500 mt-2">{t('services.subtitle')}</p>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div key={index} className="group relative p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                {service.hasBadge && (
                  <span className="absolute top-3 right-3 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold shadow-sm">{t('services.badge')}</span>
                )}
                <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <span className="font-display font-bold text-sm text-secondary block mb-1">{service.title}</span>
                <p className="text-xs font-semibold text-gray-700 mb-1">{service.subtitle}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-secondary/3 rounded-2xl border border-secondary/10">
            <h3 className="text-sm font-bold text-secondary mb-3 text-center">{t('services.agencies.title')}</h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="https://psa.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t('services.agencies.psa')}
              </a>
              <a href="https://www.nbi.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t('services.agencies.nbi')}
              </a>
              <a href="https://dfa.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t('services.agencies.dfa')}
              </a>
              <a href="https://lto.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t('services.agencies.lto')}
              </a>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">{t('services.agencies.note')}</p>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'services', type: 'contact' })}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
              aria-label={t('services.ctaAriaLabel')}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('services.cta')}</span>
            </a>
            <p className="text-xs text-gray-500 mt-3">{t('services.ctaNote')}</p>
          </div>
        </div>
      </div>

      {/* 下部波形（Processセクションとの境界） */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" className="block w-full" style={{marginTop: '-2px'}}>
          <path d="M0,24 C240,0 480,48 720,24 C960,0 1200,48 1440,24 L1440,56 L0,56 Z" fill="#1a365d" />
        </svg>
      </div>
    </section>
  );
};

export default Services;
