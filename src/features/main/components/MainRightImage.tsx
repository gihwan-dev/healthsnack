'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

import MainMeatImage from '@/assets/images/main-meat-image-min.jpg';

const MainRightImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: 'spring' }}
      className={'w-full animate-in md:-mr-28 md:w-3/4'}
      style={{
        maxWidth: 805,
      }}
    >
      <Image src={MainMeatImage} alt={'main-meat-image'} />
    </motion.div>
  );
};

export default MainRightImage;
