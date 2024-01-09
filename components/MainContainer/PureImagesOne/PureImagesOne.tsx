"use client"

import useDataStore from "@/components/Store/CreateSlice";
import Image from "next/image";
import PureImagesOneLoading from "./PureImagesOneLoading";
import { memo } from "react";


const PureImagesOne = () => {

    const { loadingHandler, errorStatus } = useDataStore(state => state)

    const allPictures = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/8058ea1aae6b95ef724356e11acc09c7ff51c66d_1701253928.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "پارتنرشیپ-مای لیدی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/7ab376a9399957fb53682c2b92c6c35d6b3ce954_1701253937.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "پارتنرشیپ-مای لیدی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/98595c5c87356705ff388ae9e785114670a35055_1701254463.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "پارتنرشیپ-مای لیدی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/a487e5e0d29b615218df7e8aa2092ffbe343fa77_1701777408.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "پارتنرشیپ-مای لیدی"
        }
    ];


    return (
        <>
            {
                (loadingHandler || errorStatus) ?
                    <PureImagesOneLoading />
                    :
                    <section className="pure-images-first-part">
                        <div className="container mx-auto px-2">
                            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                                {allPictures.map((el, index) => (
                                    <section key={index} className="w-auto">
                                        <figure className="w-full h-full rounded-xl overflow-hidden">
                                            <Image width={218} height={163} src={el.src} alt={el.alt} className="w-full h-full object-cover max-h-[241.5px]" />
                                        </figure>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </section>
            }
        </>
    );
}

export default memo(PureImagesOne);