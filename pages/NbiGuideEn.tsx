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
    'NBI Clearance Application Support | Philippine Criminal Record Certificate',
    'NBI Clearance application support for Filipinos overseas. Renewal cases handled remotely via our Cebu team. First-time applicants: embassy fingerprint guidance provided. DFA Apostille + DHL shipping included.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Support' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance Application Support (+ DFA Apostille)',
        description: 'Renewal-case NBI Clearance handled remotely via our Cebu team. First-time applicants receive embassy fingerprint guidance. DFA Apostille + DHL shipping included. HIT cases supported.',
        url: 'https://ph-document.com/en/nbi-clearance/',
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
            description: 'NBI retrieval + DFA Apostille + DHL shipping worldwide (renewal cases)',
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
                text: 'All-inclusive from US$399 (NBI retrieval + DFA Apostille + DHL shipping). HIT resolution is included at no extra charge. See our Pricing page for the full breakdown.',
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
        title="NBI Clearance — Application Support & Shipping Worldwide"
        badges={['Renewal Cases Handled Remotely', 'First-Time: Embassy Guidance Included', 'Apostille + DHL Included']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        NBI Clearance is a criminal background check issued by the{' '}
        <a href="https://nbi.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine National Bureau of Investigation (NBI)</a>.
        {' '}Required for most visa and immigration applications in the US, Canada, Australia, UK, and Japan.
      </p>

      <SummaryBlock
        conclusion="Renewal cases handled remotely by our Cebu team. First-time applicants receive embassy fingerprint guidance. DFA Apostille + DHL shipping included."
        points={[
          'NBI Clearance is required for visa and immigration applications in the US, Canada, Australia, UK & more',
          'Renewal cases (NBI issued 2014+, no personal info change): our Cebu team handles the process remotely',
          'First-time applicants: we guide you through Philippine Embassy fingerprint registration in your country',
          'DFA Apostille + DHL Express shipping worldwide — HIT cases supported',
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
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI application support',
            description: 'Renewal cases: our Cebu team handles the NBI process remotely. First-time applicants: we guide you through embassy fingerprint registration and online application steps.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille at the Philippine Department of Foreign Affairs once your NBI Clearance is issued. Paper original included.',
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
          { title: 'Submit your inquiry with NBI status', description: 'Tell us your use case (K-1, CR-1, Canada PR, etc.), your last NBI issuance year, whether any personal info has changed, and any known HIT issues.' },
          { title: 'We confirm your case type and provide a quote', description: 'We check whether your case qualifies for remote processing (renewal) or requires embassy fingerprint registration (first-time/name change), and provide all-inclusive pricing upfront.' },
          { title: 'Processing begins based on your case type', description: 'Renewal: our Cebu team handles the NBI process remotely. First-time: we guide you through the Philippine Embassy appointment and fingerprint process, then handle the rest once the clearance is issued.' },
          { title: 'NBI Clearance (Apostilled) shipped to you via DHL', description: 'Once your clearance is issued and Apostilled, the original is shipped with tracking. Estimated total: 4–6 weeks (may vary for first-time cases).' },
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
          { q: 'How much does it cost?', a: 'All-inclusive from US$399 (NBI retrieval + DFA Apostille + DHL shipping). HIT resolution is included at no extra charge. See our Pricing page for the full breakdown.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: NBI takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'What if the NBI result shows a HIT?', a: 'A HIT means a record was found in the NBI database. This requires separate handling. Share your situation and we will advise on next steps.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'It depends on your situation. If you have a prior NBI Clearance issued in 2014 or later with no personal information changes, our Cebu team can handle it remotely — no Philippines trip needed. First-time applicants or those with name changes need to visit the Philippine Embassy or Consulate in your country for fingerprint registration. We provide step-by-step guidance for both paths.' },
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
