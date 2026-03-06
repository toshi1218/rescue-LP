import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Pricing' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Pricing</h1>
      <Pricing />
    </PageLayout>
  );
}

