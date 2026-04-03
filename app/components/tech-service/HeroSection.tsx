'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '전략적이고 전문적인 투자';
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const renderTextWithHighlight = (text: string) => {
    return text.split('').map((char, i) => {
      const isHighlighted = 
        (i >= 0 && i < 3) || 
        (i >= 5 && i < 8);
      
      return (
        <span 
          key={i}
          className={`${char === ' ' ? '' : 'inline-block'} ${isHighlighted ? 'text-[#298487]' : 'text-black'} ${
            !isComplete ? 'animate-fadeIn' : ''
          }`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-center"
      style={{
        backgroundImage: "url('/tech-hero.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-2 w-full max-w-[612px] mb-6 md:mb-8 lg:mb-10">
          <p className="w-full font-['DM_Sans'] font-medium text-base md:text-lg lg:text-[20px] leading-[130%] text-center tracking-[0.15px] text-[#272727]">
            Quantum Report
          </p>
          <h1 className="w-full font-['DM_Sans'] font-bold text-[28px] md:text-[38px] lg:text-[50px] leading-[130%] text-center tracking-[0.5px]">
            {displayedText && renderTextWithHighlight(displayedText)}
          </h1>
        </div>
        <p className="w-full max-w-[1000px] font-['DM_Sans'] font-normal text-sm md:text-base lg:text-[20px] leading-[150%] md:leading-[160%] lg:leading-[32px] text-center tracking-[0.5px] text-[#74777A] break-keep">
          개인 투자자가 시장에서 지속적으로 수익을 내기 어려운 이유는 단순히 정보 부족이 아닙니다. <br className="hidden md:block" />검증되지 않은 정보의 과잉, 감정에 의한 판단, 그리고 전략 없는 진입이 실패의 본질입니다. <br className="hidden md:block" />퀀텀리포트는 이 세 가지 문제를 구조적으로 해결합니다.
        </p>
      </div>
    </section>
  );
}
