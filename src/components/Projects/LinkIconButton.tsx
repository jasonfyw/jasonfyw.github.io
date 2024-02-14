import { FC, ReactElement } from 'react'
import { IconButton, Link } from '@chakra-ui/react'

interface LinkIconButtonProps {
    href: string
    icon: ReactElement
}

const LinkIconButton: FC<LinkIconButtonProps> = props => {
    return (
        <Link href={props.href} isExternal>
            <IconButton
                variant={'outline'}
                colorScheme={'cyan'}
                aria-label={'View project'}
                fontSize={'1rem'}
                size={'sm'}
                icon={props.icon}
            />
        </Link>
    )
}

export default LinkIconButton
