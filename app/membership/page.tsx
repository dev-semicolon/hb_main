import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MembershipHero from '../components/membership/MembershipHero';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main>
        <MembershipHero />
      </main>
      <Footer />
    </div>
  );
}
