import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const faqsData = {
  ja: [
    { q: '何を取ればよいか、自分でもまだ分かっていません', a: '大丈夫です。まずは用途を確認し、何が必要になりやすいかを整理します。国際結婚、配偶者ビザ準備、外免切替など、今の状況をお知らせいただければ、進め方からご案内します。' },
    { q: 'CENOMARだけあれば足りますか？', a: '提出先によって異なります。出生証明書や婚姻証明書、アポスティーユなどが必要になる場合もあります。まず用途と提出先をお知らせいただければ、必要になりやすい書類を整理してご案内します。' },
    { q: 'フィリピンで結婚するか、日本で結婚するか迷っています', a: 'どちらのルートにも違いがあります。現在地や状況に近い流れから整理してご案内します。まずは今の状況をお聞かせください。' },
    { q: '取得にはどのくらいかかりますか？', a: '目安は約4〜6週間です。書類の種類、予約状況、現地機関の処理状況により前後します。提出予定日がある場合は、できるだけ早めにご相談ください。' },
    { q: '日本から依頼できますか？フィリピンに行く必要はありますか？', a: '多くの案件は日本からご依頼いただけます。フィリピン現地への渡航なしで進められるケースも多いです。ただし、委任状へのご署名や、一部の手続きではご本人様対応が必要になる場合があります。' },
    { q: 'お支払い方法を教えてください', a: 'クレジットカード（Visa・Mastercard・Amex・Apple Pay・Google Pay）または銀行振込にてお承りしています。いずれも着手時に総額の50%をご入金いただき、書類写しのご確認後に残金50%をお支払いいただきます。' },
  ],
  en: [
    { q: 'Do you ship documents internationally?', a: 'Yes. We ship original documents and apostilled copies via DHL Express directly to your address worldwide — whether you\'re in the USA, Canada, Europe, Asia, or anywhere else. Shipping is coordinated after procurement is complete.' },
    { q: 'Which countries do you serve?', a: 'We serve clients worldwide — including the USA, Canada, Australia, UK, Europe, Asia, the Middle East, and all other Hague Convention countries. If your country requires DFA Apostille authentication, we handle it. Contact us to confirm for your specific country.' },
    { q: 'What documents are needed for a K-1 or CR-1 visa?', a: 'For USCIS and NVC: typically a PSA Birth Certificate, CENOMAR (if single), and NBI Clearance. A DFA Apostille is usually required for the US Embassy interview stage. We confirm exact requirements for your case.' },
    { q: 'How long does the whole process take?', a: 'Typically 4–6 weeks from order to delivery at your address. Timelines can vary by document type and agency processing speed. Contact us to discuss your specific timeline.' },
    { q: 'Can I cancel if my visa situation changes?', a: 'Cancellations before we begin are free. After we start, actual expenses and work already performed are non-refundable. We ship only after you confirm the copies and pay the remaining balance.' },
    { q: "I'm not sure which documents I need for my visa stage...", a: "No problem. Just tell us your visa type, destination country, and your current stage and we'll identify the exact documents required." },
    { q: 'What payment methods do you accept?', a: 'We accept credit card (Visa, Mastercard, Amex, Apple Pay, Google Pay) or bank transfer. Payment is in two stages: 50% upfront to start, and the remaining 50% after you confirm the document copies — before we ship.' },
  ],
};

const FAQ: React.FC = () => {
  const { lang, t } = useLanguage();
  const faqs = faqsData[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-1 block">FAQ</span>
          <h2 id="faq-heading" className="text-xl font-bold text-secondary">{t('faq.title')}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const panelId = `faq-panel-${lang}-${index}`;
            const summaryId = `faq-summary-${lang}-${index}`;
            return (
            <details key={index} className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary
                id={summaryId}
                aria-controls={panelId}
                className="flex justify-between items-center cursor-pointer list-none p-4 select-none"
              >
                <span className="font-bold text-sm text-gray-800 group-open:text-secondary transition-colors">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180" aria-hidden="true">
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:text-primary" />
                </span>
              </summary>
              <div
                id={panelId}
                role="region"
                aria-labelledby={summaryId}
                className="text-gray-600 text-sm px-4 pb-4 leading-relaxed border-t border-gray-50 pt-3"
              >
                {faq.a}
              </div>
            </details>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-secondary mb-2">{t('faq.ctaTitle')}</h3>
          <p className="text-sm text-gray-600 mb-6">{t('faq.ctaDesc')}</p>
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'faq', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label={t('faq.ctaAriaLabel')}
          >
            <span>{t('faq.ctaBtn')}</span>
          </a>
          <p className="text-xs text-gray-500 mt-3">{t('faq.ctaNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
