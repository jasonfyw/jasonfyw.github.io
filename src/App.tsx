import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router"
import Main from "./pages/Main/Main"
import Projects from "./components/Projects/Projects"
import Project from "./pages/Project/Project"


export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Routes>
            <Route index path='/' element={<Main/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/projects/:id' element={<Project />} />
        </Routes>

        <Footer />
    </ChakraProvider>
)
