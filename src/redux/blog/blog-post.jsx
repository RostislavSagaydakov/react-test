import {createSlice} from "@reduxjs/toolkit";

const blogPostSlice = createSlice({
    name: 'blogPost', // name of the reducer
    initialState : { // default name for default state
        data: {},
        isLoading: false,
        error: '',
    },
    reducers: {
        pending: (state) => {state.isLoading = true},
        success: (state,action) => {
            state.isLoading = false;
            state.data = action.payload.blog;
        },
        fail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {pending, success, fail} = blogPostSlice.actions; // just accept it
export default blogPostSlice.reducer;