import { useParams } from 'react-router-dom'
import { projectData as allProjectData } from '../../data/projectData'
import { ProjectT } from '../../data/types'
import { useEffect, useState } from 'react'
import { Center, Text } from '@chakra-ui/react'
import ProjectContent from './ProjectContent'

const Project = () => {
    const { id } = useParams()
    const [projectData, setProjectData] = useState<ProjectT>({})

    useEffect(() => {
        allProjectData.forEach(project => {
            if (project['id'] === id) {
                setProjectData(project)
            }
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {projectData &&
            Object.keys(projectData).length === 0 &&
            Object.getPrototypeOf(projectData) === Object.prototype ? (
                <Center>
                    <Text fontSize={60} mt={40}>
                        This project does not exist.
                    </Text>
                </Center>
            ) : (
                <ProjectContent projectData={projectData} />
            )}
        </>
    )
}

export default Project
