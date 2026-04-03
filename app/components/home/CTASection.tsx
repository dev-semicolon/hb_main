'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
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
        threshold: 0.7,
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
    <section className="py-[60px] md:py-[80px] lg:py-[100px] mb-[80px] md:mb-[120px] lg:mb-[160px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px]">
        <div 
          ref={sectionRef}
          className={`max-w-[1014px] mx-auto text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-6 md:mb-[30px]">
            <div className="w-0.5 h-[100px] md:h-[200px] bg-[#272727]"></div>
          </div>
          <div className="space-y-4 md:space-y-5">
            <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727]">
              Get started now!
            </h2>
            <p className="text-base md:text-xl lg:text-2xl leading-[140%] text-[#272727]">
              지속가능성에 무게를 둔 투자전략<br />
              퀀텀리포트가 제시하는 지속 가능한 투자 대응 전략
            </p>
          </div>
          <Link href="/membership" className="inline-block mt-6 md:mt-[30px] px-5 py-2.5 border border-[#272727] rounded-[50px] text-sm md:text-base tracking-[0.5px] text-[#272727] hover:bg-[#272727] hover:text-[#FCFCFC] transition-colors">
            MEMBERSHIPS
          </Link>
        </div>
      </div>
    </section>
  );
}
