import React from 'react';
import PageLayout from '../components/PageLayout';

export default function PrivacyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/ja/' }, { label: 'Privacy' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Privacy Policy JA</h1>
      <p className="text-sm text-gray-700">Personal data is used only for consultation and service delivery.</p>
    </PageLayout>
  );
}

