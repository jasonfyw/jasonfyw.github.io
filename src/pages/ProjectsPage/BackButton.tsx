import { ArrowBackIcon } from '@chakra-ui/icons'
import { IconButton, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll

const BackButton = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isMobile] = useMediaQuery('(min-width: 764px)')

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Link to={'/'}>
            <IconButton
                icon={<ArrowBackIcon />}
                aria-label='Back to homepage'
                variant={'outline'}
                colorScheme={'teal'}
                bg={['rgba(154, 228, 217, 0.2)', 'none']}
                borderRadius={'full'}
                border={'2px'}
                size={'lg'}
                fontSize={22}
                top={[4, 8]}
                left={[4, 8]}
                position={'fixed'}
                hidden={!isMobile && scrollPosition < 200}
                zIndex={100}
                onClick={() => {
                    scroll.scrollToTop({ duration: 450 })
                }}
            />
        </Link>
    )
}

export default BackButton
