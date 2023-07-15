import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    customer:null
}

const RegisterSlice = createSlice ({
    name: "registerSkice",
    initialState,
    reducers:{
        customers:(state,action)=>{
            state.user = action.payload
        }
    }
})

export const {customers} = RegisterSlice.actions

export default RegisterSlice.reducer