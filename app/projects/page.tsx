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
                que foi publicado em um domínio na internet. Este projeto me trouxe novos conhecimentos sobre NextJs e Front-End, 
                algo que sempre tive dificuldade ao longo da carreira. Pretendo manter ele sempre atualizado e melhorar ele sempre
                que possível.
                `,
                    en: `This is my portfolio, where I showcase my projects and skills. It was my first project published on an internet domain. This project brought me new knowledge about Next.js and Front-End development, something I have always found challenging throughout my career. I intend to keep it updated and improve it whenever possible.`
                },
                repository: "https://github.com/gui-sc/portfolio",
                languages: ["TypeScript", "React", "TailwindCSS"]
            },
            {
                name: "Salon App (WIP)",
                description: {
                    pt: `Este é um projeto em andamento, onde estou desenvolvendo um web app para salões de beleza e barbearias. 
                    O objetivo desse projeto é ser um projeto white label, em que qualquer cliente possa customizar o app de acordo
                    com a sua logo, cores e serviços. O projeto tem uma stack completa, com um back-end em NodeJs, um front-end em React
                    e banco de dados em MongoDB.`,
                    en: `This is a work in progress project, where I'm developing a web app for beauty salons and barbershops.
                    This project's goal is to be a white label app, where any client can customize the app with their logo, colors palette
                    and services. The project has a full stack, with a NodeJs back-end, a React front-end and a MongoDB database.`
                },
                repository: "htpps://github.com/gui-sc/salonApp-api",
                languages: ["TypeScript", "React", "NodeJs", "MongoDB"]
            }
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