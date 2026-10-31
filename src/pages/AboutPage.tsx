import './AboutPage.css';
const factors = [
    {
        title: 'Tính cá nhân hóa và sự đa dạng về chất liệu',
        content:
            'mỗi sản phẩm của Handmake đều mang một nét riêng, phù hợp với nhiều phong cách khác nhau. Các hạt cườm được phối nhiều gam màu tươi sáng, trẻ trung.',
    },
    {
        title: 'Chất lượng và độ bền',
        content:
            'sản phẩm được làm thủ công tỉ mỉ từng chi tiết, dây và nút thắt chắc chắn, giúp bạn sử dụng được lâu dài.',
    },
    {
        title: 'Thân thiện với môi trường',
        content:
            'chúng mình ưu tiên hạt thủy tinh và chất liệu an toàn, không gây kích ứng da và hạn chế rác thải nhựa.',
    },
];

function AboutPage() {
    return (
        <>
            <main className="about-page">
                <div className="container">
                    <h1 className="about-title">Về chúng tôi</h1>

                    <p>Handmake, một cửa hàng online yêu cái đẹp và sự sáng tạo.</p>
                    <p>
                        Các sản phẩm của Handmake hướng đến các bạn trẻ yêu thích phụ kiện
                        xinh xắn, mang dấu ấn riêng.
                    </p>
                    <p>
                        Đến với Handmake, bạn sẽ cảm nhận được sự tỉ mỉ trong từng món đồ
                        được làm bằng tay. Mỗi thiết kế đều bắt nguồn từ cảm hứng và niềm đam
                        mê của chúng mình.
                    </p>

                    <h4 className="about-subtitle">Các yếu tố tạo nên Handmake</h4>

                    {

                    }
                    {factors.map((item) => (
                        <p key={item.title}>
                            {item.title}: {item.content}
                        </p>
                    ))}

                    <img
                        className="about-image"
                        src="https://placehold.co/300x300/fde8e8/fbb5b5?text=Handmake"
                        alt="Sản phẩm handmade của cửa hàng"
                    />
                </div>
            </main>
        </>);
}

export default AboutPage;