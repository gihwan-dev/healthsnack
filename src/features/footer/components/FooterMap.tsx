import Image from 'next/image';
import FooterMapImage from '@/assets/images/map-image.jpg';

const FooterMap = () => {
  return (
    <Image src={FooterMapImage} alt="map image" width={281} height={199} />
  );
};

export default FooterMap;
