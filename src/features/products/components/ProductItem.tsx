import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  image: string;
  src: string;
  width: number;
  height: number;
  visibility?: boolean;
  isCenter?: boolean;
  isBlur?: boolean;
};

const ProductItem: React.FC<Props> = ({
  image,
  src,
  width,
  height,
  visibility = true,
  isCenter = false,
  isBlur = false,
}) => {
  return (
    <motion.li
      style={{
        width: '100%',
        maxWidth: `${width}px`,
        height: `${height}px`,
      }}
      className={`${
        visibility ? '' : 'hidden'
      } relative left-1/2 z-0 -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-700 xl:left-0 xl:translate-x-0`}
    >
      <Image
        fill={true}
        src={image}
        alt="product image"
        className={`overflow-hidden object-cover ${isBlur ? 'blur-sm' : ''}`}
      />
      {isCenter ? (
        <motion.div
          transition={{
            duration: 0.7,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href={src}
            target="_blank"
            className={`absolute bottom-24 left-1/2 z-10 box-border w-10/12 -translate-x-1/2 rounded-md bg-black py-2 text-center text-lg font-bold text-gold transition-all hover:scale-105 sm:bottom-6`}
          >
            구매하러가기
          </Link>
        </motion.div>
      ) : null}
    </motion.li>
  );
};

export default ProductItem;
