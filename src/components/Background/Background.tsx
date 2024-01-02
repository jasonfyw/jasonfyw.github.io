import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Background = () => {
    const dotPattern = encodeURIComponent(`
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none"/>
            <circle cx="5" cy="5" r="1" fill="${useColorModeValue('#dadada', '#444')}"/>
        </svg>
    `)

    return (
        <Box
            position='fixed'
            h='100vh'
            w='100vw'
            zIndex={-100}
            top={0}
            left={0}
            bg='red'
            background={`url("data:image/svg+xml,${dotPattern}")`}
            backgroundSize='30px 30px'
            color='white'
        />
    );
};

export default Background;