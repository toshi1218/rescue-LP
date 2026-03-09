import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const faqsData = {
  ja: [
    { q: '費用はいくらかかりますか？', a: 'PSA書類関連は50,000円から、LTO書類関連は100,000円からが目安です。単独取得か、認証や追加書類を含むかで金額が変わるため、無料相談時に個別にご案内します。' },
    { q: '取得にはどのくらいかかりますか？', a: '目安は約1か月から6週間です。書類の種類、予約状況、現地機関の処理状況により前後します。提出予定日がある場合は、できるだけ早めにご相談ください。' },
    { q: '日本から依頼できますか？フィリピンに行く必要はありますか？', a: '多くの案件は日本からご依頼いただけます。フィリピン現地への渡航なしで進められるケースも多いです。ただし、委任状へのご署名や、一部の手続きではご本人様対応が必要になる場合があります。' },
    { q: '初めてNBI無犯罪証明書を取得するのですが、依頼できますか？', a: '初回取得は、ご本人様による指紋対応が必要になることがあるため、弊社だけで完結する形ではお受けしにくい案件です。進め方のご案内は可能ですので、まずは状況をご相談ください。' },
    { q: 'どの書類が必要か分からないのですが……', a: 'ご安心ください。国際結婚、配偶者ビザ、外免切替など、目的をお伝えいただければ、必要になりやすい書類を整理してご案内します。' },
  ],
  en: [
    { q: 'Do you ship documents internationally?', a: 'Yes. We ship original documents and apostilled copies via DHL Express directly to your address worldwide — USA, Canada, Australia, UK, and other countries. Shipping is coordinated after procurement is complete.' },
    { q: 'Which countries do you serve?', a: 'We serve clients in the USA, Canada, Australia, UK, Japan, South Korea, and other Hague Convention countries. If your country requires DFA Apostille authentication, we handle it. Contact us to confirm for your specific country.' },
    { q: 'What documents are needed for a K-1 or CR-1 visa?', a: 'For USCIS and NVC: typically a PSA Birth Certificate, CENOMAR (if single), and NBI Clearance. A DFA Apostille is usually required for the US Embassy interview stage. We confirm exact requirements for your case.' },
    { q: 'How long does the whole process take?', a: 'Typically about 1 month from order to delivery at your address. Timelines can vary by document type and agency processing speed. Contact us to discuss your specific timeline.' },
    { q: 'Can I cancel if my visa situation changes?', a: 'Cancellations before we begin are free. After we start, we refund the amount minus actual expenses and fees already incurred.' },
    { q: "I'm not sure which documents I need for my visa stage...", a: "No problem. Just tell us your visa type, destination country, and your current stage and we'll identify the exact documents required." },
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
    <section className="py-12 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">FAQ</span>
          <h2 className="text-xl font-bold text-secondary">{t('faq.title')}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 select-none">
                <span className="font-bold text-sm text-gray-800 group-open:text-secondary transition-colors">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:text-primary" />
                </span>
              </summary>
              <div className="text-gray-600 text-sm px-4 pb-4 leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-secondary mb-2">{t('faq.ctaTitle')}</h3>
          <p className="text-sm text-gray-600 mb-6">{t('faq.ctaDesc')}</p>
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'faq', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
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
