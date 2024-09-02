"use client"
import { Header } from "@/components/Header"
import { StackDivider, Stack, HStack, VStack } from '@chakra-ui/react'
import {Box} from "@chakra-ui/react"
import {Spacer,Center} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Input,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import {Question, questionsSample} from '@/api/ApiSample'
import { useState, useEffect } from 'react'

const QuestionsPage= ()=> {
	const [word, setWord] = useState("");
	const handleChange = (event: any) => setWord(event.target.value)
	return (
		<Center>
		<VStack w="100%">
			<Box h={10}></Box>
			<Input placeholder='検索ボックス' size='lg' w='80%' onChange={handleChange}/>
		<Table w="80%" >
		<Thead>
			<Tr> <Th>質問</Th>
			</Tr>
		</Thead>
		<QuestionList questions={searchQuestion(word)}/>
		</Table>
		</VStack>
		</Center>
	);
}
type Props = {
  questions: Question[]
}

const QuestionList = ({ questions }: Props) => {
	const router = useRouter()
	return (
		<Tbody>
			{questions.map((question) => (
				<>
					<Tr _hover={{ background:"lightgray" }} onClick={()=>{router.push("Questions/"+String(question.id))}}>
						<Th>
							  {question.q}
						</Th>
					</Tr>
				</>
			))}
		</Tbody>
	)
}
const searchQuestion=(word:string)=>{
		var questions:Question[]=[]
		for (let q of questionsSample){
			if(q.q.includes(word) ){
				questions.push(q)
			}
		}
		console.log(questions)
		return questions
}
export default QuestionsPage
