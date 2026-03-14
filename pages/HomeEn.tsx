import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import WhyProxy from '../components/WhyProxy';
import TrustTransparency from '../components/TrustTransparency';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import DiyRisks from '../components/DiyRisks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';

export default function HomeEn() {
  useMeta(
    'Philippine Document Service — CENOMAR, PSA, NBI & Apostille Shipped Worldwide',
    'We retrieve PSA Birth Certificates, CENOMAR (Certificate of No Marriage), NBI Clearance, and DFA Apostille from the Philippines. Shipped worldwide via DHL for US, Canada, Australia, UK immigration and visa applications. Free consultation.',
    'https://ph-document.com/en/',
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />
      <main>
        <Hero />
        <GuideLinks />
        <QuickFacts />
        <PainPoints />
        <WhyProxy />
        <TrustTransparency />
        <Services />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <DiyRisks />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

