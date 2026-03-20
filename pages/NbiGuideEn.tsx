import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import RelatedArticles from '../components/RelatedArticles';

export default function NbiGuideEn() {
  useMeta(
    'What is NBI Clearance? Philippine Criminal Record Certificate | Philippine Document Service',
    'NBI Clearance is a criminal record certificate from the Philippine National Bureau of Investigation. Required for visas, immigration, and employment. We handle retrieval and DFA Apostille.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve NBI Clearance from the Philippines with DFA Apostille and ship worldwide via DHL. Required for immigration and visa applications in the US, Canada, Australia, UK & more. HIT cases handled.',
        url: 'https://ph-document.com/en/nbi-clearance',
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
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. NBI retrieval, DFA Apostille, and DHL shipping are all included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total: NBI takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if the NBI result shows a HIT?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A HIT means a record was found in the NBI database. This requires separate handling. Share your situation and we will advise on next steps.',
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
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance — Retrieved and Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        NBI Clearance is a criminal background check issued by the Philippine National Bureau of Investigation. Required for most visa and immigration applications worldwide.
      </p>

      <SummaryBlock
        conclusion="We retrieve NBI Clearance with DFA Apostille and ship it to your address worldwide. HIT cases handled."
        points={[
          'NBI Clearance is required for visa and immigration applications in the US, Canada, Australia, UK & more',
          'Our Cebu team handles fingerprint appointment and NBI office processing',
          'If HIT (MATCH FOUND) occurs, we manage the resolution process',
          'DFA Apostille + DHL Express shipping worldwide included in one price',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a visa or immigration application',
            description: 'Immigration authorities worldwide (USCIS, IRCC, Home Affairs, UKVI) require NBI Clearance with DFA Apostille. We handle the full process.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'No contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? We verify for your specific case so you do not pay for the wrong document."
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
            title: 'NBI Clearance retrieval',
            description: 'We handle the NBI application and retrieval on your behalf from our Cebu office.',
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

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="NBI retrieval, DFA Apostille, and DHL shipping are all included in one quoted price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (K-1, CR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles NBI retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery worldwide', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FeatureList
        heading="Common Issues We Help Resolve"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'NBI HIT (MATCH FOUND)',
            description: 'A HIT does not always mean a criminal record — it often means someone with the same name has a record. We handle HIT verification and resolution so your clearance can be issued.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI expired before your visa deadline',
            description: 'NBI Clearance is valid for 1 year, but many immigration authorities require it within 6 months. If your NBI is expiring, we handle re-retrieval and time it for your submission date.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Getting NBI while living overseas',
            description: 'OFWs and Filipinos abroad can get NBI Clearance without returning to the Philippines. Our Cebu team acts as your authorized representative at the NBI office.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Name discrepancy between NBI and passport',
            description: 'A name mismatch between your NBI document and passport can cause immigration problems. We advise on how to address discrepancies before they become issues at the interview.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. NBI retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: NBI takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'What if the NBI result shows a HIT?', a: 'A HIT means a record was found in the NBI database. This requires separate handling. Share your situation and we will advise on next steps.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'Yes. With an authorized representative in the Philippines, NBI Clearance can be obtained remotely. Our Cebu team handles enrollment and retrieval on your behalf. No trip needed.' },
          { q: 'What if my name on the NBI does not match my passport?', a: 'Name discrepancies can cause problems at immigration interviews. The NBI document must match your passport exactly. Share the discrepancy details and we will advise on the appropriate correction step.' },
          { q: 'Is NBI Clearance the same as a police clearance?', a: 'No. NBI Clearance is a national-level criminal background check from the National Bureau of Investigation. Police clearance is a local-level document from your local police station. Immigration authorities typically require NBI Clearance, not local police clearance.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance-overseas/', title: 'NBI Clearance from Overseas', description: 'OFWs and Filipinos abroad: get NBI without returning to the Philippines.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'MATCH FOUND result? We handle verification and resolution.' },
          { href: '/en/nbi-validity/', title: 'NBI Validity & Timing', description: 'How long is NBI Clearance valid and when to request it.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, spouse visa, and more.' },
        ]}
      />
    </PageLayout>
  );
}
