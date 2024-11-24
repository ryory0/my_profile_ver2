"use client";

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  delay?: number; // オプショナルなプロパティ
};

const MotionBox = motion.create(Box); // ChakraのBoxをmotionでラップ

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
