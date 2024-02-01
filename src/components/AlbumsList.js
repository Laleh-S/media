import { useFetchAlbumsQuery } from "../store";

function AlbumsList ({ user }) {
    // Whenever we call this hook, we are going to immediately try to fetch some data.
    // Returned from thid hook, is going to be an object and we usually care about 3 properties so we are going to destructures 
    // those properties. Data is gonna be the actual 
    // data: the data that we got back from the API.
    // error is gonna be either null if everything is okay or an error object if something went wrong.
    // isLoading is gonna be a Boolean true or false.  It's gonna be true if we are currently in the process of making the request.
    
    const { isLoading, data, error } = useFetchAlbumsQuery(user);   //* step 9 of Creating a RTK Query API
    console.log(data, error, isLoading)
    return <div>Albums for {user.name}</div>
};

export default AlbumsList;