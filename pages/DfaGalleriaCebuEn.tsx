import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { AlertTriangle, MapPin, Clock, Info } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function DfaGalleriaCebuEn() {
  useMeta(
    'DFA Apostille Office Cebu — Robinsons Galleria [2026 Report]',
    'On-site report for the DFA (Department of Foreign Affairs) Apostille office inside Robinsons Galleria, Cebu. Appointment required since December 2024. Location, procedures, and what to expect.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Cebu — Robinsons Galleria Report [2026]' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'DFA Apostille Office at Robinsons Galleria Cebu — On-Site Report [2026]',
          description: 'On-site report for the DFA consular office at Robinsons Galleria, Cebu City. Covers location, apostille authentication procedures, appointment system (required since Dec 2024), and photos of the facility.',
          url: 'https://ph-document.com/en/dfa-apostille-cebu-report/',
          dateModified: '2026-03-01',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is the DFA Apostille office in Cebu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The DFA Apostille office in Cebu is located inside Robinsons Galleria Cebu shopping mall. It handles physical Apostille transactions for eligible non-PSA public documents; PSA civil-record Apostilles moved to the electronic system on March 16, 2026.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an appointment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Since December 2024, the DFA Cebu Apostille office operates on an appointment-only basis. Walk-ins are not accepted. Book your appointment through the DFA online appointment system in advance.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents can be apostilled at this office?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Eligible non-PSA public documents, including NBI Clearance and other documents listed by DFA, can use the physical Apostille process. PSA civil records use DFA\'s electronic Apostille system from March 16, 2026.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFA Apostille Office — Robinsons Galleria Cebu"
        badges={['Cebu Location', 'Appointment Required', 'Updated 2026']}
        ctaText="Ask About Apostille Service"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="The DFA Apostille office serving Cebu is a government consular office located inside Robinsons Galleria shopping mall in Cebu City. Appointments have been mandatory since December 2024."
        points={[
          'Located inside Robinsons Galleria Cebu — a public government office inside a commercial mall',
          'Appointment-only since December 2024 (no walk-ins)',
          'Handles physical Apostille transactions for eligible non-PSA public documents; PSA civil records now use e-Apostille',
          'Our local staff can handle the Apostille process on your behalf',
        ]}
        ctaText="Free Consultation"
      />

      {/* Appointment notice */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">Appointment Required Since December 2024</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Walk-in visits are no longer accepted. All transactions require a prior online appointment.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Book through the DFA online appointment system. Appointment slots can fill up quickly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>If you are using our document service, we handle the appointment and processing on your behalf.</span>
          </li>
        </ul>
      </section>

      {/* Location */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Location</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">DFA Robinsons Galleria Cebu (Consular Office)</p>
              <p className="text-gray-600">Inside Robinsons Galleria Cebu, General Maxilom Ave. (Mango Ave.), Cebu City</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-600">Operating hours are subject to change. Confirm the latest schedule on the DFA website or through your appointment booking.</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 flex items-start gap-2 mt-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">This is a Philippine government office (DFA consular satellite office) operating inside a commercial shopping mall. It handles passport applications, apostille authentication, and other DFA services.</p>
          </div>
        </div>
      </section>

      {/* What they handle */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Services Available</h2>
        <div className="space-y-3">
          {[
            { title: 'DFA Apostille Authentication', detail: 'Physical Apostille processing for eligible non-PSA documents such as NBI Clearance. PSA civil records moved to DFA e-Apostille on March 16, 2026. Authentication is needed only when the receiving authority requests it.' },
            { title: 'Passport Applications and Renewals', detail: 'Philippine passport applications, renewals, and related services.' },
            { title: 'Other Consular Services', detail: 'Authentication of documents and other consular services available at this location.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why apostille matters for Japan */}
      <section className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">When is DFA Apostille needed for Japan submissions?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          An Apostille is needed only when the Japanese receiving authority asks for authentication. Requirements differ between immigration, municipal, Legal Affairs Bureau, and other procedures, so the current case-specific checklist controls.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Important: From March 16, 2026, DFA issues Apostilles for PSA birth, marriage, death, and CENOMAR e-Certificates electronically. A separately ordered SECPA paper certificate is a different record; confirm whether the receiving authority wants the electronic authenticated file, a paper certificate, or both.
        </p>
      </section>

      <CtaBox
        title="We Handle the DFA Apostille Process for You"
        description="We complete PSA online applications and DFA e-Apostille applications on your behalf, and our local staff in the Philippines retrieve non-PSA documents like NBI Clearance with physical DFA Apostille, shipped to Japan via DHL. No travel required."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
      />

      <FaqSection
        items={[
          { q: 'Where is the DFA Apostille office in Cebu?', a: 'Inside Robinsons Galleria Cebu shopping mall in Cebu City. It is a DFA consular satellite office handling apostille and other consular services.' },
          { q: 'Do I need an appointment?', a: 'Yes. Since December 2024, all transactions require a prior appointment booked through the DFA online system. Walk-ins are not accepted.' },
          { q: 'What documents can be apostilled here?', a: 'Eligible non-PSA public documents, including NBI Clearance, can use the physical process. PSA civil records use DFA e-Apostille from March 16, 2026.' },
          { q: 'Can I handle the apostille remotely from Japan?', a: 'Yes. Our local staff in the Philippines can handle the apostille process on your behalf. You do not need to travel or be present.' },
          { q: 'How long does apostille take?', a: 'Processing time varies. Standard processing typically takes a few business days after the appointment. Our service includes coordination of the full retrieval and apostille process.' },
        ]}
        ctaTitle="Questions about DFA Apostille? Let's talk."
        ctaButton="Contact Us"
      />

      <RelatedLinks links={[
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
        { path: '/en/psa-birth-certificate/', label: 'PSA Birth Certificate Retrieval' },
        { path: '/en/psa-marriage-certificate/', label: 'PSA Marriage Certificate Retrieval' },
        { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
        { path: '/en/psa-crs-cebu-report/', label: 'PSA CRS Cebu — On-Site Report' },
      ]} />
    </PageLayout>
  );
}
