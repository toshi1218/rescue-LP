import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';
import { useMeta } from '../lib/useMeta';

const COUNTRY_LINKS = [
  { label: 'Canada', path: '/en/canada/' },
  { label: 'Australia', path: '/en/australia/' },
  { label: 'UK', path: '/en/uk/' },
  { label: 'United States', path: '/en/us-visa-documents/' },
  { label: 'New Zealand', path: '/en/new-zealand/' },
  { label: 'Germany', path: '/en/germany/' },
  { label: 'Netherlands', path: '/en/netherlands/' },
  { label: 'UAE', path: '/en/uae/' },
  { label: 'Singapore', path: '/en/singapore/' },
  { label: 'Hong Kong', path: '/en/hong-kong/' },
  { label: 'Qatar', path: '/en/qatar/' },
  { label: 'Italy', path: '/en/italy/' },
  { label: 'Norway', path: '/en/norway/' },
  { label: 'Sweden', path: '/en/sweden/' },
  { label: 'Switzerland', path: '/en/switzerland/' },
];

export default function GuidesEn() {
  useMeta(
    'Philippine Document Guides [2026] | FAQ & How-To',
    'Complete 2026 guide library for Philippine documents: What is CENOMAR? What is NBI Clearance? What is DFA Apostille? Answers for US visa, K-1, CR-1, and immigration applicants.',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Guides' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Philippine Document Services — Guide Index</h1>
      <p className="text-sm text-gray-600 mb-6">All-inclusive retrieval services for K-1, CR-1, spouse visa, and license conversion documents.</p>
      <GuideLinks />

      <section className="mt-10">
        <h2 className="text-lg font-bold text-secondary mb-3 border-b border-primary/20 pb-2">Document Requirements by Country</h2>
        <p className="text-sm text-gray-600 mb-4">Philippine document and authentication requirements vary by destination country. Select your country below.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {COUNTRY_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
