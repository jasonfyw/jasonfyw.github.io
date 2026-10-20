import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import ScrollLink from '../global/ScrollLink'

const Footer: FC = () => (
    <Flex
        as='footer'
        maxW='1120px'
        m='144px auto 0'
        p='32px 32px 40px'
        wrap='wrap'
        justify='space-between'
        align='center'
        gap='16px'
        fontFamily='mono'
        fontSize='12.5px'
        color='brand.faint'
        borderTop='1px solid'
        borderColor='brand.divider'
        sx={{ '@media (max-width: 600px)': { px: '16px' } }}
    >
        <span>
            © {new Date().getFullYear()} Jason Wang — rendered in plain text
        </span>
        <ScrollLink to='top' color='brand.muted' py='12px'>
            back to top ↑
        </ScrollLink>
    </Flex>
)

export default Footer
