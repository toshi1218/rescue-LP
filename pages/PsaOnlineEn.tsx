import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function PsaOnlineEn() {
  useMeta(
    `PSA Online: How to Get PSA Certificates from Abroad [${SEO_YEAR}]`,
    `PSA Serbilis lets you order PSA certificates online — but only ships within the Philippines. Those applying for spouse visa or naturalization in Japan use a document service to retrieve and ship PSA documents.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Online' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA Online: How to Get PSA Certificates from Abroad',
          description: 'PSA Serbilis is the official online ordering system for PSA civil registry documents. This guide explains how it works, its limitations for overseas Filipinos, and the fastest way to get PSA documents shipped internationally.',
          url: 'https://ph-document.com/en/psa-online/',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I order PSA certificates online from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, PSA Serbilis allows online orders from anywhere. However, PSA Serbilis only delivers within the Philippines — you need a local address or representative to receive the documents. For international delivery, use a document retrieval service that ships via DHL.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is PSA Serbilis?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA Serbilis is the official online ordering portal of the Philippine Statistics Authority (PSA). It allows Filipinos to order civil registry documents — birth certificates, marriage certificates, CENOMAR, and death certificates — online without visiting a PSA office.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does PSA Serbilis delivery take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA Serbilis typically takes 10–15 business days for processing and delivery within the Philippines. For overseas delivery via a document service, add DFA Apostille time (1–2 weeks) and DHL international shipping (3–5 business days).',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents can I get from PSA online?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Through PSA Serbilis, you can order: PSA Birth Certificate, PSA Marriage Certificate, CENOMAR (Certificate of No Marriage Record), PSA Death Certificate, and PSA Birth Certificate for Late Registration. All are issued on PSA security paper (SECPA).',
              },
            },
            {
              '@type': 'Question',
              name: 'Do PSA documents need DFA Apostille for use abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration and legal purposes outside the Philippines, yes. DFA Apostille authenticates PSA documents for use in Hague Convention member countries. We confirm the exact requirement for your destination country before starting.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Online: Getting Your PSA Certificates Without Going Back"
        badges={['PSA Serbilis Explained', 'OFW-Friendly', 'Ships Worldwide via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="PSA Serbilis lets you order PSA documents online, but only delivers within the Philippines. Overseas Filipinos use a document service to retrieve and ship internationally."
        points={[
          'PSA Serbilis is the official PSA online portal — orders processed remotely',
          'Delivery within Philippines only — international shipment requires a local representative or service',
          'Authentication depends on the receiving authority and application stage',
          'When required, DFA e-Apostille is delivered electronically; separate SECPA paper records can ship by DHL',
        ]}
        ctaText="Get PSA Documents Shipped to You"
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Is PSA Online (PSA Serbilis)?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong>PSA Serbilis</strong> is the official online ordering system of the{' '}
          <a href="https://psaserbilis.com.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Philippine Statistics Authority (PSA)
          </a>. It allows Filipinos anywhere in the world to order civil registry documents online — without visiting a PSA office or sending someone in person.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Documents you can order via PSA Serbilis include:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4 pl-2">
          <li>PSA Birth Certificate (SECPA copy)</li>
          <li>PSA Marriage Certificate</li>
          <li>CENOMAR (Certificate of No Marriage Record)</li>
          <li>PSA Death Certificate</li>
        </ul>
        <p className="text-sm text-gray-700 leading-relaxed">
          However, there is a critical limitation for overseas Filipinos: <strong>PSA Serbilis only delivers within the Philippines.</strong> If you are based abroad, you need someone with a Philippine address to receive the documents — or you can use a document retrieval service that handles the pickup and international shipping for you.
        </p>
      </div>

      <FeatureList
        heading="Limitations of PSA Serbilis for Overseas Filipinos"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Philippine delivery address required',
            description: 'PSA Serbilis ships only to addresses within the Philippines. If you have no one there to receive and forward your documents, you cannot use the portal directly.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'No DFA Apostille included',
            description: 'PSA Serbilis does not automatically include authentication. If the receiving authority requires it, PSA civil records use the DFA e-Apostille process from March 16, 2026; no physical PSA original is submitted to DFA.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Processing time: 10–15 business days',
            description: 'Standard PSA Serbilis orders take 10–15 business days within the Philippines. International delivery and Apostille add further time — plan for 4–6 weeks total.',
          },
        ]}
      />

      <CtaBox
        title="Skip the logistics — we handle everything"
        description="We retrieve your PSA documents, arrange DFA Apostille, and ship directly to your international address via DHL. One quote, one shipment, no Philippines address needed."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What We Do (vs. PSA Serbilis)"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA retrieval — handled locally in Cebu',
            description: 'Our Cebu-based team applies to PSA on your behalf and receives the documents at our local address. No Philippines address required on your end.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille — arranged after retrieval',
            description: 'When the receiving authority requires authentication, we arrange DFA e-Apostille for the PSA e-Certificate. A SECPA paper certificate is a separate order.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL international shipping — tracked delivery to your door',
            description: 'Any separately requested SECPA paper records ship to your address via DHL Express. The e-Apostille remains an electronic PDF and should be forwarded electronically.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents you need and your use case (visa, immigration, marriage registration, etc.).' },
          { title: 'We confirm scope and quote', description: 'We verify what Apostille or format is required and provide all-inclusive pricing.' },
          { title: 'PSA retrieval in the Philippines', description: 'Our Cebu team applies to PSA Serbilis / PSA office and collects your documents.' },
          { title: 'DFA e-Apostille when required', description: 'For PSA civil records, DFA issues an electronic Apostille for the e-Certificate. We keep the authenticated PDF electronic and arrange any separate SECPA paper copy only when requested.' },
          { title: 'DHL delivery to you', description: 'All documents shipped with tracking directly to your international address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I order PSA certificates online from abroad?', a: 'Yes, via PSA Serbilis — but it only delivers within the Philippines. For international delivery, use a document service that picks up locally and ships worldwide via DHL.' },
          { q: 'What is PSA Serbilis?', a: 'PSA Serbilis is the official online ordering portal of the Philippine Statistics Authority. It processes orders for birth certificates, marriage certificates, CENOMAR, and death certificates.' },
          { q: 'How long does PSA Serbilis take?', a: 'PSA Serbilis typically takes 10–15 business days for delivery within the Philippines. Including DFA Apostille and international shipping, plan 4–6 weeks total.' },
          { q: 'What documents can I get from PSA online?', a: 'PSA Birth Certificate, PSA Marriage Certificate, CENOMAR (Certificate of No Marriage Record), and PSA Death Certificate are all available online through PSA Serbilis.' },
          { q: 'Do PSA documents need DFA Apostille for use abroad?', a: 'It depends on the receiving authority and application stage. Hague Convention membership does not make authentication mandatory for every submission. We confirm the exact requirement before starting.' },
        ]}
        ctaTitle="Not sure what you need? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Retrieval', description: 'Get your PSA Birth Certificate with DFA Apostille shipped worldwide.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR (Certificate of No Marriage Record) retrieved from PSA with Apostille.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'When authentication is required and how PSA e-Apostille differs from physical non-PSA processing.' },
          { href: '/en/psa-birth-certificate-cost/', title: 'PSA Birth Certificate Cost', description: 'Full cost breakdown: PSA fee + DFA Apostille + DHL shipping.' },
        ]}
      />
    </PageLayout>
  );
}
