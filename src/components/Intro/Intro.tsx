import { FC } from 'react';
import {
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    useColorModeValue
} from '@chakra-ui/react';
import ParticlesBg from 'particles-bg';
import ReactTypingEffect from 'react-typing-effect';
import Socials from './Socials';

const Intro: FC = () => {
    const colorMode = useColorModeValue('light', 'dark')
    const colors = {
        subtitle: {
            light: '#5a657c' ,
            dark: '#9199a9'
        }
    }

    return (
        <Container maxW={'6xl'} p={6.75} pt={'35vh'} height={'100vh'}>
            <VStack>
                <Heading
                    fontSize={'3.5rem'}
                    fontWeight={500}
                    fontFamily={'source-code-pro, monospace'}
                    textAlign='center'
                >
                    <ReactTypingEffect text="Jason Wang" speed={85} eraseDelay={1000000} typingDelay={650} cursor="_" />
                </Heading>
                <HStack spacing={6}>
                    {['🇨🇦', '🇨🇳', '🇨🇿'].map((c) => <Heading fontSize={'1.75rem'}>{c}</Heading>)}
                </HStack>
                <Text
                    fontSize={'1.5rem'}
                    fontWeight={300}
                    color={colors.subtitle[colorMode]}
                    textAlign='center'
                >
                    Computer Science + Cognitive Science @ University of Toronto '25
                </Text>
                <Socials color={colors.subtitle[colorMode]} />
            </VStack>
            <ParticlesBg type="cobweb" num={250} color="#5E81AC" bg={true} /> 
        </Container>
    );
};

export default Intro;