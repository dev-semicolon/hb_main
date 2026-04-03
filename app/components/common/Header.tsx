import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[72px] bg-[#FCFCFC] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-5 md:px-10 lg:px-[50px]">
        <Link href="/">
          <Image 
            src="/logos/header logo.svg" 
            alt="퀀텀 로고" 
            width={100}
            height={25}
            className="md:w-[120px] md:h-[30px]"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link href="/notice" className="text-[#272727] text-sm xl:text-base tracking-[0.5px] hover:text-[#298487] transition-colors">
            공지사항
          </Link>
          <Link href="/tech-service" className="text-[#272727] text-sm xl:text-base tracking-[0.5px] hover:text-[#298487] transition-colors">
            기술&서비스
          </Link>
          <Link href="/market-insight" className="text-[#272727] text-sm xl:text-base tracking-[0.5px] hover:text-[#298487] transition-colors">
            마켓 인사이트
          </Link>
          <Link href="/consultation" className="text-[#272727] text-sm xl:text-base tracking-[0.5px] hover:text-[#298487] transition-colors">
            상담신청
          </Link>
          <Link href="/community" className="text-[#272727] text-sm xl:text-base tracking-[0.5px] hover:text-[#298487] transition-colors">
            커뮤니티
          </Link>
          <Link href="/login" className="px-5 py-2.5 bg-[#298487] text-[#FCFCFC] rounded-[50px] text-sm xl:text-base tracking-[0.5px] hover:bg-[#237072] transition-colors">
            시작하기
          </Link>
        </nav>
        <button className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center">
          <span className="w-full h-0.5 bg-[#272727]"></span>
          <span className="w-full h-0.5 bg-[#272727]"></span>
          <span className="w-full h-0.5 bg-[#272727]"></span>
        </button>
      </div>
    </header>
  );
}
