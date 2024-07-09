export type Project = {
    name: string,
    description: string,
    repository: string,
    languages: string[],
}

export type Company = {
    name: string,
    role: string,
    startDate: string,
    endDate?: string,
    description: string,
}