import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'ja' | 'en';

const LANG_KEY = 'lang';

const ja = {
  'navbar.logo': 'フィリピン書類取得代行センター',
  'navbar.logoAriaLabel': 'トップへ戻る',
  'navbar.cta': 'お問い合わせ',
  'navbar.home': 'ホーム',
  'navbar.findByDoc': '書類から探す',
  'navbar.findByPurpose': '目的から探す',
  'navbar.pricing': '料金',
  'navbar.contact': 'お問い合わせ',
  'navbar.company': '会社概要',
  'navbar.privacy': 'プライバシーポリシー',
  'navbar.doc.cenomar': '独身証明書',
  'navbar.doc.birth': '出生証明書',
  'navbar.doc.nbi': '無犯罪証明書',
  'navbar.doc.apostille': 'アポスティーユ',
  'navbar.doc.marriage': '婚姻証明書',
  'navbar.purpose.marriage': '国際結婚',
  'navbar.purpose.visa': '配偶者ビザ',
  'navbar.purpose.license': '免許切替',
  'navbar.purpose.naturalization': '帰化申請',
  'hero.badge': '日本法人運営',
  'hero.h1line1': 'セノマー 出生証明書',
  'hero.h1line2': 'アポスティーユ 取得代行',
  'hero.h1line3': '日本語だけで完結',
  'hero.description': 'フィリピンの独身証明書（CENOMAR／セノマー）・出生証明書・NBI無犯罪証明書・DFAアポスティーユ認証の取得を完全代行。国際結婚・配偶者ビザ申請に必要な書類を日本法人が日本語でサポートします。',
  'hero.disclaimer': '※ LTO運転免許関連書類・NBI・CENOMAR PSA など、記載以外の書類もお気軽にご相談ください。',
  'hero.ctaA': '無料相談する',
  'hero.ctaB': '30秒で無料相談',
  'hero.pricingCta': '料金を見る',
  'hero.ctaAriaLabel': '無料相談フォームへ移動',
  'hero.pricingAriaLabel': '料金プランへ移動',
};

const en: typeof ja = {
  'navbar.logo': 'Philippine Document Procurement Center',
  'navbar.logoAriaLabel': 'Back to top',
  'navbar.cta': 'Contact Us',
  'navbar.home': 'Home',
  'navbar.findByDoc': 'By Document',
  'navbar.findByPurpose': 'By Purpose',
  'navbar.pricing': 'Pricing',
  'navbar.contact': 'Contact',
  'navbar.company': 'Company',
  'navbar.privacy': 'Privacy Policy',
  'navbar.doc.cenomar': 'CENOMAR',
  'navbar.doc.birth': 'Birth Certificate',
  'navbar.doc.nbi': 'NBI Clearance',
  'navbar.doc.apostille': 'Apostille',
  'navbar.doc.marriage': 'Marriage Certificate',
  'navbar.purpose.marriage': 'International Marriage',
  'navbar.purpose.visa': 'Spouse Visa',
  'navbar.purpose.license': 'License Transfer',
  'navbar.purpose.naturalization': 'Naturalization',
  'hero.badge': 'Japan-Based Company',
  'hero.h1line1': 'CENOMAR, Birth Certificate',
  'hero.h1line2': 'Apostille Retrieval Service',
  'hero.h1line3': 'Full Support in English',
  'hero.description': 'We handle the full acquisition of Philippine documents — CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille Authentication — for international marriage, spouse visa, and more. All supported in English by our Japan-based company.',
  'hero.disclaimer': '* For LTO license documents, NBI, CENOMAR, PSA, and other documents not listed, feel free to contact us.',
  'hero.ctaA': 'Free Consultation',
  'hero.ctaB': 'Consult in 30 Sec',
  'hero.pricingCta': 'View Pricing',
  'hero.ctaAriaLabel': 'Go to free consultation form',
  'hero.pricingAriaLabel': 'Go to pricing plans',
};

const dict: Record<Lang, typeof ja> = { ja, en };

export type TranslationKey = keyof typeof ja;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ja',
  setLang: () => {},
  t: (key) => ja[key],
});

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ja';
  const stored = window.localStorage.getItem(LANG_KEY);
  if (stored === 'ja' || stored === 'en') return stored;
  return 'ja';
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_KEY, newLang);
      document.documentElement.lang = newLang;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = (key: TranslationKey): string => dict[lang][key] ?? ja[key];

  return React.createElement(
    LanguageContext.Provider,
    { value: { lang, setLang, t } },
    children
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
