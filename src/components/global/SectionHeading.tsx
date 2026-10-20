import { FC } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

interface SectionHeadingProps {
    label: string
    title: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ label, title }) => (
    <Flex direction='column' gap='8px'>
        <Text fontFamily='mono' fontSize='13px' color='brand.accent'>
            {label}
        </Text>
        <Heading
            as='h2'
            m={0}
            fontSize='40px'
            fontWeight={500}
            letterSpacing='-0.02em'
            lineHeight={1.2}
            color='brand.heading'
        >
            {title}
        </Heading>
    </Flex>
)

export default SectionHeading
