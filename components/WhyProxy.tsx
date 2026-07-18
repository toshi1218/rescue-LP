import React from 'react';
import { AlertTriangle, Globe, ShieldCheck } from 'lucide-react';

const WhyProxy: React.FC = React.memo(() => {
  return (
    <section className="py-14 bg-gray-50" aria-labelledby="why-proxy-heading">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary-dark uppercase tracking-widest mb-2">Why a Proxy Service?</p>
          <h2 id="why-proxy-heading" className="text-2xl md:text-3xl font-bold text-secondary leading-snug">
            Will Your Authority Accept<br className="hidden md:block" /> a Printed e-Certificate?
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
            PSA now issues e-Certificates that anyone can print — but <strong>many immigration authorities, consulates, and civil registries still require physical PSA originals</strong>, not printed e-Certificates or e-Apostille.
            Acceptance varies by country, authority, and document type.
          </p>
        </div>

        {/* Three-column cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-red-50 text-red-500 flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </span>
              <h3 className="text-base font-bold text-gray-800">The e-Certificate Problem</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              PSA e-Certificates are authentic — but <strong>authorities in UAE, Saudi Arabia, Korea, Italy, Germany, and others require physical PSA originals</strong>, not printouts.
              Since March 2026, DFA issues an electronic e-Apostille (PDF) for PSA civil documents — <strong>a paper Apostille is no longer available for these.</strong> Non-PSA documents such as NBI can still receive a paper Apostille, which a local intermediary obtains and forwards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-50 text-amber-500 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </span>
              <h3 className="text-base font-bold text-gray-800">What This Means for You</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you're applying for a US K-1 visa, Canada PR, Australian partner visa, European residence permit, or any other immigration case —
              you <strong>cannot order Apostille-authenticated originals online and have them mailed to your address abroad.</strong>
              You need someone physically present in the Philippines to receive and forward the documents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-green-50 text-green-600 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h3 className="text-base font-bold text-gray-800">How We Solve It</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              We first confirm what format your receiving authority accepts. Then our Cebu-based team handles PSA retrieval, DFA Apostille where required, and <strong>DHL Express international shipping directly to your address</strong> — in exactly the format your authority needs.
              No trip to the Philippines. No local contacts needed.
            </p>
          </div>

        </div>

        {/* Bottom CTA strip */}
        <div className="bg-secondary rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-white font-medium text-center sm:text-left">
            We verify your authority's requirements, then prepare the exact format needed — physical original, Apostille, or both.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 text-xs font-bold text-secondary bg-white px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap"
          >
            Free Consultation →
          </a>
        </div>

      </div>
    </section>
  );
});

export default WhyProxy;
