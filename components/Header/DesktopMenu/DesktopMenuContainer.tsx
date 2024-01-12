import { memo } from "react";
import DesktopMenuBottom from "./DesktopMenuBottom";
import DesktopMenuTop from "./DesktopMenuTop";



const DesktopMenuContainer: React.FC = () => {
    return (
        <>
            <section className="desktop-menu-container w-full bg-white hidden lg:block">
                <DesktopMenuTop />
                <DesktopMenuBottom />
            </section>
        </>
    );
}

export default memo(DesktopMenuContainer);