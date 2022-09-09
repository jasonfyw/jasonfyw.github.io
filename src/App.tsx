import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"
import Intro from "./components/Intro"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Intro />
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                Hello there, please contact me at the following address
            </Grid>
        </Box>
    </ChakraProvider>
)
