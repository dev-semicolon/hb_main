'use client';

import { useState, useEffect } from 'react';

type NewsCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const newsCards: NewsCard[] = [
  {
    id: 1,
    title: '금리는 멈추고, 환율은 지킨\n한국은행의 선택',
    description: '한국은행이 기준금리를 3%로 유지했습니다. 겉보기에는 변화가 없어 보이지만, 그 속에는 환율 안정·물가 관리·대외 리스크 방어라는 신중한 계산이 담겨 있습니다. 지금 상황에서 한국은행은 왜 금리를 내리지 않는 걸까요? 그리고 이 선택은 우리 경제에 어떤 신호를 보내고 있을까요?',
    image: '/today-news.png'
  },
  {
    id: 2,
    title: 'AI 중심 융합 생태계\n향후 10년의 승부처',
    description: '글로벌 테크 기업들이 AI 기술을 중심으로 생태계를 재편하고 있습니다. 단순한 기술 경쟁을 넘어서, 플랫폼과 서비스가 통합되는 새로운 패러다임이 만들어지고 있습니다.',
    image: '/today-news.png'
  },
  {
    id: 3,
    title: '불안이 기회가 되는 순간\n투자자의 선택은',
    description: '시장의 불확실성이 높아질 때, 진정한 투자 기회가 찾아옵니다. 변동성 속에서 어떻게 안정적인 수익을 추구할 수 있을까요? 전략적 접근의 중요성이 그 어느 때보다 강조되고 있습니다.',
    image: '/today-news.png'
  },
  {
    id: 4,
    title: '지속 가능성\n이제는 선택이 아닌 투자 기준',
    description: 'ESG 투자는 더 이상 트렌드가 아닌 필수 요소가 되었습니다. 장기적 가치 창출과 리스크 관리, 그리고 사회적 책임이 결합된 새로운 투자 기준이 자리잡고 있습니다.',
    image: '/today-news.png'
  },
  {
    id: 5,
    title: '글로벌 경제 재편\n새로운 질서 속 기회 포착',
    description: '미중 관계, 공급망 재편, 신흥국 부상 등 글로벌 경제 질서가 빠르게 변화하고 있습니다. 이러한 구조적 변화 속에서 투자자들은 어떤 전략을 취해야 할까요?',
    image: '/today-news.png'
  }
];

export default function TodaysNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsCards.length);
      setProgress(0);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + newsCards.length) % newsCards.length);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsCards.length);
    setProgress(0);
  };

  const currentCard = newsCards[currentIndex];

  return (
    <section className="py-[100px] md:py-[140px] lg:py-[180px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px]">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-[50px] min-h-[400px] md:min-h-[380px]">
        <div 
          className="w-full md:w-[590px] h-[250px] md:h-[380px] rounded-[10px] bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url(${currentCard.image})` }}
        ></div>
        <div className="flex-1 space-y-6 md:space-y-10 h-full flex flex-col justify-between">
          <div className="space-y-5 md:space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-base md:text-xl font-medium leading-[130%] tracking-[0.15px] text-[#272727]">
                today's news
              </p>
              <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727] transition-all duration-700 ease-in-out whitespace-pre-line min-h-[80px] md:min-h-[110px] lg:min-h-[130px]">
                {currentCard.title}
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl leading-[32px] tracking-[0.5px] text-[#74777A] break-keep transition-all duration-700 ease-in-out line-clamp-3 min-h-[96px]">
              {currentCard.description}
            </p>
          </div>
          <button className="px-5 py-2.5 border border-[#272727] rounded-[50px] text-sm md:text-base tracking-[0.5px] text-[#272727] hover:bg-[#272727] hover:text-[#FCFCFC] transition-colors w-fit">
            더 알아보기
          </button>
        </div>
        </div>

        <div className="max-w-[1240px] mx-auto mt-[30px] flex items-center justify-center gap-3 md:gap-5">
        <div className="flex-1 flex items-center gap-2">
          {newsCards.map((_, index) => (
            <div 
              key={index}
              className="flex-1 relative h-0.5 bg-[#E0E1E3] rounded-full overflow-hidden cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <div 
                className="absolute left-0 top-0 h-full bg-[#298487] transition-all ease-linear rounded-full"
                style={{ 
                  width: index === currentIndex ? `${progress}%` : '0%',
                  transitionDuration: index === currentIndex ? '100ms' : '300ms'
                }}
              ></div>
            </div>
          ))}
        </div>
        <button 
          onClick={goToPrev}
          className="w-[30px] h-[30px] rounded-full border-[1.5px] border-[#E0E1E3] hover:border-[#298487] flex items-center justify-center transition-colors group"
        >
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M5 1L1 6L5 11" stroke="#E0E1E3" strokeWidth="1.5" className="group-hover:stroke-[#298487] transition-colors"/>
          </svg>
        </button>
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="w-[30px] h-[30px] rounded-full border-[1.5px] border-[#298487] flex items-center justify-center hover:bg-[#298487] transition-colors group"
        >
          {isPaused ? (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="ml-0.5">
              <path d="M1 1L9 6L1 11V1Z" fill="#298487" className="group-hover:fill-[#FCFCFC] transition-colors"/>
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <rect x="1" y="1" width="3" height="10" fill="#298487" className="group-hover:fill-[#FCFCFC] transition-colors"/>
              <rect x="6" y="1" width="3" height="10" fill="#298487" className="group-hover:fill-[#FCFCFC] transition-colors"/>
            </svg>
          )}
        </button>
        <button 
          onClick={goToNext}
          className="w-[30px] h-[30px] rounded-full border-[1.5px] border-[#298487] hover:bg-[#298487] flex items-center justify-center rotate-180 transition-colors group"
        >
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M5 1L1 6L5 11" stroke="#298487" strokeWidth="1.5" className="group-hover:stroke-[#FCFCFC] transition-colors"/>
          </svg>
        </button>
          <span className="text-base md:text-xl font-bold leading-[110%] tracking-[-0.03em] text-[#298487]">{currentIndex + 1}/{newsCards.length}</span>
        </div>
      </div>
    </section>
  );
}
