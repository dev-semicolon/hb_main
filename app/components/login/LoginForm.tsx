'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [saveId, setSaveId] = useState(true);
  const [autoLogin, setAutoLogin] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 md:gap-[30px] w-full max-w-[500px] mx-auto px-5">
      <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
        <div className="flex flex-col justify-center items-center gap-8 md:gap-[50px] w-full">
          <h1 className="w-full font-['DM_Sans'] font-bold text-[32px] md:text-[42px] lg:text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
            환영합니다.
          </h1>
          
          <div className="flex flex-col justify-center items-center gap-4 md:gap-5 w-full">
            <input
              type="text"
              placeholder="아이디"
              className="w-full px-5 md:px-[30px] py-3 md:py-[12px] h-[52px] md:h-[60px] bg-[#FCFCFC] border border-[#E6E7E9] rounded-[10px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
            />
            
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-5 md:px-[30px] py-3 md:py-[12px] h-[52px] md:h-[60px] bg-[#FCFCFC] border border-[#E6E7E9] rounded-[10px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
            />
            
            <button className="w-full px-5 md:px-[30px] py-3 md:py-[12px] h-[52px] md:h-[60px] bg-[#298487] rounded-[10px] font-['DM_Sans'] font-bold text-base md:text-lg leading-[130%] text-center text-[#FCFCFC] hover:bg-[#237072] transition-colors">
              로그인
            </button>
          </div>
        </div>
        
        <div className="flex flex-row items-start gap-4 md:gap-5">
          <label className="flex flex-row items-center gap-2 md:gap-2.5 cursor-pointer">
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              <input
                type="radio"
                checked={saveId}
                onChange={() => {
                  setSaveId(true);
                  setAutoLogin(false);
                }}
                className="appearance-none"
              />
              <div className={`absolute w-5 h-5 rounded-full ${saveId ? 'bg-[#298487]' : 'border border-[#E6E7E9] bg-white'}`}>
                {saveId && (
                  <div className="absolute w-2 h-2 left-1.5 top-1.5 bg-[#FCFCFC] rounded-full" />
                )}
              </div>
            </div>
            <span className="font-['DM_Sans'] font-normal text-sm md:text-base lg:text-lg leading-[130%] text-[#0F0F0F]">
              아이디 저장
            </span>
          </label>
          
          <label className="flex flex-row items-center gap-2 md:gap-2.5 cursor-pointer">
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              <input
                type="radio"
                checked={autoLogin}
                onChange={() => {
                  setAutoLogin(true);
                  setSaveId(false);
                }}
                className="appearance-none"
              />
              <div className={`absolute w-5 h-5 rounded-full ${autoLogin ? 'bg-[#298487]' : 'border border-[#E6E7E9] bg-white'}`}>
                {autoLogin && (
                  <div className="absolute w-2 h-2 left-1.5 top-1.5 bg-[#FCFCFC] rounded-full" />
                )}
              </div>
            </div>
            <span className="font-['DM_Sans'] font-normal text-sm md:text-base lg:text-lg leading-[130%] text-[#0F0F0F]">
              자동 로그인
            </span>
          </label>
        </div>
      </div>
      
      <div className="flex flex-row items-center gap-4 md:gap-[30px] justify-center flex-wrap">
        <a href="#" className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          아이디 찾기
        </a>
        <div className="w-px h-3 bg-[#6C6C6C]" />
        <a href="#" className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          비밀번호 찾기
        </a>
        <div className="w-px h-3 bg-[#6C6C6C]" />
        <a href="#" className="font-['DM_Sans'] font-normal text-sm md:text-base leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          회원가입
        </a>
      </div>
    </div>
  );
}
