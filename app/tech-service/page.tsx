import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/tech-service/HeroSection';
import IntroSection from '../components/tech-service/IntroSection';
import NextOneSection from '../components/tech-service/NextOneSection';
import ServiceDetailsSection from '../components/tech-service/ServiceDetailsSection';
import ServiceDiagramSection from '../components/tech-service/ServiceDiagramSection';
import BenefitsSection from '../components/tech-service/BenefitsSection';
import CTASection from '../components/tech-service/CTASection';

export default function TechServicePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] font-['DM_Sans']">
      <Header />
      <div className="mb-32">
        <HeroSection />
      </div>
      <div className="mb-32">
        <IntroSection />
      </div>
      <div>
        <NextOneSection />
      </div>
      <div className="relative overflow-hidden h-[200px]">
        <div className="absolute flex flex-row items-center gap-[60px] animate-scrollLeft">
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
          <div 
            className="font-bold text-[130px] leading-[130%] text-center text-[#F0F5F8] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-goldman)' }}
          >
            NEXT ONE
          </div>
        </div>
      </div>
      <div className="mb-32">
        <ServiceDetailsSection />
      </div>
      <div className="mb-32">
        <ServiceDiagramSection />
      </div>
      <div className="mb-32">
        <BenefitsSection />
      </div>
      <div className="mb-32">
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
