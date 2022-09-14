import { createSlice } from "@reduxjs/toolkit";
// import defaultimage from '../assets/noprofileimage.jpeg'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedin: false,
        profile: {
            name: "Guest",
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.isLoggedin = true
            state.profile = { ...action.payload.profile }
        },
        clearUser: (state, action) => {
            state.isLoggedin = false
            state.profile = {}
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;