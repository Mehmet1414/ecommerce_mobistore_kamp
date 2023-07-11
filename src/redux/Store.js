import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CategorySlice from "./CategorySlice";
import menuSlice from "./MenuSlice";


export const store = configureStore({
    reducer:{
        categoryState:CategorySlice,
        authState:AuthSlice,
        menuState:menuSlice,
    },
})