import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { CreditCard, FileCheck, Globe, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = 'DFA e-Apostille Payment Assistance from Abroad | US$90';
const DESCRIPTION = 'Cannot pay DFA e-Apostille through LinkBiz from abroad? We make the local payment for a US$90 service fee, or complete the online application and payment for US$180. Completion guarantee included; DFA fees are separate.';

export default function DfaPaymentAssistanceEn() {
  useMeta(TITLE, DESCRIPTION);

  const faqItems = [
    {
      q: 'Can you pay if I already submitted my DFA e-Apostille application?',
      a: 'Yes. Choose Payment Only and send the DFA or LinkBiz reference number, amount due, and payment deadline. We make the Philippine local payment and send you the payment confirmation.',
    },
    {
      q: 'Does the US$90 service fee include the DFA or LinkBiz amount?',
      a: 'No. The US$90 is our payment-assistance service fee. The exact DFA or LinkBiz amount shown on your application is charged separately at cost.',
    },
    {
      q: 'What is included in the US$180 Full Application Entry plan?',
      a: 'We enter the information you provide into the DFA e-Apostille application, submit the online application, make the required local payment, and send the submission and payment confirmation. PSA e-Certificate procurement is not included.',
    },
    {
      q: 'What do you need for Payment Only?',
      a: 'Send a clear screenshot showing the payment reference number, amount due, and deadline. We may ask for the applicant name and email so the payment can be matched correctly.',
    },
    {
      q: 'Does payment guarantee that DFA will issue the e-Apostille?',
      a: 'No. Payment completes the payment step only. Document eligibility, review, approval, and issuance are controlled by DFA. We do not guarantee government approval or processing time.',
    },
    {
      q: 'What does the Completion Guarantee cover?',
      a: 'If we cannot complete the agreed application submission or Philippine local payment after receiving complete and accurate information and a valid, unexpired payment reference, we refund the applicable service fee in full. DFA, LinkBiz, and other third-party charges are not refundable. The guarantee does not cover DFA review, rejection, approval, or issuance.',
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'Pricing', href: '/en/pricing/' },
        { label: 'DFA Payment Assistance' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFA e-Apostille Payment and Application Assistance',
          description: DESCRIPTION,
          url: 'https://ph-document.com/en/dfa-payment-assistance/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'GB', 'AU', 'AE', 'JP'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'DFA e-Apostille Assistance Plans',
            itemListElement: [
              {
                '@type': 'Offer',
                name: 'Payment Only',
                price: '90',
                priceCurrency: 'USD',
                description: 'Payment-reference verification, Philippine local payment, available payment-status checking, and confirmation for an already-submitted DFA e-Apostille application. DFA and LinkBiz fees are separate.',
              },
              {
                '@type': 'Offer',
                name: 'Full Application Entry and Payment',
                price: '180',
                priceCurrency: 'USD',
                description: 'Online application entry, submission, and local payment. DFA and LinkBiz fees are separate.',
              },
            ],
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="DFA e-Apostille Payment Assistance from Abroad"
        subtitle="Already reached the DFA payment step but cannot use LinkBiz from overseas? We can make the Philippine local payment for you."
        badges={['Payment Only US$90', 'Full Application + Payment US$180', 'Completion Guarantee']}
        ctaText="Request Payment Assistance"
        ctaHref="#contact"
        ctaService="DFA e-Apostille payment assistance"
        lastUpdated="September 18, 2026"
      />

      <SummaryBlock
        conclusion="If your DFA e-Apostille application is blocked at the local payment step, you do not need to restart the entire document process. Choose payment-only assistance or let us enter and submit the application for you."
        points={[
          'US$90 service fee when your DFA application is already submitted and only payment remains',
          'US$180 service fee for full online application entry, submission, and payment',
          'The exact DFA or LinkBiz government amount is charged separately at cost',
          'Full service-fee refund if we cannot complete the agreed submission or payment',
        ]}
        ctaText="Send Your DFA Payment Details"
      />

      <section className="mb-10">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Choose your service level</p>
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Simple, fixed service fees</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Both plans are designed for applicants outside the Philippines who cannot complete the local LinkBiz payment options.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Payment only</p>
            <h3 className="text-lg font-bold text-secondary mb-2">Already submitted your application?</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Send us the payment reference, amount, and deadline. We verify the details, make the Philippine local payment, check the available payment status, and return the confirmation.
            </p>
            <p className="text-4xl font-extrabold text-primary">US$90</p>
            <p className="text-xs text-gray-500 mt-1">Overseas payment-assistance service · DFA/LinkBiz amount charged separately</p>
            <p className="mt-3 text-xs font-semibold text-secondary">Payment Completion Guarantee included</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>· Verification of the reference, amount, and payment deadline</li>
              <li>· Philippine local payment through an available channel</li>
              <li>· Available payment-status check and confirmation sent to you</li>
            </ul>
            <a href="#contact" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary-light">
              Request Payment Only
            </a>
          </div>

          <div className="rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Full application entry + payment</p>
            <h3 className="text-lg font-bold text-secondary mb-2">Want us to complete the online steps?</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You provide the correct applicant and document information. We enter the DFA application, submit it, make the local payment, and send the confirmations.
            </p>
            <p className="text-4xl font-extrabold text-primary">US$180</p>
            <p className="text-xs text-gray-500 mt-1">Service fee · DFA/LinkBiz amount charged separately</p>
            <p className="mt-3 text-xs font-semibold text-secondary">Submission &amp; Payment Completion Guarantee included</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>· DFA e-Apostille application form entry</li>
              <li>· Online submission and local payment</li>
              <li>· Submission and payment confirmations</li>
            </ul>
            <a href="#contact" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-secondary transition-colors hover:bg-primary-hover">
              Request Full Assistance
            </a>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500 leading-relaxed">
          The US$90 is an overseas payment-assistance service fee, not a DFA government fee. If we cannot complete the agreed submission or local payment after receiving complete, accurate information and a valid, unexpired reference, we refund the applicable service fee in full. DFA/LinkBiz and other third-party charges are non-refundable. DFA review, rejection, approval, and issuance are not guaranteed. These prices do not include PSA e-Certificate procurement, document correction, translation, or resubmission after a DFA rejection unless specifically stated in your quote.
        </p>
      </section>

      <FeatureList
        heading="What This Service Solves"
        items={[
          {
            icon: <CreditCard className="w-4 h-4" />,
            title: 'LinkBiz payment options unavailable overseas',
            description: 'We complete the Philippine local payment step when your foreign card, bank account, or overseas wallet cannot be used.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Uncertainty about the online form',
            description: 'The US$180 plan covers application entry using the information and documents you provide before submission.',
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: 'Proof after payment',
            description: 'We send the submission and payment confirmations applicable to your selected plan.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Designed for applicants abroad',
            description: 'This service is for overseas applicants who already have, or are applying with, an eligible PSA e-Certificate.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          {
            title: 'Choose Payment Only or Full Assistance',
            description: 'Tell us whether your application is already submitted or whether you need us to enter the online form.',
          },
          {
            title: 'Send the required details',
            description: 'For payment only, send the reference number, amount, and deadline. For full assistance, send the requested applicant and PSA e-Certificate information.',
          },
          {
            title: 'We confirm the exact total',
            description: 'Your total is the fixed service fee plus the exact DFA or LinkBiz amount shown for your application.',
          },
          {
            title: 'We submit or pay and send confirmation',
            description: 'After payment is received, we complete the agreed scope and send the available submission and payment records. DFA controls review and issuance.',
          },
        ]}
      />

      <CtaBox
        title="Blocked at the DFA payment step?"
        description="Send a screenshot showing the reference number, amount due, and payment deadline. If you have not submitted yet, tell us you need full application entry."
        buttonText="Request Assistance"
        href="#contact"
        variant="primary"
        trustNote="Completion Guarantee included · Government charges shown separately"
      />

      <FaqSection
        items={faqItems}
        ctaTitle="Send your DFA application or payment details"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/apostille-fee/', title: 'DFA e-Apostille Fees', description: 'See the current government fee and how service charges differ from official fees.' },
          { href: '/en/psa-ecertificate-abroad/', title: 'PSA e-Certificate Abroad', description: 'Understand PSA e-Certificate and DFA e-Apostille acceptance outside the Philippines.' },
          { href: '/en/pricing/', title: 'All Service Pricing', description: 'Compare this payment-assistance service with full document procurement packages.' },
          { href: '/en/contact/', title: 'Contact IGRS', description: 'Send your payment reference or request full application assistance.' },
        ]}
      />
    </PageLayout>
  );
}
