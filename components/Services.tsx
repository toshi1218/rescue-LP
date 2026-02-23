import React from 'react';
import { Baby, Heart, UserX, Fingerprint, BadgeCheck, Languages, Car, ExternalLink, MessageCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const servicesData = {
  ja: [
    { icon: UserX, title: 'CENOMAR', subtitle: '独身証明書（セノマー）', desc: '国際結婚・配偶者ビザに必須のCENOMAR PSA取得代行', hasBadge: true },
    { icon: Baby, title: 'PSA Birth', subtitle: '出生証明書', desc: 'PSA出生証明書の取得代行。DFAアポスティーユ認証も対応', hasBadge: false },
    { icon: Heart, title: 'PSA Marriage', subtitle: '結婚証明書', desc: 'PSA結婚証明書の取得代行。アポスティーユ込みも可', hasBadge: false },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: '無犯罪証明書', desc: 'NBIクリアランス（フィリピン無犯罪証明書）取得サポート', hasBadge: false },
    { icon: Car, title: 'LTO Documents', subtitle: '運転免許関連書類', desc: 'LTO運転免許証・OR/CR・外免切替に必要な書類取得', hasBadge: false },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'アポスティーユ認証', desc: 'DFAアポスティーユ認証（フィリピン外務省認証）代行', hasBadge: false },
    { icon: Languages, title: 'Translation', subtitle: '日本語翻訳', desc: 'フィリピン公的書類の日本語翻訳・認証翻訳対応', hasBadge: false },
  ],
  en: [
    { icon: UserX, title: 'CENOMAR', subtitle: 'Certificate of No Marriage Record', desc: 'CENOMAR PSA procurement required for international marriage & spouse visa', hasBadge: true },
    { icon: Baby, title: 'PSA Birth', subtitle: 'Birth Certificate', desc: 'PSA Birth Certificate procurement. DFA Apostille authentication also available', hasBadge: false },
    { icon: Heart, title: 'PSA Marriage', subtitle: 'Marriage Certificate', desc: 'PSA Marriage Certificate procurement. Apostille bundle available', hasBadge: false },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: 'NBI Clearance', desc: 'NBI Clearance (Philippine national criminal clearance) procurement support', hasBadge: false },
    { icon: Car, title: 'LTO Documents', subtitle: "Driver's License Documents", desc: "LTO driver's license & OR/CR documents required for license transfer", hasBadge: false },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'DFA Apostille Authentication', desc: 'DFA Apostille authentication (Philippine Dept. of Foreign Affairs) procurement', hasBadge: false },
    { icon: Languages, title: 'Translation', subtitle: 'Japanese Translation', desc: 'Japanese translation & certified translation for Philippine official documents', hasBadge: false },
  ],
};

const Services: React.FC = () => {
  const { lang, t } = useLanguage();
  const services = servicesData[lang];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Services</span>
          <h2 className="text-xl font-bold text-secondary">{t('services.title')}</h2>
          <p className="text-xs text-gray-500 mt-2">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div key={index} className="group relative p-4 border border-gray-100 rounded-lg bg-gray-50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200">
              {service.hasBadge && (
                <span className="absolute top-2 right-2 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">{t('services.badge')}</span>
              )}
              <div className="flex items-center gap-2 mb-1">
                <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-display font-bold text-sm text-secondary">{service.title}</span>
              </div>
              <p className="text-xs font-semibold text-gray-700 mb-1">{service.subtitle}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
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
    </section>
  );
};

export default Services;
