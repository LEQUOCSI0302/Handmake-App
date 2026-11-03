// Thông tin người dùng sau khi đăng nhập (không có mật khẩu)
export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: "customer" | "admin"; // chỉ nhận 1 trong 2 giá trị này
}

// Tài khoản lưu trong Mockoon (có thêm mật khẩu)
export interface UserAccount extends User {
    password: string;
}
