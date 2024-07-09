import { Company } from "../types/types";

export default function CompanyItem({ company, last }: { company: Company, last: boolean }) {
    return (
        <div>
            <div className="flex flex-col max-w-[60ch] border rounded-lg border-solid p-2 border-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <p className="text-base font-semibold mb-2">
                    {company.name}
                </p>
                <p className="text-sm font-normal mb-1">
                    {company.startDate} - {company.endDate ? company.endDate : "Present"}
                </p>
                <p className="text-xs font-normal mb-4">
                    {company.role}
                </p>
                <p className="text-sm font-normal">
                    {company.description}
                </p>
            </div>
            {!last && (
                <div className="flex justify-center my-4">
                    <div className="border-r-8 border-dotted border-gray-300 h-16"></div>
                </div>
            )}
        </div>
    )
}