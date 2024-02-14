import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Background = () => {
    const dotPattern = encodeURIComponent(`
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none"/>
            <circle cx="5" cy="5" r="1" fill="${useColorModeValue('#dadada', '#444')}"/>
        </svg>
    `)

    const gradient = useColorModeValue(
        'linear-gradient(160deg, rgba(238,242,246,1) 0%, rgba(242,242,242,0.8) 38%, rgba(242,242,242,0.8) 64%, rgba(191, 214, 222, 0.85) 100%), rgb(238,242,246)',
        'linear-gradient(160deg, rgba(23,25,34,1) 0%, rgba(26,32,43,1) 30%, rgb(35, 43, 58) 70%, rgba(58, 81, 90, 0.75) 100%), rgb(23,25,34)'
    )

    return (
        <Box
            position='fixed'
            h='100vh'
            w='100vw'
            zIndex={-100}
            top={0}
            left={0}
            bg='red'
            background={`url("data:image/svg+xml,${dotPattern}"), ${gradient}`}
            backgroundSize='30px 30px, cover'
            backgroundRepeat='repeat, no-repeat'
            color='white'
        />
    )
}

export default Background
