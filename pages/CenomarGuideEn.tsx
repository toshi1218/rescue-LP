import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';
import RelatedArticles from '../components/RelatedArticles';

export default function CenomarGuideEn() {
  useMeta(
    `Get CENOMAR from Abroad [${SEO_YEAR}] — Record & Authentication Options`,
    'Get CENOMAR from abroad in the format your receiving authority requests. We arrange the PSA record, electronic authentication when required, and separate paper delivery when requested.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: 'CENOMAR',
        alternateName: 'Certificate of No Marriage Record',
        description: 'CENOMAR is an official PSA record showing that no marriage record was found for the person searched. Whether it is requested, how recent it must be, and whether authentication is needed depend on the receiving authority and application stage.',
        inDefinedTermSet: 'https://ph-document.com/#glossary',
        },
        {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get a CENOMAR from Outside the Philippines',
        description: 'Step-by-step process to obtain CENOMAR from abroad, confirm the receiving authority’s format, and arrange electronic authentication or separate paper delivery when required.',
        totalTime: 'P42D',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '349',
        },
        step: [
          { '@type': 'HowToStep', name: 'Submit the Consultation Form', text: 'Share your visa type, the full name on the Philippine ID, and your target deadline. We confirm eligibility before anything starts.' },
          { '@type': 'HowToStep', name: 'Receive Your All-Inclusive Quote', text: 'We send a fixed quote covering PSA retrieval, DFA Apostille (if needed), and DHL shipping — no surprise costs.' },
          { '@type': 'HowToStep', name: 'We arrange the required PSA and DFA route', text: 'If authentication is required, the PSA e-Certificate and DFA e-Apostille are processed electronically. A SECPA paper certificate is ordered separately when requested.' },
          { '@type': 'HowToStep', name: 'Receive the correct digital or paper format', text: 'The electronic authenticated set is delivered digitally. A separately requested SECPA paper certificate is shipped with tracking.' },
        ],
        },
        {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Retrieval and Authentication Service',
        description: 'We arrange CENOMAR in the format required by the receiving authority, including electronic DFA e-Apostille or separate SECPA paper delivery when requested.',
        url: 'https://ph-document.com/en/cenomar/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'KR'],
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
              name: 'What does CENOMAR mean?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR stands for Certificate of No Marriage Record. It is an official document issued by the Philippine Statistics Authority (PSA) that certifies a Filipino citizen has no marriage record on file — proof that the person has never been married in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is CENOMAR used for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR may be requested for marriage, fiancé, spouse, or immigration procedures. The current checklist determines whether CENOMAR, a PSA Marriage Certificate, or another civil-status record is appropriate.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'All-inclusive from US$349 (PSA retrieval + DFA Apostille + DHL shipping). No hidden fees. See our Pricing page for the full breakdown.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Full-service cases are commonly estimated at 4–6 weeks, but timing depends on the PSA record, whether authentication is required, and whether a separate paper certificate must be shipped.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle rush orders?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Let us know your deadline and we will check if expedited processing is available.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need a physical Apostille or is e-Apostille OK?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Apostille requirements depend on the receiving authority and stage. We check the current official checklist before processing.',
              },
            },
          ],
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#faqsection-heading', "[id^='faqsec-panel-']"],
          },
        },
      ]}
    >
      <HeroBanner
        title="What Is CENOMAR? — Certificate of No Marriage Record Explained"
        badges={['Correct Format Confirmed', 'Digital or Paper Delivery', 'Approx. 4–6 Weeks']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="September 15, 2026"
      />

      <div className="max-w-2xl mx-auto px-4 mb-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <strong>CENOMAR stands for Certificate of No Marriage Record.</strong>{' '}
          It is an official document issued by the{' '}
          <a href="https://psa.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine Statistics Authority (PSA)</a>{' '}
          that certifies a Filipino citizen has no marriage record on file — in other words, proof that the person has never been married in the Philippines.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          CENOMAR may be requested for marriage, fiancé, spouse, or immigration procedures. The receiving authority’s current checklist determines the required civil-status record, acceptable issue date, document format, and whether authentication is needed.
        </p>
      </div>

      <SummaryBlock
        conclusion="We arrange the CENOMAR format required by the receiving authority, including e-Apostille only when authentication is requested."
        points={[
          'The quote covers the agreed PSA record, any required authentication, and delivery',
          'May be requested for marriage or immigration, depending on the current checklist',
          'You consult in English; our Cebu team handles all Philippine government offices',
          'Transparent pricing with no hidden fees or surprise add-ons',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Applying for a K-1 Fiancé Visa (USA)',
            description: 'Some K-1 and marriage procedures may request a CENOMAR. The required authentication and document date depend on the receiving authority.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filing for a CR-1 or IR-1 Spouse Visa (USA)',
            description: 'We handle the full document chain — PSA issuance, DFA Apostille, and international shipping.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada Spousal Sponsorship (IRCC)',
            description: 'Canadian requirements vary by application and authority. We verify whether a CENOMAR and authentication are requested before starting.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Australia Partner Visa / UK Spouse Visa',
            description: 'Home Affairs (Australia) and UKVI (UK) each have specific authentication requirements. We confirm before ordering.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Marriage Registration in UAE, Qatar & Gulf Countries',
            description: 'OFWs in the Gulf region often need CENOMAR for marriage registration at Philippine embassies or local civil authorities. Requirements vary by country — we verify before starting.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what you need?',
            description: 'Requirements vary by visa type and destination country. Consult us first and we will confirm exactly what to order.',
          },
        ]}
      />

      <CtaBox
        title="Not Sure If You Need an Apostille?"
        description="The required PSA and authentication format varies by authority and application stage. We confirm the current official checklist before you pay. All-inclusive from US$349."
        buttonText="Ask Us for Free"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR Retrieval',
            description: 'We order the official CENOMAR directly from the Philippine Statistics Authority (PSA) on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille Authentication',
            description: 'When authentication is required, we use the DFA route that matches the document and destination.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL International Shipping Worldwide',
            description: 'Your documents are shipped directly to your address worldwide with full tracking.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit the Consultation Form', description: 'Share your visa type, the full name on the Philippine ID, and your target deadline. We confirm eligibility before anything starts.' },
          { title: 'Receive Your All-Inclusive Quote', description: 'We send a fixed quote covering PSA retrieval, DFA Apostille (if needed), and DHL shipping — no surprise costs.' },
          { title: 'We arrange the required PSA and DFA route', description: 'If authentication is required, the PSA e-Certificate and DFA e-Apostille are processed electronically. A SECPA paper certificate is ordered separately when requested.' },
          { title: 'Receive the correct digital or paper format', description: 'The electronic authenticated set is delivered digitally. A separately requested SECPA paper certificate is shipped with tracking.' },
        ]}
      />

      <FeatureList
        heading="CENOMAR Requirements by Country"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'USA (K-1 & CR-1 visa) — Follow the current case checklist',
            description: 'Document age and authentication requirements vary by U.S. visa stage. We confirm the current USCIS, NVC, or embassy checklist before processing.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada, Australia, UK — Check the current authority checklist',
            description: 'IRCC, Home Affairs, and UKVI requirements depend on the application and document. Hague membership does not make Apostille mandatory for every filing.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Gulf countries — Country-specific legalization rules',
            description: 'Philippine nationals residing or working in the Gulf region may need CENOMAR for marriage registration at Philippine embassies or local civil authorities. Requirements vary by emirate or country — we confirm before starting.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What does CENOMAR mean?', a: 'CENOMAR stands for Certificate of No Marriage Record. It is issued by the Philippine Statistics Authority (PSA) and certifies that a Filipino citizen has no marriage record on file in the Philippines — essentially proof of single status.' },
          { q: 'What is a CENOMAR used for?', a: 'CENOMAR may be requested to show that no marriage record was found for marriage, fiancé, spouse, or immigration procedures. The receiving authority’s current checklist controls.' },
          { q: 'How much does it cost?', a: 'All-inclusive from US$349 (PSA retrieval + DFA Apostille + DHL shipping). No hidden fees. See our Pricing page for the full breakdown.' },
          { q: 'How long does it take?', a: 'Full-service cases are commonly estimated at 4–6 weeks, but timing depends on the PSA record, required authentication, and whether a separate paper certificate must be shipped.' },
          { q: 'Can you handle rush orders?', a: 'Yes. Let us know your deadline and we will check if expedited processing is available.' },
          { q: 'Do I need a physical Apostille or is e-Apostille OK?', a: 'It depends on the destination and receiving authority. For PSA e-Certificates used in Apostille Convention countries, DFA currently issues an e-Apostille. We confirm the accepted route before processing.' },
          { q: 'I was previously married. Do I still need a CENOMAR?', a: 'If your previous marriage was annulled or dissolved, CENOMAR may still be required but will reflect your current civil status. For previously married applicants, additional documents proving dissolution of prior marriage may also be needed. Consult us for your specific case.' },
          { q: 'I am a dual citizen (Filipino and another nationality). Can I get CENOMAR?', a: 'Yes. CENOMAR is based on your records in the PSA database, tied to your Philippine civil registration. Dual citizenship status does not prevent you from obtaining CENOMAR. We will confirm the correct name to use based on your PSA records.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'K-1, CR-1, Canada, or Australia? Find out which document your visa type actually requires.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR Validity & Timing', description: 'CENOMAR is valid for 6 months. We time retrieval to meet your deadline.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist of Philippine documents needed per visa type.' },
        ]}
      />
    </PageLayout>
  );
}
