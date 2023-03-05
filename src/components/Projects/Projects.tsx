import { FC } from 'react';
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import LinkIconButton from './LinkIconButton';
import { projectData } from '../../data/projectData';


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
                                        name={data['name'] || ''}
                                        type={data['type'] || ''}
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
                
                </VStack>
            </Container>
        </Element>
    );
};

export default Projects;