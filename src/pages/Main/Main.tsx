import React from 'react'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import Nav from '../../components/Nav'
import Experience from '../../components/Experience'
import Background from '../../components/Background'

const Main = () => {
    return (
        <>
            <Nav />
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            {/* Background component */}
            <Background />
        </>
    )
}

export default Main
