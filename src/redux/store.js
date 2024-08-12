import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { spendingReducer } from "./reducer/Spending.js";
import { categorySpendReducer } from "./reducer/categorySpend.js"; // Đảm bảo đường dẫn và hàm reducer đúng
import { paymentmethodReducer } from "./reducer/payment_method.js";
import { incomingReducer } from "./reducer/Income.js";
import { accountReducer } from "./reducer/admin.js";
import authSlice from "./authSlice.js";
const rootreducer = {
    spend: spendingReducer,
    categorySpend: categorySpendReducer,
    paymentmethod: paymentmethodReducer,
    income: incomingReducer,
    register: accountReducer,
    auth: authSlice
};

const Store = configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default Store;