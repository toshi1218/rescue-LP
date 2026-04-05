import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
type MenuType = 'docs' | 'purpose' | 'guides' | 'about' | 'business' | null;

const Navbar: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuType>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const [navHeight, setNavHeight] = useState(112);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { lang, t } = useLanguage();

  const isJa = lang === 'ja';
  const homePath = isJa ? '/ja/' : '/en/';
  const documentTabs = [
    { label: t('navbar.doc.cenomar'),  path: isJa ? '/ja/cenomar/'              : '/en/cenomar/' },
    { label: t('navbar.doc.birth'),    path: isJa ? '/ja/psa-shussei-shomeisho/': '/en/psa-birth-certificate/' },
    { label: t('navbar.doc.nbi'),      path: isJa ? '/ja/nbi-clearance/'        : '/en/nbi-clearance/' },
    { label: t('navbar.doc.apostille'),path: isJa ? '/ja/apostille/'            : '/en/apostille/' },
    { label: t('navbar.doc.marriage'), path: isJa ? '/ja/psa-kekkon-shomeisho/' : '/en/psa-marriage-certificate/' },
    ...(isJa ? [{ label: '結核非発病証明書', path: '/ja/kekkaku-shomeisho/' }] : []),
  ];

  const purposeTabs = isJa ? [
    { label: t('navbar.purpose.marriage'),      path: '/ja/kokusai-kekkon-guide/' },
    { label: t('navbar.purpose.visa'),          path: '/ja/haigusha-visa/' },
    { label: t('navbar.purpose.license'),       path: '/ja/gaimen-kirikae-guide/' },
    { label: t('navbar.purpose.naturalization'),path: '/ja/kika-shinsei-guide/' },
    { label: t('navbar.purpose.nbi'),           path: '/ja/nbi-clearance/' },
    { label: '個別ロードマップ作成',              path: '/ja/kokusai-kekkon-roadmap/' },
  ] : [
    { label: 'International Marriage',  path: '/en/international-marriage-guide/' },
    { label: 'Spouse Visa',             path: '/en/spouse-visa-documents/' },
    { label: 'K-1 Fiancé Visa',        path: '/en/k1-visa-documents/' },
    { label: 'CR-1 / IR-1 Visa',       path: '/en/cr1-visa-documents/' },
    { label: 'US Visa Documents',       path: '/en/us-visa-documents/' },
    { label: 'License Conversion',      path: '/en/drivers-license-conversion/' },
    { label: 'Naturalization Guide',    path: '/en/naturalization-guide/' },
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
        { label: isJa ? 'CENOMARガイド 完全版【2026年版】' : 'CENOMAR Complete Guide', path: isJa ? '/ja/cenomar/' : '/en/cenomar/' },
        { label: isJa ? 'CENOMARの有効期限は？' : 'CENOMAR Validity', path: isJa ? '/ja/cenomar-koyukigen/' : '/en/cenomar-validity/' },
        { label: isJa ? 'DFAアポスティーユは必要？' : 'Need Apostille?', path: isJa ? '/ja/cenomar-apostille/' : '/en/cenomar-apostille/' },
        { label: isJa ? 'CENOMARと婚姻証明書の違い' : 'CENOMAR vs. Marriage Certificate', path: isJa ? '/ja/cenomar-vs-marriage-certificate/' : '/en/cenomar-vs-marriage-certificate/' },
      ],
    },
    {
      category: isJa ? 'NBI Clearance（無犯罪証明書）' : 'NBI Clearance',
      items: [
        { label: isJa ? 'NBI Clearanceガイド 完全版【2026年版】' : 'NBI Clearance Complete Guide', path: isJa ? '/ja/nbi-clearance/' : '/en/nbi-clearance/' },
        { label: isJa ? 'NBI HITとは？' : 'What is NBI HIT?', path: isJa ? '/ja/nbi-hit/' : '/en/nbi-hit/' },
        { label: isJa ? 'NBI Clearanceの有効期限' : 'NBI Validity & Apostille', path: isJa ? '/ja/nbi-koyukigen/' : '/en/nbi-validity/' },
        { label: isJa ? '海外在住でのNBI申請' : 'NBI Clearance from Overseas', path: isJa ? '/ja/nbi-clearance-overseas/' : '/en/nbi-clearance-overseas/' },
      ],
    },
    {
      category: isJa ? 'DFAアポスティーユ認証' : 'DFA Apostille',
      items: [
        { label: isJa ? 'アポスティーユガイド 完全版【2026年版】' : 'Apostille Complete Guide', path: isJa ? '/ja/apostille/' : '/en/apostille/' },
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
        { label: isJa ? 'PSA出生届の遅延登録' : 'PSA Record Missing or Error?', path: isJa ? '/ja/psa-late-registration/' : '/en/psa-late-registration/' },
      ],
    },
    ...(!isJa ? [{
      category: 'Visa Checklists',
      items: [
        { label: 'Document Checklist by Visa Type', path: '/en/document-checklist-by-visa/' },
      ],
    }] : []),
    ...(!isJa ? [{
      category: 'Local Information',
      items: [
        { label: 'DFA Apostille at Cebu Window', path: '/en/dfa-apostille-cebu-report/' },
        { label: 'PSA Birth Certificate at Cebu', path: '/en/psa-crs-cebu-report/' },
        { label: 'LTO Driver Record at SM Seaside', path: '/en/lto-sm-seaside-cebu-report/' },
      ],
    }] : []),
    ...(!isJa ? [{
      category: 'International Marriage',
      items: [
        { label: 'Japan-First vs Philippines-First Marriage', path: '/en/japan-first-vs-philippines-first-marriage/' },
        { label: 'Getting Married in the Philippines', path: '/en/getting-married-in-philippines/' },
        { label: 'Document Service vs Immigration Lawyer', path: '/en/immigration-lawyer-vs-document-service/' },
      ],
    }] : []),
    ...(isJa ? [{
      category: '配偶者ビザ',
      items: [
        { label: '配偶者ビザ必要書類【2026年3月版】', path: '/ja/haigusha-visa-shorui/' },
        { label: '結核非発病証明書（2025年6月〜必須）', path: '/ja/kekkaku-shomeisho/' },
        { label: 'ビザ別書類チェックリスト', path: '/ja/document-checklist-by-visa/' },
      ],
    }] : []),
    ...(isJa ? [{
      category: '現地情報',
      items: [
        { label: 'アポスティーユ認証の取得手順【DFAセブ窓口】', path: '/ja/dfa-apostille-genchi-report/' },
        { label: 'PSA証明書の取得手順【セブ窓口】', path: '/ja/psa-crs-cebu-genchi-report/' },
        { label: '運転経歴証明書の取得手順【LTO SMシーサイド】', path: '/ja/lto-sm-seaside-genchi-report/' },
        { label: 'LTO運転経歴証明書とは？', path: '/ja/driver-record/' },
      ],
    }] : []),
    ...(isJa ? [{
      category: '国際結婚コラム',
      items: [
        { label: '日本先行婚 vs フィリピン先行婚', path: '/ja/nihon-senko-ph-senko/' },
        { label: 'フィリピンでの婚姻手続き', path: '/ja/philippines-de-kekkon/' },
        { label: '行政書士との書類取得の違い', path: '/ja/gyouseishoshi-to-shorui-shuttoku/' },
      ],
    }] : []),
    ...(isJa ? [{
      category: '海外移住別の書類',
      items: [
        { label: '米国ビザ（配偶者・就労）の必要書類', path: '/ja/us-visa-documents/' },
        { label: 'カナダ移住の必要書類', path: '/ja/canada/' },
        { label: 'オーストラリア移住の必要書類', path: '/ja/australia/' },
        { label: '英国移住の必要書類', path: '/ja/uk/' },
      ],
    }] : [{
      category: 'Immigration by Country',
      items: [
        { label: 'Canada Immigration', path: '/en/canada/' },
        { label: 'Australia Immigration', path: '/en/australia/' },
        { label: 'UK Immigration', path: '/en/uk/' },
        { label: 'New Zealand', path: '/en/new-zealand/' },
        { label: 'Germany', path: '/en/germany/' },
        { label: 'Netherlands', path: '/en/netherlands/' },
        { label: 'UAE', path: '/en/uae/' },
        { label: 'Singapore', path: '/en/singapore/' },
        { label: 'Hong Kong', path: '/en/hong-kong/' },
        { label: 'Qatar', path: '/en/qatar/' },
        { label: 'Italy', path: '/en/italy/' },
        { label: 'Norway', path: '/en/norway/' },
        { label: 'Sweden', path: '/en/sweden/' },
        { label: 'Switzerland', path: '/en/switzerland/' },
      ],
    }]),
  ];
  const contactPath = isJa ? '/ja/contact/' : '/en/contact/';
  const companyPath = isJa ? '/ja/company/' : '/en/company/';
  const privacyPath = isJa ? '/ja/privacy/' : '/en/privacy/';
  const termsPath = isJa ? '/ja/terms/' : '/en/terms/';

  const aboutTabs = isJa ? [
    { label: '会社概要',           path: '/ja/company/' },
    { label: 'プライバシーポリシー', path: '/ja/privacy/' },
    { label: '個人情報保護方針',    path: '/ja/kojin-joho-hogo/' },
    { label: '利用規約',           path: '/ja/terms/' },
  ] : [
    { label: 'About Us',            path: '/en/company/' },
    { label: 'Privacy Policy',      path: '/en/privacy/' },
    { label: 'Terms of Service',    path: '/en/terms/' },
  ];

  const businessTabs = isJa ? [
    { label: '法人サービス TOP',      path: '/ja/business/' },
    { label: '登録支援機関の方',        path: '/ja/business/touroku-shien-kikan/' },
    { label: '行政書士・士業の方',      path: '/ja/business/gyoseishoshi/' },
    { label: '企業の方',              path: '/ja/business/kigyou/' },
  ] : [];

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

  // Measure actual nav height for mobile menu positioning
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Keyboard: Escape closes dropdown / mobile menu and returns focus to trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openMenu) {
          setOpenMenu(null);
          if (openMenu === 'docs') docsRef.current?.querySelector<HTMLElement>('button')?.focus();
          else if (openMenu === 'purpose') purposeRef.current?.querySelector<HTMLElement>('button')?.focus();
          else if (openMenu === 'guides') guidesRef.current?.querySelector<HTMLElement>('button')?.focus();
          else if (openMenu === 'about') aboutRef.current?.querySelector<HTMLElement>('button')?.focus();
          else if (openMenu === 'business') businessRef.current?.querySelector<HTMLElement>('button')?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
          hamburgerRef.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openMenu, mobileOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;
    const menu = mobileMenuRef.current;
    const focusable = menu.querySelectorAll<HTMLElement>('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    menu.addEventListener('keydown', trap);
    first.focus();
    return () => menu.removeEventListener('keydown', trap);
  }, [mobileOpen]);

  // Arrow key navigation within dropdown; Tab closes it; Escape closes and returns focus
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!dropdownRef.current) return;
    const items = dropdownRef.current.querySelectorAll<HTMLElement>('a');
    if (items.length === 0) return;
    const current = Array.from(items).indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[current < items.length - 1 ? current + 1 : 0].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[current > 0 ? current - 1 : items.length - 1].focus();
    } else if (e.key === 'Tab') {
      // Close dropdown and let the browser handle natural tab order
      setOpenMenu(null);
    }
    // Escape is handled by the global listener above
  }, []);

  // Enter/Space toggle for dropdown trigger buttons
  const handleTriggerKeyDown = (menu: MenuType, ref: React.RefObject<HTMLDivElement | null>) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        setDropdownPos({ left: r.left, top: r.bottom + 4 });
      }
      setOpenMenu(openMenu === menu ? null : menu);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        setDropdownPos({ left: r.left, top: r.bottom + 4 });
      }
      setOpenMenu(menu);
      // Focus first dropdown item on next tick
      setTimeout(() => {
        dropdownRef.current?.querySelector<HTMLElement>('a')?.focus();
      }, 0);
    }
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
  const isAboutActive = aboutTabs.some(tab => matchesPath(tab.path));
  const isBusinessActive = businessTabs.some(tab => matchesPath(tab.path));

  const currentTabs = openMenu === 'docs' ? documentTabs : openMenu === 'purpose' ? purposeTabs : openMenu === 'about' ? aboutTabs : openMenu === 'business' ? businessTabs : [];

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
    <>
    <nav ref={navRef} className="bg-white shadow-sm border-b border-gray-100">
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
          {/* モバイル用お問い合わせボタン */}
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
            className="md:hidden text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
          >
            {t('navbar.cta')}
          </a>
          {/* Hamburger button — mobile only */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={mobileOpen ? (isJa ? 'メニューを閉じる' : 'Close menu') : (isJa ? 'メニューを開く' : 'Open menu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* ナビゲーションタブ行 — desktop only */}
      <div className="hidden md:block border-t border-gray-100 bg-white/95">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-2 py-1.5 flex items-center">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 min-w-0">

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
                onKeyDown={handleTriggerKeyDown('purpose', purposeRef)}
                aria-expanded={openMenu === 'purpose'}
                aria-haspopup="true"
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
                onKeyDown={handleTriggerKeyDown('docs', docsRef)}
                aria-expanded={openMenu === 'docs'}
                aria-haspopup="true"
                className={tabBtnClass(isDocActive || openMenu === 'docs')}
              >
                {t('navbar.findByDoc')}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 料金 */}
            <Link to={pricingPath} className={linkClass(pricingPath)}>{t('navbar.pricing')}</Link>

            {/* お役立ち / Guides dropdown — hidden on mobile (accessible via hamburger) */}
            <div
              ref={guidesRef}
              className="hidden sm:flex-shrink-0 sm:block"
              onMouseEnter={() => handleMouseEnter('guides', guidesRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (guidesRef.current) { const r = guidesRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'guides' ? null : 'guides'); }}
                onKeyDown={handleTriggerKeyDown('guides', guidesRef)}
                aria-expanded={openMenu === 'guides'}
                aria-haspopup="true"
                className={tabBtnClass(isGuidesActive || openMenu === 'guides' || matchesPath(guidesPath))}
              >
                {isJa ? 'お役立ち' : 'Guides'}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 当社について ドロップダウン — hidden on mobile */}
            <div
              ref={aboutRef}
              className="hidden sm:flex-shrink-0 sm:block"
              onMouseEnter={() => handleMouseEnter('about', aboutRef)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (aboutRef.current) { const r = aboutRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'about' ? null : 'about'); }}
                onKeyDown={handleTriggerKeyDown('about', aboutRef)}
                aria-expanded={openMenu === 'about'}
                aria-haspopup="true"
                className={tabBtnClass(isAboutActive || openMenu === 'about')}
              >
                {isJa ? '当社について' : 'About'}
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* お知らせ — hidden on mobile */}
            {isJa && (
              <Link to="/ja/news/" className={`hidden sm:inline-flex ${linkClass('/ja/news/')}`}>お知らせ</Link>
            )}

          </div>

          {/* タブバー右端: 法人向け + お問い合わせ */}
          <div className="hidden md:flex items-center gap-2 ml-3 flex-shrink-0">
            {/* 法人向け ドロップダウン */}
            {isJa && (
              <div
                ref={businessRef}
                className="flex-shrink-0"
                onMouseEnter={() => handleMouseEnter('business', businessRef)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => { if (businessRef.current) { const r = businessRef.current.getBoundingClientRect(); setDropdownPos({ left: r.left, top: r.bottom + 4 }); } setOpenMenu(openMenu === 'business' ? null : 'business'); }}
                  onKeyDown={handleTriggerKeyDown('business', businessRef)}
                  aria-expanded={openMenu === 'business'}
                  aria-haspopup="true"
                  className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    isBusinessActive || openMenu === 'business'
                      ? 'bg-secondary text-white border-secondary'
                      : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  法人向け
                  <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'navbar', type: 'contact', variant: ctaVariant })}
              className="text-xs font-bold text-white bg-primary px-4 py-1.5 rounded-full hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
            >
              {t('navbar.cta')}
            </a>
          </div>
        </div>
      </div>

      {/* ドロップダウン：docs / purpose / business（flat list） */}
      {openMenu && (openMenu === 'docs' || openMenu === 'purpose' || openMenu === 'about' || openMenu === 'business') && currentTabs.length > 0 && (
        <div
          ref={dropdownRef}
          role="menu"
          className="fixed bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-[100] min-w-max"
          style={{ left: dropdownPos.left, top: dropdownPos.top }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleDropdownKeyDown}
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

      {/* ドロップダウン：guides（グループ2カラム） */}
      {openMenu === 'guides' && (
        <div
          ref={dropdownRef}
          role="menu"
          className="fixed bg-white rounded-xl shadow-lg border border-gray-100 z-[100] p-3"
          style={{ left: dropdownPos.left, top: dropdownPos.top, width: '480px', maxWidth: 'calc(100vw - 16px)' }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleDropdownKeyDown}
        >
          <div className="grid grid-cols-2 gap-x-2">
            {guidesSections.map((section) => (
              <div key={section.category} className="mb-2">
                <p className="px-2 pt-1 pb-1 text-xs font-bold text-primary uppercase tracking-wide border-b border-primary/20 mb-1">
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
              className="flex items-center justify-end gap-1 px-2 py-1 text-xs text-primary-dark font-medium hover:underline"
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

      {/* モバイルメニュー — nav外に配置（backdrop-filterのfixed基点バグ回避） */}
      {mobileOpen && (
        <div id="mobile-menu" ref={mobileMenuRef} className="md:hidden fixed inset-x-0 bottom-0 z-[200] bg-white overflow-y-auto" style={{ top: navHeight }}>
          <div className="px-4 py-4 space-y-1">
            <Link to={homePath} onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:bg-gray-50">
              {t('navbar.home')}
            </Link>

            {/* 目的から探す */}
            <div>
              <button
                aria-expanded={mobileSection === 'purpose'}
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
                    <Link key={tab.path} to={tab.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 書類から探す */}
            <div>
              <button
                aria-expanded={mobileSection === 'docs'}
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
                    <Link key={tab.path} to={tab.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ガイド */}
            <div>
              <button
                aria-expanded={mobileSection === 'guides'}
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
                      <p className="px-3 pt-2 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wide">{section.category}</p>
                      {section.items.map(item => (
                        <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link to={guidesPath} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-primary-dark font-medium hover:underline">
                    {isJa ? 'すべてのガイドを見る →' : 'See all guides →'}
                  </Link>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 pt-2 mt-2 space-y-0.5">
              <Link to={pricingPath} onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">{t('navbar.pricing')}</Link>
            </div>

            {isJa && (
              <div className="border-t border-gray-100 pt-2 mt-2">
                <Link to="/ja/news/" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">お知らせ</Link>
              </div>
            )}

            {isJa && (
              <div className="border-t border-gray-100 pt-2 mt-2">
                <button
                  aria-expanded={mobileSection === 'business'}
                  onClick={() => setMobileSection(mobileSection === 'business' ? null : 'business')}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  法人向けサービス
                  <svg className={`w-4 h-4 transition-transform ${mobileSection === 'business' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSection === 'business' && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {businessTabs.map(tab => (
                      <Link key={tab.path} to={tab.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                        {tab.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="border-t border-gray-100 pt-2 mt-2">
              <button
                aria-expanded={mobileSection === 'about'}
                onClick={() => setMobileSection(mobileSection === 'about' ? null : 'about')}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {isJa ? '当社について' : 'About'}
                <svg className={`w-4 h-4 transition-transform ${mobileSection === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === 'about' && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {aboutTabs.map(tab => (
                    <Link key={tab.path} to={tab.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary">
                      {tab.label}
                    </Link>
                  ))}
                </div>
              )}
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
    </>
  );
};

export default Navbar;
