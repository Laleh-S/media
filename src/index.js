//! Notes
// To wire up our Redux store to the React side of our application, 
// 1- Import 'Provider' 
// 2- Import 'store'
// 3- Wrap 'provider' around '<app />'
// 4- Then provide our store to the provider component as a prop called store.

import "./index.css"
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>   
);

// We want to show that the user with a particular name has some albums that belong to them. Example: 
// userA has 2 albums, album1 and album2. or userB has 3 albums, album3, album4, album5.
// The same thing applies for our photos. So photos conceptually belong to one single album. Example: 
// album1 has 3 photos, photo1, photo2, photo3. So inside of our code, inside of both our Redux store and  JSON server, We 
// need to somehow make these relationships clear.

// So in no scenario ever are we ever gonna try to make a request from inside of a reducer function. Reducers should always 
// be a hundred percent synchronous. So they should always take in some state and action, make an update to state, and that's it.
// They're never gonna have any API calls, no promises, no Async await, nothing like that.