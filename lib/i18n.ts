import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Lang = 'ja' | 'en' | 'ko';

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
  'hero.h1line1': 'フィリピン書類の整理・取得代行',
  'hero.h1line2': '（CENOMAR・PSA・NBI・LTO・アポスティーユ）',
  'hero.h1line3': '提出先に合わせて、必要な書類・部数を揃えます。',
  'hero.description': '国際結婚・配偶者ビザ・外免切替で提出先が求めやすい書類を整理し、フィリピン側での取得・アポスティーユ対応まで進めます。渡航不要・日本語のみ。',
  'hero.disclaimer': '※お手続きにあたり、弊社で作成したauthorization letterへのご署名や、身分証明書のコピー提出をお願いする場合があります。やり取り自体は日本語で進めます。',
  'hero.ctaA': '自分のケースに必要な書類を確認する',
  'hero.ctaB': '今すぐ無料相談する',
  'hero.ctaConsult': '見積もり・依頼はこちら',
  'hero.pricingCta': '料金を見る',
  'hero.ctaAriaLabel': '無料相談フォームへ移動',
  'hero.pricingAriaLabel': '料金プランへ移動',

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': '用途別サービス',
  'services.subtitle': '日本側手続きで止まりにくい形を目的に、提出先ごとに必要になりやすい書類を整理・取得します。書類名より目的から選べます。',
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
  'pricing.note': '※取得難易度・記載内容の確認・追加手続きにより変動します',
  'pricing.featured': '人気 No.1',
  'pricing.detailsBtn': '詳細を見る',
  'pricing.docsTitle': '取得できる書類',
  'pricing.deliveryLabel': '納期',
  'pricing.ctaBtn': '相談して見積もる',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': 'よくあるご質問',
  'faq.ctaTitle': 'まずはご相談ください',
  'faq.ctaDesc': '書類名や手続きの順序が分からなくても問題ありません。用途をお伝えいただければ、必要なものを整理してお見積もりします。',
  'faq.ctaBtn': '自分のケースを相談する',
  'faq.ctaAriaLabel': '自分のケースを相談する',
  'faq.ctaNote': '匿名OK・書類名が分からなくても対応します',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': 'まずはご相談ください',
  'footer.subtitle': '「自分はどのルートか分からない」「何の書類が必要か分からない」という段階でも大丈夫です。\n今の状況に近い進め方からご案内します。\n\nフィリピン書類のことを、日本語で、迷わず、前に進めるために。',
  'footer.nameLabel': 'お名前',
  'footer.namePlaceholder': '山田 太郎',
  'footer.emailLabel': 'メールアドレス',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.countryLabel': 'お住まいの国',
  'footer.countryPlaceholder': '例：日本、アメリカ、オーストラリア',
  'footer.messageLabel': 'ご相談内容',
  'footer.messagePlaceholder': '取得したい書類、用途（結婚・ビザ・外免切替など）、希望納期をご記入ください。',
  'footer.submit': '送信する',
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
  'painpoints.title': 'こんなお悩み、ありませんか？',
  'painpoints.1.title': 'CENOMARだけ取ればよいのか分からない',
  'painpoints.1.desc': '書類名は知っていても、提出先・手続きごとに何が必要かが整理できていないことが多い',
  'painpoints.2.title': '婚姻証明書の次に何が必要か分からない',
  'painpoints.2.desc': '手続き全体の流れが見えないと、書類不備やタイミングのズレが起きやすい',
  'painpoints.3.title': '配偶者ビザ準備でどこまでフィリピン書類が必要か分からない',
  'painpoints.3.desc': '提出先・申請段階によって紙アポスティーユの要否や必要部数が変わり、揃え方が分かりにくい',
  'painpoints.4.title': '代行業者が信頼できるか分からない',
  'painpoints.4.desc': '海外の書類代行は実態が見えにくく、支払い後に連絡が取れなくなるケースも耳にする',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': 'ご利用の流れ',
  'process.ctaBtn': '自分のケースを相談する',
  'process.ctaAriaLabel': '自分のケースを相談する',
  'process.ctaNote': '日本語のみで完結。匿名でのご相談もOK',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': '書類を取るだけでなく、手続きが通りやすい形に整えます',
  'whyus.1.title': '提出先の要件を確認し、書類を正確に整えます',
  'whyus.1.desc': '提出先・手続き段階によって、紙のアポスティーユの要否や必要部数が変わります。用途と提出先を確認し、日本側で止まらない形に整えます。',
  'whyus.2.title': '順番と全体像を最初に共有します',
  'whyus.2.desc': 'どの書類をどの順番で取るか、後の手続きで再取得が必要になるポイントを最初にご案内します。',
  'whyus.3.title': 'できることと、できないことを分けてご説明します',
  'whyus.3.desc': '書類取得のご案内と、専門資格者への確認が必要な部分を分けてお伝えします。',
  'whyus.stat1.label': '依頼方法',
  'whyus.stat1.value': '渡航ゼロで完結',
  'whyus.stat2.label': '着手前キャンセル',
  'whyus.stat2.value': '無料',
  'whyus.stat3.label': '返信スピード',
  'whyus.stat3.value': '平均24時間以内',
  'whyus.cta': '自分のケースを相談して書類を整理する',
  'whyus.ctaAriaLabel': '自分のケースを相談してフィリピン書類を整理する',

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
  'guides.title': '手続き別ガイドを読む',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': '代行依頼事例（匿名）',
  'cases.note': '公開可能な範囲で、実際の代行依頼パターンを要約して掲載しています。',

  // ── FloatingChatWidget ───────────────────────────────────────────────
  'chat.buttonLabel': 'AIに相談',
  'chat.openAriaLabel': 'AIチャットを開く',
  'chat.closeAriaLabel': 'チャットを閉じる',
  'chat.dialogAriaLabel': 'AIチャットウィンドウ',
  'chat.inputAriaLabel': 'メッセージを入力',
  'chat.headerTitle': 'AI一次受付',
  'chat.headerSubtitle': 'CENOMAR・PSA・NBI・DFAの疑問に即答します',
  'chat.greeting': 'こんにちは。フィリピン書類（CENOMAR・PSA出生証明書・NBI・DFAアポスティーユ等）についてお気軽にどうぞ。正式な見積もりは人間スタッフが最終確認します。',
  'chat.placeholder': '例: CENOMARの料金は？',
  'chat.send': '送信',
  'chat.sending': '送信中…',
  'chat.error': '一時的に応答できません。時間をおいて再度お試しください。',
  'chat.disclaimer': '※AIの回答は参考情報です。正式な料金・納期はフォーム送信後にスタッフが確定します。',
  'chat.quickPrompt.psa': 'PSA出生証明書の取得方法',
  'chat.quickPrompt.cenomar': 'CENOMARとは？',
  'chat.quickPrompt.nbi': 'NBIクリアランスの有効期限',
  'chat.quickPrompt.apostille': 'DFAアポスティーユの所要時間',
  'chat.quickPrompt.pricing': '料金の目安を教えて',
  'chat.handoff.message': 'ご依頼内容が具体的なようです。正式なお見積もりは下記フォームからどうぞ。',
  'chat.handoff.cta': 'お問い合わせフォームへ進む',

  // ── BackToTop ─────────────────────────────────────────────────────────
  'backtotop.ariaLabel': 'ページトップへ戻る',
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
  'hero.disclaimer': '* Also handling LTO driver records, PSA Marriage Certificates, and other Philippine documents not listed above. Contact us to confirm.',
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
  'footer.countryLabel': 'Country of Residence',
  'footer.countryPlaceholder': 'e.g. Japan, USA, Australia',
  'footer.messageLabel': 'Message',
  'footer.messagePlaceholder': 'Documents needed, purpose (marriage / visa / license transfer), and preferred timeline.',
  'footer.submit': 'Send',
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

  // ── FloatingChatWidget ───────────────────────────────────────────────
  'chat.buttonLabel': 'Ask AI',
  'chat.openAriaLabel': 'Open AI chat',
  'chat.closeAriaLabel': 'Close chat',
  'chat.dialogAriaLabel': 'AI chat window',
  'chat.inputAriaLabel': 'Type a message',
  'chat.headerTitle': 'AI Front Desk',
  'chat.headerSubtitle': 'Quick answers on CENOMAR, PSA, NBI & DFA',
  'chat.greeting': 'Hi! Ask me anything about Philippine documents — CENOMAR, PSA Birth Certificate, NBI Clearance, DFA Apostille, and more. Our human staff will confirm your final quote.',
  'chat.placeholder': 'e.g. How much does CENOMAR cost?',
  'chat.send': 'Send',
  'chat.sending': 'Sending…',
  'chat.error': 'Temporarily unavailable. Please try again in a moment.',
  'chat.disclaimer': 'AI replies are for reference only. A human staff member will confirm the final price and timeline after you submit the form.',
  'chat.quickPrompt.psa': 'How to get a PSA Birth Certificate',
  'chat.quickPrompt.cenomar': 'What is CENOMAR?',
  'chat.quickPrompt.nbi': 'NBI Clearance validity',
  'chat.quickPrompt.apostille': 'DFA Apostille turnaround',
  'chat.quickPrompt.pricing': 'Rough pricing guide',
  'chat.handoff.message': 'Sounds like a real request — let us give you a formal quote via the contact form.',
  'chat.handoff.cta': 'Go to contact form',

  // ── BackToTop ─────────────────────────────────────────────────────────
  'backtotop.ariaLabel': 'Back to top',
};

