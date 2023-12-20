import Image from 'next/image';

import MainMeatImage from '@/assets/images/main-meat-image-min.jpg';

const MainRightImage = () => {
  return (
    <div
      className={'w-full md:-mr-28 md:w-3/4'}
      style={{
        maxWidth: 805,
      }}
    >
      <Image src={MainMeatImage} alt={'main-meat-image'} />
    </div>
  );
};

export default MainRightImage;
