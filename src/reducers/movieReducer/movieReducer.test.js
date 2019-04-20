import movieDetailsReducer from './movieReducer'
import {action_constants} from '../../constants'

const initState = {
    movie: {},
    cast: []
}

describe("Movie details reducer ", ()=> {
    it("Should return initial state ", ()=>{
        expect(movieDetailsReducer(undefined, {})).toEqual({
            movie:{},
            cast:[]
        })
    })

    it("Should handle GET_MOVIE_DETAILS_SUCCESS", ()=> {
        expect(movieDetailsReducer(initState, {
            type: action_constants.GET_MOVIE_DETAILS_SUCCESS,
            payload: "Dummy Payload"
        })).toEqual({
            ...initState,
            movie: "Dummy Payload"
        })
    })

    it("Should handle GET_MOVIE_DETAILS_FAILURE", ()=> {
        expect(movieDetailsReducer(initState, {
            type: action_constants.GET_MOVIE_DETAILS_FAILURE,
            payload: "error"
        })).toEqual({
            ...initState
        })
    })

    it("Should handle GET_CAST_OF_MOVIE_SUCCESS and update cast in movies with paylaod.cast ", ()=> {
        expect(movieDetailsReducer(initState, {
            type: action_constants.GET_CAST_OF_MOVIE_SUCCESS,
            payload : { cast: ["Dummy Cast"] }
        })).toEqual({
            ...initState,
            cast: ["Dummy Cast"]
        })
    })

    it("Should handle GET_CAST_OF_MOVIE_FAILURE", ()=> {
        expect(movieDetailsReducer(initState, {
            type: action_constants.GET_CAST_OF_MOVIE_FAILURE,
            payload: "error"
        })).toEqual({
            ...initState
        })
    })

    it("Should clear and reset state on action CLEAR_MOVIE_AND_CAST_OF_MOVIE", () => {
        expect(movieDetailsReducer({movie: {name: "Dummy"}}, {
            type: action_constants.CLEAR_MOVIE_AND_CAST_OF_MOVIE
        })).toEqual({
            ...initState
        })
    })


}) 