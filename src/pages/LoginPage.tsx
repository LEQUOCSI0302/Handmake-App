import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

// Mẫu kiểm tra email: có chữ, rồi @, rồi tên miền có dấu chấm (vd: abc@gmail.com)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mẫu kiểm tra mật khẩu có ít nhất 1 ký tự đặc biệt (vd: ! @ # $ % ...)
const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>_\-+=]/;

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hienMatKhau, setHienMatKhau] = useState(false);
    const [loiEmail, setLoiEmail] = useState("");
    const [loiMatKhau, setLoiMatKhau] = useState("");

    // Kiểm tra dữ liệu nhập. Trả về true nếu hợp lệ.
    function kiemTra(): boolean {
        let hopLe = true;

        if (email.trim() === "") {
            setLoiEmail("Vui lòng nhập email.");
            hopLe = false;
        } else if (!EMAIL_REGEX.test(email.trim())) {
            setLoiEmail("Email không đúng định dạng.");
            hopLe = false;
        } else {
            setLoiEmail("");
        }

        if (password === "") {
            setLoiMatKhau("Vui lòng nhập mật khẩu.");
            hopLe = false;
        } else if (password.length < 8) {
            setLoiMatKhau("Mật khẩu phải có ít nhất 8 ký tự.");
            hopLe = false;
        } else if (!SPECIAL_CHAR_REGEX.test(password)) {
            setLoiMatKhau("Mật khẩu phải có ít nhất 1 ký tự đặc biệt (vd: ! @ # $ %).");
            hopLe = false;
        } else {
            setLoiMatKhau("");
        }

        return hopLe;
    }

    function xuLyDangNhap(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); // chặn trình duyệt tải lại trang khi bấm nút

        if (!kiemTra()) {
            return;
        }

        // Tạm thời: bước sau sẽ kiểm tra tài khoản với Mockoon
        alert("Thông tin hợp lệ!");
    }

    return (
        <main className="login-page">
            <div className="login-card">
                {/* Bên trái: lời chào (ẩn trên điện thoại) */}
                <div className="login-side">
                    <i className="fa-solid fa-tree login-side-icon" aria-hidden="true"></i>
                    <h2>Chào mừng bạn trở lại!</h2>
                    <p>
                        Đăng nhập để theo dõi đơn hàng, lưu sản phẩm yêu thích và nhận
                        ưu đãi dành riêng cho thành viên Handmake.
                    </p>
                </div>

                {/* Bên phải: form đăng nhập */}
                <form className="login-form" onSubmit={xuLyDangNhap} noValidate>
                    <h1>Đăng nhập</h1>
                    <p className="login-subtitle">Nhập email và mật khẩu của bạn.</p>

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className={loiEmail ? "login-input input-error" : "login-input"}
                        placeholder="vidu@gmail.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {loiEmail && <p className="login-field-error">{loiEmail}</p>}

                    <label htmlFor="password">Mật khẩu</label>
                    <div className="password-box">
                        <input
                            id="password"
                            type={hienMatKhau ? "text" : "password"}
                            className={loiMatKhau ? "login-input input-error" : "login-input"}
                            placeholder="Ít nhất 8 ký tự, có ký tự đặc biệt"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setHienMatKhau(!hienMatKhau)}
                            aria-label={hienMatKhau ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                        >
                            <i
                                className={hienMatKhau ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                    {loiMatKhau && <p className="login-field-error">{loiMatKhau}</p>}

                    <div className="login-forgot">
                        <Link to="/quen-mat-khau">Quên mật khẩu?</Link>
                    </div>

                    <button type="submit" className="login-button">
                        Đăng nhập
                    </button>

                    <p className="login-register">
                        Chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
