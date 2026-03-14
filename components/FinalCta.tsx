import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const FinalCta: React.FC = () => (
  <section className="py-16 bg-secondary text-white text-center">
    <div className="max-w-md md:max-w-xl mx-auto px-6">
      <h2 className="text-xl md:text-2xl font-bold mb-3">どのルートか分からない方も大丈夫です</h2>
      <p className="text-white/70 text-sm mb-8">今の状況に近い進め方からご案内します。</p>
      <a
        href="#contact"
        onClick={() => trackEvent('cta_click', { location: 'final_cta', type: 'contact' })}
        className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
      >
        <MessageCircle className="w-5 h-5" />
        相談する
      </a>
    </div>
  </section>
);

export default FinalCta;
