'use client';

import { useState, useRef, useEffect } from 'react';

type Category = 'all' | 'global' | 'domestic';

export default function InvestmentInfoSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categories = [
    { id: 'all' as Category, label: '전체' },
    { id: 'global' as Category, label: '글로벌 투자동향' },
    { id: 'domestic' as Category, label: '국내 주요 동향' }
  ];

  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth
      });
    }
  }, [activeCategory]);

  const articles = [
    {
      category: "글로벌 투자동향",
      title: "불안이 기회가 되는 순간, 투자자의 선택은...",
      description: "미국과 중국을 중심으로 한 글로벌 관세충돌은 금융시장 전반에 크고 작은 반동을 일으키고 있습니다. 이것은...",
      date: "2025.04.09"
    },
    {
      category: "글로벌 투자동향",
      title: "금리는 멈추고, 환율은 지킨 한국은행의 선택",
      description: "한국은행이 기준금리를 3%로 유지했습니다. 겉보기에는 변화가 없어 보이지만, 그 속에는 환율 안정·물가 관리·대외 리스크 방어라는 신중한 계산이 담겨 있습니다. 지금 상황에서 한국은행은 왜 금리를 내리지 않는 걸까요? 그리고 이 선택은 우리 경제에 어떤 신호를 보내고 있을까요?",
      date: "2025.04.09"
    },
    {
      category: "글로벌 투자동향",
      title: "불안이 기회가 되는 순간, 투자자의 선택은...",
      description: "미국과 중국을 중심으로 한 글로벌 관세충돌은 금융시장 전반에 크고 작은 반동을 일으키고 있습니다. 이것은...",
      date: "2025.04.09"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px]">
        <div className="max-w-[1150px] mx-auto space-y-10 md:space-y-[60px]">
        <div className="text-center space-y-5">
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727]">
            오늘의 투자정보
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#EFF7FA] rounded-[100px] p-2 overflow-x-auto max-w-full relative">
            {categories.map((category) => (
              <button 
                key={category.id}
                ref={(el) => { buttonRefs.current[category.id] = el; }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-5 py-1 rounded-[50px] text-sm md:text-base tracking-[0.5px] whitespace-nowrap transition-colors duration-300 ease-in-out relative z-10 ${
                  activeCategory === category.id
                    ? 'text-[#FCFCFC]'
                    : 'text-[#74777A]'
                }`}
              >
                {category.label}
              </button>
            ))}
            <div 
              className="absolute bg-[#298487] rounded-[50px] transition-all duration-300 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                top: '8px',
                bottom: '8px'
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] lg:gap-[50px] transition-all duration-500 ease-in-out">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(33.333%-20px)] lg:w-[350px] border border-[#E6E7E9] rounded-tr-[20px] p-6 md:p-8 lg:p-[50px] space-y-10 md:space-y-20 opacity-0 animate-fadeInSlide"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-5 md:space-y-[30px]">
                <div className="space-y-3 md:space-y-[15px]">
                  <span className="inline-block px-4 md:px-5 py-2 md:py-2.5 bg-[#EFF7F8] rounded-[100px] text-xs md:text-sm text-[#272727] tracking-[0.5px]">
                    {article.category}
                  </span>
                  <h3 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-[130%] tracking-[0.5px] text-[#272727] line-clamp-2 break-keep">
                    {article.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-[130%] tracking-[0.5px] text-[#74777A] line-clamp-3 break-keep">
                  {article.description}
                </p>
              </div>
              <p className="text-xs md:text-sm text-[#74777A] tracking-[0.5px]">{article.date}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
