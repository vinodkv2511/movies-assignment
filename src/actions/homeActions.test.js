import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './homeActions'
import fetchMock from 'fetch-mock'
import consts, { url_constants as url_consts, action_constants } from '../constants'

const mockStore = configureMockStore([thunk])

describe('Cast Actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    let dummyMovies = [{ name: "Dummy" }]

    it(" Should return GET_POPULAR_MOVIES_SUCCESS with payload", () => {
        fetchMock.getOnce("begin:https://", {
            body: dummyMovies
        })

        const store = mockStore({
            home: {
                activeTab: consts.tabs.POPULAR,
                popularMovies: [],
                popularMoviesCurrentPage: 1,
                trendingMovies: [],
                trendingMoviesCurrentPage: 1,
                searchKeyword: "",
                searchMoviesCurrentPage: 1,
                searchMovies: []
            }
        })

        store.dispatch(actions.getPopularMovies(150)).then(() => {
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_POPULAR_MOVIES_SUCCESS,
                payload: dummyMovies
            }])
        })

    })

    it("Should return GET_POPULAR_MOVIES_SUCCESS ", () => {
        expect(actions.getPopularMoviesSuccess("Dummy")).toEqual({
            type: action_constants.GET_POPULAR_MOVIES_SUCCESS,
            payload: "Dummy"
        })
    })

    it("Should return GET_POPULAR_MOVIES_FAILURE ", () => {
        expect(actions.getPopularMoviesFailure("Error")).toEqual({
            type: action_constants.GET_POPULAR_MOVIES_FAILURE,
            payload: "Error"
        })
    })

    it(" Should return GET_TRENDING_MOVIES_SUCCESS with payload", () => {
        fetchMock.getOnce("begin:https://", {
            body: dummyMovies
        })

        const store = mockStore({
            home: {
                activeTab: consts.tabs.POPULAR,
                popularMovies: [],
                popularMoviesCurrentPage: 1,
                trendingMovies: [],
                trendingMoviesCurrentPage: 1,
                searchKeyword: "",
                searchMoviesCurrentPage: 1,
                searchMovies: []
            }
        })

        store.dispatch(actions.getTrendingMovies(150, "day")).then(() => {
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_TRENDING_MOVIES_SUCCESS,
                payload: dummyMovies
            }])
        })

    })

    it("Should return GET_TRENDING_MOVIES_SUCCESS ", () => {
        expect(actions.getTrendingMoviesSuccess("Dummy")).toEqual({
            type: action_constants.GET_TRENDING_MOVIES_SUCCESS,
            payload: "Dummy"
        })
    })

    it("Should return GET_TRENDING_MOVIES_FAILURE ", () => {
        expect(actions.getTrendingMoviesFailure("Error")).toEqual({
            type: action_constants.GET_TRENDING_MOVIES_FAILURE,
            payload: "Error"
        })
    })


    it(" Should return GET_SEARCH_MOVIES_SUCCESS with payload", () => {
        fetchMock.getOnce("begin:https://", {
            body: dummyMovies
        })

        const store = mockStore({
            home: {
                activeTab: consts.tabs.POPULAR,
                popularMovies: [],
                popularMoviesCurrentPage: 1,
                trendingMovies: [],
                trendingMoviesCurrentPage: 1,
                searchKeyword: "",
                searchMoviesCurrentPage: 1,
                searchMovies: []
            }
        })

        store.dispatch(actions.getSearchMovies("key", 150)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: action_constants.SEARCH_KEYWORD_CHANGED,
                    payload: "key"
                }, 
                {
                    type: action_constants.GET_SEARCH_MOVIES_SUCCESS,
                    payload: dummyMovies
                }
            ])
        })

    })

    it("Should return GET_SEARCH_MOVIES_SUCCESS ", () => {
        expect(actions.getSearchMoviesSuccess("Dummy")).toEqual({
            type: action_constants.GET_SEARCH_MOVIES_SUCCESS,
            payload: "Dummy"
        })
    })

    it("Should return GET_SEARCH_MOVIES_FAILURE ", () => {
        expect(actions.getSearchMoviesFailure("Error")).toEqual({
            type: action_constants.GET_SEARCH_MOVIES_FAILURE,
            payload: "Error"
        })
    })

})