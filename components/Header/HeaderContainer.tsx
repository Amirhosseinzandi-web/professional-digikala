import DesktopMenuContainer from "./DesktopMenu/DesktopMenuContainer";
import MobileMenu from "./MobileMenu/MobileMenu";
import Image from "next/image";



const HeaderContainer: React.FC = () => {
    return (
        <header>
            {/* <div className="desktop-menu-top__bannner h-[60px]">
                <figure className="w-full h-full">
                    <Image src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4cbec63569b366ef5fe430204e80317052653530_1704612197.gif?x-oss-process=image" width={7000} height={60} alt="banner" className="w-full h-full object-cover" />
                </figure>
            </div> */}
            <MobileMenu />
            <DesktopMenuContainer />
        </header>
    );
}

export default HeaderContainer;