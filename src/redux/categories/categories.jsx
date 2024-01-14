import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories', // name of the reducer
    initialState : { // default name for default state
        data: [],
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

export const {pending, success, fail} = categoriesSlice.actions; // just accept it
export default categoriesSlice.reducer;