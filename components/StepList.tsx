import React from 'react';

type StepItem = {
  title: string;
  description: string;
};

type StepListProps = {
  heading: string;
  steps: StepItem[];
  /** "visual" にするとアイコンボックス＋強調デザインになる */
  variant?: 'default' | 'visual';
};

export default function StepList({ heading, steps, variant = 'default' }: StepListProps) {
  if (variant === 'visual') {
    return (
      <section className="mb-12 relative overflow-hidden rounded-2xl bg-secondary px-6 py-8 md:px-8 md:py-10 shadow-card">
        {/* 背景装飾 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-[60px]" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-[50px]" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{heading}</h2>
          </div>
          <div className="relative">
            {/* コネクターライン */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
            <div className="space-y-4">
              {steps.map((step, index) => (
                <article key={step.title} className="group relative flex gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center shadow-md shadow-primary/30 z-10 relative transition-all duration-200 group-hover:scale-105">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-xl border border-white/10 p-5 transition-all duration-200 group-hover:bg-white/15 group-hover:border-primary/40">
                    <h3 className="text-sm font-bold text-white mb-1 leading-snug">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">{heading}</h2>
      </div>

      <div className="relative">
        {/* コネクターライン */}
        <div className="absolute left-[17px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <article key={step.title} className="group relative flex gap-5">
              {/* ステップ番号 */}
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center shadow-md ring-2 ring-white z-10 relative transition-all duration-200 group-hover:bg-primary group-hover:ring-primary/20">
                  {index + 1}
                </div>
              </div>

              {/* コンテンツ */}
              <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-card p-5 transition-all duration-200 group-hover:shadow-md group-hover:border-primary/20 group-hover:-translate-y-0.5">
                <h3 className="text-sm font-bold text-secondary mb-1 leading-snug">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
