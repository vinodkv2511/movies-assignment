import { action_constants } from '../../constants'

const initialState = {
    cast: {},
    movies: []
}


const castDetailsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case action_constants.GET_CAST_DETAILS_SUCCESS:
            newState = {
                ...state,
                cast: action.payload
            }
            break
        case action_constants.GET_CAST_DETAILS_FAILURE: //TODO Call failures need to be handled gracefully
            newState = {
                ...state
            }
            break
        case action_constants.GET_MOVIES_OF_CAST_SUCCESS:
            newState = {
                ...state,
                movies: action.payload.cast
            }
            break
        case action_constants.GET_MOVIES_OF_CAST_FAILURE: //TODO Call failures need to be handled gracefully
            newState = {
                ...state
            }
            break
        case action_constants.CLEAR_CAST_AND_MOVIES_OF_CAST:
            newState = {
                movies: [],
                cast: {}
            }
            break
        default:
            newState = state
            break
    }
    return newState;
}


export default castDetailsReducer