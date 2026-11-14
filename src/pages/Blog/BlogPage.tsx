import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/postService.ts";
import type { Post } from "../../types/post.ts";
import "../css/BlogPage.css";

export default function BlogPage() {
    const [baiViet, setBaiViet] = useState<Post[]>([]);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");

    useEffect(() => {
        let conHoatDong = true;

        async function taiBaiViet() {
            try {
                const duLieu = await getPosts();

                if (!Array.isArray(duLieu)) {
                    throw new Error("Dữ liệu bài viết phải là một mảng.");
                }

                if (conHoatDong) {
                    setBaiViet(duLieu);
                }
            } catch {
                if (conHoatDong) {
                    setLoi("Không tải được bài viết. Vui lòng thử lại sau.");
                }
            } finally {
                if (conHoatDong) {
                    setDangTai(false);
                }
            }
        }

        taiBaiViet();

        return () => {
            conHoatDong = false;
        };
    }, []);

    return (
        <main className="blog-page">
            <div className="blog-container">
                <header className="blog-heading">
                    <p className="blog-label">Góc chia sẻ</p>

                    <h1>Blog Handmake</h1>

                    <p>
                        Cảm hứng trang trí và những câu chuyện
                        về sản phẩm handmade.
                    </p>
                </header>

                {dangTai && (
                    <p role="status">Đang tải bài viết...</p>
                )}

                {loi && (
                    <p role="alert">{loi}</p>
                )}

                {!dangTai && !loi && baiViet.length === 0 && (
                    <p>Chưa có bài viết.</p>
                )}

                <div className="blog-grid">
                    {baiViet.map((bai) => (
                        <article className="blog-item" key={bai.id}>
                            <div className="blog-item-image">
                                <Link to={`/blog/${bai.id}`}>
                                    <img
                                        src={bai.image}
                                        alt={bai.title}
                                        loading="lazy"
                                    />
                                </Link>
                            </div>

                            <div className="blog-item-body">
                                <time dateTime={bai.date}>
                                    {new Date(bai.date).toLocaleDateString(
                                        "vi-VN",
                                        { timeZone: "UTC" }
                                    )}
                                </time>

                                <p className="blog-item-author">
                                    Người đăng: {bai.author}
                                </p>

                                <h2>
                                    <Link to={`/blog/${bai.id}`}>
                                        {bai.title}
                                    </Link>
                                </h2>

                                <p>{bai.excerpt}</p>

                                <Link
                                    to={`/blog/${bai.id}`}
                                    className="blog-item-more"
                                >
                                    Đọc tiếp →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}