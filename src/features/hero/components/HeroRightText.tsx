const HeroRightText = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <div className={'text-4xl font-bold -text--white xl:text-5xl'}>
        프리미엄 육류만을
        <br />
        선별하여 고집하는 <span className="whitespace-nowrap">헬스낵</span>
      </div>
      <div className={'text-xl -text--gray-light xl:text-2xl'}>
        {'"우리도 생산자이기 이전에 한 사람의 소비자이다"'}
        <br />
        라는 원칙으로 시작했습니다.
      </div>
    </div>
  );
};

export default HeroRightText;
