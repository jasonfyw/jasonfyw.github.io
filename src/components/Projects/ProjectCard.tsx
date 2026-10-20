import { FC } from 'react'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { ProjectT } from '../../data/types'

interface ProjectCardProps {
    project: ProjectT
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <Flex
        as='article'
        direction='column'
        gap='12px'
        p='24px'
        bg='brand.surface'
        border='1px solid'
        borderColor='brand.border'
        borderRadius='8px'
        transition='border-color .2s ease, transform .2s ease'
        _hover={{
            borderColor: 'brand.borderHover',
            transform: 'translateY(-2px)',
        }}
        sx={{
            '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
        }}
    >
        <Flex justify='space-between' align='center' gap='8px'>
            <Text
                as='span'
                fontFamily='mono'
                fontSize='11.5px'
                color='brand.subtle'
                textTransform='uppercase'
                letterSpacing='0.06em'
            >
                {project.type}
            </Text>
            <Flex m='-12px -12px -12px 0'>
                {project.links?.map(link => (
                    <Link
                        key={link.link}
                        href={link.link}
                        isExternal
                        aria-label={
                            link.kind === 'github'
                                ? `${project.name} on GitHub`
                                : `Open ${project.name}`
                        }
                        w='44px'
                        h='44px'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        color='brand.muted'
                    >
                        {link.kind === 'github' ? (
                            <FiGithub size={17} />
                        ) : (
                            <FiArrowUpRight size={17} />
                        )}
                    </Link>
                ))}
            </Flex>
        </Flex>
        <Heading
            as='h3'
            m={0}
            fontSize='21px'
            fontWeight={500}
            lineHeight={1.6}
            color='brand.heading'
        >
            <Link
                as={RouterLink}
                to={`/projects/${project.id}`}
                color='brand.heading'
                _hover={{ textDecoration: 'none', color: 'brand.accent' }}
            >
                {project.name}
            </Link>
        </Heading>
        <Text m={0} color='brand.body'>
            {project.tagline}
        </Text>
        <Text m={0} fontSize='14.5px' color='brand.subtle' flexGrow={1}>
            {project.description}
        </Text>
        <Flex
            wrap='wrap'
            gap='6px'
            fontFamily='mono'
            fontSize='11.5px'
            color='brand.muted'
        >
            {project.tags?.map(tag => (
                <Text
                    as='span'
                    key={tag}
                    border='1px solid'
                    borderColor='brand.borderStrong'
                    borderRadius='4px'
                    px='8px'
                    py='2px'
                >
                    {tag}
                </Text>
            ))}
        </Flex>
    </Flex>
)

export default ProjectCard
