import React from 'react';
import PageLayout from '../components/PageLayout';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Contact' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Contact</h1>
      <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3 max-w-xl">
        <input name="name" required placeholder="Name" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
        <textarea name="message" required rows={5} placeholder="Message" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
        <button type="submit" className="bg-primary text-white font-bold px-6 py-3 rounded-xl">Send</button>
      </form>
    </PageLayout>
  );
}

