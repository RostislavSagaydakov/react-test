import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'topSearch', // name of the reducer
    initialState : { // default name for default state
        data: [],
        isLoading: false,
        error: '',
        total: 0
    },
    reducers: {
        pending: (state) => {state.isLoading = true},
        success: (state,action) => {
            state.isLoading = false;
            state.data = action.payload.products;
            state.total = action.payload.total;
        },
        fail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {pending, success, fail} = searchSlice.actions; // just accept it
export default searchSlice.reducer;