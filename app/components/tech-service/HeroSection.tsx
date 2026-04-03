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
      className="relative w-full h-[600px] flex items-end justify-center"
      style={{
        backgroundImage: "url('/tech-hero.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-5">
        <div className="flex flex-col items-center p-0 gap-2 w-[612px] h-[99px] mb-10">
          <p className="w-[612px] h-[26px] font-['DM_Sans'] font-medium text-[20px] leading-[130%] text-center tracking-[0.15px] text-[#272727] flex-none order-0 self-stretch">
            Quantum Report
          </p>
          <h1 className="w-[612px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] flex-none order-1 self-stretch">
            {displayedText && renderTextWithHighlight(displayedText)}
          </h1>
        </div>
        <p className="w-[1000px] h-[96px] font-['DM_Sans'] font-normal text-[20px] leading-[32px] text-center tracking-[0.5px] text-[#74777A] flex-none order-1">
          개인 투자자가 시장에서 지속적으로 수익을 내기 어려운 이유는 단순히 정보 부족이 아닙니다. <br />검증되지 않은 정보의 과잉, 감정에 의한 판단, 그리고 전략 없는 진입이 실패의 본질입니다. <br />퀀텀리포트는 이 세 가지 문제를 구조적으로 해결합니다.
        </p>
      </div>
    </section>
  );
}
