import { FC, ReactNode } from 'react';
import {
    Box,
    useColorModeValue,
    Image,
    Stack,
    Heading,
    Text,
    HStack
} from '@chakra-ui/react';

interface ProjectCardProps {
    name: string,
    type: string,
    tags: Array<ReactNode>,
    imageSrc: string,
    description: string
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
    return (
        <Box 
            maxW={'325px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
        >
            
            <Box
                h={'175px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                    src={props.imageSrc}
                    height={'175px'}
                    width={'100%'}
                    fit={'cover'}
                />
            </Box>
            <Stack>
                <Text
                    color={'blue.200'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}
                >
                    {props.type}
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                >
                    {props.name}
                </Heading>
                <HStack>
                    {props.tags}
                </HStack>
                <Text color={'gray.500'}>
                    {props.description}
                </Text>
            </Stack>
        </Box>
    );
};

export default ProjectCard;