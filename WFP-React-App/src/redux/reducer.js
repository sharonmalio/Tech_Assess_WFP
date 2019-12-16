import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions'

const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_DATA_SUCCESS:
        return {
            ...state,
            data: payload.results
        }

    case FETCH_DATA_FAILURE:
        return {
            ...state,
            data: []
        }
    
    

    default:
        return state
    }
}
