import {
    FirebaseBadge,
    JavaBadge,
    MongoBadge,
    MySQLBadge,
    NodeBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge
} from '../components/Projects/TechBadges';
import LinkIconButton from '../components/Projects/LinkIconButton';
import { FiGithub, FiLink } from 'react-icons/fi';
import { ReactElement } from 'react';


export interface ProjectT {
    name?: string,
    id?: string,
    type?: string,
    tags?: ReactElement[],
    imageSrc?: string,
    description?: string,
    links?: ReactElement[],
    headerLink?: string
}

export const projectData: ProjectT[] = [
    {
        name: 'Twitter Geo-Sentiment',
        id: 'twitter-geo-sentiment',
        type: 'Web app',
        tags: [<PythonBadge />, <ReactBadge />, <MongoBadge />],
        imageSrc: '/twitter-geo-sentiment.png',
        description: 'A web tool allowing queries analysing and visualising regional sentiment towards given topics on Twitter during a specific time frame. A custom-trained Naive Bayes model is used to perform sentiment analysis on aggregated data,.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/twitter-geo-sentiment" icon={<FiGithub />} />
        ],
        headerLink: 'https://github.com/jasonfyw/twitter-geo-sentiment'
    },
    {
        name: 'Orbital Simulation',
        id: 'orbital-sim',
        type: 'Physics simulation',
        tags: [<PythonBadge />],
        imageSrc: '/orbital-sim.png',
        description: 'An implementation of Newtonian physics in PyGame using positional data from the JPL Horizons database to simulate and record data on the past and future movements of celestial bodies in our solar system and beyond.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/orbital-sim" icon={<FiGithub />} />
        ],
        headerLink: 'https://github.com/jasonfyw/orbital-sim'
    },
    {
        name: 'Street Savvy',
        id: 'street-savvy',
        type: 'Web app',
        tags: [<ReactBadge />, <FirebaseBadge />, <PythonBadge />],
        imageSrc: '/street-savvy.png',
        description: 'A web app that suggests places to visit in Toronto based on your preferences using a custom recommendation engine and data from the Google Places API. Submitted to UofTHacks X.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/street-savvy" icon={<FiGithub />} />
        ],
        headerLink: 'https://github.com/jasonfyw/street-savvy'
    },
    {
        name: 'Fourier Series Animation',
        id: 'fourier-series',
        type: 'Web app',
        tags: [<ReactBadge />],
        imageSrc: '/fourier-series.png',
        description: 'An interactive React web app that demonstrates how an arbitrary user-inputted line drawing can be approximated using the Fourier series. Animations are rendered by the P5 library using efficiently implemented computations.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/fourier-series" icon={<FiGithub />} />,
            <LinkIconButton href="https://jasonfyw.com/fourier-series/" icon={<FiLink />} />
        ],
        headerLink: 'https://jasonfyw.com/fourier-series/'
    },
    {
        name: 'PLISMUN',
        id: 'plismun',
        type: 'Website',
        tags: [<PHPBadge />, <MySQLBadge />],
        imageSrc: '/plismun.png',
        description: 'A platform for my high school\'s annual international MUN conference, built from the ground up providing a delegate application system, admin tools, analytics, and resource hub. It managed hundreds of users from dozens of countries.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/twitter-geo-sentiment" icon={<FiGithub />} />,
            <LinkIconButton href="https://plismun.com" icon={<FiLink />} />
        ],
        headerLink: 'https://plismun.com'
    },
    {
        name: 'Blogging Application',
        id: 'blogging-app',
        type: 'Web app',
        tags: [<JavaBadge />],
        imageSrc: '/blogging-app.png',
        description: 'Our group project for CSC207 - a blogging website where users can post text content and follow other accounts. Designed and built according to CLEAN architecture and SOLID principles.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/csc207-blogging-app" icon={<FiGithub />} />
        ],
        headerLink: 'https://github.com/jasonfyw/csc207-blogging-app'
    },
    {
        name: 'Linky',
        id: 'linky',
        type: 'Web app',
        tags: [<ReactBadge />, <NodeBadge />, <MongoBadge />],
        imageSrc: '/linky.png',
        description: 'A lightweight and simple to use link shortener web app with a NodeJS REST API and a frontend built with ChakraUI. Features additional functions like QR codes and alternative URL formats.',
        links: [
            <LinkIconButton href="https://github.com/jasonfyw/linky" icon={<FiGithub />} />,
            <LinkIconButton href="https://lnky.to" icon={<FiLink />} />
        ],
        headerLink: 'https://lnky.to'
    }
]