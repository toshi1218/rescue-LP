import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const BASE_URL = 'https://ph-document.com';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageLayoutProps = {
  breadcrumbs: Breadcrumb[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Page-specific meta description. Falls back to a sensible per-language default. */
  description?: string;
  children: React.ReactNode;
};

const JA_SITE_SUFFIX = '｜フィリピン書類取得代行センター';
const EN_SITE_SUFFIX = ' | Philippine Document Service';

const JA_DEFAULT_DESC =
  'フィリピン書類の取得を日本語だけで安心おまかせ。CENOMAR・PSA出生証明書・DFAアポスティーユを現地スタッフが完全代行。無料相談受付中。';
const EN_DEFAULT_DESC =
  'We retrieve PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille from the Philippines. Shipped worldwide via DHL for immigration and visa applications. Free consultation.';

export default function PageLayout({ breadcrumbs, jsonLd, description, children }: PageLayoutProps) {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  // Derive unique page <title> from the last breadcrumb label + site name
  const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
  const pageTitle = `${lastCrumb.label}${isJa ? JA_SITE_SUFFIX : EN_SITE_SUFFIX}`;
  const metaDesc = description ?? (isJa ? JA_DEFAULT_DESC : EN_DEFAULT_DESC);

  // Update <title>, meta description, canonical, OG tags, and hreflang for this page
  useMeta(pageTitle, metaDesc);

  // BreadcrumbList JSON-LD を自動生成
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      {/* BreadcrumbList 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ページ固有の構造化データ */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      {/* ページ上部のゴールドアクセントバー */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <Navbar />
      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
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

        {/* Mid-page CTA (#19) */}
        <aside className="mt-12 bg-secondary/[0.04] border border-secondary/10 rounded-2xl p-6 text-center">
          <p className="font-bold text-secondary text-base mb-1">
            {isJa ? 'ご相談・お見積もりは無料です' : 'Free consultation & quote'}
          </p>
          <p className="text-xs text-gray-500 mb-4">
            {isJa
              ? '必要書類が分からない段階でも大丈夫。24時間以内に返信します。'
              : "Don't know which documents you need? That's fine — we'll figure it out. Reply within 24 hours."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-primary-hover transition-all focus:outline-none focus:ring-4 focus:ring-primary/40 text-sm"
          >
            {isJa ? '自分のケースを相談する' : 'Get a free quote'}
          </a>
        </aside>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
