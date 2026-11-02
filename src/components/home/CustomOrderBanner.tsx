import { Link } from "react-router-dom";
import "./home.css";
import "./customOrderBanner.css";

// 3 bước đặt làm đồ gỗ theo yêu cầu
const steps = [
    {
        icon: "fa-solid fa-pen-ruler",
        title: "Chọn mẫu",
        content: "Chọn sản phẩm có sẵn hoặc gửi ý tưởng, kích thước bạn muốn.",
    },
    {
        icon: "fa-solid fa-signature",
        title: "Khắc tên, logo",
        content: "Gửi tên, lời nhắn hoặc logo để khắc lên mặt gỗ.",
    },
    {
        icon: "fa-solid fa-box-open",
        title: "Nhận hàng",
        content: "Hoàn thiện trong 5–7 ngày, đóng gói cẩn thận và giao tận nơi.",
    },
];

export default function CustomOrderBanner() {
    return (
        <section className="home-section custom-order">
            <div className="home-container custom-order-inner">
                {/* Bên trái: lời giới thiệu và nút */}
                <div className="custom-order-text">
                    <p className="custom-order-label">Làm theo yêu cầu</p>
                    <h2>Đồ gỗ khắc tên, món quà dành riêng cho bạn</h2>
                    <p>
                        Khay, thớt, hộp gỗ khắc tên hoặc logo, phù hợp làm quà tặng
                        người thân, quà cưới hay quà doanh nghiệp.
                    </p>
                    <Link to="/lien-he" className="custom-order-button">
                        Đặt làm ngay
                    </Link>
                </div>

                {/* Bên phải: 3 bước */}
                <div className="custom-order-steps">
                    {steps.map((step, index) => (
                        <div className="custom-order-step" key={step.title}>
                            <span className="custom-order-number">{index + 1}</span>
                            <i className={step.icon} aria-hidden="true"></i>
                            <h3>{step.title}</h3>
                            <p>{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
