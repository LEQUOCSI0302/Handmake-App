import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import "./css/ProductListPage.css";

const TAT_CA = "Tất cả";

export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [sapXep, setSapXep] = useState("mac-dinh");

    const danhMuc = searchParams.get("danh-muc") || TAT_CA;

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

    if (sapXep === "gia-tang") {
        sanPhamHienThi.sort((a, b) => a.price - b.price);
    } else if (sapXep === "gia-giam") {
        sanPhamHienThi.sort((a, b) => b.price - a.price);
    }

    function chonDanhMuc(ten: string) {
        if (ten === TAT_CA) {
            setSearchParams({});
        } else {
            setSearchParams({ "danh-muc": ten });
        }
    }

    function demSanPham(ten: string): number {
        if (ten === TAT_CA) {
            return products.length;
        }
        return products.filter((p) => p.category === ten).length;
    }

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
                                            onClick={() => chonDanhMuc(ten)}
                                        >
                                            {ten}
                                            <span>{demSanPham(ten)}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        <div className="product-main">
                            <div className="product-toolbar">
                                <p className="product-page-count">
                                    Hiển thị {sanPhamHienThi.length} sản phẩm
                                </p>

                                <label className="product-sort">
                                    Sắp xếp:
                                    <select
                                        value={sapXep}
                                        onChange={(e) => setSapXep(e.target.value)}
                                    >
                                        <option value="mac-dinh">Mặc định</option>
                                        <option value="gia-tang">Giá: thấp đến cao</option>
                                        <option value="gia-giam">Giá: cao đến thấp</option>
                                    </select>
                                </label>
                            </div>

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
