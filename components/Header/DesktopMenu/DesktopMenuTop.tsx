"use client"

import useDataStore from "@/components/Store/CreateSlice";
import { ItemsType } from "@/components/Store/CreateSlice.types";
import Image from "next/image";
import { useEffect, useState } from "react";


const DesktopMenuTop: React.FC = () => {

    const { DataList } = useDataStore(state => state)
    const [flag, setFlag] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const [filteredItems, setFilteredItems] = useState([] as ItemsType[])


    const searchModalHandlerShow = (e: React.MouseEvent) => {
        e.stopPropagation()
        setFlag(true)
    }

    const searchModalHandlerClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        setFlag(false)
    }

    const inputValHandler = (e: React.ChangeEvent) => {
        setInputVal((e.target as HTMLInputElement).value)
    }


    useEffect(() => {
        window.addEventListener("click", (e) => {
            e.stopPropagation()
            if (flag) {

                setFlag(false)
            }
        })
    }, [flag])



    useEffect(() => {
        if (inputVal === "" || inputVal === null) {
            setFilteredItems([])
        } else {
            const filteredList = DataList.filter(el => el.title.toLowerCase().includes(inputVal.toLowerCase().trim()))
            if (filteredList) {
                setFilteredItems(filteredList)
            }
        }
        // console.log(filteredItems);

    }, [inputVal])



    return (
        <section className="hidden desktop-menu-top lg:flex container mx-auto py-4 px-3">
            <div className="flex w-full">
                <div className="flex w-[73%]">
                    <figure className="flex items-center">
                        <Image src="https://www.digikala.com/statics/img/svg/logo.svg" alt="search" width={145} height={30} />
                    </figure>

                    <div onClick={searchModalHandlerShow} className="relative mr-4 w-full menu-desktop-searchbar cursor-pointer flex items-center">
                        <i className="bi bi-search light-gray-text text-base absolute inline-flex bottom-[8px] right-[10px]"></i>
                        <span className="w-full py-2 pr-14 light-gray-text">جستجو</span>
                        <div className={`search-modal ${flag ? "search-modal-show" : ""}`}>
                            <section>
                                <div>
                                    <div className="border border-red-400 relative">
                                        <input value={inputVal} onChange={inputValHandler} className="border border-blue-500 w-full outline-none py-2 pr-14" placeholder="جستجو" type="text" />
                                        <i className="bi bi-search text-black font-bold text-base absolute inline-flex bottom-[8px] right-[10px]"></i>
                                    </div>
                                </div>

                                <button onClick={searchModalHandlerClose}>close</button>

                                <div>
                                    <p className={`${inputVal.length > 0 && (filteredItems.length) < 1 ? "block" : "hidden"} ${DataList.length < 1 ? "hidden" : "block"}`}>not found</p>
                                    <p className={DataList.length < 1 ? "block" : "hidden"}>an error occured</p>
                                    <ul>
                                        {
                                            filteredItems?.map((item: ItemsType, index) => (
                                                <li>
                                                    <p>{item.title}</p>
                                                    <Image src={item.image} width={100} height={100} alt="aks" />
                                                </li>
                                            ))
                                        }
                                    </ul>
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

            <nav></nav>
        </section>
    );
}

export default DesktopMenuTop;