import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type RelatedArticle = {
  href: string;
  title: string;
  description: string;
};

type RelatedArticlesProps = {
  heading?: string;
  items: RelatedArticle[];
};

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  heading = 'Related Guides',
  items = [],
}) => {
  return (
    <section className="mt-10 pt-8 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <span className="h-4 w-1 rounded-full bg-primary inline-block" />
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{heading}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex flex-col gap-1.5 bg-white rounded-xl border border-gray-200 px-5 py-4 hover:border-primary/50 hover:shadow-md transition-all group"
          >
            <span className="text-base font-bold text-gray-800 group-hover:text-secondary transition-colors flex items-center gap-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item.title}
            </span>
            <p className="text-sm text-gray-500 leading-relaxed pl-5">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
