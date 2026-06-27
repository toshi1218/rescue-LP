import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Clock, AlertCircle, Calendar } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_EN } from '../lib/seoDate';

export default function K1VisaDocsEn() {
  useMeta(
    `K-1 Fiancé Visa: Philippine Documents Checklist + Apostille ${SEO_TITLE_BADGE_EN}`,
    'Complete checklist of Philippine documents for a K-1 fiancé visa: CENOMAR, PSA Birth Certificate, NBI Clearance + DFA Apostille. We retrieve and ship from the Philippines via DHL. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'K-1 Fiancé Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'K-1 Fiancé Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for a K-1 fiancé visa — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. USCIS-ready. Ships to your US address via DHL.',
        url: 'https://ph-document.com/en/k1-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'K-1 Document Package — all documents + DFA Apostille + DHL to USA (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents does USCIS require for K-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The standard set is CENOMAR (Certificate of No Marriage Record), PSA Birth Certificate, and NBI Clearance — all with DFA Apostille. Your fiancé brings the originals to the US Embassy Manila interview. We retrieve and authenticate all three.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why does the K-1 visa require CENOMAR instead of a Marriage Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Because the K-1 is a fiancé visa — you are not yet married. CENOMAR proves your Filipino fiancé(e) has no existing marriage record in the Philippines, confirming they are legally single. The Marriage Certificate is only required later, once you are married and filing for CR-1/IR-1 or I-485.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the CFO counseling requirement for K-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Commission on Filipinos Overseas (CFO) requires all Filipinos departing on a fiancé visa to attend a Guidance and Counseling Program (GCP) before leaving the Philippines. After completing the seminar, a CFO sticker or certificate is issued and placed in the passport. Philippine immigration officers check for it at departure — your fiancé cannot board without it. We can help coordinate CFO scheduling alongside document retrieval.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is CENOMAR valid for the K-1 interview?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR must be issued within 6 months of submission to the US Embassy. Since the K-1 process can take 12–18 months from I-129F filing to interview, ordering CENOMAR too early is a common mistake. We time retrieval to your actual interview date so the document is still valid when your fiancé walks into the embassy.',
              },
            },
            {
              '@type': 'Question',
              name: 'My fiancé was previously married. What extra documents are needed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "You must prove the prior marriage legally ended. For an annulment in the Philippines, you need the PSA-annotated annulment decree (the PSA annotation confirms the court order is recognized). If the former spouse passed away, you need the PSA Death Certificate. We can retrieve these alongside the main K-1 documents.",
              },
            },
            {
              '@type': 'Question',
              name: 'Where does the K-1 interview take place?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "At the US Embassy in Manila. Before the interview, your fiancé must complete a medical exam at an embassy-approved clinic (typically St. Luke's Medical Center Extension Clinic, BGC). We make sure PSA documents and DFA Apostille are ready well before the interview date.",
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included. Contact us for a free quote.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks from order to delivery. We coordinate CENOMAR, Birth Certificate, NBI Clearance, and DFA Apostille in one flow to minimize total time.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="K-1 Fiancé Visa: Philippine Documents Retrieved and Shipped to the USA"
        badges={['CENOMAR + NBI + Apostille', 'Ships via DHL', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="Filing a K-1 fiancé visa? We retrieve CENOMAR, PSA Birth Certificate, and NBI Clearance with Apostille — timed to your embassy interview."
        points={[
          'CENOMAR must be issued within 6 months of the US Embassy interview — timing matters',
          'NBI Clearance + DFA Apostille included; HIT cases handled',
          'We verify what your specific case needs before starting',
          'All-inclusive pricing with DHL Express shipping to your US address',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">Where Philippine Documents Fit in the K-1 Process</h2>
        <ol className="space-y-4">
          {[
            { n: '1', t: 'US citizen files Form I-129F', d: 'The US petitioner files Form I-129F (Petition for Alien Fiancé) with USCIS. Once approved, the case is sent to the National Visa Center (NVC), which forwards it to the US Embassy in Manila.' },
            { n: '2', t: 'US Embassy Manila contacts your fiancé', d: 'Your fiancé receives a packet from the embassy with instructions to complete Form DS-160 (nonimmigrant visa application) and schedule a medical exam at an approved clinic.' },
            { n: '3', t: 'Gather Philippine civil documents', d: 'Your fiancé must bring originals to the interview: CENOMAR (proof of single status), PSA Birth Certificate, and NBI Clearance — all with DFA Apostille. This is where our service fits.' },
            { n: '4', t: 'Interview at US Embassy Manila', d: 'The consular officer reviews all documents. If approved, the K-1 visa is issued, valid for a single entry within 6 months.' },
            { n: '5', t: 'CFO Guidance Counseling before departure', d: "Before leaving the Philippines, your fiancé must attend the Commission on Filipinos Overseas (CFO) Guidance and Counseling Program. Philippine immigration will check for the CFO sticker at the airport — without it, your fiancé cannot board." },
            { n: '6', t: 'Marry within 90 days + file I-485', d: "After entering the US on K-1, you must marry within 90 days. Once married, your spouse files Form I-485 (Adjustment of Status) to get a green card. At that point, the PSA Marriage Certificate becomes the key document." },
          ].map(({ n, t, d }) => (
            <li key={n} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center">{n}</div>
              <div>
                <p className="font-bold text-sm text-secondary leading-snug">{t}</p>
                <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">Don't order CENOMAR too early.</strong> CENOMAR is only valid for 6 months from issuance. The K-1 process typically takes 12–18 months from I-129F filing to embassy interview. Order too soon and the document expires before your fiancé reaches the interview. We track your timeline and retrieve CENOMAR at the right moment.
          </p>
        </div>
      </div>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US citizen with I-129F approved (or pending)',
            description: 'USCIS requires CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille from your Filipino fiancé. We handle the entire Philippine side.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a US Embassy Manila interview scheduled',
            description: 'We work backward from your interview date to ensure CENOMAR is valid and all documents arrive on time.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Previous marriage involved',
            description: 'If your fiancé was previously married, we retrieve the PSA-annotated annulment decree or Death Certificate alongside the standard K-1 documents.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure exactly what is required',
            description: 'We confirm the exact documents and timing for your specific K-1 case before we start anything.',
          },
        ]}
      />

      <CtaBox
        title="We confirm K-1 requirements and timing before we start"
        description="CENOMAR, PSA Birth Certificate, NBI Clearance — we verify what your NVC/Embassy case needs and time retrieval to your interview date."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-2">CFO Counseling: The Philippine Departure Requirement Most People Miss</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Once the K-1 visa is approved, your fiancé still cannot simply board a plane. The <strong>Commission on Filipinos Overseas (CFO)</strong> requires all Filipino citizens departing on a fiancé or spousal visa to attend a <strong>Guidance and Counseling Program (GCP)</strong> — a seminar about living abroad, rights, and resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-1">What the CFO Program covers</p>
            <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
              <li>• Pre-departure orientation on life in the US</li>
              <li>• Legal rights and resources for Filipinos abroad</li>
              <li>• How to contact Philippine embassies/consulates</li>
              <li>• One-time requirement — not repeated for each trip</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-1">What happens after the seminar</p>
            <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
              <li>• CFO issues a certificate and a sticker for the passport</li>
              <li>• Philippine immigration at the airport checks for the sticker</li>
              <li>• Your fiancé cannot board the plane without it</li>
              <li>• CFO seminars are held in Manila and select regional cities</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mt-3">
          CFO counseling is a Philippine government requirement — separate from the US visa process. We help you plan the overall timeline so documents, medical exam, and CFO counseling are all completed before your fiancé's departure date.
        </p>
      </div>

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CENOMAR, PSA Birth Certificate, NBI Clearance retrieval',
            description: 'We retrieve all required K-1 documents in one coordinated flow from our Cebu office — timed to your interview date.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — not digital copies.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your US address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your K-1 case status (I-129F pending or approved) and your target interview date or NVC stage.' },
          { title: 'We confirm scope, timing, and quote', description: 'We verify required documents, calculate the right retrieval window for CENOMAR validity, and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille — coordinated in one flow.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents does USCIS require for K-1?', a: 'The standard set is CENOMAR (Certificate of No Marriage Record), PSA Birth Certificate, and NBI Clearance — all with DFA Apostille. Your fiancé brings the originals to the US Embassy Manila interview. We retrieve and authenticate all three.' },
          { q: 'Why does the K-1 visa require CENOMAR instead of a Marriage Certificate?', a: 'Because the K-1 is a fiancé visa — you are not yet married. CENOMAR proves your Filipino fiancé(e) has no existing marriage record in the Philippines, confirming they are legally single. The Marriage Certificate is only required later, once you are married and filing for CR-1/IR-1 or I-485.' },
          { q: 'What is the CFO counseling requirement for K-1?', a: 'The Commission on Filipinos Overseas (CFO) requires all Filipinos departing on a fiancé visa to attend a Guidance and Counseling Program (GCP) before leaving the Philippines. After completing the seminar, a CFO sticker or certificate is placed in the passport. Philippine immigration officers check for it at departure — your fiancé cannot board without it.' },
          { q: 'How long is CENOMAR valid for the K-1 interview?', a: 'CENOMAR must be issued within 6 months of the US Embassy interview. Since the K-1 process can take 12–18 months from I-129F filing to interview, ordering CENOMAR too early is a common mistake. We time retrieval to your actual interview date so the document is still valid.' },
          { q: 'My fiancé was previously married. What extra documents are needed?', a: 'You must prove the prior marriage legally ended. For a Philippines annulment, you need the PSA-annotated annulment decree. If the former spouse passed away, you need the PSA Death Certificate. We can retrieve these alongside the main K-1 documents.' },
          { q: 'Where does the K-1 interview take place?', a: 'At the US Embassy in Manila. Before the interview, your fiancé must complete a medical exam at an embassy-approved clinic (typically St. Luke\'s Medical Center Extension Clinic, BGC). We make sure PSA documents and DFA Apostille are ready well before the interview date.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included. Contact us for a free quote.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks from order to delivery. We coordinate CENOMAR, Birth Certificate, NBI Clearance, and DFA Apostille in one flow to minimize total time.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'PSA CENOMAR + DFA Apostille + DHL worldwide. K-1 and visa applications.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'K-1 needs CENOMAR; CR-1 needs Marriage Certificate. Find out why.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide. HIT cases handled.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist for K-1, CR-1, and all other visa types.' },
        ]}
      />
    </PageLayout>
  );
}
