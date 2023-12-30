'use client';

import { motion } from 'framer-motion';

import BestListItem from './BestListItem';
import { bestListData } from '@/const';

const BestListContainer = () => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5, type: 'spring' }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:gap-0"
    >
      {bestListData.map(item => {
        return (
          <BestListItem
            key={item.title}
            image={item.image}
            title={item.title}
            src={item.src}
          />
        );
      })}
    </motion.ul>
  );
};

export default BestListContainer;
