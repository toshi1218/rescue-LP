import React from 'react';
import { ArrowRight, Mail, FileText, CreditCard, CheckCircle, PackageCheck } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const stepIcons = [Mail, FileText, CreditCard, CheckCircle, PackageCheck];

const stepsData = {
  ja: [
    { num: 1, title: 'お問い合わせ', desc: 'メールにて、必要な書類と現状をお知らせください。' },
    { num: 2, title: 'お見積もり・ご提案', desc: '内容を確認し、詳細な費用と納期をご案内いたします。' },
    { num: 3, title: '着手金のお支払い', desc: '費用の50%を着手金としてお支払いいただき、手続きを開始します。' },
    { num: 4, title: 'DHL配送準備完了・残金お支払い', desc: '書類取得が完了し、DHLへの配送準備が整った段階で書類の写しをご確認いただき、残金（成功報酬）をお支払いいただきます。入金確認後、発送します。' },
    { num: 5, title: '書類お届け', desc: 'ご指定の住所へ追跡可能な方法で書類をお届けします。到着後、内容をご確認ください。' },
  ],
  en: [
    { num: 1, title: 'Contact Us', desc: 'Tell us via email which documents you need and your current situation.' },
    { num: 2, title: 'Quote & Proposal', desc: "We'll review your request and provide a detailed cost and timeline." },
    { num: 3, title: 'Initial Payment', desc: 'Pay 50% of the fee as a retainer to begin the process.' },
    { num: 4, title: 'Final Payment & Dispatch', desc: 'After confirming document copies, pay the remaining balance and we dispatch the originals.' },
    { num: 5, title: 'Document Delivery', desc: 'Documents are delivered to your address via trackable shipping. Please verify contents upon arrival.' },
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
                  <p className="text-[10px] text-white/50 leading-relaxed">{step.desc}</p>
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
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">STEP {step.num}</span>
                    <h3 className="font-bold text-sm text-white">{step.title}</h3>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
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
