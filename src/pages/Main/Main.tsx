import React from 'react'
import { Flex } from '@chakra-ui/react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'

const Main = () => {
    return (
        <>
            <Hero />
            <Flex
                as='main'
                direction='column'
                gap='144px'
                maxW='1120px'
                mx='auto'
                p='128px 32px 0'
                sx={{ '@media (max-width: 600px)': { px: '16px' } }}
            >
                <About />
                <Experience />
                <Projects />
                <Contact />
            </Flex>
        </>
    )
}

export default Main
