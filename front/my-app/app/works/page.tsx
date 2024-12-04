"use client";

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from "../../components/section"
import { WorkGridItem } from '../../components/grid-item'
import thumbInkdrop from '../../public/images/main.png'

const Works = () => {
    return (
        <Container pt={20} maxW="container.md">
            <Heading as="h3" fontSize={20} mb={4} mt={5}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="Fodo Food" title="Fodo Food" thumbnail={thumbInkdrop} url="https://food-food-kt8rs3xxlppousqfh8jgcg.streamlit.app/">
                        E-commerce site for local food and cuisine
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works