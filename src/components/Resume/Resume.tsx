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
                            <iframe src="https://drive.google.com/file/d/1EkKW5G5TAfNL44ukYFgf_S2MKBtn6yGO/preview" width="100%" height="480" allow="autoplay" title="Jason Wang Resume"></iframe>
                        </Fade>
                    </Container>
                </VStack>
            </Container>
        </Element>
    );
};

export default Resume;