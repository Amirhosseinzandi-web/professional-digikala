import Image from "next/image";



const PureImagesThree = () => {
    return (
        <>
            <section className="pure-images-third-part my-8">
                <div className="container mx-auto px-2">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">

                        <figure className="overflow-hidden rounded-lg">
                            <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/362824d41f15cee11bfc30c5c31be8bc237ea760_1704528039.jpg?x-oss-process=image/quality,q_95" className="w-full h-full" alt="picture" />
                        </figure>

                        <figure className="overflow-hidden rounded-lg">
                            <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4f99586add848015000a829457e705916c33c63d_1704800180.jpg?x-oss-process=image/quality,q_95" className="w-full h-full" alt="picture" />
                        </figure>

                    </div>
                </div>
            </section>
        </>
    );
}

export default PureImagesThree;