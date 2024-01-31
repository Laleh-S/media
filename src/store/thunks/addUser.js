//! Note
// Follow all the notes and steps for creating a thunk inside fetchUsers.js thunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";


const addUser = createAsyncThunk('users/add', async () => { // The first argument 'user/add', can be anything that makes sense.
    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName(),
    });
    
    return response.data; // Whatever we put here is going to show up in fullfilled action payload.
});

export { addUser };


