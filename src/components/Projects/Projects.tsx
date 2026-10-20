import { FC, useState } from 'react'
import { Flex, Grid, chakra } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'
import { scrollToId } from '../global/ScrollLink'
import ProjectCard from './ProjectCard'
import { projectData } from '../../data/projectData'

const PREVIEW_COUNT = 3

interface ProjectGridProps {
    limit?: number
}

export const ProjectGrid: FC<ProjectGridProps> = ({ limit }) => (
    <Grid
        templateColumns='repeat(auto-fill, minmax(min(100%, 320px), 1fr))'
        gap='20px'
    >
        {projectData.slice(0, limit).map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </Grid>
)

const Projects: FC = () => {
    const [showAll, setShowAll] = useState(false)
    const hasMore = projectData.length > PREVIEW_COUNT

    const toggle = () => {
        // Collapsing removes the cards being read, so return to the section
        if (showAll) scrollToId('projects')
        setShowAll(!showAll)
    }

    return (
        <Flex
            as='section'
            id='projects'
            direction='column'
            gap='40px'
            scrollMarginTop='32px'
        >
            <SectionHeading label='03 / projects' title='Projects' />
            <ProjectGrid limit={showAll ? undefined : PREVIEW_COUNT} />
            {hasMore && (
                <chakra.button
                    type='button'
                    onClick={toggle}
                    aria-expanded={showAll}
                    alignSelf='center'
                    h='44px'
                    px='18px'
                    fontFamily='mono'
                    fontSize='13px'
                    fontWeight={400}
                    color='brand.muted'
                    border='1px solid'
                    borderColor='brand.borderStrong'
                    borderRadius='6px'
                    _hover={{
                        color: '#FFFFFF',
                        borderColor: 'brand.iconBorderHover',
                        bg: 'brand.iconBgHover',
                    }}
                >
                    {showAll ? 'view less ↑' : 'view more ↓'}
                </chakra.button>
            )}
        </Flex>
    )
}

export default Projects
