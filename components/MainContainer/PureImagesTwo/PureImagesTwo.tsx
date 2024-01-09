import Image from "next/image";




const PureImagesTwo = () => {
    return (
        <>
            <section className="pure-images-second-part my-24">
                <div className="container mx-auto px-2">
                    <div className="flex flex-wrap gap-9 justify-between lg:gap-1">

                        <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                            <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/792b26d05b1af23cc09a37969d8739caae938b01_1704268606.gif?x-oss-process=image" className="w-full h-full" alt="picture" />
                        </figure>

                        <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                            <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1b0c30dfbcf60131132f78854caf87e7b0bc30b4_1701265164.jpg?x-oss-process=image/quality,q_95/format,webp" className="w-full h-full" alt="picture" />
                        </figure>

                    </div>
                </div>
            </section>
        </>
    );
}

export default PureImagesTwo;