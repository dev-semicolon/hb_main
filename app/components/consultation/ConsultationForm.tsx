'use client';

import { useState } from 'react';

export default function ConsultationForm() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 w-full max-w-[1240px] mx-auto px-5 md:px-10 lg:px-0">
      <h1 className="font-['DM_Sans'] font-bold text-[32px] md:text-[42px] lg:text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
        상담신청
      </h1>

      <div className="flex flex-col gap-8 md:gap-10 lg:gap-[50px] w-full">
        <div className="flex flex-col gap-5 md:gap-[30px] w-full">
          {/* Row 1: 성함, 연락처 */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-[100px] w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:gap-[50px] flex-1">
              <label className="font-['DM_Sans'] font-normal text-base md:text-lg lg:text-[20px] leading-[160%] text-[#272727] md:min-w-[60px] lg:min-w-[80px]">
                성함 *
              </label>
              <input
                type="text"
                placeholder="성함을 입력해주세요."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 md:px-5 py-3 md:py-[15px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
              />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:gap-[50px] flex-1">
              <label className="font-['DM_Sans'] font-normal text-base md:text-lg lg:text-[20px] leading-[160%] text-[#272727] md:min-w-[60px] lg:min-w-[80px]">
                연락처 *
              </label>
              <input
                type="tel"
                placeholder="연락처를 입력해주세요."
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                className="w-full px-4 md:px-5 py-3 md:py-[15px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
              />
            </div>
          </div>

          {/* Row 2: 이메일 */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:gap-[50px] w-full">
            <label className="font-['DM_Sans'] font-normal text-base md:text-lg lg:text-[20px] leading-[160%] text-[#272727] md:min-w-[60px] lg:min-w-[80px]">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 md:px-5 py-3 md:py-[15px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] focus:outline-none focus:border-[#298487]"
            />
          </div>

          {/* Row 3: 내용 */}
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5 lg:gap-[50px] w-full">
            <label className="font-['DM_Sans'] font-normal text-base md:text-lg lg:text-[20px] leading-[160%] text-[#272727] md:min-w-[60px] lg:min-w-[80px] md:pt-3">
              내용
            </label>
            <textarea
              placeholder="내용을 입력해주세요."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-4 md:px-5 py-3 md:py-[15px] h-[150px] md:h-[180px] lg:h-[200px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A] resize-none focus:outline-none focus:border-[#298487]"
            />
          </div>

          {/* Privacy Agreement */}
          <div className="flex flex-col gap-5 md:gap-[30px] w-full">
            <div className="flex flex-col gap-2.5 md:gap-[10px] w-full">
              <span className="font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#74777A]">
                개인정보 수집 및 이용 동의 *
              </span>
              
              <div className="flex flex-col px-4 md:px-5 py-4 md:py-5 w-full min-h-[150px] md:min-h-[165px] lg:h-[185px] bg-[#F5F5F5] rounded-[5px]">
                <div className="flex gap-2.5 md:gap-[10px] w-full h-full">
                  <div className="flex-1 font-['DM_Sans'] font-normal text-sm md:text-base lg:text-lg leading-[160%] text-[#56524F] overflow-y-auto">
                    [수집하는 개인정보의 항목]<br/>
                    회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br/>
                    - 수집항목 : 이름, 연락처, 이메일, 주소, 제목, 내용, 첨부파일<br/>
                    - 개인정보 수집방법 : 홈페이지(회원가입)<br/>
                    <br/>
                    [개인정보의 수집 및 이용목적]<br/>
                    회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                  </div>
                  <div className="flex flex-col w-[3px] h-full bg-[#FCFCFC] rounded-full">
                    <div className="w-full h-[20px] bg-[#74777A] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer w-fit">
              <div 
                className={`flex justify-center items-center w-5 h-5 rounded-[3px] ${agreed ? 'bg-[#298487]' : 'bg-white border border-[#E0E1E3]'}`}
                onClick={() => setAgreed(!agreed)}
              >
                {agreed && (
                  <svg width="10" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3L3 5L7 1" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="font-['DM_Sans'] font-normal text-base md:text-lg leading-[130%] text-[#272727]">
                개인정보 수집 및 이용에 동의합니다.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          className="w-full px-6 md:px-[30px] py-4 md:py-5 lg:h-[60px] bg-[#298487] rounded-[10px] font-['DM_Sans'] font-bold text-base md:text-lg leading-[130%] text-center text-[#FCFCFC] hover:bg-[#237072] transition-colors disabled:bg-[#E0E1E3] disabled:cursor-not-allowed"
          disabled={!agreed || !formData.name || !formData.contact}
        >
          상담 신청하기
        </button>
      </div>
    </div>
  );
}
