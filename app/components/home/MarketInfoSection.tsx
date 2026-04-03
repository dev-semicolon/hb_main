export default function MarketInfoSection() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-gradient-to-r from-[#EFF7FA] to-transparent rounded-tr-[50px] md:rounded-tr-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px] space-y-[30px] md:space-y-[50px]">
        <div className="space-y-2.5 text-center">
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#272727]">
            오늘의 시장정보
          </h2>
          <p className="text-sm md:text-base lg:text-xl leading-[32px] tracking-[0.5px] text-[#272727]">
            당일 거래가 없을 경우 현재가는 전일 종가가 표기됩니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-[30px]">
          <div className="w-full md:w-[510px] bg-[#FCFCFC] rounded-[20px] shadow-[0_5px_10px_rgba(0,0,0,0.05)] p-6 md:p-[50px] space-y-4 md:space-y-5">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-lg md:text-2xl font-bold tracking-[0.5px] text-[#272727]">Market summary</h3>
                <span className="text-sm md:text-lg tracking-[0.5px] text-[#74777A]">상해종합지수</span>
              </div>
              <div className="flex items-end gap-3 md:gap-5">
                <span className="text-[32px] md:text-[50px] font-bold leading-[100%] tracking-[0.5px] text-[#E83F3F]">
                  3,931.84
                </span>
                <div className="flex items-center gap-3 md:gap-5 pb-0 md:pb-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 bg-[#E83F3F]" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
                    <span className="text-sm md:text-lg tracking-[0.5px] text-[#E83F3F]">50.56</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 bg-[#E83F3F]" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
                    <span className="text-sm md:text-lg tracking-[0.5px] text-[#E83F3F]">+1.30%</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-[120%] text-[#74777A]">26.03 중국마감 (03.25 기준)</p>
          </div>

          <div className="w-full md:w-[510px] bg-[#FCFCFC] rounded-[20px] shadow-[0_5px_10px_rgba(0,0,0,0.05)] p-6 md:p-[50px] space-y-4 md:space-y-5">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-lg md:text-2xl font-bold tracking-[0.5px] text-[#272727]">Stocks</h3>
                <span className="text-sm md:text-lg tracking-[0.5px] text-[#74777A]">니케이지수</span>
              </div>
              <div className="flex items-end gap-3 md:gap-5">
                <span className="text-[32px] md:text-[50px] font-bold leading-[100%] tracking-[0.5px] text-[#3D81FF]">
                  53,749.68
                </span>
                <div className="flex items-center gap-3 md:gap-5 pb-0 md:pb-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 bg-[#3D81FF] rotate-180" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
                    <span className="text-sm md:text-lg tracking-[0.5px] text-[#3D81FF]">50.56</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 bg-[#3D81FF] rotate-180" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
                    <span className="text-sm md:text-lg tracking-[0.5px] text-[#3D81FF]">+1.30%</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-[120%] text-[#74777A]">26.03 일본마감 (03.25 기준)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
