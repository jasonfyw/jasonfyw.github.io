import { FC } from 'react'
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem,
    Button,
    useMediaQuery,
} from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import LinkIconButton from './LinkIconButton'
import { projectData } from '../../data/projectData'
import { Link } from 'react-router-dom'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll

const Projects: FC = () => {
    const [isMobile] = useMediaQuery('(min-width: 764px)')

    return (
        <Element name='projects'>
            <Container
                maxW={'10xl'}
                p={6.75}
                mt={20}
                mb={[10, 20]}
                px={[0, 10]}
            >
                <VStack spacing={0}>
                    <Fade>
                        <Heading as='h2'>Featured Projects</Heading>
                    </Fade>
                    <Wrap spacing={0} justify='center'>
                        {projectData.slice(0, isMobile ? 6 : 3).map(data => (
                            <WrapItem p={5}>
                                <ProjectCard
                                    name={data['name'] || ''}
                                    type={data['type'] || ''}
                                    id={data['id'] || ''}
                                    tags={data['tags'] || []}
                                    imageSrc={data['imageSrc'] || ''}
                                    description={data['description'] || ''}
                                    links={data['links']?.map(link => (
                                        <LinkIconButton
                                            href={link.link}
                                            icon={link.icon}
                                        />
                                    ))}
                                    headerLink={data['headerLink'] || ''}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>

                    <Link to={'/projects'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'lg'}
                            onClick={() => {
                                scroll.scrollToTop({ duration: 450 })
                            }}
                        >
                            View All
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Element>
    )
}

export default Projects
