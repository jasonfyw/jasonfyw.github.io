import { FC } from 'react';
import {
    Box,
    useColorModeValue,
    Image,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';

const ProjectCard: FC = () => {
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
                    src={
                        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
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
                    letterSpacing={1.1}>
                    Blog
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    Boost your conversion rate
                </Heading>
                <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum.
                </Text>
            </Stack>
        </Box>
    );
};

export default ProjectCard;