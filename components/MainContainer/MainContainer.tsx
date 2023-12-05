import AmazingProductsCarousel from "./AmazingProductsCarousel/AmazingProductsCarousel";
import ExpressServicesHub from "./ExpressServicesHub/ExpressServicesHub";
import Slider from "./Slider/Slider";



const MainContainer = () => {
    return (
        <main>
            <Slider/>
            <ExpressServicesHub/>
            <AmazingProductsCarousel/>
        </main>
    );
}

export default MainContainer;