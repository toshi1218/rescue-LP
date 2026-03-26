import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';

export default function KojinJohoHogoEn() {
  useMeta(
    'Personal Information Protection Policy — ph-document.com',
    'Personal information protection policy for ph-document.com (IGRS Inc.). Covers data collection, use, third-party sharing, security, user rights, cookies, and contact information.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Personal Information Protection Policy' }]}
      jsonLd={[]}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary mb-2">Personal Information Protection Policy</h1>
        <p className="text-sm text-gray-500 mb-8">IGRS Inc. (ph-document.com)</p>

        <div className="space-y-10 text-sm text-gray-700 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">1. Business Operator</h2>
            <p>
              This website (ph-document.com) is operated by <strong>IGRS Inc.</strong> (hereinafter "we" or "the Company"). We handle personal information responsibly in accordance with applicable laws and regulations, including Japan's Act on the Protection of Personal Information (個人情報保護法).
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">2. Personal Information We Collect</h2>
            <p className="mb-3">We may collect the following types of personal information when you use our services or contact us:</p>
            <ul className="space-y-1 pl-4">
              {[
                'Name',
                'Email address',
                'Phone number',
                'Residential address (where required for document delivery)',
                'Document-related information you provide when requesting our services (e.g., names, dates of birth, document types needed)',
                'Information you provide through inquiry or consultation forms',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">3. Purpose of Use</h2>
            <p className="mb-3">We use collected personal information for the following purposes:</p>
            <ul className="space-y-1 pl-4">
              {[
                'Providing and managing the document acquisition and related services you have requested',
                'Responding to inquiries, consultations, and communications',
                'Shipping documents and related correspondence to you',
                'Sending service-related notifications and updates',
                'Improving our services and website',
                'Complying with legal obligations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">We will not use personal information beyond the stated purposes without your prior consent, except as required by law.</p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">4. Third-Party Disclosure</h2>
            <p className="mb-3">We do not provide personal information to third parties without your consent, except in the following cases:</p>
            <ul className="space-y-1 pl-4">
              {[
                'When required by law or court order',
                'When disclosure is necessary to protect life, health, or property and it is difficult to obtain consent',
                'When necessary for public health or the sound upbringing of children, and it is difficult to obtain consent',
                'When cooperating with a national or local government body in carrying out legally prescribed duties',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We may share personal information with service providers (e.g., shipping carriers such as DHL, payment processors) to the extent necessary to fulfil your service request. These providers are contractually bound to handle your information appropriately and not to use it for other purposes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">5. Security Measures</h2>
            <p>
              We take appropriate technical and organizational measures to protect personal information against unauthorized access, loss, destruction, alteration, and leakage. Access to personal information is restricted to authorized personnel only, and we continually review our security practices.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to request:</p>
            <ul className="space-y-1 pl-4">
              {[
                'Disclosure of personal information we hold about you',
                'Correction of inaccurate personal information',
                'Deletion of personal information',
                'Suspension of use of your personal information',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the contact information in Section 9 below. We will respond within a reasonable timeframe. Please note that we may need to verify your identity before processing a request.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">7. Cookies and Access Analytics</h2>
            <p className="mb-3">
              This website uses cookies and access analytics tools (including Google Analytics) to understand how visitors use the site and to improve our content and services.
            </p>
            <p className="mb-3">
              Google Analytics uses cookies to collect anonymized traffic data. This data does not identify individual users. You can disable cookies through your browser settings or opt out of Google Analytics data collection via Google's opt-out tools.
            </p>
            <p>
              For information on how Google handles data, please refer to Google's Privacy Policy.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">8. Policy Updates</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will post the updated policy on this page with a revised effective date. Continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">9. Contact</h2>
            <p className="mb-3">
              For inquiries regarding personal information, or to exercise your rights under this policy, please contact us through the inquiry form on this website.
            </p>
            <div className="rounded-xl bg-gray-50 border border-gray-200 px-5 py-4">
              <p className="font-semibold text-gray-800 mb-1">IGRS Inc.</p>
              <p className="text-gray-600">ph-document.com</p>
              <p className="text-gray-600 mt-2">Contact: via the inquiry form on this website</p>
            </div>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
            Last updated: March 1, 2026
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
