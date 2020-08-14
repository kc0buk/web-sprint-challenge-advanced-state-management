import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from "./App";
import AddSmurf from './AddSmurf'
import { smurfReducer } from '../reducers/smurfReducer'

const store = createStore(smurfReducer)

const smurfs = [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]

test('Component renders without error', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>)
    
    const header = screen.getByText(/SMURFS/i)
    expect(header).toBeInTheDocument()
})

test('Form inputs work', () => {
    render(
        <Provider store={store}>
            <AddSmurf />
        </Provider>)

    const nameInput = screen.getByLabelText(/name/i)
    fireEvent.change(nameInput, { target: {value: 'Farmer Smurf'} })
    expect(screen.getByDisplayValue(/Farmer Smurf/i)).toBeInTheDocument()

    const ageInput = screen.getByLabelText(/age/i)
    fireEvent.change(ageInput, { target: {value: '900'} })
    expect(screen.getByDisplayValue(/900/i)).toBeInTheDocument()

    const heightInput = screen.getByLabelText(/height/i)
    fireEvent.change(heightInput, { target: {value: '37cm'} })
    expect(screen.getByDisplayValue(/37cm/i)).toBeInTheDocument()

})