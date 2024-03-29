
//! isFetching:
// set to true every time we make the request.

//! isLoading:
// is only set to true the first time we make the request.

import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem"

function AlbumsList ({ user }) {
    // Whenever we call this hook, we are going to immediately try to fetch some data.
    // Returned from this hook, is going to be an object and we usually care about 3 properties so we are going to destructures 
    // those properties. Data is gonna be the actual 
    // data: is the data that we got back from the API.
    // error: going to be either null if everything is okay or an error object if something goes wrong.
    // isFetching: going to be a Boolean true or false.  True if we are currently in the process of making the request.
    
    const { isFetching, data, error } = useFetchAlbumsQuery(user);   //* step 9 of Creating a RTK Query API
    const [ addAlbum, results] = useAddAlbumMutation();
    
    const handleAddAlbum = () => {
        addAlbum(user); // This is the user we want to tie this album to 
    };
    
    let content;
    //  If isLoading is true, then set content to be skeleton.
    if (isFetching){
        content = <Skeleton className="h-10 w-full" times={3} /> // 3 is the number of boxex and height and width.
    } else if (error){ // Else if there is an error object, we set content to be a div with an error message.
        content = <div>Error fetching albums...</div>
    } else {
        // Else, map over the array of data object and for each one, create an ExpandablePanel with the header of the album's title.
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album}/>
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold ">Albums for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            
            <div>{content}</div>
        </div>
    )
};

export default AlbumsList;