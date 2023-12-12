import React from 'react';
import {
    Text,
    Flex,
    Heading,
    Spacer,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

interface ExperienceCardProps {
    title: string,
    company: string,
    location: string,
    dates: string,
    description: string,
    logoSrc?: string | null,
}

const ExperienceCard = (props: ExperienceCardProps) => {
    return (
        <Stack
            direction={'column'}
            spacing={4}
            align={'flex-start'}
            textAlign={['center', 'left']}
            bg={useColorModeValue('white', 'gray.900')}
            opacity={0.9}
            p={5}
            rounded={'xl'}
            boxShadow={'lg'}
        >
            <Flex direction={['column', 'row']} w={'full'}>
                <Stack>
                    <Heading as='h3' size='md'>{ props.title }</Heading>
                    <Heading as='h4' size='sm'>{ props.company }</Heading>
                </Stack>
                <Spacer />
                <Stack textAlign={['center', 'right']}>
                    <Heading as='i' size='sm' pt={[2, 0]} fontWeight={400}>{ props.dates }</Heading>
                    <Heading as='i' size='sm' fontWeight={400}>{ props.location }</Heading>
                </Stack>
            </Flex>
            <Text size='sm'>{ props.description }</Text>
        </Stack>
    );
};

export default ExperienceCard;