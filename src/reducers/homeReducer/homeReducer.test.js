import reducer from './homeReducer'
import consts, { action_constants } from '../../constants'

const initialState = {
    activeTab: consts.tabs.POPULAR,
    popularMovies: [],
    popularMoviesCurrentPage: 1,
    trendingMovies: [],
    trendingMoviesCurrentPage: 1,
    searchKeyword: "",
    searchMoviesCurrentPage: 1,
    searchMovies: []
}

describe('home reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                ...initialState
            }
        )
    })

    it("Should handle CHANGE_TAB", () => {
        expect(reducer(undefined, {
            type: action_constants.CHANGE_TAB,
            payload: consts.tabs.TRENDING
        })
        ).toEqual({
            ...initialState,
            activeTab: consts.tabs.TRENDING
        })
    })

    it("Should handle GET_POPULAR_MOVIES_SUCCESS", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_POPULAR_MOVIES_SUCCESS,
            payload: {
                results: ["results"],
                page: 1,
                total_pages: 1
            }
        })).toEqual({
            ...initialState,
            popularMovies: ["results"],
            popularMoviesCurrentPage: 1,
            popularMoviesPageCount: 1
        })
    })

    it("Should handle GET_POPULAR_MOVIES_FAILURE", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_POPULAR_MOVIES_FAILURE,
            payload: "Error"
        })).toEqual({
            ...initialState,
            popularMovies: []
        })
    })

    it("Should handle GET_TRENDING_MOVIES_SUCCESS", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_TRENDING_MOVIES_SUCCESS,
            payload: {
                results: ["results"],
                page: 1,
                total_pages: 1
            }
        })).toEqual({
            ...initialState,
            trendingMovies: ["results"],
            trendingMoviesCurrentPage: 1,
            trendingMoviesPageCount: 1
        })
    })

    it("Should handle GET_TRENDING_MOVIES_FAILURE", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_TRENDING_MOVIES_FAILURE,
            payload: "Error"
        })).toEqual({
            ...initialState,
            trendingMovies: []
        })
    })

    it("Should handle SEARCH_KEYWORD_CHANGED", () => {
        expect(reducer(initialState, {
            type: action_constants.SEARCH_KEYWORD_CHANGED,
            payload: "NEW SEARCH"
        })).toEqual({
            ...initialState,
            searchKeyword: "NEW SEARCH"
        })
    })

    it("Should handle GET_SEARCH_MOVIES_SUCCESS", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_SEARCH_MOVIES_SUCCESS,
            payload: {
                results: ["results"],
                page: 1,
                total_pages: 1
            }
        })).toEqual({
            ...initialState,
            searchMovies: ["results"],
            searchMoviesCurrentPage: 1,
            searchMoviesPageCount: 1
        })
    })

    it("Should handle GET_SEARCH_MOVIES_FAILURE", () => {
        expect(reducer(initialState, {
            type: action_constants.GET_SEARCH_MOVIES_FAILURE,
            payload: "error"
        })).toEqual({
            ...initialState,
            searchMovies: [],
            searchMoviesCurrentPage: 1,
            searchMoviesPageCount: null
        })
    })



})

