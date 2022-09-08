import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Nav from "./components/Nav"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                
            </Grid>
        </Box>
    </ChakraProvider>
)
