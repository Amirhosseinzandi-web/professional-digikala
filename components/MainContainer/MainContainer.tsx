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
import LastVisitsOne from "./LastVisitsOne/LastVisitsOne";
import DigiPlus from "./DigiPlus/DigiPlus";
import Digiclub from "./Digiclub/Digiclub";
import LastVisitsTwo from "./LastVisitsTwo/LastVisitsTwo";
import SpecialProducts from "./SpecialProducts/SpecialProducts";
import TopSellerProducts from "./TopSellerProducts/TopSellerProducts";
import HottestLastFewHours from "./HottestLastFewHours/HottestLastFewHours";
import ReadingsPart from "./ReadingsPart/ReadingsPart";



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
            <PureImagesThree />
            <LastVisitsOne />
            <DigiPlus />
            <Digiclub />
            <TopSellerProducts />
            <LastVisitsTwo />
            <SpecialProducts />
            <HottestLastFewHours />
            <ReadingsPart />
        </main>
    );
}

export default MainContainer;