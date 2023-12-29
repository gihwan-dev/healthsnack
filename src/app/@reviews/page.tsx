import BuyButton from '@/components/BuyButton';
import TitleText from '@/components/TitleText';
import { ReviewContainer } from '@/features/reviews';

export default function ReviewsSection() {
  return (
    <section className="section section-padding flex flex-col gap-16">
      <TitleText center={false}>
        고객님들은 헬스낵을 이렇게 평가합니다
      </TitleText>
      <ReviewContainer />
      <div className="flex items-center justify-center">
        <BuyButton rounded="md" />
      </div>
    </section>
  );
}
