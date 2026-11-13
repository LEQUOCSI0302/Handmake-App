import {Link, useParams} from "react-router-dom";
import {use, useEffect, useState} from "react";
import type {Product} from "../../types/product.ts";
import {formatPrice} from "../../utils/formatPrice.ts";
import {getProductById} from "../../services/productService.ts";
import "../css/ProductDetailPage.css";

function ProductDetailPage() {
    const { id } = useParams();
    const productId = Number(id);
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        getProductById(productId).then((detail => {
            if(detail){
                setProduct(detail);
            }
        }))
    }, [productId]);
    if(!product) {
        return (
            <main className = "product-detail-page">
                <p className={"product-detail-message"}>Đang tải sản phẩm</p>
            </main>
        );
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
                            <button type="button" aria-label="Giảm số lượng">-</button>
                            <span>1</span>
                            <button type="button" aria-label="Tăng số lượng">+</button>
                        </div>
                    </div>
                    <button className = "product-detail-add" type="submit">
                        Thêm vào giỏ hàng
                    </button>
                    <p className = "product-detail-category">Loại hàng: {product.category}</p>
                    <p className ="product-detail-description">{product.description}</p>

                </div>
            </section>
        </main>
    );
}
export default ProductDetailPage;