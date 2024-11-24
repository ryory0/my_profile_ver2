"use client";

import { motion, Transition } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  delay?: number;
};

// Chakraスタイルを適用したMotionコンポーネント
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    ['initial', 'animate', 'exit', 'style', 'transition'].includes(prop),
});

const Section = ({ children, delay = 0 }: SectionProps) => {
  const transition: Transition = { duration: 0.8, delay };

  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition as any} // 型アサーションでエラー回避
      mb={6}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
