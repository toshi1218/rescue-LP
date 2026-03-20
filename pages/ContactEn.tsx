import React, { useState, useEffect } from 'react';
import { Send, Mail, ShieldCheck, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactEn() {
  const [service, setService] = useState('');
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();

  useEffect(() => {
    const handler = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener('setContactService', handler);
    return () => window.removeEventListener('setContactService', handler);
  }, []);

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Contact' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Contact Us — Free Consultation</h1>
      <p className="text-sm text-gray-600 mb-4">
        Tell us your case and we will confirm what documents you need, how long it takes, and the all-inclusive price.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        We handle inquiries by email only. The form below sends your message to our inbox.
      </p>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Clock className="w-3.5 h-3.5 text-primary" />
          Reply within 24 hours
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          Free cancellation before we start
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Mail className="w-3.5 h-3.5 text-primary" />
          Email only
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Clock className="w-3.5 h-3.5 text-primary" />
          Mon-Fri, 9:00-17:00 PHT
        </span>
      </div>

      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="space-y-4 max-w-xl"
        onSubmit={() => trackEvent('form_submit', { location: 'contact_page', type: 'formspree', variant: ctaVariant, traffic_source: trafficSource })}
      >
        <input type="hidden" name="_subject" value="[Philippine Document Service Inquiry - EN]" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="cta_variant" value={ctaVariant} />
        <input type="hidden" name="traffic_source" value={trafficSource} />
        <input type="hidden" name="landing_page" value="https://ph-document.com/en/contact/" />

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input
            name="name"
            required
            placeholder="John Smith"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Purpose <span className="text-red-500">*</span>
          </label>
          <select
            name="service"
            required
            value={service}
            onChange={e => setService(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">Select purpose</option>
            <option value="International Marriage">International Marriage</option>
            <option value="Spouse Visa">Spouse Visa</option>
            <option value="License Transfer">License Transfer</option>
            <option value="Naturalization">Naturalization</option>
            <option value="Custom Roadmap">Custom Roadmap</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Example: I am filing a K-1 visa petition and need CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. My target USCIS submission date is [month/year]."
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>

      <a
        href="mailto:igrs20200601@gmail.com"
        className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
      >
        <Mail className="w-4 h-4" />
        Email us directly (igrs20200601@gmail.com)
      </a>
    </PageLayout>
  );
}
