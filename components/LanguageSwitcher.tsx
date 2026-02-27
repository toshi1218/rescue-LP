import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { getLangSwitchUrl } from '../lib/urlMap';
import { trackEvent } from '../lib/analytics';

const LanguageSwitcher: React.FC = () => {
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const switchTo = getLangSwitchUrl(pathname);

  return (
    <Link
      to={switchTo}
      aria-label={lang === 'ja' ? 'Switch to English' : '日本語に切り替える'}
      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 hover:text-secondary transition-colors border border-gray-200 whitespace-nowrap"
      onClick={() => trackEvent('language_switch', { language: lang === 'ja' ? 'en' : 'ja' })}
    >
      <Globe className="w-3 h-3" />
      {lang === 'ja' ? 'EN' : 'JA'}
    </Link>
  );
};

export default LanguageSwitcher;
