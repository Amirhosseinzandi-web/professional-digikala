import Image from "next/image";
import Digiclub1 from "../../../public/digiclub-1.png"
import Digiclub2 from "../../../public/digiclub-2.png"
import Digiclub3 from "../../../public/digiclub-3.png"



const Digiclub: React.FC = () => {
    return (
        <section className="digiclub-container">
            <div className="lg:container lg:mx-auto lg:px-2">
                <div className="digiclub-container__item lg:rounded-lg p-4 lg:flex lg:gap-6">
                    <div className="flex justify-between lg:items-center lg:w-[30%]">
                        <div>
                            <figure>
                                <Image src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" alt="digiclub" width={120} height={33} />
                            </figure>
                        </div>

                        <div className="flex items-center text-white">
                            <p className="text-xs mt-1">امتیاز شما</p>
                            <span className="mx-1 text-xl font-bold">۱۱۷</span>
                            <figure>
                                <Image src="https://www.digikala.com/statics/img/svg/club-point.svg" alt="digiclub" width={24} height={24} />
                            </figure>
                        </div>
                    </div>

                    <div className="flex gap-1 mt-3 lg:mt-0 w-[93%] justify-center lg:w-[70%]">
                        <div className="bg-white flex flex-col items-center p-1 rounded-tr-lg rounded-br-lg lg:w-full lg:flex-row lg:justify-evenly lg:max-h-[64px] lg:overflow-hidden">
                            <figure>
                                <Image src={Digiclub1} alt="digiclub" width={65} height={65} />
                            </figure>
                            <p className="text-sm font-medium whitespace-nowrap">چرخ و بخت</p>
                            <figure className="mt-2">
                                <Image src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.webp" alt="digiclub" width={122} height={62} />
                            </figure>
                        </div>
                        <div className="bg-white flex flex-col items-center p-1 lg:w-full lg:flex-row lg:justify-evenly lg:max-h-[64px] lg:overflow-hidden">
                            <figure>
                                <Image src={Digiclub2} alt="digiclub" width={65} height={65} />
                            </figure>
                            <p className="text-sm font-medium whitespace-nowrap">ماموریت ها</p>
                            <figure className="mt-2">
                                <Image src="https://www.digikala.com/statics/img/png/digiclub/missions.webp" alt="digiclub" width={122} height={62} />
                            </figure>
                        </div>
                        <div className="bg-white flex flex-col items-center p-1 rounded-tl-lg rounded-bl-lg lg:w-full lg:flex-row lg:justify-evenly lg:max-h-[64px] lg:overflow-hidden">
                            <figure>
                                <Image src={Digiclub3} alt="digiclub" width={65} height={65} />
                            </figure>
                            <p className="text-sm font-medium whitespace-nowrap">جایزه ها</p>
                            <figure className="mt-2">
                                <Image src="https://www.digikala.com/statics/img/png/digiclub/awards.webp" alt="digiclub" width={122} height={62} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Digiclub;