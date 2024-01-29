//* Creating an async thunk
// 1- Create a new file for our thunk. Name it after the purpose of the request
// 2- Create the thunk. Give it a base type that describes the purpose of the request
// 3- In the thunk, make the request , return the data that you want to use in the reducer and export our thunk function
// 4 - In the slice, add extraReducers, watching for the action types made by the thunk
// 5- Export the thunk from the store/index.js fiel
// 6- When user does something, dispatch the thunk function to run it



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// The first argument that we provide to 'createAsyncThunk' referred to as our 'base type'.
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    //This request will give us a response obj with the list of users which 
    const response = await axios.get('http://localhost:3005/users');
    return response.data;
    // response.data === [{id: 1,name: 'Laleh'}] <- this array is what we want to get access to inside our reducer
});


export { fetchUsers };
