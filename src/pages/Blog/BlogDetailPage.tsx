import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/BlogDetailPage.css";

export default function BlogDetailPage() {
    const { id } = useParams();

    const [dangTai, setDangTai] = useState(false);
    const [loi, setLoi] = useState("");

    useEffect(() => {

    }, [id]);

    return (
        <main className="blog-detail-page">
            <div className="blog-detail-container">
                <div className="blog-detail-nav">
                    <Link to="/blog" className="blog-back-link">
                        ← Quay lại danh sách
                    </Link>
                </div>

                {dangTai && (
                    <p className="blog-detail-status" role="status">Đang tải bài viết...</p>
                )}

                {loi && (
                    <p className="blog-detail-status error" role="alert">{loi}</p>
                )}

                {!dangTai && !loi && (
                    <article className="blog-detail-article">
                        <header className="blog-detail-header">
                            <div className="blog-detail-meta">
                                <time dateTime="2026-11-22">22/11/2026</time>
                                <span className="meta-divider">•</span>
                                <span>Người đăng:Admin</span>
                            </div>

                            <h1 className="blog-detail-title">
                                Tiêu đề bài viết
                            </h1>
                        </header>

                        <div className="blog-detail-image">
                            <img
                                src="https://placehold.co/800x500/e8dfd8/81614a?text=Anh"
                                alt="Ảnh bìa bài viết"
                            />
                        </div>

                        <div className="blog-detail-content">
                            <p>đoạn mở đầu của bài viết</p>

                            <h2>1. Giao diện</h2>
                            <p>nội dung</p>

                            <blockquote>
                               Trích dẫn
                            </blockquote>

                            <h2>2.Kết luận</h2>
                            <p>nội dung</p>
                        </div>
                    </article>
                )}
            </div>
        </main>
    );
}