import React from 'react';
import {
    Text,
    Flex,
    Heading,
    Spacer,
    Stack,
    useColorModeValue,
    Avatar,
    Center,
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
            textAlign={{ base: 'center', md: 'left'}}
            bg={useColorModeValue('white', 'gray.900')}
            opacity={0.9}
            p={5}
            rounded={'xl'}
            boxShadow={'lg'}
        >
            <Flex direction={{ base: 'column', md: 'row'}} w={'full'} gap={{ base: 1, md: 4 }}>
                {
                    props.logoSrc && (
                        <Center mb={{ base: 2, md: 0 }}>
                            <Avatar src={props.logoSrc} />
                        </Center>
                    )
                }
                <Stack>
                    <Heading as='h3' size='md'>{ props.title }</Heading>
                    <Heading as='h4' size='sm' color={'blue.200'}>{ props.company }</Heading>
                </Stack>
                <Spacer />
                <Stack textAlign={{ base: 'center', md: 'right'}}>
                    <Heading as='h5' size='sm' pt={[2, 0]}>{ props.dates }</Heading>
                    <Heading as='h5' size='sm'>{ props.location }</Heading>
                </Stack>
            </Flex>
            <Text size='sm' color='gray.500'>{ props.description }</Text>
        </Stack>
    );
};

export default ExperienceCard;