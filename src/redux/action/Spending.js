import axios from "axios";
import { toast } from "react-toastify";
import { ADD_SPEND, DELETE_SPEND, FAIL_REQUEST, GET_SPEND_LIST, GET_SPEND_OBJ, MAKE_REQUEST, UPDATE_SPEND } from "../type/Spending";

// Action creator để bắt đầu một yêu cầu
export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

// Action creator để xử lý lỗi yêu cầu
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

// Action creator để lưu danh sách chi tiêu vào Redux store
export const getSpendList = (data) => {
    return {
        type: GET_SPEND_LIST,
        payload: data
    }
}

// Action creator để xóa một mục chi tiêu
export const deleteSpend = () => {
    return {
        type: DELETE_SPEND
    }
}

// Action creator để thêm một mục chi tiêu
export const addSpend = () => {
    return {
        type: ADD_SPEND
    }
}

// Action creator để cập nhật một mục chi tiêu
export const updateSpend = (data) => {
    return {
        type: UPDATE_SPEND,
        payload: data // Truyền dữ liệu cập nhật để reducer có thể sử dụng
    }
}

// Action creator để lấy thông tin chi tiêu
export const getSpendObj = (data) => {
    return {
        type: GET_SPEND_OBJ,
        payload: data
    }
}

// Hàm để lấy danh sách chi tiêu từ server
export const FetchSpendList = () => {
    return (dispatch) => {
        dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu
        axios.get('http://localhost:3000/spending')
            .then(res => {
                const spendlist = res.data;
                dispatch(getSpendList(spendlist)); // Cập nhật Redux store với danh sách chi tiêu
            })
            .catch(err => {
                dispatch(failRequest(err.message)) // Xử lý lỗi nếu có
            })
    }
}

// Hàm để xóa một mục chi tiêu
export const RemoveSpend = (id) => {
    return (dispatch) => {
        dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu
        setTimeout(() => { // Giả lập độ trễ trong yêu cầu
            axios.delete('http://localhost:3000/spending/' + id)
                .then(res => {
                    dispatch(deleteSpend()); // Cập nhật Redux store sau khi xóa
                    toast.success('Xóa chi tiêu thành công.'); // Hiển thị thông báo thành công
                })
                .catch(err => {
                    dispatch(failRequest(err.message)) // Xử lý lỗi nếu có
                    toast.error('Lỗi khi xóa chi tiêu.') // Hiển thị thông báo lỗi
                })
        }, 1000);
    }
}

// Hàm để thêm một mục chi tiêu
export const FunctionAddSpend = (data) => {
    return (dispatch) => {
        dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu
        axios.post('http://localhost:3000/add/spending', data)
            .then(res => {
                dispatch(addSpend()); // Cập nhật Redux store sau khi thêm
            })
            .catch(err => {
                dispatch(failRequest(err.message)) // Xử lý lỗi nếu có
            })
    }
}

// Hàm để cập nhật một mục chi tiêu
export const FunctionUpdateSpend = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu
        axios.put('http://localhost:3000/spending/' + id, data)
            .then(res => {
                dispatch(updateSpend(data)); // Cập nhật Redux store với dữ liệu cập nhật
                toast.success('Cập nhật chi tiêu thành công.') // Hiển thị thông báo thành công
            })
            .catch(err => {
                dispatch(failRequest(err.message)) // Xử lý lỗi nếu có
            })
    }
}

// Hàm để lấy thông tin chi tiêu theo id
export const FetchSpendObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu
        axios.get('http://localhost:3000/spending/' + id)
            .then(res => {
                const Spendlist = res.data;
                dispatch(getSpendObj(Spendlist)); // Cập nhật Redux store với thông tin chi tiêu
            })
            .catch(err => {
                dispatch(failRequest(err.message)) // Xử lý lỗi nếu có
            })
    }
}