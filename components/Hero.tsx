import React from 'react';
import { MessageCircle } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-4" aria-label={lang === 'ja' ? 'サービスの特徴' : 'Service highlights'}>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
            {lang === 'ja' ? '🏢 日本法人' : '🏢 Japanese Corp.'}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
            {lang === 'ja' ? '✈️ 渡航不要' : '✈️ No travel needed'}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
            {lang === 'ja' ? '🛡️ 着手前キャンセル無料' : '🛡️ Cancel before start = free'}
          </span>
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
          {t('hero.badge')}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
          {t('hero.h1line1')}<br />{' '}
          {t('hero.h1line2')}<br />{' '}
          <span className="text-primary">{t('hero.h1line3')}</span>
        </h1>
        <p className="text-gray-200 mb-8 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {t('hero.description')}
        </p>
        <a
          href="#contact"
          onClick={() => trackEvent('cta_click', { location: 'hero', type: 'contact', variant: ctaVariant })}
          className="bg-primary text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/40"
          aria-label={t('hero.ctaAriaLabel')}
        >
          <MessageCircle className="w-5 h-5" />
          {primaryLabel}
        </a>

        {/* Trust: Rating badge */}
        <div className="flex items-center justify-center gap-1.5 mt-3" aria-label={lang === 'ja' ? '平均評価 4.8 / 5.0' : 'Average rating 4.8 out of 5'}>
          <span className="text-yellow-400 text-base leading-none" aria-hidden="true">★★★★★</span>
          <span className="text-white/80 text-xs font-medium">
            {lang === 'ja' ? '4.8 / 5.0（お客様の声）' : '4.8 / 5.0 (client reviews)'}
          </span>
        </div>

        {/* Urgency message */}
        <p className="text-yellow-300 text-xs font-semibold mt-1 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {lang === 'ja' ? 'ただいまお問い合わせ受付中 · 24時間以内に返信' : 'Now accepting inquiries · Reply within 24 hours'}
        </p>

        {/* Pricing hint (#22) */}
        <p className="text-white/60 text-xs mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {lang === 'ja'
            ? '国際結婚準備パック ¥99,800〜 · 配偶者ビザパック ¥100,000〜（税・送料別）'
            : 'International Marriage Package from US$899 (Apostille + DHL incl.)'}
        </p>
      </div>
    </header>
  );
};

export default Hero;
