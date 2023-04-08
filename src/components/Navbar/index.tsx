import { NavbarItem } from "./NavbarItem";

import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
interface NavBarProps {
    transparent?: boolean;
}
export function NavBar({ transparent = false }: NavBarProps) {

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

    const handleCloseMenuMobile = () => {
        setMobileMenuOpened(!mobileMenuOpened);
    }

    return (

        <>

            <MobileMenu menuOpened={mobileMenuOpened} handleMobileMenuClose={handleCloseMenuMobile} />

            <section className={`flex sm:justify-center lg:justify-evenly px-7 w-full ${transparent ? 'bg-gray-transparent' : 'bg-gray-900'} py-4 items-center fixed transition-[0.2s] ease-linear`}>
                <div className="flex lg:justify-evenly items-center h-full lg:w-[30%] sm:[50%]">

                    <div className="sm:flex lg:hidden p-4">
                        <button className="bg-transparent w-10 h-10" onClick={handleCloseMenuMobile}>
                            <FaBars className="text-gray-300 text-3xl" />
                        </button>
                    </div>
                    <div className="border-blue-500 border-2 rounded-full w-[64px] h-[64px] sm:ml-10 lg:ml-0">
                        <img src="http://github.com/wesleytrindade.png" className="w-[64px] h-[64px] rounded-full" alt="Avatar" />
                    </div>

                    <div className="lg:flex flex-col hidden">
                        <h3 className="text-gray-100 text-lg font-inter">
                            Wesley Trindade Guarnieri
                        </h3>
                        <p className="text-gray-400 font-inter text-xs">
                            A fullstack software developer
                        </p>
                    </div>
                </div>



                <nav className="lg:flex w-[70%] justify-center ml-6 hidden">
                    <NavbarItem href="#home" text="Home" transparent={transparent} />
                    <NavbarItem href="#about" text="About" transparent={transparent} />
                    <NavbarItem href="#projects" text="Projects" transparent={transparent} />
                    <NavbarItem href="#contact" text="Contact" transparent={transparent} />
                </nav>
            </section>

        </>
    )
}