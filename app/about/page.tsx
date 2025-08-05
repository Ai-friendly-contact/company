
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyInfo from './CompanyInfo';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <CompanyInfo />
      <Footer />
    </div>
  );
}
