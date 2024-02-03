import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

console.log(useAddPhotoMutation);

function PhotosList ({ album }) {
    // whenever we call our useFetchPhotosQuery hook, we're going to get back the results object.
    const {data, isFetching, error} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    // If we are fetching, we are going show the skeleton loader component. If there's an error, we want to print out some 
    // error message, and if we made the request successfully we show our data. We map over map over that list of photos we just 
    // fetched and show an individual photo list item component for each photo that we fetch.

    let content;
    if(isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />
    } else if (error){ // Else if there is an error object, we set content to be a div with an error message.
        content = <div>Error fetching photos...</div>
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                {/* whenever we are currently running the mutation, we want to disable the button, and show the loading spinner.*/}
                <Button  loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
        </div>
    );
};

export default PhotosList;