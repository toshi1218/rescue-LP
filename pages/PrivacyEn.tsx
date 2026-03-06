import React from 'react';
import PageLayout from '../components/PageLayout';

export default function PrivacyEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Privacy Policy' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">1. Collection of Personal Information</h2>
          <p>We collect personal information such as your name, email address, and inquiry details through our contact form and during the course of service delivery.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">2. Purpose of Use</h2>
          <p>Personal information collected is used solely for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responding to inquiries and consultations</li>
            <li>Providing document retrieval services</li>
            <li>Sending important service-related communications</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">3. Third-Party Disclosure</h2>
          <p>We do not disclose or provide personal information to third parties except as required by law.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">4. Security</h2>
          <p>We implement appropriate security measures to prevent unauthorized access, loss, or alteration of personal information.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">5. Contact</h2>
          <p>For inquiries regarding the handling of personal information, please use our <a href="#contact" className="text-primary hover:underline">contact form</a>.</p>
        </section>
      </div>
    </PageLayout>
  );
}
