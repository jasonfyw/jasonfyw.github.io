import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Geist', ui-sans-serif, system-ui, sans-serif`,
        body: `'Geist', ui-sans-serif, system-ui, sans-serif`,
        mono: `'Geist Mono', ui-monospace, monospace`,
    },
    colors: {
        brand: {
            bg: '#0E1113',
            surface: '#111417',
            hover: '#171B1F',
            divider: '#1C2126',
            border: '#1F252A',
            borderStrong: '#262D33',
            borderHover: '#3A444D',
            iconBorderHover: '#4A5560',
            iconBgHover: '#14181B',
            ascii: '#2E3840',
            heading: '#F1F3F6',
            title: '#F4F6F8',
            text: '#E6E9EE',
            body: '#C3C9D2',
            muted: '#A9B1BD',
            subtle: '#8C95A3',
            faint: '#7A8391',
            accent: '#8FE3D6',
        },
    },
    styles: {
        global: {
            'html, body': {
                bg: 'brand.bg',
                color: 'brand.text',
                fontFamily: 'body',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.6,
            },
            a: {
                color: 'brand.text',
                textDecoration: 'none',
            },
            'a:hover': {
                color: '#FFFFFF',
            },
        },
    },
})

export default theme
