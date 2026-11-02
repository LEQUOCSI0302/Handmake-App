import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Điền thông tin cửa hàng sau dấu : */}
                <section className="footer-contact">
                    <h2 className="footer-title">Thông tin liên hệ</h2>

                    <p>Địa chỉ: </p>
                    <p>Email: </p>
                    <p>Hotline: </p>
                    <p>Website: </p>

                    <h3 className="footer-payment-title">
                        Phương thức thanh toán
                    </h3>

                    <div className="footer-payment">
                        {/* Thêm phương thức thanh toán tại đây */}
                    </div>
                </section>

                {/* Chính sách */}
                <section className="footer-policy">
                    <h2 className="footer-title">Chính sách</h2>

                    <ul>
                        <li>
                            <Link to="/gioi-thieu">Về chúng tôi</Link>
                        </li>

                        <li>
                            <Link to="/chinh-sach-doi-tra">
                                Chính sách đổi trả hàng
                            </Link>
                        </li>

                        <li>
                            <Link to="/chinh-sach-bao-mat">
                                Chính sách bảo mật
                            </Link>
                        </li>

                        <li>
                            <Link to="/lien-he">Góp ý, Khiếu nại</Link>
                        </li>

                        <li>
                            <Link to="/van-chuyen-thanh-toan">
                                Vận chuyển và thanh toán
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Kết nối */}
                <section className="footer-connect">
                    <h2 className="footer-title">
                        Kết nối với
                        <br />
                        chúng tôi
                    </h2>

                    <div className="footer-social">
                        {/* Thêm liên kết mạng xã hội tại đây */}
                    </div>

                    <div className="footer-logo">
                        {/* Thêm ảnh logo tại đây */}
                    </div>
                </section>
            </div>
        </footer>
    );
}