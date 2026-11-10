import { Link } from "react-router-dom";
import "./css/ProductListPage.css";

export default function ProductListPage() {
    return (
        <main className="product-page">
            <div className="product-page-banner">
                <h1>Sản phẩm</h1>
                <p>
                    <Link to="/">Trang chủ</Link> / Sản phẩm
                </p>
            </div>

            <div className="product-page-container">
                <p className="product-page-message">Chưa có sản phẩm.</p>
            </div>
        </main>
    );
}
