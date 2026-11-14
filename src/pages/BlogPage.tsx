import "./css/BlogPage.css";

export default function BlogPage() {
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
                <div className="blog-grid"></div>
            </div>
        </main>
    );
}