import Image from "next/image";



const DesktopMenuTop:React.FC = () => {
    return (
        <section className="hidden desktop-menu-top lg:flex container mx-auto py-4 px-3">
            <div className="flex w-full">
                <div className="flex w-[73%]">
                    <figure className="flex items-center">
                        <Image src="https://www.digikala.com/statics/img/svg/logo.svg" alt="search" width={145} height={30} />
                    </figure>
                    <div className="relative mr-4 w-full">
                        <i className="bi bi-search light-gray-text text-lg absolute inline-flex bottom-[6px] right-[10px]"></i>
                        <input placeholder="جستجو" type="text" className="w-full p-2 light-gray-text" />
                    </div>
                </div>

                <div className="flex justify-end w-[27%] amir">
                    <div className="flex items-center">
                        <span><i className="bi bi-person inline-flex text-2xl"></i><i className="bi bi-caret-down inline-flex text-xs translate-y-[-10px]"></i></span>
                        <span className="mx-4 translate-y-[-10%] light-gray-text text-lg">|</span>
                        <span><i className="bi bi-cart inline-flex text-2xl"></i></span>
                    </div>
                </div>
            </div>

            <nav></nav>
        </section>
    );
}

export default DesktopMenuTop;