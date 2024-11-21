"use client"

import { Box, Container, Heading, Text, Tag, Image, Flex, VStack, HStack } from "@chakra-ui/react"

export default function BlogPostLayout() {
  return (
    <Container maxW="4xl" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Blog Post Title
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Posted by First Last MM/DD/YY
      </Text>
      <HStack spacing={2} mb={4}>
        <Tag colorScheme="blue">Tag 1</Tag>
        <Tag colorScheme="blue">Tag 2</Tag>
        <Tag colorScheme="blue">Tag 3</Tag>
      </HStack>
      
      <Image
        src="/images/test.png"
        alt="Blog post cover image"
        objectFit="cover"
        w="full"
        h="64"
        borderRadius="lg"
        mb={8}
      />
      
      <Heading as="h2" size="xl" mb={4}>
        Blog title heading
      </Heading>
      <Text color="gray.600" mb={8}>
        Use this space to provide a summary of what the blog post below will cover.
        Keep it to one or two sentences max.
      </Text>
      
      <Flex gap={8}>
        <Box flex={1}>
          <Heading as="h3" size="lg" mb={4}>
            Sub header that summarizes the paragraphs
          </Heading>
          <Text color="gray.700" mb={4}>
            Input your writing here. Keep the above-the-fold section to two paragraphs
            so as to break up the text for your readers.
          </Text>
          <Text color="gray.700" mb={4}>
            Continue your content here...
          </Text>
        </Box>
        <Box w="64">
          <Box bg="gray.100" p={4} borderRadius="lg">
            <Heading as="h4" size="md" mb={2}>
              Small caption notes
            </Heading>
            <Text fontSize="sm" color="gray.600">
              with relevant links can go in the margin.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}