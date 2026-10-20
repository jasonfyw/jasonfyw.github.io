import { FC } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'
import ProjectCard from './ProjectCard'
import { projectData } from '../../data/projectData'

export const ProjectGrid: FC = () => (
    <Grid
        templateColumns='repeat(auto-fill, minmax(min(100%, 320px), 1fr))'
        gap='20px'
    >
        {projectData.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </Grid>
)

const Projects: FC = () => (
    <Flex
        as='section'
        id='projects'
        direction='column'
        gap='40px'
        scrollMarginTop='32px'
    >
        <SectionHeading label='03 / projects' title='Projects' />
        <ProjectGrid />
    </Flex>
)

export default Projects
