import React from 'react';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeatureListProps = {
  heading: string;
  items: FeatureItem[];
};

export default function FeatureList({ heading, items }: FeatureListProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-secondary mb-5">{heading}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
