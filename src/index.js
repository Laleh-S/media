//! Notes
// How to wire up our Redux store to the React side of our application: 
// 1- Import 'Provider' 
// 2- Import 'store'
// 3- Wrap 'provider' around '<app />'
// 4- Then provide our store to the provider component as a prop called store.

import "./index.css"
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";  // step 1
import { store } from "./store"; // step 2
import App from "./App";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    // step 3
    <Provider store={store}> {/* step 4 */}
        <App />
    </Provider>   
);

