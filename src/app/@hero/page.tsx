import { HeroLeftImage, HeroRightText } from '@/features/hero';

export default function HeroSection() {
  return (
    <section
      className={
        'section section-padding flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-0'
      }
    >
      <HeroLeftImage />
      <HeroRightText />
    </section>
  );
}
