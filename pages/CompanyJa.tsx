import React from 'react';
import PageLayout from '../components/PageLayout';

export default function CompanyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/ja/' }, { label: 'Company' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Company JA</h1>
      <p className="text-sm text-gray-700">IGRS Inc. supports Philippine document retrieval.</p>
    </PageLayout>
  );
}

