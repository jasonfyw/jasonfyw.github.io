

import { extendTheme } from '@chakra-ui/react'

const config = extendTheme({
    initialColorMode: 'system',
    useSystemColorMode: false,
})

const customTheme = extendTheme({
    semanticTokens: {
        colors: {
            bg: {
                default: '#ECEFF4',
                _dark: '#1E2428'
            }
        }
    },
    styles: {
        global: {
            'html, body': {
                fontFamily: 'mundial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal'
            }
        }
    }
})

const theme = extendTheme(config, customTheme)

export default theme