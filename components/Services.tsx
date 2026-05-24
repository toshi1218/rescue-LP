import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Heart, UserX, Fingerprint, BadgeCheck, Car, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const servicesData = {
  ja: [
    { icon: Heart,        title: '国際結婚準備パック',       subtitle: '国際結婚準備',   desc: 'フィリピンでの婚姻や日本側への反映に向けて、必要になりやすい書類をまとめて確認したい方へ', hasBadge: false, path: '/ja/kokusai-kekkon-guide/' },
    { icon: BadgeCheck,   title: '配偶者ビザ準備書類パック', subtitle: '配偶者ビザ準備', desc: '日本で一緒に暮らすための準備として、必要になりやすいフィリピン書類を整理したい方へ', hasBadge: false, path: '/ja/haigusha-visa/' },
    { icon: Car,          title: '外免切替サポート',         subtitle: '外免切替',       desc: 'LTO書類を日本語で整理して進めたい方へ', hasBadge: false, path: '/ja/gaimen-kirikae-guide/' },
    { icon: Fingerprint,  title: '帰化・無犯罪証明関連',    subtitle: '帰化・その他',   desc: '用途に応じて必要書類を確認したい方へ', hasBadge: false, path: '/ja/nbi-clearance/' },
  ],
  en: [
    { icon: UserX,       title: 'CENOMAR',        subtitle: 'CENOMAR — Physical Original for Marriage & Visa',   desc: 'Physical original for marriage, K-1, and spouse visa. Apostille available.', hasBadge: true,  path: '/en/cenomar/' },
    { icon: Baby,        title: 'PSA Birth Cert', subtitle: 'PSA Birth Certificate — Physical Original',         desc: 'Physical original for immigration and visa abroad. Apostille bundling available.', hasBadge: false, path: '/en/psa-birth-certificate/' },
    { icon: Heart,       title: 'PSA Marriage',   subtitle: 'PSA Marriage Certificate — Physical Original',      desc: 'For naturalization and dependent visa. Apostille bundle available.', hasBadge: false, path: '/en/psa-marriage-certificate/' },
    { icon: Fingerprint, title: 'NBI Clearance',  subtitle: 'NBI Clearance for Immigration & Visa',             desc: 'For spouse visa, naturalization, and work visa. DFA authentication on request.', hasBadge: false, path: '/en/nbi-clearance/' },
    { icon: Car,         title: 'LTO / License',  subtitle: 'LTO Documents for License Conversion',             desc: "Driver's abstract for license conversion abroad. OR/CR also handled.", hasBadge: false, path: '/en/drivers-license-conversion/' },
    { icon: BadgeCheck,  title: 'DFA Apostille',  subtitle: 'DFA Apostille & Embassy Authentication',           desc: 'For Hague Convention countries. Embassy auth for UAE, Saudi Arabia, and others.', hasBadge: false, path: '/en/apostille/' },
  ],
};

const Services: React.FC = () => {
  const { lang, t } = useLanguage();
  const services = servicesData[lang];

  return (
    <section className="bg-white relative" id="pricing">
      {/* 上部波形（PainPointsセクションとの境界） */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" className="block w-full" style={{marginBottom: '-2px'}}>
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,0 L0,0 Z" fill="#1a365d" />
        </svg>
      </div>

      <div className="py-12 pb-16">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-1 block">Services</span>
            <h2 className="text-xl font-bold text-secondary">{t('services.title')}</h2>
            <p className="text-base text-gray-500 mt-2">{t('services.subtitle')}</p>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
          </div>

          {lang === 'en' && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
              <span className="text-blue-500 text-lg flex-shrink-0 mt-0.5">🔍</span>
              <div>
                <p className="text-sm font-bold text-blue-800 mb-1">Not sure if your authority accepts an e-Certificate?</p>
                <p className="text-sm text-blue-700">UAE, Korea, Italy, Germany, and many others require physical PSA originals — not printed e-Certificates. We verify acceptance requirements before you order.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="group relative p-3 border border-gray-100 rounded-2xl bg-gray-50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-secondary/8 border border-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-display font-bold text-sm text-secondary leading-snug">{service.title}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-2 flex-1">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-dark border border-primary/40 px-2 py-0.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-all self-start">
                  {lang === 'ja' ? '詳しく見る' : 'Learn more'} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 p-5 bg-secondary/3 rounded-2xl border border-secondary/10">
            <h3 className="text-sm font-bold text-secondary mb-3 text-center">{t('services.agencies.title')}</h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="https://psa.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t('services.agencies.psa')}
              </a>
              <a href="http://www.nbi.gov.ph/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
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
            <p className="text-xs text-gray-600 mt-2 text-center">{t('services.agencies.note')}</p>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'services', type: 'contact' })}
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
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
