import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NoticeList from '../components/notice/NoticeList';

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="py-[100px]">
        <NoticeList />
      </main>
      <Footer />
    </div>
  );
}
