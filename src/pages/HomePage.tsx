import "./HomePage.css";
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Benefits from "../components/home/Benefits";
import CustomOrderBanner from "../components/home/CustomOrderBanner";
import Marketplaces from "../components/home/Marketplaces";
import BlogSection from "../components/home/BlogSection";
import ValueProduct from "../components/home/valueOfProduct.tsx";
function HomePage(){
    return(
        <>
            <section className="banner-handmake">
                <img src="/images/banner.png" alt="Biển hiệu handmake đồ gỗ"/>
                <Link to="/san-pham" className = "banner-button">
                    MUA NGAY
                </Link>
            </section>

            {/* Các khu bên dưới banner */}
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
