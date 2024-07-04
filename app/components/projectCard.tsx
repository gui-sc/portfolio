import { Project } from "../types/types";
import LanguageItem from "./LanguageItem";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <div
                className="col-span-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                    {project.name}
                </h2>
                <p className="m-0 text-sm opacity-50 text-justify mb-3">
                    {project.description}
                </p>
                <div className="flex gap-2 justify-end">
                    {project.languages.map((language, index) => (
                        <LanguageItem key={index} language={language} />
                    ))}
                </div>
            </div>
        </div>
    )
}
