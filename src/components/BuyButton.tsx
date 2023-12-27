import Link from 'next/link';

const BuyButton = () => {
  return (
    <Link
      className={
        'bg-gold ml-2 w-fit rounded-full px-8 py-4 text-center text-lg font-bold text-white transition-all hover:-translate-y-1'
      }
      href={'https://smartstore.naver.com/simpleandhealthy'}
    >
      구매하러 가기
    </Link>
  );
};

export default BuyButton;
