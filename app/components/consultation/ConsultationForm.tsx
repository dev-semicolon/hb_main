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
    // 여기에 실제 제출 로직 추가
  };

  return (
    <div className="flex flex-col items-center p-0 gap-[80px] w-[1240px] mx-auto">
      {/* Title */}
      <h1 className="w-[186px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727]">
        상담신청
      </h1>

      <div className="flex flex-col items-start p-0 gap-[50px] w-[1240px]">
        <div className="flex flex-col items-start p-0 gap-[30px] w-[1240px]">
        {/* Row 1: 성함, 연락처 */}
        <div className="flex flex-row items-center p-0 gap-[100px] w-[1240px] h-[53px]">
          <div className="flex flex-row items-center p-0 gap-[50px] w-[570px] h-[53px] flex-1">
            <label className="w-[80px] h-[32px] font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
              성함 *
            </label>
            <input
              type="text"
              placeholder="성함을 입력해주세요."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="box-border flex flex-row items-center px-[20px] py-[15px] gap-[10px] w-[440px] h-[53px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] flex-1 focus:outline-none focus:border-[#298487]"
            />
          </div>
          
          <div className="flex flex-row items-center p-0 gap-[50px] w-[570px] h-[53px] flex-1">
            <label className="w-[80px] h-[32px] font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
              연락처 *
            </label>
            <input
              type="tel"
              placeholder="연락처를 입력해주세요."
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              className="box-border flex flex-row items-center px-[20px] py-[15px] gap-[10px] w-[440px] h-[53px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] flex-1 focus:outline-none focus:border-[#298487]"
            />
          </div>
        </div>

        {/* Row 2: 이메일 */}
        <div className="flex flex-row items-center p-0 gap-[100px] w-[1240px] h-[53px]">
          <div className="flex flex-row items-center p-0 gap-[50px] w-[1240px] h-[53px] flex-1">
            <label className="w-[80px] h-[32px] font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="box-border flex flex-row items-center px-[20px] py-[15px] gap-[10px] w-[1110px] h-[53px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] flex-1 focus:outline-none focus:border-[#298487]"
            />
          </div>
        </div>

        {/* Row 3: 내용 */}
        <div className="flex flex-row items-start p-0 gap-[100px] w-[1240px] h-[200px]">
          <div className="flex flex-row items-start p-0 gap-[50px] w-[1240px] h-[200px] flex-1">
            <label className="w-[80px] h-[32px] font-['DM_Sans'] font-normal text-[20px] leading-[160%] text-[#272727]">
              내용
            </label>
            <textarea
              placeholder="내용을 입력해주세요."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="box-border flex flex-row items-start px-[20px] py-[15px] gap-[10px] w-[1110px] h-[200px] border border-[#E0E1E3] rounded-[5px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A] flex-1 resize-none focus:outline-none focus:border-[#298487]"
            />
          </div>
        </div>

        {/* Privacy Agreement */}
        <div className="flex flex-col items-start p-0 gap-[30px] w-[1240px]">
          <div className="flex flex-col items-start p-0 gap-[10px] w-[1240px]">
            <span className="w-[215px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#74777A]">
              개인정보 수집 및 이용 동의 *
            </span>
            
            <div className="flex flex-col justify-center items-start px-[20px] py-[20px] gap-[50px] w-[1240px] h-[185px] bg-[#F5F5F5]">
              <div className="flex flex-row items-start p-0 gap-[10px] w-[1200px] h-[145px]">
                <div className="w-[1187px] h-[145px] font-['DM_Sans'] font-normal text-[18px] leading-[160%] text-[#56524F] overflow-y-auto flex-1">
                  [수집하는 개인정보의 항목]<br/>
                  회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br/>
                  - 수집항목 : 이름, 연락처, 이메일, 주소, 제목, 내용, 첨부파일<br/>
                  - 개인정보 수집방법 : 홈페이지(회원가입)<br/>
                  <br/>
                  [개인정보의 수집 및 이용목적]<br/>
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </div>
                <div className="flex flex-col items-start p-0 gap-[20px] w-[3px] h-[145px] bg-[#FCFCFC] rounded-[227px]">
                  <div className="w-[3px] h-[20.15px] bg-[#74777A] rounded-[292px]" />
                </div>
              </div>
            </div>
          </div>

          <label className="flex flex-row items-center p-0 gap-[5px] w-[294px] h-[23px] cursor-pointer">
            <div 
              className={`flex flex-col justify-center items-center px-[4px] py-[5px] gap-[10px] w-[18px] h-[18px] rounded-[3px] ${agreed ? 'bg-[#298487]' : 'bg-white border border-[#E0E1E3]'}`}
              onClick={() => setAgreed(!agreed)}
            >
              {agreed && (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3L3 5L7 1" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="w-[271px] h-[23px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] text-[#272727] whitespace-nowrap">
              개인정보 수집 및 이용에 동의합니다.
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit}
        className="flex flex-row justify-center items-center px-[30px] py-[12px] gap-[10px] w-[1240px] h-[60px] bg-[#298487] rounded-[10px] font-['DM_Sans'] font-bold text-[18px] leading-[130%] text-center text-[#FCFCFC] hover:bg-[#237072] transition-colors disabled:bg-[#E0E1E3] disabled:cursor-not-allowed"
        disabled={!agreed || !formData.name || !formData.contact}
      >
        상담 신청하기
      </button>
      </div>
    </div>
  );
}
