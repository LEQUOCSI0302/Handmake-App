import "./header.css";
import { Link, NavLink } from "react-router-dom";
import useScroll from "./useScroll";

export default function Header() {
    const daCuon = useScroll(30);

    return (
        <header className={`header${daCuon ? " header-scrolled" : ""}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <img src="/logo.png" alt="Handmake" />
                </Link>

                {/* Menu */}
                <nav className="header-menu">
                    <NavLink to="/" end>
                        Trang chủ
                    </NavLink>

                    <NavLink to="/gioi-thieu">
                        Giới thiệu
                    </NavLink>

                    <NavLink to="/san-pham">
                        Sản phẩm
                    </NavLink>

                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/lien-he">Liên hệ</NavLink>
                    <NavLink to="/thanh-toan">Thanh toán</NavLink>
                </nav>

                {/* Nút chức năng */}
                <div className="header-actions">
                    <Link to="/tim-kiem" aria-label="Tìm kiếm">
                        <i
                            className="fa-solid fa-magnifying-glass"
                            aria-hidden="true"
                        />
                    </Link>

                    <Link to="/gio-hang" aria-label="Giỏ hàng">
                        <i
                            className="fa-solid fa-cart-shopping"
                            aria-hidden="true"
                        />
                    </Link>

                    <Link to="/tai-khoan" aria-label="Tài khoản">
                        <i
                            className="fa-solid fa-user"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}