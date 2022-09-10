import { FC } from 'react';
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
    return (
        <Container maxW={'10xl'} p={6.75} mt={20}>
            <VStack spacing={8}>
                <Heading as='h2'>Projects</Heading>
                <Wrap spacing='20px' justify='center' pb={10}>
                    <WrapItem p={5}>
                        <ProjectCard />
                    </WrapItem>
                    <WrapItem p={5}>
                        <ProjectCard />
                    </WrapItem>
                    <WrapItem p={5}>
                        <ProjectCard />
                    </WrapItem>
                    <WrapItem p={5}>
                        <ProjectCard />
                    </WrapItem>
                    <WrapItem p={5}>
                        <ProjectCard />
                    </WrapItem>

                </Wrap>
               
            </VStack>
        </Container>
    );
};

export default Projects;