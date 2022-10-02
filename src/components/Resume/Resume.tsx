import { FC } from 'react';
import {
    Container,
    VStack,
    Heading
} from '@chakra-ui/react';
import { Element } from 'react-scroll'

const Resume: FC = () => {
    return (
        <Element name='resume'>
            <Container maxW={'5xl'} p={6.75} mt={15}>
                <VStack spacing={8}>
                    <Heading as='h2'>Resume</Heading>
                    <Container>
                        <iframe src="https://drive.google.com/file/d/1GHEBlT8LP4wuVbK-lxoaXLCP2cNQ3f3R/preview" width="100%" height="480" allow="autoplay" title="Resume"></iframe>
                    </Container>
                </VStack>
            </Container>
        </Element>
    );
};

export default Resume;