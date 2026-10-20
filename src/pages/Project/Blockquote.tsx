import { Box } from '@chakra-ui/react'

const Blockquote = ({ children, ...props }) => {
    return (
        <Box
            {...props}
            border='1px solid'
            borderColor='brand.border'
            borderRadius='8px'
            bg='brand.surface'
            color='brand.body'
            px={6}
            py={4}
        >
            {children}
        </Box>
    )
}

export default Blockquote
