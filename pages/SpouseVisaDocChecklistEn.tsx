import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import SectionDivider from '../components/SectionDivider';
import { AlertTriangle, Info, FileText, Stamp, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function SpouseVisaDocChecklistEn() {
  useMeta(
    'Spouse Visa Document Checklist [March 2026] — Philippine National Applying for Japan',
    'Updated March 2026. Complete checklist of Philippine documents needed for Japan spouse visa (COE) application: PSA marriage cert, birth cert, CENOMAR, TB certificate (new from June 2025), and Japanese translations.',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Spouse Visa Document Checklist [March 2026]' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Spouse Visa Document Checklist [March 2026] — Philippine National, Japan COE Application',
          description: 'TB Non-Disease Certificate is now mandatory from June 2025. Full checklist of Philippine documents for Japan spouse visa COE application: PSA marriage cert, birth cert, CENOMAR, apostille, TB certificate.',
          url: 'https://ph-document.com/en/spouse-visa-document-checklist/',
          dateModified: '2026-03-14',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for the Japan spouse visa COE application?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'As of March 2026: PSA Marriage Certificate (with DFA Apostille, paper original), PSA Birth Certificate (with DFA Apostille, paper original), CENOMAR, TB Non-Disease Certificate (mandatory from June 23, 2025), and Japanese translations of each document.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the new document required from June 2025?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The TB Non-Disease Certificate. Since June 23, 2025, Philippine nationals applying for a Certificate of Eligibility (COE) in Japan must submit this certificate. It is only issued by Japan-government-designated Panel Clinics (IOM Manila, NHS, St. Luke\'s). Valid for 180 days from exam date.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Spouse Visa Document Checklist [March 2026]"
        subtitle="Complete list of Philippine documents required for the Japan spouse visa (COE) application. TB Non-Disease Certificate is now mandatory from June 2025."
        badges={['Updated March 2026', 'TB Cert Now Required', 'Document Retrieval Available']}
        lastUpdated="March 1, 2026"
      />
      <article className="max-w-2xl mx-auto px-4">

        {/* June 2025 change alert */}
        <section className="mb-8 rounded-2xl bg-amber-50 border border-amber-300 p-5">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-base font-bold text-amber-900">[From June 23, 2025] New Required Document</h2>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            Philippine nationals applying for a Certificate of Eligibility (COE) in Japan must now submit a <strong>TB Non-Disease Certificate</strong>. This includes spouse visa (Spouse of Japanese National) applicants.
          </p>
          <ul className="space-y-1.5 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>Only issued by <strong>Japan-government-designated Panel Clinics</strong> (IOM Manila / NHS / St. Luke's)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>Valid for <strong>180 days from chest X-ray date</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>General hospitals cannot issue this. Book a <strong>Panel Clinic appointment early</strong> to match your COE schedule.</span>
            </li>
          </ul>
          <div className="mt-3">
            <Link to="/en/tb-certificate/" className="text-sm font-semibold text-amber-900 underline hover:text-amber-700">
              → TB Non-Disease Certificate Guide (Panel Clinics, Fees, Steps)
            </Link>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is the Spouse Visa (Spouse of Japanese National)?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The "Spouse or Child of Japanese National" residence status allows a Philippine national married to a Japanese citizen to reside long-term in Japan. To bring your spouse to Japan for the first time, a <strong>Certificate of Eligibility (COE)</strong> must be obtained first — then a visa is applied for, and entry follows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This page lists the Philippine documents required for the COE application, based on the latest information as of March 2026.
          </p>
        </section>

        {/* Document checklist */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Required Philippine Documents — Checklist</h2>

          <div className="space-y-4">
            {/* 1. PSA Marriage Certificate */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <Stamp className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">① PSA Marriage Certificate</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">Issuer</span>
                  <span>PSA (Philippine Statistics Authority)</span>
                  <span className="font-semibold text-gray-500">Format</span>
                  <span>Paper original with DFA Apostille</span>
                  <span className="font-semibold text-gray-500">Validity (guide)</span>
                  <span>Within 6 months–1 year of issue (depends on immigration office)</span>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-2.5 text-xs text-blue-800 mt-2">
                  <strong>Important:</strong> e-Certificate (digital version from PSAHelpline) is NOT accepted by Japan immigration. You need a paper original + DFA Apostille.
                </div>
              </div>
            </div>

            {/* 2. PSA Birth Certificate */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">② PSA Birth Certificate</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">Issuer</span>
                  <span>PSA (Philippine Statistics Authority)</span>
                  <span className="font-semibold text-gray-500">Format</span>
                  <span>Paper original with DFA Apostille</span>
                  <span className="font-semibold text-gray-500">Validity (guide)</span>
                  <span>Within 1 year of issue (Philippine Embassy in Japan standard)</span>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-2.5 text-xs text-blue-800 mt-2">
                  <strong>Note:</strong> If no PSA record exists, an application to the LCR (Local Civil Registry) may be needed before PSA can issue the document.
                </div>
              </div>
            </div>

            {/* 3. CENOMAR */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">③ CENOMAR (Certificate of No Marriage)</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">Issuer</span>
                  <span>PSA (Philippine Statistics Authority)</span>
                  <span className="font-semibold text-gray-500">Format</span>
                  <span>Paper original with DFA Apostille</span>
                  <span className="font-semibold text-gray-500">Validity (guide)</span>
                  <span>Within 6 months of issue (depends on submission destination)</span>
                  <span className="font-semibold text-gray-500">Purpose</span>
                  <span>Confirms no prior marriage record. For remarriages, a different document may be required.</span>
                </div>
              </div>
            </div>

            {/* 4. TB Certificate (NEW) */}
            <div className="rounded-xl border-2 border-amber-400 overflow-hidden">
              <div className="bg-amber-500 px-4 py-2.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">④ TB Non-Disease Certificate</span>
                <span className="ml-auto text-xs font-bold bg-white text-amber-700 px-2 py-0.5 rounded-full">Required from June 2025</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2 bg-amber-50/50">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">Issuer</span>
                  <span>Designated Panel Clinic only (IOM Manila / NHS / St. Luke's)</span>
                  <span className="font-semibold text-gray-500">Validity</span>
                  <span><strong>180 days</strong> from chest X-ray date</span>
                  <span className="font-semibold text-gray-500">Mandatory from</span>
                  <span>June 23, 2025 (Philippines and Nepal nationals)</span>
                  <span className="font-semibold text-gray-500">Fee (estimate)</span>
                  <span>NHS: ₱7,445–₱8,755 (varies by age and tests)</span>
                </div>
                <div className="rounded-lg bg-amber-100 border border-amber-300 p-2.5 text-xs text-amber-900 mt-2">
                  <strong>Important:</strong> General hospitals cannot issue this certificate. Book a Panel Clinic appointment up to 6 months before your planned COE application date.
                </div>
                <div className="mt-1">
                  <Link to="/en/tb-certificate/" className="text-xs font-semibold text-secondary underline hover:text-secondary/70">
                    → TB Non-Disease Certificate Guide (Clinic list, fees, steps)
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Japanese Translation */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-bold text-gray-700">⑤ Japanese Translation of Each Document</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-1">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">Applies to</span>
                  <span>PSA marriage certificate, PSA birth certificate, CENOMAR, etc.</span>
                  <span className="font-semibold text-gray-500">Translator</span>
                  <span>Self-translation is acceptable (must include translator name, address, and translation date)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline guidance */}
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Timing Your Document Preparation</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">
              Documents have expiry dates, so there are two risks: getting them too early (they expire before you apply) and too late (they aren't ready in time). As of March 2026, keep the following in mind:
            </p>

            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <p className="font-bold text-gray-800 mb-2">PSA Documents and CENOMAR Validity</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>· PSA marriage and birth certificates: typically within 1 year of issue</li>
                <li>· CENOMAR: typically within 6 months of issue at most destinations</li>
                <li>→ Work backwards from your planned COE application date to time the retrieval</li>
              </ul>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="font-bold text-amber-900 mb-2">TB Certificate Validity (New Requirement)</p>
              <ul className="space-y-1 text-xs text-amber-800">
                <li>· Valid for <strong>180 days</strong> from the chest X-ray date</li>
                <li>· Aim to have the exam about 5–6 months before your planned COE application</li>
                <li>· Panel Clinics require appointments — they may be fully booked weeks ahead</li>
                <li>→ Book the Panel Clinic appointment before you start the PSA documents</li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                From PSA retrieval through DFA Apostille and DHL shipping, the total process takes about <strong>1–2 months</strong>. Start early and coordinate with the TB certificate timeline.
              </p>
            </div>
          </div>
        </SectionDivider>

        {/* Application types */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Do Documents Differ for New vs. Renewal Applications?</h2>
          <div className="space-y-3">
            {[
              {
                type: 'New Application (Certificate of Eligibility)',
                desc: 'For bringing a spouse from the Philippines to Japan for the first time. PSA marriage cert, PSA birth cert, CENOMAR, and TB certificate (from June 2025) are typically required.',
                highlight: true,
              },
              {
                type: 'Change of Status (Short-Stay → Spouse Visa)',
                desc: 'For a spouse already in Japan on a tourist or short-stay visa. Similar documents to a new COE application are often required.',
                highlight: false,
              },
              {
                type: 'Residence Period Renewal',
                desc: 'Renewing an existing spouse visa. PSA documents may be required again for the first renewal. Requirements vary by immigration office.',
                highlight: false,
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border p-4 ${item.highlight ? 'border-amber-300 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                <p className={`text-sm font-bold mb-1 ${item.highlight ? 'text-amber-900' : 'text-gray-800'}`}>{item.type}</p>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-amber-800' : 'text-gray-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ Required documents vary by immigration office and case officer. Always confirm with the immigration authority or a qualified professional before applying.</p>
        </section>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Summary: Spouse Visa Documents as of March 2026</h2>
          <div className="rounded-xl bg-secondary text-white p-5">
            <div className="space-y-2">
              {[
                { icon: '📄', text: 'PSA Marriage Certificate + DFA Apostille (paper original)', new: false },
                { icon: '📄', text: 'PSA Birth Certificate + DFA Apostille (paper original)', new: false },
                { icon: '📄', text: 'CENOMAR + DFA Apostille', new: false },
                { icon: '🆕', text: 'TB Non-Disease Certificate (required from June 2025) — designated Panel Clinic, valid 180 days', new: true },
                { icon: '📝', text: 'Japanese translation of each document (translator info required)', new: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className={item.new ? 'font-semibold text-primary' : 'text-white/90'}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBox
        title="We Handle Your Philippine Documents Together"
        description="PSA marriage certificate, PSA birth certificate, CENOMAR, and DFA Apostille — all in one order. We can also advise on coordinating the TB certificate exam with your document timeline."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
      />

      <article className="max-w-2xl mx-auto px-4 mt-8">
        <RelatedLinks links={[
          { path: '/en/tb-certificate/', label: 'TB Non-Disease Certificate Guide (Panel Clinics, Fees, Steps)' },
          { path: '/en/spouse-visa-documents/', label: 'Spouse Visa Document Service (PSA, CENOMAR, Apostille)' },
          { path: '/en/psa-marriage-certificate/', label: 'PSA Marriage Certificate Retrieval' },
          { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
          { path: '/en/apostille/', label: 'DFA Apostille Service' },
          { path: '/en/international-marriage-guide/', label: 'International Marriage Document Service' },
        ]} />
      </article>
    </PageLayout>
  );
}
