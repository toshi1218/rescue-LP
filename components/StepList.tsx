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
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-secondary mb-5">{heading}</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <article key={step.title} className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-secondary mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
