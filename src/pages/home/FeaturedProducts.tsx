import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { getProducts } from "../../services/productService";
import ProductCard from "../ProductCard";
import SectionTitle from "./SectionTitle";
import "./home.css";
import "./featuredProducts.css";

// Số sản phẩm hiện ra ở trang chủ
const SO_SAN_PHAM = 8;

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");
    const [danhMuc, setDanhMuc] = useState("Tất cả");

    // Gọi API 1 lần khi khu này hiện ra
    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch(() => setLoi("Không tải được sản phẩm. Bạn kiểm tra Mockoon đã chạy chưa nhé."))
            .finally(() => setDangTai(false));
    }, []);

    // Danh sách danh mục lấy từ dữ liệu, bỏ trùng bằng Set
    const cacDanhMuc = ["Tất cả", ...new Set(products.map((p) => p.category))];

    // Lọc theo danh mục đang chọn, xếp theo đánh giá cao nhất, lấy 8 sản phẩm
    const sanPhamHienThi = products
        .filter((p) => danhMuc === "Tất cả" || p.category === danhMuc)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, SO_SAN_PHAM);

    return (
        <section className="home-section">
            <div className="home-container">
                <SectionTitle
                    title="Sản phẩm nổi bật"
                    subtitle="Những món đồ gỗ được khách hàng yêu thích nhất"
                />

                {dangTai && <p className="home-message">Đang tải sản phẩm...</p>}
                {loi && <p className="home-message home-message-error">{loi}</p>}

                {!dangTai && !loi && (
                    <>
                        {/* Các nút lọc theo danh mục */}
                        <div className="category-tabs">
                            {cacDanhMuc.map((ten) => (
                                <button
                                    key={ten}
                                    type="button"
                                    className={ten === danhMuc ? "category-tab active" : "category-tab"}
                                    onClick={() => setDanhMuc(ten)}
                                >
                                    {ten}
                                </button>
                            ))}
                        </div>

                        <div className="product-grid">
                            {sanPhamHienThi.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="featured-more">
                            <Link to="/san-pham" className="home-button">
                                Xem tất cả sản phẩm
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
