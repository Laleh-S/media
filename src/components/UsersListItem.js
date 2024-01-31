import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem ({ user }) {
    // Wrapping up removeUser thunk with useThunk hook
    const [doRemoveUser, isLoadig, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user); // Passing in the user we want to delete
    };

    const header = <>
        {/* To indicate if the button should show the loading spinner, we pass in the "loading" prop. */}
        {/* Whenever user clicks this button we want to run our removeUser thunk */}
        <Button className= "mr-3 " loading={isLoadig} onClick={handleClick}>
            <GoTrashcan /> 
        </Button>
        {/* If there is an error, print out a div that says: error deleting user */}
        {error && <div>Error Deleting User...</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            CONTENT!!!!
        </ExpandablePanel>
    );      
};

export default UsersListItem;

