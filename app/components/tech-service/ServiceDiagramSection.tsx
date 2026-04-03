'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServiceDiagramSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-20 lg:py-[150px] px-5">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[200px]">
        {/* Circular Diagram */}
        <div ref={sectionRef} className="relative w-[1054px] h-[888px] mx-auto">
          {/* Rotated Ellipse - 토성의 고리 */}
          <div 
            className={`absolute left-[calc(50%-407.5px)] top-[calc(50%-142.5px)] w-[815px] h-[285px] border-2 border-[#298487] transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ 
              borderRadius: '50%',
              transform: isVisible ? 'rotate(-30deg) scale(1)' : 'rotate(-30deg) scale(0.5)',
              transitionDelay: '800ms'
            }}
          />
          
          {/* Center Circle with dashed border */}
          <div 
            className={`absolute left-[calc(50%-300px)] top-[calc(50%-300px)] w-[600px] h-[600px] border-2 border-dashed border-[#272727] rounded-full transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionDelay: '600ms' }}
          />
          
          {/* Center Content */}
          <div 
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[30px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <p className="text-lg md:text-xl font-medium leading-[130%] tracking-[0.15px] text-[#272727] text-center">
              Next One Service
            </p>
            <h2 className="text-[36px] md:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#298487] text-center">
              NEXT ONE<br />서비스
            </h2>
          </div>

          {/* Top Point */}
          <div 
            className={`absolute w-[220px] h-[164px] left-[417px] top-0 flex flex-col items-center p-0 gap-[30px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <h3 className="w-[220px] h-[94px] font-['DM_Sans'] font-bold text-[36px] leading-[130%] text-center tracking-[0.5px] text-[#272727] flex-none order-0 self-stretch">
              개인 투자자의 정보 격차 해소
            </h3>
            <div className="w-[40px] h-[40px] rounded-[1000px] bg-[rgba(41,132,135,0.3)] flex flex-row justify-center items-center p-0 gap-[10px] flex-none order-1">
              <div className="w-[15px] h-[15px] rounded-full bg-[#298487] flex-none order-0" />
            </div>
          </div>

          {/* Bottom Point */}
          <div 
            className={`absolute w-[296px] h-[164px] left-[379px] bottom-0 flex flex-col items-center p-0 gap-[30px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="w-[40px] h-[40px] rounded-[1000px] bg-[rgba(41,132,135,0.3)] flex flex-row justify-center items-center p-0 gap-[10px] flex-none order-0">
              <div className="w-[15px] h-[15px] rounded-full bg-[#298487] flex-none order-0" />
            </div>
            <h3 className="w-[296px] h-[94px] font-['DM_Sans'] font-bold text-[36px] leading-[130%] text-center tracking-[0.5px] text-[#272727] flex-none order-1 self-stretch">
              감정 없는 원칙 기반 투자 습관
            </h3>
          </div>

          {/* Right Point */}
          <div 
            className={`absolute w-[247px] h-[134px] right-0 top-[377px] flex flex-row items-center p-0 gap-[30px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '1600ms' }}
          >
            <div className="w-[40px] h-[40px] rounded-[1000px] bg-[rgba(41,132,135,0.3)] flex flex-row justify-center items-center p-0 gap-[10px] flex-none order-0">
              <div className="w-[15px] h-[15px] rounded-full bg-[#298487] flex-none order-0" />
            </div>
            <h3 className="w-[220px] h-[94px] font-['DM_Sans'] font-bold text-[36px] leading-[130%] text-center tracking-[0.5px] text-[#272727] flex-none order-1">
              선제적 매수<br />전략적 매도
            </h3>
          </div>

          {/* Left Point */}
          <div 
            className={`absolute w-[247px] h-[134px] left-[-40px] top-[377px] flex flex-row items-center p-0 gap-[30px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '1800ms' }}
          >
            <h3 className="w-[220px] h-[94px] font-['DM_Sans'] font-bold text-[36px] leading-[130%] text-center tracking-[0.5px] text-[#272727] flex-none order-0">
              검증된<br />전문가 동행
            </h3>
            <div className="w-[40px] h-[40px] rounded-[1000px] bg-[rgba(41,132,135,0.3)] flex flex-row justify-center items-center p-0 gap-[10px] flex-none order-1">
              <div className="w-[15px] h-[15px] rounded-full bg-[#298487] flex-none order-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
