import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router"
import Main from "./pages/Main/Main"


export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Routes>
            <Route index path='/' element={<Main/>} />
        </Routes>

        <Footer />
    </ChakraProvider>
)
