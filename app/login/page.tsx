import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LoginForm from '../components/login/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="flex items-center justify-center py-48 px-5">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
