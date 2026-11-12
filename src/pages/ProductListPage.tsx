import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import "./css/ProductListPage.css";

const TAT_CA = "Tất cả";

export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");
    const [danhMuc, setDanhMuc] = useState(TAT_CA);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch(() => setLoi("Không tải được sản phẩm. Bạn kiểm tra Mockoon đã chạy chưa nhé."))
            .finally(() => setDangTai(false));
    }, []);

    const cacDanhMuc = [TAT_CA, ...new Set(products.map((p) => p.category))];

    const sanPhamHienThi = products.filter(
        (p) => danhMuc === TAT_CA || p.category === danhMuc
    );

    return (
        <main className="product-page">
            <div className="product-page-banner">
                <h1>Sản phẩm</h1>
                <p>
                    <Link to="/">Trang chủ</Link> / Sản phẩm
                </p>
            </div>

            <div className="product-page-container">
                {dangTai && <p className="product-page-message">Đang tải sản phẩm...</p>}
                {loi && <p className="product-page-message product-page-error">{loi}</p>}

                {!dangTai && !loi && (
                    <div className="product-page-layout">
                        <aside className="product-sidebar">
                            <h3>Danh mục</h3>
                            <ul>
                                {cacDanhMuc.map((ten) => (
                                    <li key={ten}>
                                        <button
                                            type="button"
                                            className={
                                                ten === danhMuc
                                                    ? "product-sidebar-item active"
                                                    : "product-sidebar-item"
                                            }
                                            onClick={() => setDanhMuc(ten)}
                                        >
                                            {ten}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        <div className="product-main">
                            <p className="product-page-count">
                                Hiển thị {sanPhamHienThi.length} sản phẩm
                            </p>

                            {sanPhamHienThi.length === 0 ? (
                                <p className="product-page-message">
                                    Không có sản phẩm nào trong danh mục này.
                                </p>
                            ) : (
                                <div className="product-page-grid">
                                    {sanPhamHienThi.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
