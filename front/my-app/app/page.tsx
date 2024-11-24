"use client";

import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import { BioSection, BioYear } from '@/components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '@/components/layouts/article';
import NoSsr from '@/components/no-ssr';
import Earth from '@/components/earth';

const Page = () => {
  return (
    <Layout title='Homepage'> 
      <NoSsr>
        <Earth />
      </NoSsr>
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
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/my_image3.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
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
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
            <BioSection>
              <BioYear>2000</BioYear>
              Born in Saitama (埼玉), Japan.
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
              Graduated from Saitama Prefectural Tokorozawa High School.
            </BioSection>
            <BioSection>
              <BioYear>2024 to present</BioYear>
              Currently in the first year of the Master&apos;s Program in the Graduate School of Science, majoring in
              Chemistry at Rikkyo University.
            </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Passions & Pursuits 🔥
          </Heading>
          <Paragraph>
            My hobbies include muscle training, web application development, and I am currently studying Django, Next.js, and
            machine learning for chemistry.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
