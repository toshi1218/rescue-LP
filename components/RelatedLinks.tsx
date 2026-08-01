import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type RelatedLink = { label: string; path: string };

export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  const { pathname } = useLocation();
  const heading = pathname.startsWith('/en/') ? 'Related Pages' : pathname.startsWith('/ko/') ? '관련 페이지' : '関連ページ';
  return (
    <nav className="mt-10 pt-8 border-t border-gray-100">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{heading}</p>
      <ul className="space-y-1">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 group transition-colors"
            >
              <span className="text-primary-dark font-bold text-sm flex-shrink-0">→</span>
              <span className="text-sm text-secondary font-medium group-hover:underline leading-snug">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
