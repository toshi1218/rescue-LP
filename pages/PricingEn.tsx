import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import { useMeta } from '../lib/useMeta';

export default function PricingEn() {
  useMeta(
    'Pricing [2026] | Philippine Document Service — No Hidden Fees',
    'View 2026 pricing for CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille retrieval. All plans include DHL Express worldwide shipping. Free quote.',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Pricing' }]}>
      <HeroBanner
        title="Pricing"
        subtitle="All-inclusive pricing: PSA retrieval, DFA Apostille, and DHL shipping — quoted together with no hidden fees."
        badges={['No hidden fees', 'Free quote', 'Free cancellation before start']}
        ctaText="Get a Free Quote"
        ctaHref="#contact"
        ctaService="Pricing inquiry"
        lastUpdated="March 1, 2026"
      />

      <CtaBox
        title="Not sure which plan fits your case?"
        description="Tell us your purpose (marriage, visa, naturalization, etc.) and we will confirm exactly which documents you need and quote you a fixed price."
        buttonText="Get a Free Quote"
        href="#contact"
        variant="primary"
        trustNote="No commitment required — free cancellation at quote stage"
      />

      {/* Pricing cards */}
      <Pricing />

      {/* 2-stage payment flow */}
      <StepList
        heading="How Payment Works"
        steps={[
          {
            title: 'Free quote',
            description: 'We confirm which documents you need, the timeline, and the all-inclusive price. No payment required at this stage.',
          },
          {
            title: 'Deposit payment (~50%)',
            description: 'We send a Stripe invoice link by email. Pay by credit card (Visa, Mastercard, Amex, Apple Pay, Google Pay). We start after payment is confirmed.',
          },
          {
            title: 'Document copy confirmation',
            description: 'Once documents are retrieved, we send you photos or PDFs of the originals for your review before shipping.',
          },
          {
            title: 'Balance payment & shipping',
            description: 'After you confirm the copies, we invoice the remaining 50%. Documents ship via DHL Express to your address after balance is received.',
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Payment Methods</p>
          <p className="text-sm text-gray-700 font-semibold mb-1">Credit card via Stripe</p>
          <p className="text-sm text-gray-500">Visa · Mastercard · American Express · Apple Pay · Google Pay</p>
          <p className="text-xs text-gray-400 mt-2">Two-stage invoicing: deposit on start, balance after document confirmation.</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Cancellation & Refund</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-600">· Free cancellation before we start</li>
            <li className="text-sm text-gray-600">· After start: actual costs + work performed are non-refundable</li>
            <li className="text-sm text-gray-600">· Balance due only after you confirm document copies</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
