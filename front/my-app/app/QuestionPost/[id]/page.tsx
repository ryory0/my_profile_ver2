"use client"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Flex, Text, Avatar } from '@chakra-ui/react'
import { VStack,Center,Spacer, Divider } from '@chakra-ui/react'
import { Textarea, Button } from '@chakra-ui/react'
import { useSearchParams, usePathname, useParams } from "next/navigation";
// import { Configuration, OpenAIApi } from "openai"
import { OpenAI } from "openai"
import Configuration from "openai"
import {Fetchs, questionsSample, answerSample, usersSample} from '@/api/ApiSample'
import { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
const QuestionPostPage= ()=> {
	const toast = useToast()
	const [word, setWord] = useState("");
	const handleChange = (event: any) => setWord(event.target.value)
	const params = useParams()
	const id = Number(params.id)
	if (id==null) return
	const answer_user = getUser(id)
	if (answer_user==null) return
	const question_user = getUser(1)
	if (question_user==null) return
	const postQuestion = async (word:string) => {
		try {
			if (id!=-1) return 
			console.log(word)
			const res=await AIHandle(word)
			toast({
				title: 'AIの回答',
				description: res,
				status: 'success',
				duration: 9000,
				isClosable: true,
			})
		} catch (error){
			console.log(error)
			return 
		}
	};
	
	return (
		<Center>
		<VStack w={["80%","lg"]}>
			<Box h={10}></Box>
			<Center>
			<Card w={["80%","lg"]}>
				<CardHeader>
					<Heading size='md'> 宛先</Heading>
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
			</Card>
			</Center>
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
				<Textarea onChange={handleChange}/>
				</CardBody>
				<CardFooter>
				<Spacer />
				<Button onClick={()=>{postQuestion(word)}}>
				送信
				</Button>
				</CardFooter>
			</Card>
			</Center>
		</VStack>
		</Center>
	);
}
export default QuestionPostPage

const getUser=(user_id:number)=>{
		var user=null
		for (let u of usersSample){
			if(u.id == user_id){
				user=u
			}
		}
		return user
}


const AIHandle=async(word:string) => {
  const openai = new OpenAI({
	  apiKey: "openAPI key",
	  dangerouslyAllowBrowser: true
  })
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: word },
    ],
  })
  return completion.choices[0].message.content
}
