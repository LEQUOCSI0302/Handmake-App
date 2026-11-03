import { apiGet } from "./api";
import type { User, UserAccount } from "../types/user.ts";

// Đăng nhập: lấy danh sách tài khoản từ Mockoon rồi tìm tài khoản khớp email và mật khẩu.
// (Fake API nên kiểm tra ở frontend; server thật sẽ tự kiểm tra và không gửi mật khẩu về.)
export async function login(email: string, password: string): Promise<User> {
    let accounts: UserAccount[];
    try {
        accounts = await apiGet<UserAccount[]>("/users");
    } catch {
        throw new Error("Không kết nối được máy chủ. Bạn kiểm tra Mockoon đã chạy chưa nhé.");
    }

    const found = accounts.find(
        (account) =>
            account.email.toLowerCase() === email.trim().toLowerCase() &&
            account.password === password
    );

    if (!found) {
        throw new Error("Email hoặc mật khẩu không đúng.");
    }

    // Chỉ trả về thông tin cần dùng, bỏ mật khẩu đi
    return {
        id: found.id,
        name: found.name,
        email: found.email,
        phone: found.phone,
        role: found.role,
    };
}
