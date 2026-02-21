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

type MenuType = 'docs' | 'purpose' | null;

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: MenuType, ref: React.RefObject<HTMLDivElement>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({ left: rect.left, top: rect.bottom + 4 });
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const isDocActive = documentTabs.some(t => t.path === location.pathname);
  const isPurposeActive = purposeTabs.some(t => t.path === location.pathname);

  const currentTabs = openMenu === 'docs' ? documentTabs : openMenu === 'purpose' ? purposeTabs : [];

  const tabBtnClass = (active: boolean) =>
    `flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
      active
        ? 'bg-secondary text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
    }`;

  const linkClass = (path: string) =>
    `flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
      location.pathname === path
        ? 'bg-secondary text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
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
      <div className="border-t border-gray-100 bg-white/95">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide px-2 gap-1 py-1.5">

            <Link to="/" className={linkClass('/')}>ホーム</Link>

            {/* 書類から探す */}
            <div
              ref={docsRef}
              className="flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('docs', docsRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setOpenMenu(openMenu === 'docs' ? null : 'docs')}
                className={tabBtnClass(isDocActive || openMenu === 'docs')}
              >
                書類から探す
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 目的から探す */}
            <div
              ref={purposeRef}
              className="flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('purpose', purposeRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setOpenMenu(openMenu === 'purpose' ? null : 'purpose')}
                className={tabBtnClass(isPurposeActive || openMenu === 'purpose')}
              >
                目的から探す
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link to="/pricing" className={linkClass('/pricing')}>料金</Link>
            <Link to="/contact" className={linkClass('/contact')}>お問い合わせ</Link>
            <Link to="/company" className={linkClass('/company')}>会社概要</Link>
            <Link to="/privacy" className={linkClass('/privacy')}>プライバシーポリシー</Link>

          </div>
        </div>
      </div>

      {/* ドロップダウン（overflow回避のためfixed配置） */}
      {openMenu && currentTabs.length > 0 && (
        <div
          className="fixed bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-[100] min-w-max"
          style={{ left: dropdownPos.left, top: dropdownPos.top }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}
        >
          {currentTabs.map(tab => (
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
    </nav>
  );
};

export default Navbar;
