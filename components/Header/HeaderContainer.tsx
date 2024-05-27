"use client"
import Image from "next/image";
import useDataStore from "../Store/CreateSlice";
import DesktopMenuContainer from "./DesktopMenu/DesktopMenuContainer";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useEffect, useState } from "react";



const HeaderContainer: React.FC = () => {
    const [currentScrollBarWidth, setCurrentScrollBarWidth] = useState<number>(0)

    const { showMegaMenuZustand } = useDataStore(state => state)

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarWidth > 0) {
            setCurrentScrollBarWidth(scrollBarWidth);
        }

    }, [])


    return (
        <>
            <div className="desktop-menu-top__bannner h-[40px] lg:hidden">
                <figure className="w-full h-full">
                    <Image src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4cbec63569b366ef5fe430204e80317052653530_1704612197.gif?x-oss-process=image" width={7000} height={60} alt="banner" className="w-full h-full object-cover" />
                </figure>
            </div>
            <header className="sticky top-0 left-0 w-full bg-white lg:fixed z-[100] lg:flex" style={{ boxShadow: "0 0 45px rgba(0,0,0,.55)" }}>
                <div className={`pointer-events-none w-[9px] ${showMegaMenuZustand ? "block" : "hidden"}`}></div>
                <MobileMenu />
                <DesktopMenuContainer />
            </header>
        </>
    );
}

export default HeaderContainer;