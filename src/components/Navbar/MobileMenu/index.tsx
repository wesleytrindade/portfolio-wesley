interface MobileMenuProps {
    menuOpened: boolean;
    handleMobileMenuClose : () => void;
}

export function MobileMenu({ menuOpened, handleMobileMenuClose}: MobileMenuProps) {

    return (
        menuOpened ? (
            <div className="flex w-full h-[100vh] fixed z-20 transition-[3s]">
                <div className="flex w-[70%] h-full bg-gray-900">

                </div>

                <div className="bg-menu-transparent w-[30%] h-full" onClick={handleMobileMenuClose}/>
            </div>
        ) : <></>
    )
}