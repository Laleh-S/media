// usersSlice is going to store the list of users that changes over time as we fetch data, create new users and delete users.
// so UserSlice manages everything related to the users

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers"; //* step 4 of creating a thunk
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [], // The list of users that grows over time as we fetch data and create new users
        isLoading: false,
        error: null
    },
    //* step 4 of creating a thunk (Watch for the actions that are being automatically dispatched.)
    // The extraReducers allow us to watch for some additional action types. To watch for actions that are being dispatched
    // that are not inherently tied to the slice. So we want to watch for "pending", "fulfilled", and "rejected". 
    // To tell Redux Toolkit that we want to watch for the above actions, we call "builder.addCase" 3 separate times.
    extraReducers(builder) { 
        // ++++++++++ fetchUser Builder Cases ++++++++++
        // +++++++++++++++++++++++++++++++++++++++++++++
        builder.addCase(fetchUsers.pending, (state, action) => {
            // when we start the request, we want to change isLoading to be true
            state.isLoading = true;
        }); 
        builder.addCase(fetchUsers.fulfilled, (state, action) => { // <- the "action" here contains our data which is the list of users. 
            // If request completed successfully, we want isLoading to be false 
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase(fetchUsers.rejected, (state, action) => { 
            // If something went wrong we set isLoading to false 
            state.isLoading = false;
            state.error = action.error; // Set the error piece of state to be the error object.
        });

        // ++++++++++ addUser ++++++++++
        // +++++++++++++++++++++++++++++
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload); // <- Push a new user to our data
        });

        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }, 
}); // Making the userSlice using createSlice helper.

export const usersReducer = usersSlice.reducer;



