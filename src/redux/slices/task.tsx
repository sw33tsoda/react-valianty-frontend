import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'task',
    initialState: {
        list:[],
    },
    reducers: {
        add: (state,action) => {

        },
        edit: (state,action) => {

        },
        remove: (state,action) => {

        }
    }
});

export const { add, edit, remove } = taskSlice.actions;
export default taskSlice.reducer;