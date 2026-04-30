import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function PsaSerbilisEn() {
  useMeta(
    'PSA Serbilis [2026]: What It Was & How to Get PSA Documents Now',
    'PSA Serbilis was the PSA\'s online delivery service for civil registry documents. Now replaced by PSAHelpline.ph. Learn how to get your PSA Birth Certificate, CENOMAR, or Marriage Certificate today.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Serbilis' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA Serbilis: What It Was and How to Get PSA Documents Now',
          description: 'PSA Serbilis was the Philippine Statistics Authority\'s online delivery portal for civil registry documents. It has been replaced by PSAHelpline.ph.',
          url: 'https://ph-document.com/en/psa-serbilis/',
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
              name: 'What was PSA Serbilis?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA Serbilis (serbilis.psa.gov.ph) was the Philippine Statistics Authority\'s official online delivery service for civil registry documents including Birth Certificates, Marriage Certificates, Death Certificates, and CENOMAR. It has since been replaced by PSAHelpline.ph.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is PSA Serbilis still working?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA Serbilis is no longer the primary service. The PSA has transitioned to PSAHelpline.ph (psahelpline.ph) as its main online delivery platform. If you are trying to access old Serbilis links, please visit PSAHelpline.ph instead.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where can I order PSA documents online now?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can order PSA documents (Birth Certificate, CENOMAR, Marriage Certificate) through PSAHelpline.ph. Alternatively, use a document retrieval service to handle ordering, apostille, and international shipping on your behalf.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I still get my PSA document delivered internationally?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAHelpline.ph delivers within the Philippines. For international delivery, you need to arrange forwarding from a Philippine address, or use a retrieval service that includes DHL international shipping.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Serbilis — What It Was & How to Get Documents Now"
        subtitle="PSA Serbilis has been replaced. Here is how to get your PSA Birth Certificate, CENOMAR, or Marriage Certificate in 2026."
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        heading="What Was PSA Serbilis?"
        body="PSA Serbilis (serbilis.psa.gov.ph) was the Philippine Statistics Authority's first online delivery portal for civil registry documents — Birth Certificates, Marriage Certificates, Death Certificates, and CENOMAR. It allowed Filipinos to order documents online and have them delivered to a Philippine address without visiting a PSA outlet. The service has now been replaced by PSAHelpline.ph, which offers the same documents plus e-certificate (digital PDF) delivery."
      />

      <section className="py-4 px-4 max-w-3xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">
            <strong>PSA Serbilis is no longer the primary service.</strong> Please use <strong>PSAHelpline.ph</strong> to order PSA documents online. The old Serbilis URLs no longer process new orders.
          </p>
        </div>
      </section>

      <FeatureList
        heading="How to Get PSA Documents in 2026"
        items={[
          {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: 'Option 1 — PSAHelpline.ph (Replacement for Serbilis)',
            description: 'Visit psahelpline.ph to order Birth Certificates, CENOMAR, or Marriage Certificates online. Delivers within the Philippines. Identity verification required.',
          },
          {
            icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
            title: 'Option 2 — Document Retrieval Service (For Overseas Filipinos)',
            description: 'Use a retrieval service that handles PSA ordering, DFA Apostille, and DHL international shipping to your address. No Philippine address needed.',
          },
          {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: 'Option 3 — PSA Walk-In (Any PSA Outlet or SM Outlet)',
            description: 'Visit any PSA CRS outlet or SM Business Center in the Philippines with a valid ID. Documents released same day.',
          },
        ]}
      />

      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">PSA Serbilis vs PSAHelpline — Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">PSA Serbilis (old)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">PSAHelpline.ph (current)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Status</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Discontinued</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">Active</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Documents</td>
                <td className="border border-gray-200 px-4 py-2">Birth Cert, Marriage Cert, CENOMAR</td>
                <td className="border border-gray-200 px-4 py-2">Birth Cert, Marriage Cert, CENOMAR + e-certificate</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Delivery</td>
                <td className="border border-gray-200 px-4 py-2">Philippines only</td>
                <td className="border border-gray-200 px-4 py-2">Philippines only (use retrieval service for international)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">e-certificate (PDF)</td>
                <td className="border border-gray-200 px-4 py-2">No</td>
                <td className="border border-gray-200 px-4 py-2">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CtaBox
        heading="Need Your PSA Document With Apostille, Shipped Internationally?"
        body="We retrieve your PSA document, obtain the DFA Apostille, and ship via DHL Express worldwide. No Philippines address needed."
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <FaqSection
        items={[
          {
            question: 'What was PSA Serbilis?',
            answer: 'PSA Serbilis was the PSA\'s original online delivery portal for civil registry documents. It has been replaced by PSAHelpline.ph.',
          },
          {
            question: 'Is PSA Serbilis still working?',
            answer: 'PSA Serbilis is no longer the primary service. Use PSAHelpline.ph to order PSA documents online.',
          },
          {
            question: 'Where can I order PSA documents online now?',
            answer: 'Order through PSAHelpline.ph, or use a retrieval service for international delivery including apostille.',
          },
          {
            question: 'Can I still get my PSA document delivered internationally?',
            answer: 'PSAHelpline.ph delivers within the Philippines only. For international delivery, use a retrieval service that includes DHL shipping.',
          },
        ]}
      />

      <RelatedArticles
        articles={[
          { href: '/en/psa-online/', label: 'How to Order PSA Documents Online' },
          { href: '/en/psa-birth-certificate-cost/', label: 'PSA Birth Certificate Cost' },
          { href: '/en/cenomar/', label: 'CENOMAR — How to Get It' },
          { href: '/en/apostille/', label: 'DFA Apostille Service' },
        ]}
      />
    </PageLayout>
  );
}
