import { useEffect, useState } from "react";
import { NavBar } from "../../components/Navbar";
import { SectionGrid } from "../../components/Section/SectionGrid";
import { SectionGridItem } from "../../components/Section/SectionGrid/SectionGridItem";

export function Home() {

    const [scrollNavbarTransparent, setScrollNavbarTransparent] = useState(true);

    const skillsImages = [
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    ]

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
            <NavBar transparent={scrollNavbarTransparent} />
            <div className="flex w-full h-[100vh] bg-banner-background bg-no-repeat bg-cover justify-center items-center" id="home">
                <div className="flex w-full h-full items-center justify-center flex-col text-center bg-[rgba(0,0,0,0.7)]">
                    <div className="flex justify-between flex-row">
                        <h1 className="font-inter font-bold text-3xl text-gray-200"> Hello!</h1>
                        <img src="assets/wave_emoji.gif" alt="wave" className="w-10 h-10 ml-2" />
                    </div>

                    <h3 className="font-inter font-regular text-2xl text-gray-400 mt-4"> I'm Wesley, a fullstack software developer!</h3>
                </div>
            </div>


            <SectionGrid title="About" id="about">
                <SectionGridItem title="Skills" imageUrl="" description="" grid={true} gridItens={skillsImages} />
                <SectionGridItem title="Certifications" imageUrl="" description="" />
                <SectionGridItem title="Experience" imageUrl="" description="" />
            </SectionGrid>


            <SectionGrid title="Projects" id="projects">
                <SectionGridItem title="Skills" imageUrl="" description="" grid={true} gridItens={skillsImages} />
                <SectionGridItem title="Certifications" imageUrl="" description="" />
                <SectionGridItem title="Experience" imageUrl="" description="" />
            </SectionGrid>




        </>
    )
}