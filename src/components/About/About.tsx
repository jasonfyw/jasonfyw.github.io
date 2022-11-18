import { FC } from 'react';
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack position='relative' alignItems='center' direction={['column', 'row']}>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='https://raw.githubusercontent.com/jasonfyw/jasonfyw/main/media/headshot.png'
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                            <VStack spacing={4} p={4} pl={50}>
                                <Fade bottom cascade duration={500}>
                                    <Text>
                                        Hi, I'm Jason and I'm an undergraduate student at the University of Toronto pursuing a Specialist in Computer Science and Major in Cognitive Science, graduating class of 2025.
                                    </Text>
                                </Fade>
                            <Fade bottom cascade duration={500}>
                                    <Text>
                                        I'm experienced in full-stack web development - particularly with Typescript and Python. React is my frontend of choice and I've worked in backend with Java, Python, and Golang. In addition to Software Engineering, I am also interested in machine learning and the confluence of artificial intelligence and cognitive science.
                                    </Text>
                                </Fade>
                            </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    );
};

export default About;