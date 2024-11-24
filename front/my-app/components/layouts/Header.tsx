"use client";

import Head from 'next/head';

import { Box, Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header"> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryohei Yoshine - Homepage</title>
      </Head>
    </Box>
  );
};

export default Header;