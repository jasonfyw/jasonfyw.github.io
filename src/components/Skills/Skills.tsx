import { FC } from 'react';
import {
    Container,
    VStack,
    HStack,
    Heading,
    Text
} from '@chakra-ui/react'
import SkillSection from './SkillSection';

const Skills: FC = () => {
    return (
        <Container maxW={'5xl'} p={6.75} mt={20}>
            <VStack spacing={8}>
                <Heading as='h2'>Skills</Heading>
                <HStack>
                    
                </HStack>
            </VStack>
        </Container>
    );
};

export default Skills;