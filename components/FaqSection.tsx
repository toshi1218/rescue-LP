import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

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
      <h2 className="text-2xl font-bold text-secondary mb-5">FAQ</h2>
      <div className="space-y-2 mb-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 py-4 flex items-center justify-between"
              >
                <span className="text-sm font-bold text-secondary pr-3">Q. {item.q}</span>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {isOpen && <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100">{item.a}</div>}
            </div>
          );
        })}
      </div>
      <div className="bg-secondary text-white rounded-2xl p-6 text-center">
        <h3 className="text-lg font-bold mb-4">{ctaTitle}</h3>
        <a
          href="#contact"
          className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
        >
          {ctaButton}
        </a>
      </div>
    </section>
  );
}
