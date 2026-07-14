import React from 'react';
import { Users, Scale, Building2, Archive } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function PricingEn() {
  useMeta(
    `Pricing [${SEO_YEAR_MONTH_EN}] | CENOMAR, PSA & NBI Service`,
    `Fixed-price CENOMAR, PSA & NBI packages for clients abroad — retrieval, DFA Apostille, and DHL worldwide delivery included. No trip to the Philippines needed. Free quote.`,
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
          {
            '@type': 'Question',
            name: 'Do you work with attorneys, HR teams, or relocation companies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We regularly act as the Philippine documents back office for immigration and family law attorneys, corporate HR and Global Mobility teams, and relocation companies — retrieving PSA, NBI, and DFA Apostille records on their behalf under a single invoice, with progress updates they can pass on to their own clients or employees.',
            },
          },
        ],
      }]}
    >
      <HeroBanner
        title="Pricing"
        subtitle="One fixed price covers document retrieval, DFA Apostille, and DHL delivery worldwide — so you don't have to fly to the Philippines, chase down government offices, or risk a rejected application."
        badges={['No trip to the Philippines required', 'Fixed price, no hidden fees', 'DHL delivery worldwide']}
        ctaText="Get a Free Quote"
        ctaHref="#contact"
        ctaService="Pricing inquiry"
        lastUpdated="April 1, 2026"
      />

      <div className="grid gap-4 md:grid-cols-2 mb-10">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-xs font-bold text-secondary uppercase tracking-wider">Spouses & Partners Abroad</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Married to, or planning to marry, a Filipino citizen while living in the US, UK, Canada, Australia, the EU, or the Gulf. We get the Philippine paperwork done without you flying back.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-xs font-bold text-secondary uppercase tracking-wider">Immigration & Family Law Attorneys</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Handling a client's spouse, fiancé, or naturalization case that needs Philippine civil registry documents. We work as your Philippine back office — fixed price, direct progress updates you can share with your client.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-xs font-bold text-secondary uppercase tracking-wider">HR & Global Mobility Teams</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Verifying a candidate's or employee's NBI Clearance, education, or civil records for relocation, a work visa, or a background check. One invoice, one point of contact.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Archive className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-xs font-bold text-secondary uppercase tracking-wider">Estate Administrators & Heirs</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Settling an estate or inheritance matter that requires Philippine birth, marriage, or death records for a foreign court, bank, or notary. We retrieve and reconcile records across Philippine civil registries.
          </p>
        </div>
      </div>

      <CtaBox
        title="Not sure which package fits your case?"
        description="Tell us your situation — marriage registration, a spouse or fiancé visa, citizenship, a corporate background check, or an estate matter — and we'll confirm exactly which documents are required and quote a fixed, all-inclusive price before anything is charged."
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

      <FaqSection
        items={[
          { q: 'Are there any hidden fees?', a: 'No. All quoted prices are all-inclusive: PSA/CENOMAR/NBI retrieval, DFA Apostille (if required), and DHL Express shipping worldwide are quoted together as one fixed price before you pay anything.' },
          { q: 'How does payment work?', a: 'Two-stage payment via Stripe (credit card): approximately 50% deposit to start, then the remaining balance after we send you photos or PDFs of the retrieved documents for your confirmation. Documents ship only after the balance is paid.' },
          { q: 'What payment methods do you accept?', a: 'Credit card via Stripe: Visa, Mastercard, American Express, Apple Pay, and Google Pay.' },
          { q: 'Can I cancel and get a refund?', a: 'Yes, free cancellation before we start work. Once processing begins, actual costs incurred and work performed are non-refundable. The balance payment is only requested after you confirm the document copies.' },
          { q: 'How long does delivery take?', a: 'Most documents (PSA, CENOMAR, NBI Clearance with DFA Apostille) take approximately 4–6 weeks from deposit payment to DHL delivery, depending on the document type and destination country.' },
          { q: 'Do you work with attorneys, HR teams, or relocation companies?', a: 'Yes. We regularly act as the Philippine documents back office for immigration and family law attorneys, corporate HR and Global Mobility teams, and relocation companies — retrieving PSA, NBI, and DFA Apostille records on their behalf under a single invoice, with progress updates they can pass on to their own clients or employees.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Get a Free Quote"
      />
    </PageLayout>
  );
}
