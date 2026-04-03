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
    <div className="flex flex-col items-center p-0 gap-[80px] w-[1240px] mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center p-0 gap-[30px] w-[492.92px] h-[147px]">
        <h1 className="w-[279px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
          마켓인사이트
        </h1>
        
        {/* Search Bar */}
        <div className="box-border flex flex-row items-center px-[10px] gap-[20px] w-[492.92px] h-[52px] border-b border-[#E0E1E3]">
          <div className="flex flex-row items-center p-0 gap-[60px] w-[124.92px] h-[32px]">
            <span className="w-[37px] h-[32px] font-['DM_Sans'] font-bold text-[20px] leading-[160%] text-[#272727]">
              전체
            </span>
            <button className="w-[30px] h-[30px] rounded-[100px]">
              <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L3 6L5 4" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-row items-center p-0 gap-[200px] w-[328px] h-[32px]">
            <input
              type="text"
              placeholder="검색어 입력"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[98px] h-[32px] font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#74777A] bg-transparent border-none outline-none"
            />
            <button className="w-[30px] h-[30px]">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="7" stroke="#272727" strokeWidth="2"/>
                <path d="M18 18L22 22" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center p-0 gap-[30px] w-[1240px]">
        {/* Category Tabs */}
        <div className="flex flex-row items-center p-0 gap-[10px] w-[518px] h-[44px]">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[70px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'all' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            전체
          </button>
          
          <button 
            onClick={() => setActiveCategory('tech')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[131px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'tech' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            기술 & 산업
          </button>
          
          <button 
            onClick={() => setActiveCategory('global')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[156px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'global' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            글로벌 투자동향
          </button>
          
          <button 
            onClick={() => setActiveCategory('domestic')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[131px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors whitespace-nowrap ${
              activeCategory === 'domestic' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            국내 시장분석
          </button>
        </div>

        {/* Article Grid */}
        <div className="flex flex-col items-center p-0 gap-[30px] w-[1240px]">
          {/* Row 1 */}
          <div className="flex flex-row items-center p-0 gap-[20px] w-[1240px] h-[299px]">
            {sampleArticles.slice(0, 4).map((article) => (
              <div 
                key={article.id}
                className="flex flex-col items-start p-0 w-[295px] h-[299px] border border-[#DFE1E3] flex-1 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div 
                  className="w-[295px] h-[170px] bg-gray-200"
                  style={{
                    backgroundImage: `url(${article.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="flex flex-col justify-center items-center px-[20px] py-[15px] gap-[5px] w-[295px] h-[129px] bg-[#FCFCFC]">
                  <div className="flex flex-col items-start p-0 gap-[10px] w-[255px] h-[99px]">
                    <div className="flex flex-col items-start p-0 gap-[5px] w-[255px] h-[65px]">
                      <div className="flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[138px] h-[37px] bg-[#EFF7F8] rounded-[100px]">
                        <span className="w-[98px] h-[17px] font-['DM_Sans'] font-normal text-[14px] leading-[120%] flex items-center tracking-[0.5px] text-[#272727]">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="w-[255px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#272727] truncate">
                        {article.title}
                      </h3>
                    </div>
                    <p className="w-[194px] h-[24px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#74777A] whitespace-nowrap">
                      {article.dateRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-row items-center p-0 gap-[20px] w-[1240px] h-[299px]">
            {sampleArticles.slice(4, 8).map((article) => (
              <div 
                key={article.id}
                className="flex flex-col items-start p-0 w-[295px] h-[299px] border border-[#DFE1E3] flex-1 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div 
                  className="w-[295px] h-[170px] bg-gray-200"
                  style={{
                    backgroundImage: `url(${article.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="flex flex-col justify-center items-center px-[20px] py-[15px] gap-[5px] w-[295px] h-[129px] bg-[#FCFCFC]">
                  <div className="flex flex-col items-start p-0 gap-[10px] w-[255px] h-[99px]">
                    <div className="flex flex-col items-start p-0 gap-[5px] w-[255px] h-[65px]">
                      <div className="flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[138px] h-[37px] bg-[#EFF7F8] rounded-[100px]">
                        <span className="w-[98px] h-[17px] font-['DM_Sans'] font-normal text-[14px] leading-[120%] flex items-center tracking-[0.5px] text-[#272727]">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="w-[255px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#272727] truncate">
                        {article.title}
                      </h3>
                    </div>
                    <p className="w-[194px] h-[24px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#74777A] whitespace-nowrap">
                      {article.dateRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-row items-center p-0 gap-[20px] w-[1240px] h-[299px]">
            {sampleArticles.slice(8, 12).map((article) => (
              <div 
                key={article.id}
                className="flex flex-col items-start p-0 w-[295px] h-[299px] border border-[#DFE1E3] flex-1 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div 
                  className="w-[295px] h-[170px] bg-gray-200"
                  style={{
                    backgroundImage: `url(${article.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="flex flex-col justify-center items-center px-[20px] py-[15px] gap-[5px] w-[295px] h-[129px] bg-[#FCFCFC]">
                  <div className="flex flex-col items-start p-0 gap-[10px] w-[255px] h-[99px]">
                    <div className="flex flex-col items-start p-0 gap-[5px] w-[255px] h-[65px]">
                      <div className="flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[138px] h-[37px] bg-[#EFF7F8] rounded-[100px]">
                        <span className="w-[98px] h-[17px] font-['DM_Sans'] font-normal text-[14px] leading-[120%] flex items-center tracking-[0.5px] text-[#272727]">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="w-[255px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#272727] truncate">
                        {article.title}
                      </h3>
                    </div>
                    <p className="w-[194px] h-[24px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#74777A] whitespace-nowrap">
                      {article.dateRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center p-0 gap-[10px] w-[180px] h-[30px]">
          <button className="w-[25px] h-[25px] transform rotate-180">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12.5L9 19" stroke="#E6E7E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="flex flex-row justify-center items-center px-[10px] py-[10px] gap-[10px] w-[30px] h-[30px] rounded-[30px]">
            <span className="font-['DM_Sans'] font-bold text-[16px] leading-[130%] text-[#292626]">
              1
            </span>
          </button>
          
          <button className="flex flex-row justify-center items-center px-[10px] py-[10px] gap-[10px] w-[30px] h-[30px] bg-[#FCFCFC]">
            <span className="font-['DM_Sans'] font-normal text-[16px] leading-[130%] text-[#E6E7E9]">
              2
            </span>
          </button>
          
          <button className="flex flex-row justify-center items-center px-[10px] py-[10px] gap-[10px] w-[30px] h-[30px] bg-[#FCFCFC]">
            <span className="font-['DM_Sans'] font-normal text-[16px] leading-[130%] text-[#E6E7E9]">
              3
            </span>
          </button>
          
          <button className="w-[25px] h-[25px] transform rotate-0">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12.5L9 19" stroke="#E6E7E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
