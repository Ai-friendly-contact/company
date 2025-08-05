'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JobseekersHero from './JobseekersHero';
import JobseekersServices from './JobseekersServices';
import JobseekersContact from './JobseekersContact';

export default function JobseekersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <JobseekersHero />
        <JobseekersServices />
        <JobseekersContact />
      </main>
      <Footer />
    </div>
  );
}