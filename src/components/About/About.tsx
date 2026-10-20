import { FC, ReactNode } from 'react'
import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'
import headshot from '../../media/headshot.jpg'

const B: FC<{ children: ReactNode }> = ({ children }) => (
    <Text as='b' fontWeight={500} color='brand.heading'>
        {children}
    </Text>
)

const rows: { label: string; content: ReactNode }[] = [
    {
        label: 'hello',
        content: (
            <>
                Hi, I'm Jason! I'm a software engineer and recent graduate of
                the <B>University of Toronto</B> where I studied{' '}
                <B>Computer Science</B> and <B>Cognitive Science</B>.
            </>
        ),
    },
    {
        label: 'now',
        content: (
            <>
                I am currently a Software Engineer at <B>Amazon</B> working in
                Ads. I have also had previous software development experience at{' '}
                <B>theScore</B>, <B>Deep Genomics</B>, and the{' '}
                <B>University of Toronto</B>.
            </>
        ),
    },
    {
        label: 'focus',
        content: (
            <>
                I'm experienced in working on large scale, data-intensive
                systems. I am passionate about building products that help
                people live better lives.
            </>
        ),
    },
    {
        label: 'also',
        content: (
            <>
                In addition to software engineering, I am also interested in the
                confluence of artificial intelligence and cognitive science, as
                well as photography! Check out my{' '}
                <Link
                    href='https://photo.jasonfyw.com'
                    isExternal
                    color='brand.heading'
                    fontWeight={400}
                    borderBottom='1px solid'
                    borderColor='brand.borderHover'
                    pb='2px'
                    _hover={{
                        textDecoration: 'none',
                        borderColor: 'brand.text',
                    }}
                >
                    photography portfolio
                </Link>{' '}
                to learn more about my creative work.
            </>
        ),
    },
]

const About: FC = () => (
    <Flex
        as='section'
        id='about'
        direction='column'
        gap='40px'
        scrollMarginTop='32px'
    >
        <SectionHeading label='01 / about' title='About me' />
        <Grid
            templateColumns='200px minmax(0, 1fr)'
            gap='56px'
            alignItems='start'
            sx={{
                '@media (max-width: 960px)': {
                    gridTemplateColumns: 'minmax(0, 1fr)',
                },
            }}
        >
            <Image
                src={headshot}
                alt='Portrait of Jason Wang'
                w='200px'
                h='200px'
                objectFit='cover'
                borderRadius='8px'
                border='1px solid'
                borderColor='brand.borderStrong'
                filter='grayscale(1) contrast(1.05)'
            />
            <Box borderBottom='1px solid' borderColor='brand.divider'>
                {rows.map(row => (
                    <Grid
                        key={row.label}
                        templateColumns='72px minmax(0, 1fr)'
                        gap='16px'
                        py='18px'
                        borderTop='1px solid'
                        borderColor='brand.divider'
                    >
                        <Text
                            as='span'
                            fontFamily='mono'
                            fontSize='12px'
                            color='brand.faint'
                            pt='4px'
                        >
                            {row.label}
                        </Text>
                        <Text m={0} fontSize='17px' color='brand.body'>
                            {row.content}
                        </Text>
                    </Grid>
                ))}
            </Box>
        </Grid>
    </Flex>
)

export default About
