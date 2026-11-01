import "./HomePage.css";
import {Link} from "react-router-dom";
function HomePage(){
    return(
        <section className="banner-handmake">
            <img src="/images/banner.png" alt="Biển hiệu handmake đồ gỗ"/>
            <Link to="/san-pham" className = "banner-button">
                MUA NGAY
            </Link>
        </section>

    );
}
export default HomePage;