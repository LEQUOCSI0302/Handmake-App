import "./HomePage.css";
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Benefits from "../components/home/Benefits";
import CustomOrderBanner from "../components/home/CustomOrderBanner";

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
            <FeaturedProducts />
            <Benefits />
            <CustomOrderBanner />
        </>
    );
}
export default HomePage;
