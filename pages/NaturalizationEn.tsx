import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NaturalizationEn() {
  useMeta(
    'Naturalization Document Service [March 2026] | PSA & NBI',
    'Applying for citizenship or naturalization and need Philippine civil documents? We retrieve PSA Birth Certificate, NBI Clearance + DFA Apostille and ship to your address worldwide via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Naturalization Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Citizenship & Naturalization (PSA + NBI + Apostille)',
        description: 'We retrieve PSA Birth Certificate, NBI Clearance, and other Philippine civil documents with DFA Apostille for citizenship and naturalization applications worldwide. Ships via DHL.',
        url: 'https://ph-document.com/en/naturalization-guide',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Immigration Document Package — PSA + NBI + DFA Apostille + DHL worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents does USCIS require for naturalization?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Requirements vary by case. Typically Birth Certificate and/or Marriage Certificate with DFA Apostille. We confirm for your specific application.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your USCIS deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Citizenship & Naturalization — Retrieved and Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      <SummaryBlock
        conclusion="Applying for citizenship or naturalization? We retrieve all Philippine civil documents your authority requires."
        points={[
          'PSA Birth Certificate, NBI Clearance, and other documents with DFA Apostille',
          'Ready for USCIS, IRCC, Home Affairs, UKVI and other authorities',
          'We confirm exact requirements for your citizenship application',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Applying for citizenship or naturalization',
            description: 'Immigration authorities may require Philippine civil documents with DFA Apostille as part of your citizenship application. We handle retrieval and authentication.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Immigration attorney or paralegal',
            description: 'We support legal professionals handling naturalization cases. We confirm required documents and coordinate retrieval.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what your authority requires',
            description: 'Requirements vary by country and case. We confirm what your specific citizenship application needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm USCIS requirements before we start"
        description="Birth Certificate, Marriage Certificate, NBI Clearance — we verify what your specific citizenship case needs and quote everything together."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA document retrieval',
            description: 'We retrieve all required PSA documents in one coordinated flow from our Cebu office.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'All documents shipped together with tracking to your address. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your citizenship application status and your submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents are required for citizenship or naturalization?', a: 'Requirements vary by country and case. Typically PSA Birth Certificate and/or NBI Clearance with DFA Apostille. We confirm for your specific application.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your submission deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
