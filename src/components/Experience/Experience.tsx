import React from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import ExperienceCard from './ExperienceCard'
import { experienceData } from '../../data/experienceData'

const Experience = () => {
    return (
        <Element name='experience'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8} px={[4, 24]}>
                    <Fade>
                        <Heading as='h2'>Experience</Heading>
                    </Fade>
                    {experienceData.map((experience, i) => {
                        return (
                            <Fade bottom cascade duration={500} key={i}>
                                <ExperienceCard
                                    title={experience.title}
                                    company={experience.company}
                                    location={experience.location}
                                    dates={experience.dates}
                                    description={experience.description}
                                    logoSrc={experience.logoSrc}
                                />
                            </Fade>
                        )
                    })}
                </VStack>
            </Container>
        </Element>
    )
}

export default Experience
