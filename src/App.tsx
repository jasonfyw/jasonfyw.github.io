import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"
import Intro from "./components/Intro"
import About from "./components/About"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Intro />
        <About />
    </ChakraProvider>
)
