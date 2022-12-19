import { NavbarItem } from "./NavbarItem";

export function NavBar() {
    return (
        <section className="flex justify-start px-7 w-full bg-gray-900 py-4 items-center">
            <div className="flex justify-around items-center h-full w-[30%]">
                <div className="border-blue-500 border-2 rounded-full w-[64px] h-[64px]">
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

            <nav className="flex w-[70%] justify-center ml-2">
                <NavbarItem href="#" text="About" />
                <NavbarItem href="#" text="Projects" />
                <NavbarItem href="#" text="Contact" />
            </nav>
        </section>
    )
}