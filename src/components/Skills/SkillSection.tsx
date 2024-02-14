import { FC, ReactNode } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

interface SkillSectionProps {
    children?: ReactNode
    title: string
}

const SkillSection: FC<SkillSectionProps> = props => {
    return (
        <Flex flexDirection={'column'} top={0}>
            <Heading as='h4' fontSize={'1.4rem'} mb={2}>
                {props.title}
            </Heading>
            {props.children}
        </Flex>
    )
}

export default SkillSection
