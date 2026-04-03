import Link from 'next/link';

export default function MarketInsightSection() {
  const row1Items = [
    { tag: '중국마감', title: '26년 03월 중국마감 (03.25기준)', image: '/insight-section/insight1.png' },
    { tag: '일본마감', title: '26년 03월 일본마감 (03.25기준)', image: '/insight-section/insight2.png' },
    { tag: '대만마감', title: '26년 03월 대만마감 (03.25기준)', image: '/insight-section/insight3.png' }
  ];

  const row2Items = [
    { tag: '대만 반도체', title: '26년 03월 대만 반도체 시황', image: '/insight-section/insight4.png' },
    { tag: '필라델피아 반도체', title: '26년 03월 필라델피아 반도체 시황', image: '/insight-section/insight5.png' },
    { tag: '뉴욕 마감', title: '26년 03월 뉴욕 시황', image: '/insight-section/insight6.png' }
  ];

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px]">
        <div className="max-w-[960px] mx-auto space-y-10 md:space-y-20">
        <h2 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727] text-center">
          마켓 인사이트 해외마감
        </h2>

        <div className="space-y-5 md:space-y-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {row1Items.map((item, i) => (
              <div key={i} className="w-full space-y-4 md:space-y-5 cursor-pointer group">
                <div className="w-full h-[180px] md:h-[200px] bg-cover bg-center rounded overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="space-y-2.5 transition-all duration-300 group-hover:translate-x-1">
                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1.5 bg-[#EFF3F8] rounded-[100px] text-xs text-[#74777A] tracking-[0.5px] transition-colors group-hover:bg-[#298487] group-hover:text-[#FCFCFC]">
                      {item.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold leading-[32px] tracking-[0.5px] text-[#272727] line-clamp-1 break-keep transition-colors group-hover:text-[#298487]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg leading-[130%] tracking-[0.5px] text-[#74777A] line-clamp-1 break-keep">
                    [3월 한 달간 흐름 요약] 2026년 3월 중국 상해종합지수
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {row2Items.map((item, i) => (
              <div key={i} className="w-full space-y-4 md:space-y-5 cursor-pointer group">
                <div className="w-full h-[180px] md:h-[200px] bg-cover bg-center rounded overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="space-y-2.5 transition-all duration-300 group-hover:translate-x-1">
                  <div className="space-y-1">
                    <span className="inline-block px-3 py-1.5 bg-[#F5F5F5] rounded-[100px] text-xs text-[#74777A] tracking-[0.5px] transition-colors group-hover:bg-[#298487] group-hover:text-[#FCFCFC]">
                      {item.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold leading-[32px] tracking-[0.5px] text-[#272727] line-clamp-1 break-keep transition-colors group-hover:text-[#298487]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg leading-[130%] tracking-[0.5px] text-[#74777A] line-clamp-1 break-keep">
                    [3월 한 달간 흐름 요약] 2026년 3월 중국 상해종합지수
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        
        {/* More Button */}
        <div className="flex justify-center mt-10 md:mt-16 lg:mt-20">
          <Link href="/market-insight">
            <button className="px-8 py-3 bg-[#298487] text-[#FCFCFC] rounded-[50px] text-sm md:text-base tracking-[0.5px] font-medium hover:bg-[#237072] transition-colors">
              더보기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
