"use client";

import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from "../../components/section"
import { WorkGridItem } from '../../components/grid-item'
import thumbInkdrop from '../../public/images/main.png'
import thumbWalknote from '../../public/images/test_product_2.png'

const Works = () => {
    return (
        <Container pt={20} maxW="container.md">
            <Heading as="h3" fontSize={20} mb={4} mt={5}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="Fodo Food" title="Fodo Food" thumbnail={thumbInkdrop}>
                        A Markdown note-taking app 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="VizLab" title="VizLab" thumbnail={thumbWalknote}>
                        Music recomandation app for iOS
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works