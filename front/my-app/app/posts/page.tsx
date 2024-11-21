import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "@/components/layouts/article";
import Section  from "@/components/section";
import { GridItem } from "@chakra-ui/react";

import thumbFishWorkflow from '../public/images'

const Posts = () => {
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem title="My Fish workflow" 
                    thubnail={thumbFishWorkflow}
                    href="https://www.youtube.com"
                    />

                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
}