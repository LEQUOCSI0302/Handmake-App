
//tạo dl mẫu
export type Product = {
    id: number;
    name: string;
    category: string;
    price: number; // lưu số, khi hiển thị mới đổi thành "24.000₫"
    image: string;
};

export type Post = {
    id: number;
    title: string;
    excerpt: string; //đoạn tóm tắt ngắn
    day: string;     //ví dụ "06"
    month: string;   //ví dụ "Th11"
    image: string;
};

export const featuredProducts: Product[] = [
    {
        id: 1,
        name: 'Vòng tay hạt cườm xanh biển',
        category: 'Vòng tay',
        price: 24000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Vong+tay'
    },
    {
        id: 2,
        name: 'Vòng tay charm sao biển',
        category: 'Vòng tay',
        price: 25000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Vong+tay'
    },
    {
        id: 3,
        name: 'Vòng dây rút charm cá nhiều màu',
        category: 'Vòng tay',
        price: 25000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Vong+tay'
    },
    {
        id: 4,
        name: 'Dây chuyền charm chữ thắt nút',
        category: 'Dây chuyền',
        price: 32000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Day+chuyen'
    },
    {
        id: 5,
        name: 'Dây đeo điện thoại hạt ngọc trai',
        category: 'Phụ kiện điện thoại',
        price: 25000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Phu+kien'
    },
    {
        id: 6,
        name: 'Dây chuyền chiếc nơ hạt acrylic',
        category: 'Dây chuyền',
        price: 30000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Day+chuyen'
    },
    {
        id: 7,
        name: 'Dây chuyền mặt hoa nhiều màu',
        category: 'Dây chuyền',
        price: 29000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Day+chuyen'
    },
    {
        id: 8,
        name: 'Dây chuyền thắt nút tự do',
        category: 'Dây chuyền',
        price: 32000,
        image: 'https://placehold.co/300x360/fde8e8/fbb5b5?text=Day+chuyen'
    },
];

export const posts: Post[] = [
    {
        id: 1,
        title: 'Gợi ý 10 mẫu túi đựng quà dễ thương',
        excerpt: 'Chọn túi quà xinh giúp món quà handmade của bạn thêm ý nghĩa...',
        day: '06',
        month: 'Th11',
        image: 'https://placehold.co/300x300/fde8e8/fbb5b5?text=Blog'
    },
    {
        id: 2,
        title: 'Cách tự làm nhẫn hạt cườm tại nhà',
        excerpt: 'Chỉ với vài dụng cụ đơn giản, bạn có thể tự làm một chiếc nhẫn xinh...',
        day: '09',
        month: 'Th10',
        image: 'https://placehold.co/300x300/fde8e8/fbb5b5?text=Blog'
    },
    {
        id: 3,
        title: 'Mẹo trang trí túi xách đơn giản',
        excerpt: 'Thêm charm, móc khóa hay ruy băng để chiếc túi trở nên nổi bật...',
        day: '09',
        month: 'Th10',
        image: 'https://placehold.co/300x300/fde8e8/fbb5b5?text=Blog'
    },
    {
        id: 4,
        title: 'Kỹ thuật thêu cơ bản cho người mới',
        excerpt: 'Làm quen với các mũi thêu cơ bản để bắt đầu dự án đầu tiên...',
        day: '08',
        month: 'Th10',
        image: 'https://placehold.co/300x300/fde8e8/fbb5b5?text=Blog'
    },
];