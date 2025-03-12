"use client"
const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
})

const { setUser } = userSlice.actions;
export default userSlice.reducer;
