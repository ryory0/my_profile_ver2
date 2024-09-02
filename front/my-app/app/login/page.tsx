"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { FormControl, FormLabel, Button, Input, Box, Card, CardHeader, CardBody, CardFooter, Heading, VStack, HStack, Center, ButtonGroup } from "@chakra-ui/react"
const Login= ()=> {
	const router = useRouter()
	return (
		<Center w='100vw' h='100vh' bg='lightgray'>
			<Card w='50vh' h='30vh' bg='white'>
				<CardHeader>
					<Heading size='md'> ログイン</Heading>
				</CardHeader>
				<FormControl onSubmit={() => { }} isRequired>
					<CardBody>
						<VStack spacing={3}>
							<Box className="input-container">
								<Input
									type="text"
									placeholder="user name"
								/>
							</Box>
							<Box className="input-container">
								<Input
									type="text"
									placeholder="password"
								/>
							</Box>
						</VStack>
					</CardBody>
					<CardFooter>
						<ButtonGroup spacing={4} marginLeft="auto">
							<Button type="submit" colorScheme='blue' onClick={() => { router.push(`/`) }} >Login</Button>
							<Button onClick={() => { router.back() }}> cancel</Button>
						</ButtonGroup>
					</CardFooter>
				</FormControl>
			</Card>
		</Center>
	)
}
export default Login
