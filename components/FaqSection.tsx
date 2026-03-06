import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

type FaqItem = {
  q: string;
  a: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  ctaTitle: string;
  ctaButton: string;
};

export default function FaqSection({ items, ctaTitle, ctaButton }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mb-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">FAQ</h2>
      </div>

      <div className="space-y-2 mb-8">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                isOpen
                  ? 'border-primary/30 shadow-md shadow-primary/5'
                  : 'border-gray-100 shadow-card hover:border-gray-200'
              } bg-white`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5 transition-colors duration-200 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    Q
                  </span>
                  <span className="text-sm font-semibold text-secondary leading-snug">{item.q}</span>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4 flex gap-3 border-t border-gray-50">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-secondary/10 text-secondary flex-shrink-0 mt-3 h-fit">
                    A
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed pt-3">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-2xl bg-secondary px-6 py-8 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        </div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-2xl" />
        <div className="relative">
          <h3 className="text-lg font-bold text-white mb-4">{ctaTitle}</h3>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-7 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all duration-200 hover:gap-3"
          >
            {ctaButton}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
