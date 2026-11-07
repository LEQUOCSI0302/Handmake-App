import "./css/HomePage.css";
import {Link} from "react-router-dom";
import FeaturedProducts from "./home/FeaturedProducts";
import Benefits from "./home/Benefits";
import CustomOrderBanner from "./home/CustomOrderBanner";
import Marketplaces from "./home/Marketplaces";
import BlogSection from "./home/BlogSection";
import ValueProduct from "./home/valueOfProduct.tsx";
function HomePage(){
    return(
        <>
            <section className="banner-handmake">
                <img src="/images/banner.png" alt="Biển hiệu handmake đồ gỗ"/>
                <Link to="/san-pham" className = "banner-button">
                    MUA NGAY
                </Link>
            </section>

            <ValueProduct />
            <FeaturedProducts />
            <Benefits />
            <CustomOrderBanner />
            <Marketplaces />
            <BlogSection />
        </>
    );
}
export default HomePage;
