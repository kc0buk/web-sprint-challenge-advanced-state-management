import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import "./index.css";
import App from "./components/App";
import { smurfReducer } from './reducers/smurfReducer'

// Global state will be store in redux store, initial state will live in smurfReducer
/* State will have the following shape:
    smurfs: [ {...}, {...}, {...} ], // Holds the array of smurf objects
        //each smurf object has the following shape
        {
            "name": "Brainey",
            "age": 200,
            "height": "5cm",
            "id": 0
        }
    isLoading: false, // Handles loading screen or not
    error: '', // Holds error message from API
*/

// Smurf state will be needed to render a card for each result
// isLoading and error states will be needed for the homepage to determine global app state, (e.g. loading, display data, error)

// Smurf get request will live in hompage component
// addSmurf post request will live in form component

const store = createStore(smurfReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("root"));
