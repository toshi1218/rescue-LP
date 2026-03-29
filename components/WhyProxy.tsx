import React from 'react';
import { AlertTriangle, Globe, ShieldCheck } from 'lucide-react';

/**
 * WhyProxy — "Why You Need a Proxy Service" section for the EN homepage.
 *
 * Core message: Official PSA channels (PSA Helpline / Serbilis) can ship
 * regular PSA certificates internationally, but they CANNOT ship
 * paper-based DFA Apostille documents overseas. An intermediary in the
 * Philippines is the only way to get Apostille-authenticated originals
 * delivered to your door worldwide.
 */
const WhyProxy: React.FC = React.memo(() => {
  return (
    <section className="py-14 bg-gray-50" aria-labelledby="why-proxy-heading">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary-dark uppercase tracking-widest mb-2">Why a Proxy Service?</p>
          <h2 id="why-proxy-heading" className="text-2xl md:text-3xl font-bold text-secondary leading-snug">
            Official Channels Cannot Ship<br className="hidden md:block" /> Paper Apostille Overseas
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            PSA Helpline and Serbilis can mail regular PSA certificates internationally —
            but <strong>paper-based DFA Apostille documents cannot be shipped directly overseas</strong> through any official channel.
            A local intermediary in the Philippines is the only path.
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
              <h3 className="text-sm font-bold text-gray-800">The Official Limitation</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              DFA Apostille is issued as a <strong>physical paper document</strong> attached to the original certificate.
              PSA Helpline and Serbilis offer e-Apostille for digital use, but <strong>paper Apostille originals — required by USCIS, IRCC, Home Affairs, and UKVI — cannot be shipped overseas through official channels.</strong>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-50 text-amber-500 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </span>
              <h3 className="text-sm font-bold text-gray-800">What This Means for You</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
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
              <h3 className="text-sm font-bold text-gray-800">How We Solve It</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our Cebu-based team handles the entire process locally — PSA retrieval, DFA Apostille authentication,
              and <strong>DHL Express international shipping directly to your address</strong> — wherever you are in the world.
              No trip to the Philippines. No local contacts needed.
            </p>
          </div>

        </div>

        {/* Bottom CTA strip */}
        <div className="bg-secondary rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-medium text-center sm:text-left">
            We handle everything from PSA to DFA Apostille to DHL — so you don't have to.
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
