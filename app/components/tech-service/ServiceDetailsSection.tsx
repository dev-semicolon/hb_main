export default function ServiceDetailsSection() {
  const services = [
    {
      badge: '투명성',
      title: '모든 분석과 판단 근거를 공개합니다',
      description: '결론만 제시하지 않습니다. 어떤 데이터를 기반으로 어떤 논리로 도달했는지 전 과정을 공개해 투자자가 스스로 판단할 수 있게 합니다.'
    },
    {
      badge: '독립성',
      title: '어떠한 외부 이해관계에도 영향받지 않습니다',
      description: '특정 종목이나 세력의 이익을 위한 정보 제공을 하지 않습니다. 오직 구독자의 수익만을 목표로 합니다.'
    },
    {
      badge: '정확성',
      title: '검증되지 않은 정보는 제공하지 않습니다',
      description: '소문이 아닌 데이터, 감각이 아닌 지표에 근거한 분석만을 제공합니다. 정확성이 흔들리면 신뢰도 무너집니다.'
    },
    {
      badge: '지속성',
      title: '단기 퍼포먼스보다 장기 신뢰를 추구합니다',
      description: '화려한 단기 수익률 마케팅을 거부합니다. 구독자와 함께 꾸준히 수익을 만들어나가는 지속 가능한 투자 파트너십을 추구합니다.'
    }
  ];

  return (
    <section className="w-full px-5 md:px-10 py-20 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
        <div className="w-[1440px] h-[139px] flex flex-col items-start p-0 gap-[10px]">
          <h2 className="w-[1440px] h-[65px] font-['DM_Sans'] font-bold text-[50px] leading-[130%] text-center tracking-[0.5px] text-[#272727] flex-none order-0 self-stretch">
            SERVICE DETAILS
          </h2>
          <p className="w-[1440px] h-[64px] font-['DM_Sans'] font-normal text-[20px] leading-[32px] text-center tracking-[0.5px] text-[#272727] flex-none order-1 self-stretch">
            투자 정보 서비스가 갖춰야 할 <span className="text-[#298487] font-bold">4가지 핵심 가치</span>를 바탕으로 <br />퀀텀리포트는 모든 서비스를 설계하고 운영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px] max-w-[1140px] mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-[555px] h-[237px] bg-[#FCFCFC] border border-[#E6E7E9] rounded-[20px] flex flex-col items-start p-[30px_40px] gap-[10px]"
            >
              <div className="w-[475px] h-[158px] flex flex-col items-start p-0 gap-[10px] flex-none order-0">
                <div className="w-[80px] h-[37px] flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] bg-[#EFF7F8] rounded-[100px] flex-none order-0">
                  <span className="w-[40px] h-[17px] font-['DM_Sans'] font-normal text-[14px] leading-[120%] flex items-center tracking-[0.5px] text-[#272727] flex-none order-0">
                    {service.badge}
                  </span>
                </div>
                <h3 className="w-[475px] h-[32px] font-['DM_Sans'] font-bold text-[20px] leading-[32px] tracking-[0.5px] text-[#272727] flex-none order-1 self-stretch">
                  {service.title}
                </h3>
                <p className="w-[475px] h-[69px] font-['DM_Sans'] font-normal text-[18px] leading-[130%] tracking-[0.5px] text-[#74777A] flex-none order-2 self-stretch">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
