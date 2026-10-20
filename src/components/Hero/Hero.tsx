import { FC, MouseEvent, useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, chakra, keyframes } from '@chakra-ui/react'
import Nav from '../Nav'
import Socials from '../global/Socials'
import ScrollLink from '../global/ScrollLink'
import { AsciiEngine, AsciiShape } from './asciiEngine'

const blink = keyframes`50% { opacity: 0; }`

// Lines content up with the 1280px header on wide screens
const edgeOffset = 'max(32px, calc((100% - 1280px) / 2 + 32px))'

const asciiStyles = {
    position: 'absolute',
    left: 0,
    top: 0,
    m: 0,
    fontFamily: 'mono',
    fontSize: '12px',
    lineHeight: 1.15,
    whiteSpace: 'pre',
    pointerEvents: 'none',
    userSelect: 'none',
} as const

interface HeroProps {
    shape?: AsciiShape
    speed?: number
    animate?: boolean
}

const Hero: FC<HeroProps> = ({
    shape = 'orbits',
    speed = 1,
    animate = true,
}) => {
    const heroRef = useRef<HTMLElement>(null)
    const probeRef = useRef<HTMLSpanElement>(null)
    const bgRef = useRef<HTMLPreElement>(null)
    const fgRef = useRef<HTMLPreElement>(null)
    const engineRef = useRef<AsciiEngine | null>(null)

    useEffect(() => {
        const hero = heroRef.current
        const probe = probeRef.current
        const bg = bgRef.current
        const fg = fgRef.current
        if (!hero || !probe || !bg || !fg) return

        const engine = new AsciiEngine({
            hero,
            probe,
            bg,
            fg,
            shape,
            speed,
            animate,
        })
        engine.start()
        engineRef.current = engine
        return () => engine.stop()
    }, [shape, speed, animate])

    const onMouseMove = (e: MouseEvent<HTMLElement>) => {
        const b = e.currentTarget.getBoundingClientRect()
        engineRef.current?.setPointer(
            ((e.clientX - b.left) / b.width - 0.5) * 2,
            ((e.clientY - b.top) / b.height - 0.5) * 2
        )
    }

    return (
        <chakra.section
            id='top'
            ref={heroRef}
            aria-label='Introduction'
            onMouseMove={onMouseMove}
            onMouseLeave={() => engineRef.current?.setPointer(0, 0)}
            position='relative'
            h='820px'
            overflow='hidden'
            bg='brand.bg'
            sx={{ '@media (max-width: 720px)': { h: '760px' } }}
        >
            {/* Measures the monospace cell size */}
            <chakra.span
                ref={probeRef}
                aria-hidden='true'
                position='absolute'
                left={0}
                top={0}
                visibility='hidden'
                display='inline-block'
                fontFamily='mono'
                fontSize='12px'
                lineHeight={1.15}
                whiteSpace='pre'
            >
                MMMMMMMMMM
            </chakra.span>
            <chakra.pre
                ref={bgRef}
                aria-hidden='true'
                color='brand.ascii'
                sx={asciiStyles}
            />
            <chakra.pre
                ref={fgRef}
                aria-hidden='true'
                color='brand.accent'
                sx={asciiStyles}
            />

            <Nav />

            <Flex
                data-mask='name'
                direction='column'
                gap='20px'
                position='absolute'
                left={edgeOffset}
                top='50%'
                transform='translateY(-50%)'
                w='min(400px, calc(100% - 32px))'
                sx={{
                    '@media (max-width: 720px)': {
                        top: 'auto',
                        bottom: '112px',
                        transform: 'none',
                        left: '16px',
                    },
                }}
            >
                <Text fontFamily='mono' fontSize='13px' color='brand.subtle'>
                    <Text as='span' color='brand.accent'>
                        ~/jason
                    </Text>{' '}
                    $ whoami
                </Text>
                <Heading
                    as='h1'
                    m={0}
                    fontFamily='mono'
                    fontWeight={500}
                    fontSize='clamp(56px, 6.2vw, 92px)'
                    lineHeight={0.98}
                    letterSpacing='-0.045em'
                    color='brand.title'
                    sx={{ '@media (max-width: 720px)': { fontSize: '56px' } }}
                >
                    Jason
                    <br />
                    Wang
                    <Text
                        as='span'
                        color='brand.accent'
                        animation={`${blink} 1.05s steps(1) infinite`}
                        sx={{
                            '@media (prefers-reduced-motion: reduce)': {
                                animation: 'none',
                            },
                        }}
                    >
                        _
                    </Text>
                </Heading>
                <Text
                    m={0}
                    fontSize='21px'
                    lineHeight={1.45}
                    color='brand.body'
                    maxW='26ch'
                >
                    Software Engineer &amp; University of Toronto CS Alum
                </Text>
            </Flex>

            <Flex
                data-mask='meta'
                direction='column'
                align='flex-end'
                gap='14px'
                position='absolute'
                right={edgeOffset}
                bottom='36px'
                sx={{
                    '@media (max-width: 720px)': {
                        right: 'auto',
                        left: '16px',
                        bottom: '28px',
                        alignItems: 'flex-start',
                    },
                }}
            >
                <Flex
                    align='center'
                    gap='10px'
                    fontFamily='mono'
                    fontSize='12.5px'
                    color='brand.subtle'
                >
                    <Box
                        as='span'
                        w='8px'
                        h='8px'
                        borderRadius='50%'
                        bg='brand.accent'
                        flex='none'
                    />
                    <span>Software Engineer, Amazon Ads · Toronto</span>
                </Flex>
                <Socials />
            </Flex>

            <Flex
                data-mask='foot'
                direction='column'
                gap='6px'
                position='absolute'
                left={edgeOffset}
                bottom='36px'
                fontFamily='mono'
                fontSize='12px'
                color='brand.faint'
                sx={{ '@media (max-width: 720px)': { display: 'none' } }}
            >
                <ScrollLink to='about' color='brand.muted' py='6px'>
                    ↓ scroll to about
                </ScrollLink>
            </Flex>
        </chakra.section>
    )
}

export default Hero
