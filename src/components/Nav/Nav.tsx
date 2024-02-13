import { ReactNode, FC, useEffect, useRef } from 'react'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const Links = ['About me', 'Skills', 'Experience', 'Projects', 'Contact']

const NavLink = ({
    children,
    to,
    onClose,
}: {
    children: ReactNode
    to: string
    onClose: () => void
}) => (
    <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
            cursor: 'pointer',
        }}
    >
        <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            duration={250}
            onClick={onClose}
            offset={-80}
            activeClass={'active'}
        >
            {children}
        </ScrollLink>
    </Box>
)

const Nav: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const ref = useRef<any>(null)

    // lifecycle hook to close mobile navbar when there is a mousedown event
    // outside of the navbar
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) onClose()
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose, ref])

    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
                position={'fixed'}
                top={0}
                width={'100vw'}
                zIndex={100}
                ref={ref}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex alignItems={'center'} pl={4}>
                        <NavLink to={'home'} onClose={onClose}>
                            {/* <Box fontWeight={600}>Jason Wang</Box> */}
                            <Text fontWeight={600}>Jason Wang</Text>
                        </NavLink>
                    </Flex>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={6}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map(link => (
                                <NavLink
                                    key={link}
                                    to={link.toLowerCase().replace(/\s/g, '')}
                                    onClose={onClose}
                                >
                                    {link}
                                </NavLink>
                            ))}
                        </HStack>
                        <ColorModeSwitcher justifySelf='flex-end' />
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map(link => (
                                <NavLink
                                    key={link}
                                    to={link.toLowerCase().replace(/\s/g, '')}
                                    onClose={onClose}
                                >
                                    {link}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}

export default Nav
