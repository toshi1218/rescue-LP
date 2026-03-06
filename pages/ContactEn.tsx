import React from 'react';
import PageLayout from '../components/PageLayout';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Contact' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Contact Us — Free Consultation</h1>
      <p className="text-sm text-gray-600 mb-6">
        Tell us your case and we will confirm what documents you need, how long it takes, and the all-inclusive price.
      </p>
      <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input name="name" required placeholder="John Smith" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input name="email" type="email" required placeholder="example@email.com" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
          <textarea name="message" required rows={5} placeholder="Example: I am filing a K-1 visa petition and need CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. My target USCIS submission date is [month/year]." className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <button type="submit" className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-hover transition-colors">
          Send Message
        </button>
      </form>
    </PageLayout>
  );
}
