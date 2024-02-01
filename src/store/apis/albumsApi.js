// Note:
// When working with Redux Toolkit Query, the term API is not a backend server. It is something we're going to create on the React 
// or front-end side of our project that's going to make it easier for us to interact with our JSON server.

//! Creating a RTK Query API
// 1- Identify a group of related requests that your app needs to make. 
// 2- Make the new file that will create the API.
// 3- The API needs to store a tone of state related to data, request staus, error. Add a "reducerPath".
// 4- The API needs to know how and where to send requests. Add a "baseQuary"
// 5- Add "endpoints", one for each kind of request you want to make. Reqs that read data are queries, write data are mutation.
// 6- Export all the automatically generated hooks.
// 7- connect the API to the store. Reducer, middleware and listeners.
// 8- Export the hooks from the store/index.js file
// 9- Use the generated hooks in a component.


// fetch, create, delete requests for Users, Albums, photos. //* step 1 of Creating a RTK Query API
// We created this file inside store directory //* step 2 of Creating a RTK Query API

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const albumsApi = createApi({
    reducerPath: 'albums',  //* step 3 of Creating a RTK Query API
    // The fetchBaseQuery will give us a pre-configured version of fetch.
    baseQuery: fetchBaseQuery({  //* step 4 of Creating a RTK Query API
    // The baseUrl is the root URL, of the server that we want to make requests to. For us the base URL of JSON Server,
    baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){  //* step 5 of Creating a RTK Query API
        return {
            fetchAlbums: builder.query({
                query: (user) => { // the user is an object with a name and an id.
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    };
                }
            })
        };
    }
});

// Because we added in fetchAlbums inside our endpoint quary specifically, we now get access to a hook called 
// "albumsApi.useFetchAlbumsQuery". This is a hook that we will eventually use inside of one of our components.
// If put getAlbums instead, then the name of the hook would've instead been "useGetAlbumsQuery".

//* step 6 of Creating a RTK Query API
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };