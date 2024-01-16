import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [] // The list of users that grows over time.
    },
    reducers: {}
}); // Making the userSlice using createSlice helper.

export const usersReducer = usersSlice.reducer;