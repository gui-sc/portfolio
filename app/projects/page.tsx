"use client"
import { useEffect, useState } from "react"
import { Project } from "../types/types"
import ProjectCard from "../components/projectCard"

export default function Page() {
    const [projects, setProjects] = useState<Project[]>([])
    const GITHUB_URL = "https://github.com/gui-sc"
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
                repository: `${GITHUB_URL}/portfolio`,
                languages: ["TypeScript", "React", "TailwindCSS"]
            },
            {
                name: "API Troco",
                description: {
                    pt: `Este projeto foi feito durante uma aula, com o intuito de testar os conhecimentos em NodeJs, Express e também com funções recursivas. Ele utiliza
                    da prática de função recursiva para calcular com mais eficiência a quantidade de notas e moedas necessárias para o troco. Recebe dois valores: o valor total da conta
                    e o valor que foi pago ao caixa, e retorna um objeto indicando quais notas e moedas devem ser devolvidas ao cliente. Os valores retornados são em reais. Por fim, foi implementado um Swagger para documentar a API.`,
                    en: `This project was made during a class, with the purpose of testing the knowledge in NodeJs, Express and also with recursive functions. It uses recursive function to calculate
                     more efficiently the amount of notes and coins needed for the change. It receives two values: the total bill amount and the 
                     amount paid to the cashier, and returns an object indicating which notes and coins should be returned to the customer. The values returned are in BRL. Finally, a Swagger was implemented to document the API.`
                },
                repository: `${GITHUB_URL}/api-troco`,
                languages: ["JavaScript", "NodeJs", "Express", "Swagger"]
            },
            {
                name: "Salon App (WIP)",
                description: {
                    pt: `Este é um projeto em andamento, onde estou desenvolvendo um web app para salões de beleza e barbearias. 
                    O objetivo desse projeto é ser um projeto white label, em que qualquer cliente possa customizar o app de acordo
                    com a sua logo, cores e serviços. O projeto tem uma stack completa, com um back-end em NodeJs, um front-end em React
                    e banco de dados em MongoDB. Atualmente finalizei a parte de funções básicas do back-end, para inserção, atualização, 
                    leitura e remoção dos dados, irei agora seguir com a implementação de autenticação e autorização.`,
                    en: `This is a work in progress project, where I'm developing a web app for beauty salons and barbershops.
                    This project's goal is to be a white label app, where any client can customize the app with their logo, colors palette
                    and services. The project has a full stack, with a NodeJs back-end, a React front-end and a MongoDB database.
                    I've finished the basic functions of the back-end, for CRUD operations, and now I'll move on to the implementation
                    of authentication and authorization.`
                },
                repository: `${GITHUB_URL}/salonApp-api`,
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