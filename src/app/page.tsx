import { MainLeftSide, MainRightImage } from '@/features/main';

export default function Home() {
  return (
    <main
      id={'main'}
      className={
        'section section-padding flex flex-col items-start justify-start gap-24 md:flex-row md:items-center md:justify-between md:gap-0'
      }
    >
      <MainLeftSide />
      <MainRightImage />
    </main>
  );
}
