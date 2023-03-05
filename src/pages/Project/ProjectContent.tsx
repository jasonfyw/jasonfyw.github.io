import {
    Box,
    Container,
    Heading,
    Link,
    Stack,
    Text,
    Image,
    useColorModeValue,
    HStack,
    Button,
    LinkOverlay,
    LinkBox
} from "@chakra-ui/react";

import { ProjectT } from '../../data/projectData'
import { FiGithub } from "react-icons/fi";


interface ProjectContentProps {
    projectData: ProjectT
}

const ProjectContent = (props: ProjectContentProps) => {
    const projectData = props.projectData

    return (
        <>
            <Box
                h={'350px'}
                w={'100vw'}
                bg={'gray.100'}
                mt={-6}
                mb={6}
                pos={'relative'}>
                <Link href={projectData['headerLink']} isExternal>
                    <Image
                        src={projectData['imageSrc']}
                        height={'350px'}
                        width={'100%'}
                        fit={'cover'}
                        backgroundPosition={'30px top'}
                        style={{filter: 'blur(2px)'}}
                        zIndex={1000}
                    />
                </Link>
            </Box>
            <Container pt={4} minH={'100vh'}>
                <Stack>
                    <Text
                        color={'blue.200'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}
                    >
                        {projectData['type']}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={32}
                        fontFamily={'body'}
                        fontWeight={800}
                    >
                        {projectData['name']}
                    </Heading>
                    <Text pb={4}>
                        {projectData['tagline']}
                    </Text>
                    <HStack>
                        {projectData['links']?.map(link => (
                            <LinkBox>
                                <LinkOverlay href={link.link} isExternal>
                                    <Button rightIcon={link.icon} colorScheme='teal' variant='outline'>
                                        {
                                            link.icon.type === FiGithub ? 'View code' : 'Visit'
                                        }
                                    </Button>
                                </LinkOverlay>
                            </LinkBox>
                        ))}
                    </HStack>
                </Stack>
            </Container>
        </>
    );
}

export default ProjectContent;