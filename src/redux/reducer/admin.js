import { ADD_ACCOUNT, FAIL_REQUEST, LOGOUT_SUCCESS, GET_ACCOUNT_OBJ, MAKE_REQUEST, } from "../type/admin"
import Cookies from 'js-cookie';
const initialstate = {
    loading: false,
    accountlist: [],
    token: null,
    username: null,
    accountobj: {},
    errmessage: ''
}

export const accountReducer = (state = initialstate, action) => {
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
        case ADD_ACCOUNT:
            return {
                ...state,
                loading: false,
                errmessage: ''
            }
        case GET_ACCOUNT_OBJ:
            return {
                ...state,
                loading: false,
                accountobj: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                username: null
            };
        default:
            return state
    }
}