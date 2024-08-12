import axios from "axios"
import { toast } from "react-toastify";
import { setToken } from '../authSlice';
import Cookies from 'js-cookie'
import { ADD_ACCOUNT, FAIL_REQUEST, GET_ACCOUNT_OBJ, MAKE_REQUEST, ACCOUT_LOGIN } from "../type/admin"

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

export const addAccount = () => {
    return {
        type: ADD_ACCOUNT
    }
}
export const addLogin = () => {
    return {
        type: ACCOUT_LOGIN
    }
}
export const getAccountObj = (data) => {
    return {
        type: GET_ACCOUNT_OBJ,
        payload: data
    }
}


export const FunctionAddAccount = (userObj) => async(dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        });

        if (!response.ok) {
            throw new Error('Đăng ký không thành công');
        }

        const data = await response.json();
        const token = data.token; // Giả sử server trả về JWT token
        const username = userObj.username;

        // Lưu token vào Redux store
        dispatch(setToken(token));

        // Lưu token và tên người dùng vào cookie
        Cookies.set('token', token, {}); // Cookie hết hạn sau 7 ngày
        Cookies.set('username', username);

    } catch (error) {
        console.error('Lỗi:', error);
    }
};
export const FunctionLogin = (email, password) => async(dispatch) => {
    try {
        dispatch(makeRequest());

        // Gửi yêu cầu đăng nhập đến server
        const response = await axios.post('http://localhost:3000/account/login', { email, password });

        // Kiểm tra phản hồi từ server
        if (response.status === 200) {
            const { accessToken, user } = response.data;

            // Lưu token vào Redux store
            dispatch(setToken(accessToken));

            // Lưu token và tên người dùng vào cookie
            Cookies.set('token', accessToken, {});
            Cookies.set('username', user.username, {});

            // Cập nhật Redux store với thông tin đăng nhập thành công
            dispatch(addLogin());

            toast.success('Đăng nhập thành công!');
        } else {
            throw new Error('Đăng nhập không thành công');
        }
    } catch (error) {
        console.error('Lỗi:', error);
        toast.error('Đã xảy ra lỗi khi đăng nhập');
        dispatch(failRequest(error.message));
    }
};

export const FetchAccountObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:3000/Accounting/' + id)
            .then(res => {
                const Accountlist = res.data;
                dispatch(getAccountObj(Accountlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}