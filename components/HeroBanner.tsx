import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  badges: string[];
  ctaText?: string;
  ctaHref?: string;
  ctaService?: string;
  lastUpdated?: string;
};

export default function HeroBanner({ title, subtitle, badges = [], ctaText, ctaHref, ctaService, lastUpdated }: HeroBannerProps) {
  return (
    <section className="relative mb-12 overflow-hidden rounded-2xl bg-secondary px-6 py-10 md:px-10 md:py-14">
      {/* 背景装飾 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent" />
        {/* ドットグリッドパターン */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ゴールドの左アクセントライン */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />

      <div className="relative flex items-start justify-between gap-6">
        {/* 左: テキスト */}
        <div className="flex-1 min-w-0">
          {/* バッジ */}
          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full tracking-wide"
              >
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {badge}
              </span>
            ))}
          </div>

          {/* 最終更新日 */}
          {lastUpdated && (
            <p className="flex items-center gap-1 text-xs text-white/50 mb-3">
              <Clock className="w-3 h-3 shrink-0" />
              <span>Updated: {lastUpdated}</span>
            </p>
          )}

          {/* タイトル */}
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight ${subtitle ? 'mb-3' : 'mb-0'}`}>
            {title}
          </h1>

          {/* サブタイトル */}
          {subtitle && (
            <p className="text-base text-white/70 leading-relaxed mt-3">
              {subtitle}
            </p>
          )}

          {/* CTAボタン */}
          {ctaText && ctaHref && (
            <div className="mt-6">
              <a
                href={ctaHref}
                onClick={() => {
                  if (ctaService) {
                    window.dispatchEvent(new CustomEvent('setContactService', { detail: ctaService }));
                  }
                  trackEvent('cta_click', { location: 'hero_banner', type: 'consultation' });
                }}
                className="inline-flex items-center gap-2 bg-primary text-secondary font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
