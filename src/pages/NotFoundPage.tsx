import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/NotFoundPage.css";

export default function NotFoundPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [tuKhoa, setTuKhoa] = useState("");

    useEffect(() => {
        const tieuDeCu = document.title;
        document.title = "Không tìm thấy trang | Handmake";
        return () => {
            document.title = tieuDeCu;
        };
    }, []);

    function xuLyTimKiem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const giaTri = tuKhoa.trim();
        if (giaTri === "") {
            navigate("/san-pham");
        } else {
            navigate(`/san-pham?tim=${encodeURIComponent(giaTri)}`);
        }
    }

    return (
        <main className="not-found-page">
            <div className="not-found-box">
                <p className="not-found-code">404</p>
                <h1>Không tìm thấy trang</h1>
                <p className="not-found-text">
                    Trang bạn đang tìm có thể đã bị xóa, đổi tên hoặc chưa từng tồn tại.
                </p>
                <p className="not-found-path">
                    Đường dẫn: <code>{location.pathname}</code>
                </p>

                <form className="not-found-search" onSubmit={xuLyTimKiem}>
                    <input
                        type="text"
                        placeholder="Tìm sản phẩm bạn cần..."
                        aria-label="Tìm sản phẩm"
                        value={tuKhoa}
                        onChange={(e) => setTuKhoa(e.target.value)}
                    />
                    <button type="submit" aria-label="Tìm kiếm">
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </button>
                </form>

                <div className="not-found-actions">
                    <Link to="/" className="not-found-button">
                        Về trang chủ
                    </Link>
                    <Link to="/san-pham" className="not-found-button-outline">
                        Xem sản phẩm
                    </Link>
                </div>
            </div>
        </main>
    );
}
