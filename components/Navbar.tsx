import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

type MenuType = 'docs' | 'purpose' | 'guides' | null;

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuType>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const isJa = lang === 'ja';
  const homePath = isJa ? '/ja/' : '/en/';

  const documentTabs = [
    { label: t('navbar.doc.cenomar'),  path: isJa ? '/ja/cenomar/'              : '/en/cenomar/' },
    { label: t('navbar.doc.birth'),    path: isJa ? '/ja/psa-shussei-shomeisho/': '/en/psa-birth-certificate/' },
    { label: t('navbar.doc.nbi'),      path: isJa ? '/ja/nbi-clearance/'        : '/en/nbi-clearance/' },
    { label: t('navbar.doc.apostille'),path: isJa ? '/ja/apostille/'            : '/en/apostille/' },
    { label: t('navbar.doc.marriage'), path: isJa ? '/ja/psa-kekkon-shomeisho/' : '/en/psa-marriage-certificate/' },
  ];

  const purposeTabs = isJa ? [
    { label: t('navbar.purpose.marriage'),      path: '/ja/kokusai-kekkon-guide/' },
    { label: t('navbar.purpose.visa'),          path: '/ja/haigusha-visa/' },
    { label: t('navbar.purpose.license'),       path: '/ja/gaimen-kirikae-guide/' },
    { label: t('navbar.purpose.naturalization'),path: '/ja/kika-shinsei-guide/' },
    { label: t('navbar.purpose.nbi'),           path: '/ja/nbi-clearance/' },
  ] : [
    { label: 'K-1 Fiancé Visa',        path: '/en/k1-visa-documents/' },
    { label: 'CR-1 / IR-1 Visa',       path: '/en/cr1-visa-documents/' },
    { label: 'US Visa Documents',       path: '/en/us-visa-documents/' },
    { label: 'Canada Immigration',      path: '/en/canada/' },
    { label: 'Australia Immigration',   path: '/en/australia/' },
    { label: 'UK Immigration',          path: '/en/uk/' },
  ];

  const guidesPath  = isJa ? '/ja/guides/'  : '/en/guides/';
  const pricingPath = isJa ? '/ja/ryokin/'  : '/en/pricing/';

  const guidesSections = [
    {
      category: isJa ? 'CENOMAR（独身証明書）' : 'CENOMAR',
      items: [
        { label: isJa ? 'CENOMARガイド 完全版' : 'CENOMAR Complete Guide', path: isJa ? '/ja/cenomar/' : '/en/cenomar/' },
        { label: isJa ? 'CENOMARの有効期限は？' : 'CENOMAR Validity', path: isJa ? '/ja/cenomar-koyukigen/' : '/en/cenomar-validity/' },
        { label: isJa ? 'DFAアポスティーユは必要？' : 'Need Apostille?', path: isJa ? '/ja/cenomar-apostille/' : '/en/cenomar-apostille/' },
      ],
    },
    {
      category: isJa ? 'NBI Clearance（無犯罪証明書）' : 'NBI Clearance',
      items: [
        { label: isJa ? 'NBI Clearanceガイド 完全版' : 'NBI Clearance Complete Guide', path: isJa ? '/ja/nbi-clearance/' : '/en/nbi-clearance/' },
        { label: isJa ? 'NBI HITとは？' : 'What is NBI HIT?', path: isJa ? '/ja/nbi-hit/' : '/en/nbi-hit/' },
        { label: isJa ? 'NBI Clearanceの有効期限' : 'NBI Validity & Apostille', path: isJa ? '/ja/nbi-koyukigen/' : '/en/nbi-validity/' },
      ],
    },
    {
      category: isJa ? 'DFAアポスティーユ認証' : 'DFA Apostille',
      items: [
        { label: isJa ? 'アポスティーユガイド 完全版' : 'Apostille Complete Guide', path: isJa ? '/ja/apostille/' : '/en/apostille/' },
        { label: isJa ? '処理期間【2026年】' : 'Processing Time 2026', path: isJa ? '/ja/apostille-shori-kikan/' : '/en/apostille-processing-time/' },
        { label: isJa ? '費用・料金【2026年】' : 'Fees 2026', path: isJa ? '/ja/apostille-ryokin/' : '/en/apostille-fee/' },
      ],
    },
    {
      category: isJa ? 'PSA書類（出生・婚姻証明書）' : 'PSA Documents',
      items: [
        { label: isJa ? 'PSA出生証明書の取得方法' : 'PSA Birth Certificate Guide', path: isJa ? '/ja/psa-shussei-shomeisho/' : '/en/psa-birth-certificate/' },
        { label: isJa ? 'PSA出生証明書の費用' : 'PSA Birth Certificate Cost', path: isJa ? '/ja/psa-shussei-cost/' : '/en/psa-birth-certificate-cost/' },
        { label: isJa ? 'PSA婚姻証明書の取得方法' : 'PSA Marriage Certificate', path: isJa ? '/ja/psa-kekkon-shomeisho/' : '/en/psa-marriage-certificate/' },
      ],
    },
  ];
  const contactPath = isJa ? '/ja/contact/' : '/en/contact/';
  const companyPath = isJa ? '/ja/company/' : '/en/company/';
  const privacyPath = isJa ? '/ja/privacy/' : '/en/privacy/';
  const termsPath = isJa ? '/ja/terms/' : '/en/terms/';

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  // Close mobile menu on outside body scroll
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
  const isGuidesActive = guidesSections.some(sec => sec.items.some(item => matchesPath(item.path)));

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
        <div className="flex items-center gap-2 ml-2">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
            className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
          >
            {t('navbar.cta')}
          </a>
          {/* Hamburger button — mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? (isJa ? 'メニューを閉じる' : 'Close menu') : (isJa ? 'メニューを開く' : 'Open menu')}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* ナビゲーションタブ行 */}
      <div className="border-t border-gray-100 bg-white/95">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide px-2 gap-1 py-1.5">

            <Link to={homePath} className={linkClass(homePath)}>{t('navbar.home')}</Link>

            {/* 目的から探す / By Purpose */}
            <div
              ref={purposeRef}
              className="flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('purpose', purposeRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (purposeRef.current) { const r = purposeRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'purpose' ? null : 'purpose'); }}
                className={tabBtnClass(isPurposeActive || openMenu === 'purpose')}
              >
                {t('navbar.findByPurpose')}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 書類から探す / By Document */}
            <div
              ref={docsRef}
              className="flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('docs', docsRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (docsRef.current) { const r = docsRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'docs' ? null : 'docs'); }}
                className={tabBtnClass(isDocActive || openMenu === 'docs')}
              >
                {t('navbar.findByDoc')}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* お役立ち / Guides dropdown */}
            <div
              ref={guidesRef}
              className="flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('guides', guidesRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (guidesRef.current) { const r = guidesRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'guides' ? null : 'guides'); }}
                className={tabBtnClass(isGuidesActive || openMenu === 'guides' || matchesPath(guidesPath))}
              >
                {isJa ? 'お役立ち' : 'Guides'}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link to={pricingPath} className={linkClass(pricingPath)}>{t('navbar.pricing')}</Link>
            <Link to={isJa ? '/ja/kokusai-kekkon-roadmap' : '/en/international-marriage-guide'} className={linkClass(isJa ? '/ja/kokusai-kekkon-roadmap' : '/en/international-marriage-guide')}>{isJa ? '個別ロードマップ作成' : 'Marriage Roadmap'}</Link>
            <Link to={companyPath} className={linkClass(companyPath)}>{t('navbar.company')}</Link>
            <Link to={privacyPath} className={linkClass(privacyPath)}>{t('navbar.privacy')}</Link>
            <Link to={termsPath} className={linkClass(termsPath)}>{t('navbar.terms')}</Link>

          </div>
        </div>
      </div>

      {/* ドロップダウン：docs / purpose（flat list） */}
      {openMenu && (openMenu === 'docs' || openMenu === 'purpose') && currentTabs.length > 0 && (
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

      {/* モバイルメニュー */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[104px] z-[200] bg-white overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link to={homePath} className="block px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-gray-50">
              {t('navbar.home')}
            </Link>

            {/* 目的から探す */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === 'purpose' ? null : 'purpose')}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {t('navbar.findByPurpose')}
                <svg className={`w-4 h-4 transition-transform ${mobileSection === 'purpose' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === 'purpose' && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {purposeTabs.map(tab => (
                    <Link key={tab.path} to={tab.path} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 書類から探す */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === 'docs' ? null : 'docs')}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {t('navbar.findByDoc')}
                <svg className={`w-4 h-4 transition-transform ${mobileSection === 'docs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === 'docs' && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {documentTabs.map(tab => (
                    <Link key={tab.path} to={tab.path} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ガイド */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === 'guides' ? null : 'guides')}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {isJa ? 'お役立ちガイド' : 'Guides'}
                <svg className={`w-4 h-4 transition-transform ${mobileSection === 'guides' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === 'guides' && (
                <div className="ml-4 mt-1 space-y-3">
                  {guidesSections.map(section => (
                    <div key={section.category}>
                      <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wide">{section.category}</p>
                      {section.items.map(item => (
                        <Link key={item.path} to={item.path} className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link to={guidesPath} className="block px-3 py-2 text-sm text-primary font-medium hover:underline">
                    {isJa ? 'すべてのガイドを見る →' : 'See all guides →'}
                  </Link>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 pt-2 mt-2 space-y-0.5">
              <Link to={pricingPath} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{t('navbar.pricing')}</Link>
              <Link to={isJa ? '/ja/kokusai-kekkon-roadmap' : '/en/international-marriage-guide'} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{isJa ? '個別ロードマップ作成' : 'Marriage Roadmap'}</Link>
              <Link to={companyPath} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{t('navbar.company')}</Link>
              <Link to={privacyPath} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{t('navbar.privacy')}</Link>
              <Link to={termsPath} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{t('navbar.terms')}</Link>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => { trackEvent('cta_click', { location: 'mobile_menu', type: 'contact', variant: ctaVariant }); setMobileOpen(false); }}
                className="block text-center text-sm font-bold text-white bg-primary px-6 py-3 rounded-xl hover:bg-primary-hover transition-colors shadow-md"
              >
                {t('navbar.cta')}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ドロップダウン：guides（グループ2カラム） */}
      {openMenu === 'guides' && (
        <div
          className="fixed bg-white rounded-xl shadow-lg border border-gray-100 z-[100] p-3"
          style={{ left: dropdownPos.left, top: dropdownPos.top, width: '480px', maxWidth: 'calc(100vw - 16px)' }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-2 gap-x-2">
            {guidesSections.map((section) => (
              <div key={section.category} className="mb-2">
                <p className="px-2 pt-1 pb-1 text-[10px] font-bold text-primary uppercase tracking-wide border-b border-primary/20 mb-1">
                  {section.category}
                </p>
                {section.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                      matchesPath(item.path)
                        ? 'text-secondary bg-secondary/5 font-semibold'
                        : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 mt-1 pt-1">
            <Link
              to={guidesPath}
              className="flex items-center justify-end gap-1 px-2 py-1 text-xs text-primary font-medium hover:underline"
            >
              {isJa ? 'すべてのガイドを見る' : 'See all guides'}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
