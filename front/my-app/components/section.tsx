"use client";

import { motion } from 'framer-motion';
import { chakra, ChakraProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  delay?: number;
};

// Chakraスタイルを適用したMotionコンポーネントに型を拡張
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    ['transition', 'initial', 'animate'].includes(prop) || typeof prop === 'string',
});

const Section = ({ children, delay = 0 }: SectionProps) => {
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
