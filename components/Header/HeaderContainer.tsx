import DesktopMenuContainer from "./DesktopMenu/DesktopMenuContainer";
import MobileMenu from "./MobileMenu/MobileMenu";
import Image from "next/image";



const HeaderContainer: React.FC = () => {
    return (
        <>
            <div className="desktop-menu-top__bannner h-[40px] lg:hidden">
                <figure className="w-full h-full">
                    <Image src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4cbec63569b366ef5fe430204e80317052653530_1704612197.gif?x-oss-process=image" width={7000} height={60} alt="banner" className="w-full h-full object-cover" />
                </figure>
            </div>
            <header className="sticky top-0 left-0 w-full bg-white lg:fixed z-[100]" style={{ boxShadow: "0 0 45px rgba(0,0,0,.55)" }}>
                <MobileMenu />
                <DesktopMenuContainer />
            </header>
        </>
    );
}

export default HeaderContainer;