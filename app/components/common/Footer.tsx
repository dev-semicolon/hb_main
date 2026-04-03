import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F0F5F8] px-5 md:px-10 lg:px-[100px] py-10 md:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto space-y-5 md:space-y-[30px]">
        <div className="w-[140px] h-[35px] md:w-[176px] md:h-[44px] relative">
          <Image
            src="/logos/footer logo.svg"
            alt="퀀텀리포트 로고"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/privacy" className="text-xs md:text-[15px] font-semibold leading-[150%] tracking-[-0.02em] text-[#272727] hover:text-[#298487] transition-colors">
            개인정보처리방침
          </Link>
          <div className="w-px h-3 bg-[#BFC1C5]"></div>
          <Link href="/terms" className="text-xs md:text-[15px] font-semibold leading-[150%] tracking-[-0.02em] text-[#272727] hover:text-[#298487] transition-colors">
            이용약관
          </Link>
        </div>
        <p className="text-[10px] md:text-[11px] leading-[150%] tracking-[-0.02em] text-[#74777A]">
          퀀텀리포트는 국내 주식을 포함한 다양한 투자 영역에서 컨설팅 서비스를 제공하는 전문 정보제공기관으로, 고객에게 필요한 정보를 성실히 전달할 의무를 가지고 있습니다. <br />예측이 어려운 금융 시장 환경 속에서도 고객이 안정적이고 지속 가능한 포트폴리오를 구성할 수 있도록 돕는 것이 퀀텀리포트의 핵심 목표입니다. 축적된 데이터 분석력과 차별화된 정보 제공 역량을 바탕으로, 투자 컨설팅 업계에서 새로운 기준을 제시하고 있으며, <br />많은 고객들이 장기적인 자산 성장을 위한 해답을 퀀텀리포트에서 찾고 있습니다.
        </p>
        <div className="border-t border-[rgba(72,98,132,0.16)] pt-5 md:pt-[30px]">
          <p className="text-[10px] md:text-xs font-semibold leading-[150%] tracking-[-0.02em] text-[#272727]">
            Copyright 퀀텀리포트 주식회사. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
