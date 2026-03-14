import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RouteCards from '../components/RouteCards';
import TrustSimple from '../components/TrustSimple';
import ServicePacks from '../components/ServicePacks';
import FinalCta from '../components/FinalCta';
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
        <RouteCards />
        <TrustSimple />
        <ServicePacks />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
