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
import { SEO_YEAR } from '../lib/seoDate';
import RelatedArticles from '../components/RelatedArticles';

export default function PsaBirthCertEn() {
  useMeta(
    `PSA Birth Certificate + Apostille Service [${SEO_YEAR}]`,
    `Get a PSA Birth Certificate from the Philippines without flying there. We handle retrieval + DFA Apostille + DHL delivery to your door. Free quote.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve PSA Birth Certificate from the Philippines with DFA Apostille and ship worldwide via DHL. Required for visa and immigration applications in the US, Canada, Australia, UK & more.',
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
          price: '349',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '349',
            priceCurrency: 'USD',
            description: 'PSA retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
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
                text: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.',
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
        title="PSA Birth Certificate — Retrieved and Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
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
              <dd className="font-medium text-gray-800">USD $349</dd>
              <dd className="text-gray-400 text-xs mt-1">PSA + DFA Apostille + DHL shipping</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">Estimated Timeline</dt>
              <dd className="font-medium text-gray-800">4–6 weeks total</dd>
            </div>
          </dl>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-4">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">What's Included</div>
              <div className="px-4 py-3 font-bold text-center">Price</div>
            </div>
            {[
              { label: 'PSA Birth Certificate retrieval', price: 'included' },
              { label: 'DFA Apostille authentication', price: 'included' },
              { label: 'DHL international shipping (tracked)', price: 'included' },
              { label: 'Total (all-inclusive)', price: 'USD $349', bold: true },
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
        conclusion="We retrieve your PSA Birth Certificate with DFA Apostille and ship it to your address worldwide. No trip to the Philippines."
        points={[
          'PSA Birth Certificate is required for nearly every visa and immigration case worldwide',
          'DFA Apostille included so it is accepted by USCIS, IRCC, Home Affairs, UKVI & more',
          'Shipped via DHL Express directly to your address anywhere in the world',
          'All-inclusive pricing: no hidden fees for Apostille or shipping',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a visa or immigration application',
            description: 'Immigration authorities worldwide (USCIS, IRCC, Home Affairs, UKVI) require a PSA Birth Certificate with DFA Apostille. We handle the full process.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before we start — no guesswork.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'No contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
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
            title: 'PSA Birth Certificate retrieval',
            description: 'We apply to the Philippine Statistics Authority (PSA) and obtain the SECPA-printed original on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille at the Philippine Department of Foreign Affairs. Paper original included.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'Tracked international delivery directly to your door anywhere in the world. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (K-1, CR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery worldwide', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
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
