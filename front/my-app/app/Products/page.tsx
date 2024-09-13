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

const products = [
	{
	  id: 1,
	  title: "にんじん",
	  imageUrl: "https://grworks.co.jp/wordpress/wp-content/uploads/2023/01/o0880088015204798719.jpg",
	},
	{
	  id: 2,
	  title: "そうめん",
	  imageUrl: "https://www.inoueseikoen.co.jp/img/goods/2/04418.jpg",
	},
	{
	  id: 3,
	  title: "かんざらしキット",
	  imageUrl: "https://img21.shop-pro.jp/PA01476/611/product/167953410.jpg?cmsp_timestamp=20220427141625",
	},
	{
	  id: 4,
	  title: "具雑煮セット",
	  imageUrl: "https://p1-3c615a9b.imageflux.jp/w=1200,h=1200,a=0,u=0,ir=auto/uploads/product_image/image/725206/image.jpg?1617703227",
	},
	{
	  id: 5,
	  title: "狭山抹茶「翡翠」50g",
	  imageUrl: "https://tshop.r10s.jp/gold/sayama-tea/hisui/image100.png?fitin=720%3A720",
	},
	{
	  id: 6,
	  title: "高原トマト",
	  imageUrl: "https://www.joetsu.ne.jp/wordpress/wp-content/uploads/2023/08/Still0829_00001-3.jpg",
	},
  ];

const ProductsPage = ()=> {
	return (
		<VStack spacing={8} align="start" w="full" p={5} bg="orange.50" px={10}>
			<Heading as="h1" size="lg" ml={4}>ショッピング</Heading>
			<SimpleGrid columns={[1, 2, 3]} spacing={15} w="full" px={5}>
				{products.map((product) => (
					<Box
					key={product.id}
					position="relative"  // 親要素を relative にする
					bg="white"
					borderRadius="md"
					shadow="md"
					overflow="hidden"   // 親要素の overflow を hidden に
					_hover={{ shadow: "lg", transform: "scale(1.02)" }}
					transition="all 0.2s"
				  >
					<Image
					  src={product.imageUrl}
					  alt={product.title}
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
					  {product.title}
					</Text>
				  </Box>
				))}
			</SimpleGrid>
		</VStack>
	)
}

export default ProductsPage