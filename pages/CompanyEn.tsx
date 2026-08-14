import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IGRS Inc.',
  alternateName: '株式会社IGRS',
  url: 'https://ph-document.com/',
  email: 'igrs20200601@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: 'Wakayama',
    addressLocality: 'Wakayama City',
  },
  sameAs: [
    'https://ph-document.com/ja/company/',
    'https://ph-document.com/en/company/',
    'https://ph-document.com/ko/company/',
  ],
};

export default function CompanyEn() {
  useMeta(
    'Company Information | IGRS Inc. — Philippine Document Procurement Center',
    'Company information for IGRS Inc., the Japan-registered operator of Philippine Document Procurement Center. Our Wakayama head office works with our Cebu operations team for Philippine public-document retrieval.',
  );

  const details = [
    { label: 'Service name', value: 'Philippine Document Procurement Center' },
    { label: 'Operating company', value: 'IGRS Inc. (株式会社IGRS)' },
    { label: 'Corporate number', type: 'registry' },
    { label: 'Head office', value: 'Wakayama City, Wakayama, Japan' },
    { label: 'Operations base', value: 'Cebu City, Philippines' },
    { label: 'Contact desk', value: 'Igarashi' },
    { label: 'Services', value: 'Philippine public-document retrieval: PSA, NBI, LTO and DFA Apostille' },
    { label: 'Language support', value: 'English and Japanese' },
    { label: 'Email', type: 'email' },
  ] as const;

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Company Information' }]} jsonLd={orgJsonLd}>
      <h1 className="mb-2 text-2xl font-bold text-secondary md:text-3xl">Company Information</h1>
      <p className="mb-6 text-sm text-gray-600">Philippine Document Procurement Center is operated by IGRS Inc., a Japan-registered company working with a Cebu-based operations team.</p>

      <div className="max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          {details.map((item, i) => (
            <div key={item.label} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-0 ${i < details.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <span className="w-full shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-gray-400 sm:w-40">{item.label}</span>
              <span className="text-sm leading-relaxed text-gray-700">
                {item.type === 'registry' ? (
                  <a href="https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2170001016118" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">2170001016118 (Japan government registry)</a>
                ) : item.type === 'email' ? (
                  <a href="mailto:igrs20200601@gmail.com" className="font-medium text-primary hover:underline">igrs20200601@gmail.com</a>
                ) : item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-6">
          <h2 className="mb-3 text-sm font-bold text-secondary">How we operate</h2>
          <p className="text-sm leading-relaxed text-gray-600">IGRS Inc. receives and manages each request as the operating company. Our Cebu operations team coordinates local procedures for PSA, NBI, LTO and DFA Apostille, then we confirm the document format and arrange delivery.</p>
        </div>

        <div className="mt-6 rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-6">
          <h2 className="mb-4 text-sm font-bold text-secondary">Business hours, payment and refunds</h2>
          <div className="grid gap-4 text-sm text-gray-600 md:grid-cols-2">
            <div><p className="mb-1 font-semibold text-secondary">Business hours</p><p>Monday to Friday, 9:00-17:00 Philippines time (PHT).</p></div>
            <div><p className="mb-1 font-semibold text-secondary">Contact</p><p>Email and WhatsApp. We do not offer phone-call support.</p></div>
            <div><p className="mb-1 font-semibold text-secondary">Payment</p><p>Credit card or bank transfer. Payment is split into 50% to start and 50% before dispatch.</p></div>
            <div><p className="mb-1 font-semibold text-secondary">Cancellation and refunds</p><p>Before we start: full refund. After starting, the refund reflects expenses and work already completed.</p></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
