import { Flex } from '@chakra-ui/react'
import SectionHeading from '../../components/global/SectionHeading'
import { ProjectGrid } from '../../components/Projects/Projects'
import BackButton from './BackButton'

const ProjectsPage = () => {
    return (
        <>
            <BackButton />
            <Flex
                as='main'
                direction='column'
                gap='40px'
                maxW='1120px'
                mx='auto'
                p='128px 32px 0'
                sx={{ '@media (max-width: 600px)': { px: '16px' } }}
            >
                <SectionHeading label='~/projects' title='All projects' />
                <ProjectGrid />
            </Flex>
        </>
    )
}

export default ProjectsPage
