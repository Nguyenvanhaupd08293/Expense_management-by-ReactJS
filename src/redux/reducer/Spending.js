import { ADD_SPEND, DELETE_SPEND, FAIL_REQUEST, GET_SPEND_LIST, GET_SPEND_OBJ, MAKE_REQUEST, UPDATE_SPEND } from "../type/Spending"

const initialstate = {
    loading: false,
    spendlist: [],
    spendobj: {},
    errmessage: ''
}

export const spendingReducer = (state = initialstate, action) => {
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
        case GET_SPEND_LIST:
            return {
                loading: false,
                errmessage: '',
                spendlist: action.payload,
                spendobj: {}
            }
        case DELETE_SPEND:
            return {
                ...state,
                loading: false
            }
        case ADD_SPEND:
            return {
                ...state,
                loading: false,
                errmessage: ''
            }
        case UPDATE_SPEND:
            return {
                ...state,
                loading: false
            }
        case GET_SPEND_OBJ:
            return {
                ...state,
                loading: false,
                spendobj: action.payload
            }
        default:
            return state
    }
}