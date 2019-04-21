import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './movieActions'
import fetchMock from 'fetch-mock'
import {url_constants as consts, action_constants} from '../constants'

const mockStore = configureMockStore([thunk])

describe("Movie Actions ", ()=>{
    afterEach(()=>{
        fetchMock.restore()
    })

    let dummyMovie = { name:"Dummy"}


    it(" Should return GET_MOVIE_DETAILS_SUCCESS with payload", ()=> {
        let url = "https://api.themoviedb.org/3/movie/287?api_key="+process.env.REACT_APP_TMDB_API_KEY

        fetchMock.getOnce(url, {
            body : dummyMovie
        })

        const store = mockStore({ cast: { cast: [], movie: {}}})

        store.dispatch(actions.getMovie(287)).then(()=>{
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_MOVIE_DETAILS_SUCCESS,
                payload: dummyMovie
            }])
        })
    })


    it("Should return GET_MOVIE_DETAILS_SUCCESS", ()=> {
        expect(actions.getMovieSuccess("Dummy")).toEqual({
            type: action_constants.GET_MOVIE_DETAILS_SUCCESS,
            payload: "Dummy"
        })
    })

    it("Should return GET_MOVIE_DETAILS_FAILURE", ()=> {
        expect(actions.getMovieFailure("Error")).toEqual({
            type: action_constants.GET_MOVIE_DETAILS_FAILURE,
            payload: "Error"
        })
    })

    it("Should return GET_CAST_OF_MOVIE_SUCCESS", ()=> {
        let url = "https://api.themoviedb.org/3/movie/287/credits?api_key="+process.env.REACT_APP_TMDB_API_KEY
        let dummyCast = [{name: "dummy"}]

        fetchMock.getOnce(url, {
            body: dummyCast
        })

        const store = mockStore({ cast: { cast: [], movie: {}}})

        store.dispatch(actions.getCast(287)).then(()=>{
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_CAST_OF_MOVIE_SUCCESS,
                payload: dummyCast
            }])
        })        

    
    })

    it("Should return GET_CAST_OF_MOVIE_SUCCESS", ()=>{
        expect(actions.getCastSuccess("Dummy")).toEqual({
            type: action_constants.GET_CAST_OF_MOVIE_SUCCESS,
            payload: "Dummy"
        })
    })

    it("Should return GET_CAST_OF_MOVIE_FAILURE", ()=>{
        expect(actions.getCastFailure("Error")).toEqual({
            type: action_constants.GET_CAST_OF_MOVIE_FAILURE,
            payload: "Error"
        })
    })


    it("Should return CLEAR_MOVIE_AND_CAST_OF_MOVIE", ()=>{
        expect(actions.clearMovieAndCast()).toEqual({
            type: action_constants.CLEAR_MOVIE_AND_CAST_OF_MOVIE
        })
    })


})