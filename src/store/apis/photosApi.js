import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'photos', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005', // base url of JSON server
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({}),
            addPhoto: builder.mutation({}),
            RemovePhoto: builder.mutation({})
        };
    }
});