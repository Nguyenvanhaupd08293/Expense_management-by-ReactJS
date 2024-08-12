import { FAIL_REQUEST, GET_TYPESPEND_LIST, MAKE_REQUEST } from "../type/categorySpend"

const initialstate = {
    loading: true,
    typespendlist: [],
    typespendobj: {},
    errmessage: ''
}

export const categorySpendReducer = (state = initialstate, action) => {
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
        case GET_TYPESPEND_LIST:
            return {
                loading: false,
                errmessage: '',
                typespendlist: action.payload,
                typespendobj: {}
            }
        default:
            return state
    }
}