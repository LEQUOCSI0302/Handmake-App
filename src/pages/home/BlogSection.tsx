import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Post } from "../../types/post.ts";
import { getPosts } from "../../services/postService.ts";
import SectionTitle from "./SectionTitle.tsx";
import "../css/home.css";
import "../css/blogSection.css";

const NO_IMAGE = "https://placehold.co/600x400/e7decf/81614a?text=Handmake";

export default function BlogSection() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");

    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data.slice(0, 4)))
            .catch(() => setLoi("Không tải được bài viết. Bạn kiểm tra Mockoon đã chạy chưa nhé."))
            .finally(() => setDangTai(false));
    }, []);

    return (
        <section className="home-section">
            <div className="home-container">
                <SectionTitle
                    title="Góc chia sẻ"
                    subtitle="Mẹo dùng và bảo quản đồ gỗ từ xưởng nhỏ của Handmake"
                />

                {dangTai && <p className="home-message">Đang tải bài viết...</p>}
                {loi && <p className="home-message home-message-error">{loi}</p>}

                <div className="blog-list">
                    {posts.map((post) => {
                        const ngay = new Date(post.date);
                        const day = String(ngay.getDate()).padStart(2, "0");
                        const month = ngay.getMonth() + 1;

                        return (
                            <article className="blog-card" key={post.id}>
                                <Link to={`/blog/${post.id}`} className="blog-card-image">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        onError={(e) => {
                                            if (e.currentTarget.src !== NO_IMAGE) {
                                                e.currentTarget.src = NO_IMAGE;
                                            }
                                        }}
                                    />
                                    <span className="blog-card-date">
                                        <b>{day}</b>
                                        Th{month}
                                    </span>
                                </Link>

                                <div className="blog-card-body">
                                    <h3>
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p>{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className="blog-card-more">
                                        Đọc tiếp <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
