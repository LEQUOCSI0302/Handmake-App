import SectionTitle from "./SectionTitle.tsx";
import "../css/home.css";
import "../css/marketplaces.css";

// Các sàn thương mại điện tử cửa hàng đang bán
const markets = [
    { name: "Shopee", icon: "fa-solid fa-bag-shopping", link: "https://shopee.vn" },
    { name: "TikTok Shop", icon: "fa-brands fa-tiktok", link: "https://www.tiktok.com" },
    { name: "Lazada", icon: "fa-solid fa-store", link: "https://www.lazada.vn" },
];

export default function Marketplaces() {
    return (
        <section className="home-section">
            <div className="home-container">
                <SectionTitle title="Handmake đã có mặt tại" />

                <div className="market-list">
                    {markets.map((market) => (
                        <a
                            key={market.name}
                            href={market.link}
                            target="_blank"
                            rel="noreferrer"
                            className="market-item"
                        >
                            <i className={market.icon} aria-hidden="true"></i>
                            {market.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
