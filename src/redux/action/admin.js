import axios from "axios";
import { toast } from "react-toastify";
import { setToken } from '../authSlice';
import Cookies from 'js-cookie';
import { ADD_ACCOUNT, FAIL_REQUEST, GET_ACCOUNT_OBJ, MAKE_REQUEST, ACCOUT_LOGIN } from "../type/admin";

// Action creator để bắt đầu một yêu cầu
export const makeRequest = () => ({ type: MAKE_REQUEST });

// Action creator để xử lý lỗi yêu cầu
export const failRequest = (err) => ({
    type: FAIL_REQUEST,
    payload: err
});

// Action creator để thêm tài khoản sau khi đăng ký thành công
export const addAccount = () => ({ type: ADD_ACCOUNT });

// Action creator để xử lý thành công đăng nhập
export const addLogin = () => ({ type: ACCOUT_LOGIN });

// Action creator để lấy thông tin tài khoản từ server
export const getAccountObj = (data) => ({
    type: GET_ACCOUNT_OBJ,
    payload: data
});

// Hàm xử lý đăng ký tài khoản
export const FunctionAddAccount = (userObj) => async(dispatch) => {
    dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu

    try {
        // Gửi yêu cầu đăng ký đến server
        const response = await fetch('http://localhost:3000/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        });

        // Kiểm tra phản hồi từ server
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Đã xảy ra lỗi khi đăng ký');
        }

        const data = await response.json();
        const token = data.token; // Giả sử máy chủ trả về JWT token
        const username = userObj.username;

        // Lưu token vào Redux store
        dispatch(setToken(token));

        // Lưu token và username vào cookie
        Cookies.set('token', token);
        Cookies.set('username', username);

        // Cập nhật Redux store với thông tin đăng ký thành công
        dispatch(addAccount());
        toast.success('Đăng ký thành công');
    } catch (error) {
        console.error('Lỗi:', error);
        toast.error(error.message || 'Đã xảy ra lỗi khi đăng ký');
        dispatch(failRequest(error.message));
    }
};

// Hàm xử lý đăng nhập
export const FunctionLogin = (email, password) => async(dispatch) => {
    dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu

    try {
        // Gửi yêu cầu đăng nhập đến server
        const response = await axios.post('http://localhost:3000/account/login', { email, password });

        // Kiểm tra phản hồi từ server
        if (response.status === 200) {
            const { accessToken, user } = response.data;
            // Lưu token vào Redux store
            dispatch(setToken(accessToken));

            // Lưu token và username vào cookie
            Cookies.set('token', accessToken);
            Cookies.set('username', user.username);

            // Cập nhật Redux store với thông tin đăng nhập thành công
            dispatch(addLogin());
            toast.success('Đăng nhập thành công');
        } else {
            throw new Error('Đăng nhập không thành công');
        }
    } catch (error) {
        console.error('Lỗi:', error);
        toast.error(error.message || 'Đã xảy ra lỗi khi đăng nhập');
        dispatch(failRequest(error.message));
    }
};

// Hàm lấy thông tin tài khoản
export const FetchAccountObj = (id) => async(dispatch) => {
    dispatch(makeRequest()); // Gửi action để bắt đầu yêu cầu

    try {
        // Gửi yêu cầu lấy thông tin tài khoản đến server
        const res = await axios.get('http://localhost:3000/Accounting/' + id);
        const Accountlist = res.data;

        // Cập nhật Redux store với thông tin tài khoản
        dispatch(getAccountObj(Accountlist));
    } catch (err) {
        console.error('Lỗi:', err);
        dispatch(failRequest(err.message));
        toast.error('Đã xảy ra lỗi khi lấy thông tin tài khoản');
    }
};