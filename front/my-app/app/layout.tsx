"use client";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from "@/components/layouts/Header";

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ChakraProvider >
          <Header />
          <AnimatePresence mode="sync" initial={true}>
              {children} {/* ページのコンテンツ */}
          </AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}