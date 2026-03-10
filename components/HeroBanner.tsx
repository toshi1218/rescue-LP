import React from 'react';
import { ArrowRight } from 'lucide-react';

type HeroBannerProps = {
  title: string;
  badges: string[];
  ctaText: string;
  ctaHref: string;
  ctaService?: string;
};

export default function HeroBanner({ title, badges, ctaText, ctaHref, ctaService }: HeroBannerProps) {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ctaService) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('setContactService', { detail: ctaService }));
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };
  return (
    <section className="relative mb-12 overflow-hidden rounded-2xl bg-secondary px-6 py-10 md:px-10 md:py-14">
      {/* 背景装飾 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent" />
      </div>

      {/* ゴールドの左アクセントライン */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />

      <div className="relative">
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

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6 tracking-tight">
          {title}
        </h1>

        {/* CTAボタン */}
        <a
          href={ctaHref}
          onClick={handleCtaClick}
          className="group inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-7 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/50 hover:gap-3 transition-all duration-200"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
