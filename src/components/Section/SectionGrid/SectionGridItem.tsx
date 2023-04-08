import { ReactNode } from "react";

interface SectionGridItemProps {
    title: string;
    imageUrl?: string;
    description: string;
    bgColor?: string;
    grid?: boolean;
    gridItens?: string[];
}

export function SectionGridItem({ title, imageUrl, description, bgColor = "transparent", grid = false, gridItens = [] }: SectionGridItemProps) {
    return (
        <div className={`w-full max-w-[26rem] max-h-[26rem] h-full flex items-center flex-col ${bgColor} border-gray-200 rounded-xl border`}>
            <div className="font-inter text-gray-800 text-3xl mt-5">
                {title}

                <div className="border-b-gray-300 flex justify-center border w-[90%] mt-2">
                </div>

            </div>

            {grid ? <div className="w-full mt-10 gap-2 grid justify-center grid-cols-4 px-4">
                {gridItens.map((item, i) => {
                    return (
                        <div key={i} className="w-16 h-16 border-gray-200 border">
                            <img src={item} alt="img" className="w-16 h-16" />
                        </div>
                    )
                })}
            </div> : <div className="flex justify-center"> {description} </div>}


        </div>
    )
}