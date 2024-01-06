import Image from "next/image";
import DigikalaOffer from "./DigikalaOffer";
import PopularBrands from "./PopularBrands";







const ShopByCategory = () => {

    const allCategories = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/510816e9ec4cbfad2edbff2763e2059a504e571b_1701193038.png",
            title: "موبایل"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/ba175c709e3cc22e3fd7c65c7c6a21854d1c3765_1701193047.png",
            title: "کالای دیجیتال"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png",
            title: "مد و پوشاک"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/dee082825fa27bf216cc8cf2153745062c29e62d_1701193085.png",
            title: "اسباب بازی، کودک و نوزاد"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/5f3aa7bb8bde7c7433d31025d508ee3afd367773_1701193071.png",
            title: "کالاهای سوپر مارکتی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1701193097.png",
            title: "زیبایی و سلامت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png",
            title: "خانه و آشپزخانه"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/f1ff29c0399fdbeef7cef44bf6ec897f31287449_1701193077.png",
            title: "کتاب، لوازم تحریر و هنر"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/f64a3adf6e327bf1b85ce43449740d974eaaf037_1701193104.png",
            title: "ورزش و سفر"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/a25821d184d092f05383e6039738d2cad25bcbb7_1701193134.png",
            title: "کارت هدیه"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/5421d413c4f0a943cdc1cca473eb15536b13c98f_1701193112.png",
            title: "ابزار آلات و تجهیزات"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/ac63c44ab551dc24421aea53b92686a2f72906ff_1701193119.png",
            title: "خودرو و موتورسیکلت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/c48ab9fc81e7732a617f90eca608b943d4616ff7_1701193126.png",
            title: "محصولات بومی و محلی"
        }
    ];



    return (
        <section className="shop-by-category-container">
            <div className="container mx-auto px-2">
                <div>
                    <h2 className="text-xl font-medium text-center">
                        خرید بر اساس دسته بندی
                    </h2>
                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-4">
                    {
                        allCategories.map((item, index) => (
                            <div key={index} className="w-[30%] lg:w-[12%]">
                                <figure className="flex flex-col items-center">
                                    <Image width={90} height={90} src={item.src} className="my-3" alt="photo" />
                                    <figcaption className="text-xs text-center whitespace-nowrap">{item.title}</figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </div>
                {/* ********************************************************************** */}
                <div className="my-24 flex flex-wrap gap-9 justify-between lg:gap-1">

                    <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                        <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cc09d655334c308bc42009f8020645b88c589472_1701254187.jpg?x-oss-process=image/quality,q_95/format,webp" className="w-full h-full" alt="aks" />
                    </figure>

                    <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                        <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1b0c30dfbcf60131132f78854caf87e7b0bc30b4_1701265164.jpg?x-oss-process=image/quality,q_95/format,webp" className="w-full h-full" alt="aks" />
                    </figure>

                </div>

                {/* ********************************************************************** */}

                <DigikalaOffer />

                {/* ****************************************************************************** */}

                <PopularBrands />

            </div>
        </section>
    );
}

export default ShopByCategory;