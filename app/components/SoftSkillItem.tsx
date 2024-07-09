export default function SoftSkillItem({ name, description }: { name: string, description: string }) {
    return (
        <div className="flex flex-col gap-2 justify-start">
            <h3 className="text-lg font-semibold text-start">{name}</h3>
            <p className="text-sm text-justify">{description}</p>
        </div>
    )
}