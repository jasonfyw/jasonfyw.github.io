import React from 'react'
import {
    Text,
    Flex,
    Heading,
    Spacer,
    Stack,
    useColorModeValue,
    Avatar,
    Center,
    Box,
} from '@chakra-ui/react'
import Card from '../generics/Card'

interface ExperienceCardProps {
    title: string
    company: string
    location: string
    dates: string
    description: string
    logoSrc?: string | null
}

const ExperienceCard = (props: ExperienceCardProps) => {
    const avatarBorderColor = useColorModeValue('gray.700', 'white')

    return (
        <Card>
            <Stack
                direction={'column'}
                spacing={4}
                align={'flex-start'}
                textAlign={{ base: 'center', md: 'left' }}
            >
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    w={'full'}
                    gap={{ base: 1, md: 4 }}
                >
                    {props.logoSrc && (
                        <Center mb={{ base: 2, md: 0 }}>
                            <Box
                                borderRadius={'full'}
                                border={'1px'}
                                borderColor={avatarBorderColor}
                            >
                                <Avatar src={props.logoSrc} />
                            </Box>
                        </Center>
                    )}
                    <Stack>
                        <Heading as='h3' size='md'>
                            {props.title}
                        </Heading>
                        <Heading as='h4' size='sm' color={'blue.200'}>
                            {props.company}
                        </Heading>
                    </Stack>
                    <Spacer />
                    <Stack textAlign={{ base: 'center', md: 'right' }}>
                        <Heading as='h5' size={'xs'} pt={[2, 0]}>
                            {props.dates}
                        </Heading>
                        <Heading as='h5' size={'xs'}>
                            {props.location}
                        </Heading>
                    </Stack>
                </Flex>
                <Text size='sm' color='gray.500'>
                    {props.description}
                </Text>
            </Stack>
        </Card>
    )
}

export default ExperienceCard
