// Whenever userList appears on screen we want to fetch some data

// useSelector
// We make use of "useSelector hook" to access our states inside of a component. 

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList () {
    const dispatch = useDispatch(); // accessing to the dispatch function 
    const { isLoading, data, error } = useSelector((state) => { // calling useSelector with our big "state" object.
        return state.users; // ->  give us the user portion of the state {data:[], isLoadig:false, error:null} So we need to
        // destructure these properties from what gets returned from useSelector and use them to customize what our component displays.
    });

    useEffect(() => { //* step 6 of creating a thunk
        dispatch(fetchUsers());
    }, []); // Runs automatically the first time our component is rendered onto the page when we put [] as second argument


    const handdleAddUser = () => {
        // To run a thunk, we call dispatch and pass in the thunk function and call it at the same time.
        dispatch(addUser());
    };

    // Show a loading message while we are making a request
    if (isLoading){
        // times={6} -> Return 6 lines of boxex. w-full ->  Expands the X direction as much as possible.
        return <Skeleton times={6} className="h-10 w-full"/> 
    }

    // If an error accurs with our request, showing an error message.
    if (error){
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
                <Button onClick={handdleAddUser}>
                    + Add User
                </Button>
            </div>
            {renderedUsers}
        </div>
    
};

export default UsersList;





