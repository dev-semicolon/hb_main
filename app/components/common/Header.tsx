'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="h-[72px] bg-[#FCFCFC] border-b border-[#E6E7E9] relative z-50">
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
          <button 
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴"
          >
            <span className={`w-full h-0.5 bg-[#272727] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[#272727] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[#272727] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <nav className={`absolute top-[72px] right-0 w-full sm:w-80 h-[calc(100vh-72px)] bg-[#FCFCFC] shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-6 gap-6">
            <Link 
              href="/notice" 
              className="text-[#272727] text-lg tracking-[0.5px] hover:text-[#298487] transition-colors py-3 border-b border-[#E6E7E9]"
              onClick={() => setIsMenuOpen(false)}
            >
              공지사항
            </Link>
            <Link 
              href="/tech-service" 
              className="text-[#272727] text-lg tracking-[0.5px] hover:text-[#298487] transition-colors py-3 border-b border-[#E6E7E9]"
              onClick={() => setIsMenuOpen(false)}
            >
              기술&서비스
            </Link>
            <Link 
              href="/market-insight" 
              className="text-[#272727] text-lg tracking-[0.5px] hover:text-[#298487] transition-colors py-3 border-b border-[#E6E7E9]"
              onClick={() => setIsMenuOpen(false)}
            >
              마켓 인사이트
            </Link>
            <Link 
              href="/consultation" 
              className="text-[#272727] text-lg tracking-[0.5px] hover:text-[#298487] transition-colors py-3 border-b border-[#E6E7E9]"
              onClick={() => setIsMenuOpen(false)}
            >
              상담신청
            </Link>
            <Link 
              href="/community" 
              className="text-[#272727] text-lg tracking-[0.5px] hover:text-[#298487] transition-colors py-3 border-b border-[#E6E7E9]"
              onClick={() => setIsMenuOpen(false)}
            >
              커뮤니티
            </Link>
            <Link 
              href="/login" 
              className="mt-4 px-6 py-3 bg-[#298487] text-[#FCFCFC] rounded-[50px] text-lg tracking-[0.5px] hover:bg-[#237072] transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              시작하기
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
