import Image from "next/image";

export default function TechSkillItem({ name }: { name: string }) {
    const normalWidth = 90;
    const normalHeight = 90;
    return (
        <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
            width={normalWidth}
            height={normalHeight}
            className="shadow-md rounded-lg"
            alt={`${name} logo`} />
    )
}