import { FC, useState } from 'react'
import { Button, Flex, Grid } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'
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
            {hasMore && !showAll && (
                <Button
                    onClick={() => setShowAll(true)}
                    alignSelf='center'
                    h='44px'
                    px='18px'
                    variant='unstyled'
                    display='flex'
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
                    view more ↓
                </Button>
            )}
        </Flex>
    )
}

export default Projects
