import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const Hero: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const { t, lang } = useLanguage();
  const primaryLabel = ctaVariant === 'A' ? t('hero.ctaA') : t('hero.ctaB');

  return (
    <header className="relative bg-secondary text-white overflow-hidden min-h-[520px] md:min-h-[600px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-photo.webp" type="image/webp" />
          <img
            alt={lang === 'ja' ? 'フィリピン書類取得代行センターの背景イメージ（日本・フィリピン国旗と書類）' : 'Philippine document retrieval service – background image with Philippine and Japanese flags'}
            className="w-full h-full object-cover"
            style={{ objectPosition: '80% 50%' }}
            src="/hero-photo.png"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* 上部を暗くしてテキストを読みやすく、下部は写真を見せるグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
          {t('hero.badge')}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
          {t('hero.h1line1')}<br />{' '}
          {t('hero.h1line2')}<br />{' '}
          <span className="text-primary">{t('hero.h1line3')}</span>
        </h1>
        <p className="text-gray-200 mb-3 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {t('hero.description')}
        </p>
        <p className="text-white text-xs mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {t('hero.disclaimer')}
        </p>

        {/* Desktop/Tablet Buttons (Hidden on mobile usually handled by sticky nav, but good to have here too) */}
        <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-center sm:w-auto">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'contact', variant: ctaVariant })}
            className="w-full sm:w-auto bg-primary text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label={t('hero.ctaAriaLabel')}
          >
            <MessageCircle className="w-5 h-5" />
            {primaryLabel}
          </a>
          <a
            href="#pricing"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'pricing', variant: ctaVariant })}
            className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label={t('hero.pricingAriaLabel')}
          >
            {t('hero.pricingCta')}
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
