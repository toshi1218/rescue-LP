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
  'navbar.terms': '利用規約',
  'navbar.doc.cenomar': '独身証明書',
  'navbar.doc.birth': '出生証明書',
  'navbar.doc.nbi': '無犯罪証明書',
  'navbar.doc.apostille': 'アポスティーユ',
  'navbar.doc.marriage': '婚姻証明書',
  'navbar.purpose.marriage': '国際結婚',
  'navbar.purpose.visa': '配偶者ビザ',
  'navbar.purpose.license': '免許切替',
  'navbar.purpose.naturalization': '帰化申請',

  // ── Hero ─────────────────────────────────────────────────────────────
  'hero.badge': '日本法人・現地スタッフ対応',
  'hero.h1line1': 'フィリピン書類のことなら、',
  'hero.h1line2': '日本語で安心おまかせ',
  'hero.h1line3': '進捗が見える取得代行サービス',
  'hero.description': 'フィリピン現地での面倒な確認や、複雑な英語のやり取りは不要です。CENOMAR（独身証明書）、PSA書類、DFAアポスティーユなどの取得を現地スタッフが代行し、進捗は随時ご報告します。「今どうなっているのか分からない」という不安を減らしながら、日本からご依頼いただけるサービスです。',
  'hero.disclaimer': '※お手続きにあたり、弊社で作成した英文委任状（Special Power of Attorney）へのご署名や、身分証明書のコピー提出をお願いする場合があります。やり取り自体は日本語で進めます。',
  'hero.ctaA': '今すぐ無料相談する',
  'hero.ctaB': '代行を今すぐ相談',
  'hero.pricingCta': '料金を見る',
  'hero.ctaAriaLabel': '無料相談フォームへ移動',
  'hero.pricingAriaLabel': '料金プランへ移動',

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': '日本から依頼できる、フィリピン書類取得サービス',
  'services.subtitle': '目的に応じた書類を整理し、現地スタッフが取得を代行します',
  'services.badge': '人気No.1',
  'services.agencies.title': '各書類の管轄機関',
  'services.agencies.psa': 'PSA（フィリピン統計庁）',
  'services.agencies.nbi': 'NBI（国家捜査局）',
  'services.agencies.dfa': 'DFA（フィリピン外務省）',
  'services.agencies.lto': 'LTO（陸運局）',
  'services.agencies.note': '※ 各機関の公式ウェブサイトです。参考情報としてご利用ください。',
  'services.cta': '今すぐ代行依頼を相談する（無料）',
  'services.ctaAriaLabel': '今すぐ代行依頼を無料で相談する',
  'services.ctaNote': '必要書類が分からなくてもOK・24時間以内に返信',

  // ── Pricing ───────────────────────────────────────────────────────────
  'pricing.title': '料金プラン',
  'pricing.note': '※取得難易度により変動する場合があります',
  'pricing.featured': '人気 No.1',
  'pricing.detailsBtn': '詳細を見る',
  'pricing.docsTitle': '取得できる書類',
  'pricing.deliveryLabel': '納期',
  'pricing.ctaBtn': '相談して見積もる',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': 'よくある質問：費用・日数・依頼方法',
  'faq.ctaTitle': '代行依頼について、もっと詳しく聞きたい方へ',
  'faq.ctaDesc': '費用、書類の種類、納期について、専門スタッフが丁寧にお答えします。まずはお気軽にご相談ください。',
  'faq.ctaBtn': '今すぐ無料で代行相談する',
  'faq.ctaAriaLabel': '今すぐ無料で代行相談する',
  'faq.ctaNote': '平均返信時間：24時間以内 / 匿名OK',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': '今すぐ代行依頼を相談する（無料）',
  'footer.subtitle': 'フィリピン書類は、「何を、どの順番で、どこまで揃えるか」で迷いやすい手続きです。\nまずは現在の状況をお知らせください。必要な流れを確認し、進め方をご提案します。',
  'footer.nameLabel': 'お名前',
  'footer.namePlaceholder': '山田 太郎',
  'footer.emailLabel': 'メールアドレス',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.messageLabel': 'ご相談内容',
  'footer.messagePlaceholder': '取得したい書類、用途（結婚・ビザ・外免切替など）、希望納期をご記入ください。',
  'footer.submit': 'フォームで問い合わせる',
  'footer.submitAriaLabel': 'お問い合わせフォームを送信',
  'footer.formAriaLabel': 'お問い合わせフォーム',
  'footer.mailto': 'メールで直接送る: igrs20200601@gmail.com',
  'footer.company': '会社概要',
  'footer.privacy': 'プライバシーポリシー',
  'footer.terms': '利用規約',
  'footer.pricingLink': '料金',
  'footer.contactLink': 'お問い合わせ',
  'footer.copyright': '© 2026 株式会社IGRS',

  // ── PainPoints ───────────────────────────────────────────────────────
  'painpoints.title': '「払ったのに進まない」を減らします',
  'painpoints.1.title': '本当に動いてるの？',
  'painpoints.1.desc': '着手後に何も連絡がなく、本当に手続きが進んでいるか不安になる',
  'painpoints.2.title': '書類が揃うか心配',
  'painpoints.2.desc': '不備や差し戻しで、ビザ申請や婚姻届が遅れてしまうかもしれない',
  'painpoints.3.title': '何が必要か分からない',
  'painpoints.3.desc': '英語の書類を読んでも何を準備すればいいのか、全く見当がつかない',
  'painpoints.4.title': '詐欺だったら怖い',
  'painpoints.4.desc': '国をまたぐ取引で、実体のない会社に騙されてしまうかもしれない',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': '依頼から書類到着まで：ご依頼の流れ',
  'process.ctaBtn': '今すぐ代行を依頼する（無料相談）',
  'process.ctaAriaLabel': '今すぐ代行を依頼する（無料相談）',
  'process.ctaNote': '日本語のみで完結。匿名でのご相談もOK',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': '私たちの3つの約束',
  'whyus.1.title': '進捗が見える',
  'whyus.1.desc': '申請、受理、発送などの節目でご報告します。',
  'whyus.2.title': '日本語で進めやすい',
  'whyus.2.desc': '現地機関との確認や取得手続きは弊社が進めます。お客様には、必要書類のご用意や委任状へのご署名などをお願いする形です。',
  'whyus.3.title': '必要書類を整理する',
  'whyus.3.desc': '目的に応じて必要書類を整理し、不備や差し戻しのリスクをできる限り減らします。',
  'whyus.stat1.label': '目安納期',
  'whyus.stat1.value': '約1ヶ月〜',
  'whyus.stat2.label': '着手前キャンセル',
  'whyus.stat2.value': '無料',
  'whyus.stat3.label': '対応言語',
  'whyus.stat3.value': '日本語でやり取りOK',
  'whyus.cta': 'フィリピン書類の代行を今すぐ依頼する',
  'whyus.ctaAriaLabel': 'フィリピン書類取得代行を今すぐ依頼する',

  // ── SocialProof ──────────────────────────────────────────────────────
  'social.title': '代行依頼の実績・お客様の声',
  'social.note': '公開同意を得た相談者アンケートを要約して掲載しています。',
  'social.stat1.label': '公開レビュー',
  'social.stat2.label': '平均評価',
  'social.stat3.label': '相談から着手まで',

  // ── QuickFacts ───────────────────────────────────────────────────────
  'quickfacts.title': '代行の費用・納期・依頼方法まとめ',
  'quickfacts.docs.label': '代行できる書類',
  'quickfacts.docs.value': 'CENOMAR（独身証明書）・PSA・NBI・DFAアポスティーユ・LTO関連',
  'quickfacts.period.label': '納期目安',
  'quickfacts.period.value': '約1ヶ月〜（案件により変動）',
  'quickfacts.lang.label': '依頼方法',
  'quickfacts.lang.value': '日本語のみでOK・渡航不要',
  'quickfacts.company.label': '運営',
  'quickfacts.company.value': '株式会社IGRS（日本法人）',
  'quickfacts.updated': '最終更新日: 2026-03-01',

  // ── GuideLinks ───────────────────────────────────────────────────────
  'guides.title': 'フィリピン書類・手続き一覧',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': '代行依頼事例（匿名）',
  'cases.note': '公開可能な範囲で、実際の代行依頼パターンを要約して掲載しています。',
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
  'navbar.terms': 'Terms of Service',
  'navbar.doc.cenomar': 'CENOMAR',
  'navbar.doc.birth': 'Birth Certificate',
  'navbar.doc.nbi': 'NBI Clearance',
  'navbar.doc.apostille': 'Apostille',
  'navbar.doc.marriage': 'Marriage Certificate',
  'navbar.purpose.marriage': 'International Marriage',
  'navbar.purpose.visa': 'Spouse Visa',
  'navbar.purpose.license': 'License Transfer',
  'navbar.purpose.naturalization': 'Naturalization',

  // ── Hero ─────────────────────────────────────────────────────────────
  'hero.badge': 'Trusted by Filipinos Worldwide',
  'hero.h1line1': 'PSA, CENOMAR & NBI',
  'hero.h1line2': 'With DFA Apostille — Shipped Worldwide',
  'hero.h1line3': 'USA · Canada · Australia · UK & More',
  'hero.description': 'We retrieve PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille from the Philippines for marriage, immigration, and visa applications worldwide. Shipped via DHL to your door — no trip to the Philippines needed.',
  'hero.disclaimer': '* Also handling LTO driver records, PSA Marriage Certificates, and other Philippine documents not listed above. Feel free to ask.',
  'hero.ctaA': 'Free Consultation',
  'hero.ctaB': 'Consult in 30 Sec',
  'hero.pricingCta': 'View Pricing',
  'hero.ctaAriaLabel': 'Go to free consultation form',
  'hero.pricingAriaLabel': 'Go to pricing plans',

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': 'CENOMAR, PSA, LTO & Apostille Procurement Service',
  'services.subtitle': 'Full-service Philippine document procurement — order from anywhere in the world',
  'services.badge': 'Most Popular',
  'services.agencies.title': 'Issuing Agencies',
  'services.agencies.psa': 'PSA (Philippine Statistics Authority)',
  'services.agencies.nbi': 'NBI (National Bureau of Investigation)',
  'services.agencies.dfa': 'DFA (Dept. of Foreign Affairs)',
  'services.agencies.lto': 'LTO (Land Transportation Office)',
  'services.agencies.note': '* Official government websites. For reference only.',
  'services.cta': 'Request procurement now — free consultation',
  'services.ctaAriaLabel': 'Request document procurement — free consultation',
  'services.ctaNote': "Don't know which docs you need? That's OK — we reply within 24 hours",

  // ── Pricing ───────────────────────────────────────────────────────────
  'pricing.title': 'Pricing Plans',
  'pricing.note': '* Prices may vary depending on document complexity',
  'pricing.featured': 'Most Popular',
  'pricing.detailsBtn': 'View Details',
  'pricing.docsTitle': 'Included Documents',
  'pricing.deliveryLabel': 'Delivery',
  'pricing.ctaBtn': 'Get a Quote',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': 'FAQ: Cost, Timeline & How to Order',
  'faq.ctaTitle': 'Want to know more about our procurement service?',
  'faq.ctaDesc': 'Our specialists will answer any question about cost, document types, or delivery time. Feel free to reach out.',
  'faq.ctaBtn': 'Get a Free Consultation Now',
  'faq.ctaAriaLabel': 'Get a free procurement consultation now',
  'faq.ctaNote': 'Average reply time: within 24 hours / Anonymous OK',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': 'Start Your Procurement — Free Consultation',
  'footer.subtitle': "No trip to the Philippines needed.\nReach out in English and we'll handle everything.",
  'footer.nameLabel': 'Name',
  'footer.namePlaceholder': 'John Smith',
  'footer.emailLabel': 'Email Address',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.messageLabel': 'Message',
  'footer.messagePlaceholder': 'Documents needed, purpose (marriage / visa / license transfer), and preferred timeline.',
  'footer.submit': 'Send Message',
  'footer.submitAriaLabel': 'Submit contact form',
  'footer.formAriaLabel': 'Contact Form',
  'footer.mailto': 'Send directly by email: igrs20200601@gmail.com',
  'footer.company': 'Company',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.pricingLink': 'Pricing',
  'footer.contactLink': 'Contact',
  'footer.copyright': '© 2026 IGRS Inc.',

  // ── PainPoints ───────────────────────────────────────────────────────
  'painpoints.title': 'Do Any of These Sound Familiar?',
  'painpoints.1.title': '"Is anyone working on this?"',
  'painpoints.1.desc': 'You paid, but there are no updates. You have no idea if anything is actually happening.',
  'painpoints.2.title': '"What if the docs are wrong?"',
  'painpoints.2.desc': 'A missing Apostille or wrong format could delay your visa or get your application rejected.',
  'painpoints.3.title': '"I have no idea what I need."',
  'painpoints.3.desc': "Every country's immigration authority has different requirements. It's impossible to figure out alone.",
  'painpoints.4.title': '"What if this is a scam?"',
  'painpoints.4.desc': 'Cross-border transactions with no physical presence feel risky. How do you know who to trust?',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': 'From Order to Delivery: How It Works',
  'process.ctaBtn': 'Start Your Procurement Now — Free Consult',
  'process.ctaAriaLabel': 'Start your document procurement now — free consultation',
  'process.ctaNote': '100% in English. Anonymous inquiries welcome.',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': 'Three Promises That Remove Your Risk',
  'whyus.1.title': 'Progress Updates at Every Stage',
  'whyus.1.desc': 'We report at each step: application submitted, received, Apostille done, dispatched. You will never be left wondering.',
  'whyus.2.title': 'English Only — We Handle the Rest',
  'whyus.2.desc': 'We deal with PSA, NBI, DFA, and LTO on your behalf. You only communicate with us in English. No Filipino needed.',
  'whyus.3.title': 'Pay the Balance Only After Confirmation',
  'whyus.3.desc': 'Final payment is due only after you confirm document copies. Cancellation before we start is free. Zero financial risk.',
  'whyus.stat1.label': 'Typical Delivery',
  'whyus.stat1.value': 'Approx. 1 Month+',
  'whyus.stat2.label': 'Cancellation',
  'whyus.stat2.value': 'Free Before Start',
  'whyus.stat3.label': 'Languages',
  'whyus.stat3.value': 'English Only OK',
  'whyus.cta': 'Order your Philippine documents now',
  'whyus.ctaAriaLabel': 'Order Philippine document procurement now',

  // ── SocialProof ──────────────────────────────────────────────────────
  'social.title': 'Procurement Results & Client Reviews',
  'social.note': 'Summaries of client surveys shared with consent.',
  'social.stat1.label': 'Reviews',
  'social.stat2.label': 'Avg. Rating',
  'social.stat3.label': 'Inquiry to Start',

  // ── QuickFacts ───────────────────────────────────────────────────────
  'quickfacts.title': 'Cost, Delivery & How to Order',
  'quickfacts.docs.label': 'Documents We Handle',
  'quickfacts.docs.value': 'CENOMAR, PSA, NBI, DFA Apostille, LTO',
  'quickfacts.period.label': 'Typical Delivery',
  'quickfacts.period.value': 'Approx. 1 month+ (varies by case)',
  'quickfacts.lang.label': 'How to Order',
  'quickfacts.lang.value': 'English only — no Philippines trip needed',
  'quickfacts.company.label': 'Operated By',
  'quickfacts.company.value': 'IGRS Inc. (Cebu, Philippines)',
  'quickfacts.updated': 'Last updated: 2026-03-01',

  // ── GuideLinks ───────────────────────────────────────────────────────
  'guides.title': 'Philippine Documents & Procedures',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': 'Procurement Case Examples (Anonymous)',
  'cases.note': 'Actual procurement cases summarized and shared with client consent.',
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
  // Note: /en/* paths are now the EN canonical routes.
  // Any path not starting with /ja is treated as English (including /en/* and legacy / routes).

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
