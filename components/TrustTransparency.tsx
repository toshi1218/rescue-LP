import React from 'react';
import { Eye, MessageSquare, ShieldCheck, Clock, FileCheck, AlertCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

/**
 * TrustTransparency — "We know what you're worried about" section.
 *
 * Core message: Clients can't articulate their fear, but we can.
 * The fear is "I don't know what's happening" — opacity, not slowness.
 * We solve it with: progress visibility, Japanese-only communication,
 * and a concrete promise of what happens at each stage.
 *
 * Used on: HomeJa, HomeEn, and individual service pages.
 */

const contentData = {
  ja: {
    badge: 'お客様の不安、全部わかっています',
    heading: '「払ったのに進まない」を減らします',
    subheading:
      'フィリピンの書類取得で不安になりやすいのは、依頼後の状況が見えにくいことです。\n当センターでは、現地での進行状況を節目ごとにご報告します。\n婚姻手続き、配偶者ビザ、外免切替など、大事な手続きを前に、状況が見えないまま放置しません。',
    fears: [
      {
        icon: AlertCircle,
        fear: '「お金を払ったのに、本当に動いてるの？」',
        answer:
          '着手後すぐに現地スタッフが動き始めます。申請受付の確認が取れた時点でご報告します。',
      },
      {
        icon: Clock,
        fear: '「1ヶ月待つのに、途中で何も連絡がない…」',
        answer:
          '申請・受理・発送の各ステップで進捗をご報告します。「待っているだけ」の状態にはしません。',
      },
      {
        icon: MessageSquare,
        fear: '「英語やフィリピン語が分からないと無理では？」',
        answer:
          '現地機関との確認や手続きは弊社が対応します。お客様とのやり取りは日本語で進めますので、英語でのご対応は不要です。',
      },
      {
        icon: FileCheck,
        fear: '「書類が揃わなかったり、不備で差し戻されたら？」',
        answer:
          '目的に応じて必要書類を整理し、不備や差し戻しのリスクをできる限り減らします。',
      },
      {
        icon: ShieldCheck,
        fear: '「実体のない会社だったら怖い。詐欺では？」',
        answer:
          '株式会社IGRS（日本法人・和歌山）が運営。登記情報・会社概要ページで確認いただけます。',
      },
      {
        icon: Eye,
        fear: '「国をまたぐから、何かあっても対処できない…」',
        answer:
          '着手前キャンセルは無料。書類の写しをご確認いただいた後に残金をお支払いいただく形ですので、リスクを抑えています。',
      },
    ],
    promise: {
      heading: '私たちの3つの約束',
      items: [
        { label: '進捗が見える', desc: '申請、受理、発送などの節目でご報告します。' },
        { label: '日本語で進めやすい', desc: '現地機関との確認や取得手続きは弊社が進めます。お客様には、必要書類のご用意や委任状へのご署名などをお願いする形です。' },
        { label: '必要書類を整理する', desc: '目的に応じて必要書類を整理し、不備や差し戻しのリスクをできる限り減らします。' },
      ],
    },
    cta: '不安なことを、まず相談してみる',
    ctaNote: '匿名でのご相談もOK。返信は24時間以内。',
  },
  en: {
    badge: 'We Know What You Are Worried About',
    heading: '"Is this really going to work?"\nWe can name your fear before you do.',
    subheading:
      "The anxiety around Philippine document retrieval isn't about speed.\nIt's about not knowing what's happening — opacity, not delay.",
    fears: [
      {
        icon: AlertCircle,
        fear: '"I paid — but is anyone actually working on this?"',
        answer:
          'Our Cebu team begins immediately after payment. We confirm receipt of your application and report back.',
      },
      {
        icon: Clock,
        fear: '"I have to wait a month with zero updates?"',
        answer:
          'We send progress updates at each stage: application submitted, received, Apostille done, dispatched. No silence.',
      },
      {
        icon: MessageSquare,
        fear: '"I can\'t speak Filipino or navigate Philippine agencies."',
        answer:
          'We handle all communication with PSA, NBI, DFA, and LTO on your behalf. You only need to communicate with us in English.',
      },
      {
        icon: FileCheck,
        fear: '"What if the documents are wrong and get rejected?"',
        answer:
          'We verify the full document checklist before retrieval starts. We confirm the exact format required by your immigration authority.',
      },
      {
        icon: ShieldCheck,
        fear: '"What if this is a scam? There\'s no way to verify you."',
        answer:
          'We are IGRS Inc., a registered Japanese corporation (Wakayama). Company registration details are available on our Company page.',
      },
      {
        icon: Eye,
        fear: '"If something goes wrong across borders, I have no recourse."',
        answer:
          'Cancellation before we start is free. Final payment is only due after you confirm document copies — success-fee model.',
      },
    ],
    promise: {
      heading: 'Our Three Commitments',
      items: [
        { label: 'Progress Visibility', desc: 'Updates at every stage: applied, received, Apostilled, shipped. No silence.' },
        { label: 'English-Only Communication', desc: 'We handle all Philippine agencies. You only speak to us in English.' },
        { label: 'Complete Before You Pay', desc: 'Final payment only after you confirm document copies. No risk.' },
      ],
    },
    cta: 'Ask Us Anything — Free Consultation',
    ctaNote: 'Anonymous inquiries welcome. Reply within 24 hours.',
  },
};

const TrustTransparency: React.FC = () => {
  const { lang } = useLanguage();
  const c = contentData[lang];

  return (
    <section className="py-16 bg-white relative overflow-hidden" aria-labelledby="trust-heading">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-96 h-96 bg-secondary/3 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">

        {/* ヘッダー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest mb-3 bg-primary/8 px-3 py-1 rounded-full">
            {c.badge}
          </span>
          <h2 id="trust-heading" className="text-xl md:text-2xl font-bold text-secondary leading-snug whitespace-pre-line mb-3">
            {c.heading}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {c.subheading}
          </p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* 不安カード 2列グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {c.fears.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.fear}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                {/* 不安の声 */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-red-400" />
                  </span>
                  <p className="text-sm font-bold text-gray-700 leading-snug">{item.fear}</p>
                </div>
                {/* 回答 */}
                <div className="flex items-start gap-2 pl-11">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <ShieldCheck className="w-2.5 h-2.5 text-green-600" />
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3つの約束バー */}
        <div className="bg-secondary rounded-2xl p-8 mb-8">
          <h3 className="text-center text-sm font-bold text-primary uppercase tracking-widest mb-6">
            {c.promise.heading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.promise.items.map((item, i) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'trust_transparency', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
          >
            {c.cta}
          </a>
          <p className="text-xs text-gray-400 mt-3">{c.ctaNote}</p>
        </div>

      </div>
    </section>
  );
};

export default TrustTransparency;
