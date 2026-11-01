import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { formatPrice } from "../utils/formatPrice";
import "./productCard.css";

// Ảnh thay thế khi sản phẩm chưa có ảnh hoặc ảnh bị lỗi
const NO_IMAGE = "https://placehold.co/400x400/e7decf/81614a?text=Handmake";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    const dispatch = useAppDispatch();

    // true trong 1,5 giây sau khi bấm thêm vào giỏ, để đổi icon thành dấu tích
    const [daThem, setDaThem] = useState(false);

    // Tính phần trăm giảm giá nếu sản phẩm có giá cũ
    let giamGia = 0;
    if (product.oldPrice) {
        giamGia = Math.round((1 - product.price / product.oldPrice) * 100);
    }

    function themVaoGio() {
        dispatch(addToCart(product));
        setDaThem(true);
        setTimeout(() => setDaThem(false), 1500);
    }

    return (
        <div className="product-card">
            <Link to={`/san-pham/${product.id}`} className="product-card-image">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        // Ảnh lỗi thì đổi sang ảnh thay thế (chỉ đổi 1 lần)
                        if (e.currentTarget.src !== NO_IMAGE) {
                            e.currentTarget.src = NO_IMAGE;
                        }
                    }}
                />
                {giamGia > 0 && <span className="product-card-sale">-{giamGia}%</span>}
            </Link>

            <div className="product-card-body">
                <p className="product-card-category">{product.category}</p>

                <Link to={`/san-pham/${product.id}`} className="product-card-name">
                    {product.name}
                </Link>

                <p className="product-card-rating">
                    <i className="fa-solid fa-star" aria-hidden="true"></i> {product.rating}
                </p>

                <div className="product-card-bottom">
                    <div>
                        <span className="product-card-price">
                            {formatPrice(product.price)}
                        </span>
                        {product.oldPrice ? (
                            <span className="product-card-old-price">
                                {formatPrice(product.oldPrice)}
                            </span>
                        ) : null}
                    </div>

                    <button
                        type="button"
                        className="product-card-cart"
                        onClick={themVaoGio}
                        aria-label="Thêm vào giỏ hàng"
                        title="Thêm vào giỏ hàng"
                    >
                        <i
                            className={daThem ? "fa-solid fa-check" : "fa-solid fa-cart-plus"}
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
