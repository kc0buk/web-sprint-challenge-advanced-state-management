import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_ERROR } from '../reducers/smurfReducer'

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const AddSmurf = () => {
    const [values, handleChanges, resetForm] = useForm(initialFormValues)
    const dispatch = useDispatch()

    const postNewSmurf = newSmurf => {
        dispatch({ type: ADD_SMURF_START })
            axios.post('http://localhost:3333/smurfs', newSmurf)
            .then( res => {
                dispatch({
                    type: ADD_SMURF_SUCCESS,
                    payload: res.data
                })
            })
            .catch( err => {
                console.log(err)
                dispatch({ 
                  type: ADD_SMURF_ERROR,
                  payload: err 
                })
              })
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newSmurf = {
            name: values.name.trim(),
            age: values.age.trim(),
            height: values.height.trim()
        }
        postNewSmurf(newSmurf)
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5>Add New Smurf</h5>
            <label>
                Name:&nbsp;
                <input 
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={handleChanges}
                />
            </label>
            <label>
                Age:&nbsp;
                <input 
                    name='age'
                    type='number'
                    value={values.age}
                    onChange={handleChanges}
                />
            </label>
            <label>
                Height:&nbsp;
                <input 
                    name='height'
                    type='text'
                    value={values.height}
                    onChange={handleChanges}
                />
                <button>Add Smurf</button>
            </label>
        </form>
    )
}

export default AddSmurf

