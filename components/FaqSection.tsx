import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CtaBox from './CtaBox';

interface FaqItem { q: string; a: string; }
interface Props {
  items: FaqItem[];
  ctaTitle: string;
  ctaButton: string;
}

export default function FaqSection({ items, ctaTitle, ctaButton }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">FAQ</h2>
      <div className="space-y-3">
        {items.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-lg shadow-card overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-sm font-bold text-left text-secondary"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              {open === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {open === i && <p className="px-4 pb-3 text-sm text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
      <CtaBox title={ctaTitle} buttonText={ctaButton} />
    </section>
  );
}
