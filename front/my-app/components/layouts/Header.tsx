"use client";

import { useRouter } from 'next/router'; 
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { Box } from '@chakra-ui/react';

const Header = () => {
  const router = useRouter(); // 現在のルートを取得

  return (
    <Box as="header"> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryohei Yoshine - Homepage</title>
      </Head>
      <Navbar path={router.pathname} /> {/* path プロパティを渡す */}
    </Box>
  );
};

export default Header;
