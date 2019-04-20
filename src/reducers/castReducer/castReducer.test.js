import castDetailsReducer from './castReducer'
import {action_constants} from '../../constants'

const initState = {
    cast: {},
    movies: []
}

describe("Cast details reducer", () => {
    it("Should handle undefined state and return initial state ", () => {
        expect(castDetailsReducer(undefined, {})).toEqual({
            cast: {},
            movies: []
        })
    })
    it("should handle GET_CAST_DETAILS_SUCCESS", ()=> {
        expect(castDetailsReducer(initState, {
            type:action_constants.GET_CAST_DETAILS_SUCCESS,
            payload: "dummyPayload"
        })).toEqual({
            ...initState,
            cast: "dummyPayload"
        })
    })
    it("should handle GET_MOVIES_OF_CAST_SUCCESS", ()=> {
        expect(castDetailsReducer(initState, {
            type:action_constants.GET_MOVIES_OF_CAST_SUCCESS,
            payload: {cast: "dummyPayload"}
        })).toEqual({
            ...initState,
            movies: "dummyPayload"
        })
    })
    it("should handle CLEAR_CAST_AND_MOVIES_OF_CAST", ()=> {
        expect(castDetailsReducer(initState, {
            type: action_constants.CLEAR_CAST_AND_MOVIES_OF_CAST
        })).toEqual({
            ...initState
        })
    })



})