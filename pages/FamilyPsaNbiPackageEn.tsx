import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Fingerprint, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function FamilyPsaNbiPackageEn() {
  useMeta(
    `3-Applicant PSA + NBI Family Package [${SEO_YEAR_MONTH_EN}]`,
    'Three family members applying together: PSA Birth Certificates, first-time NBI Clearances, DFA Apostilles, case coordination, and one DHL shipment for US$1,249.',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'Pricing', href: '/en/pricing/' },
        { label: '3-Applicant Family Package' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '3-Applicant PSA + NBI Family Package',
          description: 'A bundled Philippine document service for three family members applying together: three PSA Birth Certificates, three first-time NBI Clearances, the applicable DFA Apostilles, case coordination, and one consolidated DHL shipment.',
          url: 'https://ph-document.com/en/family-psa-nbi-package/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: 'Worldwide',
          offers: {
            '@type': 'Offer',
            price: '1249',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            description: 'Fixed package price for three eligible applicants applying together',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who qualifies for the US$1,249 family package?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fixed price applies to exactly three family members using the documents for the same country and purpose, with one consolidated shipment to one address.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is first-time NBI Clearance included?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Processing after the applicants complete fingerprinting on NBI Form No. 5 is included. Consular fingerprinting and the courier of the original forms to the Philippines are not included.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are Spanish sworn translations included?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Sworn translations and other destination-country fees are separate because requirements and translator fees vary.',
              },
            },
            {
              '@type': 'Question',
              name: 'How is payment divided?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The total is paid in two installments of US$624.50: the first to begin processing and the second after document copies are confirmed and before DHL shipment.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="3-Applicant PSA + NBI Family Package"
        subtitle="One coordinated package for three family members applying together"
        badges={['US$1,249 total', '6 Philippine documents + Apostilles', 'One consolidated DHL shipment']}
        ctaText="Request This Package"
        ctaHref="#contact"
        ctaService="3-Applicant PSA + NBI Family Package"
        lastUpdated="September 19, 2026"
      />

      <SummaryBlock
        conclusion="Three applicants, one coordinated case, and one fixed price: US$1,249."
        points={[
          'Three PSA Birth Certificates with the applicable DFA e-Apostilles',
          'Three first-time NBI Clearances with DFA Apostilles',
          'Authorization Letters, case review, and progress updates',
          'One consolidated DHL Express shipment to one address',
        ]}
        ctaText="Request This Package"
      />

      <section className="mb-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Family bundle</p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-secondary">US$1,249 total for three applicants</h2>
            <p className="mt-2 text-sm text-gray-600">
              Two payments of US$624.50. The second payment is due after you confirm the document copies and before DHL shipment.
            </p>
          </div>
          <p className="text-sm font-semibold text-secondary md:text-right">
            Estimated timeline<br />
            <span className="text-primary">6–7 weeks overall</span>
          </p>
        </div>
      </section>

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Three applicants handled as one case',
            description: 'One requirements review, coordinated instructions, Authorization Letters, progress updates, and a single delivery address.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificates + DFA e-Apostilles',
            description: 'One PSA Birth Certificate package for each applicant, prepared in the format required for the receiving authority.',
          },
          {
            icon: <Fingerprint className="w-4 h-4" />,
            title: 'First-time NBI Clearances + DFA Apostilles',
            description: 'We process all three applications after receiving the completed original NBI Form No. 5 fingerprint cards and supporting documents.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'One consolidated DHL shipment',
            description: 'The completed physical documents are combined into one tracked international shipment to one address.',
          },
        ]}
      />

      <CtaBox
        title="Designed for families applying together"
        description="The fixed price applies when all three applicants use the documents for the same destination country and purpose, submit their requirements together, and use one return address."
        buttonText="Check Eligibility"
        href="#contact"
        variant="primary"
        trustNote="Fixed quote before payment · Two-stage payment · Progress updates included"
      />

      <StepList
        heading="How It Works"
        steps={[
          {
            title: 'Send the three applicants’ details',
            description: 'Provide each full name, date and place of birth, passport copy, available PSA or Report of Birth copy, destination country, purpose, deadline, and delivery address.',
          },
          {
            title: 'Complete NBI fingerprinting',
            description: 'Each first-time applicant completes NBI Form No. 5 through the appropriate Philippine Embassy, Consulate, or accepted fingerprinting route.',
          },
          {
            title: 'Courier the original forms together',
            description: 'Send the three original fingerprint cards and supporting documents to our Cebu team in one shipment.',
          },
          {
            title: 'We process PSA, NBI, and DFA requirements',
            description: 'We coordinate the six Philippine records, arrange the applicable Apostilles, and provide progress updates.',
          },
          {
            title: 'Confirm copies and receive the DHL shipment',
            description: 'After you review the document copies and pay the second US$624.50 installment, we dispatch the consolidated shipment.',
          },
        ]}
      />

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-secondary mb-3">Not Included</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>· Embassy, Consulate, police, or fingerprinting fees outside the Philippines</li>
          <li>· Courier cost for sending the original NBI Form No. 5 cards to Cebu</li>
          <li>· Spanish sworn translation or other destination-country translation</li>
          <li>· PSA correction, late registration, court records, derogatory NBI records, or other exceptional remedial work</li>
          <li>· Additional applicants, separate delivery addresses, or different destination-country procedures</li>
        </ul>
        <p className="mt-4 text-xs text-gray-500">
          Any exceptional issue is explained and quoted for approval before additional work begins.
        </p>
      </section>

      <FaqSection
        items={[
          {
            q: 'Who qualifies for the US$1,249 family package?',
            a: 'Exactly three family members using the documents for the same country and purpose, submitting their requirements together, and receiving one consolidated shipment at one address.',
          },
          {
            q: 'Is first-time NBI Clearance included?',
            a: 'Yes. Our Philippine-side processing is included after all three applicants complete fingerprinting on NBI Form No. 5. Consular fingerprinting and the inbound courier to Cebu are separate.',
          },
          {
            q: 'Are translations included?',
            a: 'No. Spanish sworn translations and other destination-country translation costs are separate.',
          },
          {
            q: 'What if one applicant has a record discrepancy?',
            a: 'Tell us before payment. Standard processing remains covered, but PSA corrections, late registrations, derogatory records, and other exceptional remedial work require a separate assessment and quote.',
          },
        ]}
        ctaTitle="Three family members applying together?"
        ctaButton="Request the US$1,249 Package"
      />
    </PageLayout>
  );
}
