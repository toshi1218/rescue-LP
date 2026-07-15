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

export default function NbiClearanceOverseasEn() {
  useMeta(
    'NBI Clearance from Overseas — How OFWs and Filipinos Abroad Get It | Philippine Document Service',
    'Living outside the Philippines and need NBI Clearance? Renewal cases (prior NBI 2014+) can be handled remotely; first-time applicants complete fingerprinting at a Philippine Embassy. Once issued, we add the DFA Apostille and ship it worldwide via DHL.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance from Overseas' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'NBI Clearance Support for Overseas Filipinos (OFW)',
          description: 'NBI Clearance support for Filipinos living abroad. Renewal cases (prior NBI issued 2014 or later, no info change) can be handled remotely by our Cebu team; first-time applicants complete fingerprinting at a Philippine Embassy or Consulate. Once the NBI is issued, we add the DFA Apostille and ship it worldwide via DHL.',
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
              description: 'NBI processing support + DFA Apostille + DHL shipping worldwide (renewal cases; first-time requires embassy fingerprinting by the applicant)',
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
                text: 'It depends on your case. If you have a prior NBI Clearance issued in 2014 or later with no personal-information changes, our Cebu team can handle the renewal remotely — no trip needed. First-time applicants (and name-change or HIT cases) must appear in person for fingerprints: either at a Philippine Embassy or Consulate in your country, or at an NBI office in the Philippines. We cannot take your fingerprints for you, but we guide you through it and then add the DFA Apostille and ship the original to you worldwide.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get NBI Clearance through the Philippine consulate or embassy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes — many Philippine Embassies and Consulates offer NBI fingerprinting for citizens abroad, and this is the standard route for first-time applicants who cannot travel to the Philippines. Availability and processing times vary by post. We guide you through the appointment and steps, then handle the DFA Apostille and shipping once your clearance is issued.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if my NBI result shows a HIT while I am overseas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A HIT requires the applicant to appear in person at an NBI office in the Philippines to verify identity — this step cannot be done by a representative. Share your situation and we will advise on the resolution process and timeline, and handle the DFA Apostille and shipping once your NBI is issued.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does NBI Clearance take when getting it from overseas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For renewal cases, approximately 4–6 weeks: NBI processing 2–3 weeks, DFA Apostille 1–2 weeks, DHL shipping 3–5 business days. First-time applicants depend on Philippine Embassy appointment availability, and HIT cases take longer depending on resolution requirements.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance from Overseas — Often Without a Trip to the Philippines"
        badges={['OFW & Overseas Filipinos', 'Renewal Cases Handled Remotely', 'Ships Worldwide via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="You often do not need to fly back to the Philippines. Renewal cases (prior NBI issued 2014 or later) can be handled remotely by our Cebu team, while first-time applicants complete fingerprinting at a Philippine Embassy. Once the NBI is issued, we add the DFA Apostille and ship it to you."
        points={[
          'Renewal cases (prior NBI 2014+, clean record, no info change): handled remotely by our Cebu team',
          'First-time applicants: fingerprinting in person at a Philippine Embassy/Consulate in your country',
          'We add DFA Apostille + DHL worldwide shipping once your NBI is issued',
          'Required for immigration in the US, Canada, Australia, UK, Japan and more',
        ]}
        ctaText="Get Started — Free Consultation"
      />

      <FeatureList
        heading="Your Options for Getting NBI Clearance Abroad"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Option 1: NBI online renewal (existing account, clean record)',
            description: 'If you have a prior NBI Clearance issued in 2014 or later with no personal-info changes, it can be renewed online without new fingerprints. Delivery is to a Philippine address, so you still need someone to receive and forward it — which our Cebu team can do for you.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Option 2: Philippine Embassy / Consulate (first-time applicants)',
            description: 'First-time applicants must give their fingerprints in person. Many Philippine Embassies and Consulates offer NBI fingerprinting for citizens abroad — this lets you get NBI without flying to the Philippines. Availability and wait times vary by post.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Option 3: Our document service (renewal remote / first-time guided)',
            description: 'For renewal cases we handle the NBI remotely through our Cebu office. For first-time applicants we guide you through the embassy fingerprinting steps. Either way, once your NBI is issued we add the DFA Apostille and ship the original to you. Note: first-time fingerprints must be done by you in person — we cannot do biometric enrollment on your behalf.',
          },
        ]}
      />

      <CtaBox
        title="Renewal handled remotely · First-time guided · Apostille + shipping included"
        description="Our Cebu team handles renewal-case NBI remotely and guides first-time applicants through Philippine Embassy fingerprinting. Once the clearance is issued, we add the DFA Apostille and ship it worldwide via DHL. You provide the applicant information; first-time fingerprints are done by you in person."
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
            description: 'Many countries require NBI Clearance for OFW employment and residency applications. We help you get it — remotely for renewals, or via embassy fingerprinting for first-timers — without returning to the Philippines where possible.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Filipinos on K-1, CR-1, spouse visa applications',
            description: 'Immigration authorities (USCIS, IRCC, Home Affairs, UKVI, Immigration Bureau Japan) all require NBI Clearance with DFA Apostille. Once your clearance is issued, we handle the Apostille and shipping.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Filipinos applying for permanent residency or naturalization abroad',
            description: 'Citizenship and PR applications typically require NBI Clearance as a criminal background check. We guide you to the right route and arrange DFA Apostille for use internationally.',
          },
        ]}
      />

      <StepList
        heading="How It Works — From Overseas"
        steps={[
          { title: 'Send us the applicant information and NBI status', description: 'Share the full legal name, date and place of birth, and whether the applicant has a prior NBI (issued 2014 or later) or is applying for the first time.' },
          { title: 'Renewal handled remotely · First-time: embassy fingerprinting', description: 'Renewal cases (prior NBI 2014+, no info change) are processed remotely by our Cebu team. First-time applicants complete fingerprinting at a Philippine Embassy/Consulate — we guide you through the appointment and steps.' },
          { title: 'DFA Apostille authentication', description: 'Once NBI Clearance is issued, we submit it to the DFA for physical Apostille certification (if required for your destination country).' },
          { title: 'DHL delivery worldwide', description: 'The original documents are shipped to your address with full tracking. Estimated total for renewal cases: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'It depends on your case. Renewal cases (prior NBI issued 2014 or later, no info change) can be handled remotely by our Cebu team. First-time applicants must complete fingerprinting in person at a Philippine Embassy/Consulate (or an NBI office in the Philippines). We guide you, then add the DFA Apostille and ship the original to you worldwide.' },
          { q: 'Can I get NBI Clearance through the Philippine consulate or embassy?', a: 'Yes — many consulates and embassies offer NBI fingerprinting for citizens abroad, and it is the standard route for first-time applicants. Availability and wait times vary by post. We guide you through it and handle the Apostille and shipping afterward.' },
          { q: 'What if my NBI result shows a HIT while I am overseas?', a: 'A HIT requires the applicant to appear in person at an NBI office in the Philippines — this cannot be done by a representative. Share your situation and we will advise on the resolution process, and handle the DFA Apostille and shipping once your NBI is issued.' },
          { q: 'How long does NBI Clearance take from overseas?', a: 'For renewal cases, approximately 4–6 weeks: NBI processing 2–3 weeks, DFA Apostille 1–2 weeks, DHL shipping 3–5 business days. First-time cases depend on embassy appointment availability; HIT cases take longer.' },
          { q: 'Does NBI Clearance need DFA Apostille when used for immigration abroad?', a: 'Yes, for most immigration purposes. We include DFA Apostille as standard in our service. If your specific authority does not require it, we will let you know before we start.' },
          { q: 'How long is NBI Clearance valid for overseas use?', a: 'NBI Clearance is valid for 1 year from the issue date, but many immigration authorities require it issued within 6 months. We time the process to match your submission deadline.' },
        ]}
        ctaTitle="Share your situation and we will guide your next step"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Complete Guide', description: 'Everything about NBI Clearance: what it is, how to get it, what is included.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution Service', description: 'MATCH FOUND result? We advise on HIT verification and resolution.' },
          { href: '/en/nbi-validity/', title: 'NBI Clearance Validity & Timing', description: 'How long is NBI Clearance valid and when to get it for your visa deadline.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which Philippine documents you need for K-1, CR-1, spouse visa, and more.' },
        ]}
      />
    </PageLayout>
  );
}
