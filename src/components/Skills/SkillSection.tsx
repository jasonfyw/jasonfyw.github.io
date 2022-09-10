import { FC, ReactNode } from 'react';
import {
    Heading,
    VStack
} from '@chakra-ui/react';

interface SkillSectionProps {
    children?: ReactNode,
    title: string
}

const SkillSection: FC<SkillSectionProps> = (props) => {
    return (
        <VStack>
            <Heading as='h4'>{ props.title }</Heading>
            { props.children }
        </VStack>
    );
};

export default SkillSection;