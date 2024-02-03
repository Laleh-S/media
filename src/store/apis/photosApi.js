import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
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
            addPhoto: builder.mutation({
                query: (album) => { // This is the album we want to fetch the photos for
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            // 150 width and height, true argument is that we always get random photo
                            url: faker.image.abstract(150, 150, true) 
                        }
                    };
                },
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE',
                    };
                }
            }),
        };
    }
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation} = photosApi;

export { photosApi }