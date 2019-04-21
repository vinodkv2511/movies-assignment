import { action_constants } from '../constants'
import { getPopularMovies as popularService, getTrendingMovies as trendingService, getSearchMovies as searchService } from '../services/homeService/homeService'


const changeTab = (tabName) => {
    return {
        type: action_constants.CHANGE_TAB,
        payload: tabName
    };
}

const getPopularMovies = (page) => {
    return dispatch =>
        popularService(page)
            .then(res => res.json())
            .then(data => dispatch(getPopularMoviesSuccess(data)))
            .catch(err => dispatch(getPopularMoviesFailure(err)))

}


const getPopularMoviesSuccess = (data) => {
    return {
        type: action_constants.GET_POPULAR_MOVIES_SUCCESS,
        payload: data
    }
}


const getPopularMoviesFailure = (error) => {
    return {
        type: action_constants.GET_POPULAR_MOVIES_FAILURE,
        payload: error
    }
}

const getTrendingMovies = (page, timeWindow) => {
    return dispatch =>
        trendingService(page, timeWindow)
            .then(res => res.json())
            .then(data => dispatch(getTrendingMoviesSuccess(data)))
            .catch(err => dispatch(getTrendingMoviesFailure(err)))

}


const getTrendingMoviesSuccess = (data) => {
    return {
        type: action_constants.GET_TRENDING_MOVIES_SUCCESS,
        payload: data
    }
}


const getTrendingMoviesFailure = (error) => {
    return {
        type: action_constants.GET_TRENDING_MOVIES_FAILURE,
        payload: error
    }
}



const getSearchMovies = (keyword, page) => {
    return dispatch => {
        dispatch(setSearchKeyword(keyword))
        return searchService(keyword, page)
            .then(res => res.json())
            .then(data => dispatch(getSearchMoviesSuccess(data)))
            .catch(err => dispatch(getSearchMoviesFailure(err)))
    }

}

const setSearchKeyword = (keyword) => {
    return {
        type: action_constants.SEARCH_KEYWORD_CHANGED,
        payload: keyword
    }
}


const getSearchMoviesSuccess = (data) => {
    return {
        type: action_constants.GET_SEARCH_MOVIES_SUCCESS,
        payload: data
    }
}


const getSearchMoviesFailure = (error) => {
    return {
        type: action_constants.GET_SEARCH_MOVIES_FAILURE,
        payload: error
    }
}



export {
    changeTab,
    getPopularMovies,
    getPopularMoviesSuccess,
    getPopularMoviesFailure,
    getTrendingMovies,
    getTrendingMoviesSuccess,
    getTrendingMoviesFailure,
    getSearchMovies,
    getSearchMoviesSuccess,
    getSearchMoviesFailure
}