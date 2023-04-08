interface MobileMenuItemProps {
    text: string;
    url: string;
}
export function MobileMenuItem({ text, url }: MobileMenuItemProps) {

    return (<a href={url} className="no-underline">
        <div className="w-full p-4 cursor-pointer hover:opacity-50">
            <h3 className="text-gray-50 text-center text-inter font-2xl">
                {text}
            </h3>
        </div>
    </a>);

}