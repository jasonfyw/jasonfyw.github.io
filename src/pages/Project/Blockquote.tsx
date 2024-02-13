import { Box } from '@chakra-ui/react'

const Blockquote = ({ children, ...props }) => {
    return (
        <Box
            {...props}
            borderLeft={'6px solid'}
            borderColor={'blue.200'}
            px={8}
            bg={'rgba(125, 161, 191, 0.2)'}
            py={4}
        >
            {children}
        </Box>
    )
}

export default Blockquote
