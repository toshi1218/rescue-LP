import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import RelatedArticles from '../components/RelatedArticles';

export default function PsaBirthCertEn() {
  useMeta(
    'PSA Birth Certificate — Official Philippine Birth Record | Philippine Document Service',
    'A PSA Birth Certificate is an official civil registry document from the Philippine Statistics Authority. Required for visas, immigration, and legal processes. We handle the online PSA application and DFA e-Apostille application on your behalf.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Online Application Service (+ DFA e-Apostille)',
        description: 'We handle your PSA Birth Certificate online application and DFA e-Apostille application on your behalf — in English, with payment handled for you. Required for visa and immigration applications in the US, Canada, Australia, UK & more.',
        url: 'https://ph-document.com/en/psa-birth-certificate/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '219',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '219',
            priceCurrency: 'USD',
            description: 'PSA online application + DFA e-Apostille application (all-inclusive) — pricing under review following DFA\'s March 2026 e-Apostille policy change',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case, covering the PSA online application and DFA e-Apostille application.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I order CENOMAR and Birth Certificate together?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Bundling multiple documents is common for K-1 and CR-1 petitions. We handle them together at no extra coordination cost.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Birth Certificate — Online Application &amp; e-Apostille, Handled For You"
        badges={['Online Application Handled', 'DFA e-Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        A PSA Birth Certificate is an official civil registry document issued by the{' '}
        <a href="https://psaserbilis.com.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine Statistics Authority (PSA Serbilis)</a>.
        {' '}It serves as primary proof of identity and citizenship for immigration, marriage, and naturalization applications.
      </p>

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Pricing &amp; Timeline</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">Document</dt>
              <dd className="font-medium text-gray-800">PSA Birth Certificate</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">Issued By</dt>
              <dd className="font-medium text-gray-800">Philippine Statistics Authority (PSA)</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">All-Inclusive Price</dt>
              <dd className="font-medium text-gray-800">Confirmed at consultation</dd>
              <dd className="text-gray-400 text-xs mt-1">PSA online application + DFA e-Apostille application</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">Estimated Timeline</dt>
              <dd className="font-medium text-gray-800">Depends on PSA/DFA processing</dd>
            </div>
          </dl>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-4">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">What's Included</div>
              <div className="px-4 py-3 font-bold text-center">Price</div>
            </div>
            {[
              { label: 'PSA Birth Certificate online application (input + payment)', price: 'included' },
              { label: 'DFA e-Apostille application', price: 'included' },
              { label: 'Total (all-inclusive)', price: 'Confirmed at consultation', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Urgent cases may incur an additional fee. Exact quote confirmed during free consultation.</p>
        </SectionDivider>
      </div>

      <SummaryBlock
        conclusion="We handle your PSA Birth Certificate online application and DFA e-Apostille application on your behalf — in English, no trip to the Philippines, no navigating government portals yourself."
        points={[
          'PSA Birth Certificate is required for nearly every visa and immigration case worldwide',
          'Since March 2026, DFA authenticates PSA documents with an electronic e-Apostille (a paper Apostille is no longer issued for PSA documents) — we handle that application too',
          'We complete the online forms and payment in English on your behalf; PSA delivers the document to you',
          'All-inclusive pricing: no hidden fees for the application or e-Apostille',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a visa or immigration application',
            description: 'Immigration authorities worldwide (USCIS, IRCC, Home Affairs, UKVI) require a PSA Birth Certificate with DFA authentication. We handle the online application and e-Apostille process.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed — and whether your authority accepts the e-Apostille — for your specific submission before we start.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Not comfortable with the government portals in English',
            description: 'We complete the PSA and DFA online applications and payment on your behalf. You just need to provide the applicant information.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? Paper or digital? We verify for your specific case so you do not pay for the wrong document."
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
            title: 'PSA Birth Certificate online application',
            description: 'We complete the Philippine Statistics Authority (PSA) online application form and payment on your behalf, in English.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA e-Apostille application',
            description: 'We handle the DFA e-Apostille (electronic) application at the Philippine Department of Foreign Affairs. Since March 2026, DFA no longer issues a paper Apostille for PSA documents.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Format guidance for your authority',
            description: 'We confirm what your specific immigration authority accepts (e-Apostille PDF, or a physical PSA original) before you order.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (K-1, CR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether e-Apostille is accepted by your authority and provide all-inclusive pricing.' },
          { title: 'We complete the PSA and DFA online applications', description: 'We handle the PSA application, payment, and DFA e-Apostille application on your behalf, in English.' },
          { title: 'Document delivered', description: 'PSA delivers your document; the DFA e-Apostille is delivered electronically for submission.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the PSA online application and DFA e-Apostille application.' },
          { q: 'How long does it take?', a: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Can I order CENOMAR and Birth Certificate together?', a: 'Yes. Bundling multiple documents is common for K-1 and CR-1 petitions. We handle them together at no extra coordination cost.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-late-registration/', title: 'PSA Record Missing or Error?', description: 'Late registration and correction — what to do when your PSA record has problems.' },
          { href: '/en/psa-birth-certificate-cost/', title: 'How Much Does a PSA Birth Certificate Cost?', description: 'Full cost breakdown including DFA Apostille and international shipping.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, Canada, Australia, UK, and Japan.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'Order Birth Certificate and CENOMAR together for K-1 applications.' },
        ]}
      />
    </PageLayout>
  );
}
