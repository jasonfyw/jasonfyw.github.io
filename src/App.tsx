import * as React from 'react'
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'
import theme from './theme'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Main from './pages/Main/Main'
import Project from './pages/Project/Project'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

// The design is dark-only, so ignore any light mode saved by an older version
const darkModeManager: ChakraProviderProps['colorModeManager'] = {
    type: 'localStorage',
    get: () => 'dark',
    set: () => {},
}

export const App = () => (
    <ChakraProvider theme={theme} colorModeManager={darkModeManager}>
        <Routes>
            <Route index path='/' element={<Main />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:id' element={<Project />} />
        </Routes>

        <Footer />
    </ChakraProvider>
)
