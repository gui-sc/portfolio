export default function LanguageItem({ language }: { language: string }) {
    return (
        <div className="flex items-end gap-2 w-auto justify-end">
            <span className="p-1 text-xs font-semibold text-end border border-zinc-300 rounded-lg">{language}</span>
        </div>
    )
}