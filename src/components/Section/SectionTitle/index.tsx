interface SectionTitleProps {
    title: string;
    textColor?:string;
    overlineColor?: string;
}

export function SectionTitle({ textColor = 'text-red-500',title, overlineColor = 'red-500' }: SectionTitleProps) {

    return(
        <div className="flex items-start justify-center bg-transparent">
            <h2 className={`text-center ${textColor} px-5 font-inter text-4xl font-bold`}>{title}</h2>
            <hr className={`border border-solid-${overlineColor} border-t-4`}/>
        </div>
    )
}