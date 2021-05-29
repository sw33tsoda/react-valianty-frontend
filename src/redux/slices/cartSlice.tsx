import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        list:[],
    },
    reducers:{
        addToCart(state,payload){

        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;