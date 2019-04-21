import { action_constants } from '../constants'

import { getCastDetailsService, getMoviesOfCast as getMoviesOfCastService } from '../services/castService/castService'

const getCastDetails = (cast_id) => {
    return dispatch => getCastDetailsService(cast_id)
        .then(res => res.json())
        .then(data => dispatch(getCastDetailsSuccess(data)))
        .catch(err => dispatch(getCastDetailsFailure(err)))
}

const getCastDetailsSuccess = (cast) => {
    return {
        type: action_constants.GET_CAST_DETAILS_SUCCESS,
        payload: cast
    }
}

const getCastDetailsFailure = (error) => {
    return {
        type: action_constants.GET_CAST_DETAILS_FAILURE,
        payload: error
    }
}

const getMoviesOfCast = (cast_id) => {
    return dispatch => getMoviesOfCastService(cast_id)
        .then(res => res.json())
        .then(data => dispatch(getMoviesOfCastSuccess(data)))
        .catch(err => dispatch(getMoviesOfCastFailure(err)))
}

const getMoviesOfCastSuccess = (movies) => {
    return {
        type: action_constants.GET_MOVIES_OF_CAST_SUCCESS,
        payload: movies
    }
}

const getMoviesOfCastFailure = (error) => {
    return {
        type: action_constants.GET_MOVIES_OF_CAST_FAILURE,
        payload: error
    }
}

const clearCastAndMoviesOfCast = () => {
    return {
        type: action_constants.CLEAR_CAST_AND_MOVIES_OF_CAST
    }
    
}


export { 
    getCastDetails, 
    getCastDetailsSuccess, 
    getCastDetailsFailure, 
    getMoviesOfCast,
    getMoviesOfCastSuccess,
    getMoviesOfCastFailure, 
    clearCastAndMoviesOfCast }