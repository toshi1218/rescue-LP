import React from 'react';
import { CheckCircle, Eye, MessageSquare, ShieldCheck, Send, BadgeCheck } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const officePhotos = [
  { src: '/dfa-galleria-cebu-03.webp', alt: 'DFA Consular Office Cebu — signage' },
  { src: '/dfa-galleria-cebu-06.webp', alt: 'Apostille Authentication Processing — DFA Cebu' },
  { src: '/dfa-galleria-cebu-09.webp', alt: 'Authentication window at DFA Galleria Cebu' },
];

const WhyUs: React.FC = () => {
  const { t, lang } = useLanguage();

  const reasons = [
    { icon: Eye, titleKey: 'whyus.1.title' as const, descKey: 'whyus.1.desc' as const },
    { icon: MessageSquare, titleKey: 'whyus.2.title' as const, descKey: 'whyus.2.desc' as const },
    { icon: ShieldCheck, titleKey: 'whyus.3.title' as const, descKey: 'whyus.3.desc' as const },
  ];

  const stats = [
    { labelKey: 'whyus.stat1.label' as const, valueKey: 'whyus.stat1.value' as const },
    { labelKey: 'whyus.stat2.label' as const, valueKey: 'whyus.stat2.value' as const },
    { labelKey: 'whyus.stat3.label' as const, valueKey: 'whyus.stat3.value' as const },
  ];

  // ── JA: 2-column redesign (features + stats left, photos right) ──────────
  if (lang === 'ja') {
    const jaReasons = [
      { titleKey: 'whyus.1.title' as const, descKey: 'whyus.1.desc' as const },
      { titleKey: 'whyus.2.title' as const, descKey: 'whyus.2.desc' as const },
      { titleKey: 'whyus.3.title' as const, descKey: 'whyus.3.desc' as const },
      { titleKey: 'whyus.4.title' as const, descKey: 'whyus.4.desc' as const },
    ];

    const trustStats = [
      { label: '依頼方法', value: '日本語のみ OK' },
      { label: '着手キャンセル', value: '無料' },
      { label: '平均連絡速度', value: '24時間以内' },
      { label: '書類取得保証', value: 'あり' },
    ];

    return (
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fffbf0 0%, #fef9ec 50%, #fff8e6 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/5 rounded-full blur-[60px]"></div>
        </div>

        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Why Us</span>
            <h2 className="text-xl font-bold text-secondary">{t('whyus.title')}</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Feature list + trust stats */}
            <div className="flex-1 min-w-0">
              <ul className="space-y-4 mb-6">
                {jaReasons.map(({ titleKey, descKey }) => (
                  <li key={titleKey} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-secondary leading-snug">{t(titleKey)}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{t(descKey)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust stats box */}
              <div className="bg-secondary rounded-2xl p-5">
                <div className="grid grid-cols-2 gap-3">
                  {trustStats.map(({ label, value }) => (
                    <div key={label} className="bg-white/10 rounded-xl px-3 py-2.5">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-wide leading-none mb-1">{label}</p>
                      <p className="text-white font-bold text-sm leading-tight">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Photos + CTA */}
            <div className="md:w-80 flex-shrink-0">
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest font-bold text-center md:text-left">
                ※ セブ現地スタッフが各機関で直接手続きを行います
              </p>
              <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden mb-6">
                {officePhotos.map((img) => (
                  <div key={img.src} className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => trackEvent('cta_click', { location: 'why_us', type: 'contact' })}
                className="block text-center text-sm font-bold text-white bg-secondary py-3.5 px-6 rounded-xl shadow-lg hover:bg-secondary/90 hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-secondary/40"
                aria-label={t('whyus.ctaAriaLabel')}
              >
                {t('whyus.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── EN: original layout ──────────────────────────────────────────────────
  return (
    <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fffbf0 0%, #fef9ec 50%, #fff8e6 100%)'}}>
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/5 rounded-full blur-[60px]"></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Why Us</span>
          <h2 className="text-xl font-bold text-secondary">{t('whyus.title')}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
        </div>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {reasons.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div key={titleKey} className="flex gap-4 p-6 bg-white rounded-2xl shadow-soft border border-primary/10 md:flex-col md:items-center md:text-center md:h-full hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{background: i === 0 ? 'linear-gradient(135deg, #1a365d, #2c5282)' : i === 1 ? 'linear-gradient(135deg, #d69e2e, #b77f1d)' : 'linear-gradient(135deg, #2d6a4f, #40916c)'}}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1.5">{t(titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 統計バー */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {stats.map(({ labelKey, valueKey }, i) => {
            const gradients = [
              'from-secondary/5 to-secondary/10',
              'from-emerald-50 to-emerald-100/50',
              'from-primary/5 to-amber-50',
            ];
            const textColors = ['text-secondary', 'text-emerald-700', 'text-primary-dark'];
            const barColors  = ['bg-secondary', 'bg-emerald-500', 'bg-primary'];
            return (
              <div key={labelKey} className={`bg-gradient-to-br ${gradients[i]} rounded-2xl p-4 text-center relative overflow-hidden border border-white/80 shadow-card`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${barColors[i]}`} />
                <p className={`text-base font-extrabold ${textColors[i]} leading-tight mt-1`}>{t(valueKey)}</p>
                <p className="text-[11px] font-bold text-gray-600 mt-1 leading-snug">{t(labelKey)}</p>
              </div>
            );
          })}
        </div>

        {/* 返金保証バナー */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <BadgeCheck className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="font-bold text-emerald-800 text-sm mb-1">{t('whyus.guarantee.title')}</p>
            <p className="text-xs text-emerald-700 leading-relaxed">{t('whyus.guarantee.success')}</p>
            <p className="text-xs text-gray-500 leading-relaxed mt-1">{t('whyus.guarantee.cancel')}</p>
          </div>
        </div>

        {/* Office photo strip */}
        <div className="mt-8">
          <p className="text-xs text-gray-400 text-center mb-3 uppercase tracking-widest font-bold">
            Our Philippine office operations
          </p>
          <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
            {officePhotos.map((img) => (
              <div key={img.src} className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            ※ Our Cebu-based staff handles every step in person at PSA, DFA, and NBI.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'why_us', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-secondary/90 hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-secondary/40"
            aria-label={t('whyus.ctaAriaLabel')}
          >
            <Send className="w-5 h-5" />
            <span>{t('whyus.cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
