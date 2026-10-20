import { FC, MouseEvent } from 'react'
import { Link, LinkProps } from '@chakra-ui/react'

export const scrollToId = (id: string) => {
    const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches
    const behavior = reduced ? 'auto' : 'smooth'
    if (id === 'top') window.scrollTo({ top: 0, behavior })
    else document.getElementById(id)?.scrollIntoView({ behavior })
}

interface ScrollLinkProps extends LinkProps {
    // id of the element to scroll to, or 'top'
    to: string
}

// In-page anchors like href='#about' would be swallowed by the HashRouter,
// so scroll programmatically instead
const ScrollLink: FC<ScrollLinkProps> = ({ to, children, ...props }) => (
    <Link
        href='#/'
        onClick={(e: MouseEvent) => {
            e.preventDefault()
            scrollToId(to)
        }}
        _hover={{ textDecoration: 'none' }}
        {...props}
    >
        {children}
    </Link>
)

export default ScrollLink
