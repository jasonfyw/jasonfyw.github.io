import { ReactNode, FC } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

const Links = ['About me', 'Projects', 'Resume', 'Contact'];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={href}>
        {children}
    </Link>
);

const Nav: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} top={0} width={'100vw'} zIndex={100}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex alignItems={'center'} pl={4} >
                        <NavLink href={'https://jasonfyw.com'}>
                            <Box fontWeight={600}>Jason Wang</Box>
                        </NavLink>
                    </Flex>
                    <HStack spacing={8} alignItems={'center'} >
                        <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link} href={'#'}>{link}</NavLink>
                            ))}
                        </HStack>
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link} href={'#'}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Nav;