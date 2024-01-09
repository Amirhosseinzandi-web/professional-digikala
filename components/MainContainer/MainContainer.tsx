import AmazingProductsCarousel from "./AmazingProductsCarousel/AmazingProductsCarousel";
import AmazingSupermarket from "./AmazingSupermarket/AmazingSupermarket";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import ExpressServicesHub from "./ExpressServicesHub/ExpressServicesHub";
import DigikalaOffer from "./DigikalaOffer/DigikalaOffer";
import PopularBrands from "./PopularBrands/PopularBrands";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Slider from "./Slider/Slider";
import PureImagesTwo from "./PureImagesTwo/PureImagesTwo";
import PureImagesOne from "./PureImagesOne/PureImagesOne";
import PureImagesThree from "./PureImagesThree/PureImagesThree";



const MainContainer = () => {
    return (
        <main>
            <div className="shadow"></div>
            <Slider />
            <ExpressServicesHub />
            <AmazingProductsCarousel />
            <AmazingSupermarket />
            <PureImagesOne />
            <CategorizedProducts />
            <ShopByCategory />
            <PureImagesTwo />
            <DigikalaOffer />
            <PopularBrands />
            <PureImagesThree/>
        </main>
    );
}

export default MainContainer;