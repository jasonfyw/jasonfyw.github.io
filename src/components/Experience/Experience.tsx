import { FC } from 'react'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'
import { experienceData } from '../../data/experienceData'

const Experience: FC = () => (
    <Flex
        as='section'
        id='experience'
        direction='column'
        gap='40px'
        scrollMarginTop='32px'
    >
        <SectionHeading label='02 / experience' title='Experience' />
        <Box borderBottom='1px solid' borderColor='brand.divider'>
            {experienceData.map(experience => (
                <Grid
                    key={`${experience.company}-${experience.dates}`}
                    templateColumns='220px minmax(0, 1fr)'
                    gap='32px'
                    py='28px'
                    borderTop='1px solid'
                    borderColor='brand.divider'
                    sx={{
                        '@media (max-width: 960px)': {
                            gridTemplateColumns: 'minmax(0, 1fr)',
                            gap: '8px',
                        },
                    }}
                >
                    <Flex
                        direction='column'
                        gap='2px'
                        fontFamily='mono'
                        fontSize='12.5px'
                        color='brand.subtle'
                    >
                        <span>{experience.dates}</span>
                        <Text as='span' color='brand.faint'>
                            {experience.location}
                        </Text>
                    </Flex>
                    <Flex direction='column' gap='8px'>
                        <Heading
                            as='h3'
                            m={0}
                            fontSize='20px'
                            fontWeight={500}
                            lineHeight={1.6}
                            color='brand.heading'
                        >
                            {experience.title}{' '}
                            <Text
                                as='span'
                                color='brand.accent'
                                fontWeight={400}
                            >
                                @ {experience.company}
                            </Text>
                        </Heading>
                        <Text m={0} color='brand.muted' maxW='64ch'>
                            {experience.description}
                        </Text>
                    </Flex>
                </Grid>
            ))}
        </Box>
    </Flex>
)

export default Experience
