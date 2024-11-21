"use client";

import { useRouter } from 'next/router'; 
import Head from 'next/head';
import Navbar from '../Navbar';
import { Box, Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header"> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryohei Yoshine - Homepage</title>
      </Head>
      <Navbar />
    </Box>
  );
};

export default Header;