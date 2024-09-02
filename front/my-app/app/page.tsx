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
  Text
} from '@chakra-ui/react'
import {Spacer,Center, Input, VStack} from '@chakra-ui/react'
import { Recipe, usersSample } from '@/api/ApiSample'
import { useState, useEffect } from 'react'
import {Fetchs} from '@/api/ApiSample'
import {Api} from '@/api/Api'
import { useRouter } from 'next/navigation'

const recipes = [
	{
	  id: 1,
	  title: "にんじんのポタージュ",
	  imageUrl: "https://image.delishkitchen.tv/recipe/151250772267368947/1.jpg?version=1697429161",
	},
	{
	  id: 2,
	  title: "サラダそうめん",
	  imageUrl: "https://www.kyounoryouri.jp/upfile/r/new_xl_1529308734_3360.jpg",
	},
	{
	  id: 3,
	  title: "いかにんじん",
	  imageUrl: "https://tenten-f.info/wp-content/uploads/2023/12/3edf7e21c657b512b0cd0856db0a07ba.jpg",
	},
	{
	  id: 4,
	  title: "具だくさん具雑煮",
	  imageUrl: "https://video.kurashiru.com/production/videos/e0c55b95-9b4e-48a9-9c2b-6660644cb404/compressed_thumbnail_square_large.jpg?1720889263",
	},
	{
	  id: 5,
	  title: "フルーツかんざらし",
	  imageUrl: "https://www.mod.go.jp/msdf/kanmeshi/menu/sw/018/img/index.jpg",
	},
	{
	  id: 6,
	  title: "狭山茶揚げパン",
	  imageUrl: "https://livedoor.blogimg.jp/madame_masayo/imgs/7/1/71dd9541-s.jpg",
	},
  ];

const Home= ()=> {
	return (
		<VStack spacing={8} align="start" w="full" p={5} bg="orange.50">
			<Heading as="h1" size="lg" ml={4}>レシピ</Heading>
			<SimpleGrid columns={[1, 2, 3]} spacing={15} w="full">
				{recipes.map((recipe) => (
					<Box
					key={recipe.id}
					position="relative"  // 親要素を relative にする
					bg="white"
					borderRadius="md"
					shadow="md"
					overflow="hidden"   // 親要素の overflow を hidden に
					_hover={{ shadow: "lg", transform: "scale(1.02)" }}
					transition="all 0.2s"
				  >
					<Image
					  src={recipe.imageUrl}
					  alt={recipe.title}
					  w="full"
					  h={300}
					  objectFit="cover"
					/>
					<Text
					  position="absolute"
					  bottom={0}
					  left={0}
					  right={0}
					  bg="rgba(0, 0, 0, 0.5)" // タイトルの背景色
					  color="white"
					  fontWeight="bold"
					  textAlign="center"
					  p={2}
					  zIndex={5} // 必要に応じて z-index を調整
					>
					  {recipe.title}
					</Text>
				  </Box>
				))}
			</SimpleGrid>
		</VStack>
	)
}

export default Home
