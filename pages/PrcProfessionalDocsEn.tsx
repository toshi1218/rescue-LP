import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Heart, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';
import RelatedArticles from '../components/RelatedArticles';

export default function PrcProfessionalDocsEn() {
  useMeta(
    `PRC Professional Documents & Apostille Service [${SEO_YEAR_MONTH_EN}]`,
    'Get Philippine PRC professional documents for overseas employment or registration. We check the document, authentication route, and DHL delivery required for your destination.',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PRC Professional Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PRC Professional Documents and Authentication Support',
        description: 'Support for Philippine PRC professional documents, including Certificate of Good Standing, Certificate of Registration, certified copies and destination-specific authentication coordination.',
        url: 'https://ph-document.com/en/prc-professional-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'AE', 'GB', 'JP', 'SA'],
      }]}
    >
      <HeroBanner
        title="PRC Professional Documents for Overseas Employment"
        badges={['For Nurses & Licensed Professionals', 'Authentication Route Checked', 'Ships Worldwide via DHL']}
        ctaText="Request a Case Check"
        ctaHref="#contact"
        lastUpdated="August 2, 2026"
      />

      <SummaryBlock
        conclusion="Need Philippine professional documents for an overseas job, licence registration, or credential review? We confirm the document and authentication route before processing starts."
        points={[
          'Certificate of Good Standing, Certificate of Registration and certified PRC copies',
          'Support for nurses and other PRC-licensed professionals',
          'Destination-specific Apostille or embassy-legalization route checked before quoting',
          'DHL dispatch available after documents are ready',
        ]}
        ctaText="Request a Case Check"
      />

      <FeatureList
        heading="Documents We Can Review With You"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Certificate of Good Standing',
            description: 'For employers, regulators, credentialing bodies, and professional registration abroad.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Certificate of Registration / Board Certificate',
            description: 'For professionals who need PRC-issued registration evidence for an overseas application.',
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: 'Certified PRC documents and verification',
            description: 'We assess whether certified copies, licence validation, or a stateboard verification request is the appropriate document for your receiving authority.',
          },
        ]}
      />

      <CtaBox
        title="The document name alone is not enough"
        description="Tell us your profession, destination country, receiving authority, and deadline. We will confirm the PRC document, authorization requirements, and authentication route before giving a quote."
        buttonText="Check My Requirements"
        href="#contact"
        variant="primary"
        trustNote="Scope and availability depend on the specific PRC document, profession, and receiving authority."
      />

      <FeatureList
        heading="Who This Service Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Nurses and healthcare professionals moving overseas',
            description: 'For professional registration, employer onboarding, or credential verification outside the Philippines.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Professionals already abroad',
            description: 'For clients who need Philippine-issued professional documents but do not have a local contact to coordinate the process.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Employers and credentialing teams',
            description: 'For document requests connected with a specific employee, destination authority, and submission deadline.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Send your profession, document request, destination, and deadline', description: 'A receiving authority or employer request letter is helpful when available.' },
          { title: 'We confirm the correct PRC route and quote', description: 'We check whether the case needs a certificate, certified copy, verification, Apostille, or embassy legalization.' },
          { title: 'Document processing where representative handling is permitted', description: 'Some PRC steps require the applicant’s LERIS action, original authorization, or additional documents. We confirm these first.' },
          { title: 'Authentication and DHL dispatch', description: 'After the document is ready, we coordinate the confirmed Philippine authentication route and international delivery.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can you process PRC documents for nurses?', a: 'Yes. We review requests for nurses and other PRC-licensed professionals, then confirm the exact PRC document and receiving-authority requirements before processing.' },
          { q: 'Can you obtain a Certificate of Good Standing?', a: 'We can assess and coordinate Certificate of Good Standing requests where the PRC requirements and authorization method allow it. The final scope is confirmed after reviewing the case.' },
          { q: 'Do I need Apostille or embassy legalization?', a: 'It depends on the destination country and receiving authority. We confirm the required route before quoting so you do not order the wrong authentication.' },
          { q: 'Can you renew my PRC licence?', a: 'This service is focused on PRC-issued certificates, authenticated copies, verification, and international document handling. Renewal or personal-appearance requirements are assessed separately.' },
        ]}
        ctaTitle="Share your PRC document request"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/uae/', title: 'UAE Document Attestation', description: 'Philippine documents for UAE submission: embassy attestation and DHL delivery.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'Check the Philippine authentication route for your destination country.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance support for overseas employment, immigration, and credentialing cases.' },
          { href: '/en/contact/', title: 'Request a Case Check', description: 'Tell us your profession, document, country, receiving authority, and deadline.' },
        ]}
      />
    </PageLayout>
  );
}
