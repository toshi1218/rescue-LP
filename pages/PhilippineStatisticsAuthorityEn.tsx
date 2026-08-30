import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function PhilippineStatisticsAuthorityEn() {
  useMeta(
    'Philippine Statistics Authority (PSA): Documents & How to Get Them [2026]',
    'The Philippine Statistics Authority (PSA) issues birth certificates, marriage certificates, death certificates, and CENOMAR. Learn how to get records from abroad and when authentication is required.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Philippine Statistics Authority' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Philippine Statistics Authority (PSA): Documents & How to Get Them',
          description: 'The Philippine Statistics Authority (PSA) is the government agency that issues civil registry documents in the Philippines — birth certificates, marriage certificates, CENOMAR, and death certificates. This guide explains what PSA issues and how overseas Filipinos can get PSA documents without traveling.',
          url: 'https://ph-document.com/en/philippine-statistics-authority/',
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
              name: 'What is the Philippine Statistics Authority (PSA)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Philippine Statistics Authority (PSA) is the official government agency in the Philippines responsible for civil registration — issuing birth certificates, marriage certificates, death certificates, and CENOMAR. It was formerly known as the National Statistics Office (NSO). All PSA documents carry the SECPA security paper seal.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents does PSA issue?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA issues: PSA Birth Certificate, PSA Marriage Certificate, CENOMAR (Certificate of No Marriage Record), PSA Death Certificate, and PSA Birth Certificate for Late Registration. All are printed on PSA security paper (SECPA).',
              },
            },
            {
              '@type': 'Question',
              name: 'How do I get PSA documents from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAHelpline.ph offers an International Service (identity-verified) that delivers a digital PSA E-Certificate electronically to your address abroad. If you need the physical SECPA original, PSAHelpline requires you to arrange and pay for your own international courier pickup. If English-language forms or online payment are a barrier, an application proxy service can complete the order and payment on your behalf, and handle the DFA e-Apostille application if authentication is required.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between PSA and NSO?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA (Philippine Statistics Authority) replaced NSO (National Statistics Office) in 2013. The documents are the same — if you have an older NSO-issued document, it is still valid. New requests are fulfilled by PSA.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do PSA documents need DFA Apostille for use abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the receiving authority. Hague Convention membership explains how an Apostille is recognized when required; it does not make authentication mandatory for every foreign use. DFA issues PSA Apostilles electronically from March 16, 2026.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Statistics Authority (PSA): Your Guide to PSA Documents"
        badges={['Birth Certificate · Marriage Cert · CENOMAR', 'Retrieval from Abroad', 'DFA Apostille Included']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="PSA is the Philippine government agency that issues all civil registry documents. Overseas Filipinos can get PSA documents without traveling through a document retrieval service."
        points={[
          'PSA (formerly NSO) issues birth certificates, marriage certificates, CENOMAR, and death certificates',
          'All PSA documents are printed on SECPA security paper with an official seal',
          'Online ordering via PSA Serbilis is available but delivers within the Philippines only',
          'For international use, follow the receiving authority\'s format and authentication instructions',
        ]}
        ctaText="Get Your PSA Document"
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Is the Philippine Statistics Authority?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The <strong>Philippine Statistics Authority (PSA)</strong> is the official government agency of the Republic of the Philippines
          responsible for civil registration and statistics. It was created in 2013 by merging the former National Statistics Office (NSO),
          National Statistical Coordination Board (NSCB), Bureau of Agricultural Statistics (BAS), and Bureau of Labor and Employment Statistics (BLES).
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          For overseas Filipinos and immigration purposes, PSA is best known as the agency that issues official civil registry documents —
          the documents most commonly required for visa applications, marriage abroad, and immigration petitions.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          All PSA documents are printed on <strong>SECPA (Security Paper)</strong> — a specially watermarked paper
          that cannot be replicated, making PSA documents verifiable and accepted by government agencies worldwide.
        </p>
      </div>

      <FeatureList
        heading="Documents Issued by PSA"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate',
            description: 'Official proof of birth registered in the Philippines. Required for nearly every visa and immigration application. Must be a recent PSA SECPA copy — old NSO copies may not be accepted.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate',
            description: 'Proof of a marriage legally registered in the Philippines. Required for CR-1/IR-1 spouse visa, spousal sponsorship, and other immigration cases involving married couples.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CENOMAR (Certificate of No Marriage Record)',
            description: 'Proof that a Filipino citizen has no registered marriage on file — legally single. Required for K-1 fiancé visa and marriage registration abroad.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Death Certificate',
            description: 'Required for annulment cases, survivor benefits, and some immigration applications where the previous spouse\'s death must be established.',
          },
        ]}
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PSA vs. NSO: What Is the Difference?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          PSA replaced NSO in 2013. If you have an older document issued by NSO, it is still valid and does not need to be replaced.
          However, for new requests, all documents are now issued by PSA.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          If a government authority asks for a "PSA copy" or "NSO copy," they mean the same thing: an official civil registry document
          printed on PSA security paper (SECPA). Both terms refer to the same document.
        </p>
      </div>

      <CtaBox
        title="Need help with your PSA application or DFA e-Apostille?"
        description="We complete the PSA online application and DFA e-Apostille application on your behalf, in English, with payment handled for you. No Philippines trip required."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage"
      />

      <FeatureList
        heading="How to Get PSA Documents from Outside the Philippines"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'PSAHelpline.ph online (self-service)',
            description: 'Order via PSAHelpline.ph International Service — a digital PSA E-Certificate is delivered electronically to your address abroad. For a physical original, you arrange and pay for your own international courier pickup. Requires navigating the site and payment yourself in English.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Online application proxy service (recommended if English/payment is a barrier)',
            description: 'We complete the PSA online application and payment on your behalf, and handle the DFA e-Apostille application if your submission requires authentication. PSA ships the document directly to you.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Philippine Embassy / Consulate (limited)',
            description: 'Some Philippine embassies and consulates offer civil registration services, but availability varies by country and document type. Wait times can be months.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What is the Philippine Statistics Authority (PSA)?', a: 'PSA is the Philippine government agency responsible for civil registration. It issues birth certificates, marriage certificates, CENOMAR, and death certificates — all on PSA security paper (SECPA).' },
          { q: 'What documents does PSA issue?', a: 'PSA issues: Birth Certificate, Marriage Certificate, CENOMAR (Certificate of No Marriage Record), Death Certificate, and Late Registration Birth Certificate.' },
          { q: 'How do I get PSA documents from abroad?', a: 'Via PSAHelpline.ph International Service (digital e-Certificate delivered electronically; physical original requires you to arrange your own international courier), or through an application proxy service that completes the PSA online application, payment, and DFA e-Apostille application on your behalf.' },
          { q: 'What is the difference between PSA and NSO?', a: 'PSA replaced NSO in 2013. The documents are the same — older NSO copies are still valid. New requests go through PSA.' },
          { q: 'Do PSA documents need DFA Apostille for use abroad?', a: 'It depends on the receiving authority. For a PSA e-Certificate used in an Apostille Convention country, DFA issues a digital e-Apostille. Non-member destinations use a physical Certificate of Authentication and may require embassy attestation. We confirm the route before processing.' },
        ]}
        ctaTitle="Not sure which PSA document you need? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Application', description: 'We handle the online application and DFA e-Apostille for your PSA Birth Certificate.' },
          { href: '/en/cenomar/', title: 'CENOMAR Application Service', description: 'CENOMAR (Certificate of No Marriage Record) online application and DFA e-Apostille, handled for you.' },
          { href: '/en/psa-online/', title: 'PSA Online Guide', description: 'How PSA Serbilis works and its limitations for overseas Filipinos.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'Why DFA Apostille is required and how we handle the application for PSA and non-PSA documents.' },
        ]}
      />
    </PageLayout>
  );
}
