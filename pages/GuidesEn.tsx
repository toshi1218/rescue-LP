import React from 'react';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';

export default function GuidesEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Guides' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Philippine Document Services — Guide Index</h1>
      <p className="text-sm text-gray-600 mb-6">All-inclusive retrieval services for K-1, CR-1, spouse visa, and license conversion documents.</p>
      <GuideLinks />
    </PageLayout>
  );
}
