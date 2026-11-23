import {Link, useParams} from "react-router-dom";
import {type FormEvent, use, useEffect, useState} from "react";
import type {Product} from "../../types/product.ts";
import {formatPrice} from "../../utils/formatPrice.ts";
import {getProductById, getProducts, getReviews, type Reviews} from "../../services/productService.ts";
import "../css/ProductDetailPage.css";
import ProductCard from "../../components/ProductCard.tsx";

type Review ={
    name: string;
    rating: number;
    email:string;
    content:string;
    date: string;
}
function ProductDetailPage() {
    const { id } = useParams();
    const productId = Number(id);
    const [product, setProduct] = useState<Product>();
    const [quantity, setQuantity] = useState(1);
    const [related, setRelated] = useState<Product[]>([]);
    const [tab, setTab] = useState<"mota" | "danhgia">("mota");
    const [review, setReview] = useState<Review[]>([]);
    const [seedReview, setSeedReview] = useState<Reviews[]>([]);
    const [name,setName] = useState("");
    const [star,setStar] = useState(5);
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [notFound, setNotFound]  = useState(false);
    useEffect(() => {
        setQuantity(1);
        setRelated([]);
        setTab("mota");
        setProduct(undefined);
        setNotFound(false);
        setSeedReview([]);
        setReview(JSON.parse(localStorage.getItem(`review-${productId}`) ?? "[]"));
        window.scrollTo({ top: 0 });
    }, [productId]);

    useEffect(() => {
        Promise.all([getProductById(productId),getProducts(),getReviews().catch(() => [])]).then(([detail, all,allReviews]) =>{
            if(detail) {
                setProduct(detail);
                setRelated(all.filter((p) => p.category === detail.category && p.id !== detail.id).slice(0, 4));
                setSeedReview(allReviews.filter((r) => r.productId === productId));
            }else{
                setNotFound(true);
            }

        }).catch(() =>{
            setNotFound(true);
        });

    }, [productId]);


    function decreaseQuantity() {
        setQuantity((n) => Math.max(1, n-1));
    }
    function increaseQuantity() {
        if(!product){
            return;
        }
        setQuantity((n) => Math.min(product.stock, n+1));
    }
    function guiDanhGia(e: FormEvent) {
        e.preventDefault();
        if(!name.trim() || !content.trim()){
            return;
        }
        const newReview: Review ={
            name: name.trim(),
            rating: star,
            email: email,
            content: content.trim(),
            date: new Date().toLocaleDateString("vi-VN")
        };
        const updated = [newReview, ...review];
        setReview(updated);
        localStorage.setItem(`review-${productId}`, JSON.stringify(updated));
        setName("");
        setStar(5);
        setContent("");

    }
    if(notFound){
        return(
            <main className = "product-detail-page">
                <p className="product-detail-message">Không tìm thấy sản phẩm này.</p>
                <Link to = "/san-pham">Quay lại danh sách sản phẩm</Link>
            </main>
        );
    }
    if(!product) {
        return (
            <main className = "product-detail-page">
                <p className={"product-detail-message"}>Đang tải sản phẩm</p>
            </main>
        );
    }

    const shown = [...review,...seedReview];
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
                </div>

            </section>

            <section className = "product-detail-lower">
                <div className = "product-detail-tabs">
                    <button className = {tab=="mota" ? "active":""} type="button" onClick={() => setTab("mota")}>Mô tả sản phẩm</button>
                    <button className = {tab=="danhgia" ? "active" :""} type="button" onClick={()=> setTab("danhgia")}>Đánh giá</button>
                </div>

                {tab === "mota" ? (
                    <div className = "product-detail-desc">
                        {product.description.split("\n\n").map((block,i)=>{
                            if(block.startsWith("# ")){
                                return <h3 key = {i}>{block.slice(2)}</h3>
                            }
                            if(block.startsWith("- ")){
                                return(
                                    <ul key = {i}>
                                        {block.split("\n").map((line,j)=>(
                                            <li key={j}>{line.slice(2)}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return(
                                <p className="product-detail-description" key={i}>
                                    {block}

                                </p>
                            );
                        })}

                    </div>
                ):(
                    <div className ="product-detail-reviews">
                        {shown.length === 0 ? (
                            <p className ="product-detail-no-review">Chưa có đánh giá nào.</p>
                            ):(
                                <ul className = "product-detail-review-list">
                                    {shown.map((review, index) => (
                                        <li key = {index} className = "product-detail-review-item">
                                            <div className = "product-detail-review-head">
                                                <strong>{review.name}</strong>
                                                <span className = "product-detail-review-star">{[1,2,3,4,5].map((n) => (<i key={n} className ={n <= review.rating ?"fa-solid fa-star" : "fa-regular fa-star"}></i>))}</span>
                                                <span className = "product-detail-review-date">{review.date}</span>
                                            </div>
                                            <p>{review.content}</p>
                                        </li>
                                    ))}

                                </ul>
                            )
                        }


                        <form className = "product-detail-review-form" onSubmit={guiDanhGia}>
                            <h3>Viết đánh giá của bạn</h3>
                            <div className = "product-detail-review-rate">
                                {[1,2,3,4,5].map((n) => (
                                    <button key={n} type="button" className ={n <= star ? "active":""} onClick={() =>setStar(n)}>
                                        <i className={n <= star ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                    </button>
                                ))}
                            </div>
                            <input placeholder="Tên của bạn" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input placeholder="Email của bạn" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <textarea placeholder="Nhận xét của bạn về sản phẩm" rows={3} value={content} onChange={(e) => setContent(e.target.value)}/>
                            <button className ="product-detail-review-submit" type="submit">Gửi đánh giá</button>
                        </form>
                    </div>
                )}

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