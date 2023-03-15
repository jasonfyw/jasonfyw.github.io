import { FC } from 'react';
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem,
    Button
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import LinkIconButton from './LinkIconButton';
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';


const Projects: FC = () => {
    return (
        <Element name='projects'>
            <Container maxW={'10xl'} p={6.75} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Featured Projects</Heading>
                    </Fade>
                    <Wrap spacing='20px' justify='center'>
                        {
                            projectData.slice(0, 6).map((data) => (
                                <WrapItem p={5}>
                                    <ProjectCard
                                        name={data['name'] || ''}
                                        type={data['type'] || ''}
                                        id={data['id'] || ''}
                                        tags={data['tags'] || []}
                                        imageSrc={data['imageSrc'] || ''}
                                        description={data['description'] || ''}
                                        links={data['links']?.map((link) => (
                                            <LinkIconButton
                                                href={link.link}
                                                icon={link.icon}
                                            />
                                        ))}
                                        headerLink={data['headerLink'] || ''}
                                    />
                                </WrapItem>
                            ))
                        }

                    </Wrap>
                    
                    <Link to={'/projects'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'lg'}
                            mb={10}
                        >
                            View All
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Element>
    );
};

export default Projects;