import { ReactNode } from "react";
import { SectionTitle } from "../SectionTitle";

interface SectionGridProps {
    title: string;
    id: string;
    children: ReactNode;
}
export function SectionGrid({ title, children, id }: SectionGridProps) {
    return (

        <div className="flex flex-col w-full px-2 h-[600px]" id={id}>
            <div className="p-10">
                <SectionTitle title={title} />
            </div>

            <div className="w-full gap-4 h-[90%] mt-10 flex justify-around items-center flex-wrap">
                {children}
            </div>

        </div>
    )
}