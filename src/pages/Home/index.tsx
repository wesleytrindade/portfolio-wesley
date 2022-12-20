import { useEffect, useState } from "react";
import { NavBar } from "../../components/Navbar";
import { SectionTitle } from "../../components/Section/SectionTitle";

export function Home() {

    const [scrollNavbarTransparent,setScrollNavbarTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setScrollNavbarTransparent(false);
            } else {
                setScrollNavbarTransparent(true)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return (
        <>
            <NavBar transparent = {scrollNavbarTransparent} />
            <div className="flex w-full h-[100vh] bg-banner-background bg-no-repeat bg-cover justify-center items-center">
                <div className="flex w-full h-full items-center justify-center flex-col text-center bg-[rgba(0,0,0,0.7)]">
                    <div className="flex justify-between flex-row">
                        <h1 className="font-inter font-bold text-3xl text-gray-200"> Hello!</h1>
                        <img src="assets/wave_emoji.gif" alt="wave" className="w-10 h-10 ml-2" />
                    </div>

                    <h3 className="font-inter font-regular text-2xl text-gray-400 mt-4"> I'm Wesley, a fullstack software developer!</h3>
                </div>
            </div>

            <div className="w-full h-[400px]">
                <div className="mt-10">
                    <SectionTitle title="About" />
                </div>

            </div>



        </>
    )
}