"use client"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import { Input, VStack, HStack, Divider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import React from 'react'
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Header = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const router = useRouter();

	const mainImage = (
		<Box width="100%" maxWidth={{ base: '100%', md: '100%', lg: '100%' }} position="relative">
			<Image 
				src="/img/main.png" 
				alt="メインビジュアル" 
				layout="responsive" // レスポンシブレイアウトを指定
				width={1920} 
				height={600} 
				priority 
				style={{ 
					objectFit: 'cover', // 画像を親要素にフィットさせる
				}} 
			/>
		</Box>
	);

	return (
		<VStack align="flex-start" w="full" p={3} bg="orange.50" spacing={10}>
			{mainImage}
			<Heading as="h1" fontSize="4xl" ml={4}>Fodo Food</Heading>
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
			<Divider borderColor='orange' />
		</VStack>
	);
};