import { FC } from 'react';
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue
} from '@chakra-ui/react'
import {
    SiFlask,
    SiHtml5,
    SiJava,
    SiPhp,
    SiPython,
    SiReact,
    SiTypescript,
    SiBootstrap,
    SiMysql,
    SiMongodb,
    SiVisualstudiocode,
    SiGit,
    SiLatex,
    SiDocker,
    SiScikitlearn,
    SiGo,
    SiNodedotjs,
    SiPostgresql
} from 'react-icons/si';
import { Element } from 'react-scroll';
import SkillSection from './SkillSection';
import SkillItem from './SkillItem';

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.75} mt={20}>
                <VStack spacing={8}>
                    <Heading as='h2'>Skills</Heading>
                    <Stack
                        direction={['column', 'row']}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.300', 'gray.600')} />
                        }
                        spacing={8}
                        align={'flex-start'}
                    >
                        <SkillSection title={'Languages'}>
                            <SkillItem icon={SiPython} name='Python' />
                            <SkillItem icon={SiTypescript} name='Typescript' />
                            <SkillItem icon={SiJava} name='Java' />
                            <SkillItem icon={SiPhp} name='PHP' />
                            <SkillItem icon={SiHtml5} name='HTML/CSS' />
                            <SkillItem icon={SiGo} name='Golang' />
                        </SkillSection>
                        <SkillSection title={'Frameworks'}>
                            <SkillItem icon={SiReact} name='ReactJS' />
                            <SkillItem icon={SiNodedotjs} name='NodeJS' />
                            <SkillItem icon={SiScikitlearn} name='Scikit-learn' />
                            <SkillItem icon={SiFlask} name='Flask' />
                            <SkillItem icon={SiBootstrap} name='Bootstrap' />
                        </SkillSection>
                        <SkillSection title={'Databases'}>
                            <SkillItem icon={SiMysql} name='MySQL' />
                            <SkillItem icon={SiPostgresql} name='PostgreSQL' />
                            <SkillItem icon={SiMongodb} name='MongoDB' />
                        </SkillSection>
                        <SkillSection title={'Other tools'}>
                            <SkillItem icon={SiGit} name='Git' />
                            <SkillItem icon={SiLatex} name='LaTeX' />
                            <SkillItem icon={SiDocker} name='Docker' />
                            <SkillItem icon={SiVisualstudiocode} name='VS Code' />
                        </SkillSection>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    );
};

export default Skills;