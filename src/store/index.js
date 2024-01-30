//! Note:
// This file is serving as a central export point for everything related to our Redux stuff. so that our components don't have 
// to import from the deeply nested slices and files.

import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";


// Exporting store so we can wire it up to React side of application.
export const store = configureStore({ // create store by calling configureStore
    reducer: {
        users: usersReducer,
    },
});

export * from './thunks/fetchUsers'; //* step 5 of creating a thunk
export * from './thunks/addUser';


