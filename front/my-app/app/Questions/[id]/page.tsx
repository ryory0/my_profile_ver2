"use client"
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Flex, Text, Avatar } from '@chakra-ui/react'
import { VStack,Center,Spacer, Divider } from '@chakra-ui/react'
import { useSearchParams, usePathname, useParams } from "next/navigation";
import {useEffect} from 'react'
import {Fetchs, questionsSample, answerSample, usersSample} from '@/api/ApiSample'


const QuestionPage= ()=> {
	const params = useParams()
	const id = Number(params.id)
	const question = getQuestion(id)
	const answer = getAnswer(id)
	if ( question==null ) return
	if ( answer==null ) return
	const question_user = getUser(question.user_id)
	const answer_user = getUser(answer.user_id)
	if ( question_user==null ) return
	if ( answer_user==null ) return
	console.log(question)
	console.log(answer)
	console.log(question_user)
	console.log(answer_user)
	return(
		<Center>
		<VStack w={["80%","lg"]}>
			<Box h={10}></Box>
			<Center>
			<Card w={["80%","lg"]}>
				<CardHeader>
					<Heading size='md'> 質問</Heading>
					<Divider mt={2} mb={3}/>
					<Flex>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name={question_user.name} src='https://bit.ly/broken-link'/>
							<Box>
								<Heading size='sm'>{question_user.name}</Heading>
								<Text>{question_user.experience}</Text>
							</Box>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text>
					{question.q}
				</Text>
			</CardBody>
			</Card>
			</Center>
			<Box h={10}></Box>
			<Center>
			<Card w={["80%","lg"]}>
				<CardHeader>
				<Heading size='md'> 回答</Heading>
					<Divider mt={2} mb={3}/>
					<Flex>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name={answer_user.name} src='https://bit.ly/broken-link'/>
							<Box>
								<Heading size='sm'>{answer_user.name}</Heading>
								<Text>{answer_user.experience}</Text>
							</Box>
					</Flex>
				</Flex>
				</CardHeader>
				<CardBody>
					<Text>
					{answer.a}
					</Text>
				</CardBody>
			</Card>
			</Center>
		</VStack>
		</Center>
	)
}
export default QuestionPage

const getQuestion=(id:number)=>{
		var question=null
		for (let q of questionsSample){
			if (q.id == id){
				question=q
			}
		}
		return question
}

const getAnswer=(question_id:number)=>{
		var answer=null
		for (let a of answerSample){
			if(a.question_id == question_id){
				answer=a
			}
		}
		return answer
}
const getUser=(user_id:number)=>{
		var user=null
		for (let u of usersSample){
			if(u.id == user_id){
				user=u
			}
		}
		return user
}
