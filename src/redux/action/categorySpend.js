import axios from "axios"
import { toast } from "react-toastify"
// import Updateuser from "../Component/Updateuser"
import { FAIL_REQUEST, GET_TYPESPEND_LIST, MAKE_REQUEST } from "../type/categorySpend"

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
export const getTypeSpend = (data) => {
    return {
        type: GET_TYPESPEND_LIST,
        payload: data
    }
}


export const FetchTypeSpendList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.get('http://localhost:3000/getcategoryspend').then(res => {
                const typespendlist = res.data;
                dispatch(getTypeSpend(typespendlist));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
            // }, 2000);

    }
}