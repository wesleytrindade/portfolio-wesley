interface NavbarItemProps {
    text: string;
    href: string;
}

export function NavbarItem({ text, href }: NavbarItemProps) {
    return (
        <div className="ml-5 px-3 max-w-3">
            <a href={href} className="font-inter text-gray-100 hover:text-gray-400 transition-[1s]">
                {text}
            </a>
        </div>

    )
}