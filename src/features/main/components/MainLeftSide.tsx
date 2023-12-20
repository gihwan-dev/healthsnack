import MainTypo from './MainTypo';
import BuyButton from '@/components/BuyButton';

const MainLeftSide = () => {
  return (
    <section className={'flex flex-col gap-12'}>
      <MainTypo />
      <BuyButton />
    </section>
  );
};

export default MainLeftSide;
