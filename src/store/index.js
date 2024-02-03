//! Note:
// This file is serving as a central export point for everything related to our Redux stuff. so that our components don't have 
// to import from the deeply nested slices and files.


import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";



// Whenever we create an API, a slice is created for us automatically. And that slice is gonna make a combined reducer. We have to 
//connect that combined reducer up to all of our different reducers in this reducer object.

// Exporting store so we can wire it up to React side of application.
export const store = configureStore({ // create store by calling configureStore
    reducer: {
        users: usersReducer,
        // "[albumsApi.reducerPath]" is a string not an array. it says go and look up the reducerPath property and put a new key
        // inside of this object of whatever that string is.
        [albumsApi.reducerPath]: albumsApi.reducer,  //* step 7 of Creating a RTK Query API
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {   //* step 6 of Creating a RTK Query API
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    }
});

// This is a one time setup.
setupListeners(store.dispatch)   //* step 6 of Creating a RTK Query API

export * from './thunks/fetchUsers';  //* step 5 of creating a thunk
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';  //* step 8 of Creating a RTK Query API
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';
