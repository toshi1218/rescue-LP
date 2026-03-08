import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
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

export default function HomeJa() {
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

