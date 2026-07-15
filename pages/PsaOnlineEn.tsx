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

export default function PsaOnlineEn() {
  useMeta(
    'PSA Online: How to Get PSA Certificates from Abroad [2026]',
    'PSAHelpline.ph lets you order PSA certificates online, including a digital e-Certificate delivered electronically abroad. OFWs and overseas Filipinos who find the English forms or DFA e-Apostille process a barrier can use an application proxy service.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Online' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA Online: How to Get PSA Certificates from Abroad',
          description: 'PSAHelpline.ph is the official online ordering system for PSA civil registry documents. This guide explains how it works for overseas Filipinos, and how an application proxy service can help with the online forms and DFA e-Apostille application.',
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
                text: 'Yes. PSAHelpline.ph\'s International Service (identity-verified) delivers a digital PSA E-Certificate electronically to your address abroad. If you need the physical SECPA original, PSAHelpline requires you to arrange and pay for your own international courier pickup.',
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
                text: 'PSA online processing timing varies by document and demand. For a physical original, add time to arrange your own international courier pickup. If a DFA e-Apostille is needed, that is a separate application with its own processing time.',
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
                text: 'For most immigration and legal purposes outside the Philippines, yes. Since March 2026, DFA authenticates PSA documents with an electronic e-Apostille (a paper Apostille is no longer issued for PSA documents). We confirm the exact requirement for your destination country before starting.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Online: Getting Your PSA Certificates Without Going Back"
        badges={['PSAHelpline.ph Explained', 'OFW-Friendly', 'Online Application Handled']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="PSAHelpline.ph lets you order PSA documents online, and its International Service delivers a digital e-Certificate electronically abroad. A physical original requires you to arrange your own international courier — an application proxy service can handle the online forms, payment, and DFA e-Apostille application for you."
        points={[
          'PSAHelpline.ph is the official PSA online portal — orders processed remotely',
          'Digital e-Certificate delivered electronically to overseas applicants; physical original needs self-arranged courier',
          'DFA e-Apostille is needed for most immigration and legal use abroad — issued electronically for PSA documents',
          'We complete the PSA online application and DFA e-Apostille application on your behalf, in English',
        ]}
        ctaText="Get Help With Your PSA Application"
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Is PSA Online (PSAHelpline.ph)?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong>PSAHelpline.ph</strong> is the official online ordering system of the{' '}
          <a href="https://psahelpline.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Philippine Statistics Authority (PSA)
          </a>. It allows Filipinos anywhere in the world to order civil registry documents online — without visiting a PSA office or sending someone in person.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Documents you can order via PSAHelpline.ph include:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4 pl-2">
          <li>PSA Birth Certificate (SECPA copy)</li>
          <li>PSA Marriage Certificate</li>
          <li>CENOMAR (Certificate of No Marriage Record)</li>
          <li>PSA Death Certificate</li>
        </ul>
        <p className="text-sm text-gray-700 leading-relaxed">
          Its International Service (identity-verified) delivers a <strong>digital PSA E-Certificate electronically</strong> to your address abroad. If you need the physical SECPA original, PSAHelpline requires <strong>you to arrange and pay for your own international courier pickup</strong> once the document is ready — a task an application proxy service can help coordinate if English-language logistics is a barrier.
        </p>
      </div>

      <FeatureList
        heading="Things to Know Before Ordering from PSAHelpline.ph"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'English-language forms and payment',
            description: 'The application, identity verification, and payment are all in English. If this is a barrier, an application proxy service can complete it on your behalf.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'No DFA e-Apostille included',
            description: 'PSAHelpline delivers the raw PSA document. For immigration use, you separately need a DFA e-Apostille — a distinct online application. Since March 2026, this is issued electronically only for PSA documents.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Physical original needs a self-arranged courier',
            description: 'The digital e-Certificate is delivered electronically, but a physical SECPA original requires you to book and pay for international courier pickup yourself.',
          },
        ]}
      />

      <CtaBox
        title="Skip the English-language hassle — we handle the applications"
        description="We complete your PSA online application and payment, and handle the DFA e-Apostille application, on your behalf. One quote, no Philippines address needed."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What We Do (vs. Ordering Directly from PSAHelpline.ph)"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA online application — completed on your behalf',
            description: 'We fill out the PSAHelpline.ph application and handle payment for you, in English. No Philippines address required on your end.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA e-Apostille — a separate application we handle',
            description: 'We submit the DFA e-Apostille application for your PSA document. This is required for most immigration authorities outside the Philippines, and is issued electronically for PSA documents.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Format guidance for your authority',
            description: 'We confirm what your specific immigration authority accepts (e-Apostille PDF, or a physical PSA original with self-arranged courier) before you order.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents you need and your use case (visa, immigration, marriage registration, etc.).' },
          { title: 'We confirm scope and quote', description: 'We verify what e-Apostille or format is required and provide all-inclusive pricing.' },
          { title: 'We complete your PSA online application', description: 'We fill out the PSAHelpline.ph application and payment on your behalf, in English.' },
          { title: 'DFA e-Apostille application', description: 'We submit the DFA e-Apostille application for your document. It is delivered electronically for submission.' },
          { title: 'Document delivered', description: 'PSA delivers your document electronically; for a physical original, we advise on arranging your own international courier.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I order PSA certificates online from abroad?', a: 'Yes, via PSAHelpline.ph\'s International Service, which delivers a digital e-Certificate electronically. If you need the physical original, you arrange your own international courier — or an application proxy service can complete the forms, payment, and DFA e-Apostille application for you.' },
          { q: 'What is PSAHelpline.ph?', a: 'PSAHelpline.ph is the official online ordering portal of the Philippine Statistics Authority (successor to PSA Serbilis). It processes orders for birth certificates, marriage certificates, CENOMAR, and death certificates.' },
          { q: 'How long does PSA online processing take?', a: 'Timing varies by document and demand. If a DFA e-Apostille is needed, that is a separate application with its own processing time — we confirm a current estimate for your case.' },
          { q: 'What documents can I get from PSA online?', a: 'PSA Birth Certificate, PSA Marriage Certificate, CENOMAR (Certificate of No Marriage Record), and PSA Death Certificate are all available online through PSAHelpline.ph.' },
          { q: 'Do PSA documents need DFA Apostille for use abroad?', a: 'For most immigration and legal purposes outside the Philippines, yes. Since March 2026, this is issued as an electronic e-Apostille for PSA documents (a paper Apostille is no longer issued for these). We confirm the exact requirement for your destination country before starting.' },
        ]}
        ctaTitle="Not sure what you need? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Application', description: 'We handle the online application and DFA e-Apostille for your PSA Birth Certificate.' },
          { href: '/en/cenomar/', title: 'CENOMAR Application Service', description: 'CENOMAR (Certificate of No Marriage Record) online application and DFA e-Apostille, handled for you.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'Why Apostille is needed and how we arrange it for every PSA document.' },
          { href: '/en/psa-birth-certificate-cost/', title: 'PSA Birth Certificate Cost', description: 'Full cost breakdown: government fee + online application service + DFA e-Apostille application.' },
        ]}
      />
    </PageLayout>
  );
}
