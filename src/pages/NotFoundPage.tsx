import { Link } from "react-router-dom";
import "./css/NotFoundPage.css";

export default function NotFoundPage() {
    return (
        <main className="not-found-page">
            <div className="not-found-box">
                <p className="not-found-code">404</p>
                <h1>Không tìm thấy trang</h1>
                <p className="not-found-text">
                    Trang bạn đang tìm có thể đã bị xóa, đổi tên hoặc chưa từng tồn tại.
                </p>

                <div className="not-found-actions">
                    <Link to="/" className="not-found-button">
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </main>
    );
}
