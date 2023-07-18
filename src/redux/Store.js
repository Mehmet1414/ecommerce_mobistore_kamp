import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CategorySlice from "./CategorySlice";
import menuSlice from "./MenuSlice";
import RegisterSlice from "./CustomerSlice";
import CartSlice from "./CartSlice";


export const store = configureStore({
    reducer:{
        categoryState:CategorySlice,
        authState:AuthSlice,
        menuState:menuSlice,
        customerState:RegisterSlice,
        cartState:CartSlice
        
    },
})