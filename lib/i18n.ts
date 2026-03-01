import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Lang = 'ja' | 'en';

const ja = {
  // ── Navbar ──────────────────────────────────────────────────────────
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
  'navbar.purpose.usVisa': '米国ビザ書類',

  // ── Hero ─────────────────────────────────────────────────────────────
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

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': '対応可能な書類・サービス',
  'services.subtitle': 'CENOMAR（独身証明書）・PSA・NBI・LTO・DFAアポスティーユ取得代行',
  'services.badge': '人気No.1',
  'services.agencies.title': '関連する公式機関',
  'services.agencies.psa': 'PSA（フィリピン統計庁）',
  'services.agencies.nbi': 'NBI（国家捜査局）',
  'services.agencies.dfa': 'DFA（フィリピン外務省）',
  'services.agencies.lto': 'LTO（陸運局）',
  'services.agencies.note': '※ 各機関の公式ウェブサイトです。参考情報としてご利用ください。',
  'services.cta': 'どの書類が必要？無料で相談する',
  'services.ctaAriaLabel': 'サービスについて無料相談する',
  'services.ctaNote': '24時間以内に返信いたします',

  // ── Pricing ───────────────────────────────────────────────────────────
  'pricing.title': '料金プラン',
  'pricing.note': '※取得難易度により変動する場合があります',
  'pricing.featured': '人気 No.1',
  'pricing.detailsBtn': '詳細を見る',
  'pricing.docsTitle': '取得できる書類',
  'pricing.deliveryLabel': '納期',
  'pricing.ctaBtn': '相談して見積もる',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': 'よくあるご質問',
  'faq.ctaTitle': 'まだ疑問や不安がありますか？',
  'faq.ctaDesc': 'どんな些細なことでもお気軽にご相談ください。専門スタッフが丁寧にお答えします。',
  'faq.ctaBtn': '専門スタッフに直接相談する',
  'faq.ctaAriaLabel': '専門スタッフに直接相談する',
  'faq.ctaNote': '平均返信時間：24時間以内',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': 'まずは無料で相談',
  'footer.subtitle': 'どの書類が必要かわからない方も、\nお気軽にお問い合わせください。',
  'footer.nameLabel': 'お名前',
  'footer.namePlaceholder': '山田 太郎',
  'footer.emailLabel': 'メールアドレス',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.messageLabel': 'ご相談内容',
  'footer.messagePlaceholder': '必要な書類、用途、希望納期などをご記入ください。',
  'footer.submit': 'フォームで問い合わせる',
  'footer.submitAriaLabel': 'お問い合わせフォームを送信',
  'footer.formAriaLabel': 'お問い合わせフォーム',
  'footer.mailto': 'メールで直接送る: igrs20200601@gmail.com',
  'footer.company': '会社概要',
  'footer.privacy': 'プライバシーポリシー',
  'footer.pricingLink': '料金',
  'footer.contactLink': 'お問い合わせ',
  'footer.copyright': '© 2026 株式会社IGRS',

  // ── PainPoints ───────────────────────────────────────────────────────
  'painpoints.title': 'こんなお悩みありませんか？',
  'painpoints.1.title': '英語が苦手...',
  'painpoints.1.desc': '現地の役所との複雑なやり取りが不安',
  'painpoints.2.title': '時間がない',
  'painpoints.2.desc': '仕事が忙しく、現地に行く時間がない',
  'painpoints.3.title': '手続きが複雑',
  'painpoints.3.desc': '必要な書類や手順が分かりにくい',
  'painpoints.4.title': 'サポートがない',
  'painpoints.4.desc': '困った時に相談できる人がいない',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': 'ご依頼の流れ',
  'process.ctaBtn': 'ステップ1から始める：お問い合わせ',
  'process.ctaAriaLabel': 'ステップ1から始める：お問い合わせ',
  'process.ctaNote': 'まずは無料でご相談ください。匿名OK',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': '選ばれる理由',
  'whyus.1.title': '日本法人運営',
  'whyus.1.desc': '日本法人が運営する信頼性の高いサービスです。現地の最新事情に精通しています。',
  'whyus.2.title': '日本人スタッフ対応',
  'whyus.2.desc': 'お問い合わせから納品まで、日本人スタッフが日本語で丁寧に対応いたします。',
  'whyus.3.title': '進捗の見える化',
  'whyus.3.desc': '申請状況を随時ご報告。不安な待ち時間を解消し、安心して完了をお待ちいただけます。',
  'whyus.stat1.label': '納期目安',
  'whyus.stat1.value': '約1ヶ月',
  'whyus.stat2.label': 'キャンセル方針',
  'whyus.stat2.value': '着手前は無料',
  'whyus.stat3.label': '対応言語',
  'whyus.stat3.value': '日本語・英語',
  'whyus.cta': '信頼できるサービスで安心。今すぐ相談',
  'whyus.ctaAriaLabel': '信頼できるサービスに今すぐ相談する',

  // ── SocialProof ──────────────────────────────────────────────────────
  'social.title': '実績とレビュー',
  'social.note': '公開同意を得た相談者アンケートを要約して掲載しています。',
  'social.stat1.label': '公開レビュー',
  'social.stat2.label': '平均評価',
  'social.stat3.label': '相談から着手まで',

  // ── QuickFacts ───────────────────────────────────────────────────────
  'quickfacts.title': 'サービス要点',
  'quickfacts.docs.label': '対象書類',
  'quickfacts.docs.value': 'セノマー（CENOMAR）・PSA・NBI・DFAアポスティーユ・LTO関連',
  'quickfacts.period.label': '納期目安',
  'quickfacts.period.value': '約1ヶ月（案件により変動）',
  'quickfacts.lang.label': '対応言語',
  'quickfacts.lang.value': '日本語・英語',
  'quickfacts.company.label': '運営',
  'quickfacts.company.value': '株式会社IGRS（日本法人）',
  'quickfacts.updated': '最終更新日: 2026-02-17',

  // ── GuideLinks ───────────────────────────────────────────────────────
  'guides.title': 'フィリピン書類・手続き一覧',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': '相談事例（匿名）',
  'cases.note': '公開可能な範囲で、実際の相談パターンを要約して掲載しています。',
};

