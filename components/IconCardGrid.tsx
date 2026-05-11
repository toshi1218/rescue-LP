import React from 'react';
import { type LucideIcon } from 'lucide-react';

type IconCard = {
  icon: LucideIcon;
  title: string;
  description?: string;
  accent?: 'gold' | 'blue' | 'green' | 'red' | 'purple' | 'teal';
};

type IconCardGridProps = {
  heading?: string;
  subheading?: string;
  cards: IconCard[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const accentMap: Record<string, string> = {
  gold: 'bg-primary/10 text-primary',
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  red: 'bg-red-100 text-red-500',
  purple: 'bg-purple-100 text-purple-600',
  teal: 'bg-teal-100 text-teal-600',
};

const colsMap: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

export default function IconCardGrid({ heading, subheading, cards, columns = 3, className = '' }: IconCardGridProps) {
  return (
    <section className={`mb-10 ${className}`}>
      {heading && (
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">{heading}</h2>
          </div>
          {subheading && <p className="text-base text-gray-500 mt-1 ml-4">{subheading}</p>}
        </div>
      )}
      <div className={`grid gap-3 ${colsMap[columns]}`}>
        {cards.map((card) => {
          const Icon = card.icon;
          const accent = accentMap[card.accent ?? 'gold'];
          return (
            <div
              key={card.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card p-4 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-200"
            >
              <div className={`w-9 h-9 rounded-xl ${accent} flex items-center justify-center mb-3 flex-shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-secondary mb-1.5 leading-snug">{card.title}</h3>
              {card.description && (
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
