import DesktopMenuContainer from "./DesktopMenu/DesktopMenuContainer";
import MobileMenu from "./MobileMenu/MobileMenu";



const HeaderContainer:React.FC = () => {
    return (
        <header>
            <MobileMenu/>
            <DesktopMenuContainer/>
        </header>
    );
}

export default HeaderContainer;