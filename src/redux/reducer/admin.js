import { ADD_ACCOUNT, FAIL_REQUEST, LOGOUT_SUCCESS, GET_ACCOUNT_OBJ, MAKE_REQUEST } from "../type/admin";

// Định nghĩa trạng thái ban đầu của reducer
const initialstate = {
    loading: false, // Trạng thái loading khi thực hiện yêu cầu
    accountlist: [], // Danh sách tài khoản (không được sử dụng trong đoạn mã này nhưng có thể dùng trong tương lai)
    token: null, // Token đăng nhập của người dùng
    username: null, // Tên người dùng
    accountobj: {}, // Thông tin tài khoản cụ thể
    errmessage: '' // Thông báo lỗi
}

// Reducer để xử lý các action liên quan đến tài khoản người dùng
export const accountReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            // Khi một yêu cầu bắt đầu được thực hiện
            return {
                ...state,
                loading: true // Đặt trạng thái loading thành true
            }
        case FAIL_REQUEST:
            // Khi yêu cầu bị lỗi
            return {
                ...state,
                loading: false, // Đặt trạng thái loading thành false
                errmessage: action.payload // Cập nhật thông báo lỗi từ payload của action
            }
        case ADD_ACCOUNT:
            // Khi tài khoản được thêm thành công
            return {
                ...state,
                loading: false, // Đặt trạng thái loading thành false
                errmessage: '' // Xóa thông báo lỗi
            }
        case GET_ACCOUNT_OBJ:
            // Khi nhận được thông tin tài khoản
            return {
                ...state,
                loading: false, // Đặt trạng thái loading thành false
                accountobj: action.payload // Cập nhật thông tin tài khoản từ payload của action
            }
        case LOGOUT_SUCCESS:
            // Khi người dùng đăng xuất thành công
            return {
                ...state,
                token: null, // Xóa token đăng nhập
                username: null // Xóa tên người dùng
            };
        default:
            // Nếu không có action nào phù hợp, trả về trạng thái hiện tại
            return state
    }
}