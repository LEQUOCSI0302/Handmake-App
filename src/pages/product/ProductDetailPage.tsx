import {Link, useParams} from "react-router-dom";
import {use, useEffect, useState} from "react";
import type {Product} from "../../types/product.ts";
import {formatPrice} from "../../utils/formatPrice.ts";
import {getProductById, getProducts} from "../../services/productService.ts";
import "../css/ProductDetailPage.css";
import ProductCard from "../../components/ProductCard.tsx";

function ProductDetailPage() {
    const { id } = useParams();
    const productId = Number(id);
    const [product, setProduct] = useState<Product>();
    const [quantity, setQuantity] = useState(1);
    const [related, setRelated] = useState<Product[]>([]);

    useEffect(() => {
        setQuantity(1);
        setRelated([]);
        window.scrollTo({ top: 0 });
    }, [productId]);

    useEffect(() => {
        Promise.all([getProductById(productId),getProducts()]).then(([detail, all]) =>{
            if(detail) {
                setProduct(detail);
                setRelated(all.filter((p) => p.category === detail.category && p.id !== detail.id).slice(0, 4));
            }
        });
    }, [productId]);
    if(!product) {
        return (
            <main className = "product-detail-page">
                <p className={"product-detail-message"}>Đang tải sản phẩm</p>
            </main>
        );
    }

    function decreaseQuantity() {
        setQuantity((n) => Math.max(1, n-1));
    }
    function increaseQuantity() {
        if(!product){
            return;
        }
        setQuantity((n) => Math.min(product.stock, n+1));
    }
    return (
        <main className = "product-detail-page">
            <p className = "product-detail-breadcrumb">
                <Link to = "/">Trang chủ</Link>/
                <Link to="/san-pham">Sản phẩm</Link>/
                {product.name}
            </p>
            <section className = "product-detail-main">
                <div className = "product-detail-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className = "product-detail-info">

                    <h1>{product.name}</h1>
                    <p className = "product-detail-rating">
                        <i className = "fa-solid fa-star" aria-hidden={"true"}></i>
                        {product?.rating}
                        <hr></hr>
                        {product.stock <= 0 ? `Hết hàng` : `Còn ${product.stock} sản phâm`}
                    </p>
                    <div className = "product-detail-prices">
                        <span className = "product-detail-price">{formatPrice(product.price)}</span>

                    </div>
                    <div className = "product-detail-actions">
                        <div className = "product-detail-quantity">
                            <button type="button" aria-label="Giảm số lượng" disabled={quantity <= 1} onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button type="button" aria-label="Tăng số lượng" disabled={quantity >= product.stock} onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                    <button className = "product-detail-add" type="submit">
                        Thêm vào giỏ hàng
                    </button>
                    <p className = "product-detail-category">Loại hàng: {product.category}</p>
                    <p className ="product-detail-description">{product.description}</p>

                </div>
            </section>
            {related?.length > 0 &&(
                <section className = "product-detail-related">
                    <h2>Sản phẩm liên quan</h2>
                    <div className="product-detail-related-grid">
                        {related.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
export default ProductDetailPage;