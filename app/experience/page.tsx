"use client"
import { useContext, useEffect, useState } from "react"
import { Company } from "../types/types"
import CompanyItem from "../components/CompanyItem";
import { LanguageContext } from "../components/Header";
import { ExperiencePageMessages } from "../messages/MessagesEnum";

export default function Page() {
    const { language } = useContext(LanguageContext)
    const [companies, setCompanies] = useState<Company[]>([]);
    const [companiesToShow, setCompaniesToShow] = useState<Company[]>([]);
    const [showMore, setShowMore] = useState<boolean>(false);
    const fetchCompanies = () => {
        setCompanies([
            {
                name: "Regulatório Mais",
                role: {
                    pt: "Desenvolvedor de Software, Tech Lead",
                    en: "Software Developer, Tech Lead"
                },
                startDate: {
                    pt: "01/10/2023",
                    en: "2023-10-01"
                },
                description: {
                    pt: `Sou desenvolvedor de software na Regulatório Mais, atuo como líder técnico do time de desenvolvimento, onde trabalho com tecnologias como React,
                    Typescript, Express, utilizando AWS Cloud para deploy. O projeto consiste em um sistema de gestão de obrigações regulatórias para instituições financeiras,
                    incluindo funcionalidades como controle de prazos, notificações e geração de relatórios.`,
                    en: `I work as a software developer at Regulatório Mais, acting as a technical leader of the development team, where I work with technologies such as React,
                    Typescript, Express, using AWS Cloud for deployment. The project consists of a regulatory obligations management system for financial institutions,
                    including features such as deadline control, notifications, and report generation.`
                }
            },
            {
                name: "Convem Store",
                role: {
                    pt: "Desenvolvedor de Software",
                    en: "Software Developer"
                },
                startDate: {
                    pt: "01/03/2022",
                    en: "2022-03-01"
                },
                endDate: {
                    pt: "30/09/2023",
                    en: "2023-09-30"
                },
                description: {
                    pt: `Fui contratado pela Convem Store, uma software house voltada para soluções para fintechs, onde trabalhei em diversos projetos, usando tecnologias como React,
                    Typescript, Node.js, Express, e banco de dados PostgreSQL e AWS DynamoDB.`,
                    en: `I was hired by Convém Store, a software house focused on solutions for fintechs, where I worked on several projects, using technologies such as React,
                    Typescript, Node.js, Express, and databases PostgreSQL and AWS DynamoDB.`
                }
            },
        ])
    }

    useEffect(() => {
        fetchCompanies()
    }, [])

    useEffect(() => {
        if (showMore) setCompaniesToShow(companies);
        if (!showMore) setCompaniesToShow(companies.slice(0, 2));
    }, [showMore, companies])
    return (
        <div className="w-full p-10 flex flex-col justify-center gap-5">
            <p className="text-center text-4xl font-bold font-mono">
                {ExperiencePageMessages["experience"][language]}
            </p>
            <div className="flex flex-col items-center">
                {companiesToShow.map((company, index) => (
                    <CompanyItem key={index} company={company} last={index == companiesToShow.length - 1} />
                ))}
            </div>
            {companies.length > 2 && (
                <button className="w-auto border border-solid bg-gray-200 dark:bg-zinc-800/30 rounded-lg px-3 py-2 m-auto transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" onClick={() => setShowMore(!showMore)}>
                    {showMore ? ExperiencePageMessages["showLess"][language] : ExperiencePageMessages["showMore"][language]}
                </button>
            )}
        </div>
    )
}