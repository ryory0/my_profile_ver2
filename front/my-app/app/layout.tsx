"use client";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from "@/components/layouts/Header";
import theme from '@/lib/theme';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />
          <AnimatePresence>{children}</AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}
