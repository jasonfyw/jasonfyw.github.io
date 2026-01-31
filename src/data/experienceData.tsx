import { ExperienceData } from './types'
import nerveXLogo from '../media/nervex_logo.jpeg'
import blueprintLogo from '../media/blueprint_logo.jpeg'
import mieLogo from '../media/uoftmie_logo.jpeg'
import theScoreLogo from '../media/thescore_logo.jpeg'
import deepGenomicsLogo from '../media/dg_logo.jpeg'

export const experienceData: ExperienceData[] = [
    {
        title: 'Software Developer',
        company: 'Deep Genomics',
        location: 'Toronto, ON',
        dates: 'January 2026 - Present',
        description:
            'Building internal data tools for scientists and ML researchers to accelerate genome research and analysis.',
        logoSrc: deepGenomicsLogo
    },
    {
        title: 'Software Developer',
        company: 'theScore',
        location: 'Toronto, ON',
        dates: 'May 2024 - August 2025',
        description:
            'Contributing to the front-end development of software for the Retail Web Team for deployment across devices in PENN Entertainment retail properties and improving performance, observability, and developer experience across front-end applications for the Platform Web Team.',
        logoSrc: theScoreLogo
    },
    {
        title: 'Software Engineer',
        company: 'UofT Department of Mechanical & Industrial Engineering',
        location: 'Toronto, ON',
        dates: 'January 2024 - April 2024',
        description:
            'Designed and developed a web application for morLab, led by Professor Dionne Aleman, to provide a user-friendly UI to create, view, and manage advanced and customizable pandemic simulations.',
        logoSrc: mieLogo
    },
    {
        title: 'Senior Project Developer',
        company: 'UofT Blueprint',
        location: 'Toronto, ON',
        dates: 'September 2023 - April 2024',
        description:
            'Spearheaded the development of a full-stack web and mobile application for the Center For Dreams, a non-profit focusing on educational and social integration programs for individuals with developmental disabilities.',
        logoSrc: blueprintLogo
    },
    {
        title: 'Software Engineer Intern',
        company: 'NerveX Neurotechnologies',
        location: 'Toronto, ON',
        dates: 'May 2023 - January 2024',
        description:
            'Enhanced API efficiency, developed a medical charting library, and streamlined data pipelines using modern technologies like .NET Core, ReactJS, TypeScript, Docker, and AWS Lambda.',
        logoSrc: nerveXLogo,
    },
]
