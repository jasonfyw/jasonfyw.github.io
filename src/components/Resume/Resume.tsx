import { FC } from 'react';
import {
    Container,
    VStack,
    Heading
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Resume: FC = () => {
    return (
        <Element name='resume'>
            <Container maxW={'5xl'} p={6.75} mt={15}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Resume</Heading>
                    </Fade>
                    <Container>
                        <Fade bottom>
                            <iframe src="https://drive.google.com/file/d/1iRVaUo7yZaYJ6VWEgnMAQ5Yoka_w_g3a/preview" width="640" height="480" allow="autoplay" title="Jason Wang Resume"></iframe>
                        </Fade>
                    </Container>
                </VStack>
            </Container>
        </Element>
    );
};

export default Resume;