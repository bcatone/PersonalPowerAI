import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import isLoadingReducer from "./reducers/isLoadingReducer";
import errorReducer from "./reducers/errorReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        isLoading: isLoadingReducer,
        error: errorReducer
    }
})

export default store;