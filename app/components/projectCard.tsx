import { Project } from "../types/types";
import Image from "next/image";
import LanguageItem from "./LanguageItem";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function ProjectCard({ project }: { project: Project }) {
    const { language } = useLanguage();
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <div
                className="col-span-4 group flex flex-col justify-between rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between">

                        <div className="flex justify-start gap-2 items-start">
                            <Link href={project.repository} target="_blank">
                                <Image
                                    alt={`github logo`}
                                    width={30}
                                    height={30}
                                    className="dark:filter dark:invert"
                                    src={`/github.png`}
                                />
                            </Link>
                            <h2 className="mb-3 text-2xl font-semibold">
                                {project.name}
                            </h2>
                        </div>
                        {project.preview && (
                            <Link href={project.preview} target="_blank">
                                <Image
                                    alt={`web logo`}
                                    width={30}
                                    height={30}
                                    className="dark:filter dark:invert"
                                    src={`/web.png`}
                                />
                            </Link>)}
                    </div>
                    <p className="m-0 text-sm opacity-50 text-justify mb-3">
                        {project.description[language]}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 justify-end">
                        {project.languages.map((language, index) => (
                            <LanguageItem key={index} language={language} />
                        ))}
                    </div>
                    <div className="flex justify-between">

                    </div>
                </div>
            </div>
        </div>
    )
}
