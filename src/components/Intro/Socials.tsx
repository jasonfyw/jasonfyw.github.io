import { HStack, Link } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
    FiLinkedin,
    FiGithub,
    FiInstagram,
    FiMail
} from 'react-icons/fi'

interface SocialsProps {
    color: string
}

const Socials: FC<SocialsProps> = (props) => {
    const socialsData = [
        {
            aria: 'Linkedin',
            icon: <FiLinkedin />,
            href: 'https://linkedin.com/in/jasonfyw/'
        },
        {
            aria: 'GitHub',
            icon: <FiGithub />,
            href: 'https://github.com/jasonfyw'
        },
        {
            aria: 'Instagram',
            icon: <FiInstagram />,
            href: 'https://instagram.com/jasonfyw'
        },
        {
            aria: 'Email',
            icon: <FiMail />,
            href: 'mailto:jasonwang0610@gmail.com'
        }
    ]
    return (
        <HStack spacing={6} p={4}>
            {
                socialsData.map((social) => (
                    <Link aria-label={social.aria} href={social.href} fontSize={'1.5rem'} color={props.color} isExternal>
                        {social.icon}
                    </Link>
                ))
            }
        </HStack>
    );
};

export default Socials;