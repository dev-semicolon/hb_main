import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSection from "./components/home/HeroSection";
import WelcomeSection from "./components/home/WelcomeSection";
import MarketInfoSection from "./components/home/MarketInfoSection";
import TodaysNewsSection from "./components/home/TodaysNewsSection";
import InvestmentInfoSection from "./components/home/InvestmentInfoSection";
import StrategyBannerSection from "./components/home/StrategyBannerSection";
import MarketInsightSection from "./components/home/MarketInsightSection";
import CTASection from "./components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <MarketInfoSection />
      <TodaysNewsSection />
      <InvestmentInfoSection />
      <StrategyBannerSection />
      <MarketInsightSection />
      <CTASection />
      <Footer />
    </div>
  );
}
