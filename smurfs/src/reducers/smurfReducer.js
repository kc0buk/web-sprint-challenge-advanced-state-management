export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                smurfs: [],
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                smurfs:action.payload,
                isLoaing: false,
                error: ''
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                isLoaing: false,
                error: action.payload
            }
        default:
            return state
    }
}