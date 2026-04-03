'use client';

import { useState } from 'react';

type Notice = {
  id: number;
  category: string;
  title: string;
  attachment: 'pdf' | 'pack' | 'doc' | 'sheet' | 'ppt' | 'unknown' | null;
  date: string;
};

const sampleNotices: Notice[] = [
  { id: 123, category: '투자안내', title: '제목', attachment: 'pdf', date: '2024.01.15' },
  { id: 1234, category: '홈페이지', title: '제목', attachment: 'pack', date: '2024.01.14' },
  { id: 1234, category: '기타', title: '제목', attachment: null, date: '2024.01.13' },
  { id: 1234, category: '기타', title: '제목', attachment: 'doc', date: '2024.01.12' },
  { id: 1234, category: '기타', title: '제목', attachment: null, date: '2024.01.11' },
  { id: 1234, category: '기타', title: '제목', attachment: 'sheet', date: '2024.01.10' },
  { id: 1234, category: '기타', title: '제목', attachment: 'ppt', date: '2024.01.09' },
  { id: 1234, category: '기타', title: '제목', attachment: 'unknown', date: '2024.01.08' },
  { id: 1234, category: '기타', title: '제목', attachment: null, date: '2024.01.07' },
  { id: 1234, category: '기타', title: '제목', attachment: null, date: '2024.01.06' },
];

export default function NoticeList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getFileIconColor = (type: Notice['attachment']) => {
    switch (type) {
      case 'pdf': return '#EA3434';
      case 'pack': return '#FF650F';
      case 'doc': return '#2684FF';
      case 'sheet': return '#01AC49';
      case 'ppt': return '#FFB900';
      case 'unknown': return '#BCC0D1';
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center p-0 gap-[80px] w-[1240px] mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center p-0 gap-[30px] w-[492.92px] h-[147px]">
        <h1 className="w-[186px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
          공지사항
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
        <div className="flex flex-row items-center p-0 gap-[10px] w-[403px] h-[44px]">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[101px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'all' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            홈페이지
          </button>
          
          <button 
            onClick={() => setActiveCategory('website')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[101px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'website' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            투자안내
          </button>
          
          <button 
            onClick={() => setActiveCategory('news')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[101px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'news' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            금융공시
          </button>
          
          <button 
            onClick={() => setActiveCategory('other')}
            className={`flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] w-[70px] h-[44px] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] transition-colors ${
              activeCategory === 'other' 
                ? 'bg-[#298487] text-[#FCFCFC]' 
                : 'border border-[#272727] text-[#272727]'
            }`}
          >
            기타
          </button>
        </div>

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
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  구분
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[540px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  제목
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[200px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  첨부파일
                </span>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[200px] h-[32px]">
                <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                  등록일
                </span>
              </div>
            </div>
            <div className="w-[1240px] h-0 border border-[#E0E1E3]" />
          </div>

          {/* Table Rows */}
          {sampleNotices.map((notice, index) => (
            <div key={index}>
              <div className="flex flex-row items-center p-0 w-[1240px] h-[35px]">
                <div className="flex flex-col justify-center items-center gap-[10px] w-[120px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-center text-[#272727]">
                    {notice.id}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[180px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {notice.category}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[540px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {notice.title}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[200px] h-[32px]">
                  {notice.attachment ? (
                    <div 
                      className="w-[30px] h-[30px] rounded-[4px]"
                      style={{ backgroundColor: getFileIconColor(notice.attachment) || '#BCC0D1' }}
                    />
                  ) : (
                    <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                      -
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[200px] h-[32px]">
                  <span className="font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
                    {notice.date}
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
