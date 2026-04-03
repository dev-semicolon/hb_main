export default function BenefitsSection() {
  const benefits = [
    {
      title: '개인 투자자의 정보 격차 해소',
      description: '기관 수준의 분석 리포트를 합리적인 비용으로 접할 수 있습니다.'
    },
    {
      title: '감정 없는 원칙 기반 투자 습관',
      description: '시장의 공포와 탐욕에 흔들리지 않는 데이터 중심 판단력을 키웁니다.'
    },
    {
      title: '검증된 전문가 팀과의 동행',
      description: '10년 이상의 시장 경험을 가진 애널리스트가 직접 분석하고 관리합니다.'
    },
    {
      title: '선제적 매수, 전략적 매도 타이밍',
      description: '시장이 움직이기 전에 포지셔닝하는 선행 지표 분석을 제공합니다.'
    }
  ];

  const features = [
    '리스크 관리 우선의 투자 철학',
    '시장 사이클을 읽는 거시 분석',
    '월간 성과 리뷰 & 전략 보고서'
  ];

  return (
    <section className="w-full h-[912px] flex flex-col items-center py-[150px] px-0 bg-[#F0F5F8] flex-none order-1">
      <div className="w-full max-w-[1200px] h-[612px] flex flex-row justify-between items-start p-0 gap-[50px] flex-none order-0 px-5">
        {/* Left Content */}
        <div className="w-[560px] h-[410px] flex flex-col items-start p-0 gap-[50px] flex-none order-0">
          <div className="w-[560px] h-[242px] flex flex-col items-start p-0 gap-[16px] flex-none order-0">
            <div className="w-[560px] h-[130px] flex flex-col items-start p-0 gap-[8px] flex-none order-0 self-stretch">
              <h2 className="w-[560px] h-[130px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] tracking-[0.5px] text-[#272727] flex-none order-0">
                지금, NEXT ONE 과 <br />함께하세요.
              </h2>
            </div>
            <p className="w-[560px] h-[96px] font-['DM_Sans'] font-normal text-[20px] leading-[32px] tracking-[0.5px] text-[#272727] flex-none order-1">
              대형 기관과 세력들이 이미 선점한 정보 우위 속에서, <br />개인 투자자가 홀로 시장을 이기기란 쉽지 않습니다. <br />NEXT ONE은 이 불균형을 해소하기 위해 만들어진 서비스입니다.
            </p>
          </div>

          <div className="w-[560px] h-[118px] flex flex-col items-start p-0 gap-[20px] flex-none order-1">
            {features.map((feature, index) => (
              <div key={index} className="w-[560px] h-[26px] flex flex-row items-center p-0 gap-[16px] flex-none" style={{ order: index }}>
                <div className="w-[26px] h-[26px] rounded-[100px] bg-[#298487] flex flex-row justify-center items-center p-0 gap-[10px] flex-none order-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none order-0">
                    <path d="M15 4.5L6.75 12.75L3 9" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="flex-1 h-[23px] font-['DM_Sans'] font-medium text-[18px] leading-[130%] text-[#1A191E] order-1">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="w-[498.75px] h-[612px] flex flex-col items-start p-0 gap-[20px] flex-none order-1">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="w-[498.75px] h-[138px] bg-[#FCFCFC] rounded-[10px] flex flex-row items-start p-[25px] gap-[20px] flex-none"
              style={{ order: index }}
            >
              <div className="w-[448.75px] h-[88px] flex flex-col items-start p-0 gap-[10px] flex-none order-0 flex-grow">
                <h3 className="w-[448.75px] h-[32px] font-['DM_Sans'] font-bold text-[20px] leading-[32px] tracking-[-0.03em] text-[#272727] flex-none order-0 self-stretch">
                  {benefit.title}
                </h3>
                <p className="w-[448.75px] h-[46px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] tracking-[0.5px] text-[#74777A] flex-none order-1 self-stretch">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
