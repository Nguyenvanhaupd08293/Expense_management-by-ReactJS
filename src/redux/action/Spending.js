import axios from "axios"
import { toast } from "react-toastify"
import { ADD_SPEND, DELETE_SPEND, FAIL_REQUEST, GET_SPEND_LIST, GET_SPEND_OBJ, MAKE_REQUEST, UPDATE_SPEND } from "../type/Spending"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getSpendList = (data) => {
    return {
        type: GET_SPEND_LIST,
        payload: data
    }
}

export const deleteSpend = () => {
    return {
        type: DELETE_SPEND
    }
}

export const addSpend = () => {
    return {
        type: ADD_SPEND
    }
}

export const updateSpend = (data) => {
    return {
        type: UPDATE_SPEND,
        payload: data // Truyền dữ liệu cập nhật để reducer có thể sử dụng
    }
}

export const getSpendObj = (data) => {
    return {
        type: GET_SPEND_OBJ,
        payload: data
    }
}

export const FetchSpendList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/spending')
            .then(res => {
                const spendlist = res.data;
                dispatch(getSpendList(spendlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const RemoveSpend = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.delete('http://localhost:3000/spending/' + id)
                .then(res => {
                    dispatch(deleteSpend());
                    toast.success('Xóa chi tiêu thành công.');
                })
                .catch(err => {
                    dispatch(failRequest(err.message))
                    toast.error('Lỗi khi xóa chi tiêu.')
                })
        }, 1000);
    }
}

export const FunctionAddSpend = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:3000/add/spending', data)
            .then(res => {
                dispatch(addSpend());
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const FunctionUpdateSpend = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:3000/spending/' + id, data)
            .then(res => {
                dispatch(updateSpend(data)); // Truyền dữ liệu cập nhật để lưu vào store
                toast.success('Cập nhật chi tiêu thành công.')
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const FetchSpendObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/spending/' + id)
            .then(res => {
                const Spendlist = res.data;
                dispatch(getSpendObj(Spendlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}