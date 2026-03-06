import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface BreadcrumbItem { label: string; href?: string; }

interface Props {
  children: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  jsonLd?: object;
}

export default function PageLayout({ children, breadcrumbs, jsonLd }: Props) {
  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <Navbar />
      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="mx-1">/</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-secondary">{item.label}</Link>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        {children}
      </main>
      <Footer />
    </div>
  );
}
