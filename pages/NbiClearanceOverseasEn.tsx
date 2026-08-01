import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { Globe, AlertTriangle, FileCheck, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function NbiClearanceOverseasEn() {
  useMeta(
    `NBI Clearance from Overseas [${SEO_YEAR_MONTH_EN}] — No Trip Needed`,
    `Need NBI Clearance while living abroad? We retrieve it without you returning to the Philippines. HIT cases handled. DFA Apostille included. Free consultation.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance from Overseas' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'NBI Clearance Retrieval for Overseas Filipinos (OFW)',
          description: 'We retrieve NBI Clearance from the Philippines on behalf of Filipinos living abroad. No return trip needed. DFA Apostille included. HIT cases handled. Ships worldwide via DHL.',
          url: 'https://ph-document.com/en/nbi-clearance-overseas/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '399',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '399',
              priceCurrency: 'USD',
              description: 'NBI retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I get NBI Clearance without going back to the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. With an authorized representative in the Philippines, NBI Clearance can be obtained without the applicant physically being present. We act as your authorized representative through our Cebu office. The document is then shipped to you worldwide.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get NBI Clearance through the Philippine consulate or embassy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Some Philippine consulates offer NBI Clearance assistance for OFWs, but availability is limited, wait times are long, and not all consulates provide this service. Our proxy service is typically faster and available regardless of your location.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if my NBI result shows a HIT while I am overseas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A HIT requires in-person verification at an NBI office in the Philippines. We handle this on your behalf through our local team. Share your situation and we will advise on the resolution process and timeline.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does NBI Clearance take when getting it from overseas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks: NBI processing 2–3 weeks, DFA Apostille 1–2 weeks, DHL shipping 3–5 business days. HIT cases take longer depending on resolution requirements.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance from Overseas — No Trip to the Philippines Needed"
        badges={['OFW & Overseas Filipinos', 'HIT Cases Handled', 'Ships Worldwide via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="You do not need to fly back to the Philippines to get NBI Clearance. We retrieve it through our local team and ship it directly to you."
        points={[
          'Our Cebu-based team acts as your authorized representative at NBI',
          'Full service: NBI retrieval + DFA Apostille + DHL worldwide shipping',
          'HIT (MATCH FOUND) cases handled without you returning to the Philippines',
          'Required for immigration in the US, Canada, Australia, UK, Japan and more',
        ]}
        ctaText="Get Started — Free Consultation"
      />

      <FeatureList
        heading="Your Options for Getting NBI Clearance Abroad"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Option 1: Philippine Consulate / Embassy (limited)',
            description: 'Some consulates offer NBI assistance for OFWs. However, not all consulates provide this service, availability is limited, and wait times can be months. This option is not reliable for urgent visa deadlines.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Option 2: Online NBI System (limited for overseas)',
            description: 'The NBI online portal requires a Philippine address for delivery and biometric enrollment at an NBI center — neither of which is practical when you are abroad.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Option 3: Authorized Representative in the Philippines (recommended)',
            description: 'The most reliable method. An authorized representative handles NBI application, biometric enrollment, and retrieval on your behalf. We provide this service through our Cebu office — no personal contacts in the Philippines needed.',
          },
        ]}
      />

      <CtaBox
        title="We are your authorized representative in the Philippines"
        description="Our Cebu team handles NBI enrollment, retrieval, DFA Apostille, and international shipping. You provide the applicant information — we do everything else."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: 'OFWs (Overseas Filipino Workers) applying for residency or new employment',
            description: 'Many countries require NBI Clearance for OFW employment and residency applications. We help you get it without returning to the Philippines.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Filipinos on K-1, CR-1, spouse visa applications',
            description: 'NBI Clearance and authentication requirements vary by country and procedure. We confirm the current checklist before processing.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Filipinos applying for permanent residency or naturalization abroad',
            description: 'Citizenship and PR applications typically require NBI Clearance as a criminal background check. We retrieve it and arrange DFA Apostille for use internationally.',
          },
        ]}
      />

      <StepList
        heading="How It Works — From Overseas"
        steps={[
          { title: 'Send us the applicant information', description: 'Share the full legal name, date of birth, and place of birth as they appear on the Philippine passport or PSA documents.' },
          { title: 'We handle NBI enrollment and retrieval in the Philippines', description: 'Our Cebu team manages the NBI appointment, biometric enrollment, and document retrieval on your behalf.' },
          { title: 'DFA Apostille authentication', description: 'Once NBI Clearance is issued, we submit it to the DFA for physical Apostille certification (if required for your destination country).' },
          { title: 'DHL delivery worldwide', description: 'The original documents are shipped to your address with full tracking. Estimated total: 4–6 weeks from start.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'Yes. With an authorized representative in the Philippines, NBI Clearance can be obtained without the applicant being physically present. We act as your authorized representative through our Cebu office.' },
          { q: 'Can I get NBI Clearance through the Philippine consulate or embassy?', a: 'Some consulates offer NBI assistance, but availability is limited and wait times can be months. Our proxy service is typically faster and available regardless of your location.' },
          { q: 'What if my NBI result shows a HIT while I am overseas?', a: 'A HIT requires in-person verification at an NBI office in the Philippines. We handle this on your behalf through our local team. Share your situation and we will advise on the resolution process.' },
          { q: 'How long does NBI Clearance take from overseas?', a: 'Approximately 4–6 weeks: NBI processing 2–3 weeks, DFA Apostille 1–2 weeks, DHL shipping 3–5 business days. HIT cases take longer.' },
          { q: 'Does NBI Clearance need DFA Apostille when used for immigration abroad?', a: 'Yes, for most immigration purposes. We include DFA Apostille as standard in our service. If your specific authority does not require it, we will let you know before we start.' },
          { q: 'How long is NBI Clearance valid for overseas use?', a: 'NBI Clearance is valid for 1 year from the issue date, but many immigration authorities require it issued within 6 months. We time retrieval to match your submission deadline.' },
        ]}
        ctaTitle="Share your situation and we will guide your next step"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Complete Guide', description: 'Everything about NBI Clearance: what it is, how to get it, what is included.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution Service', description: 'MATCH FOUND result? We handle HIT verification and resolution.' },
          { href: '/en/nbi-validity/', title: 'NBI Clearance Validity & Timing', description: 'How long is NBI Clearance valid and when to get it for your visa deadline.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which Philippine documents you need for K-1, CR-1, spouse visa, and more.' },
        ]}
      />
    </PageLayout>
  );
}
