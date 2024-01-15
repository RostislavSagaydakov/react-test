import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products', // name of the reducer
    initialState : { // default name for default state
        data: {products: [], total: 0},
        isLoading: false,
        error: ''
    },
    reducers: {
        pending: (state) => {state.isLoading = true},
        success: (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        fail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {pending, success, fail} = productsSlice.actions; // just accept it
export default productsSlice.reducer;