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

    let content;
    // If loading users is true, we assign the skeleton to the content variable.
    if (isLoadingUsers){
        // times={6} -> Return 6 lines of boxex. w-full ->  Expands the X direction as much as possible.
        content = <Skeleton times={6} className="h-10 w-full"/> 
        // If not loading users, but there is an error we assign the div with error message to the content variable.
    } else if (loadingUsersError){ 
        content = <div>Error fetching data...</div>
        // If not loading users and there are no errors then we assign the list of users to the content variable.
    } else {
        content = data.map((user) => {
            // for every user will return a div that have a key of user.id
            return (
                <div key={user.id} className="mb-2 border rounded">
                    <div className="flex p-2 justify-between items-center cursor-pointer">
                        {user.name}
                    </div>
                </div>
            );
        });
    }

    // Header is always visible
    return <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handdleAddUser}>
                    + Add User
                </Button>
                {/* If that is truthy, if we do have an error, print out error message*/}
                {creatingUserError && 'Error Creating User...'}  
            </div>
            {content}
        </div>
    
}; 

export default UsersList;





