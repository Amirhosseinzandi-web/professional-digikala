"use client"

import { memo, useEffect, useState } from "react";
import MegaMenuContainer from "./MegaMenuContainer";
import useDataStore from "../../Store/CreateSlice"





const DesktopMenuBottom: React.FC = () => {
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [isInNav, setIsInNav] = useState(false);
    const [isInLi, setIsInLi] = useState(false);
    const [componentIsReady, setComponentIsReady] = useState(false);
    const { showMegaMenuZustand, setShowMegaMenuZustandHandler } = useDataStore(state => state)


    const MenuHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowMegaMenu(true)
    }

    const MenuHandlerLeave = () => {
        setShowMegaMenu(false);
    }

    useEffect(() => {
        const _time = 150;
        const redLine = document.querySelector(".nav__red-line-border") as HTMLElement;
        const _nav = document.querySelector(".nav") as HTMLElement;


        setComponentIsReady(true);

        _nav.addEventListener("mouseenter", () => {
            setIsInNav(true)
        });

        _nav.addEventListener("mouseleave", () => {
            setIsInNav(false)
        })

        const mouseEnterHandler = (e: MouseEvent) => {
            setIsInLi(true);
            const desktopMenuTop = document.querySelector(".desktop-menu-top") as HTMLElement;
            const extraMargin = (parseFloat(getComputedStyle(desktopMenuTop as HTMLElement).marginRight)) + (parseFloat(getComputedStyle(desktopMenuTop as HTMLElement).paddingRight));
            const _distance = (((e.currentTarget as HTMLElement).getBoundingClientRect().left) - extraMargin);
            const _width = ((e.currentTarget as HTMLElement).clientWidth);


            if (!showMegaMenu) {
                redLine.style.width = `0px`;
            }

            setTimeout(() => {
                redLine.style.transform = `translateX(${_distance}px)`;
                redLine.style.width = `${_width}px`;
            }, _time);

        }


        const mouseLeaveHandler = (e: MouseEvent) => {
            setIsInLi(false)
        }


        const navItems = document.querySelectorAll(".nav .nav__items") as NodeListOf<HTMLElement>;
        navItems.forEach((el) => {
            (el as HTMLElement).addEventListener("mousemove", mouseEnterHandler, { once: true });
            (el as HTMLElement).addEventListener("mouseleave", mouseLeaveHandler);
        })


        if (showMegaMenu) {
            setIsInLi(true);
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "unset";
        }


        if (!isInNav && !showMegaMenu) {
            setIsInLi(false);
        }


        if (!isInLi) {
            redLine.classList.add("red-line-close");
        } else {
            redLine.classList.remove("red-line-close");
        }


        const wheelHandler = () => {
            setShowMegaMenu(false)
        }

        window.addEventListener("wheel", wheelHandler)


        setShowMegaMenuZustandHandler(showMegaMenu)

        return () => {
            navItems.forEach((el) => {
                (el as HTMLElement).removeEventListener("mousemove", mouseEnterHandler);
                (el as HTMLElement).removeEventListener("mouseleave", mouseLeaveHandler);
            })
            window.removeEventListener("wheel", wheelHandler)
        }

    }, [showMegaMenu, isInNav, isInLi, componentIsReady])


    // ****************************************************************************************************************************


    return (
        <>
            <nav className={`nav hidden lg:block desktop-menu-bottom container mx-auto px-2 relative ${componentIsReady ? "pointer-events-auto" : "pointer-events-none"}`}>
                <div className="h-full block">
                    <div className="flex w-full h-full justify-between">
                        <div className="flex">

                            <div onMouseEnter={MenuHandler} onMouseLeave={MenuHandlerLeave} className="flex items-center cursor-pointer py-2 nav__items" id="1">
                                <i className="bi bi-justify hamburger-menu inline-flex text-lg"></i>
                                <p className="text-sm font-bold mr-1">دسته بندی کالا ها</p>
                                <span className="mr-5 light-gray-text opacity-40">|</span>
                            </div>

                            <div className="flex items-center mr-3 cursor-pointer py-2 nav__items" id="2">
                                <i className="bi bi-cookie light-gray-text text-sm inline-flex"></i>
                                <p className="desktop-menu-color text-xs mr-1">شگفت انگیزها</p>
                            </div>

                            <div className="flex items-center mr-6 cursor-pointer py-2 nav__items" id="3">
                                <i className="bi bi-basket light-gray-text text-sm inline-flex"></i>
                                <p className="desktop-menu-color text-xs mr-1">سوپرمارکت</p>
                            </div>

                            <div className="flex items-center mr-6 cursor-pointer py-2 nav__items" id="4">
                                <i className="bi bi-credit-card-2-back light-gray-text text-sm inline-flex"></i>
                                <p className="desktop-menu-color text-xs mr-1">کارت هدیه</p>
                            </div>

                            <div className="flex items-center mr-6 cursor-pointer py-2 nav__items" id="5">
                                <i className="bi bi-fire light-gray-text text-sm inline-flex"></i>
                                <p className="desktop-menu-color text-xs mr-1">پرفروش ترین ها</p>
                                <span className="mr-5 light-gray-text opacity-40">|</span>
                            </div>

                            <div className="flex items-center mr-3 cursor-pointer py-2 nav__items" id="6">
                                <p className="desktop-menu-color text-xs mr-1">سوالی دارید؟</p>
                            </div>

                            <div className="flex items-center mr-5 cursor-pointer py-2 nav__items" id="7">
                                <p className="desktop-menu-color text-xs mr-1">در دیجی کالا بفروشید!</p>
                            </div>

                        </div>

                        <div className="flex">

                            <div className="flex items-center cursor-pointer py-2 nav__items" id="8">
                                <i className="bi bi-balloon light-gray-text text-sm inline-flex"></i>
                                <p className="desktop-menu-color text-xs text-end">ارسال به تهران، تهران</p>
                            </div>

                        </div>
                    </div>

                    <section className={`nav__red-line-container lttr`}>
                        <div className="nav__red-line-border"></div>
                    </section>

                </div>
                <MegaMenuContainer showMegaMenu={showMegaMenu} setShowMegaMenu={setShowMegaMenu} />
            </nav>
        </>
    );
}






export default memo(DesktopMenuBottom);