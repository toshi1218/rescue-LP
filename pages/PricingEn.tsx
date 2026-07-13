import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';

export default function PricingEn() {
  useMeta(
    'Pricing [2026] | Philippine Document Service — No Hidden Fees',
    'View 2026 pricing for CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille retrieval. All plans include DHL Express worldwide shipping. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Pricing' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are there any hidden fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. All quoted prices are all-inclusive: PSA/CENOMAR/NBI retrieval, DFA Apostille (if required), and DHL Express shipping worldwide are quoted together as one fixed price before you pay anything.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does payment work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Two-stage payment via Stripe (credit card): approximately 50% deposit to start, then the remaining balance after we send you photos or PDFs of the retrieved documents for your confirmation. Documents ship only after the balance is paid.',
            },
          },
          {
            '@type': 'Question',
            name: 'What payment methods do you accept?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Credit card via Stripe: Visa, Mastercard, American Express, Apple Pay, and Google Pay.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I cancel and get a refund?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, free cancellation before we start work. Once processing begins, actual costs incurred and work performed are non-refundable. The balance payment is only requested after you confirm the document copies.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does delivery take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most documents (PSA, CENOMAR, NBI Clearance with DFA Apostille) take approximately 4–6 weeks from deposit payment to DHL delivery, depending on the document type and destination country.',
            },
          },
        ],
      }]}
    >
      <HeroBanner
        title="Pricing"
        subtitle="All-inclusive pricing: PSA retrieval, DFA Apostille, and DHL shipping — quoted together with no hidden fees."
        badges={['No hidden fees', 'Free quote', 'Free cancellation before start']}
        ctaText="Get a Free Quote"
        ctaHref="#contact"
        ctaService="Pricing inquiry"
        lastUpdated="April 1, 2026"
      />

      <CtaBox
        title="Not sure which plan fits your case?"
        description="Tell us your purpose (marriage, visa, naturalization, etc.) and we will confirm exactly which documents you need and quote you a fixed price."
        buttonText="Get a Free Quote"
        href="#contact"
        variant="primary"
        trustNote="No commitment required — free cancellation at quote stage"
      />

      {/* Why we're not the cheapest option */}
      <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 mb-2 max-w-2xl mx-auto">
        <p className="text-sm font-bold text-gray-800 mb-3">Why we're not the cheapest option</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Since March 16, 2026, the PSA issues CENOMAR, Birth Certificate, and Marriage Certificate exclusively as digital PSA eCertificates with a digital DFA e-Apostille. Some competitors deliver only this digital format, which lets them charge less.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          However, <strong>US NVC, US Embassy Manila, UAE, and most Japanese municipal/immigration authorities still require a physical paper original with a physical DFA Apostille</strong> — printing an e-Apostille does not satisfy this requirement.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          We continue to arrange the <strong>physical paper Apostille</strong> in person at DFA. That requires a staff appointment and in-person processing with limited slots, which is why our price cannot go as low as a purely digital service — in exchange, your documents are far less likely to be rejected at your destination.
        </p>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs font-bold text-blue-700 mb-1">Confirm with your destination authority first</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Ask "Do you accept a digital e-Apostille, or do you require a physical paper original?" before choosing a provider. If digital is accepted, our paper-original service may cost more than necessary for your case — contact us and we'll advise honestly.
          </p>
        </div>
      </div>

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

      <FaqSection
        items={[
          { q: 'Are there any hidden fees?', a: 'No. All quoted prices are all-inclusive: PSA/CENOMAR/NBI retrieval, DFA Apostille (if required), and DHL Express shipping worldwide are quoted together as one fixed price before you pay anything.' },
          { q: 'How does payment work?', a: 'Two-stage payment via Stripe (credit card): approximately 50% deposit to start, then the remaining balance after we send you photos or PDFs of the retrieved documents for your confirmation. Documents ship only after the balance is paid.' },
          { q: 'What payment methods do you accept?', a: 'Credit card via Stripe: Visa, Mastercard, American Express, Apple Pay, and Google Pay.' },
          { q: 'Can I cancel and get a refund?', a: 'Yes, free cancellation before we start work. Once processing begins, actual costs incurred and work performed are non-refundable. The balance payment is only requested after you confirm the document copies.' },
          { q: 'How long does delivery take?', a: 'Most documents (PSA, CENOMAR, NBI Clearance with DFA Apostille) take approximately 4–6 weeks from deposit payment to DHL delivery, depending on the document type and destination country.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Get a Free Quote"
      />
    </PageLayout>
  );
}
