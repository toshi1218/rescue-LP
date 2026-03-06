import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageLayoutProps = {
  breadcrumbs: Breadcrumb[];
  jsonLd?: Record<string, unknown>;
  children: React.ReactNode;
};

export default function PageLayout({ breadcrumbs, jsonLd, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {/* ページ上部のゴールドアクセントバー */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <Navbar />
      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
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
      </main>
      <Footer />
    </div>
  );
}
