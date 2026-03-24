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
  'navbar.doc.nbi': 'NBIクリアランス',
  'navbar.doc.apostille': 'アポスティーユ',
  'navbar.doc.marriage': '婚姻証明書',
  'navbar.purpose.marriage': '国際結婚',
  'navbar.purpose.visa': '配偶者ビザ',
  'navbar.purpose.license': '外免切替',
  'navbar.purpose.naturalization': '帰化申請',
  'navbar.purpose.nbi': '海外ビザ用NBIクリアランス',

  // ── Hero ─────────────────────────────────────────────────────────────
  'hero.badge': '日本法人・現地スタッフ対応',
  'hero.h1line1': 'フィリピン書類代行',
  'hero.h1line2': '（CENOMAR・PSA・LTO）日本語だけで',
  'hero.h1line3': '確実に進められます',
  'hero.description': '国際結婚、配偶者ビザ準備、外免切替。今の目的に合う進め方をご案内します。渡航不要・フィリピン語不要。',
  'hero.disclaimer': '※お手続きにあたり、弊社で作成したauthorization letterへのご署名や、身分証明書のコピー提出をお願いする場合があります。やり取り自体は日本語で進めます。',
  'hero.ctaA': '必要書類を無料で確認する',
  'hero.ctaB': '今すぐ無料相談する',
  'hero.ctaConsult': '見積もり・依頼はこちら',
  'hero.pricingCta': '料金を見る',
  'hero.ctaAriaLabel': '無料相談フォームへ移動',
  'hero.pricingAriaLabel': '料金プランへ移動',

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': '用途別サービス',
  'services.subtitle': 'まずは、今の目的に合うサービスをご確認ください。単なる書類名ではなく、手続全体の中で必要になりやすいものを整理しています。',
  'services.badge': '人気No.1',
  'services.agencies.title': '各書類の管轄機関',
  'services.agencies.psa': 'PSA（フィリピン統計庁）',
  'services.agencies.nbi': 'NBI（国家捜査局）',
  'services.agencies.dfa': 'DFA（フィリピン外務省）',
  'services.agencies.lto': 'LTO（陸運局）',
  'services.agencies.note': '※ 各機関の公式ウェブサイトです。参考情報としてご利用ください。',
  'services.cta': '自分のケースを相談する',
  'services.ctaAriaLabel': '自分のケースを相談する',
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
  'faq.title': 'よくあるご質問',
  'faq.ctaTitle': 'まずはお気軽にご相談ください',
  'faq.ctaDesc': '書類名や手続きの順序が分からなくても問題ありません。用途をお伝えいただければ、必要なものを整理してお見積もりします。',
  'faq.ctaBtn': '自分のケースを相談する',
  'faq.ctaAriaLabel': '自分のケースを相談する',
  'faq.ctaNote': '匿名OK・書類名が分からなくてもご相談いただけます',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': 'まずはお気軽にご相談ください',
  'footer.subtitle': '「自分はどのルートか分からない」「何の書類が必要か分からない」という段階でも大丈夫です。\n今の状況に近い進め方からご案内します。\n\nフィリピン書類のことを、日本語で、迷わず、前に進めるために。',
  'footer.nameLabel': 'お名前',
  'footer.namePlaceholder': '山田 太郎',
  'footer.emailLabel': 'メールアドレス',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.messageLabel': 'ご相談内容',
  'footer.messagePlaceholder': '取得したい書類、用途（結婚・ビザ・外免切替など）、希望納期をご記入ください。',
  'footer.submit': '自分のケースを相談する',
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
  'painpoints.title': 'あなたの目的から進められます',
  'painpoints.1.title': 'CENOMARだけ取ればよいのか分からない',
  'painpoints.1.desc': '書類名が先行して、目的別に何を揃えるかが整理できていないことが多い',
  'painpoints.2.title': '婚姻証明書の次に何が必要か分からない',
  'painpoints.2.desc': '手続き全体の流れが見えないと、書類不備やタイミングのズレが起きやすい',
  'painpoints.3.title': '配偶者ビザ準備でどこまでフィリピン書類が必要か分からない',
  'painpoints.3.desc': '申請先によって必要書類が変わるため、何を揃えれば足りるかが分かりにくい',
  'painpoints.4.title': '代行業者が信頼できるか分からない',
  'painpoints.4.desc': '海外の書類代行は実態が見えにくく、支払い後に連絡が取れなくなるケースも耳にする',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': 'ご利用の流れ',
  'process.ctaBtn': '自分のケースを相談する',
  'process.ctaAriaLabel': '自分のケースを相談する',
  'process.ctaNote': '日本語のみで完結。匿名でのご相談もOK',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': '不安を減らしながら、前に進めるための3つの考え方',
  'whyus.1.title': '何を取るかより、何のために使うかを先に整理します',
  'whyus.1.desc': '提出先によって必要書類は変わります。まず用途を確認し、必要になりやすい書類を整理します。',
  'whyus.2.title': '進捗が見えるようにご案内します',
  'whyus.2.desc': 'いまどの段階か、次に何をするかが分かるように進めます。',
  'whyus.3.title': 'できることと、できないことを分けてご説明します',
  'whyus.3.desc': '書類取得のご案内と、専門資格者への確認が必要な部分を分けてお伝えします。',
  'whyus.stat1.label': '依頼方法',
  'whyus.stat1.value': '渡航ゼロで完結',
  'whyus.stat2.label': '着手前キャンセル',
  'whyus.stat2.value': '無料',
  'whyus.stat3.label': '返信スピード',
  'whyus.stat3.value': '平均24時間以内',
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
  'guides.title': 'あなたの目的をお選びください',

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
  'navbar.purpose.nbi': 'NBI Clearance (Overseas Visa)',

  // ── Hero ─────────────────────────────────────────────────────────────
  'hero.badge': 'Trusted by Filipinos Worldwide',
  'hero.h1line1': 'PSA, CENOMAR & NBI Clearance',
  'hero.h1line2': 'DFA Apostille — Shipped Worldwide',
  'hero.h1line3': 'USA · Canada · Australia · UK & More',
  'hero.description': 'We retrieve PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille from the Philippines for marriage, immigration, and visa applications worldwide. Shipped via DHL to your door — no trip to the Philippines needed.',
  'hero.disclaimer': '* Also handling LTO driver records, PSA Marriage Certificates, and other Philippine documents not listed above. Feel free to ask.',
  'hero.ctaA': 'Free Consultation',
  'hero.ctaB': 'Consult in 30 Sec',
  'hero.ctaConsult': 'Get a Quote',
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
  'faq.ctaDesc': 'Tell us your purpose and destination — we will identify the documents, estimate the cost, and outline next steps.',
  'faq.ctaBtn': 'Get a Free Consultation Now',
  'faq.ctaAriaLabel': 'Get a free procurement consultation now',
  'faq.ctaNote': 'Anonymous OK — not sure which docs you need? Just ask.',

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
  'whyus.stat1.label': 'How to Order',
  'whyus.stat1.value': 'No Travel Required',
  'whyus.stat2.label': 'Cancellation',
  'whyus.stat2.value': 'Free Before Start',
  'whyus.stat3.label': 'Reply Speed',
  'whyus.stat3.value': 'Within 24 Hours',
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
