"use client"


import useDataStore from "@/components/Store/CreateSlice";
import { ItemsType } from "@/components/Store/CreateSlice.types";
import Image from "next/image";
import { useState, useEffect } from "react";



const MobileMenu: React.FC = () => {
    const [searchToggleBox, setSearchToggleBox] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const [filteredItems, setFilteredItems] = useState([] as ItemsType[])
    const { DataList } = useDataStore(state => state)


    useEffect(() => {
        let searchBoxElem = document.querySelector(".serch-box-mobile-toggle")!
        if (searchBoxElem) {
            if (searchToggleBox) {
                document.documentElement.style.overflowY = "hidden";
                (document.querySelector(".searchBoxInp") as HTMLInputElement).focus()
            } else {
                document.documentElement.style.overflowY = "auto"
            }
        }

    }, [searchToggleBox])



    const inputValHandler = (e: React.ChangeEvent) => {
        setInputVal((e.target as HTMLInputElement).value)
    }


    useEffect(() => {
        if (inputVal === "" || inputVal === null) {
            setFilteredItems([])
        } else {
            const filteredList = DataList.filter(el => el.title.toLowerCase().includes(inputVal.toLowerCase().trim()))
            if (filteredList) {
                setFilteredItems(filteredList)
            }
        }
    }, [inputVal])

    return (
        <>
            <section onClick={() => setSearchToggleBox(true)} className="p-2 mobile-menu-container z- lg:hidden">
                <div className="flex items-center">
                    <div className="flex items-center w-fit px-2">
                        <i className="bi bi-search light-gray-text text-lg"></i>
                        <p className="mx-3 text-sm light-gray-text font-medium">جستجو در</p>
                        <figure>
                            <Image src="https://www.digikala.com/statics/img/svg/digi.svg" alt="search" width={90} height={24} />
                        </figure>
                    </div>
                </div>
            </section>

            <section className={`serch-box-mobile-toggle ${searchToggleBox ? "serch-box-mobile-toggle-up" : "serch-box-mobile-toggle-down"}`}>
                <div className="py-4 px-4">
                    <div>
                        <i onClick={() => setSearchToggleBox(false)} className="bi bi-arrow-right cursor-pointer"></i>
                        <input autoFocus maxLength={50} value={inputVal} onChange={inputValHandler} className="searchBoxInp m-2 border w-[94%] pr-[40px]" type="text" placeholder="جستجو..." />
                    </div>
                    {/* **************************************************************** */}

                    <section className="mt-10 mobile-menu-search-items lttr h-[700px] overflow-y-auto">
                        <div className="flex flex-wrap justify-around gap-4">
                            <p className={`${(filteredItems.length) < 1 ? "block" : "hidden"} ${DataList.length < 1 ? "hidden" : "block"}`}>nothing to show...</p>
                            {
                                filteredItems?.map((item, ind) => (
                                    <div key={ind} className="w-[120px] border border-black rounded-lg flex flex-col items-center justify-evenly p-2">
                                        <div>
                                            <figure>
                                                <Image src={item.image} width={50} height={50} alt="aks" />
                                            </figure>
                                        </div>
                                        <p className="overflow-hidden whitespace-nowrap text-ellipsis my-4 w-[90%]">title : {item.title}</p>
                                        <p className="overflow-hidden whitespace-nowrap text-ellipsis w-[90%]">price : {item.price} $</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>


                    {/* ************************************************************************ */}
                </div>
            </section>
            <div className={`bg-shadow ${searchToggleBox ? "block" : "hidden"}`}></div>
        </>
    );
}

export default MobileMenu;