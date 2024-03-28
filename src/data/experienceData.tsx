import { ExperienceData } from './types'
import nerveXLogo from '../media/nervex_logo.jpeg'
import blueprintLogo from '../media/blueprint_logo.jpeg'
import helloFairLogo from '../media/hellofair_logo.jpeg'

export const experienceData: ExperienceData[] = [
    {
        title: 'Software Engineer Intern',
        company: 'NerveX Neurotechnologies',
        location: 'Toronto, ON',
        dates: 'May 2023 - Present',
        description:
            'Enhanced API efficiency, developed a medical charting library, and streamlined data pipelines using modern technologies like .NET Core, ReactJS, TypeScript, Docker, and AWS Lambda.',
        logoSrc: nerveXLogo,
    },
    {
        title: 'Senior Project Developer',
        company: 'UofT Blueprint',
        location: 'Toronto, ON',
        dates: 'September 2023 - Present',
        description:
            'Spearheaded the development of a full-stack web and mobile application for the Center For Dreams, a non-profit focusing on educational and social integration programs for individuals with developmental disabilities.',
        logoSrc: blueprintLogo
    },
    {
        title: 'Web Developer',
        company: 'UTMIST',
        location: 'Toronto, ON',
        dates: 'October 2022 - June 2023',
        description:
            'Designed and implemented the website for the inaugural edition of Hack the Mist, an applied machine learning MLH-partnered hackathon, by using ReactJS, Typescript, along with ChakraUI.',
        logoSrc: 'https://avatars.githubusercontent.com/u/42724991?s=200&v=4',
    },
    {
        title: 'Web Developer',
        company: 'Fair',
        location: 'Oxford, UK (Remote)',
        dates: 'May 2021 - May 2022',
        description:
            'Developed a prototype paper-trading web application using NextJS and Golang with live price information and trading functionality with mock accounts stored in MongoDB.',
        logoSrc:
            helloFairLogo,
    },
]
