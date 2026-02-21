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

const companyTabs = [
  { label: '会社概要', path: '/company' },
  { label: 'プライバシーポリシー', path: '/privacy' },
];

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [openMenu, setOpenMenu] = useState<'docs' | 'purpose' | 'company' | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // クリック外で閉じる（モバイル対応）
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ページ遷移時に閉じる
  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: 'docs' | 'purpose' | 'company') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const isDocActive = documentTabs.some(t => t.path === location.pathname);
  const isPurposeActive = purposeTabs.some(t => t.path === location.pathname);
  const isCompanyActive = companyTabs.some(t => t.path === location.pathname);

  const dropdownLinkClass = (path: string) =>
    `block px-4 py-2 text-xs font-medium transition-colors ${
      location.pathname === path
        ? 'text-secondary bg-gray-50'
        : 'text-gray-600 hover:bg-gray-50 hover:text-secondary'
    }`;

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
      <div className="border-t border-gray-100 bg-white/95" ref={navRef}>
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

            {/* 書類から探す */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('docs')}
              onMouseLeave={handleMouseLeave}
            >
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
                    <Link key={tab.path} to={tab.path} className={dropdownLinkClass(tab.path)}>
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 目的から探す */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('purpose')}
              onMouseLeave={handleMouseLeave}
            >
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
                    <Link key={tab.path} to={tab.path} className={dropdownLinkClass(tab.path)}>
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

            {/* 会社情報 */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setOpenMenu(openMenu === 'company' ? null : 'company')}
                className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  isCompanyActive || openMenu === 'company'
                    ? 'bg-secondary text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
                }`}
              >
                会社情報
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'company' && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 min-w-max">
                  {companyTabs.map(tab => (
                    <Link key={tab.path} to={tab.path} className={dropdownLinkClass(tab.path)}>
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
