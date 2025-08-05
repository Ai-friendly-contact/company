
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CompaniesHero from './CompaniesHero';
import CompaniesServices from './CompaniesServices';
import CompaniesContact from './CompaniesContact';

export default function CompaniesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CompaniesHero />
      <CompaniesServices />
      <CompaniesContact />
      <Footer />
    </div>
  );
}
