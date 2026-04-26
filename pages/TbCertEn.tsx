import React from 'react';
import { SEO_LAST_UPDATED_EN } from '../lib/seoDate';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import SummaryBlock from '../components/SummaryBlock';
import { AlertTriangle, Calendar, Clock, MapPin, FileCheck, Info, ShieldCheck, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function TbCertEn() {
  useMeta(
    'TB Non-Disease Certificate for Japan Visa [2026] — Panel Clinics & Requirements',
    'Required for Philippine nationals applying for Japan residence permits since June 23, 2025. Learn which Panel Clinics to use, costs, validity period, and how to fit it into your visa timeline.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'TB Non-Disease Certificate Guide [2026]' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'TB Non-Disease Certificate (JPETS) for Japan Visa — Guide for Philippine Nationals [2026]',
          description: 'Since June 23, 2025, Philippine nationals applying for a Certificate of Eligibility (COE) for Japan must submit a TB Non-Disease Certificate from a designated Panel Clinic. Covers clinics, costs, validity, and steps.',
          url: 'https://ph-document.com/en/tb-certificate/',
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
              name: 'When did the TB certificate requirement start?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Since June 23, 2025, Philippine nationals must submit a TB Non-Disease Certificate when applying for a Certificate of Eligibility (COE) for Japan. Nepali nationals are also covered from the same date.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is the TB certificate valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The certificate is valid for 180 days from the date of the chest X-ray. If a household member was diagnosed with active tuberculosis within the 2 months before your exam, the validity is shortened to 90 days. Plan your exam so the certificate remains valid when your COE application is submitted.',
              },
            },
            {
              '@type': 'Question',
              name: 'Which clinics can issue the TB certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Only Japan-government-designated Panel Clinics can issue a valid certificate. In the Philippines: IOM Manila Health Centre (Makati), Nationwide Health Systems AUX (Makati, Baguio, Cebu, Davao), and St. Luke\'s Medical Center Extension Clinic (Ermita, Manila).',
              },
            },
            {
              '@type': 'Question',
              name: 'Is a TB certificate required for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The "Spouse or Child of Japanese National" visa status requires a TB Non-Disease Certificate when submitting the COE application for a Philippine national spouse.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is Specified Skilled Worker (SSW) also required to submit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'As of March 2026, Specified Skilled Worker (SSW) is provisionally exempt. Technical Intern Training (now "Ikusei Shuro") is NOT exempt and must submit the certificate with the COE application. Check the latest guidance from Japan Immigration Services Agency as requirements may change.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="TB Non-Disease Certificate"
        badges={['Required from June 23, 2025', 'Philippine Nationals', 'Valid 180 Days']}
        ctaText="Ask About Spouse Visa Documents"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_EN}
      />

      <SummaryBlock
        conclusion="Since June 23, 2025, Philippine nationals applying for a Certificate of Eligibility (COE) in Japan must submit a TB Non-Disease Certificate (JPETS). This includes spouse visa applicants."
        points={[
          'Required for all COE applications by Philippine nationals from June 23, 2025',
          'Only available from Japan-government-designated Panel Clinics (IOM Manila / NHS / St. Luke\'s — 6 locations total)',
          'Valid for 180 days from the date of chest X-ray',
          'Applies to spouse visa, student visa, Technical Intern Training, and other long-stay COE applications',
        ]}
        ctaText="Free Consultation"
      />

      {/* Important notice */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">New Requirement Since June 23, 2025 (JPETS)</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Philippine nationals must submit a <strong>TB Non-Disease Certificate</strong> when applying for a <strong>Certificate of Eligibility (COE)</strong> for Japan.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Applies to <strong>spouse visa, student visa, Technical Intern Training</strong>, and other long-stay (over 3 months) COE applications.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Certificate must be issued by a <strong>Japan-government-designated Panel Clinic</strong>. General hospitals cannot issue this certificate.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>Valid for <strong>180 days from the chest X-ray date</strong> (may be shortened to 90 days in certain cases).</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-amber-700">※ Source: Japan Immigration Services Agency / Ministry of Health, Labour and Welfare "Japan Pre-Entry TB Screening (JPETS)" (2025)</p>
      </section>

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">Designated Panel Clinics in the Philippines (6 Locations)</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          Only clinics designated by Japan's Ministry of Health, Labour and Welfare can issue a valid TB Non-Disease Certificate. The Philippines currently has 6 designated locations.
        </p>

        <div className="space-y-4 mb-4">
          {/* IOM Manila */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">1</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">IOM Manila Health Centre</p>
                <p className="text-xs text-gray-500 mt-0.5">International Organization for Migration — Manila</p>
              </div>
            </div>
            <div className="ml-11 space-y-1.5 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>15/F Trafalgar Plaza Building, 105 H.V. Dela Costa St., Brgy. Bel-Air, Makati City 1227, Metro Manila</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">📞</span>
                <span>+63 917-593-4688 (Globe) / +63 919-993-4667 (Smart)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">✉</span>
                <span>mhc.jp@iom.int</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>Mon–Fri 7:30–17:00 (closed holidays)</span>
              </div>
              <div className="mt-2 rounded-lg bg-primary/8 border border-primary/15 p-2">
                <p className="font-semibold text-gray-700 mb-1 text-sm">IOM Exam Fees</p>
                <div className="space-y-0.5 text-xs">
                  <p>· Ages 0–4 (TST): ₱4,500 / IGRA: ₱9,200</p>
                  <p>· Ages 5 and above: ₱6,500</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Appointments via MyMedical online system. Pay at clinic on the day (no advance payment).</p>
            </div>
          </div>

          {/* NHS */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">2–5</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Nationwide Health Systems AUX, Inc. (NHS)</p>
                <p className="text-sm text-gray-500 mt-0.5">4 locations nationwide / Fees: Ages 0–4: ₱7,445 / Ages 5+: ₱8,755 (cash)</p>
              </div>
            </div>
            <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">② Makati</p>
                <p className="text-sm leading-relaxed">2/F Zeta II Annex Bldg., 191 Salcedo St., Legaspi Village, Makati City 1229</p>
                <p className="text-sm mt-1">📞 +632-8810-0785</p>
                <p className="text-sm">Mon–Fri 8:00–16:00 / Sat 8:00–15:00</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">③ Baguio</p>
                <p className="text-sm leading-relaxed">Unit 10–12, 2/F City Hub Bldg., 92 Upper Gen. Luna Rd., Baguio City</p>
                <p className="text-sm mt-1">📞 +63 917-714-8963</p>
                <p className="text-sm">Mon–Fri 6:00–16:00 / Sat 6:00–10:00</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">④ Cebu</p>
                <p className="text-sm leading-relaxed">Tango Plaza Bldg., Queens Rd., Brgy. Kamputhaw, Cebu City 6000</p>
                <p className="text-sm mt-1">📞 +63 32-238-6053</p>
                <p className="text-sm">Mon–Fri 7:00 (9:00 / 11:00 / 13:00) / Sat 7:00 only</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">⑤ Davao</p>
                <p className="text-sm leading-relaxed">2/F Central Lab Tower, Elpidio Quirino Ave., Brgy. 10-A, Davao City 8000</p>
                <p className="text-sm mt-1">📞 +63 82-296-5136</p>
                <p className="text-sm">Mon–Fri 8:00–15:00 / Sat 8:00–14:00</p>
              </div>
            </div>
          </div>

          {/* St. Luke's */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">6</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">St. Luke's Medical Center Extension Clinic (SLEC)</p>
              </div>
            </div>
            <div className="ml-11 space-y-1.5 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>1177 Jorge Bocobo Street, Ermita, Manila 1000</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">📞</span>
                <span>(02) 8521-0020</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">✉</span>
                <span>inquiry@slec.ph</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Book via slec.ph online registration. No rush/priority service. Confirm fees directly with the clinic.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">The list of designated Panel Clinics may be updated. Check the latest list at the Japan MHLW JPETS website (jpets.mhlw.go.jp).</p>
        </div>
      </SectionDivider>

      {/* Cost & Validity */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">Exam Costs and Validity Period</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💰</span>
              <p className="text-sm font-bold text-gray-800">Exam Fees by Clinic</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">IOM Manila (estimate)</p>
                <div className="text-xs text-gray-600 space-y-0.5">
                  <p>· Ages 0–4 (TST): ₱4,500 / IGRA: ₱9,200</p>
                  <p>· Ages 5+: ₱6,500</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold text-gray-600 mb-1">Nationwide Health Systems (all locations)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-1.5 border border-gray-200 font-semibold text-gray-700">Age</th>
                        <th className="text-left p-1.5 border border-gray-200 font-semibold text-gray-700">Tests</th>
                        <th className="text-right p-1.5 border border-gray-200 font-semibold text-gray-700">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="p-1.5 border border-gray-200">0–4 yrs</td>
                        <td className="p-1.5 border border-gray-200 text-gray-600">Interview, physical, IGRA</td>
                        <td className="p-1.5 border border-gray-200 text-right font-medium">₱7,445</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-1.5 border border-gray-200">5+ yrs</td>
                        <td className="p-1.5 border border-gray-200 text-gray-600">Interview, physical, chest X-ray</td>
                        <td className="p-1.5 border border-gray-200 text-right font-medium">₱8,755</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-gray-500">St. Luke's does not publish fees — contact them directly. Sputum tests may cost extra if required.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-sm font-bold text-gray-800">Validity Period and Key Notes</p>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                <p className="font-bold text-primary mb-1">Valid: 180 days from chest X-ray date</p>
                <p className="text-sm text-gray-600">The certificate must be submitted within 180 days of the <strong>exam date</strong>, not the COE application receipt date.</p>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-sm font-bold text-amber-800 mb-1">⚠ Shortened to 90 days if:</p>
                <p className="text-sm text-amber-700">A household member was diagnosed with active TB within 2 months before your exam, or you shared a confined space with an active TB patient for extended time.</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✔ Book your exam <strong>at least 1 month before</strong> your planned COE application date</p>
                <p>✔ If your application is delayed, you may need to re-take the exam</p>
                <p>✔ If active TB is suspected, a sputum test may be added (results take 6–8 weeks)</p>
              </div>
            </div>
          </div>
        </div>
      </SectionDivider>

      <IconCardGrid
        heading="Main Visa Categories Covered"
        columns={3}
        cards={[
          { icon: Heart, title: 'Spouse Visa (Spouse of Japanese National)', description: 'Required at COE application stage. The Philippine national spouse must attend the exam in person.', accent: 'gold' },
          { icon: FileCheck, title: 'Technical Intern Training / Ikusei Shuro', description: 'COE applications for Technical Intern Training are covered. Specified Skilled Worker (SSW) is provisionally exempt as of March 2026.', accent: 'blue' },
          { icon: ShieldCheck, title: 'Student Visa', description: 'Long-stay student visas are also covered. Some government scholarship programs may be exempt.', accent: 'green' },
        ]}
      />

      {/* Exemptions */}
      <section className="mb-8 rounded-2xl bg-gray-50 border border-gray-200 p-5">
        <h2 className="text-sm font-bold text-gray-800 mb-3">Main Exemption Cases (as of March 2026)</h2>
        <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
          {[
            'Specified Skilled Worker (SSW) — provisionally exempt as of March 2026',
            'COE applications already accepted before June 23, 2025',
            'Philippine nationals residing outside the Philippines (Japan or third countries) and able to prove this with a residence permit',
            'Short-stay visa applications (under 3 months) such as tourism or business',
            'JET Programme participants, JICA trainees, EPA nurses/care workers, some Japanese government scholarship students',
            'Re-entry permit holders already residing in Japan',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 mt-3">※ Exemption eligibility is determined by immigration authorities. Requirements may change — always confirm before applying.</p>
      </section>

      <StepList
        heading="From Exam Booking to Certificate Submission"
        variant="visual"
        steps={[
          { title: 'Book a Panel Clinic Appointment', description: 'Choose IOM Manila (MyMedical), an NHS location, or St. Luke\'s. Book at least 1 month before your planned COE application date.' },
          { title: 'Attend the Exam', description: 'Interview, physical exam, and chest X-ray (ages 5+) or IGRA (ages 0–4). If active TB is suspected, a sputum test will be added — results take 6–8 weeks.' },
          { title: 'Receive the Certificate', description: 'If no TB is detected, you receive the official "TB Non-Disease Certificate" in English and Japanese. Valid for 180 days from exam date.' },
          { title: 'Submit with COE Application', description: 'Attach the certificate together with PSA marriage certificate, birth certificate, CENOMAR, and other Philippine documents when submitting the COE application.' },
        ]}
      />

      <CtaBox
        title="We Handle Your Philippine Documents for the Spouse Visa"
        description="PSA marriage certificate, PSA birth certificate, CENOMAR, and DFA Apostille — all handled together. We can also advise on how to coordinate the TB certificate timeline with your document preparation."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
      />

      <FaqSection
        items={[
          { q: 'When did the TB certificate requirement start?', a: 'Since June 23, 2025, Philippine nationals must submit a TB Non-Disease Certificate (JPETS) when applying for a COE for Japan. Nepali nationals are also covered from the same date. Vietnamese nationals are covered from September 1, 2025.' },
          { q: 'How long is the TB certificate valid?', a: 'Valid for 180 days from the exam (chest X-ray) date. If a household member was diagnosed with active TB within 2 months before your exam, validity is shortened to 90 days. Book your exam at least 1 month before your planned COE application date to avoid expiry.' },
          { q: 'Which clinics can issue the certificate?', a: 'Only Japan-government-designated Panel Clinics. In the Philippines: IOM Manila Health Centre (Makati), Nationwide Health Systems AUX (Makati, Baguio, Cebu, Davao), and St. Luke\'s Medical Center Extension Clinic (Ermita, Manila). General hospitals cannot issue this certificate.' },
          { q: 'Is a TB certificate required for the spouse visa?', a: 'Yes. The "Spouse or Child of Japanese National" residence status requires a TB Non-Disease Certificate when submitting the COE application for a Philippine national spouse.' },
          { q: 'Is Specified Skilled Worker also required?', a: 'As of March 2026, SSW is provisionally exempt. Technical Intern Training (now "Ikusei Shuro") is NOT exempt. Requirements may change — check the latest guidance from Japan Immigration Services Agency.' },
          { q: 'What if I am diagnosed with active TB?', a: 'Treatment will be required. After completing treatment, you take the exam again and submit both the TB Non-Disease Certificate and a TB Treatment Completion Report. Contact the Panel Clinic and Japan Immigration Services Agency for details.' },
          { q: 'My spouse is in the Philippines. Can I handle the documents from Japan?', a: 'The TB exam must be taken in person at a designated Panel Clinic in the Philippines — your spouse cannot skip this step. However, we can handle the PSA documents, CENOMAR, and DFA Apostille from Japan on your behalf.' },
        ]}
        ctaTitle="Questions about spouse visa documents? Start with a free consultation."
        ctaButton="Contact Us"
      />

      <RelatedLinks links={[
        { path: '/en/spouse-visa-documents/', label: 'Spouse Visa Documents Service (PSA, CENOMAR, Apostille)' },
        { path: '/en/spouse-visa-document-checklist/', label: 'Spouse Visa Document Checklist [2026]' },
        { path: '/en/psa-marriage-certificate/', label: 'PSA Marriage Certificate Retrieval' },
        { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
      ]} />
    </PageLayout>
  );
}
