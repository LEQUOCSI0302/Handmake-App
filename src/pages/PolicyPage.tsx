import { Link } from "react-router-dom";
import "./PolicyPage.css";

export default function PolicyPage() {
    return (
        <main className="policy-page">
            { }
            <nav className="policy-top">
                <Link to="/chinh-sach/dieu-khoan">
                    Điều khoản sử dụng
                </Link>

                <Link to="/chinh-sach/bao-mat">
                    Chính sách bảo mật
                </Link>
            </nav>

            {/* Danh sách chính sách */}
            <section className="policy-community">
                <h1>Chính sách dành cho cộng đồng</h1>

                <div className="policy-list">
                    <Link to="/chinh-sach/nguoi-mua" className="policy-card">
                        <h2>Người mua</h2>
                        <p>Thông tin về mua hàng, vận chuyển và đổi trả.</p>
                    </Link>

                    <Link to="/chinh-sach/nguoi-ban" className="policy-card">
                        <h2>Người bán</h2>
                        <p>Quy định đăng bán sản phẩm và xử lý đơn hàng.</p>
                    </Link>

                    <Link to="/chinh-sach/ben-thu-ba" className="policy-card">
                        <h2>Bên thứ ba</h2>
                        <p>Thông tin về hợp tác và quyền sở hữu nội dung.</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}