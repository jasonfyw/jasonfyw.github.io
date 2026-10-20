import { FC } from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

const socialsData = [
    {
        aria: 'LinkedIn',
        icon: <FiLinkedin size={18} />,
        href: 'https://linkedin.com/in/jasonfyw/',
    },
    {
        aria: 'GitHub',
        icon: <FiGithub size={18} />,
        href: 'https://github.com/jasonfyw',
    },
    {
        aria: 'Email',
        icon: <FiMail size={18} />,
        href: 'mailto:jsn.wang@alumni.utoronto.ca',
    },
]

const Socials: FC = () => (
    <Flex gap='10px'>
        {socialsData.map(social => (
            <Link
                key={social.aria}
                aria-label={social.aria}
                href={social.href}
                isExternal={!social.href.startsWith('mailto:')}
                w='44px'
                h='44px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                border='1px solid'
                borderColor='brand.borderStrong'
                borderRadius='6px'
                color='brand.body'
                _hover={{
                    borderColor: 'brand.iconBorderHover',
                    bg: 'brand.iconBgHover',
                }}
            >
                {social.icon}
            </Link>
        ))}
    </Flex>
)

export default Socials
