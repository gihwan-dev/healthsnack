'use client';

import { motion } from 'framer-motion';

import MainTypo from './MainTypo';
import BuyButton from '@/components/BuyButton';

const MainLeftSide = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: 'spring' }}
      className={'flex flex-col gap-12'}
    >
      <MainTypo />
      <BuyButton />
    </motion.section>
  );
};

export default MainLeftSide;
