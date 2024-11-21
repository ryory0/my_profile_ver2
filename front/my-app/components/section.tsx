"use client";

import { motion } from 'framer-motion';
import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { isValidMotionProp } from 'framer-motion';

type SectionProps = {
  children: ReactNode;
  delay?: number; // オプショナルなプロパティ
};

// ChakraとFramer Motionを統合したBoxコンポーネント
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay } }} // transitionをここに指定
      mb={6}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
