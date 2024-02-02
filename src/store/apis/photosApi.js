import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'photos', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005', // base url of JSON server
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                query: (album) => { // This is the album we want to fetch the photos for
                    return {
                        url: '/photos',
                        params: { // used to define query strings
                            albumId: album.id
                        },
                        method: 'GET',
                    };
                },
            }),
            addPhoto: builder.mutation({}),
            RemovePhoto: builder.mutation({}),
        };
    }
});