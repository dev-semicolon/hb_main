export default function MembershipHero() {
  return (
    <section 
      className="w-full h-[800px] flex flex-col items-center"
      style={{
        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/mebership.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col justify-center items-center py-[90px] gap-[10px] w-full max-w-[1440px] h-[800px]">
        <div className="flex flex-col items-center p-0 gap-[60px] w-[1014px] h-[314px]">
          <div className="flex flex-col items-start p-0 gap-[20px] w-[1014px] h-[206px]">
            <p className="w-[1014px] h-[26px] font-['DM_Sans'] font-medium text-[20px] leading-[130%] text-center tracking-[0.15px] text-white">
              새로운 투자, 퀀텀리포트가 먼저 찾아냈습니다.
            </p>
            
            <h1 className="w-[1014px] h-[72px] font-['DM_Sans'] font-black text-[60px] leading-[120%] text-center text-[#FDFDFD]">
              NEXT PREMIERE
            </h1>
            
            <p className="w-[1014px] h-[68px] font-['DM_Sans'] font-normal text-[24px] leading-[140%] text-center text-[#FDFDFD]">
              넥스트 프리미어 서비스는 벨류 프리미어 이용 고객 가운데, <br />내부 심사 기준을 충족한 회원에게만 제공되는 한정형 프리미엄 서비스입니다.
            </p>
          </div>
          
          <div className="flex flex-row items-start p-0 gap-[10px] w-[280px] h-[48px]">
            <button className="box-border flex flex-row justify-center items-center px-[20px] py-[12px] gap-[10px] w-[280px] h-[48px] border border-[#FCFCFC] rounded-[50px] font-['DM_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#FCFCFC] hover:bg-white hover:text-[#272727] transition-colors">
              NEXT PREMIER 가입하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
