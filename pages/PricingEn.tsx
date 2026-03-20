import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';
import { useMeta } from '../lib/useMeta';

export default function PricingEn() {
  useMeta(
    'Pricing [March 2026] | CENOMAR, PSA & NBI Service',
    'How much does Philippine document retrieval cost? View 2026 pricing for CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille. All plans include DHL Express worldwide shipping. Free quote.',
  );
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
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Payment methods</p>
          <p className="text-sm text-gray-600">Japan: bank transfer. United States: credit card or PayPal.</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Cancellation & refund</p>
          <p className="text-sm text-gray-600">Free before we start. After we begin, actual expenses and work already performed are non-refundable. Final payment is due after document copies are confirmed and before shipping.</p>
        </div>
      </div>
      <Pricing />
    </PageLayout>
  );
}
