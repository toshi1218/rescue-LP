import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavbarKo: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: '요금', path: '/ko/pricing/' },
    { label: 'F-6 비자 서류', path: '/ko/f-6-philippines-documents/' },
    { label: 'NBI Clearance', path: '/ko/nbi-clearance/' },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname === path.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/ko/"
          className="text-white font-bold text-sm leading-tight hover:text-primary transition-colors"
          aria-label="홈으로"
        >
          필리핀 서류 취득 대행 센터
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="주요 메뉴">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary/20 text-primary'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/ko/contact/"
            className="ml-2 bg-primary text-secondary font-bold text-sm px-4 py-1.5 rounded-lg hover:bg-primary-hover transition-colors"
          >
            문의하기
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1.5 rounded"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2" aria-label="모바일 메뉴">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/20 text-primary'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/ko/contact/"
              className="mt-2 bg-primary text-secondary font-bold text-sm px-4 py-2.5 rounded-lg text-center hover:bg-primary-hover transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavbarKo;
