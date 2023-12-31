import { memo } from "react";
import DesktopMenuBottom from "./DesktopMenuBottom";
import DesktopMenuTop from "./DesktopMenuTop";




const DesktopMenuContainer:React.FC = () => {
    return (
        <>
            <section className="desktop-menu-container w-full fixed bg-white z-[100] hidden lg:block">
                <DesktopMenuTop />
                <DesktopMenuBottom/>
            </section>
        </>
    );
}

export default memo(DesktopMenuContainer);