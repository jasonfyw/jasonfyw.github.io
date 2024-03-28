import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.jpg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Jason and I'm a third year co-op
                                        student at the{' '}
                                        <b>University of Toronto</b> with a
                                        passion for <b>Software Engineering</b>{' '}
                                        and all things technology!
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I'm pursuing an HBSc with a{' '}
                                        <b>
                                            Specialist in Computer Science (ASIP
                                            co-op)
                                        </b>{' '}
                                        and <b>Major in Cognitive Science</b>,
                                        graduating class of 2026.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        Over the course of Summer 2023, I was a{' '}
                                        <b>
                                            Software Engineering Intern at
                                            NerveX
                                        </b>{' '}
                                        working in full-stack development. I also have experience as a developer at various student organizations and startups.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in full-stack web
                                        development - particularly with{' '}
                                        <b>Typescript</b> and <b>Python</b>.{' '}
                                        <b>ReactJS</b> is my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, .NET Core, Java, Python,</b>{' '}
                                        and <b>Golang</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in the confluence of
                                        artificial intelligence and cognitive
                                        science, as well as photography! Check
                                        out my&nbsp;
                                        <Link
                                            href='https://photo.jasonfyw.com'
                                            isExternal
                                            fontWeight={'semibold'}
                                            borderBottom={
                                                '2px solid rgb(154, 228, 217)'
                                            }
                                            transition={'0.2s'}
                                            _hover={{
                                                textDecor: 'none',
                                                opacity: 0.9,
                                            }}
                                        >
                                            photography portfolio to learn more
                                            about my creative work.
                                        </Link>
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
