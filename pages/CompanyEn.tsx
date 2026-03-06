import React from 'react';
import PageLayout from '../components/PageLayout';

export default function CompanyEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Company' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Company</h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6 space-y-4 text-sm text-gray-700">
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Company Name</span>
          <span className="col-span-2">IGRS Inc.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Location</span>
          <span className="col-span-2">Cebu, Philippines</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Services</span>
          <span className="col-span-2">Philippine document retrieval (PSA, NBI, LTO, DFA Apostille)</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Languages</span>
          <span className="col-span-2">English, Japanese</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="font-bold text-secondary">Contact</span>
          <span className="col-span-2">
            <a href="#contact" className="text-primary hover:underline">Go to Contact Form</a>
          </span>
        </div>
      </div>
    </PageLayout>
  );
}
