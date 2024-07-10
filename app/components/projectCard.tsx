import { useContext } from "react";
import { Project } from "../types/types";
import LanguageItem from "./LanguageItem";
import { LanguageContext } from "./Header";

export default function ProjectCard({ project }: { project: Project }) {
    const {language} = useContext(LanguageContext);
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <a
                href={project.repository}
                target="_blank"
                className="col-span-4 group flex flex-col justify-between rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="mb-3 text-2xl font-semibold">
                        {project.name}
                    </h2>
                    <p className="m-0 text-sm opacity-50 text-justify mb-3">
                        {project.description[language]}
                    </p>
                </div>
                <div className="flex gap-2 justify-end">
                    {project.languages.map((language, index) => (
                        <LanguageItem key={index} language={language} />
                    ))}
                </div>
            </a>
        </div>
    )
}
