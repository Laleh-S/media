// usersSlice is going to store the list of users that changes over time as we fetch data, create new users and delete users.
// so UserSlice manages everything related to the users

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers"; //* step 4 of creating a thunk

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
        builder.addCase(fetchUsers.pending, (state, action) => {
            // when we start the request, we want to change isLoading to be true
            state.isLoading = true;
        }); 
        builder.addCase(fetchUsers.fulfilled, (state, action) => { // <- the "action" here contains our data which is the list of users. 
            // If request completed successfully, we want isLoading to be false 
            state.isLoading = false;
            // set the data to whatever data we fetching
            state.data = action.payload; // <- The "payload is the data we actually fetch"

        });
        builder.addCase(fetchUsers.rejected, (state, action) => { 
            // if something went wrong we set isLoading to false 
            state.isLoading = false;
            //  set the error piece of state to be the error object.
            state.error = action.error;
        });
    }
}); // Making the userSlice using createSlice helper.

export const usersReducer = usersSlice.reducer;



