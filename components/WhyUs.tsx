import React from 'react';
import { Building2, Headset, Eye, Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Building2, titleKey: 'whyus.1.title' as const, descKey: 'whyus.1.desc' as const },
    { icon: Headset, titleKey: 'whyus.2.title' as const, descKey: 'whyus.2.desc' as const },
    { icon: Eye, titleKey: 'whyus.3.title' as const, descKey: 'whyus.3.desc' as const },
  ];

  const stats = [
    { labelKey: 'whyus.stat1.label' as const, valueKey: 'whyus.stat1.value' as const },
    { labelKey: 'whyus.stat2.label' as const, valueKey: 'whyus.stat2.value' as const },
    { labelKey: 'whyus.stat3.label' as const, valueKey: 'whyus.stat3.value' as const },
  ];

  return (
    <section className="py-12 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Why Us</span>
        <h2 className="text-xl font-bold text-secondary">{t('whyus.title')}</h2>
      </div>

      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        {reasons.map(({ icon: Icon, titleKey, descKey }) => (
          <div key={titleKey} className="flex gap-4 p-5 bg-white rounded-xl shadow-soft md:flex-col md:items-center md:text-center md:h-full">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">{t(titleKey)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t(descKey)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map(({ labelKey, valueKey }) => (
          <div key={labelKey} className="bg-secondary/5 border border-secondary/10 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500">{t(labelKey)}</p>
            <p className="text-sm font-bold text-secondary mt-1">{t(valueKey)}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <a
          href="#contact"
          onClick={() => trackEvent('cta_click', { location: 'why_us', type: 'contact' })}
          className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-secondary/90 hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-secondary/40"
          aria-label={t('whyus.ctaAriaLabel')}
        >
          <Send className="w-5 h-5" />
          <span>{t('whyus.cta')}</span>
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
