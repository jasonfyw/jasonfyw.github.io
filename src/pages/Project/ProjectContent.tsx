import { useEffect, useState } from 'react'
import { Box, Flex, Heading, Link, Text, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

import { ProjectT } from '../../data/types'
import MarkdownRender from './MarkdownRender'
import Blockquote from './Blockquote'

interface ProjectContentProps {
    projectData: ProjectT
}

const crumbStyles = {
    color: 'brand.muted',
    _hover: { textDecoration: 'none', color: '#FFFFFF' },
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
                h='275px'
                w='100%'
                bg='brand.surface'
                overflow='hidden'
                borderBottom='1px solid'
                borderColor='brand.divider'
            >
                <Link href={projectData['headerLink']} isExternal>
                    <Image
                        src={projectData['imageSrc']}
                        alt=''
                        h='275px'
                        w='100%'
                        objectFit='cover'
                        filter='blur(2px) grayscale(0.4) brightness(0.7)'
                    />
                </Link>
            </Box>
            <Flex
                as='main'
                direction='column'
                gap='16px'
                maxW='768px'
                mx='auto'
                p='40px 32px 0'
                minH='100vh'
                sx={{ '@media (max-width: 600px)': { px: '16px' } }}
            >
                <Text
                    as='nav'
                    aria-label='Breadcrumb'
                    fontFamily='mono'
                    fontSize='13px'
                    color='brand.faint'
                    mb='24px'
                >
                    <Link as={RouterLink} to='/' {...crumbStyles}>
                        ~
                    </Link>{' '}
                    /{' '}
                    <Link as={RouterLink} to='/projects' {...crumbStyles}>
                        projects
                    </Link>{' '}
                    /{' '}
                    <Text as='span' color='brand.accent'>
                        {projectData['id']}
                    </Text>
                </Text>

                <Text
                    fontFamily='mono'
                    fontSize='11.5px'
                    color='brand.subtle'
                    textTransform='uppercase'
                    letterSpacing='0.06em'
                >
                    {projectData['type']}
                </Text>
                <Heading
                    as='h1'
                    m={0}
                    fontSize='40px'
                    fontWeight={500}
                    letterSpacing='-0.02em'
                    color='brand.heading'
                >
                    {projectData['name']}
                </Heading>
                <Text fontSize='17px' color='brand.body'>
                    {projectData['tagline']}
                </Text>
                <Flex gap='10px' wrap='wrap'>
                    {projectData['links']?.map(link => (
                        <Link
                            key={link.link}
                            href={link.link}
                            isExternal
                            display='flex'
                            alignItems='center'
                            gap='8px'
                            h='44px'
                            px='14px'
                            fontFamily='mono'
                            fontSize='13px'
                            color='brand.body'
                            border='1px solid'
                            borderColor='brand.borderStrong'
                            borderRadius='6px'
                            _hover={{
                                textDecoration: 'none',
                                borderColor: 'brand.iconBorderHover',
                                bg: 'brand.iconBgHover',
                            }}
                        >
                            {link.kind === 'github' ? 'view code' : 'visit'}
                            {link.kind === 'github' ? (
                                <FiGithub size={16} aria-hidden='true' />
                            ) : (
                                <FiArrowUpRight size={16} aria-hidden='true' />
                            )}
                        </Link>
                    ))}
                </Flex>

                <Box mt='48px' color='brand.body'>
                    <Blockquote mb='24px'>
                        {projectData['description']}
                    </Blockquote>
                    <MarkdownRender markdown={markdown} />
                </Box>
            </Flex>
        </>
    )
}

export default ProjectContent
