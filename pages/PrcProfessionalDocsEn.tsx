import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Award, FileCheck, Globe, Heart, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import RelatedArticles from '../components/RelatedArticles';

export default function PrcProfessionalDocsEn() {
  useMeta(
    'PRC Document Retrieval & Apostille Service [2026]',
    'Get Philippine PRC certificates from abroad. One document with DFA Apostille and DHL delivery from US$399; two-document package from US$499.',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PRC Professional Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PRC Professional Documents and Authentication Support',
        description: 'Retrieval and authentication support for Philippine PRC professional documents, including Certificate of Good Standing, Board Rating, Passing, registration records and certified copies.',
        url: 'https://ph-document.com/en/prc-professional-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'AE', 'GB', 'JP', 'SA'],
        offers: {
          '@type': 'Offer',
          price: '399',
          priceCurrency: 'USD',
          description: 'One PRC certificate retrieval, DFA Apostille, and worldwide DHL delivery',
        },
      }]}
    >
      <HeroBanner
        title="PRC Document Retrieval & Apostille Service"
        subtitle="For Filipino nurses and other licensed professionals abroad who need PRC certificates, certified records, authentication, and international delivery."
        badges={['1 Document US$399', '2 Documents US$499', 'DHL Included']}
        ctaText="Request a Case Check"
        ctaHref="#contact"
        lastUpdated="September 30, 2026"
      />

      <SummaryBlock
        conclusion="Need a Philippine professional document for an overseas job, licence registration, or credential review? Our Cebu team checks whether representative processing is permitted, then coordinates the PRC request, authentication, and delivery."
        points={[
          'Certificate of Good Standing, Board Rating, Passing, registration records, and certified PRC copies',
          'Support for nurses and other PRC-licensed professionals',
          'Overseas authorization route checked before any payment',
          'Destination-specific Apostille or embassy-legalization route checked before quoting',
        ]}
        ctaText="Request a Case Check"
      />

      <FeatureList
        heading="PRC Documents We Can Help Request"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Certificate of Good Standing',
            description: 'For employers, regulators, credentialing bodies, and professional registration abroad.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Certificate of Board Rating and Certificate of Passing',
            description: 'Official proof of licensure-examination results and passing status for employment, registration, or credential review.',
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: 'Certified PIC / Certificate of Registration copies',
            description: 'PRC-certified copies of a Professional Identification Card or Certificate of Registration when requested by a receiving authority.',
          },
          {
            icon: <Award className="w-4 h-4" />,
            title: 'Professional verification and other PRC records',
            description: 'We assess the exact record and submission method required by an employer, regulator, credentialing body, or foreign authority.',
          },
        ]}
      />

      <section className="mb-10">
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">
          <p className="text-sm font-bold text-gray-800 mb-2">Overseas authorization became easier in 2026</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            PRC Memorandum Circular No. 1 (s. 2026) allows eligible overseas PRC-registered professionals to send a scanned authorization letter and supporting documents to the selected PRC regional office. The representative presents valid ID and the required undertaking when claiming the document. Eligibility and the exact forms depend on the applicant and requested record, so we confirm the route before accepting the case.
          </p>
          <a
            href="https://www.prc.gov.ph/prc-memorandum-circular-no-1-s-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-semibold text-secondary underline underline-offset-2"
          >
            View the official PRC circular
          </a>
        </div>
      </section>

      <CtaBox
        title="The document name alone is not enough"
        description="Tell us your profession, requested document, destination country, receiving authority, and deadline. We confirm the representative requirements and quote the complete service before you pay."
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
          { title: 'We confirm the PRC record, authorization route, and quote', description: 'We check whether you need a certificate, certified copy, verification, Apostille, or embassy legalization.' },
          { title: 'You complete any required LERIS and authorization steps', description: 'Depending on the request, PRC may require an appointment, payment, scanned authorization package, original SPA, or existing PIC/COR.' },
          { title: 'Our local representative files or claims the document', description: 'Where representative handling is permitted, our team visits the designated PRC office and coordinates any permitted follow-up.' },
          { title: 'Authentication and DHL delivery', description: 'We arrange the confirmed DFA Apostille or legalization route and send the completed documents internationally with tracking.' },
        ]}
      />

      <section className="mb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Pricing and timing</h2>
          <div className="grid gap-4 md:grid-cols-2 mb-5">
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
              <p className="text-xs font-bold text-primary mb-1">ONE PRC DOCUMENT</p>
              <p className="text-3xl font-extrabold text-primary">US$399</p>
              <p className="text-xs text-gray-500 mt-1">Retrieval, DFA Apostille, and DHL included</p>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-white p-5">
              <p className="text-xs font-bold text-secondary mb-1">TWO-DOCUMENT PACKAGE</p>
              <p className="text-3xl font-extrabold text-primary">US$499</p>
              <p className="text-xs text-gray-500 mt-1">Same applicant and delivery address</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• PRC government fees and local representative processing included</li>
            <li>• DFA Apostille and tracked DHL delivery included</li>
            <li>• Approximately 50% deposit to start</li>
            <li>• Balance after you review document photos or PDFs, before dispatch</li>
            <li>• Timeline confirmed after checking appointment availability and the requested PRC record</li>
          </ul>
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            If original PIC/COR retrieval, a special authorization route, or embassy legalization is required, we provide a separate quote before starting. Apostille and DHL for an eligible PRC document already in your possession start from US$279.
          </p>
        </div>
      </section>

      <FaqSection
        items={[
          { q: 'Can you process PRC documents for nurses?', a: 'Yes. We review requests for nurses and other PRC-licensed professionals, then confirm the exact PRC document and receiving-authority requirements before processing.' },
          { q: 'Can you obtain a Certificate of Good Standing?', a: 'We can assess and coordinate Certificate of Good Standing requests where PRC rules allow representative processing. We first check your PRC status, authorization method, selected regional office, and receiving-authority requirements.' },
          { q: 'Which PRC documents can you process?', a: 'Common requests include Certificate of Good Standing, Certificate of Board Rating, Certificate of Passing, and certified copies of the Professional Identification Card or Certificate of Registration. Other verification requests are assessed individually.' },
          { q: 'Do I need to send an original SPA?', a: 'It depends on the case. Eligible overseas PRC-registered professionals may use the scanned authorization procedure under PRC Memorandum Circular No. 1 (s. 2026). Other requests may still require an original SPA, original PRC document, or applicant action through LERIS.' },
          { q: 'Do I need Apostille or embassy legalization?', a: 'It depends on the destination country and receiving authority. We confirm the required route before quoting so you do not order the wrong authentication.' },
          { q: 'How much does the complete service cost?', a: 'One PRC document with retrieval, DFA Apostille, and DHL delivery starts from US$399. A two-document package for the same applicant and delivery address starts from US$499. Cases requiring original PIC/COR retrieval, a special authorization route, or embassy legalization are quoted separately.' },
          { q: 'Can you renew my PRC licence?', a: 'We first assess whether the requested renewal or replacement can be handled by a representative. This page mainly covers PRC-issued certificates, certified copies, verification, authentication, and international delivery.' },
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
