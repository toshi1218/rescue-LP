import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import GuaranteeBlock from '../components/GuaranteeBlock';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function PricingEn() {
  useMeta(
    `Pricing [${SEO_YEAR_MONTH_EN}] | CENOMAR, PSA & NBI Service`,
    `View ${SEO_YEAR} pricing for CENOMAR, PSA Birth Certificate, NBI Clearance & DFA Apostille. All plans include DHL Express worldwide shipping. Free quote.`,
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

      {/* Pricing cards */}
      <Pricing />

      {/* Peace-of-mind re-retrieval support */}
      <GuaranteeBlock
        badge="Peace-of-mind support"
        title="If it isn't accepted, we redo the retrieval at no service charge"
        lead="If your document is not accepted and has to be re-obtained, we do not charge our service fee again. You cover only the actual costs — the government fee and any reshipping of physical documents — and we retrieve the document in the correct form for you."
        items={[
          {
            label: 'No repeat service fee',
            detail: "We don't charge our handling fee again for the re-retrieval. You pay only actual costs, such as the government fee and reshipping.",
          },
          {
            label: 'Format switch covered',
            detail: 'If a digital submission is bounced and a physical original is required, we switch to retrieving the paper document (physical document cost and shipping apply).',
          },
          {
            label: 'Reasonable limit',
            detail: 'This no-charge redo applies once per case as a guideline.',
          },
        ]}
        note="※ This support does not guarantee that the receiving authority (e.g. US NVC, an immigration office, a city hall, or an embassy) will accept the document. Please confirm the required format (digital or paper) with the receiving authority before applying. Re-retrieval caused by a change on your side, or by incorrect information you provided, is not covered."
      />

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
