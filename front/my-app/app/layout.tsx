"use client";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <ChakraProvider>
          <AnimatePresence>{children}</AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}
