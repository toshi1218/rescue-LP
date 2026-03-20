import React from 'react';
import PageLayout from '../components/PageLayout';

export default function TermsEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Terms of Service' }]}>
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Terms of Service</h1>
        <div className="h-0.5 w-12 bg-primary mb-2" />
        <p className="text-xs text-gray-400 mb-8">Last updated: March 8, 2026</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">1. Service Overview</h2>
            <p>
              IGRS Inc. (hereinafter "the Company") provides Philippine document retrieval services, including
              PSA certificates (Birth Certificate, Marriage Certificate, CENOMAR), NBI Clearance, DFA Apostille authentication,
              and international shipping via DHL Express. By using our services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">2. Service Scope &amp; Limitations</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'We retrieve documents from Philippine government agencies (PSA, NBI, DFA) on your behalf',
                'We do NOT provide legal advice or legal representation. For legal matters, please consult a licensed attorney',
                'Processing results depend on Philippine government agency operations, which are outside our control',
                'We cannot guarantee the specific contents of documents issued by government agencies',
                'Our services are limited to document retrieval, authentication, and delivery as described on our website',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">3. Ordering &amp; Payment</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'Services begin after we confirm your requirements and you pay the 50% retainer',
                'All prices are quoted in JPY or USD, depending on your location and preference',
                'Japan orders are paid by bank transfer; U.S. orders are paid by credit card or PayPal',
                'The remaining balance is due after document copies are confirmed and before shipping',
                'Quoted prices include only the items explicitly listed. Additional requests may incur additional fees',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">4. Processing Times</h2>
            <p>
              Estimated processing time is approximately 4–6 weeks in total, including document retrieval, DFA Apostille authentication, and international shipping.
              However, actual timelines depend on Philippine government agency processing speeds and are not guaranteed.
              If delays occur, we will notify you promptly and provide updated estimates.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">5. Cancellation &amp; Refunds</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'Cancellation is free of charge before we begin processing your request',
                'After we begin, actual expenses and work already performed are non-refundable',
                'We ship only after document copies are confirmed and the final balance has been paid',
                'To cancel or discuss refund eligibility, please contact us as soon as possible',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">6. Client Responsibilities</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'Provide accurate and complete personal information required for document retrieval',
                'Respond to our inquiries and confirmation requests within a reasonable timeframe',
                'Inform us of any submission deadlines in advance so we can plan accordingly',
                'Confirm that the documents you are requesting are appropriate for your intended purpose',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">7. Limitation of Liability</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'We are not liable for delays caused by Philippine government agencies, natural disasters, or other force majeure events',
                'We are not responsible for the contents of documents issued by government agencies',
                'Our total liability is limited to the amount of the service fee you have paid to us',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">8. Intellectual Property</h2>
            <p>
              All content, design, and materials on this website are the intellectual property of IGRS Inc. and are protected by applicable copyright and trademark laws.
              No part of this website may be reproduced, distributed, or used without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">9. Changes to Terms</h2>
            <p>
              These terms may be revised in response to changes in laws, regulations, or our services.
              Significant changes will be announced on this website.
              Your continued use of our services after such changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">10. Governing Law &amp; Contact</h2>
            <p className="mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of Japan.
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Wakayama District Court as the court of first instance.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 space-y-1">
              <p className="font-bold text-secondary">IGRS Inc.</p>
              <p className="text-gray-600">Wakayama City, Wakayama Prefecture, Japan</p>
              <p className="text-gray-600">
                Email: <a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline">igrs20200601@gmail.com</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
