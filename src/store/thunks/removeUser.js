import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => { // user is going to be an obj with a name and id
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    // Fix !!!
    return user;
});

export { removeUser };

