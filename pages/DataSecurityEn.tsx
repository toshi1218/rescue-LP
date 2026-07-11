import React from 'react';
import { ShieldCheck, Lock, Landmark, Trash2, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

export default function DataSecurityEn() {
  useMeta(
    'How We Protect Your Documents & Personal Data — ph-document.com',
    'Why we never exchange passports, PSA certificates, or CENOMAR images over WhatsApp, Facebook Messenger, or email attachments — and how our secure upload environment, safe payment practices, and 3-month data deletion policy protect you.',
    'https://ph-document.com/en/data-security/',
  );

  const promises = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: 'No sensitive documents over chat or email',
      desc: 'We never ask you to send passport or certificate images over WhatsApp, Facebook Messenger, or as email attachments. Documents are exchanged through a secure environment we set up for you.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-primary" />,
      title: 'We never ask for payment details over chat',
      desc: 'Payment is by bank transfer to our Japanese account, or via Wise for international clients. Account details come only in our formal instructions — we never ask for card numbers or banking passwords in a chat message or email.',
    },
    {
      icon: <Trash2 className="w-6 h-6 text-primary" />,
      title: 'Data deleted within 3 months',
      desc: 'Digital copies of your documents are deleted within 3 months after your order is complete. Paper copies are physically shredded.',
    },
  ];

  const sensitiveDocs = [
    'Passport',
    'PSA Birth Certificate',
    'CENOMAR (Certificate of No Marriage)',
    'PSA Marriage Certificate',
    'NBI Clearance',
    'Driver\'s license / LTO records',
    'Special Power of Attorney (SPA) / affidavits',
    'Anything showing your name, date of birth, address, or family details',
  ];

  const snsRisks = [
    {
      title: 'Chat images stay in the history forever',
      desc: 'Once you send a photo of your passport, it stays in both chat histories. A lost phone or a hijacked account puts that image straight into a stranger\'s hands.',
    },
    {
      title: 'One tap to forward or mis-send',
      desc: 'Messenger apps are built for easy sharing — which is exactly the problem. A wrong recipient or a casual forward can expose your identity documents in seconds.',
    },
    {
      title: 'Email attachments are not safe either',
      desc: 'Email passes through multiple servers on the way to us, and a mis-sent email cannot be recalled. You lose control of where copies of your documents end up.',
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Document & Data Security' }]}
      description="Why we never exchange passport or certificate images over WhatsApp, Messenger, or email attachments — and how our secure environment and data deletion policy protect you."
    >
      <HeroBanner
        title="How We Protect Your Documents & Personal Data"
        subtitle="We never exchange passport or certificate images over social media chat or email attachments. That is the foundation of our security policy."
        badges={['Security Commitment', 'IGRS Inc. — Japan']}
        ctaText="Get a free consultation"
        ctaHref="#contact"
      />

      <div className="space-y-12">

        {/* Three promises */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-2">Our three commitments</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            A document service handles some of the most sensitive information in your life — your passport,
            your birth certificate, your family records. That is why how we receive, store, and dispose of
            your data sits at the center of how this service is designed.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {promises.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm text-secondary mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What counts as sensitive */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">What we treat as a sensitive document</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Images or scans of the following are always handled as confidential — and never exchanged
            over social media chat or email attachments.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {sensitiveDocs.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {doc}
              </li>
            ))}
          </ul>
        </section>

        {/* Why not WhatsApp / Messenger / email */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">Why we don't use WhatsApp, Messenger, or email attachments</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Chat apps are great for staying in touch — and you are welcome to contact us on WhatsApp or by email
            for questions and updates. But for exchanging and storing identity documents, they carry risks we are
            not willing to take with your information.
          </p>
          <div className="space-y-3">
            {snsRisks.map((risk) => (
              <div key={risk.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-gray-800 mb-1">{risk.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How we exchange documents instead */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">How we exchange documents instead</h2>
          <div className="bg-secondary/[0.04] border border-secondary/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-secondary text-sm mb-2">A secure environment, set up for you</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Once your order is confirmed, we send you a dedicated, secure upload link for your documents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Transfers are encrypted (TLS) and files are stored in an access-restricted database managed by us
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Nothing sits in a chat history or an email inbox where it can leak later
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    You can also check your order progress in the same place — you always know which stage your documents are at
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Payments */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">How payments are handled</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            We believe payment details deserve the same care as identity documents.
            Payment is by <strong>bank transfer</strong> to our Japanese bank account, or via <strong>Wise</strong> for
            clients paying from outside Japan.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              Our account details are provided only in the formal instructions after your quote is confirmed — we will never suddenly ask you over chat to send money to a different account (treat any such message as a scam impersonating us)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              We will never ask for card numbers, banking passwords, or one time codes over chat or email — please don't send them even if asked by anyone claiming to be us
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              Payment is in two stages: 50 percent to begin, and the remaining 50 percent only after you review scanned copies of the completed documents
            </li>
          </ul>
        </section>

        {/* Retention & deletion */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">How long we keep your data — and how we delete it</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Data</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Handling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { target: 'Digital copies of your documents (images, scans)', action: 'Deleted within 3 months after your order is complete and delivery is confirmed' },
                  { target: 'Paper documents and photocopies', action: 'Physically destroyed by shredder' },
                  { target: 'Transaction records we must keep by law (accounting)', action: 'Kept only for the legally required period — document images are not part of these records' },
                  { target: 'Deletion requests from you', action: 'Honored at any time, as long as it does not block an order in progress' },
                ].map((row, i) => (
                  <tr key={row.target} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-secondary">{row.target}</td>
                    <td className="px-4 py-3 text-gray-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What we ask of you */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">What we ask of you</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                Please don't attach passport or certificate images to chat messages or emails. We will send you a secure upload link once your order is confirmed.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                If you do send a document over chat or email by mistake, we will delete our copy after confirming the contents and guide you to the secure environment instead.
              </li>
            </ul>
          </div>
        </section>

        {/* Related pages */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">Related pages</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/en/personal-information-protection/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              Personal Information Protection Policy
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/en/privacy/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              Privacy Policy
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
