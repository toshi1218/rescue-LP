import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const documentTabs = [
  { label: '独身証明書', path: '/cenomar-guide' },
  { label: '出生証明書', path: '/psa-shussei-shomeisho' },
  { label: '無犯罪証明書', path: '/nbi-clearance-guide' },
  { label: 'アポスティーユ', path: '/apostille-guide' },
  { label: '婚姻証明書', path: '/kekkon-shomeisho' },
];

const purposeTabs = [
  { label: '国際結婚', path: '/kokusai-kekkon-guide' },
  { label: '配偶者ビザ', path: '/haigusha-visa-shorui' },
  { label: '免許切替', path: '/gaimen-kirikae-guide' },
];

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [openMenu, setOpenMenu] = useState<'docs' | 'purpose' | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  const isDocActive = documentTabs.some(t => t.path === location.pathname);
  const isPurposeActive = purposeTabs.some(t => t.path === location.pathname);

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
      <div className="border-t border-gray-100 bg-white/95" ref={menuRef}>
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide px-2 gap-1 py-1.5">

            {/* ホーム */}
            <Link
              to="/"
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                location.pathname === '/'
                  ? 'bg-secondary text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
              }`}
            >
              ホーム
            </Link>

            {/* 書類から探す ドロップダウン */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setOpenMenu(openMenu === 'docs' ? null : 'docs')}
                className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  isDocActive || openMenu === 'docs'
                    ? 'bg-secondary text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
                }`}
              >
                書類から探す
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'docs' && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 min-w-max">
                  {documentTabs.map(tab => (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={`block px-4 py-2 text-xs font-medium transition-colors ${
                        location.pathname === tab.path
                          ? 'text-secondary bg-gray-50'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-secondary'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 目的から探す ドロップダウン */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setOpenMenu(openMenu === 'purpose' ? null : 'purpose')}
                className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  isPurposeActive || openMenu === 'purpose'
                    ? 'bg-secondary text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
                }`}
              >
                目的から探す
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'purpose' && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 min-w-max">
                  {purposeTabs.map(tab => (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={`block px-4 py-2 text-xs font-medium transition-colors ${
                        location.pathname === tab.path
                          ? 'text-secondary bg-gray-50'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-secondary'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 料金 */}
            <Link
              to="/pricing"
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                location.pathname === '/pricing'
                  ? 'bg-secondary text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
              }`}
            >
              料金
            </Link>

            {/* お問い合わせ */}
            <Link
              to="/contact"
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                location.pathname === '/contact'
                  ? 'bg-secondary text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
              }`}
            >
              お問い合わせ
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