const en: typeof ja = {
  // ── Navbar ──────────────────────────────────────────────────────────
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
  'navbar.purpose.usVisa': 'US Visa Documents',

  // ── Hero ─────────────────────────────────────────────────────────────
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

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': 'Available Documents & Services',
  'services.subtitle': 'CENOMAR, PSA, NBI, LTO, DFA Apostille Procurement',
  'services.badge': 'Most Popular',
  'services.agencies.title': 'Official Agencies',
  'services.agencies.psa': 'PSA (Philippine Statistics Authority)',
  'services.agencies.nbi': 'NBI (National Bureau of Investigation)',
  'services.agencies.dfa': 'DFA (Dept. of Foreign Affairs)',
  'services.agencies.lto': 'LTO (Land Transportation Office)',
  'services.agencies.note': '* Official government websites. For reference only.',
  'services.cta': 'Not sure what you need? Consult for free',
  'services.ctaAriaLabel': 'Free consultation about our services',
  'services.ctaNote': 'We reply within 24 hours',

  // ── Pricing ───────────────────────────────────────────────────────────
  'pricing.title': 'Pricing Plans',
  'pricing.note': '* Prices may vary depending on document complexity',
  'pricing.featured': 'Most Popular',
  'pricing.detailsBtn': 'View Details',
  'pricing.docsTitle': 'Included Documents',
  'pricing.deliveryLabel': 'Delivery',
  'pricing.ctaBtn': 'Get a Quote',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': 'Frequently Asked Questions',
  'faq.ctaTitle': 'Still have questions?',
  'faq.ctaDesc': 'Feel free to contact us with any question, big or small. Our specialists will respond promptly.',
  'faq.ctaBtn': 'Talk to a Specialist',
  'faq.ctaAriaLabel': 'Talk to a specialist directly',
  'faq.ctaNote': 'Average reply time: within 24 hours',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': 'Get a Free Consultation',
  'footer.subtitle': "Not sure which documents you need?\nFeel free to reach out anytime.",
  'footer.nameLabel': 'Name',
  'footer.namePlaceholder': 'John Smith',
  'footer.emailLabel': 'Email Address',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.messageLabel': 'Message',
  'footer.messagePlaceholder': 'Please describe the documents you need, their purpose, and your preferred timeline.',
  'footer.submit': 'Send Message',
  'footer.submitAriaLabel': 'Submit contact form',
  'footer.formAriaLabel': 'Contact Form',
  'footer.mailto': 'Send directly by email: igrs20200601@gmail.com',
  'footer.company': 'Company',
  'footer.privacy': 'Privacy Policy',
  'footer.pricingLink': 'Pricing',
  'footer.contactLink': 'Contact',
  'footer.copyright': '© 2026 IGRS Inc.',

  // ── PainPoints ───────────────────────────────────────────────────────
  'painpoints.title': 'Common Challenges',
  'painpoints.1.title': 'Language Barrier',
  'painpoints.1.desc': 'Worried about communicating with local government offices in Filipino or English',
  'painpoints.2.title': 'No Time',
  'painpoints.2.desc': 'Too busy to travel to the Philippines in person',
  'painpoints.3.title': 'Complex Process',
  'painpoints.3.desc': 'Hard to know which documents are needed and in what order',
  'painpoints.4.title': 'No Support',
  'painpoints.4.desc': 'Nobody to turn to when problems arise',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': 'How It Works',
  'process.ctaBtn': 'Start with Step 1: Contact Us',
  'process.ctaAriaLabel': 'Start with Step 1: Contact Us',
  'process.ctaNote': 'Start with a free consultation. Anonymous inquiries welcome.',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': 'Why Choose Us',
  'whyus.1.title': 'Japan-Based Operation',
  'whyus.1.desc': 'Operated by a registered Japanese company with up-to-date knowledge of local Philippine procedures.',
  'whyus.2.title': 'English-Speaking Staff',
  'whyus.2.desc': 'Our staff handle everything from inquiry to delivery with care, fully in English.',
  'whyus.3.title': 'Progress Transparency',
  'whyus.3.desc': 'We provide regular progress updates so you always know exactly where things stand.',
  'whyus.stat1.label': 'Typical Delivery',
  'whyus.stat1.value': 'Approx. 1 Month',
  'whyus.stat2.label': 'Cancellation',
  'whyus.stat2.value': 'Free Before Start',
  'whyus.stat3.label': 'Languages',
  'whyus.stat3.value': 'Japanese & English',
  'whyus.cta': 'Consult with a trusted service now',
  'whyus.ctaAriaLabel': 'Consult with our trusted service now',

  // ── SocialProof ──────────────────────────────────────────────────────
  'social.title': 'Track Record & Reviews',
  'social.note': 'Summaries of client surveys shared with consent.',
  'social.stat1.label': 'Reviews',
  'social.stat2.label': 'Avg. Rating',
  'social.stat3.label': 'Inquiry to Start',

  // ── QuickFacts ───────────────────────────────────────────────────────
  'quickfacts.title': 'Service Highlights',
  'quickfacts.docs.label': 'Documents Covered',
  'quickfacts.docs.value': 'CENOMAR, PSA, NBI, DFA Apostille, LTO',
  'quickfacts.period.label': 'Typical Delivery',
  'quickfacts.period.value': 'Approx. 1 month (varies by case)',
  'quickfacts.lang.label': 'Languages',
  'quickfacts.lang.value': 'Japanese & English',
  'quickfacts.company.label': 'Operated By',
  'quickfacts.company.value': 'IGRS Inc. (Japan-based)',
  'quickfacts.updated': 'Last updated: 2026-02-17',

  // ── GuideLinks ───────────────────────────────────────────────────────
  'guides.title': 'Philippine Documents & Procedures',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': 'Case Examples (Anonymous)',
  'cases.note': 'Actual consultation patterns summarized and shared with client consent.',
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

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith('/ja') ? 'ja' : 'en';

  // setLang is a no-op: language is determined solely by URL
  const setLang = (_newLang: Lang) => {};

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
