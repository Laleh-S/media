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
                providesTags: (result, error, album) => { // "album" is the argument we provided to our query hook. 
                    // going to build up our list of tags by mapping over the results.
                    const tags = result.map((photo) => { 
                        // for every single photo, I will return an object with a type of Photo and an id of the photos.id.
                        return {type: 'photo', id: photo.id}
                    });
                    // Then going tags.push, one more object with a type of Albums to the very end of that array.
                    tags.push({ type: 'AlbumPhoto', id: album.id });
                    return tags;
                },
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
                invalidatesTags: (result, error, album) => {
                    return [{type: 'AlbumPhoto', id: album.id}];
                },
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
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'photo', id: photo.id }];
                },
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