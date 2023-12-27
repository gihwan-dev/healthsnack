import TitleText from '@/components/TitleText';
import { ProductListContainer } from '@/features/products';

export default function ProductsSection() {
  return (
    <section className="section section-padding flex flex-col gap-16">
      <TitleText>상품목록</TitleText>
      <ProductListContainer />
    </section>
  );
}
