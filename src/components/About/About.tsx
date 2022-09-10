import { FC } from 'react';
import {
    Container,
    Heading,
    Flex,
    Image,
    VStack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';

const About: FC = () => {
    return (
        <Container maxW={'5xl'} p={6.75}>
            <VStack spacing={8}>
                <Heading as='h2'>About me</Heading>
                <Flex position='relative' alignItems='center'>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://raw.githubusercontent.com/jasonfyw/jasonfyw/main/media/headshot.png'
                        border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                    />
                    <VStack spacing={4} p={4} pl={50} textAlign='justify'>
                        <Text>
                            Hi, I'm Jason and I'm an undergraduate student at the University of Toronto pursuing a Specialist in Computer Science and Major in Cognitive Science, graduating class of 2025.
                        </Text>
                        <Text>
                            Having worked in a diverse range of professional environments from event planning to startups, I am experienced in full-stack web development - particularly with Javascript and Python. In addition to SWE, I am also interested in machine learning, namely NLP and computational linguistics.
                        </Text>
                    </VStack>
                </Flex>
            </VStack>
        </Container>
    );
};

export default About;