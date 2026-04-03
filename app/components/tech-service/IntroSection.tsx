export default function IntroSection() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[1240px] flex flex-col items-start p-0 gap-[80px]">
        <h2 className="w-[1240px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] tracking-[0.5px] text-[#272727] flex-none order-0 self-stretch">
          이제 기다리지 말고
        </h2>
        
        <div className="w-[1240px] h-[820px] flex flex-col items-start p-0 gap-[60px] flex-none order-1 self-stretch">
          {/* First Block */}
          <div className="w-[1240px] h-[380px] flex flex-row items-center p-0 gap-[50px] flex-none order-0 self-stretch">
            <div 
              className="w-[590px] h-[380px] rounded-[10px] flex-none order-0"
              style={{
                backgroundImage: "url('/intro1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="w-[600px] h-[286px] flex flex-col items-start p-0 gap-[30px] flex-none order-1">
              <div className="w-[600px] h-[94px] flex flex-col items-start p-0 gap-[10px] flex-none order-0 self-stretch">
                <h3 className="w-[600px] h-[94px] font-['DM_Sans'] font-bold text-[36px] leading-[130%] tracking-[0.5px] text-[#272727] flex-none order-0 self-stretch">
                  은행에 예치해도 <br />자산의 가치는 계속 줄어듭니다.
                </h3>
              </div>
              <p className="w-[600px] h-[162px] font-['DM_Sans'] font-normal text-[18px] leading-[150%] tracking-[0.5px] text-[#74777A] flex-none order-1 self-stretch">
                지난 10년간 우리나라 소비자물가지수는 93에서 113으로 상승했습니다. 겉으로 보기엔 단순한 숫자 변화처럼 보일 수 있지만, 이는 같은 돈으로 살 수 있는 물건의 양이 그만큼 줄어들었다는 뜻입니다. 소비를 줄이고 지출을 아껴도, <span className="text-[#298487] font-bold">투자를 하지 않으면</span> 자산 가치는 자연스럽게 <span className="text-[#298487] font-bold">줄어듭니다.</span> <br />지금은 '투자하지 않는 것'도 <span className="text-[#298487] font-bold">또 하나의 리스크</span>가 되어버린 세상입니다.
              </p>
            </div>
          </div>

          {/* Second Block */}
          <div className="w-[1240px] h-[380px] flex flex-row items-center p-0 gap-[50px] flex-none order-1 self-stretch">
            <p className="w-[600px] h-[243px] font-['DM_Sans'] font-normal text-[18px] leading-[150%] tracking-[0.5px] text-[#74777A] flex-none order-0">
              우리는 단순히 유행하는 종목을 추천하지 않습니다. <span className="text-[#298487] font-bold">시장 흐름을 정밀하게 분석</span>하고, 고객 개개인의 투자 성향과 목표에 맞춘 <span className="text-[#298487] font-bold">맞춤형 전략</span>을 설계합니다. 혼자서 감당하기엔 너무 빠르게 움직이는 시장, 이제는 정보가 곧 수익이 되는 시대입니다. 무작정 뛰어들기보다, <span className="text-[#298487] font-bold">전문가와 함께</span> 방향을 설정하고 나아가는 것이 장기적인 성공으로 가는 가장 안전한 길입니다.  <br /><br />당신의 다음 선택이 달라야 하는 이유, <br />지금 <span className="text-[#298487] font-bold">퀀텀리포트 컨설팅</span>과 함께 확인해보세요.
            </p>
            <div 
              className="w-[590px] h-[380px] rounded-[10px] flex-none order-1"
              style={{
                backgroundImage: "url('/intro2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
