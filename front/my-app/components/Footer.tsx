"use client"

import { useRouter } from 'next/navigation'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { Input, VStack, HStack, Divider } from '@chakra-ui/react'
import React from 'react'


export const Footer = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const router = useRouter();

	return (
		<VStack align="flex-start" w="full" p={3} bg="orange.50" spacing={10}>
			<Divider borderColor='orange' />
			<HStack spacing={4} w="full" maxW="100%" justifyContent="center">
				<Button
					onClick={() => router.push("/shopping")}
					w="full"
					bgColor="white"
					border="1px solid orange"
					_hover={{ bgColor: "orange.100" }}
				>
					ショッピング
				</Button>
				<Button
					onClick={() => router.push("/Recipes")}
					w="full"
					bgColor="white"
					border="1px solid orange"
					_hover={{ bgColor: "orange.100" }}
				>
					レシピ
				</Button>
				<Button
					onClick={() => router.push("/topics")}
					w="full"
					bgColor="white"
					border="1px solid orange"
					_hover={{ bgColor: "orange.100" }}
				>
					トピック
				</Button>
			</HStack>
			<HStack spacing={4} w="full" maxW="100%" justifyContent="center" pb={8} bg="orange.50" >
				<Heading as="h1" fontSize="4xl" ml={4}>Fodo Food</Heading>
			</HStack>
		</VStack>
	);
};