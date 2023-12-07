import Image from "next/image";







const ShopByCategory = () => {
    return (
        <section className="shop-by-category-container">
            <div className="container mx-auto p-3">
                <div>
                    <h2 className="text-xl font-medium text-center">
                        خرید بر اساس دسته بندی
                    </h2>
                </div>

                <div className="flex flex-wrap mt-3 justify-around gap-5">

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/510816e9ec4cbfad2edbff2763e2059a504e571b_1701193038.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">موبایل</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">مد و پوشاک</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/dee082825fa27bf216cc8cf2153745062c29e62d_1701193085.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">اسباب بازی، کودک و نوزاد</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/5f3aa7bb8bde7c7433d31025d508ee3afd367773_1701193071.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">کالاهای سوپر مارکتی</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1701193097.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">زیبایی و سلامت</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">خانه و آشپزخانه</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/f1ff29c0399fdbeef7cef44bf6ec897f31287449_1701193077.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">کتاب، لوازم تحریر و هنر</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/f64a3adf6e327bf1b85ce43449740d974eaaf037_1701193104.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">ورزش و سفر</figcaption>
                        </figure>
                    </div>

                    <div className="w-[30%]">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/c48ab9fc81e7732a617f90eca608b943d4616ff7_1701193126.png" className="my-3" alt="photo" />
                            <figcaption className="text-xs text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">محصولات بهداشتی</figcaption>
                        </figure>
                    </div>

                </div>

                <div className="my-24 flex flex-wrap gap-9 lg:justify-evenly lg:gap-1">

                    <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                        <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cc09d655334c308bc42009f8020645b88c589472_1701254187.jpg?x-oss-process=image/quality,q_95/format,webp" className="w-full h-full" alt="aks" />
                    </figure>

                    <figure className="overflow-hidden rounded-lg w-full lg:w-[45%]">
                        <Image width={452} height={181} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1b0c30dfbcf60131132f78854caf87e7b0bc30b4_1701265164.jpg?x-oss-process=image/quality,q_95/format,webp" className="w-full h-full" alt="aks" />
                    </figure>

                </div>

                {/* ********************************************************************** */}

                <div className="py-5">
                    <div>
                        <h2 className="text-xl font-medium text-center">
                            پیشنهاد دیجی‌کالا
                        </h2>
                    </div>

                    <div className="flex flex-wrap mt-3 justify-around gap-5 border border-gray-300 rounded-lg">

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">گوشی موبایل</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/fc93220eb5f822eb5cc93c3812c07fbd434a2fa1_1675534585.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">ساعت هوشمند</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/7feb4cb3c37a28289c1bbd7d24f06b1dca5caa4d_1695733063.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">لپ تاپ و اولترابوک</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/d1476a05bc84a98521a53fad140efa060a6c1bf9_1605099191.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">کنسول خانگی</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1701193097.png" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">زیبایی و سلامت</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">خانه و آشپزخانه</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/f1ff29c0399fdbeef7cef44bf6ec897f31287449_1701193077.png" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">کتاب، لوازم تحریر و هنر</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/f64a3adf6e327bf1b85ce43449740d974eaaf037_1701193104.png" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">ورزش و سفر</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-categories/c48ab9fc81e7732a617f90eca608b943d4616ff7_1701193126.png" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">محصولات بهداشتی</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/154366.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">بخاری برقی</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/73cff44507108a902b0d128e02f78524af0690eb_1641910933.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">مکمل ورزشی و تناسب اندام</figcaption>
                            </figure>
                        </div>
                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/19e5fcf7184fb562ce80d3b4fc846037ebff45b5_1692097050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">هدفون، هدست و هندزفری</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/56e275dac1648915a8eb621ed818890220ae5608_1602679367.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">مکمل دارویی</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/5f25267956b47517b78356231977554803d11218_1693391335.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">لامپ و چراغ</figcaption>
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[15%]">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-products/343d9a4045a1f213bb565d4c59562092649717f1_1608126754.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60" className="my-3" alt="photo" />
                                <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">کاغذ</figcaption>
                            </figure>
                        </div>

                    </div>
                </div>

                {/* ****************************************************************************** */}

                <div className="py-5">
                    <div>
                        <h2 className="text-xl font-medium text-center">
                            محبوب ترین برندها
                        </h2>
                    </div>

                    <div className="flex flex-wrap mt-3 justify-around gap-5 border border-gray-300 rounded-lg">

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/100012423.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                            </figure>
                        </div>

                        <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                            <figure className="flex flex-col items-center">
                                <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/3280.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                            </figure>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default ShopByCategory;