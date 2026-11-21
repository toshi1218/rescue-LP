import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Shield } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';
import type { CountryConfig } from '../lib/countryConfig';

const BASE = 'https://ph-document.com';

export default function CountryDocsEnTemplate({ config }: { config: CountryConfig }) {
  useMeta(
    `PH Documents for ${config.name} Immigration [${SEO_YEAR_MONTH_EN}]`,
    `Moving to ${config.name}? We retrieve CENOMAR, PSA & NBI Clearance with ${config.authLabel} for ${config.agencyAbbr}. Ships via DHL. Free consultation.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: `${config.name} Immigration Documents` }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Philippine Documents for ${config.name} Immigration (${config.agencyAbbr})`,
          description: `We retrieve all Philippine documents for ${config.name} immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with ${config.authLabel}. Ships to ${config.name} via DHL. ${config.agencyAbbr}-ready.`,
          url: `${BASE}/en/${config.slug}/`,
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: `${BASE}/en/`,
          },
          areaServed: { '@type': 'Country', name: config.countryCode },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: config.price,
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: config.price,
              priceCurrency: 'USD',
              description: `${config.name} Immigration Document Package — all documents + ${config.authLabel} + DHL to ${config.name} (all-inclusive)`,
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: config.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        },
      ]}
    >
      <HeroBanner
        title={`Philippine Documents for ${config.name} Immigration`}
        badges={config.badges}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="September 8, 2026"
      />

      <SummaryBlock
        conclusion={`Applying for ${config.visaType} in ${config.name}? We retrieve the Philippine records on your checklist and arrange authentication and delivery as required.`}
        points={config.summaryPoints}
        ctaText="Free Consultation"
      />

      {config.applicationGuide && (
        <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
          <h2 className="text-xl font-bold text-secondary">{config.applicationGuide.title}</h2>
          <ol className="list-decimal space-y-3 pl-5">
            {config.applicationGuide.steps.map(({ label, detail }) => (
              <li key={label}><strong>{label}.</strong> {detail}</li>
            ))}
          </ol>
          <p><a href={config.applicationGuide.sourceHref} className="text-primary underline underline-offset-2">{config.applicationGuide.sourceLabel}</a></p>
        </section>
      )}

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: `Applying for ${config.visaType} in ${config.name}`,
            description: 'Share the visa checklist or request from your receiving office. We confirm the Philippine records, formats and authentication steps it specifies.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: `Filipino living in ${config.name} with no contacts in the Philippines`,
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: `Not sure what documents ${config.agencyAbbr} requires`,
            description: 'Requirements vary by application type. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title={`We confirm ${config.agencyAbbr} requirements before we start`}
        description={`${config.visaType} and other visa types each have different document requirements. We verify for your specific case and quote everything together.`}
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA civil records and NBI Clearance retrieval',
            description: 'We retrieve the requested PSA records and coordinate NBI Clearance separately if your checklist includes it.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: `${config.authLabel}`,
            description: config.isHagueConvention
              ? 'When an Apostille is required, DFA uses an electronic route for eligible PSA e-Certificates and NBI eClearances. We confirm separately if you need a paper original.'
              : 'When legalization is required, we verify the paper DFA Certificate of Authentication route and any further requirements from the receiving authority or embassy.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: `DHL shipping to your ${config.name} address`,
            description: 'Paper documents are shipped with tracking. We deliver electronic records separately.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: `Tell us your application type and your target submission date to ${config.agencyAbbr}.` },
          { title: 'We confirm scope and quote', description: `We verify required documents for ${config.agencyAbbr} and provide all-inclusive pricing.` },
          { title: 'Local processing in the Philippines', description: `Our Cebu team handles all PSA retrieval and ${config.authLabel}.` },
          { title: `Delivery to ${config.name}`, description: `We send electronic files or arrange tracked shipping for paper documents as agreed. Estimated total: ${config.totalWeeks}.` },
        ]}
      />

      <FaqSection
        items={config.faqs}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: `Complete checklist for ${config.name} and all other visa types.` },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: `NBI Clearance + ${config.authLabel} + DHL to ${config.name}.` },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: `CENOMAR + ${config.authLabel} + DHL to ${config.name}.` },
        ]}
      />
    </PageLayout>
  );
}
