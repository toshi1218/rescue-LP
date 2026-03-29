import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

/**
 * DiyRisks — "What can go wrong if you handle it yourself" section.
 *
 * Core message: Loss-aversion closer placed directly after Process.
 * Shows 5 concrete failure patterns (document confusion, no copies,
 * no roadmap, rejections, unverified providers) to push undecided
 * visitors toward the CTA.
 *
 * Used on: HomeEn, HomeJa
 */

const contentData = {
  en: {
    badge: 'Before You DIY',
    heading: 'What Can Go Wrong\nIf You Handle It Yourself',
    risks: [
      {
        title: 'You may not know exactly which documents you need',
        body: 'The documents required for a K-1, CR-1, spouse visa, or naturalization case vary by situation. Relying on online information alone often leads to missing or incorrect documents — and you only find out after submission.',
      },
      {
        title: 'You may not order enough copies for every stage',
        body: "The same document is often required at multiple steps — petition, NVC, embassy interview. Without knowing the full count upfront, you may need to re-order the same document mid-process, adding weeks to your timeline.",
      },
      {
        title: "You don't see the full roadmap",
        body: 'Filing a petition → NVC processing → embassy interview — the same document may be required at multiple stages. Without knowing the full picture upfront, your case can stall halfway through.',
      },
      {
        title: 'Paper Apostille is required by some destinations — but not others',
        body: "Whether a paper-based DFA Apostille is required depends on the specific consulate or office you're submitting to. Documents obtained without it may be unusable, requiring the entire retrieval to be repeated.",
      },
      {
        title: 'You risk dealing with unverified providers',
        body: 'Many individuals on social media offer Philippine document services at low prices. After payment, some stop responding entirely. Working with an unregistered provider means no accountability and no recourse if something goes wrong.',
      },
    ],
    closing:
      'Our goal is to reduce the chance of your Japan-side application stalling due to missing or incorrect Philippine documents. We handle identification, retrieval, copy planning, and paper Apostille coordination — with a Cebu-based team and a verifiable company track record.',
    cta: 'Free Consultation',
  },
  ja: {
    badge: '自分でやる前に',
    heading: '自分で進めた場合に\n起こりうること',
    risks: [
      {
        title: 'どの書類が必要か、正確にわからない',
        body: '婚姻届・配偶者ビザ・帰化申請で必要な書類は案件ごとに異なります。ネットの情報だけでは判断が難しく、不足や間違いに気づくのは提出後になることが多いです。',
      },
      {
        title: '必要な部数や使用タイミングを把握せずに進めてしまう',
        body: '同じ書類が複数の手続きで必要になることがあります。最初に必要部数を把握していないと、途中で同じ書類をもう一度取り直す羽目になります。',
      },
      {
        title: '何枚必要か、どの手続きで使うかの全体像が見えない',
        body: '婚姻届 → 配偶者ビザ → 在留カードの流れで、同じ書類を複数回使う場面があります。最初に必要部数を把握しておかないと、途中で手続きが止まります。',
      },
      {
        title: '紙のアポスティーユが必要かどうか、提出先次第で変わる',
        body: '総領事館・市役所・入管など、提出先によって紙のアポスティーユが必要かどうかが異なります。必要と知らずに取得した書類が使えず、取り直しになるケースがあります。',
      },
      {
        title: '身元不明の業者に依頼してしまうリスク',
        body: 'SNS等で低価格の書類取得サービスを個人が提供していることがありますが、入金後に連絡が取れなくなるケースが報告されています。登録のない業者に依頼すると、問題が起きた際に対応を求める手段がありません。',
      },
    ],
    closing:
      '日本側手続きで止まりにくい形に整えることを目的に、必要書類の整理・取得・アポスティーユ対応をまとめて進めます。IGRSは日本法人として登記された会社です。',
    cta: '無料相談する',
  },
};

const DiyRisks: React.FC = () => {
  const { lang } = useLanguage();
  const c = contentData[lang];

  return (
    <section
      className="py-16 bg-amber-50/40 border-y border-amber-100"
      aria-labelledby="diy-risks-heading"
    >
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest mb-3 bg-amber-100 px-3 py-1 rounded-full">
            <AlertTriangle className="w-3 h-3" />
            {c.badge}
          </span>
          <h2
            id="diy-risks-heading"
            className="text-xl md:text-2xl font-bold text-secondary leading-snug whitespace-pre-line"
          >
            {c.heading}
          </h2>
          <div className="h-1 w-12 bg-amber-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Risk cards — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {c.risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white border border-amber-100 rounded-2xl p-5 hover:border-amber-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                </span>
                <p className="text-sm font-bold text-gray-800 leading-snug">{risk.title}</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-10">{risk.body}</p>
            </div>
          ))}
        </div>

        {/* Closing bar + CTA */}
        <div className="bg-secondary rounded-2xl px-7 py-8 text-center">
          <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-xl mx-auto">
            {c.closing}
          </p>
          {lang === 'en' && (
            <p className="text-amber-300 text-xs font-semibold mb-4">Don't wait until your deadline is too close — start your consultation today.</p>
          )}
          <a
            href="#contact"
            onClick={() =>
              trackEvent('cta_click', { location: 'diy_risks', type: 'contact' })
            }
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default DiyRisks;
