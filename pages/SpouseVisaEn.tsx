import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import GuaranteeBlock from '../components/GuaranteeBlock';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function SpouseVisaEn() {
  useMeta(
    `Philippine Documents for Spouse Visa [${SEO_YEAR}] — PSA, CENOMAR, NBI + Apostille`,
    `Which Philippine documents do you need for a spouse visa? PSA Marriage Certificate, CENOMAR, NBI Clearance + DFA Apostille. We retrieve and ship worldwide. Free quote.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Spouse Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Spouse Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for spouse visa applications worldwide — PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille. Ships via DHL.',
        url: 'https://ph-document.com/en/spouse-visa-documents/',
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
            description: 'Immigration Document Package — all documents + DFA Apostille + DHL worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What documents does NVC require for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by case. We confirm for your specific petition.',
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
                text: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Your Spouse Visa Petition"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="We retrieve all Philippine documents needed for your spouse visa and ship them Apostille-ready worldwide."
        points={[
          'PSA Marriage Certificate, Birth Certificate, NBI Clearance, and CENOMAR available',
          'DFA Apostille included so documents are accepted by immigration authorities worldwide',
          'We verify requirements for your specific visa type before starting',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Petitioner filing a spouse or partner visa',
            description: 'You are abroad; your Filipino spouse needs Philippine documents with DFA Apostille. We handle everything from the Philippines.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Need multiple documents for your submission',
            description: 'Marriage Certificate, Birth Certificate, CENOMAR — we retrieve all required documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format your authority requires',
            description: 'We confirm requirements for your specific case before starting — no guesswork, no wasted money.',
          },
        ]}
      />

      <CtaBox
        title="We confirm NVC requirements before we start"
        description="Requirements vary by case. We verify what your specific petition needs and quote everything together."
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
            title: 'PSA document retrieval',
            description: 'We retrieve all required PSA documents (Marriage Cert, Birth Cert, CENOMAR) in one flow.',
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

      <GuaranteeBlock
        badge="Peace-of-mind support"
        title="If it isn't accepted, we redo the retrieval at no service charge"
        lead="If your document is not accepted and has to be re-obtained, we do not charge our service fee again. You cover only the actual costs — the government fee and any reshipping of physical documents — and we retrieve the document in the correct form for you."
        items={[
          {
            label: 'No repeat service fee',
            detail: "We don't charge our handling fee again for the re-retrieval. You pay only actual costs, such as the government fee and reshipping.",
          },
          {
            label: 'Format switch covered',
            detail: 'If a digital submission is bounced and a physical original is required, we switch to retrieving the paper document (physical document cost and shipping apply).',
          },
          {
            label: 'Reasonable limit',
            detail: 'This no-charge redo applies once per case as a guideline.',
          },
        ]}
        note="※ This support does not guarantee that the receiving authority (e.g. US NVC, IRCC, Home Affairs, UKVI) will accept the document. Please confirm the required format (digital or paper) with the receiving authority before applying. Re-retrieval caused by a change on your side, or by incorrect information you provided, is not covered."
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (CR-1, IR-1, partner visa, spousal sponsorship, etc.) and your submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents does NVC require for a spouse visa?', a: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by case. We confirm for your specific petition.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
