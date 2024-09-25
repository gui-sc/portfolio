export type Project = {
    name: string,
    description: { en: string, pt: string },
    repository: string,
    preview?: string,
    languages: string[],
}

export type Company = {
    name: string,
    role: { en: string, pt: string },
    startDate: { en: string, pt: string },
    endDate?: { en: string, pt: string },
    description: { en: string, pt: string },
}