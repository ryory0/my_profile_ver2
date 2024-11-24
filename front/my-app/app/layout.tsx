"use client";
import './global.css';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const DynamicHeader = dynamic(() => import("../components/layouts/Header"), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // 現在のパスを取得

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <DynamicHeader path={pathname || "/"} /> {/* path を渡す */}
          <AnimatePresence mode="sync" initial={true}>
            {children} {/* ページのコンテンツ */}
          </AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}
