import React from 'react';
import { Send } from 'lucide-react';

interface Props {
  title: string | React.ReactNode;
  badges: string[];
  ctaText: string;
  ctaHref?: string;
}

export default function HeroBanner({ title, badges, ctaText, ctaHref = '#contact' }: Props) {
  return (
    <section className="mb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">{title}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {badges.map((b, i) => (
          <span key={i} className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{b}</span>
        ))}
      </div>
      <a
        href={ctaHref}
        className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-primary-hover transition-all"
      >
        <Send className="w-4 h-4" />
        {ctaText}
      </a>
    </section>
  );
}
