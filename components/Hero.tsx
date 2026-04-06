import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

// ── English variant data ──────────────────────────────────────────────────────

const enBadges = [
  { icon: '🏢', label: 'Japanese Corporation' },
  { icon: '✈️', label: 'No travel to Philippines' },
  { icon: '🛡️', label: 'Free cancellation at consultation stage' },
];

const enDocItems = [
  { label: 'PSA Birth Certificate', sub: '+ DFA Apostille' },
  { label: 'CENOMAR', sub: '+ DFA Apostille' },
  { label: 'NBI Clearance', sub: '+ Apostille available' },
  { label: 'DHL Express Worldwide', sub: '→ Your address' },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const { t, lang } = useLanguage();

  // ── Japanese hero ──────────────────────────────────────────────────────────
  if (lang !== 'en') {
    const primaryLabel = ctaVariant === 'A' ? t('hero.ctaA') : t('hero.ctaB');

    return (
      <header className="relative bg-secondary text-white overflow-hidden min-h-[520px] md:min-h-[600px]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/hero-photo.webp" type="image/webp" />
            <img
              alt="フィリピン書類取得代行センターの背景イメージ（日本・フィリピン国旗と書類）"
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
          <div className="flex flex-wrap justify-center gap-2 mb-4" aria-label="サービスの特徴">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
              🏢 日本法人
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
              ✈️ 渡航不要
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm">
              🛡️ 見積もり・相談段階のキャンセル完全無料
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
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'contact', variant: ctaVariant })}
            className="bg-primary text-secondary font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label={t('hero.ctaAriaLabel')}
          >
            <MessageCircle className="w-5 h-5" />
            {primaryLabel}
          </a>

          {/* Secondary CTA */}
          <a
            href="/ja/ryokin/"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'pricing', variant: ctaVariant })}
            className="mt-2 inline-flex items-center justify-center gap-2 text-white/80 font-medium py-2 px-6 rounded-lg border border-white/30 hover:bg-white/10 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={t('hero.pricingAriaLabel')}
          >
            {t('hero.pricingCta')}
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Trust: Rating badge */}
          <div className="flex items-center justify-center gap-1.5 mt-3" aria-label="平均評価 4.8 / 5.0">
            <span className="text-yellow-400 text-base leading-none" aria-hidden="true">★★★★★</span>
            <span className="text-white/80 text-xs font-medium">4.8 / 5.0（公開レビュー47件）</span>
          </div>

          {/* Urgency message */}
          <p className="text-yellow-300 text-xs font-semibold mt-1 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            ただいまお問い合わせ受付中 · 24時間以内に返信
          </p>

          {/* Pricing hint – aligned with actual pricing table */}
          <p className="text-white/60 text-xs mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            国際結婚準備パック ¥99,800〜（税・送料別）
          </p>
        </div>
      </header>
    );
  }

  // ── English hero ───────────────────────────────────────────────────────────
  return (
    <header className="relative bg-secondary text-white overflow-hidden min-h-[520px] md:min-h-[600px]">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-photo.webp" type="image/webp" />
          <img
            alt="Philippine document procurement — IGRS office operations"
            className="w-full h-full object-cover"
            style={{ objectPosition: '60% 50%' }}
            src="/hero-photo.png"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-5xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-12">

        {/* ── Left: Text ── */}
        <div className="flex-1 min-w-0">

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {enBadges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm"
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>

          {/* Eyebrow */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
            Philippine Document Retrieval Service
          </span>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5 drop-shadow-sm">
            Philippine Documents —<br />
            <span className="text-primary">Organized for Your Application.</span>
          </h1>

          <p className="text-gray-200 mb-8 text-sm md:text-base leading-relaxed max-w-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            We identify, retrieve, and arrange the Philippine documents required for your marriage, visa, or immigration case — including paper Apostille where needed — and ship worldwide via DHL Express.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'hero_en', type: 'contact', variant: ctaVariant })}
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
            >
              <MessageCircle className="w-5 h-5" />
              Free Consultation
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-white font-bold py-3.5 px-7 rounded-xl border border-white/30 hover:bg-white/10 transition-all"
            >
              See Packages
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Rating + urgency */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5" aria-label="Average rating 4.8 out of 5">
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-white/70 text-xs font-medium">4.8 / 5.0 (client reviews)</span>
            </div>
            <p className="text-primary text-xs font-semibold">
              Now accepting inquiries · Reply within 24 hours
            </p>
            <p className="text-white/60 text-xs">
              International Marriage Package from US$899 (Apostille + DHL incl.)
            </p>
          </div>
        </div>

        {/* ── Right: Document card visual ── */}
        <div className="hidden md:block w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="bg-secondary px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">PH</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Philippine Document Service</p>
                  <p className="text-white/50 text-xs">Cebu-based · DHL Worldwide</p>
                </div>
              </div>
            </div>

            {/* Document list */}
            <div className="px-5 py-4 space-y-3">
              {enDocItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</p>
                    <p className="text-xs text-gray-600">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DFA Apostille stamp */}
            <div className="mx-5 mb-4 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-amber-800">DFA Apostille</p>
                <p className="text-xs text-amber-600">Required by many consulates</p>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-amber-400 flex items-center justify-center">
                <span className="text-[8px] text-amber-600 font-bold text-center leading-tight">HAGUE<br/>CONV.</span>
              </div>
            </div>

            {/* Stats bar */}
            <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
              {[
                { num: '500+', label: 'Cases' },
                { num: '4.8★', label: 'Rating' },
                { num: '24h', label: 'Reply' },
              ].map((s) => (
                <div key={s.label} className="py-3 text-center">
                  <p className="text-sm font-bold text-secondary">{s.num}</p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
