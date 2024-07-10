"use client"
import { useEffect, useState } from "react"
import { Project } from "../types/types"
import ProjectCard from "../components/projectCard"

export default function Page() {
    const [projects, setProjects] = useState<Project[]>([])

    const fetchProjects = () => {
        setProjects([
            {
                name: "Portfolio",
                description: {
                    pt: `Este é o meu portfólio, onde eu mostro os meus projetos e habilidades. Foi meu primeiro projeto 
                que foi publicado em um domínio na internet, apesar de ser um projeto simples, foi muito importante para mim,
                pois é o marco inicial da minha transição como dev. Pretendo manter ele sempre atualizado e melhorar ele sempre
                que possível.
                `,
                    en: `This is my portfolio, where I show my projects and skills. It was my first project that was published on a domain on the internet,
                although it is a simple project, it was very important to me, as it is the initial mark of my transition as a dev. I intend to keep it always updated and improve it whenever possible.`
                },
                repository: "https://github.com/gui-sc/portfolio",
                languages: ["TypeScript", "React", "TailwindCSS"]
            },
        ])
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-14 gap-5">
            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </main>
    )
}