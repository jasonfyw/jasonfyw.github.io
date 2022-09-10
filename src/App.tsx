import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"
import Intro from "./components/Intro"
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Intro />
        <About />
        <Projects />

        <Footer />
    </ChakraProvider>
)
