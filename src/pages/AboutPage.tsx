import { Link } from 'react-router-dom';
import './AboutPage.css';


const factors = [
    {
        icon: 'fa-solid fa-tree',
        title: 'Gỗ tự nhiên chọn lọc',
        content:
            'Dùng gỗ tần bì, gỗ mun, gỗ dừa được phơi khô kỹ, ít cong vênh và an toàn khi tiếp xúc với thực phẩm.',
    },
    {
        icon: 'fa-solid fa-hand',
        title: 'Làm thủ công tỉ mỉ',
        content:
            'Mỗi sản phẩm được cắt, tạo dáng và chà nhám bằng tay nên có vân gỗ riêng, không cái nào giống hệt cái nào.',
    },
    {
        icon: 'fa-solid fa-leaf',
        title: 'Thân thiện môi trường',
        content:
            'Hoàn thiện bằng dầu tự nhiên, hạn chế hóa chất và đồ nhựa, dùng được lâu thay cho đồ dùng một lần.',
    },
];

function AboutPage() {
    return (
        <main className="about-page">
            {/* Phần 1: giới thiệu chung (chữ bên trái, ảnh bên phải) */}
            <section className="about-intro">
                <div className="about-container">
                    <div>
                        <h1 className="about-title">Về chúng tôi</h1>
                        <p>
                            Handmake là cửa hàng online chuyên đồ gỗ thủ công: khay, thớt,
                            thìa muỗng, đồ dùng nhà bếp và đồ trang trí.
                        </p>
                        <p>
                            Chúng mình tin rằng một món đồ gỗ làm bằng tay sẽ mang lại cảm
                            giác ấm áp, gần gũi cho căn bếp và góc nhà của bạn.
                        </p>
                        <p>
                            Từng sản phẩm đều được chăm chút từ khâu chọn gỗ, tạo dáng đến
                            chà nhám và phủ dầu hoàn thiện.
                        </p>
                        <Link to="/san-pham" className="about-button">
                            Xem sản phẩm
                        </Link>
                    </div>

                    <img
                        className="about-image"
                        src="https://placehold.co/600x400/d0bca1/81614a?text=Handmake"
                        alt="Xưởng làm đồ gỗ của Handmake"
                    />
                </div>
            </section>

            {

            }
            <section className="about-factors">
                <div className="about-container">
                    <h2 className="about-subtitle">Các yếu tố tạo nên Handmake</h2>

                    <div className="factor-list">
                        {factors.map((item) => (
                            <div className="factor-card" key={item.title}>
                                <i className={item.icon} aria-hidden="true"></i>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
