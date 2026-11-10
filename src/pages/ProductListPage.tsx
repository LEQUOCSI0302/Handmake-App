import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import "./css/ProductListPage.css";

export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch(() => setLoi("Không tải được sản phẩm. Bạn kiểm tra Mockoon đã chạy chưa nhé."))
            .finally(() => setDangTai(false));
    }, []);

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
                    <>
                        <p className="product-page-count">
                            Hiển thị {products.length} sản phẩm
                        </p>

                        <div className="product-page-grid">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
