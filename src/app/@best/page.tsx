import { BestListContainer } from '@/features/best';
import TitleText from '@/components/TitleText';

export default function BestSection() {
  return (
    <section
      id="features"
      className="section section-padding flex flex-col gap-16"
    >
      <TitleText>주간베스트</TitleText>
      <BestListContainer />
    </section>
  );
}
