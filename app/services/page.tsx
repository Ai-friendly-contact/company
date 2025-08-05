
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesHero from './ServicesHero';
import ServiceDetails from './ServiceDetails';
import ProcessFlow from './ProcessFlow';
import ServicePricing from './ServicePricing';
import ServiceCTA from './ServiceCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesHero />
        <ServiceDetails />
        <ProcessFlow />
        <ServicePricing />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
}