import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product.ts";
import { getProducts } from "../../services/productService.ts";
import ProductCard from "../../components/ProductCard.tsx";
import SectionTitle from "./SectionTitle.tsx";
import "../css/home.css";
import "../css/featuredProducts.css";

const SO_SAN_PHAM = 8;

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");
    const [danhMuc, setDanhMuc] = useState("Tất cả");

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch(() => setLoi("Không tải được sản phẩm. Bạn kiểm tra Mockoon đã chạy chưa nhé."))
            .finally(() => setDangTai(false));
    }, []);

    const cacDanhMuc = ["Tất cả", ...new Set(products.map((p) => p.category))];

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
