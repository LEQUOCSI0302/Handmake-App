import "./HomePage.css";
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Benefits from "../components/home/Benefits";

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
        </>
    );
}
export default HomePage;
