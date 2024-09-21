"use client";

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* グローバルなメタタグやタイトルなどがあればここに記載 */}
      </head>
      <body>
        <ChakraProvider>
          {children} {/* ページのコンテンツがここに表示されます */}
        </ChakraProvider>
      </body>
    </html>
  );
}
