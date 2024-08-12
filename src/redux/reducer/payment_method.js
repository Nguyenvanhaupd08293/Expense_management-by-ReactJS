import axios from "axios"
import { toast } from "react-toastify"
// import Updateuser from "../Component/Updateuser"
import { FAIL_REQUEST, GET_PAYMENTMETHOD, MAKE_REQUEST } from "../type/payment_method"

const initialstate = {
    loading: true,
    paymentlist: [],
    paymentobj: {},
    errmessage: ''
}
export const paymentmethodReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_PAYMENTMETHOD:
            return {
                loading: false,
                errmessage: '',
                paymentlist: action.payload,
                paymentobj: {}
            }
        default:
            return state
    }
}