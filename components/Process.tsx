import React from 'react';
import { ArrowRight, Mail, FileText, CreditCard, CheckCircle, PackageCheck } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const stepIcons = [Mail, FileText, CreditCard, CheckCircle, PackageCheck];

const stepsData = {
  ja: [
    { num: 1, title: 'フォーム・LINEで相談', desc: '目的、提出先、希望期限を分かる範囲でお知らせください。匿名相談も可能です。' },
    { num: 2, title: '必要書類と見積もりを確認', desc: '提出先や状況に応じて、必要になりやすい書類と費用を整理します。' },
    { num: 3, title: '着手金50%をご入金', desc: 'クレジットカードまたは銀行振込にて、総額の50%をご入金いただきます。' },
    { num: 4, title: '書類取得・確認', desc: '申請を進め、電子版または紙原本の写しをご確認いただきます。' },
    { num: 5, title: '残金のお支払い・納品', desc: '写しの確認後に残金をお支払いいただき、電子版を納品。紙原本付きは追跡付きで発送します。' },
  ],
  en: [
    { num: 1, title: 'Contact Us', desc: 'Tell us via email which documents you need and your current situation.' },
    { num: 2, title: 'Quote & Proposal', desc: "We'll review your request and provide a detailed cost and timeline." },
    { num: 3, title: 'Initial Payment (50%)', desc: 'Pay 50% by credit card or bank transfer to begin. We start the retrieval process immediately.' },
    { num: 4, title: 'Document Review', desc: 'We retrieve your documents in the Philippines and send copies for your verification before shipping.' },
    { num: 5, title: 'Final Payment & Dispatch', desc: 'After confirming document copies, pay the remaining 50%. We then ship your originals via DHL to your address.' },
  ],
};

const Process: React.FC = () => {
  const { lang, t } = useLanguage();
  const steps = stepsData[lang];

  return (
    <section className="py-16 bg-secondary text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-15"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-15"></div>
        <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px'}}></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-2 block">Process</span>
          <h2 className="text-xl font-bold">{t('process.title')}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
        </div>

        {/* Desktop: horizontal flowchart */}
        <div className="hidden md:flex items-start gap-0 mb-4">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <React.Fragment key={step.num}>
                <div className="flex-1 flex flex-col items-center text-center px-2 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-3 relative group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-secondary text-[9px] font-bold flex items-center justify-center shadow-md">{step.num}</span>
                  </div>
                  <h3 className="text-xs font-bold mb-1.5 leading-snug text-white">{step.title}</h3>
                  <p className="text-base text-white/50 leading-relaxed">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 mt-6 text-primary/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8 space-y-5 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-primary/10">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={step.num} className="relative group">
                <div className="absolute -left-[2rem] top-1 w-7 h-7 rounded-xl bg-primary border-2 border-secondary flex items-center justify-center z-10 shadow-md">
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div className="bg-white/8 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/12 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">STEP {step.num}</span>
                    <h3 className="font-bold text-base text-white">{step.title}</h3>
                  </div>
                  <p className="text-base text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'process', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label={t('process.ctaAriaLabel')}
          >
            <span>{t('process.ctaBtn')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-white/50 mt-3">{t('process.ctaNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
