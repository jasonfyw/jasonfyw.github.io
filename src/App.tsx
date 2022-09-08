import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import theme from "./theme"
import Nav from "./components/Nav"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Box textAlign="center" fontSize="xl">
            <Grid minH="1000vh" p={3}>
                Hello there, please contact me at the following address
            </Grid>
        </Box>
    </ChakraProvider>
)
