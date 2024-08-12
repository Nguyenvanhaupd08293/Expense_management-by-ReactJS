import axios from "axios"
import { toast } from "react-toastify"
import { ADD_INCOME, DELETE_INCOME, FAIL_REQUEST, GET_INCOME_LIST, GET_INCOME_OBJ, MAKE_REQUEST, UPDATE_INCOME } from "../type/Income"

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

export const getIncomeList = (data) => {
    return {
        type: GET_INCOME_LIST,
        payload: data
    }
}

export const deleteIncome = () => {
    return {
        type: DELETE_INCOME
    }
}

export const addIncome = () => {
    return {
        type: ADD_INCOME
    }
}

export const updateIncome = (data) => {
    return {
        type: UPDATE_INCOME,
        payload: data // Truyền dữ liệu cập nhật để reducer có thể sử dụng
    }
}

export const getIncomeObj = (data) => {
    return {
        type: GET_INCOME_OBJ,
        payload: data
    }
}

export const FetchIncomeList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/income')
            .then(res => {
                const spendlist = res.data;
                dispatch(getIncomeList(spendlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const RemoveIncome = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.delete('http://localhost:3000/income/' + id)
                .then(res => {
                    dispatch(deleteIncome());
                    toast.success('Xóa chi tiêu thành công.');
                })
                .catch(err => {
                    dispatch(failRequest(err.message))
                    toast.error('Lỗi khi xóa chi tiêu.')
                })
        }, 1000);
    }
}

export const FunctionAddIncome = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:3000/add/income', data)
            .then(res => {
                dispatch(addIncome());
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const FunctionUpdateIncome = (data, id) => {
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

export const FetchIncomeObj = (id) => {
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