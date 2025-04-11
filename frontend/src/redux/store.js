import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobsReducer from "./jobSlice";
const store=configureStore({
    reducer:{
        auth:authSlice,
        jobs: jobsReducer
    }
});
export default store;