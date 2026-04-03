'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="h-[500px] md:h-[650px] lg:h-[800px] bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      <Image
        src="/hero image.png"
        alt="Hero Background"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative h-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-5 md:px-10 lg:px-[90px]">
        <div 
          ref={contentRef}
          className="max-w-[1014px] text-center space-y-4 md:space-y-5"
        >
          <h1 className={`text-[32px] md:text-[48px] lg:text-[60px] font-black leading-[120%] text-[#FDFDFD] transition-all duration-[1000ms] ease-out delay-[100ms] ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            Everyone is like a<br className="hidden md:block" />professional investor
          </h1>
          <p className={`text-sm md:text-lg lg:text-2xl leading-[140%] text-[#FDFDFD] px-4 md:px-0 transition-all duration-[1000ms] ease-out delay-[400ms] ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            실시간으로 주요 투자기관들의 움직임을 파악하고, 정교하게 설계된 전략적 포트폴리오를 통해 <br className="hidden lg:block" />개인 투자자들이 보다 안정적이고 전문적인 투자 환경을 경험할 수 있도록 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
