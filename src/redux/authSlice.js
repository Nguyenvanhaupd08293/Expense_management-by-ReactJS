import { createSlice } from '@reduxjs/toolkit';

// Tạo slice cho trạng thái xác thực
const authSlice = createSlice({
    name: 'auth', // Tên slice này
    initialState: {
        token: null, // Token đăng nhập của người dùng
        isAuthenticated: false, // Trạng thái xác thực của người dùng
    },
    reducers: {
        // Action để thiết lập token và cập nhật trạng thái xác thực
        setToken: (state, action) => {
            state.token = action.payload; // Cập nhật token từ payload của action
            state.isAuthenticated = !!action.payload; // Chuyển đổi thành true nếu có token, false nếu không có token
        },
        // Action để xóa token và đặt trạng thái xác thực về false
        clearToken: (state) => {
            state.token = null; // Xóa token
            state.isAuthenticated = false; // Đặt trạng thái xác thực về false
        },
    },
});

// Xuất các action creators từ slice
export const { setToken, clearToken } = authSlice.actions;

// Xuất reducer để sử dụng trong store
export default authSlice.reducer;