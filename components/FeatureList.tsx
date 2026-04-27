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
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">{heading}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="group relative bg-white rounded-xl border border-gray-100 shadow-card p-5 pl-6 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20"
          >
            {/* 左アクセントライン */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent rounded-l-xl transition-all duration-200 group-hover:w-1 group-hover:from-primary group-hover:via-primary/60" />

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-primary/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-secondary mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
