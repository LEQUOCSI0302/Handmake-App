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
    const [binhLuanMoi, setBinhLuanMoi] = useState("");

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

    const xuLyGuiBinhLuan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!binhLuanMoi.trim()) return;
        setBinhLuanMoi("");
    };

    return (
        <main className="blog-detail-page">
            <div className="blog-detail-container">
                <div className="blog-detail-nav">
                    <Link to="/blog" className="blog-back-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        Trở về
                    </Link>
                </div>

                {dangTai && (
                    <div className="blog-detail-status">
                        <p>Đang tải bài viết...</p>
                    </div>
                )}

                {loi && (
                    <div className="blog-detail-status error">
                        <p>{loi}</p>
                    </div>
                )}

                {!dangTai && !loi && baiViet && (
                    <>
                        <article className="blog-detail-article">
                            <header className="blog-detail-header">
                                <div className="blog-detail-meta">
                                    <span className="blog-detail-author">{baiViet.author}</span>
                                    <span className="meta-divider">|</span>
                                    <time dateTime={baiViet.date}>
                                        {new Date(baiViet.date).toLocaleDateString("vi-VN", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </time>
                                </div>

                                <h1 className="blog-detail-title">
                                    {baiViet.title}
                                </h1>
                            </header>

                            <div className="blog-detail-image">
                                <img
                                    src={baiViet.image}
                                    alt={baiViet.title}
                                    loading="lazy"
                                />
                            </div>

                            <div className="blog-detail-content">
                                {baiViet.content?.split('\n').filter(p => p.trim() !== '').map((doanVan, index) => (
                                    <p key={index}>{doanVan.trim()}</p>
                                ))}
                            </div>
                        </article>

                        <section className="blog-comments-section">
                            <h3 className="comments-title">Bình luận (0)</h3>

                            <form className="comment-form" onSubmit={xuLyGuiBinhLuan}>
                                <textarea
                                    className="comment-input"
                                    placeholder="Chia sẻ suy nghĩ của bạn về bài viết..."
                                    value={binhLuanMoi}
                                    onChange={(e) => setBinhLuanMoi(e.target.value)}
                                    rows={3}
                                />
                                <button type="submit" className="comment-submit-btn">Gửi bình luận</button>
                            </form>

                            <div className="comments-empty">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.35-1.548.31-2.31a7 7 0 0 1-2.2-4.609c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                </svg>
                                <p>Hiện tại chưa có bình luận nào.</p>
                                <span>Hãy là người đầu tiên chia sẻ suy nghĩ của bạn!</span>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}