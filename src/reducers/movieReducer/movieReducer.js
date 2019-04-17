import consts, {action_constants} from '../../constants'

const initialState = {
    movie: {},
    cast: []
}


const movieDetailsReducer = (state= initialState, action) => {
    let newState = {}
    switch (action.type) {
        case action_constants.GET_MOVIE_DETAILS_SUCCESS:
            newState = {
                ...state,
                movie: action.payload
            }
            break
        case action_constants.GET_MOVIE_DETAILS_FAILURE:
            newState = {
                ...state
            }
            break
        case action_constants.GET_CAST_OF_MOVIE_SUCCESS:
            newState = {
                ...state,
                cast: action.payload.cast
            }
            break
        case action_constants.CLEAR_MOVIE_AND_CAST_OF_MOVIE:
            newState = {
                movie:{},
                cast: []
            }
            break
        default:
            newState = state
            break
    }
return newState;
}


export default movieDetailsReducer