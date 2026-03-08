import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Pricing' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Pricing</h1>
      <p className="text-sm text-gray-600 mb-3">All-inclusive pricing: PSA retrieval, DFA Apostille, and DHL shipping — quoted together with no hidden fees.</p>
      <div className="bg-secondary/[0.03] border border-secondary/10 rounded-xl p-4 mb-6">
        <p className="text-sm text-secondary font-semibold mb-1">We are not the cheapest option.</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          Government fees only cover the document itself. Our service includes request handling, local coordination, follow-up, document checking, and international shipment support. We are built for clients who want Philippine documents handled correctly, with less delay, less confusion, and less back-and-forth.
        </p>
      </div>
      <Pricing />
    </PageLayout>
  );
}
