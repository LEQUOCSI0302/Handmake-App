import "./home.css";
import "./benefits.css";

// Các lợi ích khi mua hàng.
// Mỗi lợi ích có: icon (class của Font Awesome), tiêu đề và mô tả ngắn.
const benefits = [
    { icon: "fa-solid fa-truck-fast", title: "Miễn phí vận chuyển", content: "Cho đơn hàng từ 300.000₫" },
    { icon: "fa-solid fa-rotate-left", title: "Đổi trả trong 7 ngày", content: "Nếu sản phẩm bị lỗi, nứt vỡ" },
    { icon: "fa-solid fa-headset", title: "Hỗ trợ trực tuyến", content: "8:00 – 21:00 tất cả các ngày" },
    { icon: "fa-solid fa-ticket", title: "Voucher mỗi tháng", content: "Ưu đãi riêng cho thành viên" },
];

export default function Benefits() {
    return (
        <section className="home-section home-section-cream benefits">
            <div className="home-container">
                <div className="benefit-list">
                    {benefits.map((item) => (
                        <div className="benefit-item" key={item.title}>
                            <span className="benefit-icon">
                                <i className={item.icon} aria-hidden="true"></i>
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
