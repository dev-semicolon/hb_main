import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TermsContent from '../components/terms/TermsContent';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="py-[100px]">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
