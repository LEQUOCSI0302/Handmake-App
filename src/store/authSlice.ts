import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";

export const AUTH_STORAGE_KEY = "handmake-user";

// Đọc người dùng đã đăng nhập từ lần trước (nếu có)
function loadUser(): User | null {
    try {
        const raw = localStorage.getItem(AUTH_STORAGE_KEY);
        return raw ? (JSON.parse(raw) as User) : null;
    } catch {
        return null;
    }
}

interface AuthState {
    user: User | null; // null nghĩa là chưa đăng nhập
}

const initialState: AuthState = {
    user: loadUser(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Đăng nhập thành công: lưu thông tin người dùng
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        // Đăng xuất: xóa thông tin người dùng
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
