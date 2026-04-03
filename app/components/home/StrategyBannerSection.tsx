import Link from 'next/link';

export default function StrategyBannerSection() {
  return (
    <section className="min-h-[300px] md:min-h-[380px] lg:h-[457px] bg-[#272727] flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-[60px] relative overflow-hidden py-10 md:py-16 lg:py-0 mb-16 md:mb-24 lg:mb-32">
      <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{backgroundImage: "url('/strategy.png')"}}></div>
      <div className="relative text-center space-y-4 md:space-y-5 max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[50px]">
        <h2 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold leading-[130%] tracking-[0.5px] text-[#FCFCFC]">
          불확실성을 기회로 바꾸는 전략
        </h2>
        <p className="text-sm md:text-base lg:text-xl leading-[32px] tracking-[0.5px] text-[#FCFCFC]">
          혼란 속에서도, 우리는 위기를 기회로 전환할 수 있는 가능성을 모색하고 있습니다. <br />전통적인 접근 방식에서 벗어나, 변화의 흐름을 선도하는 새로운 해법을 찾아야 할 때입니다.
        </p>
      </div>
      <div className="relative flex flex-col sm:flex-row gap-2.5">
        <button className="px-5 py-3 border border-[#FCFCFC] rounded-[50px] text-sm md:text-base tracking-[0.5px] text-[#FCFCFC]">
        View more
        </button>
        <Link href="/consultation">
          <button className="px-5 py-3 bg-[#FCFCFC] rounded-[50px] text-sm md:text-base tracking-[0.5px] text-[#272727] hover:bg-[#E0E1E3] transition-colors">
            상담 신청하기
          </button>
        </Link>
      </div>
    </section>
  );
}