const ko: typeof ja = {
  // ── Navbar ──────────────────────────────────────────────────────────
  'navbar.logo': '필리핀 서류 취득 대행 센터',
  'navbar.logoAriaLabel': '홈으로',
  'navbar.cta': '문의하기',
  'navbar.home': '홈',
  'navbar.findByDoc': '서류로 찾기',
  'navbar.findByPurpose': '목적으로 찾기',
  'navbar.pricing': '요금',
  'navbar.contact': '문의하기',
  'navbar.company': '회사 소개',
  'navbar.privacy': '개인정보 처리방침',
  'navbar.terms': '이용약관',
  'navbar.doc.cenomar': 'CENOMAR（미혼증명서）',
  'navbar.doc.birth': '출생증명서',
  'navbar.doc.nbi': 'NBI Clearance',
  'navbar.doc.apostille': '아포스티유',
  'navbar.doc.marriage': '혼인증명서',
  'navbar.purpose.marriage': '국제결혼',
  'navbar.purpose.visa': '배우자 비자',
  'navbar.purpose.license': '면허 전환',
  'navbar.purpose.naturalization': '귀화 신청',
  'navbar.purpose.nbi': '해외 비자용 NBI Clearance',

  // ── Hero ─────────────────────────────────────────────────────────────
  'hero.badge': '필리핀 현지 스태프 대응',
  'hero.h1line1': '필리핀 서류 취득,',
  'hero.h1line2': '처음부터 끝까지 도와드립니다',
  'hero.h1line3': 'CENOMAR · PSA · NBI · 아포스티유 원스톱 대행',
  'hero.description': 'CENOMAR（미혼증명서）, PSA 출생증명서, NBI Clearance, DFA 아포스티유를 필리핀 방문 없이 대행합니다. F-6 결혼이민비자 준비부터 한국 혼인신고까지 필리핀 측 서류를 정리해 드립니다.',
  'hero.disclaimer': '※ 카카오톡 또는 이메일로 상담 가능합니다. 필요한 서류가 아직 정확하지 않아도 괜찮습니다.',
  'hero.ctaA': '무료로 상담하기',
  'hero.ctaB': '지금 바로 상담하기',
  'hero.ctaConsult': '견적 받기',
  'hero.pricingCta': '요금 보기',
  'hero.ctaAriaLabel': '무료 상담 폼으로 이동',
  'hero.pricingAriaLabel': '요금 안내로 이동',

  // ── Services ─────────────────────────────────────────────────────────
  'services.title': 'CENOMAR, PSA, NBI, 아포스티유 취득 대행',
  'services.subtitle': '필리핀 서류 취득 전 과정을 대행합니다. 방문 불필요, 이메일만으로 완결.',
  'services.badge': '인기 No.1',
  'services.agencies.title': '발급 기관',
  'services.agencies.psa': 'PSA（필리핀 통계청）',
  'services.agencies.nbi': 'NBI（국가수사국）',
  'services.agencies.dfa': 'DFA（필리핀 외무부）',
  'services.agencies.lto': 'LTO（육운국）',
  'services.agencies.note': '※ 각 기관의 공식 웹사이트입니다. 참고 정보로 이용해 주세요.',
  'services.cta': '무료로 상담하기',
  'services.ctaAriaLabel': '무료 서류 취득 상담 신청',
  'services.ctaNote': '필요한 서류를 모르셔도 괜찮습니다. 24시간 이내에 답변드립니다.',

  // ── Pricing ───────────────────────────────────────────────────────────
  'pricing.title': '요금 안내',
  'pricing.note': '※ 취득 난이도・서류 내용・추가 절차에 따라 변동될 수 있습니다.',
  'pricing.featured': '인기 No.1',
  'pricing.detailsBtn': '상세 보기',
  'pricing.docsTitle': '취득 가능 서류',
  'pricing.deliveryLabel': '납기',
  'pricing.ctaBtn': '무료로 견적 받기',

  // ── FAQ ──────────────────────────────────────────────────────────────
  'faq.title': '자주 묻는 질문',
  'faq.ctaTitle': '먼저 무료로 상담해 보세요',
  'faq.ctaDesc': '서류 이름이나 필요 수량을 모르셔도 괜찮습니다. 목적을 알려주시면 필요한 서류를 정리해 드립니다.',
  'faq.ctaBtn': '무료 상담 신청하기',
  'faq.ctaAriaLabel': '무료 상담 신청하기',
  'faq.ctaNote': '익명 OK · 서류 이름을 몰라도 상담 가능',

  // ── Footer ───────────────────────────────────────────────────────────
  'footer.title': '문의하기',
  'footer.subtitle': '카카오톡 또는 이메일로 상담 가능합니다.\n필요한 서류가 아직 정확하지 않아도 괜찮습니다.',
  'footer.nameLabel': '이름',
  'footer.namePlaceholder': '홍길동',
  'footer.emailLabel': '이메일 주소',
  'footer.emailPlaceholder': 'example@email.com',
  'footer.countryLabel': '거주 국가',
  'footer.countryPlaceholder': '예: 한국, 미국, 호주',
  'footer.messageLabel': '문의 내용',
  'footer.messagePlaceholder': '필요한 서류, 목적（결혼・비자・면허 전환 등）, 희망 납기를 적어주세요.',
  'footer.submit': '전송',
  'footer.submitAriaLabel': '문의 폼 전송',
  'footer.formAriaLabel': '문의 폼',
  'footer.mailto': '이메일로 직접 문의하기: igrs20200601@gmail.com',
  'footer.company': '회사 소개',
  'footer.privacy': '개인정보 처리방침',
  'footer.terms': '이용약관',
  'footer.pricingLink': '요금',
  'footer.contactLink': '문의하기',
  'footer.copyright': '© 2026 IGRS Inc.',

  // ── PainPoints ───────────────────────────────────────────────────────
  'painpoints.title': '서류 준비가 막막한 이유',
  'painpoints.1.title': '어떤 서류가 필요한지 모른다',
  'painpoints.1.desc': 'F-6 비자, 혼인신고, F-5 등 목적에 따라 필요한 서류가 다릅니다. 무엇부터 준비해야 하는지 파악하기 어렵습니다.',
  'painpoints.2.title': '필리핀 기관 대응이 어렵다',
  'painpoints.2.desc': 'PSA, NBI, DFA는 필리핀에서만 발급됩니다. 영어와 타갈로그어로만 운영되는 기관과의 소통이 부담스럽습니다.',
  'painpoints.3.title': '아포스티유가 필요한지 모른다',
  'painpoints.3.desc': '한국 제출용 서류에는 DFA 아포스티유 인증이 필요한 경우가 대부분입니다. 어떤 서류에 필요한지 파악하기 쉽지 않습니다.',
  'painpoints.4.title': '대행업자를 믿을 수 있을지 모른다',
  'painpoints.4.desc': '해외 서류 대행은 실태가 보이지 않아 불안합니다. 비용을 지불한 후 연락이 끊기는 사례도 존재합니다.',

  // ── Process ──────────────────────────────────────────────────────────
  'process.title': '진행 절차',
  'process.ctaBtn': '지금 바로 상담하기',
  'process.ctaAriaLabel': '무료 서류 취득 상담 신청',
  'process.ctaNote': '이메일로 완결. 익명 상담도 OK.',

  // ── WhyUs ────────────────────────────────────────────────────────────
  'whyus.title': '안심하고 맡길 수 있는 3가지 이유',
  'whyus.1.title': '필요한 서류와 순서를 처음에 정리합니다',
  'whyus.1.desc': '취득할 서류와 비용, 예상 기간을 명확하게 안내합니다. 추가 비용은 사전에 고지합니다.',
  'whyus.2.title': '진행 상황을 수시로 보고합니다',
  'whyus.2.desc': '신청 완료, 서류 취득, 아포스티유 완료, 발송 등 각 단계에서 상황을 보고합니다.',
  'whyus.3.title': '서류 확인 후 잔금 결제 방식',
  'whyus.3.desc': '서류 사본을 확인하신 후 잔금을 결제하고 원본을 발송합니다. 착수 전 취소는 무료입니다.',
  'whyus.stat1.label': '의뢰 방법',
  'whyus.stat1.value': '필리핀 방문 불필요',
  'whyus.stat2.label': '착수 전 취소',
  'whyus.stat2.value': '무료',
  'whyus.stat3.label': '답변 속도',
  'whyus.stat3.value': '24시간 이내',
  'whyus.cta': '필리핀 서류 취득 상담 신청하기',
  'whyus.ctaAriaLabel': '필리핀 서류 취득 상담 신청하기',

  // ── SocialProof ──────────────────────────────────────────────────────
  'social.title': '대행 실적 및 고객 후기',
  'social.note': '공개 동의를 받은 상담자 설문을 요약해서 게재하고 있습니다.',
  'social.stat1.label': '공개 리뷰',
  'social.stat2.label': '평균 평점',
  'social.stat3.label': '상담부터 착수까지',

  // ── QuickFacts ───────────────────────────────────────────────────────
  'quickfacts.title': '대행 비용・납기・의뢰 방법',
  'quickfacts.docs.label': '대행 가능 서류',
  'quickfacts.docs.value': 'CENOMAR（미혼증명서）・PSA・NBI・DFA 아포스티유・LTO 관련',
  'quickfacts.period.label': '납기 목표',
  'quickfacts.period.value': '약 4〜8주（서류 종류・상황에 따라 변동）',
  'quickfacts.lang.label': '의뢰 방법',
  'quickfacts.lang.value': '이메일로 완결. 필리핀 방문 불필요.',
  'quickfacts.company.label': '운영',
  'quickfacts.company.value': 'IGRS Inc.（필리핀 세부）',
  'quickfacts.updated': '최종 업데이트: 2026-03-01',

  // ── GuideLinks ───────────────────────────────────────────────────────
  'guides.title': '절차별 가이드',

  // ── CaseStudies ──────────────────────────────────────────────────────
  'cases.title': '대행 의뢰 사례（익명）',
  'cases.note': '공개 가능한 범위에서 실제 대행 의뢰 패턴을 요약해서 게재하고 있습니다.',

  // ── FloatingChatWidget ───────────────────────────────────────────────
  'chat.buttonLabel': 'AI 상담',
  'chat.openAriaLabel': 'AI 채팅 열기',
  'chat.closeAriaLabel': '채팅 닫기',
  'chat.dialogAriaLabel': 'AI 채팅 창',
  'chat.inputAriaLabel': '메시지 입력',
  'chat.headerTitle': 'AI 1차 접수',
  'chat.headerSubtitle': 'CENOMAR・PSA・NBI・DFA 관련 질문에 즉시 답변합니다',
  'chat.greeting': '안녕하세요. 필리핀 서류（CENOMAR・PSA 출생증명서・NBI Clearance・DFA 아포스티유 등）에 대해 자유롭게 질문해 주세요. 정식 견적은 담당자가 최종 확인합니다.',
  'chat.placeholder': '예: CENOMAR 비용은?',
  'chat.send': '전송',
  'chat.sending': '전송 중…',
  'chat.error': '일시적으로 응답할 수 없습니다. 잠시 후 다시 시도해 주세요.',
  'chat.disclaimer': '※ AI 답변은 참고 정보입니다. 정식 요금・납기는 폼 전송 후 담당자가 확정합니다.',
  'chat.quickPrompt.psa': 'PSA 출생증명서 취득 방법',
  'chat.quickPrompt.cenomar': 'CENOMAR이란?',
  'chat.quickPrompt.nbi': 'NBI Clearance 유효기간',
  'chat.quickPrompt.apostille': 'DFA 아포스티유 소요시간',
  'chat.quickPrompt.pricing': '요금 목안을 알려주세요',
  'chat.handoff.message': '구체적인 의뢰 내용인 것 같습니다. 정식 견적은 아래 폼에서 신청해 주세요.',
  'chat.handoff.cta': '문의 폼으로 이동',

  // ── BackToTop ─────────────────────────────────────────────────────────
  'backtotop.ariaLabel': '맨 위로 이동',
};

const dict: Record<Lang, typeof ja> = { ja, en, ko };

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
  const lang: Lang = pathname.startsWith('/ja') ? 'ja' : pathname.startsWith('/ko') ? 'ko' : 'en';
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
