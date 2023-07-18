import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    cart:null,
}

const CartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        setCart: (state,action)=>{
            state.cart = action.payload
        },
        removeCart:(state)=>{
            state.cart = null
        }
    }

})

export const {setCart ,removeCart} = CartSlice.actions
export default CartSlice.reducer