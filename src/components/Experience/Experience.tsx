import { Container, Heading, VStack } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import React from 'react';
import { Element } from 'react-scroll';

const Experience = () => {
    return (
        <Element name='experience'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Experience</Heading>
                    </Fade>
                </VStack>
            </Container>
        </Element>
    );
};

export default Experience;