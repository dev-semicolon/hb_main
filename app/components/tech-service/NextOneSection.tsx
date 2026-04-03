export default function NextOneSection() {
  return (
    <section 
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center rounded-tr-[100px]"
      style={{
        backgroundImage: 'url(/nextone.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-[1014px] h-[232px] flex flex-col items-center p-0 gap-[20px] flex-none order-0">
        <h2 className="w-[1014px] h-[144px] font-['DM_Sans'] font-black text-[60px] leading-[120%] text-center text-[#FDFDFD] flex-none order-0 self-stretch">
          Next One <br />투자컨설팅 서비스
        </h2>
        <p className="w-[1014px] h-[68px] font-['DM_Sans'] font-normal text-[24px] leading-[140%] text-center text-[#FDFDFD] flex-none order-1 self-stretch">
          개인 투자자가 혼자서는 접하기 어려운 고수준의 투자 정보와 전략을 전문가의 시각으로 제공합니다. <br />단순한 정보 제공을 넘어, 실전에서 작동하는 전략적 접근법으로 자산을 지켜드립니다.
        </p>
      </div>
    </section>
  );
}
