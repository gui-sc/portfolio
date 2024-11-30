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
                preview: "https://guilhermesilveira.dev",
                repository: `${GITHUB_URL}/portfolio`,
                languages: ["TypeScript", "NextJs", "TailwindCSS"]
            },
            {
                name: "Salon App API (WIP)",
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
                languages: ["TypeScript", "Express", "NodeJs", "MongoDB"]
            },
            {
                name: "Rosacleo",
                description: {
                    en: `This is a Mocked E-commerce Web App, built with Next.js, Typescript and Tailwind CSS. This Web App was made for a friend's high school project. The main goal of this project was to create a simple and responsive e-commerce website, with a focus on the user experience. The website has a product page, a cart page, and a checkout page, as well as a discount coupon.`,
                    pt: `Este é um Web App de E-commerce fictício, construído com Next.js, Typescript e Tailwind CSS. Este Web App foi feito para um projeto de ensino médio de um amigo. O principal objetivo deste projeto era criar um site de e-commerce simples e responsivo, com foco na experiência do usuário. O site possui uma página de produto, uma página de carrinho e uma página de checkout, além de cupom de desconto.`
                },
                repository: `${GITHUB_URL}/rosacleo`,
                preview: "https://rosacleo.vercel.app",
                languages: ["TypeScript", "NextJs", "TailwindCSS"]
            },
            {
                name: "Fleet Manager API",
                description: {
                    en: `This is an api for managing fleets and travel applications, built with Express, Multer, Typescript and Google Cloud Storage. 
                    This project is part of three projects that are part of the same system, the other two are the App and the Web App.
                    This project was made for a college project in group, where the main goal was to create a system for managing fleets and travel applications,
                    with a focus on development's best practices.`,
                    pt: `Esta é uma api para gerenciamento de frotas e viagens, construída com Express, Multer, Typescript e Google Cloud Storage.
                    Este projeto faz parte de três projetos que fazem parte do mesmo sistema, os outros dois são o App e o Web App.
                    Este projeto foi feito para um projeto da faculdade em grupo, onde o principal objetivo era criar um sistema para gerenciamento de frotas e viagens,
                    com foco nas melhores práticas de desenvolvimento.`
                },
                repository: `${GITHUB_URL}/api-gestao-frota`,
                languages: ["TypeScript", "Express", "Multer", "Google Cloud"]
            },
            {
                name: "Fleet Manager App",
                description: {
                    en: `This is an app for managing fleets and travel applications, built with React Native. 
                    This project is part of three projects that are part of the same system, the other two are the API and the Web App.
                    This project was made for a college project in group, where the main goal was to create a system for managing fleets and travel applications,
                    with a focus on development's best practices.`,
                    pt: `Este é um app para gerenciamento de frotas e viagens, construído com React Native.
                    Este projeto faz parte de três projetos que fazem parte do mesmo sistema, os outros dois são a API e o Web App.
                    Este projeto foi feito para um projeto da faculdade em grupo, onde o principal objetivo era criar um sistema para gerenciamento de frotas e viagens,
                    com foco nas melhores práticas de desenvolvimento.`
                },
                repository: `${GITHUB_URL}/gestao-de-frota-app`,
                languages: ["TypeScript", "React Native", "Google Maps API"]
            },
            {
                name: 'Page Flow',
                description: {
                    en: `This project is a Pomodoro timer with a kindle-like design. The main goal is to help people to 
                    focus on their books and studies. The project was made with HTML, CSS and JavaScript. This project 
                    was made for a friend's college project from the course of Advertising and Marketing.`,
                    pt: `Este projeto é um timer Pomodoro com um design semelhante ao kindle. O principal objetivo 
                    é ajudar as pessoas a se concentrarem em seus livros e estudos. O projeto foi feito com HTML, 
                    CSS e JavaScript. Este projeto foi feito para um projeto da faculdade de um amigo do curso de 
                    Publicidade e Marketing.`
                },
                repository: `${GITHUB_URL}/page-flow`,
                preview: 'https://page-flow-pi.vercel.app/',
                languages: ["JavaScript", "HTML", "CSS"]
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
                name: "Vai Aonde",
                description: {
                    pt: `Este é um aplicativo para controle de gastos de uma viagem. O usuário pode adicionar os gastos com gasolina,
aliemntação, hospedagem e outros. O aplicativo calcula o total gasto. Este aplicativo foi feito para um trabalho na faculdade e desenvolvido em grupo com mais duas pessoas.`,
                    en: `This is an app for managing travel expenses. The user can add expenses such as gas, food, accommodation, and others. The app calculates the total amount spent. This app was created for a college project and developed in a group with two other people.`
                },
                repository: `${GITHUB_URL}/AppVaiAonde`,
                languages: ["Java", "Android Studio"]
            },
            {
                name: "Asterisca Isso",
                description: {
                    pt: `Este é um projeto de aplicativo Android que tem como objetivo "traduzir" as frases para que sejam apenas asteriscos. O aplicativo foi desenvolvido em Java com o Android Studio. Esse aplicativo foi desenvolvido em 2021 quando na época, no 
  Twitter/X, havia uma brincadeira de "traduzir" as frases para que fossem apenas asteriscos. O aplicativo foi desenvolvido para facilitar a brincadeira.`,
                    en: `This is an Android app project that aims to "translate" phrases so that they are only asterisks. The application was developed in Java with Android Studio. This application was developed in 2021 when at the time, on Twitter/X, there was a joke of "translating" the phrases so that they were only asterisks. The application was developed to facilitate the joke.`
                },
                repository: `${GITHUB_URL}/asteriscaIsso`,
                languages: ["Java", "Android Studio"]
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