import Link from 'next/link';

type BuyButtonProps = {
  rounded?: 'full' | 'sm' | 'md' | 'lg';
};

const BuyButton: React.FC<BuyButtonProps> = ({ rounded = 'full' }) => {
  return (
    <Link
      target="_blank"
      className={`ml-2 w-fit bg-gold rounded-${rounded} px-8 py-4 text-center text-lg font-bold text-white transition-all hover:opacity-60`}
      href={'https://smartstore.naver.com/simpleandhealthy'}
    >
      구매하러 가기
    </Link>
  );
};

export default BuyButton;
