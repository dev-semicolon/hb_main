'use client';

import { useState } from 'react';

type CommunityPost = {
  id: number;
  title: string;
  likes: number;
  views: number;
  date: string;
};

const samplePosts: CommunityPost[] = [
  { id: 1, title: '2024년 1분기 시장 전망 및 투자 전략', likes: 245, views: 1523, date: '2024.01.15' },
  { id: 2, title: '글로벌 반도체 산업 동향 분석', likes: 189, views: 1342, date: '2024.01.14' },
  { id: 3, title: '미국 금리 인상이 한국 증시에 미치는 영향', likes: 312, views: 2145, date: '2024.01.13' },
  { id: 4, title: 'AI 관련주 투자 포인트와 주목해야 할 기업들', likes: 456, views: 3201, date: '2024.01.12' },
  { id: 5, title: '원달러 환율 전망과 수출주 투자 전략', likes: 178, views: 1089, date: '2024.01.11' },
  { id: 6, title: '2차전지 산업의 현황과 미래 전망', likes: 389, views: 2567, date: '2024.01.10' },
  { id: 7, title: '부동산 시장 변화와 리츠 투자 가이드', likes: 234, views: 1678, date: '2024.01.09' },
  { id: 8, title: '배당주 투자 전략 - 안정적 수익 창출하기', likes: 267, views: 1890, date: '2024.01.08' },
  { id: 9, title: '중국 경제 회복 시그널과 관련 투자 기회', likes: 198, views: 1456, date: '2024.01.07' },
  { id: 10, title: '코스닥 유망주 발굴 전략', likes: 301, views: 2034, date: '2024.01.06' },
];

export default function CommunityList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col items-center p-0 gap-[80px] w-[1240px] mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center p-0 gap-[30px] w-[492.92px] h-[147px]">
        <h1 className="w-[186px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
          커뮤니티
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
        {/* Table */}
        <div className="flex flex-col items-center p-0 gap-[20px] w-[1240px]">
          {/* Table Header */}
          <div className="flex flex-col items-start p-0 w-[1240px] h-[75px]">
            <div className="w-[1240px] h-0 border-2 border-[#272727]" />
            <div className="flex flex-row items-center p-0 w-[1240px] h-[75px] bg-[#F0F5F8]">
              <div className="flex flex-col justify-center items-center gap-[10px] w-[120px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-center text-[#272727]">
                  번호
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[620px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  제목
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  추천수
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  조회수
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[140px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  등록일
                </span>
              </div>
            </div>
            <div className="w-[1240px] h-0 border border-[#E0E1E3]" />
          </div>

          {/* Table Rows */}
          {samplePosts.map((post, index) => (
            <div key={index}>
              <div className="flex flex-row items-center p-0 w-[1240px] h-[35px] hover:bg-[#F9F9F9] transition-colors cursor-pointer">
                <div className="flex flex-col justify-center items-center gap-[10px] w-[120px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-center text-[#272727]">
                    {post.id}
                  </span>
                </div>
                <div className="flex flex-row justify-start items-center px-[20px] gap-[10px] w-[620px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727] truncate">
                    {post.title}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {post.likes}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {post.views}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[140px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="w-[1240px] h-0 border border-[#E0E1E3]" />
            </div>
          ))}
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
