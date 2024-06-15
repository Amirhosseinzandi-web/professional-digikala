"use client"

import useDataStore from "@/components/Store/CreateSlice";
import { memo, useEffect, useState } from "react";

type propsType = {
    showMegaMenu: boolean
    setShowMegaMenu: Function
}


const MegaMenuContainer: React.FC<propsType> = ({ showMegaMenu, setShowMegaMenu }) => {
    const [prevVal, setPrevVal] = useState(0)
    const [newVal, setNewVal] = useState(0)
    const { setModalSearch, openSearchModalDesktop, showMegaMenuZustand } = useDataStore(state => state)

    useEffect(() => {
        document.querySelector(".mega-menu-nav-container .mega-menu-nav-items:nth-of-type(1)")?.classList.add("active-menu");
        document.querySelector(".mega-menu-content-container div:nth-of-type(1)")?.classList.add("show-menu");


        const setActiveMenu = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
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
        }


        document.querySelectorAll(".mega-menu-nav-container .mega-menu-nav-items")?.forEach((el) => {

            (el as HTMLElement).addEventListener("mouseenter", setActiveMenu)
        });


        return () => {

            document.querySelectorAll(".mega-menu-nav-container .mega-menu-nav-items")?.forEach((el) => {
                (el as HTMLElement).removeEventListener("mouseenter", setActiveMenu)
            });
        }
    }, [])

    // **********************************************************************************

    useEffect(() => {

        const HandleScroll = () => {
            setNewVal(document.documentElement.scrollTop);
            // setShowMegaMenu(false)
        }

        window.addEventListener("scroll", HandleScroll)

        return () => {
            window.removeEventListener("scroll", HandleScroll)
        }

    }, [])

    // **********************************************************************************
    useEffect(() => {
        const shadow = document.querySelector(".shadow") as HTMLElement;
        let _nav = document.querySelector(".nav") as HTMLElement;

        setPrevVal(newVal);


        if (showMegaMenuZustand === false) {
            if (newVal > 550) {

                if (prevVal < newVal) {
                    setTimeout(() => {
                        _nav.classList.add("nav--reduce-height")
                        _nav.classList.remove("nav--border-top")
                    }, 200)
                } else {
                    setTimeout(() => {
                        _nav.classList.remove("nav--reduce-height")
                        _nav.classList.add("nav--border-top")
                    }, 200)
                }

            }
        }

        // ***************************************************************

        if (showMegaMenu) {
            shadow.classList.add("dark--mode");
            _nav.style.overflow = "unset";
            setModalSearch(false)

        } else {
            shadow.classList.remove("dark--mode");
            _nav.style.overflow = "hidden"
        }

    }, [newVal, showMegaMenu])




    return (
        <>
            <section className={`mega-menu-container p-3 ${showMegaMenu ? "flex" : "hidden"} `} onMouseEnter={() => setShowMegaMenu(true)} onMouseLeave={() => setShowMegaMenu(false)}>
                <div className="w-[30%] border">
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

                <div className="w-[70%] border mega-menu-content-container p-4">
                    <div data-status="1" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                        </section>
                        <section>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                        </section>
                        <section>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                        </section>
                        <section>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                            <p>item1</p>
                        </section>
                    </div>

                    <div data-status="2" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                        </section>
                        <section>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                        </section>
                        <section>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                        </section>
                        <section>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                            <p>item2</p>
                        </section>
                    </div>
                    <div data-status="3" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                        </section>
                        <section>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                        </section>
                        <section>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                        </section>
                        <section>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                            <p>item3</p>
                        </section>
                    </div>
                    <div data-status="4" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                        </section>
                        <section>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                        </section>
                        <section>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                        </section>
                        <section>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                            <p>item4</p>
                        </section>
                    </div>
                    <div data-status="5" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                        </section>
                        <section>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                        </section>
                        <section>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                        </section>
                        <section>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                            <p>item5</p>
                        </section>
                    </div>
                    <div data-status="6" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                        </section>
                        <section>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                        </section>
                        <section>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                        </section>
                        <section>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                            <p>item6</p>
                        </section>
                    </div>
                    <div data-status="7" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                        </section>
                        <section>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                        </section>
                        <section>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                        </section>
                        <section>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                            <p>item7</p>
                        </section>
                    </div>
                    <div data-status="8" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                        </section>
                        <section>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                        </section>
                        <section>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                        </section>
                        <section>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                            <p>item8</p>
                        </section>
                    </div>
                    <div data-status="9" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                        </section>
                        <section>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                        </section>
                        <section>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                        </section>
                        <section>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                            <p>item9</p>
                        </section>
                    </div>
                    <div data-status="10" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                        </section>
                        <section>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                        </section>
                        <section>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                        </section>
                        <section>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                            <p>item10</p>
                        </section>
                    </div>
                    <div data-status="11" className="flex gap-5 justify-evenly">
                        <section>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                        </section>
                        <section>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                        </section>
                        <section>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                        </section>
                        <section>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                            <p>item11</p>
                        </section>
                    </div>
                </div>
            </section>

        </>
    );
}






export default memo(MegaMenuContainer);