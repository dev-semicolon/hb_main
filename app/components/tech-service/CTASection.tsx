import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="relative w-full h-[400px] md:h-[450px] lg:h-[490px] flex items-center justify-center"
      style={{
        background: 'url(/tech-cta.png), #272727',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-start gap-5 w-full max-w-[1440px]">
          <h2 className="w-full h-[130px] font-bold text-[50px] leading-[130%] tracking-[0.5px] text-[#FCFCFC] text-center">
            지금 바로 <br />전략적 투자를 시작하세요
          </h2>
          <p className="w-full h-8 text-xl leading-[32px] tracking-[0.5px] text-[#FCFCFC] text-center">
            퀀텀리포트와 함께라면, 혼자 하는 투자보다 더 나은 결과를 만들 수 있습니다.
          </p>
        </div>
        
        <Link href="/consultation" className="px-5 py-3 border border-[#FCFCFC] rounded-[50px] text-base tracking-[0.5px] text-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#272727] transition-colors">
          무료 상담 신청하기
        </Link>
      </div>
    </section>
  );
}
