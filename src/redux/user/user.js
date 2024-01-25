import {createSlice} from "@reduxjs/toolkit";
import actions from "../../templates/default/header/actions";

const userSlice = createSlice({
    name: 'user', // name of the reducer
    initialState : { // default name for default state
        data: {},
        isLoading: false,
        error: ''
    },
    reducers: {
        pending: (state) => {state.isLoading = true},
        success: (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
        },
        fail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        authFromLocalStorage: (state) => {
            let userData = {}
            try {
                userData = JSON.parse(window.localStorage.getItem("currentUser"))
            } catch(error) {
                console.warn('No user in local storage')
            }
            state.data = userData
        },
        logout: (state) => {
            state.data = {}
            localStorage.removeItem("currentUser")
        }
    }
})

export const {pending, success, fail, authFromLocalStorage, logout} = userSlice.actions; // just accept it
export default userSlice.reducer;