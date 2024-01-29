//* Creating an async thunk
// 1- Create a new file for our thunk. Name it after the purpose of the request //* step 1, created fetchUsers Thunk
// 2- Create the thunk. Give it a base type as a first argument, that describes the purpose of the request
// 3- In the thunk, make the request , return the data that you want to use in the reducer and export our thunk function
// 4- In the slice, import the "fetchUsers", add extraReducers, watching for the action types made by the thunk //* inside "usersSlice"
// 5- Export the thunk from the store/index.js fiel //* iside the store
// 6- When user does something, dispatch the thunk function to run it



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// The first argument that we provide to 'createAsyncThunk' referred to as our 'base type'.
const fetchUsers = createAsyncThunk('users/fetch', async () => { // 'users/fetch' is our base type //* step 2
    //This request will give us a response obj with the list of users which 
    const response = await axios.get('http://localhost:3005/users'); //* step 3

    return response.data; // <- Whatever we return here is automatically assigned to the payload property of the fulfilled action type.
    // response.data === [{id: 1,name: 'Laleh'}] <- this array is what we want to get access to inside our reducer
});

export { fetchUsers }; //* step 3
