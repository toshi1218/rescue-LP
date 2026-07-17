import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import { MapPin, Clock, FileText } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function LtoSmSeasideEn() {
  useMeta(
    `LTO SM Seaside Cebu — Driver's Record & License Renewal [${SEO_YEAR} Report]`,
    `On-site report for the LTO window inside SM Seaside City Cebu. Location, photos, and how to get a Driver's Record for Japan license conversion.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: "LTO SM Seaside Cebu — On-Site Report [2026]" }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOffice',
          name: 'LTO (Land Transportation Office) — SM Seaside City Cebu',
          description: "Philippine Land Transportation Office window inside SM Seaside City Cebu. Issues Driver's Records and handles license renewals.",
          url: 'https://ph-document.com/en/lto-sm-seaside-cebu-report/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'SM Seaside City Cebu, South Road Properties',
            addressLocality: 'Cebu City',
            addressRegion: 'Cebu',
            addressCountry: 'PH',
          },
          containedInPlace: {
            '@type': 'ShoppingCenter',
            name: 'SM Seaside City Cebu',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: "LTO SM Seaside Cebu — Driver's Record & License Renewal [2026 Report]",
          description: "On-site report for the LTO window inside SM Seaside City Cebu. Covers the Driver's Record for Japan license conversion, operating hours, and facility photos.",
          url: 'https://ph-document.com/en/lto-sm-seaside-cebu-report/',
          dateModified: '2026-03-23',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Where can I get an LTO Driver's Record in Cebu?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "At the Land Transportation Office (LTO) window inside SM Seaside City Cebu, located in the South Road Properties area of southern Cebu City.",
              },
            },
            {
              '@type': 'Question',
              name: 'What are the LTO SM Seaside operating hours?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Monday to Friday, 8:00 AM – 5:00 PM. Closed on weekends and public holidays.',
              },
            },
            {
              '@type': 'Question',
              name: "What is an LTO Driver's Record?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "The Driver's Record is an official LTO document certifying your Philippine driving history. It is required for converting a Philippine driver's license to a Japanese license (外免切替). After obtaining it from LTO, you need a DFA Apostille before submitting to a Japanese prefectural license center.",
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="LTO SM Seaside Cebu — On-Site Report"
        badges={['SM Seaside City', "Driver's Record", 'Mon–Fri 8:00–17:00']}
        ctaText="Ask About LTO Document Service"
        ctaHref="#contact"
        lastUpdated="March 23, 2026"
      />

      <SummaryBlock
        conclusion="The Land Transportation Office (LTO) in Cebu operates a government window inside SM Seaside City — a large shopping mall in the South Road Properties area of southern Cebu City."
        points={[
          "Issues Driver's Records, handles license renewals, and other LTO transactions",
          'Located inside SM Seaside City Cebu — air-conditioned mall environment with parking',
          'Number ticket system for organized counter processing',
          'Operating hours: Mon–Fri 8:00–17:00, closed weekends and holidays',
        ]}
        ctaText="Free Consultation"
      />

      {/* Location */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Location</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">LTO — SM Seaside City Cebu</p>
              <p className="text-gray-600">Inside SM Seaside City Cebu, South Road Properties, southern Cebu City</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">Operating Hours</p>
              <p className="text-gray-600">Monday–Friday, 8:00 AM – 5:00 PM. Closed on weekends and public holidays.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            SM Seaside City is one of the largest malls in the Philippines, located along the South Road Properties coastal development in southern Cebu City. The LTO window is inside the mall, offering a comfortable air-conditioned environment.
          </p>
        </div>
      </section>

      {/* On-site photos */}
      <section className="mb-10 space-y-8">
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Exterior — SM Seaside City and LTO Entrance</h2>
          <p className="text-sm text-gray-600 mb-4">
            The LTO window is inside SM Seaside City Cebu. The mall itself is easily accessible from central Cebu City via public transport. The LTO entrance is clearly marked with a "Land Transportation Office" sign.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165139.jpg"
                alt="Exterior of SM Seaside City Cebu — large shopping mall"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                SM Seaside City Cebu exterior. Located along South Road Properties in southern Cebu City.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165237.jpg"
                alt="LTO SM Seaside entrance with Land Transportation Office signage"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                LTO window entrance. Clearly labeled "Land Transportation Office."
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Inside — Counters and Waiting Area</h2>
          <p className="text-sm text-gray-600 mb-4">
            The LTO office uses a numbered ticket system. Visitors take a number and wait to be called for application, payment, and document pickup at separate counters. A digital display shows the current number being served.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165402.jpg"
                alt="LTO SM Seaside reception counters with staff assisting customers"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Service counters with dedicated staff for different transaction types.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165408.jpg"
                alt="Number ticket machine and waiting area at LTO SM Seaside"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Number ticket machine and waiting area. Visitors sit and wait for their number to be called.
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Driver's Record — Sample Document</h2>
          <p className="text-sm text-gray-600 mb-4">
            The Driver's Record is an official LTO document listing your license number, validity dates, and driving history. After obtaining it, you need a DFA Apostille before submitting to a Japanese prefectural license center for foreign license conversion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165448.jpg"
                alt="LTO Driver's Record document — official driving history certificate"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                The Driver's Record — official LTO document required for Japan license conversion.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165503.jpg"
                alt="Official LTO stamp and signature on Driver's Record"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Official LTO stamp and signature. After this, DFA Apostille is obtained before Japan submission.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* What is a Driver's Record */}
      <section className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">What is a Driver's Record and Why is it Needed?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          The LTO Driver's Record is an official document issued by the Philippine Land Transportation Office that certifies your driving history — license number, license class, validity dates, and any violations on record.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          For Filipinos living in Japan who want to convert their Philippine driver's license to a Japanese license (外免切替 / foreign license conversion), this document is required. The process after obtaining the Driver's Record is:
        </p>
        <ol className="space-y-2 text-sm text-gray-700 leading-relaxed list-decimal list-inside">
          <li>Obtain Driver's Record from LTO (this office)</li>
          <li>Get DFA Apostille authentication on the Driver's Record</li>
          <li>Submit to your Japanese prefectural license center for foreign license conversion</li>
        </ol>
      </section>

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="Common Questions from Overseas Clients"
          columns={3}
          cards={[
            {
              icon: MapPin,
              title: 'Where is the LTO office in Cebu?',
              description: 'Inside SM Seaside City Cebu — a large mall in the South Road Properties area of southern Cebu City. Easy access with parking and food court available.',
              accent: 'gold',
            },
            {
              icon: FileText,
              title: "What is a Driver's Record?",
              description: "The official LTO certificate of your Philippine driving history. Required for converting a Philippine license to a Japanese license. After LTO, you also need DFA Apostille before Japan submission.",
              accent: 'blue',
            },
            {
              icon: Clock,
              title: 'Can you handle this remotely?',
              description: 'Yes. Our Cebu-based staff handles the LTO application, pickup, and DFA Apostille on your behalf. We ship to Japan via DHL. You do not need to be in the Philippines.',
              accent: 'green',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="We Handle LTO Driver's Record Retrieval for You"
        description="Our local staff in Cebu can obtain your LTO Driver's Record and DFA Apostille authentication, then ship to Japan via DHL. No travel required."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
      />

      <FaqSection
        items={[
          { q: "Where can I get an LTO Driver's Record in Cebu?", a: "At the LTO (Land Transportation Office) window inside SM Seaside City Cebu, South Road Properties, southern Cebu City." },
          { q: 'What are the operating hours?', a: 'Monday to Friday, 8:00 AM – 5:00 PM. Closed on weekends and public holidays.' },
          { q: "What is a Driver's Record used for?", a: "The Driver's Record is required for converting a Philippine driver's license to a Japanese license (外免切替). After obtaining it from LTO, you need a DFA Apostille, then submit to a Japanese prefectural license center." },
          { q: 'What other services are available at this LTO office?', a: "Driver's Record issuance, license renewals, license re-issuance, and other standard LTO transactions." },
          { q: 'Can you handle this without me being there?', a: 'Yes. Our Cebu-based staff handles the LTO application, document pickup, DFA Apostille, and DHL shipping to Japan. You do not need to travel.' },
        ]}
        ctaTitle="Questions about LTO Documents? Let's talk."
        ctaButton="Contact Us"
      />

      <RelatedLinks links={[
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
        { path: '/en/dfa-apostille-cebu-report/', label: 'DFA Apostille Office Cebu — On-Site Report' },
        { path: '/en/psa-crs-cebu-report/', label: 'PSA CRS Cebu — On-Site Report' },
        { path: '/en/psa-birth-certificate/', label: 'PSA Birth Certificate Retrieval' },
      ]} />
    </PageLayout>
  );
}
