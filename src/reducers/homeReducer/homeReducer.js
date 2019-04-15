import consts, {action_constants} from '../../constants'

const initialState = {
    activeTab: consts.tabs.POPULAR,
    popularMovies: [],
    popularMoviesCurrentPage: 1,
    trendingMovies: [],
    trendingMoviesCurrentPage: 1,
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
            newState.popularMoviesPageCount = action.payload.total_pages
            break
        case action_constants.GET_POPULAR_MOVIES_FAILURE:
            newState = {...state}
            newState.popularMovies = []
            break
        case action_constants.GET_TRENDING_MOVIES_SUCCESS:
            newState = {...state}
            newState.trendingMovies = [...action.payload.results]
            newState.trendingMoviesCurrentPage = action.payload.page
            newState.trendingMoviesPageCount = action.payload.total_pages
            break
        case action_constants.GET_TRENDING_MOVIES_FAILURE:
            newState = {...state}
            newState.trendingMovies = []
            break
        case action_constants.SEARCH:
            newState = state
            break   
        default:
            newState = state
            break
    }
return newState;
}

export default homeReducer;