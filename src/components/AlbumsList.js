import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList ({ user }) {
    // Whenever we call this hook, we are going to immediately try to fetch some data.
    // Returned from thid hook, is going to be an object and we usually care about 3 properties so we are going to destructures 
    // those properties. Data is gonna be the actual 
    // data: the data that we got back from the API.
    // error is gonna be either null if everything is okay or an error object if something went wrong.
    // isLoading is gonna be a Boolean true or false.  It's gonna be true if we are currently in the process of making the request.
    
    const { isLoading, data, error } = useFetchAlbumsQuery(user);   //* step 9 of Creating a RTK Query API

    let content;
    //  If isLoading is true, then set content to be skeleton.
    if (isLoading){
        content = <Skeleton times={3} /> // 3 is the number of boxex
    } else if (error){ // Else if there is an error object, we set content to be a div with an error message.
        content = <div>Error loading albums.</div>
    } else {
        // Else, map over the array of data object and for each one, create an ExpandablePanel with the header of the album's title.
        content = data.map((album) => {
            const header = <div>{album.title} </div>;
            return <ExpandablePanel key={album.id} header={header}>
                List of photos in the album
            </ExpandablePanel>
        });
    }

    return (
        <div>
            <div>Albums for {user.name}</div>
            <div>{content}</div>
        </div>
    )
};

export default AlbumsList;