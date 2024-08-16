import { ADD_SPEND, DELETE_SPEND, FAIL_REQUEST, GET_SPEND_LIST, GET_SPEND_OBJ, MAKE_REQUEST, UPDATE_SPEND } from "../type/Spending";

// Định nghĩa trạng thái ban đầu của reducer
const initialstate = {
    loading: false, // Trạng thái loading khi thực hiện yêu cầu
    spendlist: [], // Danh sách các chi tiêu
    spendobj: {}, // Thông tin chi tiết về một chi tiêu cụ thể
    errmessage: '' // Thông báo lỗi
}

// Reducer để xử lý các action liên quan đến chi tiêu
export const spendingReducer = (state = initialstate, action) => {
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
        case GET_SPEND_LIST:
            // Khi nhận được danh sách chi tiêu
            return {
                loading: false, // Đặt trạng thái loading thành false
                errmessage: '', // Xóa thông báo lỗi
                spendlist: action.payload, // Cập nhật danh sách chi tiêu từ payload của action
                spendobj: {} // Xóa thông tin chi tiêu chi tiết
            }
        case DELETE_SPEND:
            // Khi xóa một mục chi tiêu
            return {
                ...state,
                loading: false // Đặt trạng thái loading thành false
            }
        case ADD_SPEND:
            // Khi thêm một mục chi tiêu
            return {
                ...state,
                loading: false, // Đặt trạng thái loading thành false
                errmessage: '' // Xóa thông báo lỗi
            }
        case UPDATE_SPEND:
            // Khi cập nhật một mục chi tiêu
            return {
                ...state,
                loading: false // Đặt trạng thái loading thành false
            }
        case GET_SPEND_OBJ:
            // Khi nhận được thông tin chi tiêu cụ thể
            return {
                ...state,
                loading: false, // Đặt trạng thái loading thành false
                spendobj: action.payload // Cập nhật thông tin chi tiêu từ payload của action
            }
        default:
            // Nếu action không phù hợp với bất kỳ trường hợp nào ở trên, trả về trạng thái hiện tại
            return state
    }
}