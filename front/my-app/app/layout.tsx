"use client";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from "../components/layouts/Header";
import theme from '../lib/theme';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header />
          <AnimatePresence mode="sync" initial={true}>
              {children} {/* ページのコンテンツ */}
          </AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}
