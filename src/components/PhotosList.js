import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";

console.log(useAddPhotoMutation);

function PhotosList ({ album }) {
    useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                {/* whenever we are currently running the mutation, we want to disable the button, and show the loading spinner.*/}
                <Button  loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
        </div>
    );
};

export default PhotosList;