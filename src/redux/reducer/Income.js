import { ADD_INCOME, DELETE_INCOME, FAIL_REQUEST, GET_INCOME_LIST, GET_INCOME_OBJ, MAKE_REQUEST, UPDATE_INCOME } from "../type/Income"

const initialstate = {
    loading: false,
    incomelist: [],
    incomeobj: {},
    errmessage: ''
}

export const incomingReducer = (state = initialstate, action) => {
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
        case GET_INCOME_LIST:
            return {
                loading: false,
                errmessage: '',
                incomelist: action.payload,
                incomeobj: {}
            }
        case DELETE_INCOME:
            return {
                ...state,
                loading: false
            }
        case ADD_INCOME:
            return {
                ...state,
                loading: false,
                errmessage: ''
            }
        case UPDATE_INCOME:
            return {
                ...state,
                loading: false
            }
        case GET_INCOME_OBJ:
            return {
                ...state,
                loading: false,
                incomeobj: action.payload
            }
        default:
            return state
    }
}