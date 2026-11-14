import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginSuccess, logout } from "../store/authSlice";
import { login } from "../services/authService";
import "./css/LoginPage.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>_\-+=]/;

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useAppSelector((state) => state.auth.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hienMatKhau, setHienMatKhau] = useState(false);
    const [loiEmail, setLoiEmail] = useState("");
    const [loiMatKhau, setLoiMatKhau] = useState("");
    const [loiChung, setLoiChung] = useState("");
    const [dangGui, setDangGui] = useState(false);

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

    async function xuLyDangNhap(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoiChung("");

        if (!kiemTra()) {
            return;
        }

        setDangGui(true);
        try {
            const nguoiDung = await login(email, password);
            dispatch(loginSuccess(nguoiDung));
            navigate("/");
        } catch (error) {
            setLoiChung(error instanceof Error ? error.message : "Đăng nhập thất bại.");
        } finally {
            setDangGui(false);
        }
    }

    if (user) {
        return (
            <main className="login-page">
                <div className="login-welcome">
                    <i className="fa-solid fa-circle-user" aria-hidden="true"></i>
                    <h1>Xin chào, {user.name}!</h1>
                    <p>Bạn đang đăng nhập bằng email {user.email}.</p>
                    <div className="login-welcome-actions">
                        <Link to="/" className="login-button">
                            Về trang chủ
                        </Link>
                        <button
                            type="button"
                            className="login-button-outline"
                            onClick={() => dispatch(logout())}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="login-page">
            <div className="login-card">
                <div className="login-side">
                    <i className="fa-solid fa-tree login-side-icon" aria-hidden="true"></i>
                    <h2>Chào mừng bạn trở lại!</h2>
                    <p>
                        Đăng nhập để theo dõi đơn hàng, lưu sản phẩm yêu thích và nhận
                        ưu đãi dành riêng cho thành viên Handmake.
                    </p>
                </div>

                <form className="login-form" onSubmit={xuLyDangNhap} noValidate>
                    <h1>Đăng nhập</h1>
                    <p className="login-subtitle">Nhập email và mật khẩu của bạn.</p>

                    {loiChung && <p className="login-error-box">{loiChung}</p>}

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

                    <button type="submit" className="login-button" disabled={dangGui}>
                        {dangGui ? "Đang đăng nhập..." : "Đăng nhập"}
                    </button>

                    <p className="login-register">
                        Chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
