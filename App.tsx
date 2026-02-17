import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { trackLandingView } from './lib/analytics';

export default function App() {
  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />
      <main>
        <Hero />
        <QuickFacts />
        <PainPoints />
        <Services />
        <WhyUs />
        <CaseStudies />
        <Process />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
