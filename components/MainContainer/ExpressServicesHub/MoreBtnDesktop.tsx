"use client"

import Image from "next/image";
import digikalaServicesIcon from "../../../public/digikala-services-icon.png"
import { useEffect } from "react";


type MoreBtnDesktopProps = {
    moreSectionClose: (e: React.MouseEvent) => void
}




const MoreBtnDesktop: React.FC<MoreBtnDesktopProps> = ({ moreSectionClose }) => {

    useEffect(() => {
        const moreSectionDesktop = document.querySelector(".more-section-desktop") as HTMLElement;


        const moreSectionResize = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const maxWidth = 797;
            const maxHeight = 938;

            moreSectionDesktop.style.width = `${Math.min(windowWidth / 2, maxWidth)}px`;
            moreSectionDesktop.style.height = `${Math.min(windowHeight - 200, maxHeight)}px`;

        }
        moreSectionResize();


        const resizeHandler = () => {
            moreSectionResize();
        }


        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }


    }, [])


    return (
        <>
            <section className="more-section-desktop hidden lg:block rounded-2xl overflow-hidden 2xl:w-[750px]">
                <div className="p-3 h-[10%]">
                    <div className="flex justify-between items-center border-bottom-gray">
                        <div className="flex items-center">
                            <figure>
                                <Image src={digikalaServicesIcon} alt="search" width={35} height={35} />
                            </figure>
                            <p className="font-bold text-base">خدمات دیجی کالا</p>
                        </div>
                        <div onClick={moreSectionClose}><i className="bi bi-x-lg cursor-pointer inline-flex"></i></div>
                    </div>
                </div>
                {/* *************************************************************** */}
                <div className="overflow-y-auto h-[90%]">
                    <div className="grid gap-4 mt-12 w-[95%] mx-auto" style={{gridTemplateColumns: "repeat(6, minmax(0, 1fr))"}}>
                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/a5e92320101910c6bd31f816e22d35648085af19_1703192218.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">هر خرید یک شانس</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/71ddd528947120bca600a58992cdbcfd125363fc_1703333411.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">حراج سر ماه</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/b2e90cbbf94cf0f52acfcb2cb8d60fa86dfe3147_1703193148.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">کد تخفیف ویژه</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">گیم نت</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">دیجی پلاس</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">ارسال سریع</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/44f0cf40d5aa1c433866d47976cc0c6e82c86823_1648896970.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">دیجی کلاب</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/6b21cc5a4ebe6332b778a2f4725ed3fdaa78e014_1673693837.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">کارت هدیه</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/0dadc9df193553899e7a1c9f057cdbebe8b472ab_1700040020.jpg" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">فروشنده شوید</figcaption>
                            </figure>
                        </div>

                        <div>
                            <figure className="flex flex-col items-center">
                                <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/e6b208008382bf5035aec1a1f8541630ebd0d977_1695202395.png" alt="pic" width={50} height={50} />
                                <figcaption className="text-xs font-medium mt-2 desktop-menu-color text-center">شیوه های ارسال</figcaption>
                            </figure>
                        </div>

                    </div>


                    <div className="p-3">
                        <div className="my-10"><p className="light-gray-text font-medium text-sm">سرویس‌های گروه دیجی‌کالا</p></div>
                        <div className="flex flex-wrap justify-between gap-3">

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">دیجی‌کالا جت</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">خرید فوری از سوپرمارکت های اطراف</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">دریافت وام</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">خرید قسطی گوشی موبایل ، لپ تاپ ، طلا و لوازم خانگی</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1703323478.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">حراج استایل</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2"></p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/425c8f55c9bb5ad8e860bdc9f82421ce4fcc18de_1703192837.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">سوپر مارکت</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">خرید سوپرمارکتی</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/934a12850c05efdec1969aff883d107cc600a7b3_1648896993.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">پیندو</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">ثبت آگهی برای کالا و خدمات</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">خرید عمده و سازمانی</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">خرید عمده و سازمانی انواع کالا</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/3e870ff8c78bd76061a920c29e346027809817f8_1648896950.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">فیدیبو</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">خرید کتاب و دانلود کتاب الکترونیکی</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/17bb6daa07ae2ec11867fb7320ed6f79b26f1f4b_1666724993.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">دیجی کالا مهر</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">به مسیر تازه مهربانی بیا</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/b9f37d8283afd3a309e30756a38c3f879453262a_1668942073.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">بومی و محلی</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">عرضه محصولات محلی و دست ساز</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                            <div className="w-[48%] flex justify-between p-3 border rounded-xl">
                                <div className="flex">
                                    <div><figure><Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1693815145.png" alt="pic" width={50} height={50} /></figure></div>
                                    <div className="flex flex-col">
                                        <p className="similar-to-black font-medium text-sm pr-2">دیجی کالا سرویس</p>
                                        <p className="light-gray-text text-xs font-medium pr-2 mt-2">گارانتی و خدمات پس از فروش دیجی‌کالا</p>
                                    </div>
                                </div>
                                <div><i className="bi bi-arrow-left inline-flex light-gray-text text-2xl"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MoreBtnDesktop;