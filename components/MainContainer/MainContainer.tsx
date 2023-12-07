import AmazingProductsCarousel from "./AmazingProductsCarousel/AmazingProductsCarousel";
import AmazingSupermarket from "./AmazingSupermarket/AmazingSupermarket";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import ExpressServicesHub from "./ExpressServicesHub/ExpressServicesHub";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Slider from "./Slider/Slider";



const MainContainer = () => {
    return (
        <main>
            <div className="shadow"></div>
            <Slider/>
            <ExpressServicesHub/>
            <AmazingProductsCarousel/>
            <AmazingSupermarket/>
            <CategorizedProducts/>
            <ShopByCategory/>
        </main>
    );
}

export default MainContainer;