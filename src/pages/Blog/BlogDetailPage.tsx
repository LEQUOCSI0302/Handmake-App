import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../services/postService.ts";
import type { Post } from "../../types/post.ts";
import "../css/BlogDetailPage.css";

export default function BlogDetailPage() {
    const { id } = useParams();

    const [baiViet, setBaiViet] = useState<Post | null>(null);
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");

    useEffect(() => {
        let conHoatDong = true;

        async function taiChiTiet() {
            if (!id) return;

            try {
                setDangTai(true);
                const duLieu = await getPostById(id);

                if (conHoatDong) {
                    if (duLieu) {
                        setBaiViet(duLieu);
                        setLoi("");
                    } else {
                        setLoi("Không tìm thấy bài viết này.");
                    }
                }
            } catch (err) {
                if (conHoatDong) {
                    setLoi("Lỗi khi tải bài viết. Vui lòng thử lại sau.");
                }
            } finally {
                if (conHoatDong) {
                    setDangTai(false);
                }
            }
        }

        taiChiTiet();

        return () => {
            conHoatDong = false;
        };
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

                {!dangTai && !loi && baiViet && (
                    <article className="blog-detail-article">
                        <header className="blog-detail-header">
                            <div className="blog-detail-meta">
                                <time dateTime={baiViet.date}>
                                    {new Date(baiViet.date).toLocaleDateString("vi-VN")}
                                </time>
                                <span className="meta-divider">•</span>
                                <span>Người đăng: {baiViet.author}</span>
                            </div>

                            <h1 className="blog-detail-title">
                                {baiViet.title}
                            </h1>
                        </header>

                        <div className="blog-detail-image">
                            <img
                                src={baiViet.image}
                                alt={baiViet.title}
                            />
                        </div>

                        <div className="blog-detail-content">
                            {baiViet.content?.split('\n\n').map((doanVan, index) => (
                                <p key={index}>{doanVan}</p>
                            ))}
                        </div>
                    </article>
                )}
            </div>
        </main>
    );
}