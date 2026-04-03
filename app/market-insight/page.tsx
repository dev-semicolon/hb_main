import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MarketInsightGrid from '../components/market-insight/MarketInsightGrid';

export default function MarketInsightPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <main className="py-[100px]">
        <MarketInsightGrid />
      </main>
      <Footer />
    </div>
  );
}
