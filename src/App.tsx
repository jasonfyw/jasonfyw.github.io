import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Main from './pages/Main/Main'
import Project from './pages/Project/Project'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Routes>
            <Route index path='/' element={<Main />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:id' element={<Project />} />
        </Routes>

        <Footer />
    </ChakraProvider>
)
