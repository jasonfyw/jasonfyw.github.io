import { FC } from 'react'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface SkillItemProps {
    icon: IconType
    name: string
}

const SkillItem: FC<SkillItemProps> = props => {
    return (
        <HStack spacing={3} mt={1}>
            <Icon as={props.icon} />
            <Text fontWeight={200} letterSpacing={1}>
                {props.name}
            </Text>
        </HStack>
    )
}

export default SkillItem
