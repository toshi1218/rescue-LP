import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Star, Mail, Tag } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

// ── English variant data ──────────────────────────────────────────────────────

const enBadges = [
  { icon: '🔍', label: 'Acceptance Check Included' },
  { icon: '📄', label: 'Physical PSA Originals' },
  { icon: '📦', label: 'DHL Express Worldwide' },
];

const enDocItems = [
  { label: 'Acceptance Check', sub: 'Verify what format your authority needs' },
  { label: 'Physical PSA Document', sub: 'Original certificate, not e-Cert' },
  { label: 'DFA Apostille', sub: 'Paper apostille for immigration use' },
  { label: 'DHL Express Worldwide', sub: '→ Delivered to your address' },
];

// ── Japanese variant data ─────────────────────────────────────────────────────

const jaDocItems = [
  { label: '受理確認', sub: '提出先に必要な書類形式を確認' },
  { label: '紙原本（PSA）', sub: '電子書類ではない原本を取得' },
  { label: 'DFAアポスティーユ', sub: '入管・役所提出用の物理認証' },
  { label: 'DHL国際配送', sub: '→ ご自宅までお届け' },
];

const jaStats = [
  { num: '500件+', label: '実績' },
  { num: '4.8★', label: '評価' },
  { num: '24h', label: '返信' },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const { t, lang } = useLanguage();

  // ── Japanese hero ──────────────────────────────────────────────────────────
  if (lang !== 'en') {
    const primaryLabel = ctaVariant === 'A' ? t('hero.ctaA') : t('hero.ctaB');

    return (
      <header className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-secondary overflow-hidden border-b border-gray-100">
        {/* Decorative accents (JP red / PH blue) */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-red-500/[0.06] blur-3xl" />
          <div className="absolute -left-28 bottom-0 w-96 h-96 rounded-full bg-blue-500/[0.06] blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-5xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-10">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4" aria-label="サービスの特徴">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-secondary text-xs font-medium border border-gray-200 shadow-sm">
                🏢 日本法人
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-secondary text-xs font-medium border border-gray-200 shadow-sm">
                ✈️ 渡航不要
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-secondary text-xs font-medium border border-gray-200 shadow-sm">
                🛡️ キャンセル無料
              </span>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-4 tracking-wider border border-primary/30">
              {t('hero.badge')}
            </span>

            {/* H1 — service name is the dominant element */}
            <h1 className="font-bold leading-tight mb-3 text-secondary">
              <span className="block text-3xl md:text-4xl lg:text-5xl">{t('hero.h1line1')}</span>
              <span className="block text-sm md:text-base font-normal text-gray-500 leading-snug mt-2">{t('hero.h1line2')}</span>
            </h1>

            {/* Supporting tagline — secondary to H1 */}
            <p className="text-primary-dark font-bold text-lg md:text-xl leading-snug mb-4">
              {t('hero.h1line3')}
            </p>

            <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed max-w-xs md:max-w-lg">
              {t('hero.description')}
            </p>

            {/* CTA Buttons — primary emphasized, secondary actions side-by-side */}
            <div className="flex flex-col gap-2.5 w-full max-w-sm">
              {/* 無料相談する（主CTA） */}
              <a
                href="#contact"
                onClick={() => trackEvent('cta_click', { location: 'hero', type: 'contact', variant: ctaVariant })}
                className="bg-red-600 text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg shadow-red-600/25 hover:bg-red-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-red-600/30"
                aria-label="無料相談フォームへ移動"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                無料相談する
              </a>

              {/* 副CTA：LINE ＋ 料金（2列） */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://lin.ee/wALag1U"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_click', { location: 'hero', type: 'line_urgent', variant: ctaVariant })}
                  className="bg-[#06C755] text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-[#06C755]/25 hover:bg-[#05b04a] hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-[#06C755]/40"
                  aria-label="LINEで問い合わせ（新しいタブで開く）"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE相談
                </a>
                <a
                  href="/ja/ryokin/"
                  onClick={() => trackEvent('cta_click', { location: 'hero', type: 'pricing', variant: ctaVariant })}
                  className="font-bold py-3 px-4 rounded-xl bg-white text-secondary border border-gray-300 hover:bg-gray-50 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-secondary/20"
                  aria-label={t('hero.pricingAriaLabel')}
                >
                  <Tag className="w-4 h-4 flex-shrink-0" />
                  料金を見る
                </a>
              </div>
            </div>

            {/* Trust: Rating badge */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 mt-3" aria-label="平均評価 4.8 / 5.0">
              <span className="text-yellow-500 text-base leading-none" aria-hidden="true">★★★★★</span>
              <span className="text-gray-600 text-xs font-medium">実績500件以上・公開レビュー47件（★4.8）</span>
            </div>

            {/* Urgency message */}
            <p className="text-red-600 text-xs font-semibold mt-1 tracking-wide">
              ただいまお問い合わせ受付中 · 24時間以内に返信
            </p>
          </div>

          {/* ── Right: Trust card + featured pack card ── */}
          <div className="w-full md:w-80 flex-shrink-0 space-y-4">
            {/* Featured pack highlight card */}
            <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/[0.07] to-white shadow-lg p-5 text-center">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-bold mb-2 tracking-wide">人気No.1パック</span>
              <p className="text-sm font-bold text-secondary">国際結婚準備パック</p>
              <p className="mt-1">
                <span className="text-3xl font-extrabold text-primary-dark">¥94,000</span>
                <span className="text-sm font-bold text-gray-500">〜</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">税込・DHL送料込み（CENOMAR＋出生証明書＋アポスティーユ）</p>
              <a
                href="/ja/ryokin/"
                onClick={() => trackEvent('cta_click', { location: 'hero', type: 'pack_card', variant: ctaVariant })}
                className="mt-3 inline-flex items-center justify-center gap-1 w-full bg-secondary text-white text-sm font-bold py-2.5 rounded-xl hover:bg-secondary-light transition-colors"
              >
                料金の詳細を見る
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust card (desktop only) */}
            <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="bg-secondary px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">PH</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">フィリピン書類取得代行</p>
                    <p className="text-white/50 text-xs">セブ営業所 · DHL国際配送</p>
                  </div>
                </div>
              </div>

              {/* Document list */}
              <div className="px-5 py-4 space-y-3">
                {jaDocItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</p>
                      <p className="text-xs text-gray-600">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authority check badge */}
              <div className="mx-5 mb-4 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-blue-800">提出先に合わせた書類形式</p>
                  <p className="text-xs text-blue-600">役所 · 入管 · 総領事館 · 法務局</p>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] text-blue-600 font-bold text-center leading-tight">受理<br/>確認済</span>
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
                {jaStats.map((s) => (
                  <div key={s.label} className="py-3 text-center">
                    <p className="text-sm font-bold text-secondary">{s.num}</p>
                    <p className="text-xs text-gray-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </header>
    );
  }

  // ── English hero ───────────────────────────────────────────────────────────
  return (
    <header className="relative bg-secondary text-white overflow-hidden min-h-[520px] md:min-h-[600px]">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-photo.webp" type="image/webp" />
          <img
            alt="Philippine document procurement — IGRS office operations"
            className="w-full h-full object-cover"
            style={{ objectPosition: '92% 50%' }}
            src="/hero-photo.png"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-5xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-12">

        {/* ── Left: Text ── */}
        <div className="flex-1 min-w-0">

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {enBadges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm"
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>

          {/* Eyebrow */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
            Philippine Document Service for International Couples
          </span>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5 drop-shadow-sm">
            Philippine Documents<br />
            <span className="text-primary">for Marriage, Visa & Your Next Country.</span>
          </h1>

          <p className="text-gray-200 mb-4 text-sm md:text-base leading-relaxed max-w-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Getting married to a Filipino, or moving to a new country together? We verify format requirements, procure physical PSA originals with DFA Apostille, and ship to your door worldwide via DHL — no trip to the Philippines needed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5 w-full max-w-sm mb-4">
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'hero_en', type: 'contact', variant: ctaVariant })}
              className="flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              Free Consultation
            </a>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl bg-secondary text-white shadow-lg hover:bg-secondary-light hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-secondary/40"
            >
              <Tag className="w-5 h-5 flex-shrink-0" />
              See Packages
            </a>
            <a
              href="https://wa.me/639452833727"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', { location: 'hero_en', type: 'whatsapp_urgent', variant: ctaVariant })}
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-green-500/40"
              aria-label="Urgent? Contact us on WhatsApp (opens in new tab)"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              Urgent? WhatsApp us — fast reply
            </a>
          </div>

          {/* Rating + urgency */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5" aria-label="Average rating 4.8 out of 5">
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-white/70 text-xs font-medium">4.8 / 5.0 (client reviews)</span>
            </div>
            <p className="text-primary text-xs font-semibold">
              Now accepting inquiries · Reply within 24 hours
            </p>
            <p className="text-white/60 text-xs">
              International Marriage Package from US$899 (Apostille + DHL incl.)
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              💳 Pay by credit card — Visa · Mastercard · Amex · Apple Pay
            </p>
          </div>
        </div>

        {/* ── Right: Document card visual ── */}
        <div className="hidden md:block w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="bg-secondary px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">PH</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Philippine Document Service</p>
                  <p className="text-white/50 text-xs">Cebu-based · DHL Worldwide</p>
                </div>
              </div>
            </div>

            {/* Document list */}
            <div className="px-5 py-4 space-y-3">
              {enDocItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</p>
                    <p className="text-xs text-gray-600">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Authority check badge */}
            <div className="mx-5 mb-4 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-blue-800">Authority-Accepted Format</p>
                <p className="text-xs text-blue-600">UAE · Korea · Europe · USA · more</p>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-blue-400 flex items-center justify-center">
                <span className="text-[8px] text-blue-600 font-bold text-center leading-tight">FORMAT<br/>VERIFIED</span>
              </div>
            </div>

            {/* Stats bar */}
            <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
              {[
                { num: '500+', label: 'Cases' },
                { num: '4.8★', label: 'Rating' },
                { num: '24h', label: 'Reply' },
              ].map((s) => (
                <div key={s.label} className="py-3 text-center">
                  <p className="text-sm font-bold text-secondary">{s.num}</p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
