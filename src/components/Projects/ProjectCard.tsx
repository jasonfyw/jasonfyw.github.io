import { FC, ReactElement } from 'react';
import {
    Box,
    useColorModeValue,
    Image,
    Stack,
    Heading,
    Text,
    HStack,
    Flex,
    Spacer,
    Link,
    Button
} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';

interface ProjectCardProps {
    name: string,
    type: string,
    id: string,
    tags: Array<ReactElement>,
    imageSrc: string,
    description: string,
    links?: Array<ReactElement>,
    headerLink: string
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
    return (
        <Fade bottom duration={500}>
            <Box 
                maxW={'325px'}
                w={'full'}
                bg={useColorModeValue('rgba(255, 255, 255, 0.5)', 'rgba(23, 25, 35, 0.6)')}
                opacity={0.9}
                boxShadow={'xl'}
                rounded={'xl'}
                p={6}
                overflow={'hidden'}
                backdropFilter={useColorModeValue('blur(1px)', 'blur(2.5px)')}
            >
                
                <Box
                    h={'175px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Link href={props.headerLink} isExternal>
                        <Image
                            src={props.imageSrc}
                            height={'175px'}
                            width={'100%'}
                            fit={'cover'}
                        />
                    </Link>
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
                    <Flex>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                        >
                            {props.name}
                        </Heading>
                        <Spacer />
                        <HStack>
                            {props.links}
                        </HStack>
                    </Flex>
                    <HStack>
                        {props.tags}
                    </HStack>
                    <Text color={'gray.500'}>
                        {props.description}
                    </Text>
                    <Box>
                        <Link
                            href={`#/projects/${props.id}`}
                            _hover={{
                                textDecor: 'none'
                            }}
                        >
                            <Button
                                variant={'outline'}
                                colorScheme={'cyan'}
                                aria-label={`Read more about ${props.name}`}
                                fontSize={'1rem'}
                                size={'sm'}
                                pb={1}
                                mt={2}
                            >
                                Read more
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </Fade>
    );
};

export default ProjectCard;