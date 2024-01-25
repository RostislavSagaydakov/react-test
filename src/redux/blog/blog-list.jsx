import {createSlice} from "@reduxjs/toolkit";

const blogListSlice = createSlice({
    name: 'blogList', // name of the reducer
    initialState : { // default name for default state
        data: [],
        isLoading: false,
        error: '',
        total: 0,
        limit: 10,
        offset: 0
    },
    reducers: {
        pending: (state) => {state.isLoading = true},
        success: (state,action) => {
            state.isLoading = false;
            state.data = action.payload.blogs;
            state.total = action.payload.total_blogs;
            state.limit = action.payload.limit;
            state.offset = action.payload.offset;
            // console.log(action.payload)
        },
        fail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {pending, success, fail} = blogListSlice.actions; // just accept it
export default blogListSlice.reducer;