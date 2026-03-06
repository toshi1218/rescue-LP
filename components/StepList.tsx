import React from 'react';

interface Step { title: string; description: string; }
interface Props { heading: string; steps: Step[]; }

export default function StepList({ heading, steps }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{heading}</h2>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
            <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white font-bold text-sm rounded-full flex items-center justify-center">
              {i + 1}
            </div>
            <div>
              <p className="font-bold text-sm text-secondary">{step.title}</p>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
