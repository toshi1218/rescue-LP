import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

export default function CenomarApostilleEn() {
  useMeta(
    'CENOMAR Apostille Service [April 2026] | We Handle It',
    'Not sure if your CENOMAR needs DFA Apostille? We advise and handle retrieval with or without Apostille. Free consultation for marriage and visa applicants.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Apostille Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR DFA Apostille Authentication Service',
        description: 'We coordinate the applicable DFA authentication for CENOMAR, manage the online application, and confirm your authority’s current format requirements. Physical CENOMAR on Security Paper can be shipped via DHL worldwide.',
        url: 'https://ph-document.com/en/cenomar-apostille/',
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
            description: 'CENOMAR retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
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
              name: 'Does USCIS accept e-Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'U.S. requirements differ by visa type and stage. Confirm whether the current USCIS, NVC, or embassy checklist requests a PSA physical copy and whether authentication is required. For a PSA e-Certificate used in an Apostille Convention country, DFA issues a digital e-Apostille.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR with DFA Apostille — Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Need DFA Apostille on your CENOMAR? We handle the entire process from PSA to Apostille and ship to your door worldwide."
        points={[
          'DFA Apostille is required for CENOMAR to be accepted by immigration authorities worldwide',
          'We retrieve CENOMAR from PSA and authenticate at DFA in one seamless process',
          'Applicable DFA e-Apostille process, confirmed against the receiving authority’s current requirements',
          'No need to visit the Philippines or coordinate with multiple agencies',
        ]}
        ctaText="Get a Free Quote"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a K-1 or CR-1 visa petition',
            description: 'U.S. document and authentication requirements differ by application stage. We verify the current official checklist before processing.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure if Apostille is required',
            description: 'Requirements vary by submission authority. We confirm what your specific case needs before we start.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Living abroad with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally — no need for you to arrange anything in the Philippines.',
          },
        ]}
      />

      <CtaBox
        title="Not sure what you need? Start here."
        description="We confirm whether Apostille is required for your case before quoting. No guesswork, no wasted money."
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
            title: 'PSA CENOMAR retrieval',
            description: 'We apply to the Philippine Statistics Authority (PSA) and obtain the CENOMAR on your behalf.',
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
          { q: 'Do immigration authorities accept e-Apostille?', a: 'Acceptance depends on the authority and application stage. For a PSA e-Certificate used in an Apostille Convention country, DFA issues a digital e-Apostille. Non-member destinations use a physical Certificate of Authentication and may require embassy attestation. We confirm the route before processing.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'PSA CENOMAR + DFA Apostille + DHL worldwide.' },
          { href: '/en/cenomar-validity/', title: 'How Long Is CENOMAR Valid?', description: 'CENOMAR validity for K-1, CR-1, and other visa types.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'Which one does your visa actually require?' },
          { href: '/en/apostille/', title: 'DFA Apostille Guide', description: 'What DFA Apostille is, why it is required, and how we obtain it.' },
        ]}
      />
    </PageLayout>
  );
}
