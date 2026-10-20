import { FC } from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import SectionHeading from '../global/SectionHeading'

const contacts = [
    {
        label: 'email',
        text: 'jsn.wang [at] alumni.utoronto.ca',
        href: 'mailto:jsn.wang@alumni.utoronto.ca',
    },
    {
        label: 'linkedin',
        text: 'linkedin.com/in/jasonfyw',
        href: 'https://www.linkedin.com/in/jasonfyw/',
    },
    {
        label: 'github',
        text: 'github.com/jasonfyw',
        href: 'https://github.com/jasonfyw',
    },
]

const Contact: FC = () => (
    <Flex
        as='section'
        id='contact'
        direction='column'
        gap='40px'
        scrollMarginTop='32px'
    >
        <SectionHeading label='04 / contact' title='Contact me' />
        <Box borderBottom='1px solid' borderColor='brand.divider'>
            {contacts.map(contact => (
                <Flex
                    key={contact.label}
                    align='baseline'
                    gap='32px'
                    py='24px'
                    borderTop='1px solid'
                    borderColor='brand.divider'
                    sx={{
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '4px',
                        },
                    }}
                >
                    <Text
                        as='span'
                        w='120px'
                        flex='none'
                        fontFamily='mono'
                        fontSize='12.5px'
                        color='brand.faint'
                    >
                        {contact.label}
                    </Text>
                    <Link
                        href={contact.href}
                        isExternal={!contact.href.startsWith('mailto:')}
                        fontFamily='mono'
                        fontSize='clamp(18px, 2.6vw, 28px)'
                        color='brand.heading'
                        wordBreak='break-all'
                        borderBottom='1px solid'
                        borderColor='brand.borderHover'
                        pb='2px'
                        _hover={{
                            textDecoration: 'none',
                            borderColor: 'brand.text',
                        }}
                    >
                        {contact.text}
                    </Link>
                </Flex>
            ))}
        </Box>
    </Flex>
)

export default Contact
