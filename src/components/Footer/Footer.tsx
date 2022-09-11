import { FC } from 'react';
import {
    Box,
    Text,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const Footer: FC = () => {
    return (
        <Box w={'100%'} p={'2rem'} mt={20} bg={useColorModeValue('gray.100', 'gray.900')} textAlign='center'>
            <Text>
                © {new Date().getFullYear()} Jason Wang – made with &nbsp;<Icon as={FaHeart} fontSize={'0.65rem'} color={'#BF616A'} />&nbsp; using ReactJS 
            </Text>
        </Box>
    );
};

export default Footer;