"use client"
import { useEffect, useState } from "react";
import IconItem from "../components/IconItem";
import SoftSkillItem from "../components/SoftSkillItem";
import { SkillsPageMessages } from "../messages/MessagesEnum";
import { useLanguage } from "../contexts/LanguageContext";

export default function Page() {
    const {language} = useLanguage()
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
            "nextjs",
            "vite",
            "vercel",
        ])
    }

    const fetchSoftSkills = () => {
        setSoftSkills([
            {
                name: SkillsPageMessages["communicationTitle"][language],
                description: SkillsPageMessages["communicationDescription"][language]
            },
            {
                name: SkillsPageMessages["teamworkTitle"][language],
                description: SkillsPageMessages["teamworkDescription"][language]
            },
            {
                name: SkillsPageMessages["proactivityTitle"][language],
                description: SkillsPageMessages["proactivityDescription"][language]
            },
            {
                name: SkillsPageMessages["problemSolvingTitle"][language],
                description: SkillsPageMessages["problemSolvingDescription"][language]
            },
            {
                name: SkillsPageMessages["empathyTitle"][language],
                description: SkillsPageMessages["empathyDescription"][language]
            }
        ])
    }

    const fetchSkills = () => {
        fetchTechSkills();
        fetchSoftSkills();
    }

    useEffect(() => {
        fetchSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])
    return (
        <div className="w-full p-10 flex flex-col justify-center gap-5">
            <p className="text-center text-4xl font-bold font-mono">
                {SkillsPageMessages["skills"][language]}
            </p>
            <div className="w-full mb-32 grid text-center gap-5 lg:grid-cols-2">

                <div className="bg-white bg-opacity-30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-400">
                    <h2 className="mb-3 text-2xl font-semibold">
                        {SkillsPageMessages["techSkillsTitle"][language]}
                    </h2>
                    <div className="w-full px-2 flex flex-wrap justify-center gap-1 lg:px-10 lg:gap-3">
                        {techSkills.map((skill, index) => (
                            <IconItem key={index} name={skill} size={90} />
                        ))}
                    </div>

                </div>
                <div className="bg-white bg-opacity-30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-400">
                    <h2 className="mb-3 text-2xl font-semibold">
                        {SkillsPageMessages["softSkillsTitle"][language]}
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