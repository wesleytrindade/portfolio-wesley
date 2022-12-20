interface NavbarItemProps {
    text: string;
    href: string;
    transparent:boolean;
}

export function NavbarItem({ text, href, transparent = false }: NavbarItemProps) {
    return (
        <div className={`ml-5 p-5 max-w-3 ${!transparent && 'hover:bg-gray-800'} cursor-pointer`}>
            <a href={href} className="font-inter text-gray-100 hover:text-gray-400 transition-[1s]">
                {text}
            </a>
        </div>

    )
}