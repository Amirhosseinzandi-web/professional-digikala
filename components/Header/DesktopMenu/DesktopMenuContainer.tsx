import DesktopMenuBottom from "./DesktopMenuBottom";
import DesktopMenuTop from "./DesktopMenuTop";




const DesktopMenuContainer:React.FC = () => {
    return (
        <>
            <section className="desktop-menu-container w-full fixed bg-white">
                <DesktopMenuTop />
                <DesktopMenuBottom/>
            </section>
        </>
    );
}

export default DesktopMenuContainer;