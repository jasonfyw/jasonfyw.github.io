import { FiArrowLeft } from 'react-icons/fi'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const BackButton = () => {
    return (
        <Link
            as={RouterLink}
            to='/'
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label='Back to homepage'
            position='fixed'
            top={['16px', '32px']}
            left={['16px', '32px']}
            zIndex={100}
            display='flex'
            alignItems='center'
            gap='8px'
            h='44px'
            px='14px'
            fontFamily='mono'
            fontSize='13px'
            color='brand.muted'
            bg='brand.bg'
            border='1px solid'
            borderColor='brand.borderStrong'
            borderRadius='6px'
            _hover={{
                textDecoration: 'none',
                color: '#FFFFFF',
                borderColor: 'brand.iconBorderHover',
                bg: 'brand.iconBgHover',
            }}
        >
            <FiArrowLeft size={16} aria-hidden='true' />
            cd ~
        </Link>
    )
}

export default BackButton
