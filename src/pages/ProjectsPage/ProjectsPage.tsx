import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Wrap, WrapItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/Projects/ProjectCard';
import LinkIconButton from '../../components/Projects/LinkIconButton';


const ProjectsPage = () => {
    return (
        <>
            <Center pb={0} mt={10}>
                <Breadcrumb
                    spacing='8px'
                    mb={8}
                    fontSize={30}
                    separator={<ChevronRightIcon color='gray.500' />}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#/projects'>Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>
            <Wrap spacing='20px' justify='center' pb={0}>
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
        </>
    )
}

export default ProjectsPage