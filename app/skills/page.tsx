"use client"
import { useEffect, useState } from "react";
import TechSkillItem from "../components/TechSkillItm";
import SoftSkillItem from "../components/SoftSkillItem";

export default function Page() {
    const [techSkills, setTechSkills] = useState<string[]>([]);
    const [softSkills, setSoftSkills] = useState<{ name: string, description: string }[]>([]);

    const fetchTechSkills = () => {
        setTechSkills([
            "javascript",
            "typescript",
            "react",
            "html5",
            "css3",
            "tailwindcss",
            "postgresql",
            "mysql",
            "java",
            "git",
            "github",
            "gitlab",
            "nodejs",
            "express",
            "nextjs",
            "vite",
            "vercel",
        ])
    }

    const fetchSoftSkills = () => {
        setSoftSkills([
            {
                name: "Comunicação",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Trabalho em equipe",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Proatividade",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Resolução de problemas",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Empatia",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
            }
        ])
    }

    useEffect(() => {
        fetchTechSkills();
        fetchSoftSkills();
    }, [])
    return (
        <div className="w-full p-10 flex flex-col justify-center gap-5">
            <p className="text-center text-4xl font-bold font-mono">
                Skills
            </p>
            <div className="w-full mb-32 grid text-center gap-5 lg:grid-cols-2">

                <div className="bg-white bg-opacity-30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-400">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Tech Skills
                    </h2>
                    <div className="w-full px-2 flex flex-wrap justify-center gap-1 lg:px-10 lg:gap-3">
                        {techSkills.map((skill, index) => (
                            <TechSkillItem key={index} name={skill} />
                        ))}
                    </div>

                </div>
                <div className="bg-white bg-opacity-30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-400">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Soft Skills
                    </h2>
                    <div className="w-full px-10 flex flex-wrap justify-start gap-4">
                        {softSkills.map((skill, index) => (
                            <SoftSkillItem key={index} name={skill.name} description={skill.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}