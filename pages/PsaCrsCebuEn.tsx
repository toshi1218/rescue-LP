import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import { AlertTriangle, MapPin, Clock, FileText } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function PsaCrsCebuEn() {
  useMeta(
    'PSA CRS Cebu — How to Get Birth & Marriage Certificates [2026 Report]',
    'On-site report for the PSA Civil Registration System (CRS) outlet in Cebu City, Colon Street. Appointment required since October 2025. Location, photos, and what documents you can get.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA CRS Cebu — On-Site Report [2026]' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOffice',
          name: 'PSA Civil Registration System (CRS) — Cebu City Outlet',
          description: 'Philippine Statistics Authority document issuance office. Issues birth certificates, marriage certificates, CENOMAR, and death certificates. Located on Colon Street, Cebu City.',
          url: 'https://ph-document.com/en/psa-crs-cebu-report/',
          telephone: '256-0592',
          openingHours: 'Mo-Fr 07:00-17:00',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Colon Street',
            addressLocality: 'Cebu City',
            addressRegion: 'Cebu',
            addressCountry: 'PH',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA CRS Cebu — On-Site Report [2026]',
          description: 'On-site report for the PSA Civil Registration System outlet in Cebu City. Covers location, appointment requirements (mandatory since Oct 2025), available documents, and photos of the facility.',
          url: 'https://ph-document.com/en/psa-crs-cebu-report/',
          dateModified: '2026-03-23',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where can I get PSA documents in Cebu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'At the Civil Registration System (CRS) Cebu City Outlet on Colon Street, Cebu City. This is the official PSA document issuance office for birth certificates, marriage certificates, CENOMAR, and death certificates.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an appointment at PSA CRS Cebu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Since October 1, 2025, the PSA Cebu City CRS Outlet operates on a strict appointment-only basis. "No Appointment, No Transaction" is enforced. Book online for free at the CRS appointment portal.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents can I get at PSA CRS Cebu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Birth certificates, marriage certificates, CENOMAR (Certificate of No Marriage), and death certificates — all major PSA civil registry documents are available at this outlet.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA CRS Cebu — On-Site Report"
        badges={['Colon Street, Cebu', 'Appointment Required Oct 2025', 'Updated 2026']}
        ctaText="Ask About PSA Document Service"
        ctaHref="#contact"
        lastUpdated="March 23, 2026"
      />

      <SummaryBlock
        conclusion="PSA documents for Cebu are issued at the Civil Registration System (CRS) Cebu City Outlet on Colon Street — a Philippine government office adjacent to the PSA Regional Statistical Services Office VII."
        points={[
          'Issues all PSA documents: birth certificates, marriage certificates, CENOMAR, and death certificates',
          'Located on Colon Street, Cebu City — next to the PSA Regional Office VII',
          'Appointment-only since October 1, 2025 — "No Appointment, No Transaction" strictly enforced',
          'Operating hours: Mon–Fri 7:00–17:00, closed weekends and holidays',
        ]}
        ctaText="Free Consultation"
      />

      {/* Appointment notice */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">Appointment Required Since October 1, 2025</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Walk-in visits are no longer accepted. The office strictly enforces "No Appointment, No Transaction."</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Online appointments are free. A security guard at the entrance checks appointment confirmation before allowing entry.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>If you use our document service, we handle the appointment booking and all counter procedures on your behalf.</span>
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
              <p className="font-semibold text-gray-800 mb-1">Civil Registration System (CRS) Cebu City Outlet</p>
              <p className="text-gray-600">Colon Street, Cebu City — adjacent to PSA Regional Statistical Services Office VII</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">Operating Hours</p>
              <p className="text-gray-600">Monday–Friday, 7:00 AM – 5:00 PM. Closed on weekends and public holidays.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            The surrounding area is a busy commercial district near Gaisano Capital South. Jeepneys and other public transport pass through Colon Street.
          </p>
        </div>
      </section>

      {/* On-site photos */}
      <section className="mb-10 space-y-8">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Entrance and Appointment Notices</h2>
          <p className="text-sm text-gray-600 mb-4">
            The entrance door displays a large notice: <strong>"NO APPOINTMENT, NO TRANSACTION"</strong> and <strong>"ONLINE APPOINTMENT IS FREE."</strong> A uniformed security guard checks appointment confirmation before allowing entry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142533.webp"
                alt="Entrance door notice: NO APPOINTMENT NO TRANSACTION / ONLINE APPOINTMENT IS FREE / Business Hours Mon–Fri 7:00–17:00"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Entrance notice: "No Appointment, No Transaction" and "Online Appointment is Free" posted on the glass door.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20251222_155841.webp"
                alt="Official PSA public advisory poster announcing mandatory CRS online appointment system effective October 1, 2025"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Official public advisory: mandatory CRS online appointment system effective October 1, 2025.
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Inside: Waiting Area and Counters</h2>
          <p className="text-sm text-gray-600 mb-4">
            The interior has numbered service counters (1–18+) and a large waiting area. Application, payment, and document release are handled at separate counters. A digital display shows "NOW SERVING" numbers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142017.webp"
                alt="PSA CRS Cebu City Outlet waiting area with blue chairs and numbered counters 1–9"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Numbered service counters and waiting area. Visitors wait for their number to be called.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142456.webp"
                alt="Large waiting area with white chairs and PAYMENT counters visible at the back"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Wide waiting area. PAYMENT counters are visible at the back.
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Self-Service Kiosk</h2>
          <p className="text-sm text-gray-600 mb-4">
            Before proceeding to a counter, applicants enter their information at a self-service kiosk. A barcode-printed queue ticket is issued, which is used at the service counter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142106.webp"
                alt="White touch-screen self-service kiosk terminal at PSA CRS"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Self-service kiosk for entering application details.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142323.webp"
                alt="Barcode-printed queue number ticket being issued from the kiosk"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Barcode queue ticket issued after entering details — bring this to the service counter.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Documents available */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Documents Available</h2>
        <div className="space-y-3">
          {[
            { title: 'Birth Certificate (PSA)', detail: 'Official PSA-issued birth certificate. Required for apostille, passport applications, and Japan immigration submissions.' },
            { title: 'Marriage Certificate (PSA)', detail: 'Official PSA-issued marriage certificate for legally registered marriages in the Philippines.' },
            { title: 'CENOMAR (Certificate of No Marriage)', detail: 'Certifies that a person has no recorded marriage in the PSA database. Required for Japan immigration and marriage procedures.' },
            { title: 'Death Certificate (CENODEATH)', detail: 'Official PSA-issued death certificate for deceased persons registered in the Philippines.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="Common Questions from Overseas Clients"
          columns={3}
          cards={[
            {
              icon: MapPin,
              title: 'Where exactly is this office?',
              description: 'On Colon Street, Cebu City — one of the oldest streets in the Philippines. The CRS Outlet is next to the PSA Regional Office VII and near the Local Civil Registrar.',
              accent: 'gold',
            },
            {
              icon: FileText,
              title: 'Is this a legitimate government office?',
              description: 'Yes. It is operated by the Philippine Statistics Authority (PSA) — the official government body that issues all civil registry documents. A Citizen\'s Charter is posted listing all procedures, fees, and responsible officers.',
              accent: 'blue',
            },
            {
              icon: Clock,
              title: 'Can you handle this without me being there?',
              description: 'Yes. Our local staff in Cebu handles the appointment booking, counter submission, and document pickup on your behalf. You do not need to travel to the Philippines.',
              accent: 'green',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="We Handle PSA Document Retrieval for You"
        description="Our Cebu-based staff can retrieve birth certificates, marriage certificates, CENOMAR, and other PSA documents on your behalf — then ship to Japan via DHL. No travel required."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
        whatsappHref="https://wa.me/639452833727"
      />

      <FaqSection
        items={[
          { q: 'Where can I get PSA documents in Cebu?', a: 'At the Civil Registration System (CRS) Cebu City Outlet on Colon Street, Cebu City. This office is adjacent to the PSA Regional Statistical Services Office VII and handles all major PSA documents.' },
          { q: 'What are the operating hours?', a: 'Monday to Friday, 7:00 AM – 5:00 PM. Closed on weekends and public holidays.' },
          { q: 'Is an appointment required?', a: 'Yes. Since October 1, 2025, appointments are mandatory. "No Appointment, No Transaction" is strictly enforced. Online appointments are free.' },
          { q: 'What documents can I get there?', a: 'Birth certificates, marriage certificates, CENOMAR (Certificate of No Marriage), and death certificates — all major PSA civil registry documents.' },
          { q: 'Can I get PSA documents from abroad without visiting the Philippines?', a: 'Yes. Our local staff handles the full process — appointment, counter submission, pickup, and DHL shipping to Japan. You do not need to be present.' },
        ]}
        ctaTitle="Questions about PSA Document Retrieval? Let's talk."
        ctaButton="Contact Us"
      />

      <RelatedLinks links={[
        { path: '/en/psa-birth-certificate/', label: 'PSA Birth Certificate Retrieval' },
        { path: '/en/psa-marriage-certificate/', label: 'PSA Marriage Certificate Retrieval' },
        { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
        { path: '/en/dfa-apostille-cebu-report/', label: 'DFA Apostille Office Cebu — On-Site Report' },
      ]} />
    </PageLayout>
  );
}
