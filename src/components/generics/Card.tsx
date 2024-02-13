import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

interface CardProps extends BoxProps {}

const Card: React.FC<PropsWithChildren<CardProps>> = ({
    children,
    ...restProps
}) => {
    return (
        <Box
            bg={useColorModeValue(
                'rgba(255, 255, 255, 0.33)',
                'rgba(23, 25, 35, 0.33)'
            )}
            boxShadow={'xl'}
            rounded={'xl'}
            p={6}
            backdropFilter={useColorModeValue('blur(1.5px)', 'blur(2.5px)')}
            {...restProps}
        >
            {children}
        </Box>
    )
}

export default Card
