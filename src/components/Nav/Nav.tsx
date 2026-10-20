import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ScrollLink from '../global/ScrollLink'

const links = ['about', 'experience', 'projects', 'contact']

// Sits on top of the hero; data-mask keeps the ASCII art clear of it
const Nav: FC = () => (
    <Flex
        as='header'
        position='absolute'
        top={0}
        left={0}
        right={0}
        maxW='1280px'
        mx='auto'
        py='16px'
        px='32px'
        boxSizing='border-box'
        wrap='wrap'
        align='center'
        justify='space-between'
        gap='8px'
        sx={{ '@media (max-width: 600px)': { px: '16px' } }}
    >
        <ScrollLink
            to='top'
            data-mask='logo'
            fontFamily='mono'
            fontSize='15px'
            fontWeight={500}
            py='12px'
            letterSpacing='-0.01em'
        >
            jw
            <Text as='span' color='brand.accent'>
                _
            </Text>
        </ScrollLink>
        <Flex
            as='nav'
            aria-label='Primary'
            data-mask='links'
            wrap='wrap'
            gap='4px'
            fontFamily='mono'
            fontSize='13px'
            sx={{ '@media (max-width: 600px)': { gap: 0 } }}
        >
            {links.map(link => (
                <ScrollLink
                    key={link}
                    to={link}
                    color='brand.muted'
                    py='12px'
                    px='10px'
                    borderRadius='4px'
                    _hover={{ bg: 'brand.hover', color: '#FFFFFF' }}
                >
                    {link}
                </ScrollLink>
            ))}
        </Flex>
    </Flex>
)

export default Nav
