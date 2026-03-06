import React, { ReactNode } from 'react';

interface Item { icon: ReactNode; title: string; description: string; }
interface Props { heading: string; items: Item[]; }

export default function FeatureList({ heading, items }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{heading}</h2>
      <div className="grid gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
            <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <p className="font-bold text-sm text-secondary">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
