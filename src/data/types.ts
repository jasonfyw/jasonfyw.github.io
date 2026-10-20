export interface LinkT {
    link: string
    kind: 'github' | 'live'
}

export interface ProjectT {
    name?: string
    id?: string
    type?: string
    tags?: string[]
    tagline?: string
    imageSrc?: string
    description?: string
    links?: LinkT[]
    headerLink?: string
}

export interface ExperienceData {
    title: string
    company: string
    location: string
    dates: string
    description: string
}
