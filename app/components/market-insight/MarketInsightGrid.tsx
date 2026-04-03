'use client';

import { useState } from 'react';
import Image from 'next/image';

type Article = {
  id: number;
  category: string;
  title: string;
  dateRange: string;
  thumbnail: string;
};

const sampleArticles: Article[] = [
  { id: 1, category: '글로벌 투자동향', title: '불안이 기회가 되는 순간, 투자자의 선택은', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 2, category: '글로벌 투자동향', title: 'AI 중심 융합 생태계, 향후 10년의 승부처', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 3, category: '글로벌 투자동향', title: '금리는 멈추고, 환율은 지킨다… 한국은행의 선택', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 4, category: '글로벌 투자동향', title: '심상치 않은 소비재 물가 속, 투자자는 어디를 봐야 할까?', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 5, category: '글로벌 투자동향', title: '꿀떡이 열어준 새로운 길, K-푸드 투자 기회의 확장', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 6, category: '글로벌 투자동향', title: '뉴진스 하니 사건이 던진 질문: "연예인은 근로자인가?"', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 7, category: '글로벌 투자동향', title: '이삭 안딕의 유산, 그리고 망고가 남긴 패션 전략', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 8, category: '글로벌 투자동향', title: '일론 머스크의 연결 전략, 기술 제국의 확장', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 9, category: '글로벌 투자동향', title: '머스크의 다음 승부수, 로보택시가 바꿀 판', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 10, category: '글로벌 투자동향', title: '지속 가능성, 이제는 선택이 아닌 투자 기준', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 11, category: '글로벌 투자동향', title: '2024년 상반기 한국 시장 전망: 반도체 주도·금리 전환 기대감 속 산업별 기회와 리스크', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
  { id: 12, category: '글로벌 투자동향', title: '새로운 투자 기회를 찾아서', dateRange: '2026.04.01 ~ 2026.04.30', thumbnail: '/placeholder.jpg' },
];

export default function MarketInsightGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 w-full max-w-[1240px] mx-auto px-5 md:px-10 lg:px-0">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 md:gap-[30px] w-full max-w-[500px]">
        <h1 className="font-['DM_Sans'] font-bold text-[32px] md:text-[42px] lg:text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
          마켓인사이트
        </h1>
        
        {/* Search Bar */}
        <div className="flex items-center px-2.5 md:px-[10px] gap-3 md:gap-5 w-full border-b border-[#E0E1E3] pb-2">
          <div className="flex items-center gap-8 md:gap-[60px]">
            <span className="font-['DM_Sans'] font-bold text-base md:text-lg lg:text-xl leading-[160%] text-[#272727] whitespace-nowrap">
              전체
            </span>
            <button className="w-6 h-6 md:w-[30px] md:h-[30px] rounded-full">
              <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M1 4L3 6L5 4" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="flex items-center justify-between flex-1 gap-3">
            <input
              type="text"
              placeholder="검색어 입력"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 font-['DM_Sans'] font-normal text-sm md:text-base lg:text-xl leading-[160%] text-[#74777A] bg-transparent border-none outline-none"
            />
            <button className="w-6 h-6 md:w-[30px] md:h-[30px] flex-shrink-0">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="7" stroke="#272727" strokeWidth="2"/>
                <path d="M18 18L22 22" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 md:gap-[30px] w-full">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5 px-4 md:px-0">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-[50px] font-['DM_Sans'] font-normal text-sm md:text-base leading-[24px] tracking-[0.5px] transition-colors whitespace-nowrap ${
              activeCategory === 'all' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            전체
          </button>
          
          <button 
            onClick={() => setActiveCategory('tech')}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-[50px] font-['DM_Sans'] font-normal text-sm md:text-base leading-[24px] tracking-[0.5px] transition-colors whitespace-nowrap ${
              activeCategory === 'tech' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            기술 & 산업
          </button>
          
          <button 
            onClick={() => setActiveCategory('global')}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-[50px] font-['DM_Sans'] font-normal text-sm md:text-base leading-[24px] tracking-[0.5px] transition-colors whitespace-nowrap ${
              activeCategory === 'global' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            글로벌 투자동향
          </button>
          
          <button 
            onClick={() => setActiveCategory('domestic')}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-[50px] font-['DM_Sans'] font-normal text-sm md:text-base leading-[24px] tracking-[0.5px] transition-colors whitespace-nowrap ${
              activeCategory === 'domestic' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            국내 시장분석
          </button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {sampleArticles.map((article) => (
            <div 
              key={article.id}
              className="flex flex-col border border-[#DFE1E3] hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            >
              <div 
                className="w-full aspect-[295/170] bg-gray-200"
                style={{
                  backgroundImage: `url(${article.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="flex flex-col px-4 md:px-5 py-3 md:py-[15px] gap-2 md:gap-2.5 bg-[#FCFCFC]">
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <div className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 bg-[#EFF7F8] rounded-[100px] w-fit">
                    <span className="font-['DM_Sans'] font-normal text-xs md:text-sm leading-[120%] tracking-[0.5px] text-[#272727]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#272727] line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <p className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[24px] tracking-[0.5px] text-[#74777A]">
                  {article.dateRange}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2 md:gap-2.5">
          <button className="w-6 h-6 transform rotate-180">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12.5L9 19" stroke="#E6E7E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="flex items-center justify-center w-7 h-7 md:w-[30px] md:h-[30px] rounded-full">
            <span className="font-['DM_Sans'] font-bold text-sm md:text-base leading-[130%] text-[#292626]">
              1
            </span>
          </button>
          
          <button className="flex items-center justify-center w-7 h-7 md:w-[30px] md:h-[30px] bg-[#FCFCFC]">
            <span className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[130%] text-[#E6E7E9]">
              2
            </span>
          </button>
          
          <button className="flex items-center justify-center w-7 h-7 md:w-[30px] md:h-[30px] bg-[#FCFCFC]">
            <span className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[130%] text-[#E6E7E9]">
              3
            </span>
          </button>
          
          <button className="w-6 h-6 transform rotate-0">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12.5L9 19" stroke="#E6E7E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
