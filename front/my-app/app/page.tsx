"use client";

import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';



const Page = () => {
  return (
      <Container pt={20} maxW="container.md">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={5}
          mb={6}
          textAlign="center"
          w="100%"
        >
          Hello, I&apos;m a full-stack developer based in Japan!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ryohei Yoshine
            </Heading>
            <p>Chemistry Researcher & Web Application Developer ( Researcher / Developer / Learner )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
          </Box>
        </Box>

          <Heading as="h3" variant="section-title">
            Work
          </Heading>
            I am a first-year graduate student who majored in chemistry at university, and I am currently using computer
            simulations to analyze protein-drug interactions.{' '}
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>

          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

            My hobbies include muscle training, web application development, and I am currently studying Django, Next.js, and
            machine learning for chemistry.

      </Container>
  );
};

export default Page;
