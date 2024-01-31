import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItem ({ user }) {
    // Wrapping up removeUser thunk with useThunk hook
    const [doRemoveUser, isLoadig, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user); // Passing in the user we want to delete
    };

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    {/* To indicate if the button should show the loading spinner, we pass in the "loading" prop. */}
                    {/* Whenever user clicks this button we want to run our removeUser thunk */}
                    <Button className= "mr-3 " loading={isLoadig} onClick={handleClick}>
                        <GoTrashcan /> 
                    </Button>
                    {/* If there is an error, print out a div that says: error deleting user */}
                    {error && <div>Error Deleting User...</div>}
                    {user.name}
                </div>
            </div>
        </div>
    );
};

export default UsersListItem;

