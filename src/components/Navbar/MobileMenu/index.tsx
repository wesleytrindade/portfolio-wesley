import { MobileMenuItem } from "./MobileMenuItem";

interface MobileMenuProps {
    menuOpened: boolean;
    handleMobileMenuClose : () => void;
}

export function MobileMenu({ menuOpened, handleMobileMenuClose}: MobileMenuProps) {

    return (
        menuOpened ? (
            <div className="flex w-full h-[100vh] fixed z-20 transition-[3s]">
                <div className="flex w-[50%] h-full bg-gray-900 flex-col">

                   <div className="mt-10 w-full h-10">
                   </div>
                   <MobileMenuItem text="Home" url="#"/>
                </div>

                <div className="bg-menu-transparent w-[50%] h-full" onClick={handleMobileMenuClose}/>
            </div>
        ) : <></>
    )
}