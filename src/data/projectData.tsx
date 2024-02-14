import {
    FirebaseBadge,
    JavaBadge,
    MongoBadge,
    MySQLBadge,
    NodeBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge,
    AssemblyBadge,
    DjangoBadge,
    TypescriptBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'PetPal',
        id: 'petpal',
        type: 'Web app',
        tagline: 'A pet adoption platform for animal shelters',
        tags: [<ReactBadge />, <DjangoBadge />, <MySQLBadge />],
        imageSrc: '/petpal.png',
        description:
            'A pet adoption platform for animal shelters and prospective adopters featuring an admin dashboard, a customized application process, a REST API, and a frontend built with Tailwind.',
        links: [
            {
                link: 'https://github.com/leowrites/PetPal',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/leowrites/PetPal',
    },
    {
        name: 'Street Savvy',
        id: 'street-savvy',
        type: 'Web app',
        tagline: 'Suggests places to visit tailored using your preferences',
        tags: [
            <ReactBadge />,
            <TypescriptBadge />,
            <FirebaseBadge />,
            <PythonBadge />,
        ],
        imageSrc: '/street-savvy.jpg',
        description:
            'A web app that suggests places to visit in Toronto based on your preferences using a custom recommendation engine and data from the Google Places API. Submitted to UofTHacks X.',
        links: [
            {
                link: 'https://github.com/jasonfyw/street-savvy',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/jasonfyw/street-savvy',
    },
    {
        name: 'Twitter Geo-Sentiment',
        id: 'twitter-geo-sentiment',
        type: 'Web app',
        tagline: 'Analyse and visualise regional sentiment on Twitter',
        tags: [<PythonBadge />, <ReactBadge />, <MongoBadge />],
        imageSrc: '/twitter-geo-sentiment.jpg',
        description:
            'A web tool allowing queries analysing and visualising regional sentiment towards given topics on Twitter during a specific time frame. A custom-trained Naive Bayes model is used to perform sentiment analysis on aggregated data.',
        links: [
            {
                link: 'https://github.com/jasonfyw/twitter-geo-sentiment',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/jasonfyw/twitter-geo-sentiment',
    },
    {
        name: 'Fourier Series Animation',
        id: 'fourier-series',
        type: 'Web app',
        tagline:
            'Demonstrating the Fourier series by approximating user-inputted line drawings',
        tags: [<ReactBadge />, <TypescriptBadge />],
        imageSrc: '/fourier-series.png',
        description:
            'An interactive React web app that demonstrates how an arbitrary user-inputted line drawing can be approximated using the Fourier series. Animations are rendered by the P5 library using efficiently implemented computations.',
        links: [
            {
                link: 'https://github.com/jasonfyw/fourier-series',
                icon: <FiGithub />,
            },
            {
                link: 'https://jasonfyw.com/fourier-series/',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://jasonfyw.com/fourier-series/',
    },
    {
        name: 'Orbital Simulation',
        id: 'orbital-sim',
        type: 'Physics simulation',
        tagline:
            'A PyGame simulation accurately modelling planetary orbits in space',
        tags: [<PythonBadge />],
        imageSrc: '/orbital-sim.png',
        description:
            'An implementation of Newtonian physics in PyGame using positional data from the JPL Horizons database to simulate and record data on the past and future movements of celestial bodies in our solar system and beyond.',
        links: [
            {
                link: 'https://github.com/jasonfyw/orbital-sim',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/jasonfyw/orbital-sim',
    },
    {
        name: 'PLISMUN',
        id: 'plismun',
        type: 'Website',
        tagline: 'The official website for PLISMUN',
        tags: [<PHPBadge />, <MySQLBadge />],
        imageSrc: '/plismun.jpg',
        description:
            "A platform for my high school's annual international MUN conference, built from the ground up providing a delegate application system, admin tools, analytics, and resource hub. It managed hundreds of users from dozens of countries.",
        links: [
            {
                link: 'https://github.com/jasonfyw/plismun',
                icon: <FiGithub />,
            },
            {
                link: 'https://plismun.com',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://plismun.com',
    },
    {
        name: 'Photography Portfolio',
        id: 'photography-portfolio',
        type: 'Website',
        tagline: 'A portfolio website for my photography',
        tags: [<ReactBadge />, <TypescriptBadge />],
        imageSrc: '/photography-portfolio.png',
        description:
            'A portfolio website for my photography work, built with React and Typescript and styled with ChakraUI. Features a custom-built gallery, e-commerce functionality, and 3D map integration with Mapbox.',
        links: [
            {
                link: 'https://photo.jasonfyw.com/',
                icon: <FiLink />,
            },
        ],
    },
    {
        name: 'Linky',
        id: 'linky',
        type: 'Web app',
        tagline: 'A modern, lightweight link shortener',
        tags: [
            <ReactBadge />,
            <TypescriptBadge />,
            <NodeBadge />,
            <MongoBadge />,
        ],
        imageSrc: '/linky.png',
        description:
            'A lightweight and simple to use link shortener web app with a NodeJS REST API and a frontend built with ChakraUI. Features additional functions like QR codes and alternative URL formats.',
        links: [
            {
                link: 'https://github.com/jasonfyw/linky',
                icon: <FiGithub />,
            },
            {
                link: 'https://lnky.to',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://lnky.to',
    },
    {
        name: 'Blogging Application',
        id: 'blogging-app',
        type: 'Web app',
        tagline:
            'Java blogging application built using CLEAN architecture and SOLID principles',
        tags: [<JavaBadge />],
        imageSrc: '/blogging-app.jpg',
        description:
            'Our group project for CSC207 - a blogging website where users can post text content and follow other accounts. Designed and built according to CLEAN architecture and SOLID principles.',
        links: [
            {
                link: 'https://github.com/jasonfyw/csc207-blogging-app',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/jasonfyw/csc207-blogging-app',
    },
    {
        name: 'Breakout in MIPS',
        id: 'breakout-asm',
        type: 'Game',
        tagline: 'Atari Breakout implemented in MIPS Assembly for CSC258',
        tags: [<AssemblyBadge />],
        imageSrc: '/breakout-asm.png',
        description:
            'Using MIPS Assembly to implement an Atari Breakout clone with features such as game controls, multiple lives, displaying score, and more.',
        links: [
            {
                link: 'https://github.com/jasonfyw/csc258-project',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/jasonfyw/csc258-project',
    },
]
