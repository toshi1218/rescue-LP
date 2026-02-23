import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { trackEvent } from '../lib/analytics';

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();

  const handleToggle = () => {
    const newLang = lang === 'ja' ? 'en' : 'ja';
    setLang(newLang);
    trackEvent('language_switch', { language: newLang });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={lang === 'ja' ? 'Switch to English' : '日本語に切り替える'}
      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 hover:text-secondary transition-colors border border-gray-200 whitespace-nowrap"
    >
      <Globe className="w-3 h-3" />
      {lang === 'ja' ? 'EN' : 'JA'}
    </button>
  );
};

export default LanguageSwitcher;
