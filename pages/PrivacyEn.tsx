import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';

export default function PrivacyEn() {
  useMeta(
    'Privacy Policy | Philippine Document Service',
    'Privacy policy of Philippine Document Service (IGRS Inc.). Explains how we collect, use, and manage your personal information.',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Privacy Policy' }]}>
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Privacy Policy</h1>
        <div className="h-0.5 w-12 bg-primary mb-2" />
        <p className="text-xs text-gray-400 mb-8">Last updated: March 8, 2026</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">1. Business Information</h2>
            <p>
              IGRS Inc. (hereinafter "the Company") is a Japanese corporation headquartered in Wakayama City, Wakayama Prefecture, Japan.
              This Privacy Policy explains how we collect, use, and manage your personal information in connection with our Philippine document retrieval services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following personal information:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Full name (in both local script and Roman alphabet)',
                'Email address',
                'Phone number',
                'Mailing address (for document delivery)',
                'Inquiry and consultation details',
                'Document-related information required for service delivery (e.g., date of birth, passport number)',
                'Documents you choose to upload via our order-tracking portal (accessed with a tracking code and PIN), such as your passport or copies of previously issued civil-status or birth certificates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">3. Purpose of Use</h2>
            <p className="mb-3">Personal information collected is used solely for the following purposes:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Responding to inquiries and consultations',
                'Providing document retrieval services (including applications to Philippine government agencies)',
                'Arranging document shipping and delivery',
                'Sending important service-related communications (progress updates, delivery notifications, etc.)',
                'Compliance with applicable laws and regulations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">4. Third-Party Disclosure</h2>
            <p className="mb-3">
              We do not disclose or provide your personal information to third parties except in the following circumstances:
            </p>
            <ul className="space-y-1.5 pl-4">
              {[
                'With your explicit consent',
                'When necessary for service delivery (e.g., sharing with our Philippine-based partner staff, postal/courier services such as DHL). In such cases, we require appropriate information management from our partners',
                'When required by law or legal process',
                'When necessary to protect the life, safety, or property of individuals',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">5. Cross-Border Data Transfer</h2>
            <p>
              To provide our document retrieval services, your personal information (such as name, date of birth, and other application details)
              is shared with our partner staff based in the Philippines. The information shared is limited to the minimum necessary for service delivery,
              and we require our partners to implement appropriate information security measures.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">6. Data Security</h2>
            <p>
              We implement appropriate security measures to prevent unauthorized access, loss, or alteration of personal information.
              Access to personal information is restricted to authorized personnel who require it for service delivery.
              After the service is completed and the legally required retention period has elapsed, personal information is disposed of using appropriate methods.
            </p>
            <p className="mt-3">
              Documents uploaded through our order-tracking portal are stored on encrypted cloud storage and can only be accessed
              by the person who holds the matching tracking code and PIN, or by authorized staff. These uploaded files are
              deleted using the same disposal process described above.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">7. Cookies &amp; Analytics</h2>
            <p>
              This website uses access analytics tools such as Google Analytics to improve our services.
              These tools use cookies to collect access information, but this data does not include personally identifiable information.
              You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">8. Your Rights</h2>
            <p>
              You have the right to request disclosure, correction, deletion, or suspension of use of your personal information held by us.
              Upon receiving such a request, we will verify your identity and respond within a reasonable period.
              Please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">9. Policy Changes</h2>
            <p>
              This policy may be revised in response to changes in laws or our services.
              Significant changes will be announced on this website.
              The most current version of this policy is always available on this page.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">10. Contact</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-1">
              <p className="font-bold text-secondary">IGRS Inc.</p>
              <p className="text-gray-600">Wakayama City, Wakayama Prefecture, Japan</p>
              <p className="text-gray-600">
                Email: <a href="/en/contact" className="text-primary hover:underline">Please use our contact form</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
