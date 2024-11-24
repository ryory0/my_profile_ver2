"use client";

import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  delay?: number;
};

// Chakraスタイルを適用したMotionコンポーネント
const MotionBox = chakra(motion.div);

const Section = ({ children }: SectionProps) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      mb={6}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
