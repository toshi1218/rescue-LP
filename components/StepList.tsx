import React from 'react';

type StepItem = {
  title: string;
  description: string;
};

type StepListProps = {
  heading: string;
  steps: StepItem[];
};

export default function StepList({ heading, steps }: StepListProps) {
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
