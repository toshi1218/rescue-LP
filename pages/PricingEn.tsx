import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Pricing' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Pricing</h1>
      <p className="text-sm text-gray-600 mb-6">All-inclusive pricing: PSA retrieval, DFA Apostille, and DHL shipping — quoted together with no hidden fees.</p>
      <Pricing />
    </PageLayout>
  );
}
