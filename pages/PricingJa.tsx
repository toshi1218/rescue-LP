import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/ja/' }, { label: 'Pricing' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Pricing JA</h1>
      <Pricing />
    </PageLayout>
  );
}

