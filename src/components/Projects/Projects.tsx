import { FC } from 'react';
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import {
    JavaBadge,
    MongoBadge,
    MySQLBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge
} from './TechBadges';
import LinkIconButton from './LinkIconButton';
import { FiGithub, FiLink } from 'react-icons/fi';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const projectData = [
    {
        name: 'Twitter Geo-Sentiment',
        type: 'Web app',
        tags: [<PythonBadge/>, <ReactBadge/>, <MongoBadge/>],
        imageSrc: '/twitter-geo-sentiment.png',
        description: 'A web tool allowing queries analysing and visualising regional sentiment towards given topics on Twitter during a specific time frame. A custom-trained Naive Bayes model is used to perform sentiment analysis on aggregated data,.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/twitter-geo-sentiment" icon={<FiGithub/>}/>
        ]
    },
    {
        name: 'Orbital Simulation',
        type: 'Physics simulation',
        tags: [<PythonBadge/>],
        imageSrc: '/orbital-sim.png',
        description: 'An implementation of Newtonian physics in PyGame using positional data from the JPL Horizons database to simulate and record data on the past and future movements of celestial bodies in our solar system and beyond.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/orbital-sim" icon={<FiGithub/>}/>
        ]
    },
    {
        name: 'Fourier Series Animation',
        type: 'Web app',
        tags: [<ReactBadge/>],
        imageSrc: '/fourier-series.png',
        description: 'An interactive React web app that demonstrates how an arbitrary user-inputted line drawing can be approximated using the Fourier series. Animations are rendered by the P5 library using efficiently implemented computations.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/fourier-series" icon={<FiGithub/>}/>,
            <LinkIconButton href="https://jasonfyw.com/fourier-series/" icon={<FiLink/>}/>
        ]
    },
    {
        name: 'PLISMUN',
        type: 'Website',
        tags: [<PHPBadge/>, <MySQLBadge/>],
        imageSrc: '/plismun.png',
        description: 'A platform for my high school\'s annual international MUN conference, built from the ground up providing a delegate application system, admin tools, analytics, and resource hub. It managed hundreds of users from dozens of countries.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/twitter-geo-sentiment" icon={<FiGithub/>}/>,
            <LinkIconButton href="https://plismun.com" icon={<FiLink />}/>
        ]
    },
    {
        name: 'CSC207 Blog',
        type: 'Web app',
        tags: [<JavaBadge/>],
        imageSrc: '/blogging-app.png',
        description: 'Our group project for CSC207 - a blogging website where users can post text content and follow other accounts. Designed and built according to CLEAN architecture and SOLID principles.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/csc207-blogging-app" icon={<FiGithub/>}/>
        ]
    }
]

const Projects: FC = () => {
    return (
        <Element name='projects'>
        <Container maxW={'10xl'} p={6.75} mt={20}>
            <VStack spacing={8}>
                <Fade>
                    <Heading as='h2'>Projects</Heading>
                </Fade>
                <Wrap spacing='20px' justify='center' pb={10}>
                    {
                        projectData.map((data) => (
                            <WrapItem p={5}>
                                <ProjectCard
                                    name={data.name}
                                    type={data.type}
                                    tags={data.tags}
                                    imageSrc={data.imageSrc}
                                    description={data.description}
                                    links={data.links}
                                />
                            </WrapItem>
                        ))
                    }

                </Wrap>
               
            </VStack>
        </Container>
        </Element>
    );
};

export default Projects;