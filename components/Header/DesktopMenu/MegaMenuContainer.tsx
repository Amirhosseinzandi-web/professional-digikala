"use client"

import { memo, useEffect } from "react";

type propsType = {
    showMegaMenu: boolean
    setShowMegaMenu: Function
}


const MegaMenuContainer: React.FC<propsType> = ({ showMegaMenu, setShowMegaMenu }) => {

    useEffect(() => {
        document.querySelector(".mega-menu-nav-container .mega-menu-nav-items:nth-of-type(1)")?.classList.add("active-menu")
        document.querySelector(".mega-menu-content-container div:nth-of-type(1)")?.classList.add("show-menu")
        document.querySelectorAll(".mega-menu-nav-container .mega-menu-nav-items")?.forEach((el) => {

            (el as HTMLElement).addEventListener("mouseenter", () => {

                document.querySelectorAll(".mega-menu-nav-container .mega-menu-nav-items")?.forEach((item) => {
                    item.classList.remove("active-menu")
                })

                el.classList.add("active-menu")

                if (el.classList.contains("active-menu")) {

                    document.querySelectorAll(".mega-menu-content-container div")?.forEach((sl) => {
                        sl.classList.remove("show-menu")
                        if (el.getAttribute("data-status") === sl.getAttribute("data-status")) {
                            sl.classList.add("show-menu")
                        }
                    })

                }
            })
        })
    }, [])


    useEffect(() => {
        let _nav = document.querySelector("nav")!
        let _temp = document.querySelector("nav>div>div")!
        if (showMegaMenu) {
            document.documentElement.style.overflowY = "hidden";
            document.querySelector("main .shadow")?.classList.add("shadow-active")
            if (_nav) {
                _nav.style.padding = "0px 22px";
                // _nav.style.transition = "unset";
                // (_temp as HTMLElement).style.transition = "unset";
            }
        } else {
            document.documentElement.style.overflowY = "auto";
            document.querySelector("main .shadow")?.classList.remove("shadow-active")
            if (_nav) {
                _nav.style.padding = "0px 12px"
            }
        }
    }, [showMegaMenu])


    return (
        <>
            <section className={`mega-menu-container flex p-3 ${showMegaMenu ? "flex" : "hidden"} `} onMouseEnter={() => setShowMegaMenu(true)} onMouseLeave={() => setShowMegaMenu(false)}>
                <div className="w-[30%] border border-rose-500">
                    <section className="mega-menu-nav-container">
                        <div className="mega-menu-nav-items m-5" data-status="1">آیتم 1</div>
                        <div className="mega-menu-nav-items m-5" data-status="2">آیتم 2</div>
                        <div className="mega-menu-nav-items m-5" data-status="3">آیتم 3</div>
                        <div className="mega-menu-nav-items m-5" data-status="4">آیتم 4</div>
                        <div className="mega-menu-nav-items m-5" data-status="5">آیتم 5</div>
                        <div className="mega-menu-nav-items m-5" data-status="6">آیتم 6</div>
                    </section>
                </div>

                <div className="w-[70%] border border-blue-500 mega-menu-content-container">
                    <div data-status="1">آیتم 1</div>
                    <div data-status="2">آیتم 2</div>
                    <div data-status="3">آیتم 3</div>
                    <div data-status="4">آیتم 4</div>
                    <div data-status="5">آیتم 5</div>
                    <div data-status="6">آیتم 6</div>
                </div>
            </section>

        </>
    );
}






export default memo(MegaMenuContainer);