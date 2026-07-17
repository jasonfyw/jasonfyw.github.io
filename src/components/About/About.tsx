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
                                        Hi, I'm Jason! I'm a software engineer and recent graduate of the{' '}
                                        <b>University of Toronto</b> where I studied Computer Science and Cognitive Science.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        I am currently a Software Engineer at <b>Amazon</b> working in Ads. I have also had previous Software Development experiences at <b>theScore</b>, <b>Deep Genomics</b>, and the <b>University of Toronto</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in working on large scale, data-intensive systems. I am passionate about building products that help people live better lives.
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
