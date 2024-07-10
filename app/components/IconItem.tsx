import Image from "next/image";

export default function TechSkillItem({ name, size }: { name: string, size: number}) {

    return (
        <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
            width={size}
            height={size}
            className="shadow-md rounded-lg"
            alt={`${name} logo`} />
    )
}