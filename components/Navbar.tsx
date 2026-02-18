import React from 'react';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          type="button"
          aria-label="トップへ戻る"
          className="cursor-pointer text-left"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-bold text-secondary text-xs md:text-lg tracking-tight">
            フィリピン書類取得代行センター
          </span>
        </button>
        <a 
          href="#contact" 
          onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
          className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md ml-2 whitespace-nowrap"
        >
          お問い合わせ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
