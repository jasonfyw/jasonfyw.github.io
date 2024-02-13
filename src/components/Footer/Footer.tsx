import { FC } from 'react'
import {
    Box,
    Text,
    Icon,
    useColorModeValue,
    Flex,
    Spacer,
    IconButton,
    Stack,
} from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import Socials from '../global/Socials'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll

const Footer: FC = () => {
    return (
        <Box
            w={'100%'}
            p={'2rem'}
            mt={20}
            bg={useColorModeValue('gray.100', 'gray.900')}
            textAlign='left'
        >
            <Flex alignItems={'center'} px={2}>
                <Text mr={2}>
                    © {new Date().getFullYear()} Jason Wang – made with &nbsp;
                    <Icon as={FaHeart} fontSize={'0.65rem'} color={'#BF616A'} />
                    &nbsp; using ReactJS
                </Text>
                <Spacer />
                <Socials
                    color={useColorModeValue('#5a657c', '#9199a9')}
                    size='1.25rem'
                />
                <Stack
                    direction={['column', 'row']}
                    spacing={4}
                    align={'center'}
                    ml={8}
                >
                    <IconButton
                        colorScheme='teal'
                        variant='outline'
                        onClick={() => {
                            scroll.scrollToTop({ duration: 350 })
                        }}
                        icon={<ChevronUpIcon fontSize={20} />}
                        aria-label='Scroll to top'
                        borderRadius={'full'}
                        border={'2px'}
                    ></IconButton>
                    <ColorModeSwitcher
                        justifySelf='flex-end'
                        borderRadius='full'
                        color={useColorModeValue('teal.600', 'teal.200')}
                        borderColor={useColorModeValue('teal.600', 'teal.200')}
                        border={'2px'}
                        variant='outline'
                    />
                </Stack>
            </Flex>
        </Box>
    )
}

export default Footer
