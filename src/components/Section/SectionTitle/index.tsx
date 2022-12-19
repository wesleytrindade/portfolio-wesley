interface SectionTitleProps {
    title: string;
    textColor?:string;
    overlineColor?: string;
}

export function SectionTitle({ textColor = 'gray-800',title, overlineColor = 'red-500' }: SectionTitleProps) {

    return(
        <div className="flex items-start justify-center">
            <h2 className={`text-center ${textColor} px-5 font-inter font-bold`}>{title}</h2>
            <hr className={`border border-solid-${overlineColor} border-t-4`}/>
        </div>
    )
}