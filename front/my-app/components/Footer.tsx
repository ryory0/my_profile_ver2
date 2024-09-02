"use client"
import {Button} from "@chakra-ui/react"
import {Spacer, Center} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
export const Footer = () => {
	const router = useRouter()
	return (
		<>
		<Center m={12}>
		<Spacer />
		<Button variant='ghost' onClick={()=>{router.push("/QuestionPost/-1")}}>AI</Button>
		<Spacer />
		<Button variant='ghost' onClick={()=>{router.push("/Questions")}}>過去のQAコーナー</Button>
		<Spacer />
		</Center>
		</>
	)
}
