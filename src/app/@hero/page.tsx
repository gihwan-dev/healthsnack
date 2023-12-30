'use client';

import { motion } from 'framer-motion';

import { HeroLeftImage, HeroRightText } from '@/features/hero';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, type: 'spring' }}
      viewport={{ once: true, amount: 0.3 }}
      className={
        'section section-padding flex flex-col-reverse gap-32 lg:flex-row lg:items-center lg:justify-between lg:gap-0'
      }
    >
      <HeroLeftImage />
      <HeroRightText />
    </motion.section>
  );
}
