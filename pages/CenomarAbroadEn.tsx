import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { Globe, Clock, CheckCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function CenomarAbroadEn() {
  useMeta(
    `How to Get CENOMAR From Abroad [${SEO_YEAR}] — No Philippines Trip Needed`,
    `Get your PSA CENOMAR from outside the Philippines. For spouse visa, naturalization, and marriage procedures in Japan. We retrieve, apostille, and ship to Japan. Free quote.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'How to Get CENOMAR From Abroad' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'How to Get CENOMAR From Abroad',
          description: 'Step-by-step guide for Filipinos living overseas who need a PSA CENOMAR without traveling back to the Philippines.',
          url: 'https://ph-document.com/en/how-to-get-cenomar-abroad/',
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
              name: 'Can I get CENOMAR while living abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. You can order PSA CENOMAR fully online through PSAHelpline.ph or use a document retrieval service. No trip to the Philippines is required.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get CENOMAR from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically 2–4 weeks including PSA processing and international DHL shipping. Rush options may shorten the timeline for the apostille step.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need to apostille my CENOMAR for use abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, for most immigration and legal purposes outside the Philippines, CENOMAR must carry a DFA Apostille. Countries that accept apostilles under the Hague Convention do not require additional embassy legalization.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I use an e-CENOMAR (PSA e-certificate) abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the receiving country and institution. Some accept the PSA e-certificate with e-Apostille; others still require a physical SECPA copy. Always confirm with your visa authority before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if my name or birthdate on CENOMAR is wrong?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Errors on PSA records require a correction petition at the Local Civil Registry (LCR). This process takes several months. Contact us for guidance before ordering if you suspect a discrepancy.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="How to Get CENOMAR From Abroad"
        subtitle="No Philippines trip needed — step-by-step guide for OFWs and Filipinos living overseas"
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        heading="What Is CENOMAR?"
        body="CENOMAR (Certificate of No Marriage Record) is an official PSA document that proves a Filipino citizen has no registered marriage in the Philippines. It is required for K-1 fiancé visas, CR-1/IR-1 spouse visas, marriage registration abroad, and many other immigration and legal purposes."
      />

      <FeatureList
        heading="3 Ways to Get CENOMAR From Outside the Philippines"
        items={[
          {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: 'Option 1 — Order Online via PSAHelpline.ph',
            description: 'Visit psahelpline.ph, complete identity verification (KYC + liveness check), and order delivery to a Philippine address. You will then need someone locally to receive and apostille the document.',
          },
          {
            icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
            title: 'Option 2 — Use a Document Retrieval Service',
            description: 'A licensed service (like ours) handles PSA retrieval, DFA Apostille, and international DHL shipping door-to-door. Nothing for you to do except submit the request form.',
          },
          {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: 'Option 3 — Authorize a Representative in the Philippines',
            description: 'Provide a notarized Special Power of Attorney (SPA) to a trusted person in the Philippines who can queue at PSA on your behalf. Slowest option but no service fee.',
          },
        ]}
      />

      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step: How We Retrieve Your CENOMAR</h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Submit your request</strong> — Fill out our online form with your full name, date of birth, and place of birth.</li>
          <li><strong>Identity verification</strong> — We confirm your identity using PSA's KYC system to prevent unauthorized access.</li>
          <li><strong>PSA retrieval</strong> — We order your CENOMAR through official PSA channels (3–7 business days).</li>
          <li><strong>DFA Apostille</strong> — We bring the physical CENOMAR to DFA for authentication (3–5 business days).</li>
          <li><strong>International shipping</strong> — We ship via DHL Express to your address worldwide (3–7 business days).</li>
        </ol>
        <p className="mt-6 text-sm text-gray-500">Total estimated time: 2–4 weeks. Rush processing available — contact us for details.</p>
      </section>

      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Do You Need an Apostille?</h2>
        <p className="text-gray-700 mb-3">
          For most immigration purposes — K-1 visa, CR-1, Australian partner visa, UK spouse visa, Canadian spousal sponsorship — <strong>yes, you need a DFA Apostille</strong>. The Philippines is a signatory to the Hague Apostille Convention, so no additional embassy legalization is needed in most countries.
        </p>
        <p className="text-gray-700">
          If your destination country is <em>not</em> a Hague Convention member, you may need DFA authentication plus embassy legalization. Contact us and we will advise based on your specific country.
        </p>
      </section>

      <CtaBox
        heading="Ready to Order Your CENOMAR?"
        body="We handle everything — PSA retrieval, DFA Apostille, and DHL shipping to your door. Free quote, no hidden fees."
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <FaqSection
        items={[
          {
            question: 'Can I get CENOMAR while living abroad?',
            answer: 'Yes. You can order PSA CENOMAR fully online through PSAHelpline.ph or use a document retrieval service. No trip to the Philippines is required.',
          },
          {
            question: 'How long does it take to get CENOMAR from abroad?',
            answer: 'Typically 2–4 weeks including PSA processing and international DHL shipping. Rush options may shorten the timeline for the apostille step.',
          },
          {
            question: 'Do I need to apostille my CENOMAR for use abroad?',
            answer: 'Yes, for most immigration and legal purposes outside the Philippines, CENOMAR must carry a DFA Apostille.',
          },
          {
            question: 'Can I use an e-CENOMAR (PSA e-certificate) abroad?',
            answer: 'It depends on the receiving country and institution. Always confirm with your visa authority before ordering.',
          },
          {
            question: 'What if my name or birthdate on CENOMAR is wrong?',
            answer: 'Errors require a correction petition at the Local Civil Registry. Contact us for guidance before ordering.',
          },
        ]}
      />

      <RelatedArticles
        articles={[
          { href: '/en/cenomar/', label: 'CENOMAR — What It Is & How to Get It' },
          { href: '/en/cenomar-meaning/', label: 'CENOMAR Meaning Explained' },
          { href: '/en/cenomar-validity/', label: 'How Long Is CENOMAR Valid?' },
          { href: '/en/apostille/', label: 'DFA Apostille Service' },
        ]}
      />
    </PageLayout>
  );
}
