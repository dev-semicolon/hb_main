'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WelcomeSection() {
  const [isHovered, setIsHovered] = useState(false);

  const cards = [
    {
      title: "기술&서비스",
      description: "퀀텀만의<br />독자적인<br />투자 컨설팅 서비스",
      button: "about",
      link: "/tech-service",
      image: "/news-section/about.png"
    },
    {
      title: "마켓 인사이트",
      description: "매일 업데이트되는<br />마켓정보를<br />한눈에 만나보세요!",
      button: "Insight",
      link: "/market-insight",
      image: "/news-section/Insight.png"
    },
    {
      title: "투자정보",
      description: "엄선된 정확한<br />정보들만<br />보여드려요!",
      button: "Information",
      link: "#",
      image: "/news-section/Information.png"
    },
    {
      title: "커뮤니티",
      description: "질문, 신고<br />이용약관<br />자료실",
      button: "Community",
      link: "/community",
      image: "/news-section/Community.png"
    }
  ];

  return (
    <section className="mt-[80px] md:mt-[120px] lg:mt-[150px] py-10 lg:py-2 mb-[200px] overflow-hidden">
      <div 
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-[80px] px-5 md:px-10 lg:px-[100px] lg:min-h-[450px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`w-full lg:w-[302px] space-y-4 md:space-y-5 text-center lg:text-left flex-shrink-0 transition-all duration-500 ${
          isHovered ? 'lg:opacity-0 lg:-translate-y-10 lg:pointer-events-none lg:w-0' : 'lg:opacity-100 lg:translate-y-0 lg:w-[302px]'
        }`}>
            <div className="space-y-2.5">
              <p className="text-base md:text-xl font-medium leading-[130%] tracking-[0.15px] text-[#272727]">
                Welcome aboard.
              </p>
              <h2 className="text-[36px] md:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727]">
                환영합니다.
              </h2>
            </div>
            <p className="text-base md:text-lg leading-[130%] tracking-[0.5px] text-[#74777A]">
              개인 투자자가 접하기 어려운 정보로 <br />선제적 매수, 전략적 매도를 실현합니다.
            </p>
        </div>

        <div className={`flex gap-4 md:gap-5 lg:gap-[30px] pt-2 transition-all duration-500 overflow-x-auto md:overflow-visible scrollbar-hide w-full lg:w-auto ${
          isHovered ? 'lg:-translate-x-[226px]' : 'lg:translate-x-0'
        }`}>
            {cards.map((card, index) => (
              <div 
                key={index}
                className="min-w-[220px] w-[220px] h-[400px] md:min-w-[240px] md:w-[240px] md:h-[420px] lg:w-[250px] lg:h-[450px] rounded-[10px] relative overflow-hidden flex items-end p-6 md:p-[30px] flex-shrink-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative space-y-8 md:space-y-10 lg:space-y-[50px]">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium leading-[130%] tracking-[0.15px] text-[#FCFCFC]">
                      {card.title}
                    </h3>
                    <p 
                      className={`text-sm md:text-base leading-[130%] tracking-[0.5px] text-[#FCFCFC] ${index === 3 ? 'w-[69px]' : ''}`}
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                  <Link href={card.link} className="px-4 md:px-5 py-2 md:py-2.5 border border-[#FCFCFC] rounded-[50px] text-sm md:text-base tracking-[0.5px] text-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#272727] transition-colors inline-block">
                    {card.button}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
