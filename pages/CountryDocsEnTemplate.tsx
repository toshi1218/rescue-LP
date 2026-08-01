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
import { SEO_LAST_UPDATED_EN, SEO_YEAR_MONTH_EN } from '../lib/seoDate';
import type { CountryConfig } from '../lib/countryConfig';

const BASE = 'https://ph-document.com';

export default function CountryDocsEnTemplate({ config }: { config: CountryConfig }) {
  const authenticationDelivery = config.isHagueConvention
    ? `DFA e-Apostille delivered digitally; any physical PSA originals are shipped to your ${config.name} address via DHL`
    : `Physical Certificate of Authentication and any required embassy attestation shipped to your ${config.name} address via DHL`;
  const safeSummaryPoints = config.summaryPoints.map(point =>
    point.startsWith('Paper Apostille originals shipped') ? authenticationDelivery : point,
  );
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
        lastUpdated={SEO_LAST_UPDATED_EN}
      />

      <SummaryBlock
        conclusion={`Applying for ${config.name} ${config.visaType}? We retrieve all required Philippine documents with ${config.authLabel} and ship directly to your ${config.name} address.`}
        points={safeSummaryPoints}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: `Applying for ${config.name} ${config.visaType}`,
            description: `${config.agencyAbbr} requires Philippine civil documents with ${config.authLabel}. We handle all required documents in one coordinated flow.`,
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
            title: 'PSA document retrieval (Birth Cert, Marriage Cert, CENOMAR, NBI Clearance)',
            description: 'We retrieve all required PSA documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: `${config.authLabel}`,
            description: config.isHagueConvention
              ? `Where required, we arrange the DFA e-Apostille as a digital document. We confirm acceptance with ${config.agencyAbbr} before processing.`
              : `Where required, we arrange the physical authentication and embassy-attestation route for ${config.name}.`,
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: `DHL shipping to your ${config.name} address`,
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: `Tell us your application type and your target submission date to ${config.agencyAbbr}.` },
          { title: 'We confirm scope and quote', description: `We verify required documents for ${config.agencyAbbr} and provide all-inclusive pricing.` },
          { title: 'Local processing in the Philippines', description: `Our Cebu team handles all PSA retrieval and ${config.authLabel}.` },
          { title: `DHL delivery to ${config.name}`, description: `All documents shipped together with tracking. Estimated total: ${config.totalWeeks}.` },
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
