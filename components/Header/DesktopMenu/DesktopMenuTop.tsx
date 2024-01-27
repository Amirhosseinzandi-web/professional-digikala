"use client"

import useDataStore from "@/components/Store/CreateSlice";
import { ItemsType } from "@/components/Store/CreateSlice.types";
import Image from "next/image";
import { memo, useEffect, useState } from "react";


const DesktopMenuTop: React.FC = () => {

    const { DataList, errorStatus, setModalSearch, openSearchModalDesktop } = useDataStore(state => state)
    const [inputVal, setInputVal] = useState("")
    const [delayVal, setDelayVal] = useState(inputVal)
    const [filteredItems, setFilteredItems] = useState([] as ItemsType[])


    const searchModalHandlerShow = (e: React.MouseEvent) => {
        e.stopPropagation()
        setModalSearch(true)
    }

    const searchModalHandlerClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        setModalSearch(false)
    }

    const inputValHandler = (e: React.ChangeEvent) => {
        setInputVal((e.target as HTMLInputElement).value);
    }


    useEffect(() => {
        const searchModal = document.querySelector(".search-modal") as HTMLElement;
        window.addEventListener("click", (e) => {
            e.stopPropagation()
            if (openSearchModalDesktop && !searchModal.contains(e.target as HTMLElement)) {
                setModalSearch(false)
            }
        })


        setTimeout(() => {
            document.getElementById("inp")?.focus()
        }, 5)
    }, [openSearchModalDesktop])


    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayVal(inputVal)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [inputVal])


    useEffect(() => {
        if (delayVal === "" || delayVal === null) {
            setFilteredItems([])
        } else {
            const filteredList = DataList.filter(el => el.title.toLowerCase().includes(delayVal.toLowerCase().trim()))
            if (filteredList) {
                setFilteredItems(filteredList)
            }
        }

    }, [delayVal])



    return (
        <>
            <div className="desktop-menu-top__bannner h-[60px]">
                <figure className="w-full h-full">
                    <Image src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4cbec63569b366ef5fe430204e80317052653530_1704612197.gif?x-oss-process=image" width={7000} height={60} alt="banner" className="w-full h-full object-cover" />
                </figure>
            </div>
            <section className="hidden desktop-menu-top lg:flex container mx-auto py-4 px-2">
                <div className="flex w-full">
                    <div className="flex w-[73%]">
                        <figure className="flex items-center">
                            <Image src="https://www.digikala.com/statics/img/svg/logo.svg" alt="search" width={145} height={30} />
                        </figure>

                        <div onClick={searchModalHandlerShow} className="relative mr-4 w-full menu-desktop-searchbar cursor-pointer flex items-center">
                            <i className="bi bi-search light-gray-text text-base absolute inline-flex bottom-[8px] right-[10px]"></i>
                            <span className="w-full py-2 pr-14 light-gray-text">جستجو</span>
                            <div style={{ boxShadow: "0px 0px 45px black" }} className={`search-modal  rounded-md ${openSearchModalDesktop ? "search-modal-show" : ""}`}>
                                <section>
                                    <div>
                                        <div className="relative">
                                            <input value={inputVal} maxLength={30} onChange={inputValHandler} id="inp" className="w-full outline-none border border-slate-400 py-2 pr-14" placeholder="جستجو" type="text" />
                                            <i onClick={searchModalHandlerClose} className="bi bi-search text-black font-bold text-base absolute inline-flex bottom-[8px] right-[10px]"></i>
                                        </div>
                                    </div>


                                    <div className="p-10 lttr">
                                        <p className={`${(filteredItems.length) < 1 ? "block" : "hidden"} ${errorStatus ? "hidden" : "block"}`}>nothing to show...</p>
                                        <p className={errorStatus ? "block" : "hidden"}>an error occured</p>
                                        <section className="h-[500px] py-5 px-3 overflow-y-auto">
                                            <div className="flex flex-wrap justify-around gap-3">
                                                {
                                                    filteredItems?.map((item: ItemsType, index) => (
                                                        <div key={index} className="w-[150px] border border-black rounded-lg flex flex-col items-center justify-evenly">
                                                            <div>
                                                                <figure>
                                                                    <Image src={item.image} width={80} height={80} alt="aks" />
                                                                </figure>
                                                            </div>
                                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis my-4 w-[90%]">title : {item.title}</p>
                                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis w-[90%]">price : {item.price} $</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end w-[27%]">
                        <div className="flex items-center">
                            <span><i className="bi bi-person inline-flex text-2xl"></i><i className="bi bi-caret-down inline-flex text-xs translate-y-[-10px]"></i></span>
                            <span className="mx-4 translate-y-[-10%] light-gray-text text-lg">|</span>
                            <span><i className="bi bi-cart inline-flex text-2xl"></i></span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default memo(DesktopMenuTop);