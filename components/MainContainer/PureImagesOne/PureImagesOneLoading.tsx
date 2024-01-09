import { memo } from "react";
import Skeleton from "react-loading-skeleton";




const PureImagesOneLoading = () => {
    return (
        <>
            <section className="pure-images-first-part--loading">
                <div className="container mx-auto px-2">
                    <div className="flex flex-wrap gap-4 justify-between">
                        {
                            Array(4).fill(0)?.map((el, index) => (
                                <section key={index} className="w-[40%] lg:w-[20%] 2xl:w-[15%]">
                                    <figure className="rounded-xl flex justify-center overflow-hidden">
                                        <Skeleton width={201.59} height={151.19} style={{ borderRadius: "12px" }} />
                                    </figure>
                                </section>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(PureImagesOneLoading);