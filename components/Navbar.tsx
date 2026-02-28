import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

type MenuType = 'docs' | 'purpose' | null;

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const isJa = lang === 'ja';
  const homePath = isJa ? '/ja/' : '/';

  const documentTabs = [
    { label: t('navbar.doc.cenomar'),  path: isJa ? '/ja/cenomar/'              : '/cenomar/' },
    { label: t('navbar.doc.birth'),    path: isJa ? '/ja/psa-shussei-shomeisho/': '/psa-birth-certificate/' },
    { label: t('navbar.doc.nbi'),      path: isJa ? '/ja/nbi-clearance/'        : '/nbi-clearance/' },
    { label: t('navbar.doc.apostille'),path: isJa ? '/ja/apostille/'            : '/apostille/' },
    { label: t('navbar.doc.marriage'), path: isJa ? '/ja/psa-kekkon-shomeisho/' : '/psa-marriage-certificate/' },
  ];

  const purposeTabs = [
    { label: t('navbar.purpose.marriage'),      path: isJa ? '/ja/kokusai-kekkon-guide/' : '/international-marriage-guide/' },
    { label: t('navbar.purpose.visa'),          path: isJa ? '/ja/haigusha-visa/'        : '/spouse-visa-documents/' },
    { label: t('navbar.purpose.license'),       path: isJa ? '/ja/gaimen-kirikae-guide/' : '/drivers-license-conversion/' },
    { label: t('navbar.purpose.naturalization'),path: isJa ? '/ja/kika-shinsei-guide/'   : '/naturalization-guide/' },
  ];

  const guidesPath  = isJa ? '/ja/guides/'  : '/guides/';
  const pricingPath = isJa ? '/ja/ryokin/'  : '/pricing/';
  const contactPath = isJa ? '/ja/contact/' : '/contact/';
  const companyPath = isJa ? '/ja/company/' : '/company/';
  const privacyPath = isJa ? '/ja/privacy/' : '/privacy/';

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

  // Normalize current path for active-link comparison (strip trailing slash, keep root as-is)
  const currentPath = location.pathname;
  const matchesPath = (path: string) =>
    currentPath === path ||
    currentPath === path.replace(/\/$/, '') ||
    currentPath + '/' === path;

  const isHome = matchesPath(homePath);
  const isDocActive = documentTabs.some(tab => matchesPath(tab.path));
  const isPurposeActive = purposeTabs.some(tab => matchesPath(tab.path));

  const currentTabs = openMenu === 'docs' ? documentTabs : openMenu === 'purpose' ? purposeTabs : [];

  const tabBtnClass = (active: boolean) =>
    `flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
      active
        ? 'bg-secondary text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-secondary'
    }`;

  const linkClass = (path: string) =>
    `flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
      matchesPath(path)
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
            aria-label={t('navbar.logoAriaLabel')}
            className="cursor-pointer text-left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-bold text-secondary text-xs md:text-lg tracking-tight">
              {t('navbar.logo')}
            </span>
          </button>
        ) : (
          <Link to={homePath} className="text-left">
            <span className="font-bold text-secondary text-xs md:text-lg tracking-tight">
              {t('navbar.logo')}
            </span>
          </Link>
        )}
        <div className="flex items-center ml-2">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
            className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
          >
            {t('navbar.cta')}
          </a>
        </div>
      </div>

      {/* ナビゲーションタブ行 */}
      <div className="border-t border-gray-100 bg-white/95">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide px-2 gap-1 py-1.5">

            <Link to={homePath} className={linkClass(homePath)}>{t('navbar.home')}</Link>

            {/* 書類から探す / By Document */}
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
                {t('navbar.findByDoc')}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 目的から探す / By Purpose */}
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
                {t('navbar.findByPurpose')}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link to={guidesPath} className={linkClass(guidesPath)}>{isJa ? 'お役立ち' : 'Guides'}</Link>
            <Link to={pricingPath} className={linkClass(pricingPath)}>{t('navbar.pricing')}</Link>
            <Link to={contactPath} className={linkClass(contactPath)}>{t('navbar.contact')}</Link>
            <Link to={companyPath} className={linkClass(companyPath)}>{t('navbar.company')}</Link>
            <Link to={privacyPath} className={linkClass(privacyPath)}>{t('navbar.privacy')}</Link>

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
                matchesPath(tab.path)
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
