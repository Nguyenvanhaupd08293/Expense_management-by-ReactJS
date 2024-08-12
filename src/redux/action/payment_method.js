import axios from "axios"
import { GET_PAYMENTMETHOD, MAKE_REQUEST, FAIL_REQUEST } from '../type/payment_method'
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
export const getPaymentMethodList = (data) => {
    return {
        type: GET_PAYMENTMETHOD,
        payload: data
    }
}
export const ListPaymentmethod = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.get('http://localhost:3000/paymentmethod').then(res => {
                const paymentlist = res.data;
                dispatch(getPaymentMethodList(paymentlist));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
            // }, 2000);
    }
}