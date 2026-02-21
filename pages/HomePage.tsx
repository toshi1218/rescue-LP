import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickFacts from '../components/QuickFacts';
import GuideLinks from '../components/GuideLinks';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';

export default function HomePage() {
  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white text-secondary text-sm font-bold px-3 py-2 rounded shadow">
        メインコンテンツへスキップ
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <GuideLinks />
        <QuickFacts />
        <PainPoints />
        <Services />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
