import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const navTabs = [
  { label: 'ホーム', path: '/' },
  { label: '独身証明書', path: '/cenomar-guide' },
  { label: '出生証明書', path: '/psa-shussei-shomeisho' },
  { label: '無犯罪証明書', path: '/nbi-clearance-guide' },
  { label: '国際結婚', path: '/kokusai-kekkon-guide' },
  { label: '配偶者ビザ', path: '/haigusha-visa-shorui' },
  { label: 'アポスティーユ', path: '/apostille-guide' },
  { label: '免許切替', path: '/gaimen-kirikae-guide' },
  { label: '婚姻証明書', path: '/kekkon-shomeisho' },
  { label: '料金', path: '/pricing' },
  { label: 'お問い合わせ', path: '/contact' },
];

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      {/* メインヘッダー行 */}
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {isHome ? (
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
        ) : (
          <Link to="/" className="text-left">
            <span className="font-bold text-secondary text-xs md:text-lg tracking-tight">
              フィリピン書類取得代行センター
            </span>
          </Link>
        )}
        <a
          href="#contact"
          onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
          className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md ml-2 whitespace-nowrap"
        >
          お問い合わせ
        </a>
      </div>

      {/* ナビゲーションタブ行 */}
      <div className="border-t border-gray-100 bg-white/95">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide px-2 gap-1 py-1.5">
            {navTabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`
                    flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors
                    ${isActive
                      ? 'bg-secondary text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
                    }
                  `}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
