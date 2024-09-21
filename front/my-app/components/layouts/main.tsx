"use client";

import { useRouter } from 'next/router'; // useRouterフックをインポート
import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children }) => {
  const router = useRouter();

  return (
    <Box as="main" pt={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryohei Yoshine - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
