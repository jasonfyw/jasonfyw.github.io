import { FC } from 'react';
import {
    Box,
    Text,
    Icon,
    useColorModeValue,
    Flex,
    Spacer
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import Socials from '../Intro/Socials';

const Footer: FC = () => {
    return (
        <Box w={'100%'} p={'2rem'} mt={20} bg={useColorModeValue('gray.100', 'gray.900')} textAlign='left'>
            <Flex alignItems={'center'} px={2}>
                <Text>
                    © {new Date().getFullYear()} Jason Wang – made with &nbsp;<Icon as={FaHeart} fontSize={'0.65rem'} color={'#BF616A'} />&nbsp; using ReactJS 
                </Text>
                <Spacer/>
                <Socials color={useColorModeValue('#5a657c', '#9199a9')} size='1.25rem' />
            </Flex>
        </Box>
    );
};

export default Footer;