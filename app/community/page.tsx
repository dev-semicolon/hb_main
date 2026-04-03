import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CommunityList from '../components/community/CommunityList';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="py-[100px]">
        <CommunityList />
      </main>
      <Footer />
    </div>
  );
}
