"use client"
import { useEffect, useState } from "react"
import { Company } from "../types/types"
import CompanyItem from "../components/CompanyItem";

export default function Page() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [companiesToShow, setCompaniesToShow] = useState<Company[]>([]);
    const [showMore, setShowMore] = useState<boolean>(false);
    const fetchCompanies = () => {
        setCompanies([
            {
                name: "Regulatório Mais",
                role: "Software Developer, Tech Lead",
                startDate: "2023-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Convem Store",
                role: "Software Developer",
                startDate: "2022-03-01",
                endDate: "2023-09-30",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "FreeLancer",
                role: "Software Developer",
                startDate: "2020-12-01",
                endDate: "2022-02-28",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Regulatório Mais",
                role: "Software Developer, Tech Lead",
                startDate: "2023-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Convem Store",
                role: "Software Developer",
                startDate: "2022-03-01",
                endDate: "2023-09-30",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "FreeLancer",
                role: "Software Developer",
                startDate: "2020-12-01",
                endDate: "2022-02-28",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ])
    }

    useEffect(() => {
        fetchCompanies()
    }, [])

    useEffect(() => {
        if(showMore) setCompaniesToShow(companies);
        if(!showMore) setCompaniesToShow(companies.slice(0, 2));
    }, [showMore, companies])
    return (
        <div className="w-full p-10 flex flex-col justify-center gap-5">
            <p className="text-center text-4xl font-bold font-mono">
                Experience
            </p>
            <div className="flex flex-col items-center">
                {companiesToShow.map((company, index) => (
                    <CompanyItem key={index} company={company} last={index == companiesToShow.length-1}/>
                ))}
            </div>
            <button className="w-auto border border-solid bg-gray-200 dark:bg-zinc-800/30 rounded-lg px-3 py-2 m-auto transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
            </button>
        </div>
    )
}