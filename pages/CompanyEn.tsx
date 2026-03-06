import React from 'react';
import PageLayout from '../components/PageLayout';

export default function CompanyEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Company' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Company</h1>
      <p className="text-sm text-gray-700">IGRS Inc. supports Philippine document retrieval.</p>
    </PageLayout>
  );
}

