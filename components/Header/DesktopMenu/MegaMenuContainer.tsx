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
        if (showMegaMenu) {
            document.documentElement.style.overflowY = "hidden";
            document.querySelector("main .shadow")?.classList.add("shadow-active")
            if (_nav) {
                _nav.style.padding = "0px 22px";
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
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="1">
                            <i className="bi bi-phone inline-flex"></i>
                            <p className="mr-2">موبایل</p>
                        </div>

                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="2">
                            <i className="bi bi-laptop inline-flex"></i>
                            <p className="mr-2">کالای دیجیتال</p>
                        </div>

                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="3">
                            <i className="bi bi-cookie inline-flex"></i>
                            <p className="mr-2">خانه آشپزخانه</p>
                        </div>

                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="4">
                            <i className="bi bi-person-circle inline-flex"></i>
                            <p className="mr-2">مد و پوشاک</p>
                        </div>

                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="5">
                            <i className="bi bi-heart inline-flex"></i>
                            <p className="mr-2">زیبایی و سلامت</p>
                        </div>

                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="6">
                            <i className="bi bi-card-checklist inline-flex"></i>
                            <p className="mr-2">کارت هدیه</p>
                        </div>
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="7">
                            <i className="bi bi-shop-window inline-flex"></i>
                            <p className="mr-2">کالا های سوپرمارکتی</p>
                        </div>
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="8">
                            <i className="bi bi-pencil inline-flex"></i>
                            <p className="mr-2">کتاب، لوازم تحریر و هنر</p>
                        </div>
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="9">
                            <i className="bi bi-playstation inline-flex"></i>
                            <p className="mr-2">اسباب بازی</p>
                        </div>
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="10">
                            <i className="bi bi-tools inline-flex"></i>
                            <p className="mr-2">ابزار آلات و تجهیزات</p>
                        </div>
                        <div className="mega-menu-nav-items m-5 flex items-center desktop-menu-color text-sm font-medium cursor-pointer" data-status="11">
                            <i className="bi bi-car-front-fill inline-flex"></i>
                            <p className="mr-2">خودرو و موتورسیکلت</p>
                        </div>
                        

                    </section>
                </div>

                <div className="w-[70%] border border-blue-500 mega-menu-content-container">
                    <div data-status="1">آیتم 1</div>
                    <div data-status="2">آیتم 2</div>
                    <div data-status="3">آیتم 3</div>
                    <div data-status="4">آیتم 4</div>
                    <div data-status="5">آیتم 5</div>
                    <div data-status="6">آیتم 6</div>
                    <div data-status="7">آیتم 7</div>
                    <div data-status="8">آیتم 8</div>
                    <div data-status="9">آیتم 9</div>
                    <div data-status="10">آیتم 10</div>
                    <div data-status="11">آیتم 11</div>
                </div>
            </section>

        </>
    );
}






export default memo(MegaMenuContainer);