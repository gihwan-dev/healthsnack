import Image from 'next/image';
import HeroLeftMeatImage from '@/assets/images/hero-meat-image-min.jpg';

const HeroLeftImage = () => {
  return (
    <div
      style={{
        maxWidth: 606,
      }}
      className={'-ml-8 w-full lg:-ml-32 lg:w-3/4'}
    >
      <Image src={HeroLeftMeatImage} alt={'hero left meat image'} />
    </div>
  );
};

export default HeroLeftImage;
