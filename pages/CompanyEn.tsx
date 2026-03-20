import React from 'react';
import PageLayout from '../components/PageLayout';

export default function CompanyEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'About Us' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-6">About Us</h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6 space-y-4 text-sm text-gray-700">
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Company Name</span>
          <span className="col-span-2">IGRS Inc.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Head Office</span>
          <span className="col-span-2">Wakayama City, Wakayama, Japan</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Operations Office</span>
          <span className="col-span-2">Cebu City, Cebu, Philippines</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Services</span>
          <span className="col-span-2">Philippine document retrieval — PSA (Birth Certificate, Marriage Certificate, CENOMAR), NBI Clearance, LTO Driver's Record, DFA Apostille authentication</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Who We Serve</span>
          <span className="col-span-2">US petitioners for K-1 / CR-1 / IR-1 visas, naturalization applicants, employers hiring Filipino nationals</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">Language Support</span>
          <span className="col-span-2">English · Filipino (Tagalog)</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="font-bold text-secondary">Contact</span>
          <span className="col-span-2">
            <a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline">igrs20200601@gmail.com</a>
          </span>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-secondary/[0.03] border border-secondary/10 p-6">
        <h2 className="text-sm font-bold text-secondary mb-4">Business Hours, Payment, and Refunds</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-secondary mb-1">Business hours</p>
            <p>Monday to Friday, 9:00-17:00 Philippines time (PHT).</p>
          </div>
          <div>
            <p className="font-semibold text-secondary mb-1">Contact</p>
            <p>Email only. We do not offer phone support.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary mb-1">Payment methods</p>
            <p>Japan: bank transfer. United States: credit card or PayPal.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary mb-1">Cancellation & refund</p>
            <p>Free before we start. After we begin, actual expenses and work already performed are non-refundable. Final payment is due after document copies are confirmed and before shipping.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
