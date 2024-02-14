import { useEffect, useState } from 'react'
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
    LinkBox,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

import { ProjectT } from '../../data/types'
import { FiGithub } from 'react-icons/fi'
import MarkdownRender from './MarkdownRender'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Blockquote from './Blockquote'

interface ProjectContentProps {
    projectData: ProjectT
}

const ProjectContent = (props: ProjectContentProps) => {
    const projectData = props.projectData
    const [markdown, setMarkdown] = useState<string>('')

    useEffect(() => {
        import(`../../data/projectWriteups/${projectData['id']}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err))
            })
            .catch(err => {})
    })

    return (
        <>
            <Box
                h={'275px'}
                w={'100vw'}
                bg={'gray.100'}
                mt={-6}
                mb={6}
                pos={'relative'}
            >
                <Link href={projectData['headerLink']} isExternal>
                    <Image
                        src={projectData['imageSrc']}
                        height={'275px'}
                        width={'100%'}
                        fit={'cover'}
                        backgroundPosition={'30px top'}
                        style={{ filter: 'blur(2px)' }}
                    />
                </Link>
            </Box>
            <Container pt={0} minH={'100vh'}>
                <Stack>
                    <Breadcrumb
                        spacing='8px'
                        mb={8}
                        separator={<ChevronRightIcon color='gray.500' />}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#/projects'>
                                Projects
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink
                                href={`#/projects/${projectData['id']}`}
                            >
                                {projectData['name']}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

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
                    <Text pb={4}>{projectData['tagline']}</Text>
                    <HStack>
                        {projectData['links']?.map((link, i) => (
                            <LinkBox key={i}>
                                <LinkOverlay href={link.link} isExternal>
                                    <Button
                                        rightIcon={link.icon}
                                        colorScheme='teal'
                                        variant='outline'
                                    >
                                        {link.icon.type === FiGithub
                                            ? 'View code'
                                            : 'Visit'}
                                    </Button>
                                </LinkOverlay>
                            </LinkBox>
                        ))}
                    </HStack>

                    <Box mt={20}>
                        <Blockquote mt={10}>
                            {projectData['description']}
                        </Blockquote>
                        <MarkdownRender markdown={markdown} />
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default ProjectContent
