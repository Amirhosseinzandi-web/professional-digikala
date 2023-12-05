"use client"

import Image from "next/image";
import { useState } from "react"
import aks from "../../../public/loading.gif"




const Slider = () => {
    const [loading, setLoading] = useState(true)



    return (
        <section className="slider container mx-auto mt-[60px] lg:mt-[111px]">
            <figure className="w-full">
            <Image className={`loading mx-auto ${loading ? "block" : "hidden"}`} priority={true} src={aks} alt="loading" width={500} height={500} />

            <Image src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a9af4d27083f39d25d7b84c77660071afbc22802_1701632316.jpg?x-oss-process=image/quality,q_95/format,webp" priority={true} alt="slider" width={1262} height={300} onLoad={() => setTimeout(() => setLoading(false), 2000)} className={loading ? "hidden" : "block"}/>
            </figure>
        </section>
    );
}

export default Slider;