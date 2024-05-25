import Image from "next/image";
import imageOne from "../../../public/landing/pure-images-second-1.gif"
import imageTwo from "../../../public/landing/pure-images-second-2.webp"



const PureImagesTwo = () => {
    return (
        <>
            <section className="pure-images-second-part my-24">
                <div className="container mx-auto px-2">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">

                        <figure className="overflow-hidden rounded-lg">
                            <Image width={452} height={181} src={imageOne} className="w-full h-full" alt="picture" />
                        </figure>

                        <figure className="overflow-hidden rounded-lg">
                            <Image width={452} height={181} src={imageTwo} className="w-full h-full" alt="picture" />
                        </figure>

                    </div>
                </div>
            </section>
        </>
    );
}

export default PureImagesTwo;