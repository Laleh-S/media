import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../store";

function UsersList () {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []); // runs automatically the first time our component is rendered onto the page when we put an array as second argument

    if (isLoading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>Error fetching data...</div>
    }

    return <div></div>

    
};

export default UsersList;