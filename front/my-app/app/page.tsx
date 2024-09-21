"use client"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Box,
  SimpleGrid,
  Heading,
  Image,
  Text,
  Container
} from '@chakra-ui/react'

const Page = () => {
	return (
  <Container>
    <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
      Hello, I&apos;m a full-stack developer based in Japan!
    </Box>
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Ryohei Yoshine
        </Heading>
        <p>Digital Craftzman ( Artist / Developer / Designer )</p>
      </Box>
    </Box>
  </Container>
  )
}

export default Page
