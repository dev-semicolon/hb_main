'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [saveId, setSaveId] = useState(true);
  const [autoLogin, setAutoLogin] = useState(false);

  return (
    <div className="flex flex-col items-center p-0 gap-[30px] w-[500px] h-[430px]">
      <div className="flex flex-col items-start p-0 gap-[20px] w-[500px] h-[379px]">
        <div className="flex flex-col justify-center items-center p-0 gap-[50px] w-[500px] h-[335px]">
          <h1 className="w-[500px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
            환영합니다.
          </h1>
          
          <div className="flex flex-col justify-center items-center p-0 gap-[20px] w-[500px] h-[220px]">
            <input
              type="text"
              placeholder="아이디"
              className="box-border flex flex-row items-center px-[30px] py-[12px] gap-[10px] w-[500px] h-[60px] bg-[#FCFCFC] border border-[#E6E7E9] rounded-[10px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
            />
            
            <input
              type="password"
              placeholder="비밀번호"
              className="box-border flex flex-row items-center px-[30px] py-[12px] gap-[10px] w-[500px] h-[60px] bg-[#FCFCFC] border border-[#E6E7E9] rounded-[10px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
            />
            
            <button className="flex flex-row justify-center items-center px-[30px] py-[12px] gap-[10px] w-[500px] h-[60px] bg-[#298487] rounded-[10px] font-['DM_Sans'] font-bold text-[18px] leading-[130%] text-center text-[#FCFCFC] hover:bg-[#237072] transition-colors">
              로그인
            </button>
          </div>
        </div>
        
        <div className="flex flex-row items-start p-0 gap-[20px] w-[264px] h-[24px]">
          <label className="flex flex-row items-end p-0 gap-[10px] w-[122px] h-[24px] cursor-pointer">
            <div className="relative w-[24px] h-[24px]">
              <input
                type="radio"
                checked={saveId}
                onChange={() => {
                  setSaveId(true);
                  setAutoLogin(false);
                }}
                className="appearance-none"
              />
              <div className={`absolute w-[20px] h-[20px] left-[2px] top-[2px] rounded-[12px] ${saveId ? 'bg-[#298487]' : 'border border-[#E6E7E9] bg-white'}`}>
                {saveId && (
                  <div className="absolute w-[8px] h-[8px] left-[6px] top-[6px] bg-[#FCFCFC] rounded-[12px]" />
                )}
              </div>
            </div>
            <span className="w-[88px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#0F0F0F]">
              아이디 저장
            </span>
          </label>
          
          <label className="flex flex-row items-end p-0 gap-[10px] w-[122px] h-[24px] cursor-pointer">
            <div className="relative w-[24px] h-[24px]">
              <input
                type="radio"
                checked={autoLogin}
                onChange={() => {
                  setAutoLogin(true);
                  setSaveId(false);
                }}
                className="appearance-none"
              />
              <div className={`absolute w-[20px] h-[20px] left-[2px] top-[2px] rounded-[12px] ${autoLogin ? 'bg-[#298487]' : 'border border-[#E6E7E9] bg-white'}`}>
                {autoLogin && (
                  <div className="absolute w-[8px] h-[8px] left-[6px] top-[6px] bg-[#FCFCFC] rounded-[12px]" />
                )}
              </div>
            </div>
            <span className="w-[88px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#0F0F0F]">
              자동 로그인
            </span>
          </label>
        </div>
      </div>
      
      <div className="flex flex-row items-center p-0 gap-[30px] w-[500px] h-[21px] justify-center">
        <a href="#" className="font-['DM_Sans'] font-normal text-[16px] leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          아이디 찾기
        </a>
        <div className="w-[11px] h-0 border border-[#6C6C6C] rotate-90" />
        <a href="#" className="font-['DM_Sans'] font-normal text-[16px] leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          비밀번호 찾기
        </a>
        <div className="w-[11px] h-0 border border-[#6C6C6C] rotate-90" />
        <a href="#" className="font-['DM_Sans'] font-normal text-[16px] leading-[130%] text-center text-[#6C6C6C] hover:text-[#298487] transition-colors">
          회원가입
        </a>
      </div>
    </div>
  );
}
