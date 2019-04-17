import { action_constants } from '../constants'

import {getMovieService, getCastOfMovieService} from '../services/movieService/movieService'

const getMovie = (movie_id) => {
    return dispatch => getMovieService(movie_id)
        .then(res => res.json())
        .then(data => dispatch(getMovieSuccess(data)))
        .catch(err => dispatch(getMovieFailure(err)))
}

const getMovieSuccess = (movie) => {
    return {
        type: action_constants.GET_MOVIE_DETAILS_SUCCESS,
        payload: movie
    }
}

const getMovieFailure = (error) => {
    return {
        type: action_constants.GET_MOVIE_DETAILS_FAILURE,
        payload: error
    }
}

const getCast = (movie_id) => {
    return dispatch => getCastOfMovieService(movie_id)
        .then(res => res.json())
        .then(data => dispatch(getCastSuccess(data)))
        .catch(err => dispatch(getCastFailure(err)))
}

const getCastSuccess = (cast) => {
    return {
        type: action_constants.GET_CAST_OF_MOVIE_SUCCESS,
        payload: cast
    }
}

const getCastFailure = (error) => {
    return {
        type: action_constants.GET_CAST_OF_MOVIE_FAILURE,
        payload: error
    }
}

const clearMovieAndCast = () => {
    return {
        type: action_constants.CLEAR_MOVIE_AND_CAST_OF_MOVIE
    }
    
}




export { getMovie, getCast, clearMovieAndCast }