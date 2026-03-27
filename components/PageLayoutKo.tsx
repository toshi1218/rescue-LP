import React from 'react';
import { Link } from 'react-router-dom';
import NavbarKo from './NavbarKo';
import FooterKo from './FooterKo';
import BackToTop from './BackToTop';
import { useMeta } from '../lib/useMeta';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageLayoutKoProps = {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbs: Breadcrumb[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  children: React.ReactNode;
};

export default function PageLayoutKo({
  title,
  description,
  canonical,
  breadcrumbs,
  jsonLd,
  children,
}: PageLayoutKoProps) {
  useMeta(title, description, canonical);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://ph-document.com${item.href}` } : {}),
    })),
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <NavbarKo />
      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6" aria-label="경로">
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`}>
              {index > 0 && <span className="mx-1.5 text-gray-300">/</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-secondary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        {children}

        {/* Mid-page CTA */}
        <aside className="mt-12 bg-secondary/[0.04] border border-secondary/10 rounded-2xl p-6 text-center">
          <p className="font-bold text-secondary text-base mb-1">상담 및 견적은 무료입니다</p>
          <p className="text-xs text-gray-500 mb-4">
            필요한 서류가 아직 정확하지 않아도 괜찮습니다. 24시간 이내에 답변드립니다.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-primary-hover transition-all focus:outline-none focus:ring-4 focus:ring-primary/40 text-sm"
          >
            문의하기
          </a>
        </aside>
      </main>
      <BackToTop />
      <FooterKo />
    </div>
  );
}
