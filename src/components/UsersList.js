// Whenever userList appears on screen we want to fetch some data

// useSelector
// We make use of "useSelector hook" to access our states inside of a component. 

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";


function UsersList () {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => { // calling useSelector with our big "state" object.
        return state.users; // ->  give us the user portion of the state {data:[], isLoadig:false, error:null} So we need to
        // destructure these properties from what gets returned from useSelector and use them to customize what our component displays.
    });

    useEffect(() => { //* step 6 of creating a thunk
        doFetchUsers()
    }, []); // Runs automatically the first time our component is rendered onto the page when we put [] as second argument

    const handdleAddUser = () => {
        doCreateUser()
    };

    // Show a loading message if isLoadingUsers is true
    if (isLoadingUsers){
        // times={6} -> Return 6 lines of boxex. w-full ->  Expands the X direction as much as possible.
        return <Skeleton times={6} className="h-10 w-full"/> 
    }

    // If an error accurs with our request, showing an error message.
    if (loadingUsersError){
        return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map((user) => {
        // for every user will return a div that have a key of user.id
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });
    // When we get our date, hide the loading message and show list of users
    // Mapping over that data array, rendering out each individual user inside of a gray box,
    return <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {
                    // If creating a user, show 'creating user' message, else show the button.
                    isCreatingUser ? 'Creating User...' : <Button onClick={handdleAddUser}>+ Add User</Button>
                }
                    {/*// If that is truthy, if we do have an error, print out error message*/}
                {creatingUserError && 'Error Creating User...'}  
            </div>
            {renderedUsers}
        </div>
    
}; 

export default UsersList;





