import constants, {action_constants, } from '../../constants'

const initialState = {
    activeTab: constants.tabs.POPULAR,
    popularMovies: [],
    popularMoviesCurrentPage: 1,
    trendingMovies: [],
    trendingMoviesCurrentPage: 1,
    searchKeyword: "",
    searchMoviesCurrentPage: 1,
    searchMovies: []
}

const getPageLimit = (limit) => {
    return limit < constants.stringConstants.PAGINATION_API_LIMIT ? limit : constants.stringConstants.PAGINATION_API_LIMIT;
} 

const homeReducer = (state= initialState, action) => {
    let newState = {}
    switch (action.type) {
        case action_constants.CHANGE_TAB:
            newState = {...state}
            newState.activeTab = action.payload
            break
        case action_constants.GET_POPULAR_MOVIES_SUCCESS:
            newState = {...state}
            newState.popularMovies = [...action.payload.results]
            newState.popularMoviesCurrentPage = action.payload.page
            newState.popularMoviesPageCount = getPageLimit(action.payload.total_pages);
            break
        case action_constants.GET_POPULAR_MOVIES_FAILURE:
            newState = {...state}
            newState.popularMovies = []
            break
        case action_constants.GET_TRENDING_MOVIES_SUCCESS:
            newState = {...state}
            newState.trendingMovies = [...action.payload.results]
            newState.trendingMoviesCurrentPage = action.payload.page
            newState.trendingMoviesPageCount = getPageLimit(action.payload.total_pages)
            break
        case action_constants.GET_TRENDING_MOVIES_FAILURE:
            newState = {...state}
            newState.trendingMovies = []
            break
        case action_constants.SEARCH_KEYWORD_CHANGED:
            newState = {...state}
            newState.searchKeyword = action.payload
            break
        case action_constants.GET_SEARCH_MOVIES_SUCCESS:
            newState = {...state}
            newState.searchMovies = [...action.payload.results]
            newState.searchMoviesCurrentPage = action.payload.page
            newState.searchMoviesPageCount = getPageLimit(action.payload.total_pages)
            break
        case action_constants.GET_SEARCH_MOVIES_FAILURE:
            console.log(action.payload)
            newState = {...state}
            newState.searchMovies= []
            newState.searchMoviesCurrentPage = 1
            newState.searchMoviesPageCount = null
            break
        default:
            newState = state
            break
    }
return newState;
}

export default homeReducer;