import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const Process: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "お問い合わせ",
      desc: "メールにて、必要な書類と現状をお知らせください。"
    },
    {
      num: 2,
      title: "お見積もり・ご提案",
      desc: "内容を確認し、詳細な費用と納期をご案内いたします。"
    },
    {
      num: 3,
      title: "着手金のお支払い",
      desc: "費用の50%を着手金としてお支払いいただき、手続きを開始します。"
    },
    {
      num: 4,
      title: "成功報酬のお支払い・発送",
      desc: "取得した書類の写しをご確認いただいた後、成功報酬（残金）をお支払いいただき、原本を発送します。"
    },
    {
      num: 5,
      title: "書類お届け",
      desc: "ご指定の住所へ追跡可能な方法で書類をお届けします。到着後、内容をご確認ください。"
    }
  ];

  return (
    <section className="py-12 bg-secondary text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-primary-hover font-bold text-xs font-display tracking-widest uppercase mb-1 block">Process</span>
          <h2 className="text-xl font-bold">ご依頼の流れ</h2>
        </div>

        <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/20">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              <div className="absolute -left-[1.65rem] top-1 w-6 h-6 rounded-full bg-primary border-4 border-secondary flex items-center justify-center z-10">
                <span className="text-[10px] font-bold text-secondary">{step.num}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'process', type: 'contact' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-hover hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label="ステップ1から始める：お問い合わせ"
          >
            <span>ステップ1から始める：お問い合わせ</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-white/70 mt-3">まずは無料でご相談ください。匿名OK</p>
        </div>
      </div>
    </section>
  );
};

export default Process;