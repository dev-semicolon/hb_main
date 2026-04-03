import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="py-[100px]">
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
