import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const faqsData = {
  ja: [
    { q: '支払い方法は？', a: '日本の銀行口座へのお振込みが可能です。' },
    { q: '取得までどのくらいかかりますか？', a: '約1ヶ月程度が目安です。お急ぎの場合はご相談ください。' },
    { q: 'キャンセルはできますか？', a: '着手前のキャンセルは無料です。申請開始後は実費と手数料を差し引いた金額をご返金いたします。' },
    { q: '記載のない書類も対応できますか？', a: 'はい、お任せください。ウェブサイトに掲載されていない書類でも、現地で取得可能なものであれば対応いたします。まずはお気軽にご相談ください。' },
    { q: 'どの書類が必要かわからないのですが...', a: 'ご安心ください。目的（結婚、ビザ申請など）をお伝えいただければ、こちらで必要な書類を確認してご案内いたします。詳細が未定でも、まずは無料相談にてお問い合わせください。' },
  ],
  en: [
    { q: 'What payment methods are accepted?', a: 'Payment can be made via bank transfer to a Japanese bank account.' },
    { q: 'How long does procurement take?', a: 'Typically about 1 month. Please contact us if you have an urgent timeline.' },
    { q: 'Can I cancel?', a: 'Cancellations before we begin are free. After we start, we will refund the amount minus actual expenses and fees incurred.' },
    { q: 'Can you handle documents not listed on the site?', a: 'Yes, absolutely. We can handle most documents obtainable locally in the Philippines, even if not listed on our site. Please feel free to reach out.' },
    { q: "I'm not sure which documents I need...", a: "No problem. Just tell us your goal (e.g., international marriage, visa application) and we'll identify exactly which documents you need. You're welcome to inquire even if details aren't finalized." },
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
