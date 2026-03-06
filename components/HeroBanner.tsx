import React from 'react';

type HeroBannerProps = {
  title: string;
  badges: string[];
  ctaText: string;
  ctaHref: string;
};

export default function HeroBanner({ title, badges, ctaText, ctaHref }: HeroBannerProps) {
  return (
    <section className="mb-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {badges.map((badge) => (
          <span
            key={badge}
            className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">{title}</h1>
      <a
        href={ctaHref}
        className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
      >
        {ctaText}
      </a>
    </section>
  );
}
