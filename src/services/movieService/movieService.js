import { url_constants as consts } from '../../constants'
import { add_query_params } from '../serviceUtils'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const getMovieService = (movie_id) => {
    
    let query_params = [
        {
            key: "api_key",
            value: API_KEY
        }
    ]

    let url = consts.API_BASE+consts.API_MOVIE_DETAILS+movie_id
    url = add_query_params(url, query_params)

    return fetch(url)
}

export const getCastService = (movie_id) => {
    
    let query_params = [
        {
            key: "api_key",
            value: API_KEY
        }
    ]

    let url = consts.API_BASE+consts.API_MOVIE_DETAILS+movie_id+consts.API_MOVIE_CAST
    url = add_query_params(url, query_params)

    return fetch(url)
}