import React, { useEffect } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../reducers/smurfReducer'
import Home from './Home'
import "./App.css";

const App = () => {
  const state = useSelector(state => state)
  // console.log(state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_DATA_START })
      axios
        .get('http://localhost:3333/smurfs')
          .then( res => {
            // console.log(res)
            dispatch({ 
              type: FETCH_DATA_SUCCESS, 
              payload: res.data 
            })
          })
          .catch( err => {
            console.log(err)
            dispatch({ 
              type: FETCH_DATA_ERROR,
              payload: err 
            })
          })
  }, [])

    return (
      <div className="App">
        <header>
        <h1>SMURFS! W/Redux</h1>
        </header>
        <main>
        {state.isLoading ? <h4>Loading data...please wait...</h4> : null}
        {state.error ? (
          <p style={{ color: "red" }}>
          Houston, we have a problem! Please try again.
          </p>
          ) : null}
        {state.smurfs.length > 0 ? <Home /> : null}
        </main>
      </div>
    );
}

export default App;
