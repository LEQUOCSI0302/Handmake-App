import "./header.css";
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* logo ảnh */}
                <a href="/" className="header-logo">
                    <img src="/logo.png" alt="" />
                </a>

                {/* Menu */}
                <nav className="header-menu">
                    <a href="/" className="active">Trang chủ</a>
                    <a href="/gioi-thieu">Giới thiệu</a>
                    <a href="/san-pham">
                        Sản phẩm <span className="menu-arrow"></span>
                    </a>
                    <a href="/blog">Blog</a>
                    <a href="/lien-he">Liên hệ</a>
                    <a href="/thanh-toan">Thanh toán</a>
                </nav>

                {/* Các nút bên phải */}
                <div className="header-actions">
                    <a href="/tim-kiem" aria-label="Tìm kiếm">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="/gio-hang" aria-label="Giỏ hàng">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>

                    <a href="/tai-khoan" aria-label="Tài khoản">
                        <i className="fa-solid fa-user"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}