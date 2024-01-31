
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk (thunk) {
    const [isLoadig, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Accessing to the dispatch function inside of our hook.
    const dispatch = useDispatch(); 
    // the "runThunk" function is going to run our thunk and dispatch it and update the isLoading and error state.
    const runThunk = useCallback((arg) => {
         // Updating "setIsLoadingUsers" state to be true when fetching our list of users. 
        setIsLoading(true);
        dispatch(thunk(arg))
        .unwrap() // ".unwrap" gives us a new promise back. The promise we get back going to follow the conventional rules.
        .catch(error => setError(error))
        .finally(() => setIsLoading(false)); // Change back to false when the request is completed. Hiding the spinner 
    }, [dispatch, thunk]);
    return [runThunk, isLoadig, error]
};

